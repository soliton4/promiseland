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
    if (promiseland._hasModule({ hashStr: "4757048128e23175930a064afb23fcfe" })){ return promiseland._getModule("4757048128e23175930a064afb23fcfe"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "4757048128e23175930a064afb23fcfe", "module": PL$1, promising: true });
var PL$39/*promiseland*/;try{PL$39/*promiseland*/ = promiseland;}catch(e){};
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
var PL$35/*asmModule*/;
var PL$37/*_pureCode*/;
var PL$38/*Promise*/;
var PL$40/*classSystem*/;
var PL$41/*varType*/;
var PL$42/*globalNewPromiseStr*/;
var PL$43/*Map*/;
var PL$44/*findPromises*/;
var PL$47/*_Result*/;
var PL$49/*CodeParser*/;
var PL$106/*promiselandRequireStr*/;
var PL$107/*callbackRequireStr*/;
var PL$108/*mapRequireStr*/;
var PL$109/*loaderEndStr*/;
var PL$110/*createHeader*/;
var PL$113/*createFooter*/;
var PL$114/*parser*/;
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
  __requireFun("./asm").then(PL$3(function(PL$36){PL$35/*asmModule*/ = PL$36;
  PL$37/*_pureCode*/ = false;
  PL$38/*Promise*/ = PL$39/*promiseland*/["Promise"];
  PL$40/*classSystem*/ = PL$39/*promiseland*/["classSystem"];
  PL$41/*varType*/ = PL$40/*classSystem*/["getBuiltinType"]("var");
  PL$42/*globalNewPromiseStr*/ = (function(){
  
    ;
    return "new __Promise()";
    ;});
  PL$43/*Map*/ = PL$39/*promiseland*/["Map"];
  PL$44/*findPromises*/ = (function(PL$45/*par*/){
  var PL$46/*i*/;

    ;
    if((! PL$45/*par*/ || (typeof PL$45/*par*/ == "string"))){
      return false;
    };
    ;
    if(((PL$45/*par*/["type"] == "UnaryExpression") && ((PL$45/*par*/["operator"] == "*") || (PL$45/*par*/["operator"] == "require")))){
      PL$45/*par*/["promising"] = true;
    };
    ;
    if((PL$18/*checkIsFunction*/(PL$45/*par*/) && (PL$45/*par*/["promise"] == "*"))){
      PL$45/*par*/["promising"] = true;
    };
    ;
    PL$46/*i*/;
    for(PL$46/*i*/ in PL$45/*par*/){
      if((PL$46/*i*/ == "_extrainfo")){
        continue;;
      };
      ;
      if((PL$44/*findPromises*/(PL$45/*par*/[PL$46/*i*/]) && ! PL$18/*checkIsFunction*/(PL$45/*par*/[PL$46/*i*/]))){
        PL$45/*par*/["promising"] = true;
      };
      ;};
    ;
    if(PL$45/*par*/["promising"]){
      return true;
    };
    ;
    return false;
    ;});
  __requireFun("./Result").then(PL$3(function(PL$48){PL$47/*_Result*/ = PL$48;
  PL$49/*CodeParser*/ = (function(PL$45/*par*/){
  var PL$50/*self*/;
var PL$46/*i*/;
var PL$98/*InheritedSystem*/;

    ;
    PL$50/*self*/ = this;
    this["toParse"] = PL$45/*par*/["toParse"];
    this["dynamicCode"] = PL$45/*par*/["dynamicCode"];
    this["hashStr"] = PL$45/*par*/["hashStr"];
    if(PL$45/*par*/["_locals"]){
      for(PL$46/*i*/ in PL$45/*par*/["_locals"]){
        this[PL$46/*i*/] = PL$45/*par*/["_locals"][PL$46/*i*/];};
      ;
    };
    ;
    if(PL$45/*par*/["common"]){
      this["common"] = PL$45/*par*/["common"];
    }else{
    this["common"] = {"givenTypeNames": {},
"errors": [],
"uniquebasis": (PL$45/*par*/["uniquebasis"] || {"index": 1}),
"parsingConfig": PL$45/*par*/["parsingConfig"]};
    this["common"]["variableNames"] = new PL$15/*VariableNames*/({"getUniqueName": (function(PL$51/*name*/){
    
      ;
      return PL$50/*self*/["getUniqueName"](PL$51/*name*/);
      ;})});
    };
    ;
    this["errors"] = this["common"]["errors"];
    this["newPromiseStr"] = (function(){
    
      ;
      this["common"]["usePromise"] = true;
      return PL$42/*globalNewPromiseStr*/();
      ;});
    PL$29/*typesModule*/(this, PL$45/*par*/);
    this["algorithmicCode"] = false;
    this["stack"] = (function(PL$52/*parStr*/){
    var PL$53/*stackNameStr*/;

      ;
      PL$53/*stackNameStr*/ = ("_stack_" + PL$52/*parStr*/);
      if(! this[PL$53/*stackNameStr*/]){
        this[PL$53/*stackNameStr*/] = [];
      };
      ;
      this[PL$53/*stackNameStr*/]["push"](this[PL$52/*parStr*/]);
      ;});
    this["unstack"] = (function(PL$52/*parStr*/){
    var PL$53/*stackNameStr*/;

      ;
      PL$53/*stackNameStr*/ = ("_stack_" + PL$52/*parStr*/);
      this[PL$52/*parStr*/] = this[PL$53/*stackNameStr*/]["pop"]();
      ;});
    this["_start"] = (function(){
    var PL$54/*tempRes*/;

      ;
      if(this["toParse"]){
        if((this["toParse"]["type"] == "Program")){
          PL$54/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
          PL$54/*tempRes*/["push"](";");
          this["result"] = this["makeCompleteStatement"](PL$54/*tempRes*/);
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
    this["makeCompleteStatement"] = (function(PL$45/*par*/){
    var PL$55/*res*/;

      ;
      PL$55/*res*/ = this["newResult"]();
      PL$55/*res*/["setComplete"]();
      PL$55/*res*/["push"](PL$45/*par*/);
      return PL$55/*res*/;
      ;});
    this["makeCompleteStatementDynamic"] = (function(PL$45/*par*/){
    var PL$56/*r*/;
var PL$57/*d*/;

      ;
      PL$56/*r*/ = this["newResult"]();
      PL$57/*d*/ = this["newResult"]();
      PL$57/*d*/["push"](this["makeCompleteStatement"](PL$45/*par*/), undefined, {"stringEncode": true});
      PL$56/*r*/["push"]("\"");
      PL$56/*r*/["push"](PL$57/*d*/);
      PL$56/*r*/["push"]("\"");
      return PL$56/*r*/;
      ;});
    PL$27/*variablesModule*/(this, PL$45/*par*/);
    this["_getErrors"] = (function(PL$58/*parWarning*/){
    var PL$59/*a*/;
var PL$46/*i*/;

      ;
      PL$59/*a*/ = [];
      PL$46/*i*/ = 0;
      for(PL$46/*i*/ = 0;(PL$46/*i*/ < this["errors"]["length"]);++PL$46/*i*/){{
        if(this["errors"][PL$46/*i*/]["valid"]){
          if((PL$58/*parWarning*/ ? this["errors"][PL$46/*i*/]["warning"] : ! this["errors"][PL$46/*i*/]["warning"])){
            PL$59/*a*/["push"](this["errors"][PL$46/*i*/]);
          };
          ;
        };
        ;}};
      ;
      return PL$59/*a*/;
      ;});
    this["getWarnings"] = (function(){
    
      ;
      return this["_getErrors"](true);
      ;});
    this["getErrors"] = (function(){
    
      ;
      return this["_getErrors"](false);
      ;});
    this["getWarningFun"] = (function(PL$45/*par*/){
    var PL$50/*self*/;

      ;
      PL$50/*self*/ = this;
      return (function(PL$60/*err*/){
      
        ;
        PL$50/*self*/["warning"](PL$45/*par*/, PL$60/*err*/);
        ;});
      ;});
    this["warning"] = (function(PL$45/*par*/, PL$60/*err*/){
    
      ;
      if(! PL$45/*par*/["line"]){
        PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);
      };
      ;
      this["addWarning"](PL$45/*par*/, PL$60/*err*/);
      ;});
    this["error"] = (function(PL$45/*par*/, PL$60/*err*/){
    
      ;
      this["_addError"](PL$45/*par*/, PL$60/*err*/);
      PL$11/*errorFun*/(PL$45/*par*/, PL$60/*err*/);
      ;});
    this["addError"] = (function(PL$45/*par*/, PL$60/*err*/){
    
      ;
      return this["_addError"](PL$45/*par*/, PL$60/*err*/);
      ;});
    this["addWarning"] = (function(PL$45/*par*/, PL$60/*err*/){
    
      ;
      return this["_addError"](PL$45/*par*/, PL$60/*err*/, true);
      ;});
    this["_addError"] = (function(PL$45/*par*/, PL$60/*err*/, PL$61/*warning*/){
    var PL$62/*entry*/;
var PL$63/*ps*/;

      ;
      PL$62/*entry*/ = {"par": PL$45/*par*/,
"line": PL$45/*par*/["line"],
"column": PL$45/*par*/["column"],
"msg": ((PL$60/*err*/["id"] + ": ") + PL$60/*err*/["msg"]),
"valid": true,
"warning": PL$61/*warning*/};
      this["errors"]["push"](PL$62/*entry*/);
      PL$63/*ps*/ = new PL$38/*Promise*/();
      PL$63/*ps*/["then"]((function(){
      
        ;
        PL$62/*entry*/["valid"] = false;
        ;}));
      return PL$63/*ps*/;
      ;});
    this["runtimeError"] = (function(PL$45/*par*/, PL$64/*par2*/){
    var PL$63/*ps*/;
var PL$55/*res*/;

      ;
      PL$63/*ps*/ = this["addWarning"](PL$45/*par*/, PL$64/*par2*/);
      PL$55/*res*/ = this["runtimeErrorNoWarning"](PL$64/*par2*/);
      PL$55/*res*/["setPromise"](PL$63/*ps*/);
      return PL$55/*res*/;
      ;});
    this["runtimeErrorNoWarning"] = (function(PL$64/*par2*/){
    var PL$55/*res*/;

      ;
      PL$55/*res*/ = this["newResult"]();
      PL$55/*res*/["push"]((((("(function(){ throw { id:" + PL$64/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$64/*par2*/["msg"])) + " } })()"));
      return PL$55/*res*/;
      ;});
    this["getUniqueName"] = (function(PL$51/*name*/){
    var PL$65/*retStr*/;

      ;
      PL$65/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
      if(PL$51/*name*/){
        PL$65/*retStr*/ += (("/*" + PL$51/*name*/) + "*/");
      };
      ;
      return PL$65/*retStr*/;
      ;});
    this["newInstance"] = (function(PL$66/*element*/, PL$67/*extras*/){
    var PL$68/*param*/;
var PL$46/*i*/;
var PL$69/*instance*/;

      ;
      PL$68/*param*/ = {"toParse": PL$66/*element*/,
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
      if(PL$67/*extras*/){
        PL$46/*i*/;
        for(PL$46/*i*/ in PL$67/*extras*/){
          PL$68/*param*/[PL$46/*i*/] = PL$67/*extras*/[PL$46/*i*/];};
        ;
      };
      ;
      PL$69/*instance*/ = new PL$49/*CodeParser*/(PL$68/*param*/);
      return PL$69/*instance*/;
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
    this["newResult"] = (function(PL$45/*par*/){
    var PL$56/*r*/;

      ;
      PL$56/*r*/ = new PL$47/*_Result*/({"cp": this});
      if(PL$45/*par*/){
        PL$56/*r*/["push"](PL$45/*par*/);
      };
      ;
      return PL$56/*r*/;
      ;});
    this["parseProgram"] = (function(PL$45/*par*/){
    var PL$55/*res*/;
var PL$70/*extraRes*/;
var PL$71/*extraModules*/;
var PL$72/*parsingConfig*/;
var PL$73/*reqireProperty*/;
var PL$74/*nameProperty*/;
var PL$75/*functionStatement*/;
var PL$51/*name*/;

      ;
      PL$44/*findPromises*/(PL$45/*par*/);
      PL$55/*res*/ = this["newResult"]();
      PL$70/*extraRes*/ = this["newResult"]();
      PL$70/*extraRes*/["push"]("\"use strict\";\n");
      PL$20/*addExtraToPar*/(PL$45/*par*/, "addFront", PL$70/*extraRes*/);
      PL$71/*extraModules*/ = new PL$43/*Map*/();
      PL$72/*parsingConfig*/ = this["common"]["parsingConfig"];
      if(PL$72/*parsingConfig*/){
        PL$73/*reqireProperty*/ = this["getTemplateProperty"](PL$72/*parsingConfig*/, "require", "ObjectExpression");
        if(PL$73/*reqireProperty*/){
          PL$71/*extraModules*/ = this["getTemplateRequireProperty"](PL$73/*reqireProperty*/);
        };
        ;
        PL$74/*nameProperty*/ = this["getTemplateProperty"](PL$72/*parsingConfig*/, "name", "Literal");
        if(PL$74/*nameProperty*/){
          this["common"]["name"] = PL$74/*nameProperty*/;
        };
        ;
      };
      ;
      this["common"]["extraModules"] = PL$71/*extraModules*/;
      if(PL$22/*checkPromising*/(PL$45/*par*/)){
        this["programPromiseStr"] = this["getUniqueName"]();
      };
      ;
      this["resultNameStr"] = this["getUniqueName"]();
      PL$75/*functionStatement*/ = this["_parseFunction"](PL$45/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
      PL$51/*name*/;
      for(PL$51/*name*/ in this["usedVariables"]){
        if((this["usedVariables"][PL$51/*name*/] === true)){
          if((PL$51/*name*/ == "Promise")){
            this["common"]["usePromise"] = true;
          };
          ;
          if((PL$51/*name*/ == "Callback")){
            this["common"]["useCallback"] = true;
          };
          ;
          if((PL$51/*name*/ == "Map")){
            this["common"]["useMap"] = true;
          };
          ;
          if(PL$71/*extraModules*/["get"](PL$51/*name*/)){
            continue;;
          };
          ;
          PL$55/*res*/["push"]((("var " + this["getVariableName"](PL$51/*name*/)) + ";"));
          PL$55/*res*/["push"]("try{");
          PL$55/*res*/["push"](this["getVariableName"](PL$51/*name*/));
          PL$55/*res*/["push"](" = ");
          PL$55/*res*/["push"](PL$51/*name*/);
          PL$55/*res*/["push"](";}catch(e){};\n");
        };
        ;};
      ;
      PL$55/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));
      PL$55/*res*/["push"](this["makeCompleteStatement"](PL$75/*functionStatement*/));
      PL$55/*res*/["push"](")();\n");
      return PL$55/*res*/;
      ;});
    PL$25/*parseFunctionModule*/(this, PL$45/*par*/);
    this["getTemplateProperty"] = (function(PL$76/*parTemplate*/, PL$77/*parProperty*/, PL$78/*mandatoryType*/){
    var PL$46/*i*/;
var PL$79/*p*/;

      ;
      PL$46/*i*/ = 0;
      for(PL$46/*i*/;(PL$46/*i*/ < PL$76/*parTemplate*/["properties"]["length"]);++PL$46/*i*/){{
        PL$79/*p*/ = PL$76/*parTemplate*/["properties"][PL$46/*i*/];
        if(((PL$79/*p*/["kind"] == "init") && (PL$17/*identifierName*/(PL$79/*p*/["key"]) == PL$77/*parProperty*/))){
          if(PL$78/*mandatoryType*/){
            if((PL$79/*p*/["value"]["type"] != PL$78/*mandatoryType*/)){
              this["error"](PL$79/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
            };
            ;
          };
          ;
          return PL$79/*p*/["value"];
        };
        ;}};
      ;
      ;});
    this["getTemplateRequireProperty"] = (function(PL$76/*parTemplate*/){
    var PL$46/*i*/;
var PL$55/*res*/;
var PL$79/*p*/;
var PL$80/*key*/;

      ;
      PL$46/*i*/ = 0;
      PL$55/*res*/ = new PL$43/*Map*/();
      for(PL$46/*i*/;(PL$46/*i*/ < PL$76/*parTemplate*/["properties"]["length"]);++PL$46/*i*/){{
        PL$79/*p*/ = PL$76/*parTemplate*/["properties"][PL$46/*i*/];
        if((PL$79/*p*/["kind"] == "init")){
          PL$80/*key*/ = PL$17/*identifierName*/(PL$79/*p*/["key"]);
          if((PL$79/*p*/["value"]["type"] != "Literal")){
            this["error"](PL$79/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
          };
          ;
          PL$55/*res*/["set"](PL$80/*key*/, PL$79/*p*/["value"]["value"]);
        };
        ;}};
      ;
      return PL$55/*res*/;
      ;});
    this["createExtraDynamicType"] = (function(PL$81/*parType*/, PL$45/*par*/, PL$82/*parParsed*/){
    var PL$51/*name*/;
var PL$62/*entry*/;
var PL$55/*res*/;
var PL$83/*newType*/;

      ;
      PL$51/*name*/;
      if(PL$45/*par*/["property"]){
        PL$51/*name*/ = ((this["getTypeName"](PL$81/*parType*/, PL$82/*parParsed*/) + "::property::") + PL$45/*par*/["property"]);
      }else{
      if(PL$45/*par*/["temporaryTracked"]){
        PL$51/*name*/ = (this["getTypeName"](PL$81/*parType*/, PL$82/*parParsed*/) + "::temporaryTracked");
      }else{
      if(PL$45/*par*/["temporaryTrackedResolved"]){
        PL$51/*name*/ = (this["getTypeName"](PL$81/*parType*/, PL$82/*parParsed*/) + "::temporaryTrackedResolved");
      }else{
      if(PL$45/*par*/["constructorReturn"]){
        PL$51/*name*/ = (this["getTypeName"](PL$81/*parType*/, PL$82/*parParsed*/) + "::constructorReturn");
      }else{
      this["error"](PL$12/*errorMsg*/["internalMissingTypeProperty"]);
      };
      };
      };
      };
      ;
      if(! PL$81/*parType*/["extraTypes"]){
        PL$81/*parType*/["extraTypes"] = [];
      };
      ;
      if(! PL$81/*parType*/["extraTypeMap"]){
        PL$81/*parType*/["extraTypeMap"] = new PL$43/*Map*/();
      };
      ;
      if(PL$81/*parType*/["extraTypeMap"]["has"](PL$51/*name*/)){
        return PL$81/*parType*/["extraTypeMap"]["get"](PL$51/*name*/);
      };
      ;
      PL$62/*entry*/ = {"res": this["newResult"]()};
      PL$81/*parType*/["extraTypes"]["push"](PL$62/*entry*/);
      PL$55/*res*/ = PL$62/*entry*/["res"];
      this["addType"]({"name": PL$51/*name*/,
"dynamic": true}, PL$82/*parParsed*/);
      PL$55/*res*/["push"]("var /*extratyperender*/ ");
      PL$55/*res*/["push"](this["renderType"](PL$51/*name*/));
      PL$55/*res*/["push"](" = ");
      this["common"]["useClassSystem"] = true;
      if(PL$45/*par*/["property"]){
        if((PL$45/*par*/["property"] == "constructor")){
          PL$55/*res*/["push"]("classSystem.getConstructorType({\"type\":");
        }else{
        PL$55/*res*/["push"]("classSystem.getPropertyType({\"type\":");
        };
        ;
        PL$55/*res*/["push"](this["renderType"](PL$81/*parType*/));
        PL$55/*res*/["push"]((", property: " + PL$14/*stringEncodeStr*/(PL$45/*par*/["property"])));
        PL$55/*res*/["push"]("});\n");
      }else{
      if(PL$45/*par*/["temporaryTracked"]){
        PL$55/*res*/["push"]("classSystem._createTemporaryTrackedClass(");
        PL$55/*res*/["push"](this["renderType"](PL$81/*parType*/));
        PL$55/*res*/["push"](");\n");
      }else{
      if(PL$45/*par*/["temporaryTrackedResolved"]){
        PL$55/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");
        PL$55/*res*/["push"](this["renderType"](PL$81/*parType*/));
        PL$55/*res*/["push"](");\n");
      }else{
      if(PL$45/*par*/["constructorReturn"]){
        PL$55/*res*/["push"]("classSystem.getConstructorReturnType(");
        PL$55/*res*/["push"](this["renderType"](PL$81/*parType*/));
        PL$55/*res*/["push"](");\n");
      };
      };
      };
      };
      ;
      PL$83/*newType*/ = this["getType"](PL$51/*name*/, PL$82/*parParsed*/);
      PL$62/*entry*/["type"] = PL$83/*newType*/;
      PL$81/*parType*/["extraTypeMap"]["set"](PL$51/*name*/, PL$83/*newType*/);
      return PL$83/*newType*/;
      ;});
    this["addBeforeReturn"] = (function(PL$84/*parRes*/, PL$85/*parCondition*/){
    var PL$86/*condition*/;
var PL$87/*conditional*/;
var PL$88/*frontRes*/;
var PL$89/*endRes*/;

      ;
      PL$86/*condition*/ = PL$85/*parCondition*/;
      if((PL$85/*parCondition*/ === undefined)){
        PL$86/*condition*/ = true;
      };
      ;
      PL$87/*conditional*/ = this["createConditionalCode"](PL$84/*parRes*/);
      PL$87/*conditional*/["addCondition"](PL$86/*condition*/);
      this["runBeforeReturnRes"]["push"](PL$87/*conditional*/["res"]);
      if(! this["beforeReturnExists"]){
        this["beforeReturnExists"] = true;
        PL$88/*frontRes*/ = this["newResult"]();
        PL$89/*endRes*/ = this["newResult"]();
        this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$88/*frontRes*/);
        this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$89/*endRes*/);
        this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);
        if(! this["promising"]){
          PL$88/*frontRes*/["push"]("try{");
          this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);
          PL$89/*endRes*/["push"]("}catch(e){");
          PL$89/*endRes*/["push"](this["runBeforeReturnRes"]);
          PL$89/*endRes*/["push"]("throw e};");
          this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);
        };
        ;
      };
      ;
      this["beforeReturnFrontConditional"]["addCondition"](PL$86/*condition*/);
      this["beforeReturnEndConditional"]["addCondition"](PL$86/*condition*/);
      this["addBeforeReturnCondition"](PL$86/*condition*/);
      ;});
    this["beforeReturnConditions"] = [];
    this["addBeforeReturnCondition"] = (function(PL$85/*parCondition*/){
    var PL$46/*i*/;

      ;
      this["beforeReturnConditions"]["push"](PL$85/*parCondition*/);
      PL$46/*i*/ = 0;
      for(PL$46/*i*/ = 0;(PL$46/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$46/*i*/){{
        this["beforeReturnConditionFuns"][PL$46/*i*/](PL$85/*parCondition*/);}};
      ;
      ;});
    this["beforeReturnConditionFuns"] = [];
    this["addBeforeReturnConditionFun"] = (function(PL$90/*parFun*/){
    var PL$46/*i*/;

      ;
      this["beforeReturnConditionFuns"]["push"](PL$90/*parFun*/);
      PL$46/*i*/ = 0;
      for(PL$46/*i*/ = 0;(PL$46/*i*/ < this["beforeReturnConditions"]["length"]);++PL$46/*i*/){{
        PL$90/*parFun*/(this["beforeReturnConditions"][PL$46/*i*/]);}};
      ;
      ;});
    this["getReturnCode"] = (function(PL$45/*par*/){
    var PL$50/*self*/;
var PL$55/*res*/;
var PL$91/*falseRes*/;
var PL$92/*beforeReturnCode*/;
var PL$93/*newRes*/;
var PL$94/*valueRes*/;
var PL$95/*trueRes*/;
var PL$87/*conditional*/;

      ;
      PL$50/*self*/ = this;
      PL$55/*res*/ = this["newResult"]();
      if(this["promising"]){
        PL$55/*res*/["push"]((this["returnPromise"] + ".resolve("));
        if(PL$45/*par*/["value"]){
          PL$55/*res*/["push"](PL$45/*par*/["value"]);
        };
        ;
        PL$55/*res*/["push"]("); return");
      }else{
      if((PL$45/*par*/["return"] || PL$45/*par*/["value"])){
        PL$55/*res*/["push"]("return");
      };
      ;
      if(PL$45/*par*/["value"]){
        PL$55/*res*/["push"](" ");
        PL$55/*res*/["push"](PL$45/*par*/["value"]);
      };
      ;
      if((PL$45/*par*/["return"] || PL$45/*par*/["value"])){
      };
      ;
      };
      ;
      PL$91/*falseRes*/ = PL$55/*res*/;
      PL$92/*beforeReturnCode*/ = this["runBeforeReturnRes"];
      PL$93/*newRes*/ = PL$50/*self*/["newResult"]();
      PL$94/*valueRes*/ = PL$50/*self*/["newResult"]();
      if(PL$45/*par*/["value"]){
        PL$94/*valueRes*/["push"]("(function(ret){ ");
        PL$94/*valueRes*/["push"](PL$92/*beforeReturnCode*/);
        PL$94/*valueRes*/["push"]("return ret; })(");
        PL$94/*valueRes*/["push"](PL$45/*par*/["value"]);
        PL$94/*valueRes*/["push"](")");
      };
      ;
      if(PL$50/*self*/["promising"]){
        if(PL$45/*par*/["value"]){
          PL$93/*newRes*/["push"]((PL$50/*self*/["returnPromise"] + ".resolve("));
          PL$93/*newRes*/["push"](PL$94/*valueRes*/);
          PL$93/*newRes*/["push"]("); return;");
        }else{
        PL$93/*newRes*/["push"](PL$92/*beforeReturnCode*/);
        PL$93/*newRes*/["push"]((PL$50/*self*/["returnPromise"] + ".resolve("));
        PL$93/*newRes*/["push"]("); return;");
        };
        ;
      }else{
      if(PL$45/*par*/["value"]){
        PL$93/*newRes*/["push"]("return ");
        PL$93/*newRes*/["push"](PL$94/*valueRes*/);
        PL$93/*newRes*/["push"](";");
      }else{
      PL$93/*newRes*/["push"](PL$92/*beforeReturnCode*/);
      if(PL$45/*par*/["return"]){
        PL$93/*newRes*/["push"]("return;");
      };
      ;
      };
      ;
      };
      ;
      PL$95/*trueRes*/ = PL$93/*newRes*/;
      PL$87/*conditional*/ = this["createConditionalCode"](PL$95/*trueRes*/, PL$91/*falseRes*/);
      this["addBeforeReturnConditionFun"]((function(PL$96/*con*/){
      
        ;
        PL$87/*conditional*/["addCondition"](PL$96/*con*/);
        ;}));
      return PL$87/*conditional*/["res"];
      ;});
    PL$31/*expressionsModule*/(this, PL$45/*par*/);
    this["getModuleHashStr"] = (function(){
    
      ;
      return (this["hashStr"] || "unknownhash");
      ;});
    this["makeStatement"] = (function(PL$45/*par*/){
    var PL$97/*statementRes*/;

      ;
      PL$97/*statementRes*/ = this["newResult"]();
      PL$97/*statementRes*/["setStatement"]();
      PL$97/*statementRes*/["push"](PL$45/*par*/);
      PL$97/*statementRes*/["push"](";");
      return PL$97/*statementRes*/;
      ;});
    this["newLine"] = (function(){
    var PL$55/*res*/;

      ;
      PL$55/*res*/ = this["newResult"]();
      PL$55/*res*/["_newLine"] = true;
      return PL$55/*res*/;
      ;});
    this["indent"] = (function(PL$84/*parRes*/){
    var PL$55/*res*/;

      ;
      PL$55/*res*/ = this["newResult"]();
      PL$55/*res*/["_indent"] = true;
      if(PL$84/*parRes*/){
        PL$55/*res*/["push"](PL$84/*parRes*/);
      };
      ;
      return PL$55/*res*/;
      ;});
    this["newInherited"] = (function(){
    
      ;
      return new PL$98/*InheritedSystem*/(this);
      ;});
    PL$98/*InheritedSystem*/ = (function(PL$45/*par*/){
    
      ;
      this["instance"] = PL$45/*par*/;
      this["used"] = {};
      ;});
    PL$98/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$45/*par*/){
    
      ;
      this["currentMember"] = PL$45/*par*/;
      ;}),
"getCurrent": (function(){
    
      ;
      if(! this["used"][this["currentMember"]]){
        this["used"][this["currentMember"]] = this["instance"]["getUniqueName"](("inherited " + this["currentMember"]));
      };
      ;
      return this["used"][this["currentMember"]];
      ;})};
    PL$33/*dynamicModule*/(this, PL$45/*par*/);
    this["createConditionalCode"] = (function(PL$99/*parTrueRes*/, PL$100/*parFalseRes*/){
    var PL$50/*self*/;
var PL$101/*isDecided*/;
var PL$102/*conditions*/;
var PL$55/*res*/;

      ;
      PL$50/*self*/ = this;
      PL$99/*parTrueRes*/ = (PL$99/*parTrueRes*/ || this["newResult"]());
      PL$100/*parFalseRes*/ = (PL$100/*parFalseRes*/ || this["newResult"]());
      PL$101/*isDecided*/ = false;
      PL$102/*conditions*/ = [];
      PL$55/*res*/ = this["newResult"]();
      PL$55/*res*/["replace"](PL$100/*parFalseRes*/);
      return {"res": PL$55/*res*/,
"addCondition": (function(PL$85/*parCondition*/){
      var PL$103/*ifRes*/;
var PL$46/*i*/;
var PL$104/*dynRes*/;

        ;
        if(PL$101/*isDecided*/){
          return;
        };
        ;
        if((PL$85/*parCondition*/ === true)){
          PL$101/*isDecided*/ = true;
          PL$55/*res*/["replace"](PL$99/*parTrueRes*/);
          return;
        };
        ;
        if((PL$85/*parCondition*/ === false)){
          return;
        };
        ;
        PL$102/*conditions*/["push"](PL$85/*parCondition*/);
        PL$103/*ifRes*/ = PL$50/*self*/["newResult"]();
        PL$103/*ifRes*/["push"]("((");
        PL$46/*i*/ = 0;
        for(PL$46/*i*/ = 0;(PL$46/*i*/ < PL$102/*conditions*/["length"]);++PL$46/*i*/){{
          if(PL$46/*i*/){
            PL$103/*ifRes*/["push"](" && ");
          };
          ;
          PL$103/*ifRes*/["push"](PL$102/*conditions*/[PL$46/*i*/]);}};
        ;
        PL$103/*ifRes*/["push"](") ? (");
        PL$103/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$99/*parTrueRes*/));
        PL$103/*ifRes*/["push"](") : (");
        PL$103/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$100/*parFalseRes*/));
        PL$103/*ifRes*/["push"]("))");
        PL$104/*dynRes*/ = PL$50/*self*/["newResult"]();
        PL$104/*dynRes*/["push"](PL$50/*self*/["makeCompleteStatement"](PL$103/*ifRes*/), undefined, {"dynamic": true});
        PL$55/*res*/["replace"](PL$104/*dynRes*/);
        ;})};
      ;});
    this["isCallableType"] = (function(){
    
      ;
      ;});
    this["getFunctionArgumentCount"] = (function(PL$81/*parType*/, PL$105/*parsed*/){
    
      ;
      return PL$40/*classSystem*/["getFunctionArgumentCount"](PL$81/*parType*/);
      ;});
    this["isVar"] = (function(PL$81/*parType*/){
    
      ;
      if((typeof PL$81/*parType*/ == "function")){
        return PL$40/*classSystem*/["isVar"](PL$81/*parType*/);
      };
      ;
      return false;
      ;});
    PL$35/*asmModule*/(this, PL$45/*par*/);
    this["_start"]();
    ;});
  PL$106/*promiselandRequireStr*/ = (function(){
  
    ;
    return "";
    ;});
  PL$107/*callbackRequireStr*/ = (function(){
  
    ;
    return "var Callback = promiseland.Callback;\n";
    ;});
  PL$108/*mapRequireStr*/ = (function(){
  
    ;
    return "var Map = promiseland.Map;\n";
    ;});
  PL$109/*loaderEndStr*/ = (function(PL$45/*par*/){
  
    ;
    if(PL$45/*par*/["promiseLandModule"]){
      return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";
    }else{
    return "});\n})();";
    };
    ;
    ;});
  PL$110/*createHeader*/ = (function(PL$45/*par*/){
  var PL$111/*resStr*/;
var PL$112/*loaderParam*/;

    ;
    if(PL$37/*_pureCode*/){
      return "";
    };
    ;
    PL$111/*resStr*/ = "";
    PL$112/*loaderParam*/ = {"usePromise": PL$45/*par*/["usePromise"],
"useRequire": PL$45/*par*/["useRequire"],
"useClassSystem": PL$45/*par*/["useClassSystem"],
"extraModules": PL$45/*par*/["extraModules"],
"variableNames": PL$45/*par*/["variableNames"],
"hashStr": PL$45/*par*/["hashStr"]};
    if(PL$45/*par*/["makePromiseLandModule"]){
      PL$112/*loaderParam*/["promiseLandModule"] = true;
    };
    ;
    PL$111/*resStr*/ += PL$23/*loaderStr*/(PL$112/*loaderParam*/);
    PL$111/*resStr*/ += PL$106/*promiselandRequireStr*/();
    if(PL$45/*par*/["useCallback"]){
      PL$111/*resStr*/ += PL$107/*callbackRequireStr*/();
    };
    ;
    if(PL$45/*par*/["useMap"]){
      PL$111/*resStr*/ += PL$108/*mapRequireStr*/();
    };
    ;
    PL$111/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$45/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$45/*par*/["hashStr"]) + "\"); };\n");
    return PL$111/*resStr*/;
    ;});
  PL$113/*createFooter*/ = (function(PL$45/*par*/){
  var PL$111/*resStr*/;

    ;
    if(PL$37/*_pureCode*/){
      return "";
    };
    ;
    PL$111/*resStr*/ = "";
    if(PL$45/*par*/["makePromiseLandModule"]){
      PL$111/*resStr*/ += PL$109/*loaderEndStr*/({"promiseLandModule": true});
    }else{
    PL$111/*resStr*/ += PL$109/*loaderEndStr*/({});
    };
    ;
    return PL$111/*resStr*/;
    ;});
  PL$114/*parser*/ = {"parse": (function(PL$115/*promiselandCodeStr*/){
  var PL$79/*p*/;
var PL$114/*parser*/;
var PL$116/*hashStr*/;
var PL$105/*parsed*/;
var PL$111/*resStr*/;
var PL$117/*cp*/;
var PL$55/*res*/;
var PL$72/*parsingConfig*/;
var PL$118/*makePromiseLandModule*/;
var PL$71/*extraModules*/;
var PL$119/*variableNames*/;
var PL$120/*result*/;
var PL$121/*programStr*/;
var PL$122/*mainPartStr*/;

    ;
    PL$79/*p*/ = new PL$39/*promiseland*/["Promise"]();
    PL$114/*parser*/ = PL$7/*_parser*/;
    PL$116/*hashStr*/ = PL$5/*md5*/(PL$115/*promiselandCodeStr*/);
    PL$105/*parsed*/ = PL$114/*parser*/["parse"](PL$115/*promiselandCodeStr*/);
    PL$111/*resStr*/ = "";
    PL$117/*cp*/;
    PL$55/*res*/ = {};
    if((PL$105/*parsed*/["length"] === undefined)){
      if((PL$105/*parsed*/["type"] == "Program")){
        PL$72/*parsingConfig*/ = PL$105/*parsed*/["config"];
        PL$117/*cp*/ = new PL$49/*CodeParser*/({"toParse": PL$105/*parsed*/,
"hashStr": PL$116/*hashStr*/,
"parsingConfig": PL$72/*parsingConfig*/});
        PL$118/*makePromiseLandModule*/ = false;
        PL$71/*extraModules*/ = PL$117/*cp*/["common"]["extraModules"];
        PL$119/*variableNames*/ = PL$117/*cp*/["common"]["variableNames"];
        if(PL$72/*parsingConfig*/){
          PL$118/*makePromiseLandModule*/ = PL$117/*cp*/["getTemplateProperty"](PL$72/*parsingConfig*/, "__promiseLandModule", "Literal");
          if((PL$118/*makePromiseLandModule*/ && (PL$118/*makePromiseLandModule*/["value"] === true))){
            PL$118/*makePromiseLandModule*/ = true;
          }else{
          PL$118/*makePromiseLandModule*/ = false;
          };
          ;
        };
        ;
        PL$120/*result*/ = PL$117/*cp*/["getResult"]();
        PL$121/*programStr*/ = PL$120/*result*/["getProgramCodeStr"]();
        PL$55/*res*/["warnings"] = PL$117/*cp*/["getWarnings"]();
        PL$55/*res*/["errors"] = PL$117/*cp*/["getErrors"]();
        PL$122/*mainPartStr*/ = "";
        if(PL$37/*_pureCode*/){
          PL$111/*resStr*/ = PL$121/*programStr*/;
        }else{
        if(PL$117/*cp*/["programPromiseStr"]){
          PL$122/*mainPartStr*/ += (((("var " + PL$117/*cp*/["programPromiseStr"]) + " = ") + PL$117/*cp*/["newPromiseStr"]()) + ";\n");
          PL$122/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$116/*hashStr*/) + "\", \"module\": ") + PL$117/*cp*/["programPromiseStr"]) + ", promising: true });\n");
          PL$122/*mainPartStr*/ += PL$121/*programStr*/;
          PL$122/*mainPartStr*/ += (";\nreturn " + PL$117/*cp*/["programPromiseStr"]);
        }else{
        PL$122/*mainPartStr*/ += PL$121/*programStr*/;
        PL$122/*mainPartStr*/ += (("return " + PL$117/*cp*/["resultNameStr"]) + ";\n");
        };
        ;
        PL$111/*resStr*/ += PL$110/*createHeader*/({"makePromiseLandModule": PL$118/*makePromiseLandModule*/,
"extraModules": PL$71/*extraModules*/,
"variableNames": PL$119/*variableNames*/,
"hashStr": PL$116/*hashStr*/,
"usePromise": PL$117/*cp*/["common"]["usePromise"],
"useRequire": PL$117/*cp*/["common"]["useRequire"],
"useCallback": PL$117/*cp*/["common"]["useCallback"],
"useMap": PL$117/*cp*/["common"]["useMap"],
"useClassSystem": PL$117/*cp*/["common"]["useClassSystem"]});
        PL$111/*resStr*/ += PL$122/*mainPartStr*/;
        PL$111/*resStr*/ += PL$113/*createFooter*/({"makePromiseLandModule": PL$118/*makePromiseLandModule*/});
        };
        ;
      }else{
      this["error"](PL$105/*parsed*/, PL$12/*errorMsg*/["unknownType"]);
      };
      ;
    }else{
    PL$11/*errorFun*/(PL$105/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);
    };
    ;
    if(! (PL$55/*res*/["errors"] && PL$55/*res*/["errors"]["length"])){
      PL$55/*res*/["javascript"] = PL$111/*resStr*/;
    };
    ;
    PL$79/*p*/["resolve"](PL$55/*res*/);
    return PL$79/*p*/["promise"];
    ;})};
  PL$1.resolve(PL$114/*parser*/); return;
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
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();