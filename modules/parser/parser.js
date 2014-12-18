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
    if (promiseland._hasModule({ hashStr: "93f536ac59d6069d5081feb326c2f9df" })){ return promiseland._getModule("93f536ac59d6069d5081feb326c2f9df"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "93f536ac59d6069d5081feb326c2f9df", "module": PL$1, promising: true });
var PL$37/*promiseland*/;try{PL$37/*promiseland*/ = promiseland;}catch(e){};
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
var PL$104/*promiselandRequireStr*/;
var PL$105/*callbackRequireStr*/;
var PL$106/*loaderEndStr*/;
var PL$107/*createHeader*/;
var PL$110/*createFooter*/;
var PL$111/*parser*/;
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
    return "new __Promise()";
    ;});
  PL$41/*Map*/ = PL$37/*promiseland*/["Map"];
  PL$42/*findPromises*/ = (function(PL$43/*par*/){
  var PL$44/*i*/;

    ;
    if((! PL$43/*par*/ || (typeof PL$43/*par*/ == "string"))){
      return false;
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
      return true;
    };
    ;
    return false;
    ;});
  __requireFun("./Result").then(PL$3(function(PL$46){PL$45/*_Result*/ = PL$46;
  PL$47/*CodeParser*/ = (function(PL$43/*par*/){
  var PL$48/*self*/;
var PL$44/*i*/;
var PL$96/*InheritedSystem*/;

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
      return PL$48/*self*/["getUniqueName"](PL$49/*name*/);
      ;})});
    };
    ;
    this["errors"] = this["common"]["errors"];
    this["newPromiseStr"] = (function(){
    
      ;
      this["common"]["usePromise"] = true;
      return PL$40/*globalNewPromiseStr*/();
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
      return PL$53/*res*/;
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
      return PL$54/*r*/;
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
      return PL$57/*a*/;
      ;});
    this["getWarnings"] = (function(){
    
      ;
      return this["_getErrors"](true);
      ;});
    this["getErrors"] = (function(){
    
      ;
      return this["_getErrors"](false);
      ;});
    this["getWarningFun"] = (function(PL$43/*par*/){
    var PL$48/*self*/;

      ;
      PL$48/*self*/ = this;
      return (function(PL$58/*err*/){
      
        ;
        PL$48/*self*/["warning"](PL$43/*par*/, PL$58/*err*/);
        ;});
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
      return this["_addError"](PL$43/*par*/, PL$58/*err*/);
      ;});
    this["addWarning"] = (function(PL$43/*par*/, PL$58/*err*/){
    
      ;
      return this["_addError"](PL$43/*par*/, PL$58/*err*/, true);
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
      return PL$61/*ps*/;
      ;});
    this["runtimeError"] = (function(PL$43/*par*/, PL$62/*par2*/){
    var PL$61/*ps*/;
var PL$53/*res*/;

      ;
      PL$61/*ps*/ = this["addWarning"](PL$43/*par*/, PL$62/*par2*/);
      PL$53/*res*/ = this["runtimeErrorNoWarning"](PL$62/*par2*/);
      PL$53/*res*/["setPromise"](PL$61/*ps*/);
      return PL$53/*res*/;
      ;});
    this["runtimeErrorNoWarning"] = (function(PL$62/*par2*/){
    var PL$53/*res*/;

      ;
      PL$53/*res*/ = this["newResult"]();
      PL$53/*res*/["push"]((((("(function(){ throw { id:" + PL$62/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$62/*par2*/["msg"])) + " } })()"));
      return PL$53/*res*/;
      ;});
    this["getUniqueName"] = (function(PL$49/*name*/){
    var PL$63/*retStr*/;

      ;
      PL$63/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
      if(PL$49/*name*/){
        PL$63/*retStr*/ += (("/*" + PL$49/*name*/) + "*/");
      };
      ;
      return PL$63/*retStr*/;
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
      return PL$67/*instance*/;
      ;});
    this["getFunctionRes"] = (function(){
    
      ;
      return this["functionRes"];
      ;});
    this["getFunctionName"] = (function(){
    
      ;
      return this["functionName"];
      ;});
    this["getResult"] = (function(){
    
      ;
      return this["result"];
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
      return PL$54/*r*/;
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
      return PL$53/*res*/;
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
          return PL$77/*p*/["value"];
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
      return PL$53/*res*/;
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
        return PL$79/*parType*/["extraTypeMap"]["get"](PL$49/*name*/);
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
      return PL$81/*newType*/;
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
      return PL$85/*conditional*/["res"];
      ;});
    PL$31/*expressionsModule*/(this, PL$43/*par*/);
    this["getModuleHashStr"] = (function(){
    
      ;
      return (this["hashStr"] || "unknownhash");
      ;});
    this["makeStatement"] = (function(PL$43/*par*/){
    var PL$95/*statementRes*/;

      ;
      PL$95/*statementRes*/ = this["newResult"]();
      PL$95/*statementRes*/["setStatement"]();
      PL$95/*statementRes*/["push"](PL$43/*par*/);
      PL$95/*statementRes*/["push"](";");
      return PL$95/*statementRes*/;
      ;});
    this["newLine"] = (function(){
    var PL$53/*res*/;

      ;
      PL$53/*res*/ = this["newResult"]();
      PL$53/*res*/["_newLine"] = true;
      return PL$53/*res*/;
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
      return PL$53/*res*/;
      ;});
    this["newInherited"] = (function(){
    
      ;
      return new PL$96/*InheritedSystem*/(this);
      ;});
    PL$96/*InheritedSystem*/ = (function(PL$43/*par*/){
    
      ;
      this["instance"] = PL$43/*par*/;
      this["used"] = {};
      ;});
    PL$96/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$43/*par*/){
    
      ;
      this["currentMember"] = PL$43/*par*/;
      ;}),
