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
    if (promiseland._hasModule({ hashStr: "513b1ab99d68d97c18e549cf9dff19cd" })){ return promiseland._getModule("513b1ab99d68d97c18e549cf9dff19cd"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "513b1ab99d68d97c18e549cf9dff19cd", "module": PL$1, promising: true });
var PL$37/*promiseland*/;try{PL$37/*promiseland*/ = promiseland;}catch(e){};
var PL$119/*JSON*/;try{PL$119/*JSON*/ = JSON;}catch(e){};
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
var PL$15/*VariableNames*/;
var PL$16/*mixin*/;
var PL$17/*identifierName*/;
var PL$18/*checkIsFunction*/;
var PL$19/*getExtraFromPar*/;
var PL$20/*addExtraToPar*/;
var PL$21/*statementType*/;
var PL$22/*checkPromising*/;
var PL$23/*loaderStr*/;
var PL$25/*parseFunctionModule*/;
var PL$27/*variablesModule*/;
var PL$29/*typesModule*/;
var PL$31/*expressionsModule*/;
var PL$33/*dynamicModule*/;
var PL$35/*_pureCode*/;
var PL$36/*Promise*/;
var PL$38/*classSystem*/;
var PL$39/*varType*/;
var PL$40/*globalNewPromiseStr*/;
var PL$41/*Map*/;
var PL$42/*findPromises*/;
var PL$45/*_Result*/;
var PL$47/*CodeParser*/;
var PL$130/*promiselandRequireStr*/;
var PL$131/*callbackRequireStr*/;
var PL$132/*loaderEndStr*/;
var PL$133/*createHeader*/;
var PL$136/*createFooter*/;
var PL$137/*parser*/;
PL$3(function(){
;
__requireFun("./md5").then(PL$3(function(PL$6){PL$5/*md5*/ = PL$6;
__requireFun("./_parser").then(PL$3(function(PL$8){PL$7/*_parser*/ = PL$8;
__requireFun("./basics").then(PL$3(function(PL$10){PL$9/*basics*/ = PL$10;
PL$11/*errorFun*/ = PL$9/*basics*/["errorFun"];
PL$12/*errorMsg*/ = PL$9/*basics*/["errorMsg"];
PL$13/*_stringEncodeStr*/ = PL$9/*basics*/["_stringEncodeStr"];
PL$14/*stringEncodeStr*/ = PL$9/*basics*/["stringEncodeStr"];
PL$15/*VariableNames*/ = PL$9/*basics*/["VariableNames"];
PL$16/*mixin*/ = PL$9/*basics*/["mixin"];
PL$17/*identifierName*/ = PL$9/*basics*/["identifierName"];
PL$18/*checkIsFunction*/ = PL$9/*basics*/["checkIsFunction"];
PL$19/*getExtraFromPar*/ = PL$9/*basics*/["getExtraFromPar"];
PL$20/*addExtraToPar*/ = PL$9/*basics*/["addExtraToPar"];
PL$21/*statementType*/ = PL$9/*basics*/["statementType"];
PL$22/*checkPromising*/ = PL$9/*basics*/["checkPromising"];
__requireFun("./loader").then(PL$3(function(PL$24){PL$23/*loaderStr*/ = PL$24;
__requireFun("./parseFunction").then(PL$3(function(PL$26){PL$25/*parseFunctionModule*/ = PL$26;
__requireFun("./variables").then(PL$3(function(PL$28){PL$27/*variablesModule*/ = PL$28;
__requireFun("./types").then(PL$3(function(PL$30){PL$29/*typesModule*/ = PL$30;
__requireFun("./expressions").then(PL$3(function(PL$32){PL$31/*expressionsModule*/ = PL$32;
__requireFun("./dynamic").then(PL$3(function(PL$34){PL$33/*dynamicModule*/ = PL$34;
PL$35/*_pureCode*/ = false;
PL$36/*Promise*/ = PL$37/*promiseland*/["Promise"];
PL$38/*classSystem*/ = PL$37/*promiseland*/["classSystem"];
PL$39/*varType*/ = PL$38/*classSystem*/["getBuiltinType"]("var");
PL$40/*globalNewPromiseStr*/ = (function(){

;
return "new __Promise()";;
;});
PL$41/*Map*/ = PL$37/*promiseland*/["Map"];
PL$42/*findPromises*/ = (function(PL$43/*par*/){
var PL$44/*i*/;

;
if((! PL$43/*par*/ || (typeof PL$43/*par*/ == "string"))){
  return false;;
};
;
if(((PL$43/*par*/["type"] == "UnaryExpression") && ((PL$43/*par*/["operator"] == "*") || (PL$43/*par*/["operator"] == "require")))){
  PL$43/*par*/["promising"] = true;
};
;
if((PL$18/*checkIsFunction*/(PL$43/*par*/) && (PL$43/*par*/["promise"] == "*"))){
  PL$43/*par*/["promising"] = true;
};
;
PL$44/*i*/;
for(PL$44/*i*/ in PL$43/*par*/){
  if((PL$44/*i*/ == "_extrainfo")){
    continue;;
  };
  ;
  if((PL$42/*findPromises*/(PL$43/*par*/[PL$44/*i*/]) && ! PL$18/*checkIsFunction*/(PL$43/*par*/[PL$44/*i*/]))){
    PL$43/*par*/["promising"] = true;
  };
  ;};
;
if(PL$43/*par*/["promising"]){
  return true;;
};
;
return false;;
;});
__requireFun("./Result").then(PL$3(function(PL$46){PL$45/*_Result*/ = PL$46;
PL$47/*CodeParser*/ = (function(PL$43/*par*/){
var PL$48/*self*/;
var PL$44/*i*/;
var PL$123/*InheritedSystem*/;

;
PL$48/*self*/ = this;
this["toParse"] = PL$43/*par*/["toParse"];
this["dynamicCode"] = PL$43/*par*/["dynamicCode"];
this["hashStr"] = PL$43/*par*/["hashStr"];
if(PL$43/*par*/["_locals"]){
  for(PL$44/*i*/ in PL$43/*par*/["_locals"]){
    this[PL$44/*i*/] = PL$43/*par*/["_locals"][PL$44/*i*/];};
  ;
};
;
if(PL$43/*par*/["common"]){
  this["common"] = PL$43/*par*/["common"];
}else{
this["common"] = {"givenTypeNames": {},
"errors": [],
"uniquebasis": (PL$43/*par*/["uniquebasis"] || {"index": 1}),
"parsingConfig": PL$43/*par*/["parsingConfig"]};
this["common"]["variableNames"] = new PL$15/*VariableNames*/({"getUniqueName": (function(PL$49/*name*/){

;
return PL$48/*self*/["getUniqueName"](PL$49/*name*/);;
;})});
};
;
this["errors"] = this["common"]["errors"];
this["newPromiseStr"] = (function(){

;
this["common"]["usePromise"] = true;
return PL$40/*globalNewPromiseStr*/();;
;});
PL$29/*typesModule*/(this, PL$43/*par*/);
this["algorithmicCode"] = false;
this["stack"] = (function(PL$50/*parStr*/){
var PL$51/*stackNameStr*/;

;
PL$51/*stackNameStr*/ = ("_stack_" + PL$50/*parStr*/);
if(! this[PL$51/*stackNameStr*/]){
  this[PL$51/*stackNameStr*/] = [];
};
;
this[PL$51/*stackNameStr*/]["push"](this[PL$50/*parStr*/]);
;});
this["unstack"] = (function(PL$50/*parStr*/){
var PL$51/*stackNameStr*/;

;
PL$51/*stackNameStr*/ = ("_stack_" + PL$50/*parStr*/);
this[PL$50/*parStr*/] = this[PL$51/*stackNameStr*/]["pop"]();
;});
this["_start"] = (function(){
var PL$52/*tempRes*/;

;
if(this["toParse"]){
  if((this["toParse"]["type"] == "Program")){
    PL$52/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
    PL$52/*tempRes*/["push"](";");
    this["result"] = this["makeCompleteStatement"](PL$52/*tempRes*/);
  }else{
  if(PL$18/*checkIsFunction*/(this["toParse"])){
    this["functionRes"] = this["parseFunction"](this["toParse"]);
    this["result"] = this["makeCompleteStatement"](this["functionRes"]);
  };
  };
  ;
};
;
;});
this["makeCompleteStatement"] = (function(PL$43/*par*/){
var PL$53/*res*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["setComplete"]();
PL$53/*res*/["push"](PL$43/*par*/);
return PL$53/*res*/;;
;});
this["makeCompleteStatementDynamic"] = (function(PL$43/*par*/){
var PL$54/*r*/;
var PL$55/*d*/;

;
PL$54/*r*/ = this["newResult"]();
PL$55/*d*/ = this["newResult"]();
PL$55/*d*/["push"](this["makeCompleteStatement"](PL$43/*par*/), undefined, {"stringEncode": true});
PL$54/*r*/["push"]("\"");
PL$54/*r*/["push"](PL$55/*d*/);
PL$54/*r*/["push"]("\"");
return PL$54/*r*/;;
;});
PL$27/*variablesModule*/(this, PL$43/*par*/);
this["functionsAr"] = [];
this["addFunction"] = (function(PL$53/*res*/, PL$49/*name*/, PL$43/*par*/){

;
this["resolveFunctionType"]({"name": PL$17/*identifierName*/(PL$49/*name*/),
"type": PL$53/*res*/["getType"]()}, PL$43/*par*/);
this["functionsAr"]["push"]({"res": PL$53/*res*/,
"name": PL$49/*name*/});
;});
this["_getErrors"] = (function(PL$56/*parWarning*/){
var PL$57/*a*/;
var PL$44/*i*/;

;
PL$57/*a*/ = [];
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < this["errors"]["length"]);++PL$44/*i*/){{
  if(this["errors"][PL$44/*i*/]["valid"]){
    if((PL$56/*parWarning*/ ? this["errors"][PL$44/*i*/]["warning"] : ! this["errors"][PL$44/*i*/]["warning"])){
      PL$57/*a*/["push"](this["errors"][PL$44/*i*/]);
    };
    ;
  };
  ;}};
;
return PL$57/*a*/;;
;});
this["getWarnings"] = (function(){

;
return this["_getErrors"](true);;
;});
this["getErrors"] = (function(){

;
return this["_getErrors"](false);;
;});
this["getWarningFun"] = (function(PL$43/*par*/){
var PL$48/*self*/;

;
PL$48/*self*/ = this;
return (function(PL$58/*err*/){

;
PL$48/*self*/["warning"](PL$43/*par*/, PL$58/*err*/);
;});;
;});
this["warning"] = (function(PL$43/*par*/, PL$58/*err*/){

;
if(! PL$43/*par*/["line"]){
  PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);
};
;
this["addWarning"](PL$43/*par*/, PL$58/*err*/);
;});
this["error"] = (function(PL$43/*par*/, PL$58/*err*/){

;
this["_addError"](PL$43/*par*/, PL$58/*err*/);
PL$11/*errorFun*/(PL$43/*par*/, PL$58/*err*/);
;});
this["addError"] = (function(PL$43/*par*/, PL$58/*err*/){

;
return this["_addError"](PL$43/*par*/, PL$58/*err*/);;
;});
this["addWarning"] = (function(PL$43/*par*/, PL$58/*err*/){

;
return this["_addError"](PL$43/*par*/, PL$58/*err*/, true);;
;});
this["_addError"] = (function(PL$43/*par*/, PL$58/*err*/, PL$59/*warning*/){
var PL$60/*entry*/;
var PL$61/*ps*/;

;
PL$60/*entry*/ = {"par": PL$43/*par*/,
"line": PL$43/*par*/["line"],
"column": PL$43/*par*/["column"],
"msg": ((PL$58/*err*/["id"] + ": ") + PL$58/*err*/["msg"]),
"valid": true,
"warning": PL$59/*warning*/};
this["errors"]["push"](PL$60/*entry*/);
PL$61/*ps*/ = new PL$36/*Promise*/();
PL$61/*ps*/["then"]((function(){

;
PL$60/*entry*/["valid"] = false;
;}));
return PL$61/*ps*/;;
;});
this["runtimeError"] = (function(PL$43/*par*/, PL$62/*par2*/){
var PL$61/*ps*/;
var PL$53/*res*/;

;
PL$61/*ps*/ = this["addWarning"](PL$43/*par*/, PL$62/*par2*/);
PL$53/*res*/ = this["runtimeErrorNoWarning"](PL$62/*par2*/);
PL$53/*res*/["setPromise"](PL$61/*ps*/);
return PL$53/*res*/;;
;});
this["runtimeErrorNoWarning"] = (function(PL$62/*par2*/){
var PL$53/*res*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["push"]((((("(function(){ throw { id:" + PL$62/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$62/*par2*/["msg"])) + " } })()"));
return PL$53/*res*/;;
;});
this["getUniqueName"] = (function(PL$49/*name*/){
var PL$63/*retStr*/;

;
PL$63/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
if(PL$49/*name*/){
  PL$63/*retStr*/ += (("/*" + PL$49/*name*/) + "*/");
};
;
return PL$63/*retStr*/;;
;});
this["newInstance"] = (function(PL$64/*element*/, PL$65/*extras*/){
var PL$66/*param*/;
var PL$44/*i*/;
var PL$67/*instance*/;

;
PL$66/*param*/ = {"toParse": PL$64/*element*/,
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(PL$65/*extras*/){
  PL$44/*i*/;
  for(PL$44/*i*/ in PL$65/*extras*/){
    PL$66/*param*/[PL$44/*i*/] = PL$65/*extras*/[PL$44/*i*/];};
  ;
};
;
PL$67/*instance*/ = new PL$47/*CodeParser*/(PL$66/*param*/);
return PL$67/*instance*/;;
;});
this["getFunctionRes"] = (function(){

;
return this["functionRes"];;
;});
this["getFunctionName"] = (function(){

;
return this["functionName"];;
;});
this["getResult"] = (function(){

;
return this["result"];;
;});
this["result"] = "";
this["newResult"] = (function(PL$43/*par*/){
var PL$54/*r*/;

;
PL$54/*r*/ = new PL$45/*_Result*/({"cp": this});
if(PL$43/*par*/){
  PL$54/*r*/["push"](PL$43/*par*/);
};
;
return PL$54/*r*/;;
;});
this["parseProgram"] = (function(PL$43/*par*/){
var PL$53/*res*/;
var PL$68/*extraRes*/;
var PL$69/*extraModules*/;
var PL$70/*parsingConfig*/;
var PL$71/*reqireProperty*/;
var PL$72/*nameProperty*/;
var PL$73/*functionStatement*/;
var PL$49/*name*/;

;
PL$42/*findPromises*/(PL$43/*par*/);
PL$53/*res*/ = this["newResult"]();
PL$68/*extraRes*/ = this["newResult"]();
PL$68/*extraRes*/["push"]("\"use strict\";\n");
PL$20/*addExtraToPar*/(PL$43/*par*/, "addFront", PL$68/*extraRes*/);
PL$69/*extraModules*/ = new PL$41/*Map*/();
PL$70/*parsingConfig*/ = this["common"]["parsingConfig"];
if(PL$70/*parsingConfig*/){
  PL$71/*reqireProperty*/ = this["getTemplateProperty"](PL$70/*parsingConfig*/, "require", "ObjectExpression");
  if(PL$71/*reqireProperty*/){
    PL$69/*extraModules*/ = this["getTemplateRequireProperty"](PL$71/*reqireProperty*/);
  };
  ;
  PL$72/*nameProperty*/ = this["getTemplateProperty"](PL$70/*parsingConfig*/, "name", "Literal");
  if(PL$72/*nameProperty*/){
    this["common"]["name"] = PL$72/*nameProperty*/;
  };
  ;
};
;
this["common"]["extraModules"] = PL$69/*extraModules*/;
if(PL$22/*checkPromising*/(PL$43/*par*/)){
  this["programPromiseStr"] = this["getUniqueName"]();
};
;
this["resultNameStr"] = this["getUniqueName"]();
PL$73/*functionStatement*/ = this["_parseFunction"](PL$43/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
PL$49/*name*/;
for(PL$49/*name*/ in this["usedVariables"]){
  if((this["usedVariables"][PL$49/*name*/] === true)){
    if((PL$49/*name*/ == "Promise")){
      this["common"]["usePromise"] = true;
    };
    ;
    if((PL$49/*name*/ == "Callback")){
      this["common"]["useCallback"] = true;
    };
    ;
    if(PL$69/*extraModules*/["get"](PL$49/*name*/)){
      continue;;
    };
    ;
    PL$53/*res*/["push"]((("var " + this["getVariableName"](PL$49/*name*/)) + ";"));
    PL$53/*res*/["push"]("try{");
    PL$53/*res*/["push"](this["getVariableName"](PL$49/*name*/));
    PL$53/*res*/["push"](" = ");
    PL$53/*res*/["push"](PL$49/*name*/);
    PL$53/*res*/["push"](";}catch(e){};\n");
  };
  ;};
;
PL$53/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));
PL$53/*res*/["push"](this["makeCompleteStatement"](PL$73/*functionStatement*/));
PL$53/*res*/["push"](")();\n");
return PL$53/*res*/;;
;});
PL$25/*parseFunctionModule*/(this, PL$43/*par*/);
this["getTemplateProperty"] = (function(PL$74/*parTemplate*/, PL$75/*parProperty*/, PL$76/*mandatoryType*/){
var PL$44/*i*/;
var PL$77/*p*/;

;
PL$44/*i*/ = 0;
for(PL$44/*i*/;(PL$44/*i*/ < PL$74/*parTemplate*/["properties"]["length"]);++PL$44/*i*/){{
  PL$77/*p*/ = PL$74/*parTemplate*/["properties"][PL$44/*i*/];
  if(((PL$77/*p*/["kind"] == "init") && (PL$17/*identifierName*/(PL$77/*p*/["key"]) == PL$75/*parProperty*/))){
    if(PL$76/*mandatoryType*/){
      if((PL$77/*p*/["value"]["type"] != PL$76/*mandatoryType*/)){
        this["error"](PL$77/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
      };
      ;
    };
    ;
    return PL$77/*p*/["value"];;
  };
  ;}};
;
;});
this["getTemplateRequireProperty"] = (function(PL$74/*parTemplate*/){
var PL$44/*i*/;
var PL$53/*res*/;
var PL$77/*p*/;
var PL$78/*key*/;

;
PL$44/*i*/ = 0;
PL$53/*res*/ = new PL$41/*Map*/();
for(PL$44/*i*/;(PL$44/*i*/ < PL$74/*parTemplate*/["properties"]["length"]);++PL$44/*i*/){{
  PL$77/*p*/ = PL$74/*parTemplate*/["properties"][PL$44/*i*/];
  if((PL$77/*p*/["kind"] == "init")){
    PL$78/*key*/ = PL$17/*identifierName*/(PL$77/*p*/["key"]);
    if((PL$77/*p*/["value"]["type"] != "Literal")){
      this["error"](PL$77/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
    };
    ;
    PL$53/*res*/["set"](PL$78/*key*/, PL$77/*p*/["value"]["value"]);
  };
  ;}};
;
return PL$53/*res*/;;
;});
this["createExtraDynamicType"] = (function(PL$79/*parType*/, PL$43/*par*/, PL$80/*parParsed*/){
var PL$49/*name*/;
var PL$60/*entry*/;
var PL$53/*res*/;
var PL$81/*newType*/;

;
PL$49/*name*/;
if(PL$43/*par*/["property"]){
  PL$49/*name*/ = ((this["getTypeName"](PL$79/*parType*/, PL$80/*parParsed*/) + "::property::") + PL$43/*par*/["property"]);
}else{
if(PL$43/*par*/["temporaryTracked"]){
  PL$49/*name*/ = (this["getTypeName"](PL$79/*parType*/, PL$80/*parParsed*/) + "::temporaryTracked");
}else{
if(PL$43/*par*/["temporaryTrackedResolved"]){
  PL$49/*name*/ = (this["getTypeName"](PL$79/*parType*/, PL$80/*parParsed*/) + "::temporaryTrackedResolved");
}else{
if(PL$43/*par*/["constructorReturn"]){
  PL$49/*name*/ = (this["getTypeName"](PL$79/*parType*/, PL$80/*parParsed*/) + "::constructorReturn");
}else{
this["error"](PL$12/*errorMsg*/["internalMissingTypeProperty"]);
};
};
};
};
;
if(! PL$79/*parType*/["extraTypes"]){
  PL$79/*parType*/["extraTypes"] = [];
};
;
if(! PL$79/*parType*/["extraTypeMap"]){
  PL$79/*parType*/["extraTypeMap"] = new PL$41/*Map*/();
};
;
if(PL$79/*parType*/["extraTypeMap"]["has"](PL$49/*name*/)){
  return PL$79/*parType*/["extraTypeMap"]["get"](PL$49/*name*/);;
};
;
PL$60/*entry*/ = {"res": this["newResult"]()};
PL$79/*parType*/["extraTypes"]["push"](PL$60/*entry*/);
PL$53/*res*/ = PL$60/*entry*/["res"];
this["addType"]({"name": PL$49/*name*/,
"dynamic": true}, PL$80/*parParsed*/);
PL$53/*res*/["push"]("var /*extratyperender*/ ");
PL$53/*res*/["push"](this["renderType"](PL$49/*name*/));
PL$53/*res*/["push"](" = ");
this["common"]["useClassSystem"] = true;
if(PL$43/*par*/["property"]){
  if((PL$43/*par*/["property"] == "constructor")){
    PL$53/*res*/["push"]("classSystem.getConstructorType({\"type\":");
  }else{
  PL$53/*res*/["push"]("classSystem.getPropertyType({\"type\":");
  };
  ;
  PL$53/*res*/["push"](this["renderType"](PL$79/*parType*/));
  PL$53/*res*/["push"]((", property: " + PL$14/*stringEncodeStr*/(PL$43/*par*/["property"])));
  PL$53/*res*/["push"]("});\n");
}else{
if(PL$43/*par*/["temporaryTracked"]){
  PL$53/*res*/["push"]("classSystem._createTemporaryTrackedClass(");
  PL$53/*res*/["push"](this["renderType"](PL$79/*parType*/));
  PL$53/*res*/["push"](");\n");
}else{
if(PL$43/*par*/["temporaryTrackedResolved"]){
  PL$53/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");
  PL$53/*res*/["push"](this["renderType"](PL$79/*parType*/));
  PL$53/*res*/["push"](");\n");
}else{
if(PL$43/*par*/["constructorReturn"]){
  PL$53/*res*/["push"]("classSystem.getConstructorReturnType(");
  PL$53/*res*/["push"](this["renderType"](PL$79/*parType*/));
  PL$53/*res*/["push"](");\n");
};
};
};
};
;
PL$81/*newType*/ = this["getType"](PL$49/*name*/, PL$80/*parParsed*/);
PL$60/*entry*/["type"] = PL$81/*newType*/;
PL$79/*parType*/["extraTypeMap"]["set"](PL$49/*name*/, PL$81/*newType*/);
return PL$81/*newType*/;;
;});
this["addBeforeReturn"] = (function(PL$82/*parRes*/, PL$83/*parCondition*/){
var PL$84/*condition*/;
var PL$85/*conditional*/;
var PL$86/*frontRes*/;
var PL$87/*endRes*/;

;
PL$84/*condition*/ = PL$83/*parCondition*/;
if((PL$83/*parCondition*/ === undefined)){
  PL$84/*condition*/ = true;
};
;
PL$85/*conditional*/ = this["createConditionalCode"](PL$82/*parRes*/);
PL$85/*conditional*/["addCondition"](PL$84/*condition*/);
this["runBeforeReturnRes"]["push"](PL$85/*conditional*/["res"]);
if(! this["beforeReturnExists"]){
  this["beforeReturnExists"] = true;
  PL$86/*frontRes*/ = this["newResult"]();
  PL$87/*endRes*/ = this["newResult"]();
  this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$86/*frontRes*/);
  this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$87/*endRes*/);
  this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);
  if(! this["promising"]){
    PL$86/*frontRes*/["push"]("try{");
    this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);
    PL$87/*endRes*/["push"]("}catch(e){");
    PL$87/*endRes*/["push"](this["runBeforeReturnRes"]);
    PL$87/*endRes*/["push"]("throw e};");
    this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);
  };
  ;
};
;
this["beforeReturnFrontConditional"]["addCondition"](PL$84/*condition*/);
this["beforeReturnEndConditional"]["addCondition"](PL$84/*condition*/);
this["addBeforeReturnCondition"](PL$84/*condition*/);
;});
this["beforeReturnConditions"] = [];
this["addBeforeReturnCondition"] = (function(PL$83/*parCondition*/){
var PL$44/*i*/;

;
this["beforeReturnConditions"]["push"](PL$83/*parCondition*/);
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$44/*i*/){{
  this["beforeReturnConditionFuns"][PL$44/*i*/](PL$83/*parCondition*/);}};
;
;});
this["beforeReturnConditionFuns"] = [];
this["addBeforeReturnConditionFun"] = (function(PL$88/*parFun*/){
var PL$44/*i*/;

;
this["beforeReturnConditionFuns"]["push"](PL$88/*parFun*/);
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < this["beforeReturnConditions"]["length"]);++PL$44/*i*/){{
  PL$88/*parFun*/(this["beforeReturnConditions"][PL$44/*i*/]);}};
;
;});
this["getReturnCode"] = (function(PL$43/*par*/){
var PL$48/*self*/;
var PL$53/*res*/;
var PL$89/*falseRes*/;
var PL$90/*beforeReturnCode*/;
var PL$91/*newRes*/;
var PL$92/*valueRes*/;
var PL$93/*trueRes*/;
var PL$85/*conditional*/;

;
PL$48/*self*/ = this;
PL$53/*res*/ = this["newResult"]();
if(this["promising"]){
  PL$53/*res*/["push"]((this["returnPromise"] + ".resolve("));
  if(PL$43/*par*/["value"]){
    PL$53/*res*/["push"](PL$43/*par*/["value"]);
  };
  ;
  PL$53/*res*/["push"]("); return");
}else{
if((PL$43/*par*/["return"] || PL$43/*par*/["value"])){
  PL$53/*res*/["push"]("return");
};
;
if(PL$43/*par*/["value"]){
  PL$53/*res*/["push"](" ");
  PL$53/*res*/["push"](PL$43/*par*/["value"]);
};
;
if((PL$43/*par*/["return"] || PL$43/*par*/["value"])){
};
;
};
;
PL$89/*falseRes*/ = PL$53/*res*/;
PL$90/*beforeReturnCode*/ = this["runBeforeReturnRes"];
PL$91/*newRes*/ = PL$48/*self*/["newResult"]();
PL$92/*valueRes*/ = PL$48/*self*/["newResult"]();
if(PL$43/*par*/["value"]){
  PL$92/*valueRes*/["push"]("(function(ret){ ");
  PL$92/*valueRes*/["push"](PL$90/*beforeReturnCode*/);
  PL$92/*valueRes*/["push"]("return ret; })(");
  PL$92/*valueRes*/["push"](PL$43/*par*/["value"]);
  PL$92/*valueRes*/["push"](")");
};
;
if(PL$48/*self*/["promising"]){
  if(PL$43/*par*/["value"]){
    PL$91/*newRes*/["push"]((PL$48/*self*/["returnPromise"] + ".resolve("));
    PL$91/*newRes*/["push"](PL$92/*valueRes*/);
    PL$91/*newRes*/["push"]("); return;");
  }else{
  PL$91/*newRes*/["push"](PL$90/*beforeReturnCode*/);
  PL$91/*newRes*/["push"]((PL$48/*self*/["returnPromise"] + ".resolve("));
  PL$91/*newRes*/["push"]("); return;");
  };
  ;
}else{
if(PL$43/*par*/["value"]){
  PL$91/*newRes*/["push"]("return ");
  PL$91/*newRes*/["push"](PL$92/*valueRes*/);
  PL$91/*newRes*/["push"](";");
}else{
PL$91/*newRes*/["push"](PL$90/*beforeReturnCode*/);
if(PL$43/*par*/["return"]){
  PL$91/*newRes*/["push"]("return;");
};
;
};
;
};
;
PL$93/*trueRes*/ = PL$91/*newRes*/;
PL$85/*conditional*/ = this["createConditionalCode"](PL$93/*trueRes*/, PL$89/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(PL$94/*con*/){

;
PL$85/*conditional*/["addCondition"](PL$94/*con*/);
;}));
return PL$85/*conditional*/["res"];;
;});
PL$31/*expressionsModule*/(this, PL$43/*par*/);
this["identifyClass"] = (function(PL$43/*par*/){
var PL$54/*r*/;
var PL$49/*name*/;
var PL$95/*keywords*/;
var PL$44/*i*/;

;
PL$54/*r*/ = {};
PL$49/*name*/;
if(PL$43/*par*/["name"]){
  PL$49/*name*/ = PL$17/*identifierName*/(PL$43/*par*/["name"]);
};
PL$54/*r*/["hasName"] = (PL$49/*name*/ && PL$49/*name*/["length"]);
PL$95/*keywords*/ = PL$43/*par*/["keywords"];
if((PL$95/*keywords*/ && PL$95/*keywords*/["length"])){
  PL$44/*i*/;
  for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$95/*keywords*/["length"]);++PL$44/*i*/){{
    switch (PL$95/*keywords*/[PL$44/*i*/]["type"]){
case "type":

    PL$54/*r*/["isTyped"] = true;
    break;;case "extends":

    PL$54/*r*/["extendsClause"] = PL$95/*keywords*/[PL$44/*i*/];
    break;;case "sync":

    PL$54/*r*/["syncClause"] = PL$95/*keywords*/[PL$44/*i*/];
    break;;case "track":

    PL$54/*r*/["trackClause"] = PL$95/*keywords*/[PL$44/*i*/];
    break;;case "unique":

    PL$54/*r*/["uniqueClause"] = PL$95/*keywords*/[PL$44/*i*/];
    break;;case "savable":

    PL$54/*r*/["savableClause"] = PL$95/*keywords*/[PL$44/*i*/];
    break;;}
;
    ;}};
  ;
};
;
return PL$54/*r*/;;
;});
this["findClasses"] = (function(PL$43/*par*/, PL$53/*res*/){
var PL$96/*ci*/;
var PL$49/*name*/;
var PL$68/*extraRes*/;
var PL$44/*i*/;

;
if(! PL$53/*res*/){
  PL$53/*res*/ = this["newResult"]();
};
;
if((! PL$43/*par*/ || (typeof PL$43/*par*/ == "string"))){
  return PL$53/*res*/;;
};
;
if(PL$18/*checkIsFunction*/(PL$43/*par*/)){
  return PL$53/*res*/;;
};
;
if((PL$43/*par*/["type"] == "Class")){
  PL$96/*ci*/ = this["identifyClass"](PL$43/*par*/);
  if(PL$96/*ci*/["isTyped"]){
    if(PL$43/*par*/["body"]["literal"]){
      if(PL$96/*ci*/["hasName"]){
        PL$49/*name*/ = PL$17/*identifierName*/(PL$43/*par*/["name"]);
        PL$68/*extraRes*/ = this["newResult"]();
        this["addType"]({"name": PL$49/*name*/,
"extraRes": PL$68/*extraRes*/}, PL$43/*par*/);
        PL$53/*res*/["push"]("var ");
        PL$53/*res*/["push"](this["renderType"](PL$49/*name*/));
        PL$53/*res*/["push"](" = classSystem._createProvisionalClass();\n");
        this["common"]["useClassSystem"] = true;
        PL$53/*res*/["push"]((this["getVariableName"](PL$49/*name*/) + " = "));
        PL$53/*res*/["push"](this["renderType"](PL$49/*name*/));
        PL$53/*res*/["push"](";\n");
        PL$53/*res*/["push"]((("var " + this["getConstructorName"](PL$49/*name*/)) + " = undefined;"));
        PL$53/*res*/["push"](this["_typeReadyCode"]({"typename": PL$49/*name*/}));
        PL$53/*res*/["push"](PL$68/*extraRes*/);
      };
      ;
    };
    ;
  };
  ;
  return PL$53/*res*/;;
};
;
PL$44/*i*/;
for(PL$44/*i*/ in PL$43/*par*/){
  this["findClasses"](PL$43/*par*/[PL$44/*i*/], PL$53/*res*/);};
;
return PL$53/*res*/;;
;});
this["_typeReadyCode"] = (function(PL$43/*par*/){
var PL$53/*res*/;

;
PL$53/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;
PL$53/*res*/["push"]("classSystem.readyPromise(");
PL$53/*res*/["push"](this["renderType"](PL$43/*par*/["typename"]));
PL$53/*res*/["push"](").then(function(parType){");
PL$53/*res*/["push"](this["renderType"](PL$43/*par*/["typename"]));
PL$53/*res*/["push"](" = parType;");
if(! PL$43/*par*/["noConstructor"]){
  PL$53/*res*/["push"]((this["getConstructorName"](PL$43/*par*/["typename"]) + " = classSystem.getTypeConstructor("));
  PL$53/*res*/["push"](this["renderType"](PL$43/*par*/["typename"]));
  PL$53/*res*/["push"](");");
};
;
PL$53/*res*/["push"]("});");
return PL$53/*res*/;;
;});
this["expClassStatement"] = (function(PL$43/*par*/){
var PL$53/*res*/;
var PL$97/*classRes*/;
var PL$96/*ci*/;
var PL$98/*hasName*/;
var PL$49/*name*/;
var PL$99/*isTyped*/;
var PL$100/*extendsClause*/;
var PL$101/*syncClause*/;
var PL$102/*trackClause*/;
var PL$103/*resultType*/;
var PL$104/*literal*/;
var PL$105/*type*/;
var PL$106/*inheritedObjName*/;
var PL$107/*lit*/;
var PL$108/*l*/;
var PL$109/*prop*/;
var PL$52/*tempRes*/;
var PL$110/*baseClasses*/;
var PL$44/*i*/;
var PL$111/*used*/;
var PL$112/*u*/;

;
PL$53/*res*/ = this["newResult"]();
PL$97/*classRes*/ = this["newResult"]();
PL$96/*ci*/ = this["identifyClass"](PL$43/*par*/);
PL$98/*hasName*/ = PL$96/*ci*/["hasName"];
PL$49/*name*/;
if(PL$98/*hasName*/){
  PL$49/*name*/ = PL$17/*identifierName*/(PL$43/*par*/["name"]);
};
;
PL$99/*isTyped*/ = PL$96/*ci*/["isTyped"];
PL$100/*extendsClause*/ = PL$43/*par*/["extendsClause"];
PL$101/*syncClause*/ = PL$96/*ci*/["syncClause"];
PL$102/*trackClause*/ = PL$96/*ci*/["trackClause"];
PL$103/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");
this["inheritedSystem"] = this["newInherited"]();
if(PL$99/*isTyped*/){
  this["common"]["useClassSystem"] = true;
  PL$97/*classRes*/["push"]("classSystem.createClass(");
  if(PL$43/*par*/["body"]["literal"]){
    if(PL$98/*hasName*/){
      this["inheritedSystem"]["type"] = this["getType"](PL$49/*name*/, PL$43/*par*/);
    };
    ;
    this["stack"]("isClassObject");
    this["isClassObject"] = true;
    PL$104/*literal*/ = this["createClassLiteral"](PL$43/*par*/["body"]["literal"], PL$96/*ci*/, PL$49/*name*/);
    PL$97/*classRes*/["push"](this["stringifyClassLiteral"](PL$104/*literal*/, PL$49/*name*/));
    PL$97/*classRes*/["push"](", ");
    PL$97/*classRes*/["push"](this["createClassDefaults"](PL$43/*par*/["body"]["literal"]));
    this["unstack"]("isClassObject");
    if(PL$98/*hasName*/){
      PL$105/*type*/ = this["createType"]({"name": PL$49/*name*/,
"literal": PL$104/*literal*/,
"par": PL$43/*par*/});
    };
    ;
  }else{
  PL$97/*classRes*/["push"]("{}, ");
  PL$97/*classRes*/["push"](this["parseExpression"](PL$43/*par*/["body"]["expression"]));
  };
  ;
  PL$97/*classRes*/["push"](")");
}else{
PL$106/*inheritedObjName*/ = this["getUniqueName"]("inherited");
PL$97/*classRes*/["push"]("(function(){");
if(PL$43/*par*/["body"]["literal"]){
  this["stack"]("preventreturn");
  this["preventreturn"] = true;
  PL$107/*lit*/ = PL$43/*par*/["body"]["literal"];
  PL$108/*l*/ = ((PL$107/*lit*/["properties"] && PL$107/*lit*/["properties"]["length"]) || 0);
  for(PL$44/*i*/;(PL$44/*i*/ < PL$108/*l*/);++PL$44/*i*/){{
    PL$109/*prop*/ = PL$107/*lit*/["properties"][PL$44/*i*/];
    if((PL$109/*prop*/["kind"] == "block")){
      PL$97/*classRes*/["push"](this["parseExpression"](PL$109/*prop*/));
    };
    ;}};
  ;
  this["unstack"]("preventreturn");
};
;
PL$97/*classRes*/["push"]((("var " + PL$106/*inheritedObjName*/) + " = {};\n"));
PL$52/*tempRes*/ = this["newResult"]();
PL$52/*tempRes*/["push"]("var res = promiseland.createClass(");
if(PL$43/*par*/["body"]["literal"]){
  PL$52/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$43/*par*/["body"]["literal"])));
}else{
PL$52/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$43/*par*/["body"]["expression"])));
};
;
PL$52/*tempRes*/["push"](", [");
PL$110/*baseClasses*/ = ((PL$100/*extendsClause*/ && PL$100/*extendsClause*/["baseClasses"]) || []);
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$110/*baseClasses*/["length"]);++PL$44/*i*/){{
  if(PL$44/*i*/){
    PL$52/*tempRes*/["push"](", ");
  };
  ;
  PL$52/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$110/*baseClasses*/[PL$44/*i*/])));}};
;
PL$52/*tempRes*/["push"]("], ");
PL$52/*tempRes*/["push"](PL$106/*inheritedObjName*/);
PL$52/*tempRes*/["push"](");");
PL$97/*classRes*/["push"](PL$52/*tempRes*/);
PL$97/*classRes*/["push"]("\n");
PL$111/*used*/ = this["inheritedSystem"]["used"];
PL$112/*u*/;
for(PL$112/*u*/ in PL$111/*used*/){
  PL$97/*classRes*/["push"]((((((("var " + PL$111/*used*/[PL$112/*u*/]) + " = ") + PL$106/*inheritedObjName*/) + "[") + PL$14/*stringEncodeStr*/(PL$112/*u*/)) + "];\n"));};
;
PL$97/*classRes*/["push"]("return res; })()");
};
;
if(PL$98/*hasName*/){
  if(PL$99/*isTyped*/){
    PL$53/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$43/*par*/["name"],
"classRes": PL$97/*classRes*/,
"parsed": PL$43/*par*/}));
  }else{
  PL$53/*res*/["addPre"]((this["getVariableName"](PL$43/*par*/["name"]) + " = "));
  PL$53/*res*/["addPre"](PL$97/*classRes*/);
  PL$53/*res*/["addPre"](";");
  };
  ;
  PL$53/*res*/["push"](this["getVariableName"](PL$43/*par*/["name"]));
}else{
PL$53/*res*/["push"](PL$97/*classRes*/);
};
;
PL$53/*res*/["setType"](PL$103/*resultType*/);
this["unstack"]("inheritedSystem");
return PL$53/*res*/;;
;});
this["_resolveClassCode"] = (function(PL$43/*par*/){
var PL$113/*parsed*/;
var PL$53/*res*/;

;
PL$113/*parsed*/ = PL$43/*par*/["parsed"];
PL$53/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;
PL$53/*res*/["push"]("classSystem._resolveProvisional(", PL$113/*parsed*/);
PL$53/*res*/["push"](this["renderType"](PL$43/*par*/["name"], PL$113/*parsed*/), PL$113/*parsed*/);
PL$53/*res*/["push"](", ", PL$113/*parsed*/);
PL$53/*res*/["push"](PL$43/*par*/["classRes"], PL$113/*parsed*/);
PL$53/*res*/["push"](");", PL$113/*parsed*/);
return PL$53/*res*/;;
;});
this["createClassLiteral"] = (function(PL$43/*par*/, PL$96/*ci*/, PL$114/*parName*/){
var PL$115/*ret*/;
var PL$44/*i*/;
var PL$108/*l*/;
var PL$109/*prop*/;
var PL$116/*defaultValue*/;
var PL$105/*type*/;
var PL$49/*name*/;

;
PL$115/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$43/*par*/,
"track": (PL$96/*ci*/["trackClause"] ? true : false),
"sync": PL$96/*ci*/["syncClause"],
"unique": PL$96/*ci*/["uniqueClause"],
"savable": PL$96/*ci*/["savableClause"],
"name": PL$114/*parName*/,
"hashStr": this["getModuleHashStr"]()};
PL$44/*i*/ = 0;
PL$108/*l*/ = ((PL$43/*par*/["properties"] && PL$43/*par*/["properties"]["length"]) || 0);
for(PL$44/*i*/;(PL$44/*i*/ < PL$108/*l*/);++PL$44/*i*/){{
  PL$109/*prop*/ = PL$43/*par*/["properties"][PL$44/*i*/];
  PL$116/*defaultValue*/;
  PL$105/*type*/;
  if((PL$109/*prop*/["kind"] == "init")){
    PL$105/*type*/ = (PL$109/*prop*/["typename"] ? this["getType"](PL$109/*prop*/["typename"], PL$43/*par*/) : undefined);
    if(PL$109/*prop*/["value"]){
      if(PL$105/*type*/){
        PL$116/*defaultValue*/ = this["parseAsType"](PL$105/*type*/, PL$109/*prop*/["value"]);
      }else{
      PL$116/*defaultValue*/ = this["parseExpression"](PL$109/*prop*/["value"]);
      PL$105/*type*/ = PL$116/*defaultValue*/["getType"]();
      };
      ;
    };
    ;
    if(! PL$105/*type*/){
      PL$105/*type*/ = this["getType"]("var");
    };
    ;
    PL$115/*ret*/["members"]["push"]({"name": PL$17/*identifierName*/(PL$109/*prop*/["key"]),
"type": PL$105/*type*/,
"defaultValue": PL$116/*defaultValue*/});
  }else{
  if((PL$109/*prop*/["kind"] == "function")){
    PL$49/*name*/ = PL$17/*identifierName*/(PL$109/*prop*/["id"]);
    PL$109/*prop*/["id"] = undefined;
    PL$116/*defaultValue*/ = this["parseExpression"](PL$109/*prop*/["value"]);
    PL$105/*type*/ = PL$116/*defaultValue*/["getType"]();
    PL$115/*ret*/["members"]["push"]({"name": PL$49/*name*/,
"type": PL$105/*type*/,
"defaultValue": PL$116/*defaultValue*/});
  }else{
  this["error"](PL$109/*prop*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);
  };
  };
  ;}};
;
return PL$115/*ret*/;;
;});
this["stringifyClassLiteral"] = (function(PL$43/*par*/, PL$117/*parClassNameStr*/){
var PL$53/*res*/;
var PL$44/*i*/;
var PL$108/*l*/;
var PL$118/*m*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["push"]("{");
if(this["common"]["name"]){
  PL$53/*res*/["push"]((("moduleName: " + PL$14/*stringEncodeStr*/(PL$17/*identifierName*/(this["common"]["name"]))) + ","));
};
;
if(PL$117/*parClassNameStr*/){
  PL$53/*res*/["push"]((("className: " + PL$14/*stringEncodeStr*/(PL$17/*identifierName*/(PL$117/*parClassNameStr*/))) + ","));
};
;
PL$53/*res*/["push"]("members: [");
PL$44/*i*/ = 0;
PL$108/*l*/ = PL$43/*par*/["members"]["length"];
for(PL$44/*i*/;(PL$44/*i*/ < PL$108/*l*/);++PL$44/*i*/){{
  PL$118/*m*/ = PL$43/*par*/["members"][PL$44/*i*/];
  if(PL$44/*i*/){
    PL$53/*res*/["push"](",");
  };
  ;
  PL$53/*res*/["push"]("{");
  PL$53/*res*/["push"](("\"name\":" + PL$14/*stringEncodeStr*/(PL$118/*m*/["name"])));
  PL$53/*res*/["push"](",\"type\":");
  PL$53/*res*/["push"](this["renderType"](PL$118/*m*/["type"], PL$43/*par*/["parsed"]));
  PL$53/*res*/["push"]("}");}};
;
PL$53/*res*/["push"]("]");
PL$53/*res*/["push"](", \"extends\": []");
PL$53/*res*/["push"](", \"hasFreePart\": true");
if(PL$43/*par*/["track"]){
  PL$53/*res*/["push"](", \"track\": true");
};
;
if(PL$43/*par*/["sync"]){
  PL$53/*res*/["push"](", \"sync\": ");
  PL$53/*res*/["push"](PL$119/*JSON*/["stringify"](PL$43/*par*/["sync"]));
  PL$53/*res*/["push"]((", \"hashStr\": " + PL$14/*stringEncodeStr*/(PL$43/*par*/["hashStr"])));
  PL$53/*res*/["push"]((", \"name\": " + PL$14/*stringEncodeStr*/(PL$43/*par*/["name"])));
};
;
if(PL$43/*par*/["unique"]){
  PL$53/*res*/["push"](", \"unique\": true");
};
;
if(PL$43/*par*/["savable"]){
  PL$53/*res*/["push"](", \"savable\": true");
};
;
PL$53/*res*/["push"]("}");
return PL$53/*res*/;;
;});
this["createClassDefaults"] = (function(PL$43/*par*/){
var PL$53/*res*/;
var PL$44/*i*/;
var PL$108/*l*/;
var PL$120/*comma*/;
var PL$109/*prop*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["push"]("{");
PL$44/*i*/ = 0;
PL$108/*l*/ = ((PL$43/*par*/["properties"] && PL$43/*par*/["properties"]["length"]) || 0);
PL$120/*comma*/;
for(PL$44/*i*/;(PL$44/*i*/ < PL$108/*l*/);++PL$44/*i*/){{
  PL$109/*prop*/ = PL$43/*par*/["properties"][PL$44/*i*/];
  if((PL$109/*prop*/["kind"] == "init")){
    if(PL$120/*comma*/){
      PL$53/*res*/["push"](", ");
    };
    ;
    PL$53/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$17/*identifierName*/(PL$109/*prop*/["key"])) + ": "));
    if(PL$109/*prop*/["value"]){
      PL$53/*res*/["push"](this["parseExpression"](PL$109/*prop*/["value"]));
    }else{
    PL$53/*res*/["push"]("undefined");
    };
    ;
    PL$120/*comma*/ = true;
  };
  ;}};
;
PL$53/*res*/["push"]("}");
return PL$53/*res*/;;
;});
this["localClassConstructors"] = {};
this["getConstructorName"] = (function(PL$114/*parName*/){
var PL$49/*name*/;
var PL$121/*t*/;

;
PL$49/*name*/ = PL$17/*identifierName*/(PL$114/*parName*/);
if(this["types"]["has"](PL$49/*name*/)){
  PL$121/*t*/ = this["types"]["get"](PL$49/*name*/);
  if(! PL$121/*t*/["constructorName"]){
    PL$121/*t*/["constructorName"] = this["getUniqueName"]((PL$49/*name*/ + "-constructor"));
    if(! PL$121/*t*/["isDynamic"]){
      this["localClassConstructors"][PL$49/*name*/] = PL$121/*t*/["constructorName"];
    };
    ;
  };
  ;
  return PL$121/*t*/["constructorName"];;
};
;
this["error"](PL$114/*parName*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$49/*name*/});
;});
this["getModuleHashStr"] = (function(){

;
return (this["hashStr"] || "unknownhash");;
;});
this["makeStatement"] = (function(PL$43/*par*/){
var PL$122/*statementRes*/;

;
PL$122/*statementRes*/ = this["newResult"]();
PL$122/*statementRes*/["setStatement"]();
PL$122/*statementRes*/["push"](PL$43/*par*/);
PL$122/*statementRes*/["push"](";");
return PL$122/*statementRes*/;;
;});
this["newLine"] = (function(){
var PL$53/*res*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["_newLine"] = true;
return PL$53/*res*/;;
;});
this["indent"] = (function(PL$82/*parRes*/){
var PL$53/*res*/;

;
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["_indent"] = true;
if(PL$82/*parRes*/){
  PL$53/*res*/["push"](PL$82/*parRes*/);
};
;
return PL$53/*res*/;;
;});
this["newInherited"] = (function(){

;
return new PL$123/*InheritedSystem*/(this);;
;});
PL$123/*InheritedSystem*/ = (function(PL$43/*par*/){

;
this["instance"] = PL$43/*par*/;
this["used"] = {};
;});
PL$123/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$43/*par*/){

;
this["currentMember"] = PL$43/*par*/;
;}),
"getCurrent": (function(){

;
if(! this["used"][this["currentMember"]]){
  this["used"][this["currentMember"]] = this["instance"]["getUniqueName"](("inherited " + this["currentMember"]));
};
;
return this["used"][this["currentMember"]];;
;})};
PL$33/*dynamicModule*/(this, PL$43/*par*/);
this["createConditionalCode"] = (function(PL$124/*parTrueRes*/, PL$125/*parFalseRes*/){
var PL$48/*self*/;
var PL$126/*isDecided*/;
var PL$127/*conditions*/;
var PL$53/*res*/;

;
PL$48/*self*/ = this;
PL$124/*parTrueRes*/ = (PL$124/*parTrueRes*/ || this["newResult"]());
PL$125/*parFalseRes*/ = (PL$125/*parFalseRes*/ || this["newResult"]());
PL$126/*isDecided*/ = false;
PL$127/*conditions*/ = [];
PL$53/*res*/ = this["newResult"]();
PL$53/*res*/["replace"](PL$125/*parFalseRes*/);
return {"res": PL$53/*res*/,
"addCondition": (function(PL$83/*parCondition*/){
var PL$128/*ifRes*/;
var PL$44/*i*/;
var PL$129/*dynRes*/;

;
if(PL$126/*isDecided*/){
  return;;
};
;
if((PL$83/*parCondition*/ === true)){
  PL$126/*isDecided*/ = true;
  PL$53/*res*/["replace"](PL$124/*parTrueRes*/);
  return;;
};
;
if((PL$83/*parCondition*/ === false)){
  return;;
};
;
PL$127/*conditions*/["push"](PL$83/*parCondition*/);
PL$128/*ifRes*/ = PL$48/*self*/["newResult"]();
PL$128/*ifRes*/["push"]("((");
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$127/*conditions*/["length"]);++PL$44/*i*/){{
  if(PL$44/*i*/){
    PL$128/*ifRes*/["push"](" && ");
  };
  ;
  PL$128/*ifRes*/["push"](PL$127/*conditions*/[PL$44/*i*/]);}};
;
PL$128/*ifRes*/["push"](") ? (");
PL$128/*ifRes*/["push"](PL$48/*self*/["makeCompleteStatementDynamic"](PL$124/*parTrueRes*/));
PL$128/*ifRes*/["push"](") : (");
PL$128/*ifRes*/["push"](PL$48/*self*/["makeCompleteStatementDynamic"](PL$125/*parFalseRes*/));
PL$128/*ifRes*/["push"]("))");
PL$129/*dynRes*/ = PL$48/*self*/["newResult"]();
PL$129/*dynRes*/["push"](PL$48/*self*/["makeCompleteStatement"](PL$128/*ifRes*/), undefined, {"dynamic": true});
PL$53/*res*/["replace"](PL$129/*dynRes*/);
;})};;
;});
this["isCallableType"] = (function(){

;
;});
this["getFunctionArgumentCount"] = (function(PL$79/*parType*/, PL$113/*parsed*/){

;
return PL$38/*classSystem*/["getFunctionArgumentCount"](PL$79/*parType*/);;
;});
this["isVar"] = (function(PL$79/*parType*/){

;
if((typeof PL$79/*parType*/ == "function")){
  return PL$38/*classSystem*/["isVar"](PL$79/*parType*/);;
};
;
return false;;
;});
this["_start"]();
;});
PL$130/*promiselandRequireStr*/ = (function(){

;
return "";;
;});
PL$131/*callbackRequireStr*/ = (function(){

;
return "var Callback = promiseland.Callback;\n";;
;});
PL$132/*loaderEndStr*/ = (function(PL$43/*par*/){

;
if(PL$43/*par*/["promiseLandModule"]){
  return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;
}else{
return "});\n})();";;
};
;
;});
PL$133/*createHeader*/ = (function(PL$43/*par*/){
var PL$134/*resStr*/;
var PL$135/*loaderParam*/;

;
if(PL$35/*_pureCode*/){
  return "";;
};
;
PL$134/*resStr*/ = "";
PL$135/*loaderParam*/ = {"usePromise": PL$43/*par*/["usePromise"],
"useRequire": PL$43/*par*/["useRequire"],
"useClassSystem": PL$43/*par*/["useClassSystem"],
"extraModules": PL$43/*par*/["extraModules"],
"variableNames": PL$43/*par*/["variableNames"],
"hashStr": PL$43/*par*/["hashStr"]};
if(PL$43/*par*/["makePromiseLandModule"]){
  PL$135/*loaderParam*/["promiseLandModule"] = true;
};
;
PL$134/*resStr*/ += PL$23/*loaderStr*/(PL$135/*loaderParam*/);
PL$134/*resStr*/ += PL$130/*promiselandRequireStr*/();
if(PL$43/*par*/["useCallback"]){
  PL$134/*resStr*/ += PL$131/*callbackRequireStr*/();
};
;
PL$134/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$43/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$43/*par*/["hashStr"]) + "\"); };\n");
return PL$134/*resStr*/;;
;});
PL$136/*createFooter*/ = (function(PL$43/*par*/){
var PL$134/*resStr*/;

;
if(PL$35/*_pureCode*/){
  return "";;
};
;
PL$134/*resStr*/ = "";
if(PL$43/*par*/["makePromiseLandModule"]){
  PL$134/*resStr*/ += PL$132/*loaderEndStr*/({"promiseLandModule": true});
}else{
PL$134/*resStr*/ += PL$132/*loaderEndStr*/({});
};
;
return PL$134/*resStr*/;;
;});
PL$137/*parser*/ = {"parse": (function(PL$138/*promiselandCodeStr*/){
var PL$77/*p*/;
var PL$137/*parser*/;
var PL$139/*hashStr*/;
var PL$113/*parsed*/;
var PL$134/*resStr*/;
var PL$140/*cp*/;
var PL$53/*res*/;
var PL$70/*parsingConfig*/;
var PL$141/*makePromiseLandModule*/;
var PL$69/*extraModules*/;
var PL$142/*variableNames*/;
var PL$143/*result*/;
var PL$144/*programStr*/;
var PL$145/*mainPartStr*/;

;
PL$77/*p*/ = new PL$37/*promiseland*/["Promise"]();
PL$137/*parser*/ = PL$7/*_parser*/;
PL$139/*hashStr*/ = PL$5/*md5*/(PL$138/*promiselandCodeStr*/);
PL$113/*parsed*/ = PL$137/*parser*/["parse"](PL$138/*promiselandCodeStr*/);
PL$134/*resStr*/ = "";
PL$140/*cp*/;
PL$53/*res*/ = {};
if((PL$113/*parsed*/["length"] === undefined)){
  if((PL$113/*parsed*/["type"] == "Program")){
    PL$70/*parsingConfig*/ = PL$113/*parsed*/["config"];
    PL$140/*cp*/ = new PL$47/*CodeParser*/({"toParse": PL$113/*parsed*/,
"hashStr": PL$139/*hashStr*/,
"parsingConfig": PL$70/*parsingConfig*/});
    PL$141/*makePromiseLandModule*/ = false;
    PL$69/*extraModules*/ = PL$140/*cp*/["common"]["extraModules"];
    PL$142/*variableNames*/ = PL$140/*cp*/["common"]["variableNames"];
    if(PL$70/*parsingConfig*/){
      PL$141/*makePromiseLandModule*/ = PL$140/*cp*/["getTemplateProperty"](PL$70/*parsingConfig*/, "__promiseLandModule", "Literal");
      if((PL$141/*makePromiseLandModule*/ && (PL$141/*makePromiseLandModule*/["value"] === true))){
        PL$141/*makePromiseLandModule*/ = true;
      }else{
      PL$141/*makePromiseLandModule*/ = false;
      };
      ;
    };
    ;
    PL$143/*result*/ = PL$140/*cp*/["getResult"]();
    PL$144/*programStr*/ = PL$143/*result*/["getProgramCodeStr"]();
    PL$53/*res*/["warnings"] = PL$140/*cp*/["getWarnings"]();
    PL$53/*res*/["errors"] = PL$140/*cp*/["getErrors"]();
    PL$145/*mainPartStr*/ = "";
    if(PL$35/*_pureCode*/){
      PL$134/*resStr*/ = PL$144/*programStr*/;
    }else{
    if(PL$140/*cp*/["programPromiseStr"]){
      PL$145/*mainPartStr*/ += (((("var " + PL$140/*cp*/["programPromiseStr"]) + " = ") + PL$140/*cp*/["newPromiseStr"]()) + ";\n");
      PL$145/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$139/*hashStr*/) + "\", \"module\": ") + PL$140/*cp*/["programPromiseStr"]) + ", promising: true });\n");
      PL$145/*mainPartStr*/ += PL$144/*programStr*/;
      PL$145/*mainPartStr*/ += (";\nreturn " + PL$140/*cp*/["programPromiseStr"]);
    }else{
    PL$145/*mainPartStr*/ += PL$144/*programStr*/;
    PL$145/*mainPartStr*/ += (("return " + PL$140/*cp*/["resultNameStr"]) + ";\n");
    };
    ;
    PL$134/*resStr*/ += PL$133/*createHeader*/({"makePromiseLandModule": PL$141/*makePromiseLandModule*/,
"extraModules": PL$69/*extraModules*/,
"variableNames": PL$142/*variableNames*/,
"hashStr": PL$139/*hashStr*/,
"usePromise": PL$140/*cp*/["common"]["usePromise"],
"useRequire": PL$140/*cp*/["common"]["useRequire"],
"useCallback": PL$140/*cp*/["common"]["useCallback"],
"useClassSystem": PL$140/*cp*/["common"]["useClassSystem"]});
    PL$134/*resStr*/ += PL$145/*mainPartStr*/;
    PL$134/*resStr*/ += PL$136/*createFooter*/({"makePromiseLandModule": PL$141/*makePromiseLandModule*/});
    };
    ;
  }else{
  this["error"](PL$113/*parsed*/, PL$12/*errorMsg*/["unknownType"]);
  };
  ;
}else{
PL$11/*errorFun*/(PL$113/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);
};
;
if(! (PL$53/*res*/["errors"] && PL$53/*res*/["errors"]["length"])){
  PL$53/*res*/["javascript"] = PL$134/*resStr*/;
};
;
PL$77/*p*/["resolve"](PL$53/*res*/);
return PL$77/*p*/["promise"];;
;})};
PL$1.resolve(PL$137/*parser*/); return;;
PL$1.resolve(); return;;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();