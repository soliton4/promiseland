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
    if (promiseland._hasModule({ hashStr: "fbeca49840b5dbfffc8f2d96bf52f7ae" })){ return promiseland._getModule("fbeca49840b5dbfffc8f2d96bf52f7ae"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "fbeca49840b5dbfffc8f2d96bf52f7ae", "module": PL$1, promising: true });
var PL$39/*promiseland*/;try{PL$39/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
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
var PL$96/*promiselandRequireStr*/;
var PL$97/*callbackRequireStr*/;
var PL$98/*mapRequireStr*/;
var PL$99/*loaderEndStr*/;
var PL$100/*createHeader*/;
var PL$103/*createFooter*/;
var PL$104/*parser*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./md5").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*md5*/ = PL$6;
  __requireFun("./_parser").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*_parser*/ = PL$8;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*basics*/ = PL$10;
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
  __requireFun("./loader").then(PL$3/*promiseland exception catcher*/(function(PL$24){PL$23/*loaderStr*/ = PL$24;
  __requireFun("./parseFunction").then(PL$3/*promiseland exception catcher*/(function(PL$26){PL$25/*parseFunctionModule*/ = PL$26;
  __requireFun("./variables").then(PL$3/*promiseland exception catcher*/(function(PL$28){PL$27/*variablesModule*/ = PL$28;
  __requireFun("./types").then(PL$3/*promiseland exception catcher*/(function(PL$30){PL$29/*typesModule*/ = PL$30;
  __requireFun("./expressions").then(PL$3/*promiseland exception catcher*/(function(PL$32){PL$31/*expressionsModule*/ = PL$32;
  __requireFun("./dynamic").then(PL$3/*promiseland exception catcher*/(function(PL$34){PL$33/*dynamicModule*/ = PL$34;
  __requireFun("./asm").then(PL$3/*promiseland exception catcher*/(function(PL$36){PL$35/*asmModule*/ = PL$36;
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
    var PL$46/*i*/;
    ;
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
  __requireFun("./Result").then(PL$3/*promiseland exception catcher*/(function(PL$48){PL$47/*_Result*/ = PL$48;
  PL$49/*CodeParser*/ = (function(PL$45/*par*/){
  var PL$46/*i*/;
  
    ;
    var PL$50/*self*/ = this;
    ;
    this["toParse"] = PL$45/*par*/["toParse"];
    this["dynamicCode"] = PL$45/*par*/["dynamicCode"];
    this["hashStr"] = PL$45/*par*/["hashStr"];
    this["asmMode"] = (PL$45/*par*/["asmMode"] || false);
    if(PL$45/*par*/["_locals"]){
      for(PL$46/*i*/ in PL$45/*par*/["_locals"]){
        this[PL$46/*i*/] = PL$45/*par*/["_locals"][PL$46/*i*/];};
      ;
    };
    ;
    if(PL$45/*par*/["common"]){
      this["common"] = PL$45/*par*/["common"];
    }else{
    this["common"] = {
      "givenTypeNames": {
        
      },
      "errors": [
        
      ],
      "uniquebasis": (PL$45/*par*/["uniquebasis"] || {
        "index": 1
      }),
      "parsingConfig": PL$45/*par*/["parsingConfig"]
    };
    this["common"]["variableNames"] = new PL$15/*VariableNames*/({
      "getUniqueName": (function(PL$51/*name*/){
      
        ;
        return PL$50/*self*/["getUniqueName"](PL$51/*name*/);
        ;})
    });
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
    
      ;
      var PL$53/*stackNameStr*/ = ("_stack_" + PL$52/*parStr*/);
      ;
      if(! this[PL$53/*stackNameStr*/]){
        this[PL$53/*stackNameStr*/] = [
          
        ];
      };
      ;
      this[PL$53/*stackNameStr*/]["push"](this[PL$52/*parStr*/]);
      ;});
    this["unstack"] = (function(PL$52/*parStr*/){
    
      ;
      var PL$53/*stackNameStr*/ = ("_stack_" + PL$52/*parStr*/);
      ;
      this[PL$52/*parStr*/] = this[PL$53/*stackNameStr*/]["pop"]();
      ;});
    this["_start"] = (function(){
    
      ;
      if(this["toParse"]){
        if((this["toParse"]["type"] == "Program")){
          var PL$54/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
          ;
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
    
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      PL$55/*res*/["setComplete"]();
      PL$55/*res*/["push"](PL$45/*par*/);
      return PL$55/*res*/;
      ;});
    PL$27/*variablesModule*/(this, PL$45/*par*/);
    this["_getErrors"] = (function(PL$56/*parWarning*/){
    
      ;
      var PL$57/*a*/ = [
        
      ];
      ;
      var PL$46/*i*/ = 0;
      ;
      for(PL$46/*i*/ = 0;(PL$46/*i*/ < this["errors"]["length"]);++PL$46/*i*/){{
        if(this["errors"][PL$46/*i*/]["valid"]){
          if(this["errors"][PL$46/*i*/]["dbgFun"]){
            try
            {
              this["errors"][PL$46/*i*/]["dbgFun"]();}catch(__dummy){};
            ;
          };
          ;
          if((PL$56/*parWarning*/ ? this["errors"][PL$46/*i*/]["warning"] : ! this["errors"][PL$46/*i*/]["warning"])){
            PL$57/*a*/["push"](this["errors"][PL$46/*i*/]);
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
    this["getWarningFun"] = (function(PL$45/*par*/){
    
      ;
      var PL$50/*self*/ = this;
      ;
      return (function(PL$58/*err*/){
      
        ;
        PL$50/*self*/["warning"](PL$45/*par*/, PL$58/*err*/);
        ;});
      ;});
    this["warning"] = (function(PL$45/*par*/, PL$58/*err*/){
    
      ;
      if(! PL$45/*par*/["line"]){
        PL$11/*errorFun*/({
          
        }, PL$12/*errorMsg*/["internalParserInfoMissing"]);
      };
      ;
      this["addWarning"](PL$45/*par*/, PL$58/*err*/);
      ;});
    this["error"] = (function(PL$45/*par*/, PL$58/*err*/){
    
      ;
      this["_addError"](PL$45/*par*/, PL$58/*err*/);
      PL$11/*errorFun*/(PL$45/*par*/, PL$58/*err*/);
      ;});
    this["addError"] = (function(PL$45/*par*/, PL$58/*err*/, PL$59/*dbgFun*/){
    
      ;
      return this["_addError"](PL$45/*par*/, PL$58/*err*/, false, PL$59/*dbgFun*/);
      ;});
    this["addWarning"] = (function(PL$45/*par*/, PL$58/*err*/){
    
      ;
      return this["_addError"](PL$45/*par*/, PL$58/*err*/, true);
      ;});
    this["_addError"] = (function(PL$45/*par*/, PL$58/*err*/, PL$60/*warning*/, PL$59/*dbgFun*/){
    
      ;
      var PL$61/*entry*/ = {
        "par": PL$45/*par*/,
        "line": PL$45/*par*/["line"],
        "column": PL$45/*par*/["column"],
        "msg": ((PL$58/*err*/["id"] + ": ") + PL$58/*err*/["msg"]),
        "valid": true,
        "warning": PL$60/*warning*/,
        "dbgFun": PL$59/*dbgFun*/
      };
      ;
      this["errors"]["push"](PL$61/*entry*/);
      var PL$62/*ps*/ = new PL$38/*Promise*/();
      ;
      PL$62/*ps*/["then"]((function(){
      
        ;
        PL$61/*entry*/["valid"] = false;
        ;}));
      return PL$62/*ps*/;
      ;});
    this["runtimeError"] = (function(PL$45/*par*/, PL$63/*par2*/){
    
      ;
      var PL$62/*ps*/ = this["addWarning"](PL$45/*par*/, PL$63/*par2*/);
      ;
      var PL$55/*res*/ = this["runtimeErrorNoWarning"](PL$63/*par2*/);
      ;
      PL$55/*res*/["setPromise"](PL$62/*ps*/);
      return PL$55/*res*/;
      ;});
    this["runtimeErrorNoWarning"] = (function(PL$63/*par2*/){
    
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      PL$55/*res*/["push"]((((("(function(){ throw { id:" + PL$63/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$63/*par2*/["msg"])) + " } })()"));
      return PL$55/*res*/;
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
    this["parseProgram"] = (function(PL$45/*par*/){
    
      ;
      PL$44/*findPromises*/(PL$45/*par*/);
      var PL$55/*res*/ = this["newResult"]();
      ;
      var PL$64/*extraRes*/ = this["newResult"]();
      ;
      PL$64/*extraRes*/["push"]("\"use strict\";");
      PL$64/*extraRes*/["push"](this["newLine"]());
      PL$20/*addExtraToPar*/(PL$45/*par*/, "addFront", PL$64/*extraRes*/);
      var PL$65/*extraModules*/ = new PL$43/*Map*/();
      ;
      var PL$66/*parsingConfig*/ = this["common"]["parsingConfig"];
      ;
      if(PL$66/*parsingConfig*/){
        var PL$67/*reqireProperty*/ = this["getTemplateProperty"](PL$66/*parsingConfig*/, "require", "ObjectExpression");
        ;
        if(PL$67/*reqireProperty*/){
          PL$65/*extraModules*/ = this["getTemplateRequireProperty"](PL$67/*reqireProperty*/);
        };
        ;
        var PL$68/*nameProperty*/ = this["getTemplateProperty"](PL$66/*parsingConfig*/, "name", "Literal");
        ;
        if(PL$68/*nameProperty*/){
          this["common"]["name"] = PL$68/*nameProperty*/;
        };
        ;
      };
      ;
      this["common"]["extraModules"] = PL$65/*extraModules*/;
      if(PL$22/*checkPromising*/(PL$45/*par*/)){
        this["programPromiseStr"] = this["getUniqueName"]();
      };
      ;
      this["resultNameStr"] = this["getUniqueName"]();
      var PL$69/*functionStatement*/ = this["_parseFunction"](PL$45/*par*/, {
        "promiseName": this["programPromiseStr"],
        "noUntrack": true
      });
      ;
      var PL$51/*name*/;
      ;
      this["usedVariablesMap"]["forEach"]((function(PL$70/*value*/, PL$51/*name*/){
      
        ;
        if((PL$70/*value*/ === true)){
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
          if(PL$65/*extraModules*/["get"](PL$51/*name*/)){
            return;
          };
          ;
          PL$55/*res*/["push"]((("var " + this["getVariableName"](PL$51/*name*/)) + ";"));
          PL$55/*res*/["push"]("try{");
          PL$55/*res*/["push"](this["getVariableName"](PL$51/*name*/));
          PL$55/*res*/["push"](" = ");
          PL$55/*res*/["push"](PL$51/*name*/);
          PL$55/*res*/["push"](";}catch(e){};");
          PL$55/*res*/["push"](this["newLine"]());
        };
        ;
        ;}), this);
      PL$55/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));
      PL$55/*res*/["push"](this["makeCompleteStatement"](PL$69/*functionStatement*/));
      PL$55/*res*/["push"](")();");
      PL$55/*res*/["push"](this["newLine"]());
      return PL$55/*res*/;
      ;});
    PL$25/*parseFunctionModule*/(this, PL$45/*par*/);
    this["getTemplateProperty"] = (function(PL$71/*parTemplate*/, PL$72/*parProperty*/, PL$73/*mandatoryType*/){
    
      ;
      var PL$46/*i*/ = 0;
      ;
      for(PL$46/*i*/;(PL$46/*i*/ < PL$71/*parTemplate*/["properties"]["length"]);++PL$46/*i*/){{
        var PL$74/*p*/ = PL$71/*parTemplate*/["properties"][PL$46/*i*/];
        ;
        if(((PL$74/*p*/["kind"] == "init") && (PL$17/*identifierName*/(PL$74/*p*/["key"]) == PL$72/*parProperty*/))){
          if(PL$73/*mandatoryType*/){
            if((PL$74/*p*/["value"]["type"] != PL$73/*mandatoryType*/)){
              this["error"](PL$74/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
            };
            ;
          };
          ;
          return PL$74/*p*/["value"];
        };
        ;}};
      ;
      ;});
    this["getTemplateRequireProperty"] = (function(PL$71/*parTemplate*/){
    
      ;
      var PL$46/*i*/ = 0;
      ;
      var PL$55/*res*/ = new PL$43/*Map*/();
      ;
      for(PL$46/*i*/;(PL$46/*i*/ < PL$71/*parTemplate*/["properties"]["length"]);++PL$46/*i*/){{
        var PL$74/*p*/ = PL$71/*parTemplate*/["properties"][PL$46/*i*/];
        ;
        if((PL$74/*p*/["kind"] == "init")){
          var PL$75/*key*/ = PL$17/*identifierName*/(PL$74/*p*/["key"]);
          ;
          if((PL$74/*p*/["value"]["type"] != "Literal")){
            this["error"](PL$74/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);
          };
          ;
          PL$55/*res*/["set"](PL$75/*key*/, PL$74/*p*/["value"]["value"]);
        };
        ;}};
      ;
      return PL$55/*res*/;
      ;});
    PL$31/*expressionsModule*/(this, PL$45/*par*/);
    PL$33/*dynamicModule*/(this, PL$45/*par*/);
    this["getModuleHashStr"] = (function(){
    
      ;
      return (this["hashStr"] || "unknownhash");
      ;});
    this["makeStatement"] = (function(PL$45/*par*/){
    
      ;
      var PL$76/*statementRes*/ = this["newResult"]();
      ;
      PL$76/*statementRes*/["setStatement"]();
      PL$76/*statementRes*/["push"](PL$45/*par*/);
      PL$76/*statementRes*/["push"](";");
      return PL$76/*statementRes*/;
      ;});
    this["newLine"] = (function(){
    
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      PL$55/*res*/["_newLine"] = true;
      return PL$55/*res*/;
      ;});
    this["indent"] = (function(PL$77/*parRes*/){
    
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      PL$55/*res*/["_indent"] = true;
      if(PL$77/*parRes*/){
        PL$55/*res*/["push"](PL$77/*parRes*/);
      };
      ;
      return PL$55/*res*/;
      ;});
    this["indentNewLine"] = (function(PL$77/*parRes*/){
    
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      var PL$78/*indentRes*/ = this["newResult"]();
      ;
      PL$78/*indentRes*/["push"](this["newLine"]());
      PL$78/*indentRes*/["push"](PL$77/*parRes*/);
      PL$55/*res*/["push"](this["indent"](PL$78/*indentRes*/));
      PL$55/*res*/["push"](this["newLine"]());
      return PL$55/*res*/;
      ;});
    this["getIndentPair"] = (function(){
    
      ;
      var PL$79/*start*/ = this["newResult"]();
      ;
      var PL$80/*end*/ = this["newResult"]();
      ;
      PL$79/*start*/["_indentPair"] = true;
      PL$79/*start*/["_isIndentStart"] = true;
      PL$79/*start*/["_end"] = PL$80/*end*/;
      PL$80/*end*/["_indentPair"] = true;
      PL$80/*end*/["isIndentEnd"] = true;
      PL$80/*end*/["_start"] = PL$79/*start*/;
      return {
        "start": PL$79/*start*/,
        "end": PL$80/*end*/
      };
      ;});
    this["newResult"] = (function(PL$45/*par*/){
    
      ;
      var PL$81/*r*/ = new PL$47/*_Result*/({
        "cp": this
      });
      ;
      if(PL$45/*par*/){
        PL$81/*r*/["push"](PL$45/*par*/);
      };
      ;
      return PL$81/*r*/;
      ;});
    this["getUniqueName"] = (function(PL$51/*name*/){
    
      ;
      var PL$82/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
      ;
      if(PL$51/*name*/){
        PL$82/*retStr*/ += (("/*" + PL$51/*name*/) + "*/");
      };
      ;
      return PL$82/*retStr*/;
      ;});
    this["newInstance"] = (function(PL$83/*element*/, PL$84/*extras*/){
    
      ;
      var PL$85/*param*/ = {
        "toParse": PL$83/*element*/,
        "common": this["common"],
        "hashStr": this["hashStr"],
        "types": this["types"],
        "variables": this["variables"],
        "_locals": {
          "inheritedSystem": this["inheritedSystem"],
          "isClassObject": this["isClassObject"]
        }
      };
      ;
      if(PL$84/*extras*/){
        var PL$46/*i*/;
        ;
        for(PL$46/*i*/ in PL$84/*extras*/){
          PL$85/*param*/[PL$46/*i*/] = PL$84/*extras*/[PL$46/*i*/];};
        ;
      };
      ;
      var PL$86/*instance*/ = new PL$49/*CodeParser*/(PL$85/*param*/);
      ;
      return PL$86/*instance*/;
      ;});
    this["createConditionalCode"] = (function(PL$87/*parTrueRes*/, PL$88/*parFalseRes*/){
    
      ;
      var PL$50/*self*/ = this;
      ;
      PL$87/*parTrueRes*/ = (PL$87/*parTrueRes*/ || this["newResult"]());
      PL$88/*parFalseRes*/ = (PL$88/*parFalseRes*/ || this["newResult"]());
      var PL$89/*isDecided*/ = false;
      ;
      var PL$90/*conditions*/ = [
        
      ];
      ;
      var PL$55/*res*/ = this["newResult"]();
      ;
      PL$55/*res*/["replace"](PL$88/*parFalseRes*/);
      return {
        "res": PL$55/*res*/,
        "addCondition": (function(PL$91/*parCondition*/){
        
          ;
          if(PL$89/*isDecided*/){
            return;
          };
          ;
          if((PL$91/*parCondition*/ === true)){
            PL$89/*isDecided*/ = true;
            PL$55/*res*/["replace"](PL$87/*parTrueRes*/);
            return;
          };
          ;
          if((PL$91/*parCondition*/ === false)){
            return;
          };
          ;
          PL$90/*conditions*/["push"](PL$91/*parCondition*/);
          var PL$92/*ifRes*/ = PL$50/*self*/["newResult"]();
          ;
          PL$92/*ifRes*/["push"]("((");
          var PL$46/*i*/ = 0;
          ;
          for(PL$46/*i*/ = 0;(PL$46/*i*/ < PL$90/*conditions*/["length"]);++PL$46/*i*/){{
            if(PL$46/*i*/){
              PL$92/*ifRes*/["push"](" && ");
            };
            ;
            PL$92/*ifRes*/["push"](PL$90/*conditions*/[PL$46/*i*/]);}};
          ;
          PL$92/*ifRes*/["push"](") ? (");
          PL$92/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$87/*parTrueRes*/));
          PL$92/*ifRes*/["push"](") : (");
          PL$92/*ifRes*/["push"](PL$50/*self*/["makeCompleteStatementDynamic"](PL$88/*parFalseRes*/));
          PL$92/*ifRes*/["push"]("))");
          var PL$93/*dynRes*/ = PL$50/*self*/["newResult"]();
          ;
          PL$93/*dynRes*/["push"](PL$50/*self*/["makeCompleteStatement"](PL$92/*ifRes*/), undefined, {
            "dynamic": true
          });
          PL$55/*res*/["replace"](PL$93/*dynRes*/);
          ;})
      };
      ;});
    this["isCallableType"] = (function(){
    
      ;
      ;});
    this["getFunctionArgumentCount"] = (function(PL$94/*parType*/, PL$95/*parsed*/){
    
      ;
      return PL$40/*classSystem*/["getFunctionArgumentCount"](PL$94/*parType*/);
      ;});
    PL$35/*asmModule*/(this, PL$45/*par*/);
    this["_start"]();
    ;});
  PL$96/*promiselandRequireStr*/ = (function(){
  
    ;
    return "";
    ;});
  PL$97/*callbackRequireStr*/ = (function(){
  
    ;
    return "var Callback = promiseland.Callback;\n";
    ;});
  PL$98/*mapRequireStr*/ = (function(){
  
    ;
    return "var Map = promiseland.Map;\n";
    ;});
  PL$99/*loaderEndStr*/ = (function(PL$45/*par*/){
  
    ;
    if(PL$45/*par*/["promiseLandModule"]){
      return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";
    }else{
    return "});\n})();";
    };
    ;
    ;});
  PL$100/*createHeader*/ = (function(PL$45/*par*/){
  
    ;
    if(PL$37/*_pureCode*/){
      return "";
    };
    ;
    var PL$101/*resStr*/ = "";
    ;
    var PL$102/*loaderParam*/ = {
      "usePromise": PL$45/*par*/["usePromise"],
      "useRequire": PL$45/*par*/["useRequire"],
      "useClassSystem": PL$45/*par*/["useClassSystem"],
      "extraModules": PL$45/*par*/["extraModules"],
      "variableNames": PL$45/*par*/["variableNames"],
      "hashStr": PL$45/*par*/["hashStr"]
    };
    ;
    if(PL$45/*par*/["makePromiseLandModule"]){
      PL$102/*loaderParam*/["promiseLandModule"] = true;
    };
    ;
    PL$101/*resStr*/ += PL$23/*loaderStr*/(PL$102/*loaderParam*/);
    PL$101/*resStr*/ += PL$96/*promiselandRequireStr*/();
    if(PL$45/*par*/["useCallback"]){
      PL$101/*resStr*/ += PL$97/*callbackRequireStr*/();
    };
    ;
    if(PL$45/*par*/["useMap"]){
      PL$101/*resStr*/ += PL$98/*mapRequireStr*/();
    };
    ;
    PL$101/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$45/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$45/*par*/["hashStr"]) + "\"); };\n");
    return PL$101/*resStr*/;
    ;});
  PL$103/*createFooter*/ = (function(PL$45/*par*/){
  
    ;
    if(PL$37/*_pureCode*/){
      return "";
    };
    ;
    var PL$101/*resStr*/ = "";
    ;
    if(PL$45/*par*/["makePromiseLandModule"]){
      PL$101/*resStr*/ += PL$99/*loaderEndStr*/({
        "promiseLandModule": true
      });
    }else{
    PL$101/*resStr*/ += PL$99/*loaderEndStr*/({
      
    });
    };
    ;
    return PL$101/*resStr*/;
    ;});
  PL$104/*parser*/ = {
    "parse": (function(PL$105/*promiselandCodeStr*/){
    
      ;
      var PL$74/*p*/ = new PL$39/*promiseland*/["Promise"]();
      ;
      var PL$104/*parser*/ = PL$7/*_parser*/;
      ;
      var PL$106/*hashStr*/ = PL$5/*md5*/(PL$105/*promiselandCodeStr*/);
      ;
      var PL$95/*parsed*/ = PL$104/*parser*/["parse"](PL$105/*promiselandCodeStr*/);
      ;
      var PL$101/*resStr*/ = "";
      ;
      var PL$107/*cp*/;
      ;
      var PL$55/*res*/ = {
        
      };
      ;
      if((PL$95/*parsed*/["length"] === undefined)){
        if((PL$95/*parsed*/["type"] == "Program")){
          var PL$66/*parsingConfig*/ = PL$95/*parsed*/["config"];
          ;
          PL$107/*cp*/ = new PL$49/*CodeParser*/({
            "toParse": PL$95/*parsed*/,
            "hashStr": PL$106/*hashStr*/,
            "parsingConfig": PL$66/*parsingConfig*/
          });
          var PL$108/*makePromiseLandModule*/ = false;
          ;
          var PL$65/*extraModules*/ = PL$107/*cp*/["common"]["extraModules"];
          ;
          var PL$109/*variableNames*/ = PL$107/*cp*/["common"]["variableNames"];
          ;
          if(PL$66/*parsingConfig*/){
            PL$108/*makePromiseLandModule*/ = PL$107/*cp*/["getTemplateProperty"](PL$66/*parsingConfig*/, "__promiseLandModule", "Literal");
            if((PL$108/*makePromiseLandModule*/ && (PL$108/*makePromiseLandModule*/["value"] === true))){
              PL$108/*makePromiseLandModule*/ = true;
            }else{
            PL$108/*makePromiseLandModule*/ = false;
            };
            ;
          };
          ;
          var PL$110/*result*/ = PL$107/*cp*/["getResult"]();
          ;
          var PL$111/*programStr*/ = PL$110/*result*/["getProgramCodeStr"]();
          ;
          PL$55/*res*/["warnings"] = PL$107/*cp*/["getWarnings"]();
          PL$55/*res*/["errors"] = PL$107/*cp*/["getErrors"]();
          var PL$112/*mainPartStr*/ = "";
          ;
          if(PL$37/*_pureCode*/){
            PL$101/*resStr*/ = PL$111/*programStr*/;
          }else{
          if(PL$107/*cp*/["programPromiseStr"]){
            PL$112/*mainPartStr*/ += (((("var " + PL$107/*cp*/["programPromiseStr"]) + " = ") + PL$107/*cp*/["newPromiseStr"]()) + ";\n");
            PL$112/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$106/*hashStr*/) + "\", \"module\": ") + PL$107/*cp*/["programPromiseStr"]) + ", promising: true });\n");
            PL$112/*mainPartStr*/ += PL$111/*programStr*/;
            PL$112/*mainPartStr*/ += (";\nreturn " + PL$107/*cp*/["programPromiseStr"]);
          }else{
          PL$112/*mainPartStr*/ += PL$111/*programStr*/;
          PL$112/*mainPartStr*/ += (("return " + PL$107/*cp*/["resultNameStr"]) + ";\n");
          };
          ;
          PL$101/*resStr*/ += PL$100/*createHeader*/({
            "makePromiseLandModule": PL$108/*makePromiseLandModule*/,
            "extraModules": PL$65/*extraModules*/,
            "variableNames": PL$109/*variableNames*/,
            "hashStr": PL$106/*hashStr*/,
            "usePromise": PL$107/*cp*/["common"]["usePromise"],
            "useRequire": PL$107/*cp*/["common"]["useRequire"],
            "useCallback": PL$107/*cp*/["common"]["useCallback"],
            "useMap": PL$107/*cp*/["common"]["useMap"],
            "useClassSystem": PL$107/*cp*/["common"]["useClassSystem"]
          });
          PL$101/*resStr*/ += PL$112/*mainPartStr*/;
          PL$101/*resStr*/ += PL$103/*createFooter*/({
            "makePromiseLandModule": PL$108/*makePromiseLandModule*/
          });
          };
          ;
        }else{
        this["error"](PL$95/*parsed*/, PL$12/*errorMsg*/["unknownType"]);
        };
        ;
      }else{
      PL$11/*errorFun*/(PL$95/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);
      };
      ;
      if(! (PL$55/*res*/["errors"] && PL$55/*res*/["errors"]["length"])){
        PL$55/*res*/["javascript"] = PL$101/*resStr*/;
      };
      ;
      PL$74/*p*/["resolve"](PL$55/*res*/);
      return PL$74/*p*/["promise"];
      ;})
  };
  PL$1.resolve(PL$104/*parser*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();