"getCurrent": (function(){
    
      ;
      if(! this["used"][this["currentMember"]]){
        this["used"][this["currentMember"]] = this["instance"]["getUniqueName"](("inherited " + this["currentMember"]));
      };
      ;
      return this["used"][this["currentMember"]];
      ;})};
    PL$33/*dynamicModule*/(this, PL$43/*par*/);
    this["createConditionalCode"] = (function(PL$97/*parTrueRes*/, PL$98/*parFalseRes*/){
    var PL$48/*self*/;
var PL$99/*isDecided*/;
var PL$100/*conditions*/;
var PL$53/*res*/;

      ;
      PL$48/*self*/ = this;
      PL$97/*parTrueRes*/ = (PL$97/*parTrueRes*/ || this["newResult"]());
      PL$98/*parFalseRes*/ = (PL$98/*parFalseRes*/ || this["newResult"]());
      PL$99/*isDecided*/ = false;
      PL$100/*conditions*/ = [];
      PL$53/*res*/ = this["newResult"]();
      PL$53/*res*/["replace"](PL$98/*parFalseRes*/);
      return {"res": PL$53/*res*/,
"addCondition": (function(PL$83/*parCondition*/){
      var PL$101/*ifRes*/;
var PL$44/*i*/;
var PL$102/*dynRes*/;

        ;
        if(PL$99/*isDecided*/){
          return;
        };
        ;
        if((PL$83/*parCondition*/ === true)){
          PL$99/*isDecided*/ = true;
          PL$53/*res*/["replace"](PL$97/*parTrueRes*/);
          return;
        };
        ;
        if((PL$83/*parCondition*/ === false)){
          return;
        };
        ;
        PL$100/*conditions*/["push"](PL$83/*parCondition*/);
        PL$101/*ifRes*/ = PL$48/*self*/["newResult"]();
        PL$101/*ifRes*/["push"]("((");
        PL$44/*i*/ = 0;
        for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$100/*conditions*/["length"]);++PL$44/*i*/){{
          if(PL$44/*i*/){
            PL$101/*ifRes*/["push"](" && ");
          };
          ;
          PL$101/*ifRes*/["push"](PL$100/*conditions*/[PL$44/*i*/]);}};
        ;
        PL$101/*ifRes*/["push"](") ? (");
        PL$101/*ifRes*/["push"](PL$48/*self*/["makeCompleteStatementDynamic"](PL$97/*parTrueRes*/));
        PL$101/*ifRes*/["push"](") : (");
        PL$101/*ifRes*/["push"](PL$48/*self*/["makeCompleteStatementDynamic"](PL$98/*parFalseRes*/));
        PL$101/*ifRes*/["push"]("))");
        PL$102/*dynRes*/ = PL$48/*self*/["newResult"]();
        PL$102/*dynRes*/["push"](PL$48/*self*/["makeCompleteStatement"](PL$101/*ifRes*/), undefined, {"dynamic": true});
        PL$53/*res*/["replace"](PL$102/*dynRes*/);
        ;})};
      ;});
    this["isCallableType"] = (function(){
    
      ;
      ;});
    this["getFunctionArgumentCount"] = (function(PL$79/*parType*/, PL$103/*parsed*/){
    
      ;
      return PL$38/*classSystem*/["getFunctionArgumentCount"](PL$79/*parType*/);
      ;});
    this["isVar"] = (function(PL$79/*parType*/){
    
      ;
      if((typeof PL$79/*parType*/ == "function")){
        return PL$38/*classSystem*/["isVar"](PL$79/*parType*/);
      };
      ;
      return false;
      ;});
    this["_start"]();
    ;});
  PL$104/*promiselandRequireStr*/ = (function(){
  
    ;
    return "";
    ;});
  PL$105/*callbackRequireStr*/ = (function(){
  
    ;
    return "var Callback = promiseland.Callback;\n";
    ;});
  PL$106/*loaderEndStr*/ = (function(PL$43/*par*/){
  
    ;
    if(PL$43/*par*/["promiseLandModule"]){
      return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";
    }else{
    return "});\n})();";
    };
    ;
    ;});
  PL$107/*createHeader*/ = (function(PL$43/*par*/){
  var PL$108/*resStr*/;
var PL$109/*loaderParam*/;

    ;
    if(PL$35/*_pureCode*/){
      return "";
    };
    ;
    PL$108/*resStr*/ = "";
    PL$109/*loaderParam*/ = {"usePromise": PL$43/*par*/["usePromise"],
"useRequire": PL$43/*par*/["useRequire"],
"useClassSystem": PL$43/*par*/["useClassSystem"],
"extraModules": PL$43/*par*/["extraModules"],
"variableNames": PL$43/*par*/["variableNames"],
"hashStr": PL$43/*par*/["hashStr"]};
    if(PL$43/*par*/["makePromiseLandModule"]){
      PL$109/*loaderParam*/["promiseLandModule"] = true;
    };
    ;
    PL$108/*resStr*/ += PL$23/*loaderStr*/(PL$109/*loaderParam*/);
    PL$108/*resStr*/ += PL$104/*promiselandRequireStr*/();
    if(PL$43/*par*/["useCallback"]){
      PL$108/*resStr*/ += PL$105/*callbackRequireStr*/();
    };
    ;
    PL$108/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$43/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$43/*par*/["hashStr"]) + "\"); };\n");
    return PL$108/*resStr*/;
    ;});
  PL$110/*createFooter*/ = (function(PL$43/*par*/){
  var PL$108/*resStr*/;

    ;
    if(PL$35/*_pureCode*/){
      return "";
    };
    ;
    PL$108/*resStr*/ = "";
    if(PL$43/*par*/["makePromiseLandModule"]){
      PL$108/*resStr*/ += PL$106/*loaderEndStr*/({"promiseLandModule": true});
    }else{
    PL$108/*resStr*/ += PL$106/*loaderEndStr*/({});
    };
    ;
    return PL$108/*resStr*/;
    ;});
  PL$111/*parser*/ = {"parse": (function(PL$112/*promiselandCodeStr*/){
  var PL$77/*p*/;
var PL$111/*parser*/;
var PL$113/*hashStr*/;
var PL$103/*parsed*/;
var PL$108/*resStr*/;
var PL$114/*cp*/;
var PL$53/*res*/;
var PL$70/*parsingConfig*/;
var PL$115/*makePromiseLandModule*/;
var PL$69/*extraModules*/;
var PL$116/*variableNames*/;
var PL$117/*result*/;
var PL$118/*programStr*/;
var PL$119/*mainPartStr*/;

    ;
    PL$77/*p*/ = new PL$37/*promiseland*/["Promise"]();
    PL$111/*parser*/ = PL$7/*_parser*/;
    PL$113/*hashStr*/ = PL$5/*md5*/(PL$112/*promiselandCodeStr*/);
    PL$103/*parsed*/ = PL$111/*parser*/["parse"](PL$112/*promiselandCodeStr*/);
    PL$108/*resStr*/ = "";
    PL$114/*cp*/;
    PL$53/*res*/ = {};
    if((PL$103/*parsed*/["length"] === undefined)){
      if((PL$103/*parsed*/["type"] == "Program")){
        PL$70/*parsingConfig*/ = PL$103/*parsed*/["config"];
        PL$114/*cp*/ = new PL$47/*CodeParser*/({"toParse": PL$103/*parsed*/,
"hashStr": PL$113/*hashStr*/,
"parsingConfig": PL$70/*parsingConfig*/});
        PL$115/*makePromiseLandModule*/ = false;
        PL$69/*extraModules*/ = PL$114/*cp*/["common"]["extraModules"];
        PL$116/*variableNames*/ = PL$114/*cp*/["common"]["variableNames"];
        if(PL$70/*parsingConfig*/){
          PL$115/*makePromiseLandModule*/ = PL$114/*cp*/["getTemplateProperty"](PL$70/*parsingConfig*/, "__promiseLandModule", "Literal");
          if((PL$115/*makePromiseLandModule*/ && (PL$115/*makePromiseLandModule*/["value"] === true))){
            PL$115/*makePromiseLandModule*/ = true;
          }else{
          PL$115/*makePromiseLandModule*/ = false;
          };
          ;
        };
        ;
        PL$117/*result*/ = PL$114/*cp*/["getResult"]();
        PL$118/*programStr*/ = PL$117/*result*/["getProgramCodeStr"]();
        PL$53/*res*/["warnings"] = PL$114/*cp*/["getWarnings"]();
        PL$53/*res*/["errors"] = PL$114/*cp*/["getErrors"]();
        PL$119/*mainPartStr*/ = "";
        if(PL$35/*_pureCode*/){
          PL$108/*resStr*/ = PL$118/*programStr*/;
        }else{
        if(PL$114/*cp*/["programPromiseStr"]){
          PL$119/*mainPartStr*/ += (((("var " + PL$114/*cp*/["programPromiseStr"]) + " = ") + PL$114/*cp*/["newPromiseStr"]()) + ";\n");
          PL$119/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$113/*hashStr*/) + "\", \"module\": ") + PL$114/*cp*/["programPromiseStr"]) + ", promising: true });\n");
          PL$119/*mainPartStr*/ += PL$118/*programStr*/;
          PL$119/*mainPartStr*/ += (";\nreturn " + PL$114/*cp*/["programPromiseStr"]);
        }else{
        PL$119/*mainPartStr*/ += PL$118/*programStr*/;
        PL$119/*mainPartStr*/ += (("return " + PL$114/*cp*/["resultNameStr"]) + ";\n");
        };
        ;
        PL$108/*resStr*/ += PL$107/*createHeader*/({"makePromiseLandModule": PL$115/*makePromiseLandModule*/,
"extraModules": PL$69/*extraModules*/,
"variableNames": PL$116/*variableNames*/,
"hashStr": PL$113/*hashStr*/,
"usePromise": PL$114/*cp*/["common"]["usePromise"],
"useRequire": PL$114/*cp*/["common"]["useRequire"],
"useCallback": PL$114/*cp*/["common"]["useCallback"],
"useClassSystem": PL$114/*cp*/["common"]["useClassSystem"]});
        PL$108/*resStr*/ += PL$119/*mainPartStr*/;
        PL$108/*resStr*/ += PL$110/*createFooter*/({"makePromiseLandModule": PL$115/*makePromiseLandModule*/});
        };
        ;
      }else{
      this["error"](PL$103/*parsed*/, PL$12/*errorMsg*/["unknownType"]);
      };
      ;
    }else{
    PL$11/*errorFun*/(PL$103/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);
    };
    ;
    if(! (PL$53/*res*/["errors"] && PL$53/*res*/["errors"]["length"])){
      PL$53/*res*/["javascript"] = PL$108/*resStr*/;
    };
    ;
    PL$77/*p*/["resolve"](PL$53/*res*/);
    return PL$77/*p*/["promise"];
    ;})};
  PL$1.resolve(PL$111/*parser*/); return;
  PL$1.resolve(); return;}), PL$4);
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