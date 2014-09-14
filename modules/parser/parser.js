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
    if (promiseland._hasModule({ hashStr: "2f39ad220774aa94ba866fbd530eca20" })){ return promiseland._getModule("2f39ad220774aa94ba866fbd530eca20"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "2f39ad220774aa94ba866fbd530eca20", "module": PL$1, promising: true });
var PL$17/*promiseland*/;try{PL$17/*promiseland*/ = promiseland;}catch(e){};
var PL$25/*Object*/;try{PL$25/*Object*/ = Object;}catch(e){};
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
var PL$28/*Map*/;
var PL$33/*VariableNames*/;
var PL$34/*mixin*/;
var PL$32/*identifierName*/;
var PL$40/*checkIsFunction*/;
var PL$41/*findPromises*/;
var PL$42/*checkPromising*/;
var PL$43/*addExtraToPar*/;
var PL$46/*getExtraFromPar*/;
var PL$47/*_Result*/;
var PL$49/*CodeParser*/;
var PL$279/*loaderStr*/;
var PL$283/*promiselandRequireStr*/;
var PL$284/*callbackRequireStr*/;
var PL$285/*loaderEndStr*/;
var PL$286/*createHeader*/;
var PL$288/*createFooter*/;
var PL$289/*parser*/;
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
PL$28/*Map*/ = (function(){var PL$22/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(){
;
this["map"] = {};;
;
}),
"set": (function(PL$23/*key*/, PL$24/*value*/){
;
this["map"][PL$23/*key*/] = PL$24/*value*/;;
;
}),
"get": (function(PL$23/*key*/){
;
if(PL$25/*Object*/["prototype"]["hasOwnProperty"]["call"](this["map"], PL$23/*key*/)){
return this["map"][PL$23/*key*/];;
};
;
;
}),
"getArray": (function(){
var PL$26/*res*/;
var PL$27/*n*/;
;
PL$26/*res*/ = [];
PL$27/*n*/;
for(PL$27/*n*/ in this["map"]){PL$26/*res*/["push"]({"key": PL$27/*n*/,
"value": this["map"][PL$27/*n*/]});;
};
;
return PL$26/*res*/;;
;
})}, [], PL$22/*inherited*/);
return res; })();PL$28/*Map*/;;
PL$33/*VariableNames*/ = (function(){var PL$29/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$30/*par*/){
;
this["givenNames"] = (PL$30/*par*/["givenNames"] || new PL$28/*Map*/());;
this["getUniqueName"] = PL$30/*par*/["getUniqueName"];;
;
}),
"get": (function(PL$31/*name*/){
var PL$27/*n*/;
;
PL$27/*n*/ = PL$32/*identifierName*/(PL$31/*name*/);
if((PL$27/*n*/ === "undefined")){
return PL$27/*n*/;;
};
;
if(! this["givenNames"]["get"](PL$27/*n*/)){
this["givenNames"]["set"](PL$27/*n*/, (((this["getUniqueName"]() + "/*") + PL$27/*n*/) + "*/"));;
};
;
return this["givenNames"]["get"](PL$27/*n*/);;
;
})}, [], PL$29/*inherited*/);
return res; })();PL$33/*VariableNames*/;;
PL$34/*mixin*/ = (function(){
var PL$35/*t*/;
var PL$37/*i*/;
var PL$38/*m*/;
var PL$39/*p*/;
var PL$36/*arguments*/ = arguments;
;
PL$35/*t*/ = PL$36/*arguments*/[0];
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 1;(PL$37/*i*/ < PL$36/*arguments*/["length"]);++PL$37/*i*/){{PL$38/*m*/ = PL$36/*arguments*/[PL$37/*i*/];
for(PL$39/*p*/ in PL$38/*m*/){PL$35/*t*/[PL$39/*p*/] = PL$38/*m*/[PL$39/*p*/];;
};
;
}};
;
return PL$35/*t*/;;
;
});
PL$32/*identifierName*/ = (function(PL$30/*par*/){
;
if((typeof PL$30/*par*/ == "string")){
return PL$30/*par*/;;
};
;
if((PL$30/*par*/["type"] == "Literal")){
return PL$30/*par*/["value"];;
};
;
return PL$30/*par*/["name"];;
;
});
PL$40/*checkIsFunction*/ = (function(PL$30/*par*/){
;
if((((PL$30/*par*/["type"] == "FunctionExpression") || (PL$30/*par*/["type"] == "FunctionDeclaration")) || (PL$30/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
PL$41/*findPromises*/ = (function(PL$30/*par*/){
var PL$37/*i*/;
;
if((! PL$30/*par*/ || (typeof PL$30/*par*/ == "string"))){
return false;;
};
;
if(((PL$30/*par*/["type"] == "UnaryExpression") && ((PL$30/*par*/["operator"] == "*") || (PL$30/*par*/["operator"] == "require")))){
PL$30/*par*/["promising"] = true;;
};
;
if((PL$40/*checkIsFunction*/(PL$30/*par*/) && (PL$30/*par*/["promise"] == "*"))){
PL$30/*par*/["promising"] = true;;
};
;
PL$37/*i*/;
for(PL$37/*i*/ in PL$30/*par*/){if((PL$37/*i*/ == "_extrainfo")){
continue;;
};
;
if((PL$41/*findPromises*/(PL$30/*par*/[PL$37/*i*/]) && ! PL$40/*checkIsFunction*/(PL$30/*par*/[PL$37/*i*/]))){
PL$30/*par*/["promising"] = true;;
};
;
};
;
if(PL$30/*par*/["promising"]){
return true;;
};
;
return false;;
;
});
PL$42/*checkPromising*/ = (function(PL$30/*par*/){
;
if((! PL$30/*par*/ || (typeof PL$30/*par*/ == "string"))){
return false;;
};
;
if((typeof PL$30/*par*/["isPromising"] == "function")){
return PL$30/*par*/["isPromising"]();;
};
;
return (PL$30/*par*/["promising"] || PL$30/*par*/["isPromising"]);;
;
});
PL$43/*addExtraToPar*/ = (function(PL$30/*par*/, PL$44/*property*/, PL$45/*obj*/){
;
if(! PL$30/*par*/["_extrainfo"]){
PL$30/*par*/["_extrainfo"] = {};;
};
;
PL$30/*par*/["_extrainfo"][PL$44/*property*/] = PL$45/*obj*/;;
;
});
PL$46/*getExtraFromPar*/ = (function(PL$30/*par*/, PL$44/*property*/){
;
if(PL$30/*par*/["_extrainfo"]){
return PL$30/*par*/["_extrainfo"][PL$44/*property*/];;
};
;
;
});
__requireFun("./Result").then(PL$3(function(PL$48){PL$47/*_Result*/ = PL$48;
PL$49/*CodeParser*/ = (function(PL$30/*par*/){
var PL$50/*self*/;
var PL$37/*i*/;
var PL$244/*InheritedSystem*/;
;
PL$50/*self*/ = this;
this["toParse"] = PL$30/*par*/["toParse"];;
this["dynamicCode"] = PL$30/*par*/["dynamicCode"];;
this["hashStr"] = PL$30/*par*/["hashStr"];;
if(PL$30/*par*/["_locals"]){
for(PL$37/*i*/ in PL$30/*par*/["_locals"]){this[PL$37/*i*/] = PL$30/*par*/["_locals"][PL$37/*i*/];;
};
;
};
;
if(PL$30/*par*/["common"]){
this["common"] = PL$30/*par*/["common"];;

}else{
this["common"] = {"givenTypeNames": {},
"errors": [],
"uniquebasis": (PL$30/*par*/["uniquebasis"] || {"index": 1}),
"parsingConfig": PL$30/*par*/["parsingConfig"]};;
this["common"]["variableNames"] = new PL$33/*VariableNames*/({"getUniqueName": (function(PL$31/*name*/){
;
return PL$50/*self*/["getUniqueName"](PL$31/*name*/);;
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
this["types"] = PL$34/*mixin*/({}, PL$30/*par*/["types"]);;
if(! this["types"]["var"]){
this["types"]["var"] = {"name": "var",
"type": PL$18/*classSystem*/["getBuiltinType"]("var")};;
};
this["variables"] = PL$34/*mixin*/({}, PL$30/*par*/["variables"]);;
this["algorithmicCode"] = false;;
this["stack"] = (function(PL$51/*parStr*/){
var PL$52/*stackNameStr*/;
;
PL$52/*stackNameStr*/ = ("_stack_" + PL$51/*parStr*/);
if(! this[PL$52/*stackNameStr*/]){
this[PL$52/*stackNameStr*/] = [];;
};
;
this[PL$52/*stackNameStr*/]["push"](this[PL$51/*parStr*/]);;
;
});;
this["unstack"] = (function(PL$51/*parStr*/){
var PL$52/*stackNameStr*/;
;
PL$52/*stackNameStr*/ = ("_stack_" + PL$51/*parStr*/);
this[PL$51/*parStr*/] = this[PL$52/*stackNameStr*/]["pop"]();;
;
});;
this["_start"] = (function(){
var PL$53/*tempRes*/;
;
if(this["toParse"]){
if((this["toParse"]["type"] == "Program")){
PL$53/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
PL$53/*tempRes*/["push"](";");;
this["result"] = this["makeCompleteStatement"](PL$53/*tempRes*/);;

}else{
if(PL$40/*checkIsFunction*/(this["toParse"])){
this["functionRes"] = this["parseFunction"](this["toParse"]);;
this["result"] = this["makeCompleteStatement"](this["functionRes"]);;
};
};
;
};
;
;
});;
this["makeCompleteStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["setComplete"]();;
PL$26/*res*/["push"](PL$30/*par*/);;
return PL$26/*res*/;;
;
});;
this["makeCompleteStatementDynamic"] = (function(PL$30/*par*/){
var PL$54/*r*/;
var PL$55/*d*/;
;
PL$54/*r*/ = this["newResult"]();
PL$55/*d*/ = this["newResult"]();
PL$55/*d*/["push"](this["makeCompleteStatement"](PL$30/*par*/), undefined, {"stringEncode": true});;
PL$54/*r*/["push"]("\"");;
PL$54/*r*/["push"](PL$55/*d*/);;
PL$54/*r*/["push"]("\"");;
return PL$54/*r*/;;
;
});;
this["compareTypes"] = (function(PL$56/*par1*/, PL$57/*par2*/){
;
return (PL$56/*par1*/ === PL$57/*par2*/);;
;
});;
this["localVariables"] = {};;
this["addLocalVariable"] = (function(PL$30/*par*/, PL$58/*parParsed*/){
var PL$50/*self*/;
var PL$31/*name*/;
var PL$59/*newType*/;
var PL$60/*existing*/;
;
PL$50/*self*/ = this;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
if(this["localVariables"]["hasOwnProperty"](PL$31/*name*/)){
if((! PL$30/*par*/["type"] && ! PL$30/*par*/["typename"])){

}else{
PL$59/*newType*/ = (PL$30/*par*/["type"] || this["getType"](PL$30/*par*/["typename"], PL$58/*parParsed*/));
PL$60/*existing*/ = this["_getVariableType"](this["localVariables"][PL$31/*name*/]);
PL$18/*classSystem*/["definitionPromise"](PL$59/*newType*/)["then"]((function(PL$61/*type1*/){
;
PL$18/*classSystem*/["definitionPromise"](PL$60/*existing*/)["then"]((function(PL$62/*type2*/){
;
if(! PL$18/*classSystem*/["isSameType"](PL$61/*type1*/, PL$62/*type2*/)){
PL$50/*self*/["addError"](PL$58/*parParsed*/, PL$12/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"][PL$31/*name*/] = {"typename": PL$30/*par*/["typename"],
"type": PL$30/*par*/["type"],
"name": PL$31/*name*/};;
if((! PL$30/*par*/["typename"] && ! PL$30/*par*/["type"])){
this["localVariables"][PL$31/*name*/]["type"] = this["getProvisionalType"](PL$58/*parParsed*/);;
this["localVariables"][PL$31/*name*/]["needsResolving"] = true;;
};
;
};
;
if(PL$30/*par*/["parameter"]){
this["localVariables"][PL$31/*name*/]["parameter"] = PL$30/*par*/["parameter"];;
};
;
if(PL$30/*par*/["isFunction"]){
this["localVariables"][PL$31/*name*/]["function"] = PL$30/*par*/["function"];;
};
;
this["variables"][PL$31/*name*/] = this["localVariables"][PL$31/*name*/];;
;
});;
this["addLocalVariableTemporary"] = (function(PL$30/*par*/, PL$58/*parParsed*/){
var PL$50/*self*/;
var PL$31/*name*/;
var PL$63/*originalEntry*/;
var PL$64/*entry*/;
var PL$65/*resPs*/;
;
PL$50/*self*/ = this;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
PL$63/*originalEntry*/;
if(this["variables"]["hasOwnProperty"](PL$31/*name*/)){
PL$63/*originalEntry*/ = this["variables"][PL$31/*name*/];;
};
;
PL$64/*entry*/ = {"typename": PL$30/*par*/["typename"],
"type": PL$30/*par*/["type"],
"name": PL$31/*name*/};
if((! PL$30/*par*/["typename"] && ! PL$30/*par*/["type"])){
PL$64/*entry*/["type"] = this["getProvisionalType"](PL$58/*parParsed*/);;
PL$64/*entry*/["needsResolving"] = true;;
};
;
if(PL$30/*par*/["parameter"]){
PL$64/*entry*/["parameter"] = PL$30/*par*/["parameter"];;
};
;
if(PL$30/*par*/["isFunction"]){
PL$64/*entry*/["function"] = PL$30/*par*/["function"];;
};
;
PL$64/*entry*/["temporary"] = true;;
this["variables"][PL$31/*name*/] = PL$64/*entry*/;;
PL$65/*resPs*/ = new PL$16/*Promise*/();
(function(){
var PL$66 = new __Promise();
var PL$68 = function(code){ return function(res){ try{code(res);}catch(e){ PL$66.reject(e); }; }; };
var PL$69 = function(e){ PL$66.reject(e); };
var PL$71/*this*/ = this;
PL$68(function(){;
PL$65/*resPs*/.then(PL$68(function(PL$70){PL$70;;
if(PL$63/*originalEntry*/){
PL$71/*this*/["variables"][PL$31/*name*/] = PL$63/*originalEntry*/;;

}else{
delete PL$71/*this*/["variables"][PL$31/*name*/];;
};
;
PL$66.resolve(); return;;
}), PL$69);
;})();
return PL$66;
})();;
return PL$65/*resPs*/;;
;
});;
this["resolveFunctionType"] = (function(PL$30/*par*/, PL$72/*parsed*/){
var PL$31/*name*/;
var PL$64/*entry*/;
var PL$35/*t*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
PL$64/*entry*/ = this["localVariables"][PL$31/*name*/];
if(PL$64/*entry*/["needsResolving"]){
PL$64/*entry*/["needsResolving"] = false;;
PL$35/*t*/ = PL$64/*entry*/["type"];
PL$64/*entry*/["type"] = PL$30/*par*/["type"];;
this["resolveProvisional"](PL$35/*t*/, PL$30/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": PL$30/*par*/["name"],
"type": PL$30/*par*/["type"]}, PL$72/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(PL$58/*parParsed*/){
var PL$73/*type*/;
var PL$74/*ps*/;
;
if(! PL$58/*parParsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
PL$73/*type*/ = PL$18/*classSystem*/["_createProvisionalClass"]();
PL$74/*ps*/ = this["addError"](PL$58/*parParsed*/, PL$12/*errorMsg*/["unresolvedType"]);
PL$18/*classSystem*/["definitionPromise"](PL$73/*type*/)["then"]((function(){
;
PL$74/*ps*/["resolve"]();;
;
}));;
return PL$73/*type*/;;
;
});;
this["resolveProvisional"] = (function(PL$75/*parType*/, PL$76/*parResult*/){
;
return PL$18/*classSystem*/["_resolveProvisional"](PL$75/*parType*/, PL$76/*parResult*/);;
;
});;
this["_getVariableType"] = (function(PL$77/*parEntry*/){
;
if(PL$77/*parEntry*/["type"]){
return PL$77/*parEntry*/["type"];;
};
;
return this["getType"](PL$77/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(PL$78/*parName*/, PL$30/*par*/){
var PL$31/*name*/;
var PL$64/*entry*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$78/*parName*/);
this["_addUsedVariable"](PL$31/*name*/);;
if(this["variables"]["hasOwnProperty"](PL$31/*name*/)){
PL$64/*entry*/ = this["variables"][PL$31/*name*/];
return this["_getVariableType"](PL$64/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(PL$30/*par*/){
var PL$31/*name*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/);
if((PL$31/*name*/ === "undefined")){
return;;
};
;
if(this["variables"]["hasOwnProperty"](PL$31/*name*/)){
if(this["variables"][PL$31/*name*/]["temporary"]){
return;;
};
;
};
;
this["usedVariables"][PL$31/*name*/] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["functionsAr"] = [];;
this["addFunction"] = (function(PL$26/*res*/, PL$31/*name*/, PL$30/*par*/){
;
this["resolveFunctionType"]({"name": PL$32/*identifierName*/(PL$31/*name*/),
"type": PL$26/*res*/["getType"]()}, PL$30/*par*/);;
this["functionsAr"]["push"]({"res": PL$26/*res*/,
"name": PL$31/*name*/});;
;
});;
this["_getErrors"] = (function(PL$79/*parWarning*/){
var PL$80/*a*/;
var PL$37/*i*/;
;
PL$80/*a*/ = [];
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < this["errors"]["length"]);++PL$37/*i*/){{if(this["errors"][PL$37/*i*/]["valid"]){
if((PL$79/*parWarning*/ ? this["errors"][PL$37/*i*/]["warning"] : ! this["errors"][PL$37/*i*/]["warning"])){
PL$80/*a*/["push"](this["errors"][PL$37/*i*/]);;
};
;
};
;
}};
;
return PL$80/*a*/;;
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
this["getWarningFun"] = (function(PL$30/*par*/){
var PL$50/*self*/;
;
PL$50/*self*/ = this;
return (function(PL$81/*err*/){
;
PL$50/*self*/["warning"](PL$30/*par*/, PL$81/*err*/);;
;
});;
;
});;
this["warning"] = (function(PL$30/*par*/, PL$81/*err*/){
;
if(! PL$30/*par*/["line"]){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](PL$30/*par*/, PL$81/*err*/);;
;
});;
this["error"] = (function(PL$30/*par*/, PL$81/*err*/){
;
this["_addError"](PL$30/*par*/, PL$81/*err*/);;
PL$11/*errorFun*/(PL$30/*par*/, PL$81/*err*/);;
;
});;
this["addError"] = (function(PL$30/*par*/, PL$81/*err*/){
;
return this["_addError"](PL$30/*par*/, PL$81/*err*/);;
;
});;
this["addWarning"] = (function(PL$30/*par*/, PL$81/*err*/){
;
return this["_addError"](PL$30/*par*/, PL$81/*err*/, true);;
;
});;
this["_addError"] = (function(PL$30/*par*/, PL$81/*err*/, PL$82/*warning*/){
var PL$64/*entry*/;
var PL$74/*ps*/;
;
PL$64/*entry*/ = {"par": PL$30/*par*/,
"line": PL$30/*par*/["line"],
"column": PL$30/*par*/["column"],
"msg": ((PL$81/*err*/["id"] + ": ") + PL$81/*err*/["msg"]),
"valid": true,
"warning": PL$82/*warning*/};
this["errors"]["push"](PL$64/*entry*/);;
PL$74/*ps*/ = new PL$16/*Promise*/();
PL$74/*ps*/["then"]((function(){
;
PL$64/*entry*/["valid"] = false;;
;
}));;
return PL$74/*ps*/;;
;
});;
this["runtimeError"] = (function(PL$30/*par*/, PL$57/*par2*/){
var PL$74/*ps*/;
var PL$26/*res*/;
;
PL$74/*ps*/ = this["addWarning"](PL$30/*par*/, PL$57/*par2*/);
PL$26/*res*/ = this["runtimeErrorNoWarning"](PL$57/*par2*/);
PL$26/*res*/["setPromise"](PL$74/*ps*/);;
return PL$26/*res*/;;
;
});;
this["runtimeErrorNoWarning"] = (function(PL$57/*par2*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]((((("(function(){ throw { id:" + PL$57/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$57/*par2*/["msg"])) + " } })()"));;
return PL$26/*res*/;;
;
});;
this["getUniqueName"] = (function(PL$31/*name*/){
var PL$83/*retStr*/;
;
PL$83/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
if(PL$31/*name*/){
PL$83/*retStr*/ += (("/*" + PL$31/*name*/) + "*/");;
};
;
return PL$83/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(PL$31/*name*/){
var PL$84/*uniqueStr*/;
var PL$26/*res*/;
;
PL$84/*uniqueStr*/ = this["getUniqueName"]();
PL$26/*res*/ = (((("/*\n'''\"\"\" " + PL$84/*uniqueStr*/) + " ") + (PL$31/*name*/ || "")) + " start */");
PL$26/*res*/ += this["runtimeErrorNoWarning"](PL$12/*errorMsg*/["failedToDetermineType"]);;
PL$26/*res*/ += (((("/* " + PL$84/*uniqueStr*/) + " ") + (PL$31/*name*/ || "")) + " end */");;
return PL$26/*res*/;;
;
});;
this["getVariableName"] = (function(PL$31/*name*/){
;
return this["common"]["variableNames"]["get"](PL$31/*name*/);;
;
});;
this["renderType"] = (function(PL$75/*parType*/, PL$58/*parParsed*/){
var PL$26/*res*/;
var PL$50/*self*/;
var PL$85/*typeExpression*/;
var PL$86/*renderTypeName*/;
var PL$89/*errPs*/;
var PL$31/*name*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["setType"]("var");;
PL$50/*self*/ = this;
PL$85/*typeExpression*/;
PL$86/*renderTypeName*/ = (function(PL$87/*parType1*/, PL$88/*parType2*/){
var PL$37/*i*/;
var PL$31/*name*/;
;
PL$37/*i*/;
for(PL$37/*i*/ in PL$50/*self*/["types"]){if(((PL$50/*self*/["types"][PL$37/*i*/]["type"] === PL$87/*parType1*/) || (PL$50/*self*/["types"][PL$37/*i*/]["type"] === PL$88/*parType2*/))){
if(PL$50/*self*/["isVar"](PL$50/*self*/["types"][PL$37/*i*/]["type"])){
PL$50/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
PL$31/*name*/ = PL$37/*i*/;
if(! PL$50/*self*/["common"]["givenTypeNames"][PL$31/*name*/]){
PL$50/*self*/["common"]["givenTypeNames"][PL$31/*name*/] = (((PL$50/*self*/["getUniqueName"]() + "/*type:") + PL$31/*name*/) + "*/");;
};
;
return PL$50/*self*/["common"]["givenTypeNames"][PL$31/*name*/];;
};
;
};
;
;
});
if((typeof PL$75/*parType*/ == "function")){
PL$89/*errPs*/ = this["addError"](PL$58/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]);
PL$18/*classSystem*/["readyPromise"](PL$75/*parType*/)["then"]((function(PL$90/*resolvedType*/){
var PL$91/*replace*/;
var PL$85/*typeExpression*/;
var PL$37/*i*/;
var PL$92/*l*/;
;
PL$91/*replace*/ = PL$50/*self*/["newResult"]();
PL$85/*typeExpression*/ = PL$86/*renderTypeName*/(PL$75/*parType*/, PL$90/*resolvedType*/);
if(PL$85/*typeExpression*/){
PL$91/*replace*/["push"](PL$85/*typeExpression*/);;
PL$26/*res*/["push"](PL$91/*replace*/);;
PL$89/*errPs*/["resolve"]();;
return;;
};
;
if(PL$18/*classSystem*/["isFunctionType"](PL$90/*resolvedType*/)){
PL$37/*i*/;
PL$50/*self*/["common"]["useClassSystem"] = true;;
PL$91/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
PL$91/*replace*/["push"](PL$50/*self*/["renderType"](PL$50/*self*/["getClassFromTemporaryTracked"](PL$50/*self*/["getFunctionReturnType"](PL$90/*resolvedType*/, PL$58/*parParsed*/), PL$58/*parParsed*/), PL$58/*parParsed*/));;
PL$91/*replace*/["push"](", arguments: [");;
PL$92/*l*/ = PL$50/*self*/["getFunctionArgumentCount"](PL$90/*resolvedType*/);
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{if(PL$37/*i*/){
PL$91/*replace*/["push"](", ");;
};
;
PL$91/*replace*/["push"](PL$50/*self*/["renderType"](PL$50/*self*/["getClassFromTemporaryTracked"](PL$50/*self*/["getFunctionArgumentType"](PL$90/*resolvedType*/, PL$37/*i*/, PL$58/*parParsed*/), PL$58/*parParsed*/), PL$58/*parParsed*/));;
}};
;
PL$91/*replace*/["push"]("]}))");;
PL$26/*res*/["push"](PL$91/*replace*/);;
PL$89/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return PL$26/*res*/;;

}else{
if(PL$75/*parType*/["isDynamic"]){
PL$85/*typeExpression*/ = PL$86/*renderTypeName*/(PL$75/*parType*/, PL$75/*parType*/);;
if(PL$85/*typeExpression*/){
PL$26/*res*/["push"](PL$85/*typeExpression*/);;

}else{
PL$26/*res*/["push"](this["addError"](PL$58/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
PL$31/*name*/ = PL$32/*identifierName*/(PL$75/*parType*/);
PL$75/*parType*/ = this["getType"](PL$31/*name*/, PL$58/*parParsed*/);;
PL$85/*typeExpression*/ = PL$86/*renderTypeName*/(PL$75/*parType*/, PL$75/*parType*/);;
if(PL$85/*typeExpression*/){
PL$26/*res*/["push"](PL$85/*typeExpression*/);;

}else{
PL$26/*res*/["push"](this["addError"](PL$58/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return PL$26/*res*/;;
;
});;
this["newInstance"] = (function(PL$93/*element*/, PL$94/*extras*/){
var PL$95/*param*/;
var PL$37/*i*/;
var PL$96/*instance*/;
;
PL$95/*param*/ = {"toParse": PL$93/*element*/,
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(PL$94/*extras*/){
PL$37/*i*/;
for(PL$37/*i*/ in PL$94/*extras*/){PL$95/*param*/[PL$37/*i*/] = PL$94/*extras*/[PL$37/*i*/];;
};
;
};
;
PL$96/*instance*/ = new PL$49/*CodeParser*/(PL$95/*param*/);
return PL$96/*instance*/;;
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
this["newResult"] = (function(PL$30/*par*/){
var PL$54/*r*/;
;
PL$54/*r*/ = new PL$47/*_Result*/({"cp": this});
if(PL$30/*par*/){
PL$54/*r*/["push"](PL$30/*par*/);;
};
;
return PL$54/*r*/;;
;
});;
this["parseProgram"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$97/*extraRes*/;
var PL$98/*extraModules*/;
var PL$99/*parsingConfig*/;
var PL$100/*reqireProperty*/;
var PL$101/*functionStatement*/;
var PL$31/*name*/;
;
PL$41/*findPromises*/(PL$30/*par*/);;
PL$26/*res*/ = this["newResult"]();
PL$97/*extraRes*/ = this["newResult"]();
PL$97/*extraRes*/["push"]("\"use strict\";\n");;
PL$43/*addExtraToPar*/(PL$30/*par*/, "addFront", PL$97/*extraRes*/);;
PL$98/*extraModules*/ = new PL$28/*Map*/();
PL$99/*parsingConfig*/ = this["common"]["parsingConfig"];
if(PL$99/*parsingConfig*/){
PL$100/*reqireProperty*/ = this["getTemplateProperty"](PL$99/*parsingConfig*/, "require", "ObjectExpression");
if(PL$100/*reqireProperty*/){
PL$98/*extraModules*/ = this["getTemplateRequireProperty"](PL$100/*reqireProperty*/);;
};
;
};
;
this["common"]["extraModules"] = PL$98/*extraModules*/;;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
this["programPromiseStr"] = this["getUniqueName"]();;
};
;
this["resultNameStr"] = this["getUniqueName"]();;
PL$101/*functionStatement*/ = this["_parseFunction"](PL$30/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
PL$31/*name*/;
for(PL$31/*name*/ in this["usedVariables"]){if((this["usedVariables"][PL$31/*name*/] === true)){
if((PL$31/*name*/ == "Promise")){
this["common"]["usePromise"] = true;;
};
;
if((PL$31/*name*/ == "Callback")){
this["common"]["useCallback"] = true;;
};
;
if(PL$98/*extraModules*/["get"](PL$31/*name*/)){
continue;;
};
;
PL$26/*res*/["push"]((("var " + this["getVariableName"](PL$31/*name*/)) + ";"));;
PL$26/*res*/["push"]("try{");;
PL$26/*res*/["push"](this["getVariableName"](PL$31/*name*/));;
PL$26/*res*/["push"](" = ");;
PL$26/*res*/["push"](PL$31/*name*/);;
PL$26/*res*/["push"](";}catch(e){};\n");;
};
;
};
;
PL$26/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$101/*functionStatement*/));;
PL$26/*res*/["push"](")();\n");;
return PL$26/*res*/;;
;
});;
this["parseFunction"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
this["stack"]("isFunction");;
this["isFunction"] = true;;
PL$26/*res*/ = this["_parseFunction"](PL$30/*par*/);
this["unstack"]("isFunction");;
return PL$26/*res*/;;
;
});;
this["getTemplateProperty"] = (function(PL$102/*parTemplate*/, PL$103/*parProperty*/, PL$104/*mandatoryType*/){
var PL$37/*i*/;
var PL$39/*p*/;
;
PL$37/*i*/ = 0;
for(PL$37/*i*/;(PL$37/*i*/ < PL$102/*parTemplate*/["properties"]["length"]);++PL$37/*i*/){{PL$39/*p*/ = PL$102/*parTemplate*/["properties"][PL$37/*i*/];
if(((PL$39/*p*/["kind"] == "init") && (PL$32/*identifierName*/(PL$39/*p*/["key"]) == PL$103/*parProperty*/))){
if(PL$104/*mandatoryType*/){
if((PL$39/*p*/["value"]["type"] != PL$104/*mandatoryType*/)){
this["error"](PL$39/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);;
};
;
};
;
return PL$39/*p*/["value"];;
};
;
}};
;
;
});;
this["getTemplateRequireProperty"] = (function(PL$102/*parTemplate*/){
var PL$37/*i*/;
var PL$26/*res*/;
var PL$39/*p*/;
var PL$23/*key*/;
;
PL$37/*i*/ = 0;
PL$26/*res*/ = new PL$28/*Map*/();
for(PL$37/*i*/;(PL$37/*i*/ < PL$102/*parTemplate*/["properties"]["length"]);++PL$37/*i*/){{PL$39/*p*/ = PL$102/*parTemplate*/["properties"][PL$37/*i*/];
if((PL$39/*p*/["kind"] == "init")){
PL$23/*key*/ = PL$32/*identifierName*/(PL$39/*p*/["key"]);
if((PL$39/*p*/["value"]["type"] != "Literal")){
this["error"](PL$39/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);;
};
;
PL$26/*res*/["set"](PL$23/*key*/, PL$39/*p*/["value"]["value"]);;
};
;
}};
;
return PL$26/*res*/;;
;
});;
this["createExtraDynamicType"] = (function(PL$75/*parType*/, PL$30/*par*/, PL$58/*parParsed*/){
var PL$31/*name*/;
var PL$64/*entry*/;
var PL$26/*res*/;
var PL$59/*newType*/;
;
PL$31/*name*/;
if(PL$30/*par*/["property"]){
PL$31/*name*/ = ((this["getTypeName"](PL$75/*parType*/, PL$58/*parParsed*/) + "::property::") + PL$30/*par*/["property"]);;

}else{
if(PL$30/*par*/["temporaryTracked"]){
PL$31/*name*/ = (this["getTypeName"](PL$75/*parType*/, PL$58/*parParsed*/) + "::temporaryTracked");;

}else{
if(PL$30/*par*/["temporaryTrackedResolved"]){
PL$31/*name*/ = (this["getTypeName"](PL$75/*parType*/, PL$58/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
this["error"](PL$12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
;
if(! PL$75/*parType*/["extraTypes"]){
PL$75/*parType*/["extraTypes"] = [];;
};
;
if(! PL$75/*parType*/["extraTypeMap"]){
PL$75/*parType*/["extraTypeMap"] = {};;
};
;
if(PL$75/*parType*/["extraTypeMap"]["hasOwnProperty"](PL$31/*name*/)){
return PL$75/*parType*/["extraTypeMap"][PL$31/*name*/];;
};
;
PL$64/*entry*/ = {"res": this["newResult"]()};
PL$75/*parType*/["extraTypes"]["push"](PL$64/*entry*/);;
PL$26/*res*/ = PL$64/*entry*/["res"];
this["addType"]({"name": PL$31/*name*/,
"dynamic": true}, PL$58/*parParsed*/);;
PL$26/*res*/["push"]("var /*extratyperender*/ ");;
PL$26/*res*/["push"](this["renderType"](PL$31/*name*/));;
PL$26/*res*/["push"](" = ");;
this["common"]["useClassSystem"] = true;;
if(PL$30/*par*/["property"]){
if((PL$30/*par*/["property"] == "constructor")){
PL$26/*res*/["push"]("classSystem.getConstructorType({\"type\":");;

}else{
PL$26/*res*/["push"]("classSystem.getPropertyType({\"type\":");;
};
;
PL$26/*res*/["push"](this["renderType"](PL$75/*parType*/));;
PL$26/*res*/["push"]((", property: " + PL$14/*stringEncodeStr*/(PL$30/*par*/["property"])));;
PL$26/*res*/["push"]("});\n");;

}else{
if(PL$30/*par*/["temporaryTracked"]){
PL$26/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
PL$26/*res*/["push"](this["renderType"](PL$75/*parType*/));;
PL$26/*res*/["push"](");\n");;

}else{
if(PL$30/*par*/["temporaryTrackedResolved"]){
PL$26/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
PL$26/*res*/["push"](this["renderType"](PL$75/*parType*/));;
PL$26/*res*/["push"](");\n");;
};
};
};
;
PL$59/*newType*/ = this["getType"](PL$31/*name*/, PL$58/*parParsed*/);
PL$64/*entry*/["type"] = PL$59/*newType*/;;
PL$75/*parType*/["extraTypeMap"][PL$31/*name*/] = PL$59/*newType*/;;
return PL$59/*newType*/;;
;
});;
this["getFunctionType"] = (function(PL$30/*par*/){
var PL$105/*isTyped*/;
var PL$106/*functionTypeParam*/;
var PL$92/*l*/;
var PL$107/*tempTypename*/;
;
PL$105/*isTyped*/ = false;
PL$106/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(PL$30/*par*/["returnTypename"]){
PL$105/*isTyped*/ = true;;
PL$106/*functionTypeParam*/["return"] = this["getType"](PL$30/*par*/["returnTypename"]);;
};
;
if((PL$30/*par*/["params"] && PL$30/*par*/["params"]["length"])){
PL$37/*i*/ = 0;;
PL$92/*l*/ = PL$30/*par*/["params"]["length"];
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$107/*tempTypename*/ = PL$32/*identifierName*/((PL$30/*par*/["params"][PL$37/*i*/]["typename"] || "var"));
PL$106/*functionTypeParam*/["arguments"]["push"](this["getType"](PL$107/*tempTypename*/, PL$30/*par*/));;
if((PL$107/*tempTypename*/ != "var")){
PL$105/*isTyped*/ = true;;
};
;
}};
;
};
;
if(PL$105/*isTyped*/){
return this["createFunctionType"](PL$106/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(PL$30/*par*/){
var PL$108/*isDynamic*/;
var PL$37/*i*/;
;
PL$108/*isDynamic*/ = false;
if(PL$30/*par*/["return"]["isDynamic"]){
PL$108/*isDynamic*/ = true;;
};
;
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$30/*par*/["arguments"]["length"]);++PL$37/*i*/){{if(PL$30/*par*/["arguments"][PL$37/*i*/]["isDynamic"]){
PL$108/*isDynamic*/ = true;;
};
;
}};
;
if(PL$108/*isDynamic*/){
debugger;

}else{
return PL$18/*classSystem*/["createFunctionType"](PL$30/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(PL$109/*parRes*/, PL$110/*parCondition*/){
var PL$111/*condition*/;
var PL$112/*conditional*/;
var PL$113/*frontRes*/;
var PL$114/*endRes*/;
;
PL$111/*condition*/ = PL$110/*parCondition*/;
if((PL$110/*parCondition*/ === undefined)){
PL$111/*condition*/ = true;;
};
;
PL$112/*conditional*/ = this["createConditionalCode"](PL$109/*parRes*/);
PL$112/*conditional*/["addCondition"](PL$111/*condition*/);;
this["runBeforeReturnRes"]["push"](PL$112/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
PL$113/*frontRes*/ = this["newResult"]();
PL$114/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$113/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$114/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
PL$113/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
PL$114/*endRes*/["push"]("}catch(e){");;
PL$114/*endRes*/["push"](this["runBeforeReturnRes"]);;
PL$114/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](PL$111/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](PL$111/*condition*/);;
this["addBeforeReturnCondition"](PL$111/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(PL$110/*parCondition*/){
var PL$37/*i*/;
;
this["beforeReturnConditions"]["push"](PL$110/*parCondition*/);;
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$37/*i*/){{this["beforeReturnConditionFuns"][PL$37/*i*/](PL$110/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(PL$115/*parFun*/){
var PL$37/*i*/;
;
this["beforeReturnConditionFuns"]["push"](PL$115/*parFun*/);;
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < this["beforeReturnConditions"]["length"]);++PL$37/*i*/){{PL$115/*parFun*/(this["beforeReturnConditions"][PL$37/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(PL$30/*par*/){
var PL$50/*self*/;
var PL$26/*res*/;
var PL$116/*falseRes*/;
var PL$117/*beforeReturnCode*/;
var PL$118/*newRes*/;
var PL$119/*valueRes*/;
var PL$120/*trueRes*/;
var PL$112/*conditional*/;
;
PL$50/*self*/ = this;
PL$26/*res*/ = this["newResult"]();
if(this["promising"]){
PL$26/*res*/["push"]((this["returnPromise"] + ".resolve("));;
if(PL$30/*par*/["value"]){
PL$26/*res*/["push"](PL$30/*par*/["value"]);;
};
;
PL$26/*res*/["push"]("); return;");;

}else{
if((PL$30/*par*/["return"] || PL$30/*par*/["value"])){
PL$26/*res*/["push"]("return");;
};
;
if(PL$30/*par*/["value"]){
PL$26/*res*/["push"](" ");;
PL$26/*res*/["push"](PL$30/*par*/["value"]);;
};
;
if((PL$30/*par*/["return"] || PL$30/*par*/["value"])){
PL$26/*res*/["push"](";");;
};
;
};
;
PL$116/*falseRes*/ = PL$26/*res*/;
PL$117/*beforeReturnCode*/ = this["runBeforeReturnRes"];
PL$118/*newRes*/ = PL$50/*self*/["newResult"]();
PL$119/*valueRes*/ = PL$50/*self*/["newResult"]();
if(PL$30/*par*/["value"]){
PL$119/*valueRes*/["push"]("(function(ret){ ");;
PL$119/*valueRes*/["push"](PL$117/*beforeReturnCode*/);;
PL$119/*valueRes*/["push"]("return ret; })(");;
PL$119/*valueRes*/["push"](PL$30/*par*/["value"]);;
PL$119/*valueRes*/["push"](")");;
};
;
if(PL$50/*self*/["promising"]){
if(PL$30/*par*/["value"]){
PL$118/*newRes*/["push"]((PL$50/*self*/["returnPromise"] + ".resolve("));;
PL$118/*newRes*/["push"](PL$119/*valueRes*/);;
PL$118/*newRes*/["push"]("); return;");;

}else{
PL$118/*newRes*/["push"](PL$117/*beforeReturnCode*/);;
PL$118/*newRes*/["push"]((PL$50/*self*/["returnPromise"] + ".resolve("));;
PL$118/*newRes*/["push"]("); return;");;
};
;

}else{
if(PL$30/*par*/["value"]){
PL$118/*newRes*/["push"]("return ");;
PL$118/*newRes*/["push"](PL$119/*valueRes*/);;
PL$118/*newRes*/["push"](";");;

}else{
PL$118/*newRes*/["push"](PL$117/*beforeReturnCode*/);;
if(PL$30/*par*/["return"]){
PL$118/*newRes*/["push"]("return;");;
};
;
};
;
};
;
PL$120/*trueRes*/ = PL$118/*newRes*/;
PL$112/*conditional*/ = this["createConditionalCode"](PL$120/*trueRes*/, PL$116/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(PL$121/*con*/){
;
PL$112/*conditional*/["addCondition"](PL$121/*con*/);;
;
}));;
return PL$112/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(PL$30/*par*/, PL$122/*parJsn*/){
var PL$123/*parGivenPromiseNameStr*/;
var PL$124/*noUntrack*/;
var PL$125/*hasFrameInfo*/;
var PL$126/*runRemote*/;
var PL$127/*runExclusive*/;
var PL$37/*i*/;
var PL$128/*typename*/;
var PL$58/*parParsed*/;
var PL$129/*funClosure*/;
var PL$50/*self*/;
var PL$130/*hasName*/;
var PL$131/*nameStr*/;
var PL$132/*templateTypesAr*/;
var PL$133/*templateTypes*/;
var PL$134/*typeVarInit*/;
var PL$39/*p*/;
var PL$135/*extraTypesRes*/;
var PL$26/*res*/;
var PL$136/*funRes*/;
var PL$92/*l*/;
var PL$137/*classesRes*/;
var PL$138/*addFront*/;
var PL$139/*b*/;
var PL$140/*extraPar*/;
var PL$141/*block*/;
var PL$142/*varname*/;
var PL$73/*type*/;
var PL$143/*completeFun*/;
var PL$144/*returnTypePromiseCheck*/;
var PL$145/*handleExtras*/;
var PL$146/*dt*/;
var PL$147/*thisFunType*/;
var PL$148/*uniqueNameStr*/;
var PL$149/*remoteClosure*/;
var PL$150/*finalResult*/;
;
PL$122/*parJsn*/ = (PL$122/*parJsn*/ || {});;
PL$123/*parGivenPromiseNameStr*/ = PL$122/*parJsn*/["promiseName"];
PL$124/*noUntrack*/ = PL$122/*parJsn*/["noUntrack"];
PL$125/*hasFrameInfo*/ = false;
PL$126/*runRemote*/ = false;
PL$127/*runExclusive*/ = false;
PL$37/*i*/ = 0;
PL$128/*typename*/;
PL$58/*parParsed*/ = PL$30/*par*/;
PL$129/*funClosure*/;
PL$50/*self*/ = this;
PL$130/*hasName*/ = false;
PL$131/*nameStr*/;
if(PL$30/*par*/["id"]){
PL$131/*nameStr*/ = PL$32/*identifierName*/(PL$30/*par*/["id"]);;
PL$130/*hasName*/ = true;;
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
if(PL$30/*par*/["returnTypename"]){
this["_returnType"] = this["getType"](PL$30/*par*/["returnTypename"], PL$30/*par*/);;

}else{
this["_returnType"] = this["getType"]("var");;
};
;
if((PL$30/*par*/["frame"] && PL$30/*par*/["frame"]["name"])){
PL$125/*hasFrameInfo*/ = true;;
if((PL$30/*par*/["frame"]["type"] == "frame")){
PL$126/*runRemote*/ = true;;
PL$30/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((PL$30/*par*/["frame"]["type"] == "exclusive")){
PL$127/*runExclusive*/ = true;;
};
};
;
};
;
PL$132/*templateTypesAr*/ = [];
if((PL$30/*par*/["template"] && PL$30/*par*/["template"]["properties"]["length"])){
PL$133/*templateTypes*/ = this["getTemplateProperty"](PL$30/*par*/["template"], "types", "ObjectExpression");
if(PL$133/*templateTypes*/){
PL$134/*typeVarInit*/ = this["newResult"]();
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$133/*templateTypes*/["properties"]["length"]);++PL$37/*i*/){{PL$39/*p*/ = PL$133/*templateTypes*/["properties"][PL$37/*i*/];
PL$128/*typename*/ = PL$32/*identifierName*/(PL$39/*p*/["key"]);;
this["addType"]({"name": PL$128/*typename*/,
"dynamic": true}, PL$39/*p*/["value"]);;
if(! PL$129/*funClosure*/){
PL$129/*funClosure*/ = this["newResult"]();;
PL$129/*funClosure*/["push"]("(function(){");;
};
;
PL$134/*typeVarInit*/["push"]("var ");;
PL$134/*typeVarInit*/["push"](this["renderType"](PL$128/*typename*/));;
PL$134/*typeVarInit*/["push"](" = ");;
PL$134/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$39/*p*/["value"])));;
PL$134/*typeVarInit*/["push"](";\n");;
PL$134/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$128/*typename*/)) + " = "));;
PL$134/*typeVarInit*/["push"](this["renderType"](PL$128/*typename*/));;
PL$134/*typeVarInit*/["push"]("\n;");;
PL$134/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$128/*typename*/)) + " = undefined;\n"));;
PL$134/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$128/*typename*/}));;
PL$132/*templateTypesAr*/["push"](PL$128/*typename*/);;
}};
;
PL$129/*funClosure*/["push"](PL$134/*typeVarInit*/);;
};
;
};
;
PL$135/*extraTypesRes*/ = this["newResult"]();
if(PL$129/*funClosure*/){
PL$129/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
PL$129/*funClosure*/["push"](PL$135/*extraTypesRes*/);;
PL$129/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
PL$26/*res*/ = this["newResult"]();
PL$136/*funRes*/ = this["newResult"]();
PL$37/*i*/ = 0;;
PL$136/*funRes*/["push"]("function");;
if(PL$130/*hasName*/){
this["functionName"] = PL$131/*nameStr*/;;
};
;
PL$136/*funRes*/["push"]("(");;
if((PL$30/*par*/["params"] && PL$30/*par*/["params"]["length"])){
PL$37/*i*/ = 0;;
PL$92/*l*/ = PL$30/*par*/["params"]["length"];
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{if(PL$37/*i*/){
PL$136/*funRes*/["push"](", ");;
};
;
PL$136/*funRes*/["push"](this["getVariableName"](PL$32/*identifierName*/(PL$30/*par*/["params"][PL$37/*i*/]["name"])));;
this["addLocalVariable"]({"name": PL$30/*par*/["params"][PL$37/*i*/]["name"],
"typename": (PL$30/*par*/["params"][PL$37/*i*/]["typename"] || "var"),
"parameter": true}, PL$30/*par*/["params"][PL$37/*i*/]);;
}};
;
};
;
PL$136/*funRes*/["push"]("){\n");;
PL$137/*classesRes*/ = this["findClasses"](PL$30/*par*/["body"]);
this["findVariables"](PL$30/*par*/["body"]);;
if(PL$127/*runExclusive*/){
PL$136/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$30/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(PL$30/*par*/["promising"]){
PL$136/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
PL$136/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
PL$136/*funRes*/["push"]("return p;\n");;

}else{
PL$136/*funRes*/["push"]("return;\n");;
};
;
PL$136/*funRes*/["push"]("};\n");;
};
;
PL$138/*addFront*/ = PL$46/*getExtraFromPar*/(PL$30/*par*/, "addFront");
if(PL$138/*addFront*/){
PL$136/*funRes*/["push"](PL$138/*addFront*/);;
};
;
if(PL$30/*par*/["promising"]){
if(PL$123/*parGivenPromiseNameStr*/){
this["returnPromise"] = PL$123/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
PL$136/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$58/*parParsed*/)),
"parsed": PL$58/*parParsed*/,
"errorFun": this["getWarningFun"](PL$58/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
PL$136/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
PL$136/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$136/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$136/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
PL$136/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$136/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
PL$26/*res*/["makePromising"]();;
};
;
PL$139/*b*/ = PL$30/*par*/["body"];
PL$140/*extraPar*/ = {};
PL$139/*b*/["brackets"] = false;;
PL$140/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
PL$140/*extraPar*/["postCode"] = this["newResult"]();;
PL$140/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
PL$140/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
PL$141/*block*/ = this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/);
for(PL$37/*i*/ in this["localVariables"]){PL$142/*varname*/ = PL$37/*i*/;
PL$73/*type*/ = this["getVariableType"](PL$142/*varname*/);
if(this["localVariables"][PL$37/*i*/]["parameter"]){
PL$136/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$142/*varname*/),
"type": PL$73/*type*/,
"errorFun": this["getWarningFun"](PL$30/*par*/),
"parsed": PL$30/*par*/}));;

}else{
PL$136/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$142/*varname*/),
"type": PL$73/*type*/,
"errorFun": this["getWarningFun"](PL$30/*par*/),
"parsed": PL$30/*par*/}));;
};
;
if(! PL$124/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$142/*varname*/),
"type": PL$73/*type*/,
"errorFun": this["getWarningFun"](PL$30/*par*/),
"parsed": PL$30/*par*/}), this["isTrackedClassConRes"](PL$73/*type*/, PL$30/*par*/));;
};
;
this["usedVariables"][PL$142/*varname*/] = false;;
};
;
if(this["usedVariables"]["arguments"]){
PL$136/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
PL$136/*funRes*/["push"](PL$137/*classesRes*/);;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < this["functionsAr"]["length"]);++PL$37/*i*/){{PL$136/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][PL$37/*i*/]["name"])) + " = "));;
PL$136/*funRes*/["push"](this["functionsAr"][PL$37/*i*/]["res"]);;
PL$136/*funRes*/["push"](";\n");;
}};
;
if(PL$30/*par*/["promising"]){
if(this["usingThis"]){
PL$136/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
PL$136/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
PL$136/*funRes*/["push"](PL$141/*block*/);;
if(PL$30/*par*/["promising"]){
PL$136/*funRes*/["addPost"]("})();\n");;
PL$136/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$58/*parParsed*/,
"errorFun": this["getWarningFun"](PL$58/*parParsed*/)}));;
PL$136/*funRes*/["addPost"]("}");;

}else{
PL$136/*funRes*/["push"]("}");;
};
;
PL$143/*completeFun*/ = this["makeCompleteStatement"](PL$136/*funRes*/);
if((this["promising"] && PL$30/*par*/["returnTypename"])){
PL$144/*returnTypePromiseCheck*/ = this["newResult"]();
PL$144/*returnTypePromiseCheck*/["push"]("(function(t){");;
PL$144/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$58/*parParsed*/),
"parsed": PL$58/*parParsed*/}));;
PL$144/*returnTypePromiseCheck*/["push"]("return t;})(");;
PL$144/*returnTypePromiseCheck*/["push"](PL$143/*completeFun*/);;
PL$144/*returnTypePromiseCheck*/["push"](")");;
PL$143/*completeFun*/ = PL$144/*returnTypePromiseCheck*/;;
};
;
if(PL$129/*funClosure*/){
PL$145/*handleExtras*/ = (function(PL$146/*dt*/){
var PL$37/*i*/;
;
if(PL$146/*dt*/["extraTypes"]){
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$146/*dt*/["extraTypes"]["length"]);++PL$37/*i*/){{PL$135/*extraTypesRes*/["push"](PL$146/*dt*/["extraTypes"][PL$37/*i*/]["res"]);;
PL$145/*handleExtras*/(PL$146/*dt*/["extraTypes"][PL$37/*i*/]["type"]);;
}};
;
};
;
;
});
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$132/*templateTypesAr*/["length"]);++PL$37/*i*/){{PL$146/*dt*/ = this["getType"](PL$132/*templateTypesAr*/[PL$37/*i*/], PL$30/*par*/);
PL$145/*handleExtras*/(PL$146/*dt*/);;
}};
;
PL$129/*funClosure*/["push"](PL$143/*completeFun*/, PL$30/*par*/, {"stringEncode": true});;
PL$129/*funClosure*/["push"](";\"); return communicator.fun; })()");;
PL$143/*completeFun*/ = this["makeCompleteStatement"](PL$129/*funClosure*/);;
};
;
PL$147/*thisFunType*/ = this["getFunctionType"](PL$30/*par*/);
PL$148/*uniqueNameStr*/;
if(PL$126/*runRemote*/){
PL$149/*remoteClosure*/ = this["newResult"]();
PL$148/*uniqueNameStr*/ = this["getUniqueName"]();;
PL$149/*remoteClosure*/["push"]("(function(f){\n");;
PL$149/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$14/*stringEncodeStr*/(PL$30/*par*/["frame"]["name"]["value"])));;
PL$149/*remoteClosure*/["push"](((((", " + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$148/*uniqueNameStr*/)) + ", f, "));;
PL$149/*remoteClosure*/["push"](this["renderType"](PL$147/*thisFunType*/, PL$58/*parParsed*/));;
PL$149/*remoteClosure*/["push"](");\n");;
PL$149/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$30/*par*/["frame"]["name"]["value"])) + ")){\n"));;
PL$149/*remoteClosure*/["push"]("return f;\n");;
PL$149/*remoteClosure*/["push"]("}else{\n");;
PL$149/*remoteClosure*/["push"]("return function(){\n");;
PL$149/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$148/*uniqueNameStr*/)) + ", arguments);\n"));;
PL$149/*remoteClosure*/["push"]("}\n");;
PL$149/*remoteClosure*/["push"]("};\n");;
PL$149/*remoteClosure*/["push"]("})(");;
PL$149/*remoteClosure*/["push"](PL$143/*completeFun*/);;
PL$149/*remoteClosure*/["push"](")");;
PL$26/*res*/["push"](PL$149/*remoteClosure*/);;

}else{
PL$26/*res*/["push"](PL$143/*completeFun*/);;
};
;
PL$26/*res*/["setType"](PL$147/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
PL$150/*finalResult*/ = this["newResult"]();
PL$150/*finalResult*/["push"](this["makeCompleteStatement"](PL$26/*res*/));;
PL$150/*finalResult*/["setType"](PL$147/*thisFunType*/);;
return PL$150/*finalResult*/;;
;
});;
this["expThisExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(! this["promising"]){
PL$26/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
PL$26/*res*/["push"](this["thisExpression"]);;
};
;
PL$26/*res*/["setType"](this["thisType"]);;
return PL$26/*res*/;;
;
});;
this["expThrowStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]("throw ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["argument"])));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["identifyClass"] = (function(PL$30/*par*/){
var PL$54/*r*/;
var PL$31/*name*/;
var PL$151/*keywords*/;
var PL$37/*i*/;
;
PL$54/*r*/ = {};
PL$31/*name*/;
if(PL$30/*par*/["name"]){
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);;
};
PL$54/*r*/["hasName"] = (PL$31/*name*/ && PL$31/*name*/["length"]);;
PL$151/*keywords*/ = PL$30/*par*/["keywords"];
if((PL$151/*keywords*/ && PL$151/*keywords*/["length"])){
PL$37/*i*/;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$151/*keywords*/["length"]);++PL$37/*i*/){{switch (PL$151/*keywords*/[PL$37/*i*/]["type"]){
case "type":
PL$54/*r*/["isTyped"] = true;;
break;;
case "extends":
PL$54/*r*/["extendsClause"] = PL$151/*keywords*/[PL$37/*i*/];;
break;;
case "sync":
PL$54/*r*/["syncClause"] = PL$151/*keywords*/[PL$37/*i*/];;
break;;
case "track":
PL$54/*r*/["trackClause"] = PL$151/*keywords*/[PL$37/*i*/];;
break;;
}
;
;
}};
;
};
;
return PL$54/*r*/;;
;
});;
this["findClasses"] = (function(PL$30/*par*/, PL$26/*res*/){
var PL$152/*ci*/;
var PL$31/*name*/;
var PL$97/*extraRes*/;
var PL$37/*i*/;
;
if(! PL$26/*res*/){
PL$26/*res*/ = this["newResult"]();;
};
;
if((! PL$30/*par*/ || (typeof PL$30/*par*/ == "string"))){
return PL$26/*res*/;;
};
;
if(PL$40/*checkIsFunction*/(PL$30/*par*/)){
return PL$26/*res*/;;
};
;
if((PL$30/*par*/["type"] == "Class")){
PL$152/*ci*/ = this["identifyClass"](PL$30/*par*/);
if(PL$152/*ci*/["isTyped"]){
if(PL$30/*par*/["body"]["literal"]){
if(PL$152/*ci*/["hasName"]){
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
PL$97/*extraRes*/ = this["newResult"]();
this["addType"]({"name": PL$31/*name*/,
"extraRes": PL$97/*extraRes*/}, PL$30/*par*/);;
PL$26/*res*/["push"]("var ");;
PL$26/*res*/["push"](this["renderType"](PL$31/*name*/));;
PL$26/*res*/["push"](" = classSystem._createProvisionalClass();\n");;
this["common"]["useClassSystem"] = true;;
PL$26/*res*/["push"]((this["getVariableName"](PL$31/*name*/) + " = "));;
PL$26/*res*/["push"](this["renderType"](PL$31/*name*/));;
PL$26/*res*/["push"](";\n");;
PL$26/*res*/["push"]((("var " + this["getConstructorName"](PL$31/*name*/)) + " = undefined;"));;
PL$26/*res*/["push"](this["_typeReadyCode"]({"typename": PL$31/*name*/}));;
PL$26/*res*/["push"](PL$97/*extraRes*/);;
};
;
};
;
};
;
return PL$26/*res*/;;
};
;
PL$37/*i*/;
for(PL$37/*i*/ in PL$30/*par*/){this["findClasses"](PL$30/*par*/[PL$37/*i*/], PL$26/*res*/);;
};
;
return PL$26/*res*/;;
;
});;
this["_typeReadyCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
PL$26/*res*/["push"]("classSystem.readyPromise(");;
PL$26/*res*/["push"](this["renderType"](PL$30/*par*/["typename"]));;
PL$26/*res*/["push"](").then(function(parType){");;
PL$26/*res*/["push"](this["renderType"](PL$30/*par*/["typename"]));;
PL$26/*res*/["push"](" = parType;");;
if(! PL$30/*par*/["noConstructor"]){
PL$26/*res*/["push"]((this["getConstructorName"](PL$30/*par*/["typename"]) + " = classSystem.getTypeConstructor("));;
PL$26/*res*/["push"](this["renderType"](PL$30/*par*/["typename"]));;
PL$26/*res*/["push"](");");;
};
;
PL$26/*res*/["push"]("});");;
return PL$26/*res*/;;
;
});;
this["findVariables"] = (function(PL$30/*par*/){
var PL$50/*self*/;
var PL$152/*ci*/;
var PL$37/*i*/;
;
PL$50/*self*/ = this;
if((! PL$30/*par*/ || (typeof PL$30/*par*/ == "string"))){
return;;
};
;
if((PL$30/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": PL$32/*identifierName*/(PL$30/*par*/["id"]),
"typename": PL$32/*identifierName*/(PL$30/*par*/["typename"])}, PL$30/*par*/);;

}else{
if((PL$30/*par*/["type"] == "Class")){
PL$152/*ci*/ = PL$50/*self*/["identifyClass"](PL$30/*par*/);
if(PL$152/*ci*/["hasName"]){
this["addLocalVariable"]({"name": PL$32/*identifierName*/(PL$30/*par*/["name"]),
"typename": "var"}, PL$30/*par*/);;
};
;
return;;

}else{
if(PL$40/*checkIsFunction*/(PL$30/*par*/)){
if((PL$30/*par*/["id"] && (PL$30/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": PL$32/*identifierName*/(PL$30/*par*/["id"]),
"isFunction": true}, PL$30/*par*/);;
};
;
return;;
};
};
};
;
PL$37/*i*/;
for(PL$37/*i*/ in PL$30/*par*/){if((PL$37/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](PL$30/*par*/[PL$37/*i*/]);;
};
;
;
});;
this["expClassStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$153/*classRes*/;
var PL$152/*ci*/;
var PL$130/*hasName*/;
var PL$31/*name*/;
var PL$105/*isTyped*/;
var PL$154/*extendsClause*/;
var PL$155/*syncClause*/;
var PL$156/*trackClause*/;
var PL$157/*resultType*/;
var PL$158/*literal*/;
var PL$73/*type*/;
var PL$159/*inheritedObjName*/;
var PL$160/*lit*/;
var PL$92/*l*/;
var PL$161/*prop*/;
var PL$53/*tempRes*/;
var PL$162/*baseClasses*/;
var PL$37/*i*/;
var PL$163/*used*/;
var PL$164/*u*/;
;
PL$26/*res*/ = this["newResult"]();
PL$153/*classRes*/ = this["newResult"]();
PL$152/*ci*/ = this["identifyClass"](PL$30/*par*/);
PL$130/*hasName*/ = PL$152/*ci*/["hasName"];
PL$31/*name*/;
if(PL$130/*hasName*/){
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);;
};
;
PL$105/*isTyped*/ = PL$152/*ci*/["isTyped"];
PL$154/*extendsClause*/ = PL$30/*par*/["extendsClause"];
PL$155/*syncClause*/ = PL$152/*ci*/["syncClause"];
PL$156/*trackClause*/ = PL$152/*ci*/["trackClause"];
PL$157/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(PL$105/*isTyped*/){
this["common"]["useClassSystem"] = true;;
PL$153/*classRes*/["push"]("classSystem.createClass(");;
if(PL$30/*par*/["body"]["literal"]){
if(PL$130/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](PL$31/*name*/, PL$30/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$158/*literal*/ = this["createClassLiteral"](PL$30/*par*/["body"]["literal"], PL$152/*ci*/, PL$31/*name*/);
PL$153/*classRes*/["push"](this["stringifyClassLiteral"](PL$158/*literal*/));;
PL$153/*classRes*/["push"](", ");;
PL$153/*classRes*/["push"](this["createClassDefaults"](PL$30/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(PL$130/*hasName*/){
PL$73/*type*/ = this["createType"]({"name": PL$31/*name*/,
"literal": PL$158/*literal*/,
"par": PL$30/*par*/});
};
;

}else{
PL$153/*classRes*/["push"]("{}, ");;
PL$153/*classRes*/["push"](this["parseExpression"](PL$30/*par*/["body"]["expression"]));;
};
;
PL$153/*classRes*/["push"](")");;

}else{
PL$159/*inheritedObjName*/ = this["getUniqueName"]("inherited");
PL$153/*classRes*/["push"]("(function(){");;
if(PL$30/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
PL$160/*lit*/ = PL$30/*par*/["body"]["literal"];
PL$92/*l*/ = ((PL$160/*lit*/["properties"] && PL$160/*lit*/["properties"]["length"]) || 0);
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$161/*prop*/ = PL$160/*lit*/["properties"][PL$37/*i*/];
if((PL$161/*prop*/["kind"] == "block")){
PL$153/*classRes*/["push"](this["parseExpression"](PL$161/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
PL$153/*classRes*/["push"]((("var " + PL$159/*inheritedObjName*/) + " = {};\n"));;
PL$53/*tempRes*/ = this["newResult"]();
PL$53/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(PL$30/*par*/["body"]["literal"]){
PL$53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["body"]["literal"])));;

}else{
PL$53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["body"]["expression"])));;
};
;
PL$53/*tempRes*/["push"](", [");;
PL$162/*baseClasses*/ = ((PL$154/*extendsClause*/ && PL$154/*extendsClause*/["baseClasses"]) || []);
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$162/*baseClasses*/["length"]);++PL$37/*i*/){{if(PL$37/*i*/){
PL$53/*tempRes*/["push"](", ");;
};
;
PL$53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$162/*baseClasses*/[PL$37/*i*/])));;
}};
;
PL$53/*tempRes*/["push"]("], ");;
PL$53/*tempRes*/["push"](PL$159/*inheritedObjName*/);;
PL$53/*tempRes*/["push"](");");;
PL$153/*classRes*/["push"](PL$53/*tempRes*/);;
PL$153/*classRes*/["push"]("\n");;
PL$163/*used*/ = this["inheritedSystem"]["used"];
PL$164/*u*/;
for(PL$164/*u*/ in PL$163/*used*/){PL$153/*classRes*/["push"]((((((("var " + PL$163/*used*/[PL$164/*u*/]) + " = ") + PL$159/*inheritedObjName*/) + "[") + PL$14/*stringEncodeStr*/(PL$164/*u*/)) + "];\n"));;
};
;
PL$153/*classRes*/["push"]("return res; })()");;
};
;
if(PL$130/*hasName*/){
if(PL$105/*isTyped*/){
PL$26/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$30/*par*/["name"],
"classRes": PL$153/*classRes*/,
"parsed": PL$30/*par*/}));;

}else{
PL$26/*res*/["addPre"]((this["getVariableName"](PL$30/*par*/["name"]) + " = "));;
PL$26/*res*/["addPre"](PL$153/*classRes*/);;
PL$26/*res*/["addPre"](";");;
};
;
PL$26/*res*/["push"](this["getVariableName"](PL$30/*par*/["name"]));;

}else{
PL$26/*res*/["push"](PL$153/*classRes*/);;
};
;
PL$26/*res*/["setType"](PL$157/*resultType*/);;
this["unstack"]("inheritedSystem");;
return PL$26/*res*/;;
;
});;
this["_resolveClassCode"] = (function(PL$30/*par*/){
var PL$72/*parsed*/;
var PL$26/*res*/;
;
PL$72/*parsed*/ = PL$30/*par*/["parsed"];
PL$26/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
PL$26/*res*/["push"]("classSystem._resolveProvisional(", PL$72/*parsed*/);;
PL$26/*res*/["push"](this["renderType"](PL$30/*par*/["name"], PL$72/*parsed*/), PL$72/*parsed*/);;
PL$26/*res*/["push"](", ", PL$72/*parsed*/);;
PL$26/*res*/["push"](PL$30/*par*/["classRes"], PL$72/*parsed*/);;
PL$26/*res*/["push"](");", PL$72/*parsed*/);;
return PL$26/*res*/;;
;
});;
this["createClassLiteral"] = (function(PL$30/*par*/, PL$152/*ci*/, PL$78/*parName*/){
var PL$165/*ret*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$161/*prop*/;
var PL$166/*defaultValue*/;
var PL$73/*type*/;
var PL$31/*name*/;
;
PL$165/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$30/*par*/,
"track": (PL$152/*ci*/["trackClause"] ? true : false),
"sync": PL$152/*ci*/["syncClause"],
"name": PL$78/*parName*/,
"hashStr": this["getModuleHashStr"]()};
PL$37/*i*/ = 0;
PL$92/*l*/ = ((PL$30/*par*/["properties"] && PL$30/*par*/["properties"]["length"]) || 0);
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$161/*prop*/ = PL$30/*par*/["properties"][PL$37/*i*/];
PL$166/*defaultValue*/;
PL$73/*type*/;
if((PL$161/*prop*/["kind"] == "init")){
PL$73/*type*/ = (PL$161/*prop*/["typename"] ? this["getType"](PL$161/*prop*/["typename"], PL$30/*par*/) : undefined);;
if(PL$161/*prop*/["value"]){
if(PL$73/*type*/){
PL$166/*defaultValue*/ = this["parseAsType"](PL$73/*type*/, PL$161/*prop*/["value"]);;

}else{
PL$166/*defaultValue*/ = this["parseExpression"](PL$161/*prop*/["value"]);;
PL$73/*type*/ = PL$166/*defaultValue*/["getType"]();;
};
;
};
;
if(! PL$73/*type*/){
PL$73/*type*/ = this["getType"]("var");;
};
;
PL$165/*ret*/["members"]["push"]({"name": PL$32/*identifierName*/(PL$161/*prop*/["key"]),
"type": PL$73/*type*/,
"defaultValue": PL$166/*defaultValue*/});;

}else{
if((PL$161/*prop*/["kind"] == "function")){
PL$31/*name*/ = PL$32/*identifierName*/(PL$161/*prop*/["id"]);
PL$161/*prop*/["id"] = undefined;;
PL$166/*defaultValue*/ = this["parseExpression"](PL$161/*prop*/["value"]);;
PL$73/*type*/ = PL$166/*defaultValue*/["getType"]();;
PL$165/*ret*/["members"]["push"]({"name": PL$31/*name*/,
"type": PL$73/*type*/,
"defaultValue": PL$166/*defaultValue*/});;

}else{
this["error"](PL$161/*prop*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return PL$165/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$38/*m*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]("{");;
PL$26/*res*/["push"]("members: [");;
PL$37/*i*/ = 0;
PL$92/*l*/ = PL$30/*par*/["members"]["length"];
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$38/*m*/ = PL$30/*par*/["members"][PL$37/*i*/];
if(PL$37/*i*/){
PL$26/*res*/["push"](",");;
};
;
PL$26/*res*/["push"]("{");;
PL$26/*res*/["push"](("\"name\":" + PL$14/*stringEncodeStr*/(PL$38/*m*/["name"])));;
PL$26/*res*/["push"](",\"type\":");;
PL$26/*res*/["push"](this["renderType"](PL$38/*m*/["type"], PL$30/*par*/["parsed"]));;
PL$26/*res*/["push"]("}");;
}};
;
PL$26/*res*/["push"]("]");;
PL$26/*res*/["push"](", \"extends\": []");;
PL$26/*res*/["push"](", \"hasFreePart\": true");;
if(PL$30/*par*/["track"]){
PL$26/*res*/["push"](", \"track\": true");;
};
;
if(PL$30/*par*/["sync"]){
PL$26/*res*/["push"](", \"sync\": ");;
PL$26/*res*/["push"](PL$167/*JSON*/["stringify"](PL$30/*par*/["sync"]));;
PL$26/*res*/["push"]((", \"hashStr\": " + PL$14/*stringEncodeStr*/(PL$30/*par*/["hashStr"])));;
PL$26/*res*/["push"]((", \"name\": " + PL$14/*stringEncodeStr*/(PL$30/*par*/["name"])));;
};
;
PL$26/*res*/["push"]("}");;
return PL$26/*res*/;;
;
});;
this["createClassDefaults"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$168/*comma*/;
var PL$161/*prop*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]("{");;
PL$37/*i*/ = 0;
PL$92/*l*/ = ((PL$30/*par*/["properties"] && PL$30/*par*/["properties"]["length"]) || 0);
PL$168/*comma*/;
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$161/*prop*/ = PL$30/*par*/["properties"][PL$37/*i*/];
if((PL$161/*prop*/["kind"] == "init")){
if(PL$168/*comma*/){
PL$26/*res*/["push"](", ");;
};
;
PL$26/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$32/*identifierName*/(PL$161/*prop*/["key"])) + ": "));;
if(PL$161/*prop*/["value"]){
PL$26/*res*/["push"](this["parseExpression"](PL$161/*prop*/["value"]));;

}else{
PL$26/*res*/["push"]("undefined");;
};
;
PL$168/*comma*/ = true;;
};
;
}};
;
PL$26/*res*/["push"]("}");;
return PL$26/*res*/;;
;
});;
this["addType"] = (function(PL$30/*par*/, PL$58/*parParsed*/){
var PL$31/*name*/;
var PL$73/*type*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
if(this["types"]["hasOwnProperty"][PL$31/*name*/]){
this["error"](PL$58/*parParsed*/, PL$12/*errorMsg*/["typeExists"]);;
};
;
PL$73/*type*/;
if(PL$30/*par*/["dynamic"]){
PL$73/*type*/ = {"isDynamic": true,
"extraRes": PL$30/*par*/["extraRes"]};;

}else{
PL$73/*type*/ = this["getProvisionalType"](PL$58/*parParsed*/);;
};
;
this["types"][PL$31/*name*/] = {"name": PL$31/*name*/,
"type": PL$73/*type*/,
"isDynamic": PL$73/*type*/["isDynamic"],
"extraRes": PL$30/*par*/["extraRes"]};;
;
});;
this["getTypeName"] = (function(PL$75/*parType*/, PL$58/*parParsed*/){
var PL$31/*name*/;
;
PL$31/*name*/;
for(PL$31/*name*/ in this["types"]){if((this["types"][PL$31/*name*/]["type"] === PL$75/*parType*/)){
return this["types"][PL$31/*name*/]["name"];;
};
;
};
;
this["error"](PL$58/*parParsed*/, PL$12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(PL$30/*par*/){
var PL$31/*name*/;
var PL$64/*entry*/;
var PL$73/*type*/;
var PL$169/*provisional*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$30/*par*/["name"]);
PL$64/*entry*/ = this["_getTypeEntry"](PL$30/*par*/["name"]);
if(PL$64/*entry*/["type"]["isDynamic"]){
this["error"](PL$30/*par*/["par"], PL$12/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(PL$64/*entry*/["isDefined"]){
this["error"](PL$30/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$73/*type*/ = PL$18/*classSystem*/["createClass"](PL$30/*par*/["literal"], {});
PL$169/*provisional*/ = PL$64/*entry*/["type"];
PL$64/*entry*/["type"] = PL$73/*type*/;;
try
{this["resolveProvisional"](PL$169/*provisional*/, PL$73/*type*/);;
}catch(PL$170/*e*/){this["error"](PL$30/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$64/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(PL$78/*parName*/, PL$58/*parParsed*/, PL$30/*par*/){
var PL$31/*name*/;
var PL$171/*throwError*/;
var PL$128/*typename*/;
var PL$172/*typeEntry*/;
var PL$97/*extraRes*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$78/*parName*/);
PL$171/*throwError*/ = true;
if((PL$30/*par*/ && PL$30/*par*/["dontThrow"])){
PL$171/*throwError*/ = false;;
};
;
if(this["types"]["hasOwnProperty"](PL$31/*name*/)){
return this["types"][PL$31/*name*/];;
};
;
if((PL$31/*name*/[(PL$31/*name*/["length"] - 1)] == "*")){
PL$128/*typename*/ = PL$31/*name*/["substr"](0, (PL$31/*name*/["length"] - 1));
PL$172/*typeEntry*/ = this["_getTypeEntry"](PL$128/*typename*/, PL$58/*parParsed*/, PL$30/*par*/);
if(PL$172/*typeEntry*/){
PL$97/*extraRes*/ = PL$172/*typeEntry*/["extraRes"];
this["types"][PL$31/*name*/] = {"name": PL$31/*name*/,
"type": PL$18/*classSystem*/["_createPromiseOfClass"](PL$172/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": PL$97/*extraRes*/};;
PL$97/*extraRes*/["push"]("var ");;
PL$97/*extraRes*/["push"](this["renderType"](PL$31/*name*/));;
this["common"]["useClassSystem"] = true;;
PL$97/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
PL$97/*extraRes*/["push"](this["renderType"](PL$128/*typename*/));;
PL$97/*extraRes*/["push"](");\nvar ");;
PL$97/*extraRes*/["push"]((this["getVariableName"](PL$31/*name*/) + " = "));;
PL$97/*extraRes*/["push"](this["renderType"](PL$31/*name*/));;
PL$97/*extraRes*/["push"](";\n");;
PL$97/*extraRes*/["push"]((("var " + this["getConstructorName"](PL$31/*name*/)) + " = undefined;"));;
PL$97/*extraRes*/["push"](this["_typeReadyCode"]({"typename": PL$31/*name*/,
"noConstructor": false}));;
return this["types"][PL$31/*name*/];;
};
;
};
;
if(! PL$171/*throwError*/){
return;;
};
;
this["error"](PL$58/*parParsed*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$31/*name*/});;
;
});;
this["getType"] = (function(PL$78/*parName*/, PL$58/*parParsed*/, PL$30/*par*/){
var PL$64/*entry*/;
;
PL$64/*entry*/ = this["_getTypeEntry"](PL$78/*parName*/, PL$58/*parParsed*/, PL$30/*par*/);
if(PL$64/*entry*/){
return PL$64/*entry*/["type"];;
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
this["getConstructorName"] = (function(PL$78/*parName*/){
var PL$31/*name*/;
var PL$35/*t*/;
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$78/*parName*/);
if(this["types"]["hasOwnProperty"](PL$31/*name*/)){
PL$35/*t*/ = this["types"][PL$31/*name*/];
if(! PL$35/*t*/["constructorName"]){
PL$35/*t*/["constructorName"] = this["getUniqueName"]((PL$31/*name*/ + "-constructor"));;
if(! PL$35/*t*/["isDynamic"]){
this["localClassConstructors"][PL$31/*name*/] = PL$35/*t*/["constructorName"];;
};
;
};
;
return PL$35/*t*/["constructorName"];;
};
;
this["error"](PL$78/*parName*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$31/*name*/});;
;
});;
this["expTryStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$173/*catchPromise*/;
var PL$174/*continuePromise*/;
var PL$139/*b*/;
var PL$140/*extraPar*/;
var PL$175/*temporaryPs*/;
;
PL$26/*res*/ = this["newResult"]();
PL$173/*catchPromise*/;
PL$174/*continuePromise*/;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$26/*res*/["addPre"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$173/*catchPromise*/ = this["getUniqueName"]();;
PL$26/*res*/["addPre"]((((("var " + PL$173/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
PL$26/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + PL$173/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$26/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + PL$173/*catchPromise*/) + ".resolve(e); };\n"));;
PL$26/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
PL$26/*res*/["push"]("try\n");;
};
;
PL$139/*b*/ = PL$30/*par*/["block"];
PL$140/*extraPar*/ = {};
PL$139/*b*/["brackets"] = true;;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
PL$140/*extraPar*/["postCode"] = this["newResult"]((PL$174/*continuePromise*/ + ".resolve()"));;
};
;
PL$26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/)));;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
PL$26/*res*/["push"](")();\n");;
PL$26/*res*/["push"]((((PL$173/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
PL$26/*res*/["push"]("catch(");;
};
;
PL$175/*temporaryPs*/;
if(PL$30/*par*/["handler"]["param"]){
PL$26/*res*/["push"](this["getVariableName"](PL$32/*identifierName*/(PL$30/*par*/["handler"]["param"])));;
PL$175/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": PL$32/*identifierName*/(PL$30/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, PL$30/*par*/["handler"]);;
};
;
PL$26/*res*/["push"](")");;
PL$139/*b*/ = PL$30/*par*/["handler"]["body"];;
PL$140/*extraPar*/ = {};;
PL$139/*b*/["brackets"] = true;;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
PL$140/*extraPar*/["postCode"] = this["newResult"]((PL$174/*continuePromise*/ + ".resolve();"));;
};
;
PL$26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/)));;
if(PL$42/*checkPromising*/(PL$30/*par*/)){
PL$26/*res*/["push"]("));\n");;
PL$26/*res*/["push"](PL$174/*continuePromise*/);;
PL$26/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
PL$26/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(PL$30/*par*/["finally"]){
PL$26/*res*/["push"]("finally");;
PL$139/*b*/ = PL$30/*par*/["finally"];;
PL$139/*b*/["brackers"] = true;;
PL$26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$139/*b*/)));;
};
;
if(PL$175/*temporaryPs*/){
PL$175/*temporaryPs*/["resolve"]();;
};
;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["getModuleHashStr"] = (function(){
;
return (this["hashStr"] || "unknownhash");;
;
});;
this["makeStatement"] = (function(PL$30/*par*/){
var PL$176/*statementRes*/;
;
PL$176/*statementRes*/ = this["newResult"]();
PL$176/*statementRes*/["setStatement"]();;
PL$176/*statementRes*/["push"](PL$30/*par*/);;
PL$176/*statementRes*/["push"](";\n");;
return PL$176/*statementRes*/;;
;
});;
this["expBlockStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$30/*par*/["brackets"] = true;;
PL$26/*res*/["pushType"](this["blockCreator"](PL$30/*par*/));;
return PL$26/*res*/;;
;
});;
this["blockCreator"] = (function(PL$30/*par*/, PL$177/*parExtra*/){
var PL$26/*res*/;
var PL$178/*blockRes*/;
var PL$179/*sAr*/;
var PL$37/*i*/;
var PL$92/*l*/;
;
if(! PL$177/*parExtra*/){
PL$177/*parExtra*/ = {};;
};
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["setType"](PL$19/*statementType*/);;
if(PL$30/*par*/["brackets"]){
PL$26/*res*/["push"]("{");;
};
;
PL$178/*blockRes*/ = this["newResult"]();
PL$179/*sAr*/ = [];
if((PL$30/*par*/ instanceof PL$180/*Array*/)){
PL$179/*sAr*/ = PL$30/*par*/;;

}else{
if((PL$30/*par*/["type"] == "BlockStatement")){
PL$179/*sAr*/ = PL$30/*par*/["body"];;

}else{
PL$181/*console*/["log"]("here <------------------------");;
PL$179/*sAr*/["push"](this["parseExpression"](PL$30/*par*/));;
};
;
};
;
if(PL$177/*parExtra*/["preCode"]){
PL$178/*blockRes*/["push"](this["makeStatement"](PL$177/*parExtra*/["preCode"]));;
};
;
PL$37/*i*/ = 0;
PL$92/*l*/ = PL$179/*sAr*/["length"];
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$178/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](PL$179/*sAr*/[PL$37/*i*/])));;
}};
;
if(PL$177/*parExtra*/["postCode"]){
PL$178/*blockRes*/["push"](this["makeStatement"](PL$177/*parExtra*/["postCode"]));;
};
;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$178/*blockRes*/));;
if(PL$30/*par*/["brackets"]){
PL$26/*res*/["push"]("}");;
};
;
return PL$26/*res*/;;
;
});;
this["parseExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["_parseExpression"](PL$30/*par*/);
if(! PL$26/*res*/["getType"]()){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["internalMissingResultType"]);;
};
;
PL$26/*res*/["setParsed"](PL$30/*par*/);;
return PL$26/*res*/;;
;
});;
this["_parseExpression"] = (function(PL$24/*value*/){
var PL$26/*res*/;
;
PL$26/*res*/;
switch (PL$24/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](PL$24/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](PL$24/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](PL$24/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](PL$24/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](PL$24/*value*/);;
case "CallExpression":
return this["expCallExpression"](PL$24/*value*/);;
case "Class":
return this["expClassStatement"](PL$24/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](PL$24/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](PL$24/*value*/);;
case "ConnectExpression":
return this["connectExpression"](PL$24/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](PL$24/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](PL$24/*value*/);;
case "EmptyStatement":
PL$26/*res*/ = this["newResult"]();;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](PL$24/*value*/);;
case "ForInStatement":
return this["expForInStatement"](PL$24/*value*/);;
case "ForStatement":
return this["expForStatement"](PL$24/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](PL$24/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](PL$24/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](PL$24/*value*/);;
case "Identifier":
return this["expIdentifier"](PL$24/*value*/);;
case "IfStatement":
return this["expIfStatement"](PL$24/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](PL$24/*value*/);;
case "Literal":
return this["expLiteral"](PL$24/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](PL$24/*value*/);;
case "NewExpression":
return this["expNewExpression"](PL$24/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](PL$24/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](PL$24/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](PL$24/*value*/);;
case "ThisExpression":
return this["expThisExpression"](PL$24/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](PL$24/*value*/);;
case "TryStatement":
return this["expTryStatement"](PL$24/*value*/);;
case "UnaryExpression":
if((PL$24/*value*/["operator"] == "*")){
return this["expPromiseExpression"](PL$24/*value*/["argument"]);;
};
;
if((PL$24/*value*/["operator"] == "require")){
return this["expRequireExpression"](PL$24/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](PL$24/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](PL$24/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](PL$24/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](PL$24/*value*/);;
case "WhileStatement":
return this["whileStatement"](PL$24/*value*/);;
default:
this["error"](PL$24/*value*/, PL$12/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(PL$58/*parParsed*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](PL$58/*parParsed*/["expression"])});
PL$26/*res*/["push"](";");;
return PL$26/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]("debugger");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expFunctionExpression"] = (function(PL$24/*value*/, PL$182/*declaration*/){
var PL$183/*cp*/;
var PL$184/*funName*/;
var PL$136/*funRes*/;
var PL$185/*uv*/;
var PL$31/*name*/;
var PL$26/*res*/;
;
PL$183/*cp*/ = this["newInstance"](PL$24/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
PL$184/*funName*/ = PL$183/*cp*/["getFunctionName"]();
PL$136/*funRes*/ = PL$183/*cp*/["getFunctionRes"]();
PL$185/*uv*/ = PL$183/*cp*/["_getUsedVairables"]();
PL$31/*name*/;
for(PL$31/*name*/ in PL$185/*uv*/){if((PL$185/*uv*/[PL$31/*name*/] === true)){
this["_addUsedVariable"](PL$31/*name*/);;
};
;
};
;
PL$26/*res*/;
if((PL$184/*funName*/ && PL$136/*funRes*/)){
this["addFunction"](PL$136/*funRes*/, PL$184/*funName*/);;
PL$26/*res*/ = this["newResult"](this["getVariableName"](PL$184/*funName*/));;
PL$26/*res*/["setType"](PL$136/*funRes*/["getType"]());;
return PL$26/*res*/;;
};
;
PL$26/*res*/ = this["newResult"]();;
if(! PL$182/*declaration*/){
PL$26/*res*/["push"]("(");;
};
;
PL$26/*res*/["pushType"]((PL$136/*funRes*/ || PL$183/*cp*/["getResult"]()));;
if(! PL$182/*declaration*/){
PL$26/*res*/["push"](")");;
};
;
return PL$26/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(PL$24/*value*/){
;
return this["expFunctionExpression"](PL$24/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(PL$24/*value*/){
;
PL$24/*value*/["id"] = undefined;;
return this["expFunctionExpression"](PL$24/*value*/);;
;
});;
this["expUpdateExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(PL$30/*par*/["prefix"]){
PL$26/*res*/["push"](PL$30/*par*/["operator"]);;
};
;
PL$26/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["argument"])));;
if(! PL$30/*par*/["prefix"]){
PL$26/*res*/["push"](PL$30/*par*/["operator"]);;
};
;
return PL$26/*res*/;;
;
});;
this["expIdentifier"] = (function(PL$30/*par*/){
;
return this["getVariable"](PL$32/*identifierName*/(PL$30/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
switch (typeof PL$30/*par*/["value"]){
case "string":
PL$26/*res*/["push"](PL$14/*stringEncodeStr*/(PL$30/*par*/["value"]));;
break;;
case "number":
PL$26/*res*/["push"](("" + PL$30/*par*/["value"]));;
break;;
case "boolean":
if(PL$30/*par*/["value"]){
PL$26/*res*/["push"]("true");;

}else{
PL$26/*res*/["push"]("false");;
};
;
break;;
default:
if((PL$30/*par*/["value"] === null)){
PL$26/*res*/["push"]("null");;

}else{
if((PL$30/*par*/["value"] && PL$30/*par*/["value"]["exec"])){
PL$26/*res*/["push"](("" + PL$30/*par*/["value"]));;

}else{
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["internalUnknownLiteralType"]);;
};
};
;
}
;
;
PL$26/*res*/["setType"](this["getType"]("var"));;
return PL$26/*res*/;;
;
});;
this["expPromiseExpression"] = (function(PL$186/*parExpression*/){
var PL$26/*res*/;
var PL$187/*expressionRes*/;
var PL$188/*promiseNameStr*/;
var PL$189/*dereferencePre*/;
var PL$190/*preRes*/;
var PL$191/*dereferencePost*/;
var PL$192/*postRes*/;
var PL$193/*promiseType*/;
;
PL$26/*res*/ = this["newResult"]();
PL$187/*expressionRes*/ = this["parseExpression"](PL$186/*parExpression*/);
PL$188/*promiseNameStr*/ = this["getUniqueName"]();
PL$26/*res*/["makePromising"]();;
PL$26/*res*/["setPromiseName"](PL$188/*promiseNameStr*/);;
PL$189/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$187/*expressionRes*/});
PL$190/*preRes*/ = this["newResult"]();
PL$190/*preRes*/["push"](PL$189/*dereferencePre*/);;
PL$190/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$190/*preRes*/["push"](PL$188/*promiseNameStr*/);;
PL$190/*preRes*/["push"]("){");;
PL$26/*res*/["addPre"](PL$190/*preRes*/);;
PL$191/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$187/*expressionRes*/});
PL$192/*postRes*/ = this["newResult"]();
PL$192/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$192/*postRes*/["push"](PL$191/*dereferencePost*/);;
PL$192/*postRes*/["push"](";");;
PL$26/*res*/["addPost"](PL$192/*postRes*/);;
PL$193/*promiseType*/ = PL$187/*expressionRes*/["getType"]();
PL$26/*res*/["setType"](this["getClassFromPromiseOf"](PL$193/*promiseType*/));;
return PL$26/*res*/;;
;
});;
this["expUnaryExpression"] = (function(PL$186/*parExpression*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](PL$186/*parExpression*/["operator"]);;
PL$26/*res*/["push"](" ");;
PL$26/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$186/*parExpression*/["argument"])));;
return PL$26/*res*/;;
;
});;
this["expRequireExpression"] = (function(PL$186/*parExpression*/){
var PL$26/*res*/;
var PL$187/*expressionRes*/;
var PL$188/*promiseNameStr*/;
var PL$189/*dereferencePre*/;
var PL$190/*preRes*/;
var PL$191/*dereferencePost*/;
var PL$192/*postRes*/;
;
PL$26/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
PL$187/*expressionRes*/ = this["newResult"]();
PL$187/*expressionRes*/["push"]("__requireFun(");;
PL$187/*expressionRes*/["push"](this["parseExpression"](PL$186/*parExpression*/));;
PL$187/*expressionRes*/["push"](")");;
PL$187/*expressionRes*/["setType"]("var");;
PL$188/*promiseNameStr*/ = this["getUniqueName"]();
PL$26/*res*/["makePromising"]();;
PL$26/*res*/["setPromiseName"](PL$188/*promiseNameStr*/);;
PL$189/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$187/*expressionRes*/});
PL$190/*preRes*/ = this["newResult"]();
PL$190/*preRes*/["push"](PL$189/*dereferencePre*/);;
PL$190/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$190/*preRes*/["push"](PL$188/*promiseNameStr*/);;
PL$190/*preRes*/["push"]("){");;
PL$26/*res*/["addPre"](PL$190/*preRes*/);;
PL$191/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$187/*expressionRes*/});
PL$192/*postRes*/ = this["newResult"]();
PL$192/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$192/*postRes*/["push"](PL$191/*dereferencePost*/);;
PL$192/*postRes*/["push"](";");;
PL$26/*res*/["addPost"](PL$192/*postRes*/);;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["expNewExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$194/*typed*/;
var PL$73/*type*/;
var PL$37/*i*/;
var PL$195/*constructorType*/;
var PL$196/*expression*/;
;
PL$26/*res*/ = this["newResult"]();
PL$194/*typed*/ = false;
PL$73/*type*/ = "var";
if((PL$30/*par*/["callee"] && (PL$30/*par*/["callee"]["type"] == "Identifier"))){
PL$73/*type*/ = this["getType"](PL$32/*identifierName*/(PL$30/*par*/["callee"]), PL$30/*par*/, {"dontThrow": true});;
if(PL$73/*type*/){
PL$26/*res*/["push"]("new ");;
PL$26/*res*/["push"](this["getConstructorName"](PL$30/*par*/["callee"]));;
PL$26/*res*/["push"]("(");;
PL$194/*typed*/ = true;;
PL$26/*res*/["setType"](this["createTemporaryTrackedClass"](PL$73/*type*/));;
};
;
};
;
if(! PL$194/*typed*/){
PL$26/*res*/["push"]("new ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["callee"])));;
PL$26/*res*/["push"]("(");;
};
;
PL$37/*i*/ = 0;
PL$195/*constructorType*/;
if(PL$194/*typed*/){
PL$195/*constructorType*/ = this["getConstructorType"]({"type": PL$73/*type*/}, PL$30/*par*/);;
};
;
for(PL$37/*i*/;(PL$37/*i*/ < PL$30/*par*/["arguments"]["length"]);++PL$37/*i*/){{if(PL$37/*i*/){
PL$26/*res*/["push"](", ");;
};
;
PL$196/*expression*/ = this["parseExpression"](PL$30/*par*/["arguments"][PL$37/*i*/]);
if(PL$194/*typed*/){
PL$26/*res*/["push"](this["getPassAsTypeCode"]({"value": PL$196/*expression*/,
"valueType": PL$196/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](PL$195/*constructorType*/, PL$37/*i*/, PL$30/*par*/),
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;

}else{
PL$26/*res*/["push"](this["expectTypeVar"](PL$196/*expression*/));;
};
;
}};
;
PL$26/*res*/["push"](")");;
if(! PL$194/*typed*/){
PL$26/*res*/["setType"]("var");;
};
;
return PL$26/*res*/;;
;
});;
this["connectExpression"] = (function(PL$58/*parParsed*/){
var PL$26/*res*/;
var PL$197/*signalObject*/;
var PL$198/*signalProperty*/;
var PL$199/*slotObject*/;
var PL$200/*slotProperty*/;
var PL$201/*fun*/;
;
PL$26/*res*/ = this["newResult"]();
if((PL$58/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](PL$58/*parParsed*/["signal"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$58/*parParsed*/["signal"]["computed"]){
this["error"](PL$58/*parParsed*/["signal"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$197/*signalObject*/ = this["parseExpression"](PL$58/*parParsed*/["signal"]["object"]);
PL$198/*signalProperty*/ = PL$32/*identifierName*/(PL$58/*parParsed*/["signal"]["property"]);
if(PL$58/*parParsed*/["slot"]){
if((PL$58/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](PL$58/*parParsed*/["slot"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$58/*parParsed*/["slot"]["computed"]){
this["error"](PL$58/*parParsed*/["slot"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$199/*slotObject*/ = this["parseExpression"](PL$58/*parParsed*/["slot"]["object"]);
PL$200/*slotProperty*/ = PL$32/*identifierName*/(PL$58/*parParsed*/["slot"]["property"]);
PL$26/*res*/["push"](this["connectSlotCode"]({"signalObject": PL$197/*signalObject*/,
"signalProperty": PL$198/*signalProperty*/,
"slotObject": PL$199/*slotObject*/,
"slotProperty": PL$200/*slotProperty*/,
"errorFun": this["getWarningFun"](PL$58/*parParsed*/)}));;

}else{
if(PL$58/*parParsed*/["fun"]){
PL$201/*fun*/ = this["parseExpression"](PL$58/*parParsed*/["fun"]);
PL$26/*res*/["push"](this["connectFunCode"]({"signalObject": PL$197/*signalObject*/,
"signalProperty": PL$198/*signalProperty*/,
"fun": PL$201/*fun*/,
"errorFun": this["getWarningFun"](PL$58/*parParsed*/)}));;

}else{
this["error"](PL$58/*parParsed*/, PL$12/*errorMsg*/["unknownConnect"]);;
};
};
;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["breakOrContinuePromise"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$202/*promiseName*/;
var PL$203/*outerBlock*/;
var PL$139/*b*/;
var PL$141/*block*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["makePromising"]();;
PL$202/*promiseName*/ = (PL$30/*par*/["promiseName"] || this["getUniqueName"]());
PL$26/*res*/["setPromiseName"](PL$202/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((PL$202/*promiseName*/ + ".resolve(false); return ") + PL$202/*promiseName*/) + ";\n");;
this["continueCode"] = (((PL$202/*promiseName*/ + ".resolve(true); return ") + PL$202/*promiseName*/) + ";\n");;
PL$26/*res*/["push"]((((("var " + PL$202/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$203/*outerBlock*/ = this["newResult"]();
if(PL$30/*par*/["preCondition"]){
PL$203/*outerBlock*/["push"]("if(");;
PL$203/*outerBlock*/["push"](PL$30/*par*/["preCondition"]);;
PL$203/*outerBlock*/["push"]("){");;
};
;
PL$139/*b*/ = PL$30/*par*/["block"];
PL$139/*b*/["brackets"] = false;;
PL$141/*block*/ = this["blockCreator"](PL$139/*b*/, {"postCode": this["newResult"](this["continueCode"])});
PL$203/*outerBlock*/["push"](this["makeCompleteStatement"](PL$141/*block*/));;
if(PL$30/*par*/["preCondition"]){
PL$203/*outerBlock*/["push"]("}else{");;
PL$203/*outerBlock*/["push"](this["breakCode"]);;
PL$203/*outerBlock*/["push"]("};\n");;
};
;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$203/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return PL$26/*res*/;;
;
});;
this["generateLoop"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$204/*loopFun*/;
var PL$205/*loopEndPromise*/;
var PL$206/*loopCode*/;
var PL$207/*doFun*/;
var PL$208/*doFunStatement*/;
;
PL$26/*res*/ = this["newResult"]();
PL$204/*loopFun*/ = this["getUniqueName"]();
PL$205/*loopEndPromise*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((((("var " + PL$205/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$26/*res*/["push"]((("var " + PL$204/*loopFun*/) + " = function(){"));;
PL$206/*loopCode*/ = this["breakOrContinuePromise"]({"block": PL$30/*par*/["block"],
"preCondition": PL$30/*par*/["preCondition"],
"postCode": PL$30/*par*/["postCode"]});
PL$26/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](PL$206/*loopCode*/)));;
PL$26/*res*/["push"]("return ");;
PL$26/*res*/["push"](PL$206/*loopCode*/["getPromiseName"]());;
PL$26/*res*/["push"](";\n");;
PL$26/*res*/["push"]("};\n");;
PL$207/*doFun*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((("var " + PL$207/*doFun*/) + " = function(){"));;
PL$26/*res*/["push"](PL$204/*loopFun*/);;
PL$26/*res*/["push"]("().then(function(contLoop){\n");;
PL$26/*res*/["push"]("if (contLoop){");;
PL$208/*doFunStatement*/ = this["newResult"]();
if(PL$30/*par*/["postCode"]){
PL$208/*doFunStatement*/["push"](this["makeStatement"](PL$30/*par*/["postCode"]));;
};
;
PL$208/*doFunStatement*/["push"]((PL$207/*doFun*/ + "();"));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$208/*doFunStatement*/));;
PL$26/*res*/["push"]("}else{");;
PL$26/*res*/["push"]((PL$205/*loopEndPromise*/ + ".resolve();"));;
PL$26/*res*/["push"]("};\n");;
PL$26/*res*/["push"]("});\n");;
PL$26/*res*/["push"]("};\n");;
PL$26/*res*/["push"]((PL$207/*doFun*/ + "();\n"));;
PL$26/*res*/["push"](PL$205/*loopEndPromise*/);;
PL$26/*res*/["push"](".then(function(){");;
PL$26/*res*/["addPost"]("});");;
return PL$26/*res*/;;
;
});;
this["expForStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$209/*statement*/;
var PL$210/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$209/*statement*/;
PL$210/*promising*/ = false;
if(((PL$42/*checkPromising*/(PL$30/*par*/["test"]) || PL$42/*checkPromising*/(PL$30/*par*/["update"])) || PL$42/*checkPromising*/(PL$30/*par*/["body"]))){
PL$210/*promising*/ = true;;
};
;
if(PL$210/*promising*/){
PL$26/*res*/["push"](this["makeStatement"](this["parseExpression"](PL$30/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$30/*par*/["body"],
"preCondition": this["parseExpression"](PL$30/*par*/["test"]),
"postCode": this["parseExpression"](PL$30/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["init"]));;
PL$26/*res*/["push"](";");;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["test"]));;
PL$26/*res*/["push"](";");;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["update"]));;
PL$26/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$209/*statement*/ = this["newResult"]();;
PL$209/*statement*/["push"](this["expBlockStatement"](PL$30/*par*/["body"]));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expForInStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$209/*statement*/;
var PL$210/*promising*/;
var PL$211/*iteratorRes*/;
var PL$212/*iteratorAccess*/;
var PL$213/*arrayName*/;
var PL$214/*iName*/;
var PL$215/*conditionRes*/;
var PL$216/*postCodeRes*/;
var PL$139/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$209/*statement*/;
PL$210/*promising*/ = false;
if(PL$42/*checkPromising*/(PL$30/*par*/["body"])){
PL$210/*promising*/ = true;;
};
;
if(PL$210/*promising*/){
PL$211/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["left"]));
PL$212/*iteratorAccess*/ = PL$211/*iteratorRes*/;
if(PL$211/*iteratorRes*/["promising"]){
PL$212/*iteratorAccess*/ = PL$211/*iteratorRes*/["getPromiseName"]();;
};
;
PL$213/*arrayName*/ = this["getUniqueName"]();
PL$26/*res*/["addPre"]((("var " + PL$213/*arrayName*/) + " = [];"));;
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](PL$211/*iteratorRes*/);;
PL$26/*res*/["push"](" in ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["right"])));;
PL$26/*res*/["push"]("){");;
PL$26/*res*/["push"]((PL$213/*arrayName*/ + ".push("));;
PL$26/*res*/["push"](PL$212/*iteratorAccess*/);;
PL$26/*res*/["push"](");");;
PL$26/*res*/["push"]("};");;
PL$26/*res*/["push"](PL$211/*iteratorRes*/);;
PL$26/*res*/["push"](((" = " + PL$213/*arrayName*/) + "[0];"));;
PL$214/*iName*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((("var " + PL$214/*iName*/) + " = 0;"));;
PL$215/*conditionRes*/ = this["newResult"]();
PL$215/*conditionRes*/["push"]((((PL$214/*iName*/ + " < ") + PL$213/*arrayName*/) + ".length"));;
PL$216/*postCodeRes*/ = this["newResult"]();
PL$216/*postCodeRes*/["push"]((PL$214/*iName*/ + "++;"));;
PL$216/*postCodeRes*/["push"](PL$211/*iteratorRes*/);;
PL$216/*postCodeRes*/["push"](((((" = " + PL$213/*arrayName*/) + "[") + PL$214/*iName*/) + "];"));;
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$30/*par*/["body"],
"preCondition": PL$215/*conditionRes*/,
"postCode": PL$216/*postCodeRes*/}));;
PL$26/*res*/["push"]("}");;

}else{
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["left"])));;
PL$26/*res*/["push"](" in ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["right"])));;
PL$26/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$209/*statement*/ = this["newResult"]();;
PL$139/*b*/ = PL$30/*par*/["body"];
PL$139/*b*/["brackets"] = true;;
PL$209/*statement*/["push"](this["blockCreator"](PL$139/*b*/));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["whileStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$217/*statements*/;
var PL$111/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$217/*statements*/;
PL$111/*condition*/ = this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["test"]));
if((PL$42/*checkPromising*/(PL$111/*condition*/) || PL$42/*checkPromising*/(PL$30/*par*/["body"]))){
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$30/*par*/["body"],
"preCondition": PL$111/*condition*/}));;

}else{
PL$26/*res*/["push"]("while(");;
PL$26/*res*/["push"](PL$111/*condition*/);;
PL$26/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$26/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](PL$30/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expIfStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$210/*promising*/;
var PL$174/*continuePromise*/;
var PL$218/*continueCode*/;
var PL$209/*statement*/;
var PL$139/*b*/;
var PL$140/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$210/*promising*/ = false;
if((PL$30/*par*/["consequent"] && PL$42/*checkPromising*/(PL$30/*par*/["consequent"]))){
PL$210/*promising*/ = true;;
};
;
if((PL$30/*par*/["alternate"] && PL$42/*checkPromising*/(PL$30/*par*/["alternate"]))){
PL$210/*promising*/ = true;;
};
;
PL$174/*continuePromise*/;
PL$218/*continueCode*/;
if(PL$210/*promising*/){
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$26/*res*/["push"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$218/*continueCode*/ = (PL$174/*continuePromise*/ + ".resolve();");;
};
;
PL$26/*res*/["push"]("if(");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["test"])));;
PL$26/*res*/["push"]("){\n");;
if(! PL$30/*par*/["consequent"]){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["unknownIfStatement"]);;
};
;
PL$209/*statement*/ = this["newResult"]();
PL$139/*b*/;
if((PL$30/*par*/["consequent"]["type"] == "BlockStatement")){
PL$139/*b*/ = PL$30/*par*/["consequent"]["body"];;

}else{
PL$139/*b*/ = [PL$30/*par*/["consequent"]];;
};
;
PL$139/*b*/["brackets"] = false;;
PL$140/*extraPar*/ = {};
if(PL$210/*promising*/){
PL$140/*extraPar*/["postCode"] = this["newResult"](PL$218/*continueCode*/);;
};
;
PL$209/*statement*/["push"](this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;
if(PL$30/*par*/["alternate"]){
PL$26/*res*/["push"]("\n}else{\n");;
PL$209/*statement*/ = this["newResult"]();;
if((PL$30/*par*/["alternate"]["type"] == "BlockStatement")){
PL$139/*b*/ = PL$30/*par*/["alternate"]["body"];;

}else{
PL$139/*b*/ = [PL$30/*par*/["alternate"]];;
};
;
PL$139/*b*/["brackets"] = false;;
PL$140/*extraPar*/ = {};;
if(PL$210/*promising*/){
PL$140/*extraPar*/["postCode"] = this["newResult"](PL$218/*continueCode*/);;
};
;
PL$209/*statement*/["push"](this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;

}else{
if(PL$210/*promising*/){
PL$26/*res*/["push"]("\n}else{\n");;
PL$209/*statement*/ = this["newResult"]();;
PL$209/*statement*/["push"](PL$218/*continueCode*/);;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;
};
};
;
PL$26/*res*/["push"]("}");;
if(PL$210/*promising*/){
PL$26/*res*/["push"]((("; " + PL$174/*continuePromise*/) + ".then(function(){"));;
PL$26/*res*/["addPost"]("});");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["conditionalExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$219/*tempPromise*/;
var PL$220/*tempValue*/;
var PL$221/*trueExtraCode*/;
var PL$222/*falseExtraCode*/;
;
PL$26/*res*/ = this["newResult"]();
if((PL$30/*par*/["consequent"]["promising"] || PL$30/*par*/["alternate"]["promising"])){
PL$26/*res*/["makePromising"]();;
PL$219/*tempPromise*/ = this["getUniqueName"]();
PL$220/*tempValue*/ = this["getUniqueName"]();
PL$26/*res*/["addPre"]("var ");;
PL$26/*res*/["addPre"](PL$219/*tempPromise*/);;
PL$26/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$26/*res*/["addPre"]("if(");;
PL$26/*res*/["addPre"](this["parseExpression"](PL$30/*par*/["test"]));;
PL$26/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$221/*trueExtraCode*/ = this["newResult"]();
PL$221/*trueExtraCode*/["push"](PL$219/*tempPromise*/);;
PL$221/*trueExtraCode*/["push"](".resolve(");;
PL$221/*trueExtraCode*/["push"](this["parseExpression"](PL$30/*par*/["consequent"]));;
PL$221/*trueExtraCode*/["push"](");\n");;
PL$26/*res*/["addPre"](this["makeCompleteStatement"](PL$221/*trueExtraCode*/));;
PL$26/*res*/["addPre"]("}else{");;
PL$222/*falseExtraCode*/ = this["newResult"]();
PL$222/*falseExtraCode*/["push"](PL$219/*tempPromise*/);;
PL$222/*falseExtraCode*/["push"](".resolve(");;
PL$222/*falseExtraCode*/["push"](this["parseExpression"](PL$30/*par*/["alternate"]));;
PL$222/*falseExtraCode*/["push"](");\n");;
PL$26/*res*/["addPre"](this["makeCompleteStatement"](PL$222/*falseExtraCode*/));;
PL$26/*res*/["addPre"]("};\n");;
PL$26/*res*/["addPre"](PL$219/*tempPromise*/);;
PL$26/*res*/["addPre"](".then(");;
PL$26/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$26/*res*/["addPre"](PL$26/*res*/["getPromiseName"]());;
PL$26/*res*/["addPre"]("){");;
PL$26/*res*/["addPost"]("});");;
this["unstack"]("conditionalCode");;

}else{
PL$26/*res*/["push"]("(");;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["test"]));;
PL$26/*res*/["push"](" ? ");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["consequent"]));;
PL$26/*res*/["push"](" : ");;
PL$26/*res*/["push"](this["parseExpression"](PL$30/*par*/["alternate"]));;
PL$26/*res*/["push"](")");;
this["unstack"]("conditionalCode");;
};
;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["expSwitchStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$210/*promising*/;
var PL$174/*continuePromise*/;
var PL$218/*continueCode*/;
var PL$223/*discriminant*/;
var PL$224/*cases*/;
var PL$209/*statement*/;
var PL$225/*hasDefault*/;
var PL$226/*defaultCase*/;
var PL$227/*isDefault*/;
var PL$228/*defaultCheck*/;
var PL$229/*firstCheck*/;
var PL$230/*hasFirstCheck*/;
var PL$231/*currentCase*/;
var PL$232/*caseFun*/;
var PL$233/*checkFun*/;
var PL$234/*nextCheckCode*/;
var PL$235/*j*/;
var PL$236/*nextCaseCode*/;
var PL$237/*checkCode*/;
var PL$139/*b*/;
var PL$140/*extraPar*/;
var PL$37/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$210/*promising*/ = false;
if((PL$30/*par*/["cases"] && PL$42/*checkPromising*/(PL$30/*par*/["cases"]))){
PL$210/*promising*/ = true;;
};
;
PL$174/*continuePromise*/;
PL$218/*continueCode*/;
if(PL$210/*promising*/){
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$26/*res*/["push"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$218/*continueCode*/ = (PL$174/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = PL$218/*continueCode*/;;
PL$223/*discriminant*/ = this["getUniqueName"]("discriminant");
PL$26/*res*/["push"]((("var " + PL$223/*discriminant*/) + " = "));;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["discriminant"])));;
PL$26/*res*/["push"](";\n");;
PL$224/*cases*/ = [];
PL$209/*statement*/;
PL$225/*hasDefault*/ = false;
PL$226/*defaultCase*/;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$30/*par*/["cases"]["length"]);++PL$37/*i*/){{PL$227/*isDefault*/ = false;
if(! PL$30/*par*/["cases"][PL$37/*i*/]["test"]){
PL$227/*isDefault*/ = true;;
if(! PL$225/*hasDefault*/){
PL$225/*hasDefault*/ = true;;
PL$226/*defaultCase*/ = PL$30/*par*/["cases"][PL$37/*i*/];;
};
;
};
;
PL$224/*cases*/["push"]({"theCase": PL$30/*par*/["cases"][PL$37/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": PL$227/*isDefault*/});;
}};
;
PL$228/*defaultCheck*/ = PL$218/*continueCode*/;
if(PL$225/*hasDefault*/){
PL$228/*defaultCheck*/ = (PL$226/*defaultCase*/["checkFun"] + "();");;
};
;
PL$229/*firstCheck*/ = PL$218/*continueCode*/;
PL$230/*hasFirstCheck*/ = false;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$224/*cases*/["length"]);++PL$37/*i*/){{PL$231/*currentCase*/ = PL$224/*cases*/[PL$37/*i*/]["theCase"];
PL$232/*caseFun*/ = PL$224/*cases*/[PL$37/*i*/]["caseFun"];
PL$233/*checkFun*/ = PL$224/*cases*/[PL$37/*i*/]["checkFun"];
if(! PL$230/*hasFirstCheck*/){
PL$230/*hasFirstCheck*/ = true;;
PL$229/*firstCheck*/ = (PL$233/*checkFun*/ + "()");;
};
;
PL$234/*nextCheckCode*/ = PL$228/*defaultCheck*/;
for(PL$235/*j*/ = (PL$37/*i*/ + 1);(PL$235/*j*/ < PL$224/*cases*/["length"]);++PL$235/*j*/){{if(! PL$224/*cases*/[PL$235/*j*/]["isDefault"]){
PL$234/*nextCheckCode*/ = (PL$224/*cases*/[PL$235/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
PL$236/*nextCaseCode*/ = PL$218/*continueCode*/;
if(PL$224/*cases*/[(PL$37/*i*/ + 1)]){
PL$236/*nextCaseCode*/ = (PL$224/*cases*/[(PL$37/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
PL$26/*res*/["push"]((("var " + PL$233/*checkFun*/) + " = function(){"));;
PL$237/*checkCode*/ = this["newResult"]();
PL$237/*checkCode*/["push"]((("if(" + PL$223/*discriminant*/) + " === "));;
PL$237/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](PL$231/*currentCase*/["test"])));;
PL$237/*checkCode*/["push"]("){");;
PL$237/*checkCode*/["push"](PL$232/*caseFun*/);;
PL$237/*checkCode*/["push"]("(); return; };\n");;
PL$237/*checkCode*/["push"](PL$234/*nextCheckCode*/);;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$237/*checkCode*/));;
PL$26/*res*/["push"]("};\n");;
PL$26/*res*/["push"]((("var " + PL$232/*caseFun*/) + " = function(){"));;
PL$209/*statement*/ = this["newResult"]();;
PL$139/*b*/ = PL$231/*currentCase*/["consequent"];
PL$140/*extraPar*/ = {};
if(PL$210/*promising*/){
PL$140/*extraPar*/["postCode"] = this["newResult"]();;
PL$140/*extraPar*/["postCode"]["push"](PL$236/*nextCaseCode*/);;
};
;
PL$209/*statement*/["push"](this["blockCreator"](PL$139/*b*/, PL$140/*extraPar*/));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$209/*statement*/));;
PL$26/*res*/["push"]("};\n");;
}};
;
PL$26/*res*/["push"](PL$229/*firstCheck*/);;
PL$26/*res*/["push"]((("; " + PL$174/*continuePromise*/) + ".then(function(){"));;
PL$26/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
PL$26/*res*/["push"]("switch (");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["discriminant"])));;
PL$26/*res*/["push"]("){\n");;
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$30/*par*/["cases"]["length"]);++PL$37/*i*/){{PL$231/*currentCase*/ = PL$30/*par*/["cases"][PL$37/*i*/];
if((PL$231/*currentCase*/["type"] != "SwitchCase")){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["unknownCase"]);;
};
;
if(PL$231/*currentCase*/["test"]){
PL$26/*res*/["push"]("case ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$231/*currentCase*/["test"])));;
PL$26/*res*/["push"](":\n");;

}else{
PL$26/*res*/["push"]("default");;
PL$26/*res*/["push"](":\n");;
};
;
PL$26/*res*/["push"](this["blockCreator"](PL$231/*currentCase*/["consequent"]));;
}};
;
PL$26/*res*/["push"]("}\n");;
this["unstack"]("breakCode");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expBreakStatement"] = (function(PL$58/*parParsed*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(this["breakCode"]){
PL$26/*res*/["push"](this["breakCode"]);;

}else{
PL$26/*res*/["push"]("break;");;
};
;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expContinueStatement"] = (function(PL$58/*parParsed*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(this["continueCode"]){
PL$26/*res*/["push"](this["continueCode"]);;

}else{
PL$26/*res*/["push"]("continue;");;
};
;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expBinaryExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$238/*left*/;
var PL$239/*right*/;
var PL$240/*ltype*/;
var PL$241/*rtype*/;
var PL$219/*tempPromise*/;
var PL$220/*tempValue*/;
var PL$242/*rightExtraCode*/;
;
PL$26/*res*/ = this["newResult"]();
PL$238/*left*/ = this["parseExpression"](PL$30/*par*/["left"]);
PL$239/*right*/ = this["parseExpression"](PL$30/*par*/["right"]);
PL$26/*res*/["setType"]("var");;
if(((PL$30/*par*/["operator"] == "||") && PL$30/*par*/["right"]["promising"])){
PL$240/*ltype*/ = PL$238/*left*/["getType"]();
PL$241/*rtype*/ = PL$239/*right*/["getType"]();
if(((PL$240/*ltype*/ !== this["getType"]("var")) || (PL$241/*rtype*/ !== this["getType"]("var")))){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["notImplemented"]);;
};
;
PL$26/*res*/["makePromising"]();;
PL$219/*tempPromise*/ = this["getUniqueName"]();
PL$220/*tempValue*/ = this["getUniqueName"]();
PL$26/*res*/["addPre"]("var ");;
PL$26/*res*/["addPre"](PL$219/*tempPromise*/);;
PL$26/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$26/*res*/["addPre"]("var ");;
PL$26/*res*/["addPre"](PL$220/*tempValue*/);;
PL$26/*res*/["addPre"](" = ");;
PL$26/*res*/["addPre"](PL$238/*left*/);;
PL$26/*res*/["addPre"](";\n");;
PL$26/*res*/["addPre"]("if (");;
PL$26/*res*/["addPre"](PL$220/*tempValue*/);;
PL$26/*res*/["addPre"]("){ ");;
PL$26/*res*/["addPre"](PL$219/*tempPromise*/);;
PL$26/*res*/["addPre"](".resolve(");;
PL$26/*res*/["addPre"](PL$220/*tempValue*/);;
PL$26/*res*/["addPre"](") }else{ ");;
PL$242/*rightExtraCode*/ = this["newResult"]();
PL$242/*rightExtraCode*/["push"](PL$219/*tempPromise*/);;
PL$242/*rightExtraCode*/["push"](".resolve(");;
PL$242/*rightExtraCode*/["push"](PL$239/*right*/);;
PL$242/*rightExtraCode*/["push"](");\n");;
PL$26/*res*/["addPre"](this["makeCompleteStatement"](PL$242/*rightExtraCode*/));;
PL$26/*res*/["addPre"]("};\n");;
PL$26/*res*/["addPre"](PL$219/*tempPromise*/);;
PL$26/*res*/["addPre"](".then(");;
PL$26/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$26/*res*/["addPre"](PL$26/*res*/["getPromiseName"]());;
PL$26/*res*/["addPre"]("){");;
PL$26/*res*/["addPost"]("});");;

}else{
PL$26/*res*/["push"](this["getBinaryExpressionCode"]({"left": PL$238/*left*/,
"right": PL$239/*right*/,
"operator": PL$30/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;
};
;
return PL$26/*res*/;;
;
});;
this["expMemberExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$243/*base*/;
;
PL$26/*res*/ = this["newResult"]();
PL$243/*base*/ = this["parseExpression"](PL$30/*par*/["object"]);
PL$26/*res*/["pushType"](this["getGetPropertyCode"]({"instance": PL$243/*base*/,
"property": (PL$30/*par*/["computed"] ? undefined : PL$32/*identifierName*/(PL$30/*par*/["property"])),
"propertyValue": (PL$30/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["property"])) : undefined),
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;
return PL$26/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new PL$244/*InheritedSystem*/(this);;
;
});;
PL$244/*InheritedSystem*/ = (function(PL$30/*par*/){
;
this["instance"] = PL$30/*par*/;;
this["used"] = {};;
;
});
PL$244/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$30/*par*/){
;
this["currentMember"] = PL$30/*par*/;;
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
this["expObjectExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$245/*isClassObject*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$246/*currentMember*/;
var PL$161/*prop*/;
var PL$247/*v*/;
var PL$31/*name*/;
var PL$248/*functionRes*/;
;
PL$26/*res*/ = this["newResult"]();
PL$245/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
PL$26/*res*/["push"]("{");;
PL$37/*i*/ = 0;
PL$92/*l*/ = ((PL$30/*par*/["properties"] && PL$30/*par*/["properties"]["length"]) || 0);
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{this["isClassObject"] = false;;
PL$246/*currentMember*/;
if(PL$37/*i*/){
PL$26/*res*/["push"](",\n");;
};
;
PL$161/*prop*/ = PL$30/*par*/["properties"][PL$37/*i*/];
if((PL$161/*prop*/["kind"] == "init")){
PL$246/*currentMember*/ = PL$32/*identifierName*/(PL$161/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$246/*currentMember*/);;
};
;
PL$26/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$32/*identifierName*/(PL$161/*prop*/["key"])) + ": "));;
if(PL$161/*prop*/["value"]){
if(PL$40/*checkIsFunction*/(PL$161/*prop*/["value"])){
if(PL$245/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
PL$247/*v*/ = this["parseExpression"](PL$161/*prop*/["value"]);
PL$26/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": PL$247/*v*/,
"valueType": PL$247/*v*/["getType"](),
"type": this["getType"]((PL$161/*prop*/["typename"] || "var"), PL$30/*par*/),
"errorFun": this["getWarningFun"](PL$30/*par*/)})));;
};
;

}else{
if((PL$161/*prop*/["kind"] == "function")){
if(PL$245/*isClassObject*/){
this["isClassObject"] = true;;
};
;
PL$31/*name*/ = PL$32/*identifierName*/(PL$161/*prop*/["id"]);
PL$246/*currentMember*/ = PL$31/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$246/*currentMember*/);;
};
;
PL$161/*prop*/["id"] = undefined;;
PL$26/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$31/*name*/) + ": "));;
PL$248/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](PL$161/*prop*/));
PL$26/*res*/["push"](PL$248/*functionRes*/);;

}else{
if((PL$161/*prop*/["kind"] == "block")){

}else{
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
};
;
}};
;
PL$26/*res*/["push"]("}");;
PL$26/*res*/["setType"]("var");;
this["unstack"]("isClassObject");;
return PL$26/*res*/;;
;
});;
this["expClassObjectExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$26/*res*/ = this["expObjectExpression"](PL$30/*par*/);
this["unstack"]("isClassObject");;
return PL$26/*res*/;;
;
});;
this["expectTypeVar"] = (function(PL$30/*par*/){
var PL$50/*self*/;
var PL$170/*e*/;
;
if((PL$30/*par*/["getType"]() === this["getType"]("var"))){
return PL$30/*par*/;;
};
;
PL$50/*self*/ = this;
PL$170/*e*/ = this["addError"](PL$30/*par*/["getParsed"](), PL$12/*errorMsg*/["expectedVar"]);
PL$18/*classSystem*/["definitionPromise"](PL$30/*par*/["getType"]())["then"]((function(PL$35/*t*/){
;
if((PL$35/*t*/ === PL$50/*self*/["getType"]("var"))){
PL$170/*e*/["resolve"]();;
};
;
;
}));;
return PL$30/*par*/;;
;
});;
this["expVariableStatement"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$249/*declarations*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$250/*usedType*/;
var PL$54/*r*/;
;
PL$26/*res*/ = this["newResult"]();
PL$249/*declarations*/ = PL$30/*par*/["declarations"];
if(! PL$249/*declarations*/){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
PL$37/*i*/ = 0;
PL$92/*l*/ = PL$249/*declarations*/["length"];
PL$250/*usedType*/ = this["getType"](PL$32/*identifierName*/(PL$30/*par*/["typename"]), PL$30/*par*/);
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{if((PL$249/*declarations*/[PL$37/*i*/]["type"] == "VariableDeclaration")){
PL$54/*r*/ = this["parseExpression"](PL$249/*declarations*/[PL$37/*i*/]);
PL$26/*res*/["push"](PL$54/*r*/);;

}else{
this["error"](PL$249/*declarations*/[PL$37/*i*/], PL$12/*errorMsg*/["unknownType"]);;
};
;
}};
;
PL$26/*res*/["setType"](PL$250/*usedType*/);;
return PL$26/*res*/;;
;
});;
this["isSameType"] = (function(PL$61/*type1*/, PL$62/*type2*/){
;
return PL$18/*classSystem*/["isSameType"](PL$61/*type1*/, PL$62/*type2*/);;
;
});;
this["expVariableDeclaration"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(PL$30/*par*/["init"]){
PL$26/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](PL$32/*identifierName*/(PL$30/*par*/["id"])),
"assignmentType": PL$30/*par*/["id"]["type"],
"value": this["parseExpression"](PL$30/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;

}else{
PL$26/*res*/["pushType"](this["getVariable"](PL$32/*identifierName*/(PL$30/*par*/["id"])));;
};
;
return PL$26/*res*/;;
;
});;
this["getVariable"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
this["_addUsedVariable"](PL$30/*par*/);;
PL$26/*res*/["push"](this["getVariableName"](PL$30/*par*/));;
PL$26/*res*/["setType"](this["getVariableType"](PL$30/*par*/));;
return PL$26/*res*/;;
;
});;
this["getResultType"] = (function(PL$30/*par*/){
var PL$35/*t*/;
;
if(! PL$30/*par*/){
return undefined;;
};
;
if((typeof PL$30/*par*/ == "string")){
return undefined;;
};
;
PL$35/*t*/ = PL$30/*par*/["getType"]();
if((typeof PL$35/*t*/ == "string")){
return this["getType"](PL$35/*t*/);;
};
;
return PL$35/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(PL$75/*parType*/, PL$251/*parIndex*/, PL$72/*parsed*/){
var PL$252/*retType*/;
var PL$50/*self*/;
;
PL$252/*retType*/ = this["getProvisionalType"](PL$72/*parsed*/);
PL$50/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$75/*parType*/)["then"]((function(PL$75/*parType*/){
;
PL$50/*self*/["resolveProvisional"](PL$252/*retType*/, PL$18/*classSystem*/["getFunctionArgumentType"](PL$75/*parType*/, PL$251/*parIndex*/));;
;
}));;
return PL$252/*retType*/;;
;
});;
this["callClassSystem"] = (function(PL$115/*parFun*/, PL$30/*par*/){
var PL$253/*dynamic*/;
var PL$254/*typeProps*/;
var PL$255/*ignoreProps*/;
var PL$37/*i*/;
var PL$39/*p*/;
var PL$256/*promises*/;
var PL$72/*parsed*/;
var PL$257/*errRes*/;
var PL$50/*self*/;
var PL$258/*resolveType*/;
var PL$35/*t*/;
;
PL$253/*dynamic*/ = false;
PL$254/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
PL$255/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
PL$37/*i*/ = 0;
PL$39/*p*/;
PL$256/*promises*/ = [];
PL$72/*parsed*/ = PL$30/*par*/["parsed"];
PL$72/*parsed*/ = (PL$72/*parsed*/ || (PL$30/*par*/["value"] && PL$30/*par*/["value"]["getParsed"]()));;
PL$72/*parsed*/ = (PL$72/*parsed*/ || (PL$30/*par*/["instance"] && PL$30/*par*/["instance"]["getParsed"]()));;
PL$72/*parsed*/ = (PL$72/*parsed*/ || (PL$30/*par*/["left"] && PL$30/*par*/["left"]["getParsed"]()));;
PL$72/*parsed*/ = (PL$72/*parsed*/ || (PL$30/*par*/["right"] && PL$30/*par*/["right"]["getParsed"]()));;
if(! PL$72/*parsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
PL$257/*errRes*/ = this["runtimeError"](PL$72/*parsed*/, PL$12/*errorMsg*/["typeLookupFailed"]);
PL$50/*self*/ = this;
PL$258/*resolveType*/ = (function(PL$161/*prop*/, PL$74/*ps*/, PL$259/*parArgument*/){
var PL$26/*res*/;
;
PL$26/*res*/ = new PL$16/*Promise*/();
PL$74/*ps*/["then"]((function(PL$35/*t*/){
;
if(PL$259/*parArgument*/){
PL$30/*par*/["arguments"][PL$161/*prop*/]["type"] = PL$35/*t*/;;

}else{
PL$30/*par*/[PL$161/*prop*/] = PL$35/*t*/;;
};
;
PL$26/*res*/["resolve"]();;
;
}));;
PL$256/*promises*/["push"](PL$26/*res*/);;
return PL$26/*res*/;;
;
});
PL$35/*t*/;
for(PL$39/*p*/ in PL$254/*typeProps*/){PL$35/*t*/ = PL$30/*par*/[PL$39/*p*/];;
if(PL$35/*t*/){
if(PL$35/*t*/["isDynamic"]){
PL$253/*dynamic*/ = true;;

}else{
PL$258/*resolveType*/(PL$39/*p*/, PL$18/*classSystem*/["readyPromise"](PL$35/*t*/));;
};
;
};
;
};
;
if(PL$30/*par*/["arguments"]){
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$30/*par*/["arguments"]["length"]);++PL$37/*i*/){{PL$35/*t*/ = PL$30/*par*/["arguments"][PL$37/*i*/]["type"];;
if(PL$35/*t*/){
if(PL$35/*t*/["isDynamic"]){
PL$253/*dynamic*/ = true;;

}else{
PL$258/*resolveType*/(PL$37/*i*/, PL$18/*classSystem*/["readyPromise"](PL$35/*t*/), true);;
};
;
};
;
}};
;
};
;
PL$17/*promiseland*/["all"](PL$256/*promises*/)["then"]((function(){
var PL$39/*p*/;
var PL$26/*res*/;
var PL$260/*propsStarted*/;
var PL$261/*addProperty*/;
var PL$262/*dynRes*/;
var PL$53/*tempRes*/;
;
PL$39/*p*/;
if(PL$253/*dynamic*/){
PL$50/*self*/["common"]["useClassSystem"] = true;;
PL$26/*res*/ = PL$50/*self*/["newResult"]();
PL$26/*res*/["push"]("classSystem.");;
PL$26/*res*/["push"](PL$115/*parFun*/);;
PL$26/*res*/["push"]("({");;
PL$260/*propsStarted*/ = false;
PL$261/*addProperty*/ = (function(PL$39/*p*/){
;
if(PL$260/*propsStarted*/){
PL$26/*res*/["push"](", ");;
};
;
PL$260/*propsStarted*/ = true;;
PL$26/*res*/["push"](PL$14/*stringEncodeStr*/(PL$39/*p*/));;
PL$26/*res*/["push"](":");;
;
});
for(PL$39/*p*/ in PL$30/*par*/){if((! PL$30/*par*/[PL$39/*p*/] || PL$255/*ignoreProps*/[PL$39/*p*/])){

}else{
if(PL$254/*typeProps*/[PL$39/*p*/]){
PL$261/*addProperty*/(PL$39/*p*/);;
PL$26/*res*/["push"](PL$50/*self*/["renderType"](PL$30/*par*/[PL$39/*p*/], PL$72/*parsed*/));;

}else{
PL$261/*addProperty*/(PL$39/*p*/);;
PL$26/*res*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$30/*par*/[PL$39/*p*/]));;
};
};
;
};
;
PL$26/*res*/["push"]("})");;
PL$262/*dynRes*/ = PL$50/*self*/["newResult"]();
PL$262/*dynRes*/["push"](PL$50/*self*/["makeCompleteStatement"](PL$26/*res*/), undefined, {"dynamic": true});;
PL$257/*errRes*/["resolve"](PL$262/*dynRes*/);;

}else{
PL$53/*tempRes*/ = PL$50/*self*/["newResult"]();
PL$30/*par*/["result"] = PL$53/*tempRes*/;;
PL$257/*errRes*/["resolve"](PL$17/*promiseland*/["classSystem"][PL$115/*parFun*/](PL$30/*par*/));;
};
;
;
}));;
return PL$257/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(PL$75/*parType*/, PL$58/*parParsed*/){
var PL$50/*self*/;
var PL$26/*res*/;
;
PL$50/*self*/ = this;
if(PL$75/*parType*/["isDynamic"]){
PL$26/*res*/ = PL$50/*self*/["newResult"]();
PL$50/*self*/["common"]["useClassSystem"] = true;;
PL$26/*res*/["push"]("classSystem.isTrackedClass");;
PL$26/*res*/["push"]("(");;
PL$26/*res*/["push"](PL$50/*self*/["renderType"](PL$75/*parType*/, PL$58/*parParsed*/));;
PL$26/*res*/["push"](")");;
return PL$26/*res*/;;
};
;
return PL$18/*classSystem*/["isTrackedClass"](PL$75/*parType*/);;
;
});;
this["createConditionalCode"] = (function(PL$263/*parTrueRes*/, PL$264/*parFalseRes*/){
var PL$50/*self*/;
var PL$265/*isDecided*/;
var PL$266/*conditions*/;
var PL$26/*res*/;
;
PL$50/*self*/ = this;
PL$263/*parTrueRes*/ = (PL$263/*parTrueRes*/ || this["newResult"]());;
PL$264/*parFalseRes*/ = (PL$264/*parFalseRes*/ || this["newResult"]());;
PL$265/*isDecided*/ = false;
PL$266/*conditions*/ = [];
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["replace"](PL$264/*parFalseRes*/);;
return {"res": PL$26/*res*/,
"addCondition": (function(PL$110/*parCondition*/){
var PL$267/*ifRes*/;
var PL$37/*i*/;
var PL$262/*dynRes*/;
;
if(PL$265/*isDecided*/){
return;;
};
;
if((PL$110/*parCondition*/ === true)){
PL$265/*isDecided*/ = true;;
PL$26/*res*/["replace"](PL$263/*parTrueRes*/);;
return;;
};
;
if((PL$110/*parCondition*/ === false)){
return;;
};
;
PL$266/*conditions*/["push"](PL$110/*parCondition*/);;
PL$267/*ifRes*/ = PL$50/*self*/["newResult"]();
PL$267/*ifRes*/["push"]("((");;
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$266/*conditions*/["length"]);++PL$37/*i*/){{if(PL$37/*i*/){
PL$267/*ifRes*/["push"](" && ");;
};
;
PL$267/*ifRes*/["push"](PL$266/*conditions*/[PL$37/*i*/]);;
}};
;
PL$267/*ifRes*/["push"](") ? (");;
PL$267/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$263/*parTrueRes*/));;
PL$267/*ifRes*/["push"](") : (");;
PL$267/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$264/*parFalseRes*/));;
PL$267/*ifRes*/["push"]("))");;
PL$262/*dynRes*/ = PL$50/*self*/["newResult"]();
PL$262/*dynRes*/["push"](PL$50/*self*/["makeCompleteStatement"](PL$267/*ifRes*/), undefined, {"dynamic": true});;
PL$26/*res*/["replace"](PL$262/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(PL$75/*parType*/){
;
return PL$18/*classSystem*/["isTrackedClass"](PL$75/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(PL$75/*parType*/, PL$58/*parParsed*/){
;
if(PL$75/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$75/*parType*/, {"temporaryTracked": true}, PL$58/*parParsed*/);;
};
;
return PL$18/*classSystem*/["_createTemporaryTrackedClass"](PL$75/*parType*/);;
;
});;
this["parseAsType"] = (function(PL$75/*parType*/, PL$30/*par*/){
var PL$24/*value*/;
;
PL$24/*value*/ = this["parseExpression"](PL$30/*par*/);
return this["getPassAsTypeCode"]({"value": PL$24/*value*/,
"valueType": PL$24/*value*/["getType"](),
"type": PL$75/*parType*/,
"errorFun": this["getWarningFun"](PL$30/*par*/),
"parsed": PL$30/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": PL$30/*par*/["type"],
"value": PL$30/*par*/["value"],
"valueType": this["getResultType"](PL$30/*par*/["value"], PL$30/*par*/),
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"](PL$30/*par*/["type"]);;
return PL$26/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$24/*value*/;
var PL$268/*valueType*/;
;
PL$26/*res*/ = this["newResult"]();
PL$24/*value*/ = PL$30/*par*/["value"];
PL$268/*valueType*/ = PL$24/*value*/["getType"]();
PL$26/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": PL$24/*value*/,
"valueType": PL$24/*value*/["getType"](),
"errorFun": PL$30/*par*/["errorFun"],
"noValueRequired": (PL$30/*par*/ ? PL$30/*par*/["noValueRequired"] : undefined)}));;
PL$26/*res*/["setType"](this["getClassFromTemporaryTracked"](PL$268/*valueType*/, PL$24/*value*/["getParsed"]()));;
return PL$26/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(PL$75/*parType*/, PL$58/*parParsed*/){
var PL$50/*self*/;
var PL$269/*resType*/;
;
PL$50/*self*/ = this;
if(PL$75/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$75/*parType*/, {"temporaryTrackedResolved": true}, PL$58/*parParsed*/);;
};
;
PL$269/*resType*/ = this["getProvisionalType"](PL$58/*parParsed*/, PL$58/*parParsed*/);
PL$18/*classSystem*/["definitionPromise"](PL$75/*parType*/)["then"]((function(PL$270/*parDefinedType*/){
;
PL$50/*self*/["resolveProvisional"](PL$269/*resType*/, PL$18/*classSystem*/["getClassFromTemporaryTracked"](PL$270/*parDefinedType*/));;
;
}));;
return PL$269/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": PL$30/*par*/["instance"],
"type": this["getResultType"](PL$30/*par*/["instance"]),
"property": PL$30/*par*/["property"],
"propertyValue": PL$30/*par*/["propertyValue"],
"computed": PL$30/*par*/["computed"],
"value": PL$30/*par*/["value"],
"valueType": this["getResultType"](PL$30/*par*/["value"]),
"operator": (PL$30/*par*/["operator"] || "="),
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$30/*par*/["instance"]),
"property": PL$30/*par*/["property"]}, PL$30/*par*/["instance"]));;
return PL$26/*res*/;;
;
});;
this["getSetVariableCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": PL$30/*par*/["instance"],
"type": this["getResultType"](PL$30/*par*/["instance"]),
"value": PL$30/*par*/["value"],
"valueType": this["getResultType"](PL$30/*par*/["value"]),
"operator": (PL$30/*par*/["operator"] || "="),
"errorFun": PL$30/*par*/["errorFun"],
"assignmentType": PL$30/*par*/["assignmentType"]}));;
PL$26/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](PL$30/*par*/["value"]), PL$30/*par*/["value"]["getParsed"]()));;
return PL$26/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
PL$26/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": PL$30/*par*/["type"],
"name": PL$30/*par*/["name"],
"constructorName": PL$30/*par*/["constructorName"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": PL$30/*par*/["type"],
"name": PL$30/*par*/["name"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": PL$30/*par*/["type"],
"name": PL$30/*par*/["name"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": PL$30/*par*/["type"],
"name": PL$30/*par*/["name"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": PL$30/*par*/["type"],
"name": PL$30/*par*/["name"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["connectFunCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$30/*par*/["signalObject"],
"type": this["getResultType"](PL$30/*par*/["signalObject"]),
"property": PL$30/*par*/["signalProperty"],
"value": PL$30/*par*/["fun"],
"valueType": this["getResultType"](PL$30/*par*/["fun"]),
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["connectSlotCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$30/*par*/["signalObject"],
"type": this["getResultType"](PL$30/*par*/["signalObject"]),
"property": PL$30/*par*/["signalProperty"],
"value": PL$30/*par*/["slotObject"],
"valueType": this["getResultType"](PL$30/*par*/["slotObject"]),
"valueProperty": PL$30/*par*/["slotProperty"],
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": PL$30/*par*/["value"],
"valueType": this["getResultType"](PL$30/*par*/["value"]),
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": PL$30/*par*/["value"],
"valueType": this["getResultType"](PL$30/*par*/["value"]),
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": PL$30/*par*/["type"],
"errorFun": PL$30/*par*/["errorFun"],
"parsed": PL$30/*par*/["parsed"]}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(PL$75/*parType*/){
;
return PL$18/*classSystem*/["getClassFromPromiseOf"](PL$75/*parType*/);;
;
});;
this["getPropertyType"] = (function(PL$30/*par*/, PL$58/*parParsed*/){
var PL$73/*type*/;
var PL$50/*self*/;
var PL$54/*r*/;
;
PL$73/*type*/ = PL$30/*par*/["type"];
PL$50/*self*/ = this;
if(PL$73/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$73/*type*/, {"property": PL$30/*par*/["property"]}, PL$58/*parParsed*/);;

}else{
PL$54/*r*/ = this["getProvisionalType"](PL$58/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$30/*par*/["type"])["then"]((function(PL$157/*resultType*/){
;
PL$50/*self*/["resolveProvisional"](PL$54/*r*/, PL$17/*promiseland*/["classSystem"]["getPropertyType"]({"type": PL$157/*resultType*/,
"property": PL$30/*par*/["property"]}));;
;
}));;
return PL$54/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(PL$30/*par*/, PL$58/*parParsed*/){
var PL$73/*type*/;
var PL$50/*self*/;
var PL$54/*r*/;
;
PL$73/*type*/ = PL$30/*par*/["type"];
PL$50/*self*/ = this;
if(PL$73/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$73/*type*/, {"property": "constructor"}, PL$58/*parParsed*/);;

}else{
PL$54/*r*/ = this["getProvisionalType"](PL$58/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$30/*par*/["type"])["then"]((function(PL$157/*resultType*/){
;
try
{PL$50/*self*/["resolveProvisional"](PL$54/*r*/, PL$17/*promiseland*/["classSystem"]["getConstructorType"]({"type": PL$157/*resultType*/}));;
}catch(PL$170/*e*/){PL$50/*self*/["error"](PL$58/*parParsed*/, PL$170/*e*/);;
};
;
;
}));;
return PL$54/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": PL$30/*par*/["instance"],
"type": this["getResultType"](PL$30/*par*/["instance"]),
"property": PL$30/*par*/["property"],
"propertyValue": PL$30/*par*/["propertyValue"],
"errorFun": PL$30/*par*/["errorFun"]}));;
if(PL$30/*par*/["property"]){
PL$26/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$30/*par*/["instance"]),
"property": PL$30/*par*/["property"]}, PL$30/*par*/["instance"]));;

}else{
PL$26/*res*/["setType"]("var");;
};
;
return PL$26/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(PL$30/*par*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": PL$30/*par*/["left"],
"leftType": this["getResultType"](PL$30/*par*/["left"]),
"right": PL$30/*par*/["right"],
"rightType": this["getResultType"](PL$30/*par*/["right"]),
"operator": PL$30/*par*/["operator"],
"errorFun": PL$30/*par*/["errorFun"]}));;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$243/*base*/;
var PL$44/*property*/;
var PL$271/*propertyValue*/;
;
PL$26/*res*/ = this["newResult"]();
if((PL$30/*par*/["left"]["type"] == "MemberExpression")){
PL$243/*base*/ = this["parseExpression"](PL$30/*par*/["left"]["object"]);
PL$44/*property*/;
PL$271/*propertyValue*/;
if(PL$30/*par*/["left"]["computed"]){
PL$271/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["left"]["property"]));;

}else{
PL$44/*property*/ = PL$32/*identifierName*/(PL$30/*par*/["left"]["property"]);;
};
;
PL$26/*res*/["pushType"](this["getSetPropertyCode"]({"instance": PL$243/*base*/,
"propertyValue": PL$271/*propertyValue*/,
"property": PL$44/*property*/,
"computed": PL$30/*par*/["left"]["computed"],
"value": this["parseExpression"](PL$30/*par*/["right"]),
"operator": PL$30/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;

}else{
PL$26/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](PL$30/*par*/["left"]),
"assignmentType": PL$30/*par*/["left"]["type"],
"value": this["parseExpression"](PL$30/*par*/["right"]),
"operator": PL$30/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;
};
;
return PL$26/*res*/;;
;
});;
this["isCallableType"] = (function(){
;
;
});;
this["expCallExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$272/*calleeRes*/;
var PL$273/*args*/;
var PL$274/*argType*/;
var PL$275/*argRes*/;
;
PL$26/*res*/ = this["newResult"]();
PL$37/*i*/ = 0;
PL$92/*l*/;
PL$272/*calleeRes*/ = this["parseExpression"](PL$30/*par*/["callee"]);
PL$273/*args*/ = [];
if(PL$30/*par*/["arguments"]){
PL$92/*l*/ = PL$30/*par*/["arguments"]["length"];;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{PL$274/*argType*/ = this["getFunctionArgumentType"](PL$272/*calleeRes*/["getType"](), PL$37/*i*/, PL$30/*par*/["arguments"][PL$37/*i*/]);
PL$275/*argRes*/ = this["parseExpression"](PL$30/*par*/["arguments"][PL$37/*i*/]);
PL$275/*argRes*/ = this["getPassAsTypeCode"]({"value": PL$275/*argRes*/,
"valueType": PL$275/*argRes*/["getType"](),
"type": PL$274/*argType*/,
"errorFun": this["getWarningFun"](PL$30/*par*/)});;
PL$273/*args*/["push"]({"type": PL$275/*argRes*/["getType"](),
"value": PL$275/*argRes*/});;
}};
;
};
;
PL$26/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": PL$272/*calleeRes*/["getType"](),
"instance": PL$272/*calleeRes*/,
"arguments": PL$273/*args*/}));;
PL$26/*res*/["setType"](this["getFunctionReturnType"](PL$272/*calleeRes*/["getType"](), PL$30/*par*/));;
return PL$26/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(PL$75/*parType*/, PL$72/*parsed*/){
var PL$35/*t*/;
var PL$50/*self*/;
;
PL$35/*t*/ = this["getProvisionalType"](PL$72/*parsed*/);
PL$50/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$75/*parType*/)["then"]((function(PL$276/*newt*/){
;
PL$50/*self*/["resolveProvisional"](PL$35/*t*/, PL$18/*classSystem*/["getFunctionReturnType"](PL$276/*newt*/, PL$72/*parsed*/));;
;
}));;
return PL$35/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(PL$75/*parType*/, PL$72/*parsed*/){
;
return PL$18/*classSystem*/["getFunctionArgumentCount"](PL$75/*parType*/);;
;
});;
this["isVar"] = (function(PL$75/*parType*/){
;
if((typeof PL$75/*parType*/ == "function")){
return PL$18/*classSystem*/["isVar"](PL$75/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$37/*i*/;
var PL$92/*l*/;
var PL$273/*args*/;
var PL$275/*argRes*/;
;
if(! this["inheritedAvailable"]){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["inheritedOnlyInMember"]);;
return;;
};
;
PL$26/*res*/ = this["newResult"]();
PL$37/*i*/ = 0;
PL$92/*l*/;
PL$26/*res*/["push"](this["inheritedSystem"]["getCurrent"]());;
PL$26/*res*/["push"](".apply(this");;
PL$273/*args*/ = [];
if(PL$30/*par*/["arguments"]){
PL$26/*res*/["push"](", [");;
PL$92/*l*/ = PL$30/*par*/["arguments"]["length"];;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{if(PL$37/*i*/){
PL$26/*res*/["push"](", ");;
};
;
PL$275/*argRes*/ = this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["arguments"][PL$37/*i*/]));
PL$26/*res*/["push"](PL$275/*argRes*/);;
}};
;
PL$26/*res*/["push"]("]");;

}else{
if(PL$30/*par*/["expression"]){
PL$26/*res*/["push"](", ");;
this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["expression"]));;
};
};
;
PL$26/*res*/["push"](")");;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["expArrayExpression"] = (function(PL$30/*par*/){
var PL$26/*res*/;
var PL$37/*i*/;
var PL$92/*l*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["push"]("[");;
PL$37/*i*/ = 0;
PL$92/*l*/ = ((PL$30/*par*/["elements"] && PL$30/*par*/["elements"]["length"]) || 0);
for(PL$37/*i*/;(PL$37/*i*/ < PL$92/*l*/);++PL$37/*i*/){{if(PL$37/*i*/){
PL$26/*res*/["push"](", ");;
};
;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$30/*par*/["elements"][PL$37/*i*/])));;
}};
;
PL$26/*res*/["push"]("]");;
PL$26/*res*/["setType"]("var");;
return PL$26/*res*/;;
;
});;
this["expReturnStatement"] = (function(PL$30/*par*/, PL$277/*closingFun*/){
var PL$26/*res*/;
var PL$119/*valueRes*/;
var PL$278/*passAsType*/;
var PL$247/*v*/;
;
if(this["preventreturn"]){
this["error"](PL$30/*par*/, PL$12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
PL$26/*res*/ = this["newResult"]();
PL$119/*valueRes*/;
if(PL$30/*par*/["argument"]){
PL$119/*valueRes*/ = this["newResult"]();;
PL$278/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
PL$278/*passAsType*/ = this["getClassFromPromiseOf"](PL$278/*passAsType*/);;
};
;
PL$278/*passAsType*/ = this["createTemporaryTrackedClass"](PL$278/*passAsType*/);;
PL$247/*v*/ = this["parseExpression"](PL$30/*par*/["argument"]);
PL$119/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": PL$247/*v*/,
"valueType": PL$247/*v*/["getType"](),
"type": PL$278/*passAsType*/,
"errorFun": this["getWarningFun"](PL$30/*par*/)}));;
};
;
PL$26/*res*/["push"](this["getReturnCode"]({"return": true,
"value": PL$119/*valueRes*/}));;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["_start"]();;
;
});
PL$279/*loaderStr*/ = (function(PL$30/*par*/){
var PL$280/*resStr*/;
var PL$37/*i*/;
var PL$281/*modules*/;
var PL$98/*extraModules*/;
var PL$282/*extraModulesAr*/;
;
PL$280/*resStr*/ = "";
PL$37/*i*/;
PL$280/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback, errBack){\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        var args = [];\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  ";;
PL$281/*modules*/ = [];
if(! PL$30/*par*/["promiseLandModule"]){
PL$281/*modules*/["push"]({"varName": "promiseland",
"moduleName": "promiseland"});;
};
;
PL$98/*extraModules*/ = PL$30/*par*/["extraModules"];
if(PL$98/*extraModules*/){
PL$282/*extraModulesAr*/ = PL$98/*extraModules*/["getArray"]();
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$282/*extraModulesAr*/["length"]);++PL$37/*i*/){{PL$281/*modules*/["push"]({"varName": PL$30/*par*/["variableNames"]["get"](PL$282/*extraModulesAr*/[PL$37/*i*/]["key"]),
"moduleName": PL$282/*extraModulesAr*/[PL$37/*i*/]["value"]});;
}};
;
};
;
PL$280/*resStr*/ += "defineFun([";;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$281/*modules*/["length"]);++PL$37/*i*/){{if(PL$37/*i*/){
PL$280/*resStr*/ += ", ";;
};
;
PL$280/*resStr*/ += PL$14/*stringEncodeStr*/(PL$281/*modules*/[PL$37/*i*/]["moduleName"]);;
}};
;
PL$280/*resStr*/ += "], function(";;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$281/*modules*/["length"]);++PL$37/*i*/){{if(PL$37/*i*/){
PL$280/*resStr*/ += ", ";;
};
;
PL$280/*resStr*/ += PL$281/*modules*/[PL$37/*i*/]["varName"];;
}};
;
PL$280/*resStr*/ += "){\n";;
if(PL$30/*par*/["promiseLandModule"]){
PL$280/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
PL$280/*resStr*/ += "var __require = requireFun;\n";;
};
;
PL$280/*resStr*/ += "\n";;
if((PL$30/*par*/["usePromise"] || PL$30/*par*/["useRequire"])){
PL$280/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
PL$280/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(PL$30/*par*/["useClassSystem"]){
PL$280/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(PL$30/*par*/["useRequire"]){
PL$280/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";;
};
;
return PL$280/*resStr*/;;
;
});
PL$283/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
PL$284/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
PL$285/*loaderEndStr*/ = (function(PL$30/*par*/){
;
if(PL$30/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
PL$286/*createHeader*/ = (function(PL$30/*par*/){
var PL$280/*resStr*/;
var PL$287/*loaderParam*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$280/*resStr*/ = "";
PL$287/*loaderParam*/ = {"usePromise": PL$30/*par*/["usePromise"],
"useRequire": PL$30/*par*/["useRequire"],
"useClassSystem": PL$30/*par*/["useClassSystem"],
"extraModules": PL$30/*par*/["extraModules"],
"variableNames": PL$30/*par*/["variableNames"]};
if(PL$30/*par*/["makePromiseLandModule"]){
PL$287/*loaderParam*/["promiseLandModule"] = true;;
};
;
PL$280/*resStr*/ += PL$279/*loaderStr*/(PL$287/*loaderParam*/);;
PL$280/*resStr*/ += PL$283/*promiselandRequireStr*/();;
if(PL$30/*par*/["useCallback"]){
PL$280/*resStr*/ += PL$284/*callbackRequireStr*/();;
};
;
PL$280/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$30/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$30/*par*/["hashStr"]) + "\"); };\n");;
return PL$280/*resStr*/;;
;
});
PL$288/*createFooter*/ = (function(PL$30/*par*/){
var PL$280/*resStr*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$280/*resStr*/ = "";
if(PL$30/*par*/["makePromiseLandModule"]){
PL$280/*resStr*/ += PL$285/*loaderEndStr*/({"promiseLandModule": true});;

}else{
PL$280/*resStr*/ += PL$285/*loaderEndStr*/({});;
};
;
return PL$280/*resStr*/;;
;
});
PL$289/*parser*/ = {"parse": (function(PL$290/*promiselandCodeStr*/){
var PL$39/*p*/;
var PL$289/*parser*/;
var PL$291/*hashStr*/;
var PL$72/*parsed*/;
var PL$280/*resStr*/;
var PL$183/*cp*/;
var PL$26/*res*/;
var PL$99/*parsingConfig*/;
var PL$292/*makePromiseLandModule*/;
var PL$98/*extraModules*/;
var PL$293/*variableNames*/;
var PL$294/*result*/;
var PL$295/*programStr*/;
var PL$296/*mainPartStr*/;
;
PL$39/*p*/ = new PL$17/*promiseland*/["Promise"]();
PL$289/*parser*/ = PL$7/*_parser*/;
PL$291/*hashStr*/ = PL$5/*md5*/(PL$290/*promiselandCodeStr*/);
PL$72/*parsed*/ = PL$289/*parser*/["parse"](PL$290/*promiselandCodeStr*/);
PL$280/*resStr*/ = "";
PL$183/*cp*/;
PL$26/*res*/ = {};
if((PL$72/*parsed*/["length"] === undefined)){
if((PL$72/*parsed*/["type"] == "Program")){
PL$99/*parsingConfig*/ = PL$72/*parsed*/["config"];
PL$183/*cp*/ = new PL$49/*CodeParser*/({"toParse": PL$72/*parsed*/,
"hashStr": PL$291/*hashStr*/,
"parsingConfig": PL$99/*parsingConfig*/});;
PL$292/*makePromiseLandModule*/ = false;
PL$98/*extraModules*/ = PL$183/*cp*/["common"]["extraModules"];
PL$293/*variableNames*/ = PL$183/*cp*/["common"]["variableNames"];
if(PL$99/*parsingConfig*/){
PL$292/*makePromiseLandModule*/ = PL$183/*cp*/["getTemplateProperty"](PL$99/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((PL$292/*makePromiseLandModule*/ && (PL$292/*makePromiseLandModule*/["value"] === true))){
PL$292/*makePromiseLandModule*/ = true;;

}else{
PL$292/*makePromiseLandModule*/ = false;;
};
;
};
;
PL$294/*result*/ = PL$183/*cp*/["getResult"]();
PL$295/*programStr*/ = ((PL$294/*result*/["getPreCodeStr"]() + PL$294/*result*/["getCodeStr"]()) + PL$294/*result*/["getPostCodeStr"]());
PL$26/*res*/["warnings"] = PL$183/*cp*/["getWarnings"]();;
PL$26/*res*/["errors"] = PL$183/*cp*/["getErrors"]();;
PL$296/*mainPartStr*/ = "";
if(PL$15/*_pureCode*/){
PL$280/*resStr*/ = PL$295/*programStr*/;;

}else{
if(PL$183/*cp*/["programPromiseStr"]){
PL$296/*mainPartStr*/ += (((("var " + PL$183/*cp*/["programPromiseStr"]) + " = ") + PL$183/*cp*/["newPromiseStr"]()) + ";\n");;
PL$296/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$291/*hashStr*/) + "\", \"module\": ") + PL$183/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
PL$296/*mainPartStr*/ += PL$295/*programStr*/;;
PL$296/*mainPartStr*/ += (";\nreturn " + PL$183/*cp*/["programPromiseStr"]);;

}else{
PL$296/*mainPartStr*/ += PL$295/*programStr*/;;
PL$296/*mainPartStr*/ += (("return " + PL$183/*cp*/["resultNameStr"]) + ";\n");;
};
;
PL$280/*resStr*/ += PL$286/*createHeader*/({"makePromiseLandModule": PL$292/*makePromiseLandModule*/,
"extraModules": PL$98/*extraModules*/,
"variableNames": PL$293/*variableNames*/,
"hashStr": PL$291/*hashStr*/,
"usePromise": PL$183/*cp*/["common"]["usePromise"],
"useRequire": PL$183/*cp*/["common"]["useRequire"],
"useCallback": PL$183/*cp*/["common"]["useCallback"],
"useClassSystem": PL$183/*cp*/["common"]["useClassSystem"]});;
PL$280/*resStr*/ += PL$296/*mainPartStr*/;;
PL$280/*resStr*/ += PL$288/*createFooter*/({"makePromiseLandModule": PL$292/*makePromiseLandModule*/});;
};
;

}else{
this["error"](PL$72/*parsed*/, PL$12/*errorMsg*/["unknownType"]);;
};
;

}else{
PL$11/*errorFun*/(PL$72/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (PL$26/*res*/["errors"] && PL$26/*res*/["errors"]["length"])){
PL$26/*res*/["javascript"] = PL$280/*resStr*/;;
};
;
PL$39/*p*/["resolve"](PL$26/*res*/);;
return PL$39/*p*/["promise"];;
;
})};
PL$1.resolve(PL$289/*parser*/); return;;
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