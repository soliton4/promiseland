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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "4cbac495e7e71599f5cf1d53eacf8c67" })){ return promiseland._getModule("4cbac495e7e71599f5cf1d53eacf8c67"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  return (function(PL$4/*classSystem*/, PL$5/*internals*/){
  var PL$17/*assembleCode*/;

    ;
    var PL$6/*cs*/ = PL$4/*classSystem*/;
    var PL$7/*classHider*/ = PL$5/*internals*/["classHider"];
    var PL$8/*getClass*/ = PL$5/*internals*/["getClass"];
    var PL$9/*TrackedPromise*/ = PL$5/*internals*/["TrackedPromise"];
    var PL$10/*DynInstance*/ = PL$5/*internals*/["DynInstance"];
    var PL$11/*stringEncodeStr*/ = PL$5/*internals*/["stringEncodeStr"];
    var PL$12/*makro*/ = PL$5/*internals*/["makro"];
    var PL$13/*runtimeError*/ = (function(PL$14/*par*/, PL$15/*par2*/){
    
      ;
      if((PL$15/*par2*/ && PL$15/*par2*/["errorFun"])){
        PL$15/*par2*/["errorFun"](PL$14/*par*/);
      };
      ;
      return (((("(function(){ throw { id:" + PL$14/*par*/["id"]) + ", msg: ") + PL$11/*stringEncodeStr*/(PL$14/*par*/["msg"])) + " } })()");
      ;});
    PL$5/*internals*/["runtimeError"] = PL$13/*runtimeError*/;
    PL$6/*cs*/["getGetPropertyCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      if(PL$16/*cDef*/["isVar"]){
        if((PL$14/*par*/["asmMode"] && ! PL$14/*par*/["propertyValue"])){
          return PL$17/*assembleCode*/([PL$12/*makro*/["SELF"], ".", PL$14/*par*/["property"]], PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/([PL$12/*makro*/["SELF"], "[", PL$12/*makro*/["PROPERTYVALUE"], "]"], PL$14/*par*/);
      };
      ;
      var PL$18/*map*/ = PL$16/*cDef*/["map"];
      if(PL$14/*par*/["property"]){
        if(PL$18/*map*/["members"][PL$14/*par*/["property"]]){
          return PL$17/*assembleCode*/(PL$18/*map*/["members"][PL$14/*par*/["property"]]["getCode"], PL$14/*par*/);
        };
        ;
      };
      ;
      if(PL$18/*map*/["getMemberCode"]){
        return PL$17/*assembleCode*/(PL$18/*map*/["getMemberCode"], PL$14/*par*/);
      };
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["accessNotAllowd"], PL$14/*par*/);
      ;});
    PL$6/*cs*/["getSetPropertyCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      if(PL$16/*cDef*/["isVar"]){
        if(! this["canSet"](this["getBuiltinType"]("var"), PL$14/*par*/["valueType"])){
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/([PL$12/*makro*/["SELF"], "[", PL$12/*makro*/["PROPERTYVALUE"], "] ", PL$12/*makro*/["OPERATOR"], " ", PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      var PL$18/*map*/ = PL$16/*cDef*/["map"];
      if((PL$18/*map*/ && PL$14/*par*/["property"])){
        if(PL$18/*map*/["members"][PL$14/*par*/["property"]]){
          var PL$19/*propertyType*/ = this["getPropertyType"]({"type": PL$14/*par*/["type"],
"property": PL$14/*par*/["property"]});
          if(! this["canSet"](PL$19/*propertyType*/, PL$14/*par*/["valueType"])){
            if(this["canSet"](PL$19/*propertyType*/, this["getClassFromTemporaryTracked"](PL$14/*par*/["valueType"]))){
              return PL$17/*assembleCode*/(PL$18/*map*/["members"][PL$14/*par*/["property"]]["setCodeFromTemporary"], PL$14/*par*/);
            };
            ;
            return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
          };
          ;
          return PL$17/*assembleCode*/(PL$18/*map*/["members"][PL$14/*par*/["property"]]["setCode"], PL$14/*par*/);
        };
        ;
      };
      ;
      if((PL$18/*map*/ && PL$18/*map*/["setMemberCode"])){
        if(! this["canSet"](this["getBuiltinType"]("var"), PL$14/*par*/["valueType"])){
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/(PL$18/*map*/["setMemberCode"], PL$14/*par*/);
      };
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["accessNotAllowd"], PL$14/*par*/);
      ;});
    PL$6/*cs*/["getConnectCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$18/*map*/ = PL$16/*cDef*/["map"];
      if(PL$14/*par*/["valueProperty"]){
        var PL$20/*valuePropertyType*/ = this["getPropertyType"]({"type": PL$14/*par*/["valueType"],
"property": PL$14/*par*/["valueProperty"]});
        if(! this["canConnect"](PL$14/*par*/["type"], PL$14/*par*/["property"], PL$20/*valuePropertyType*/)){
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$14/*par*/);
        };
        ;
        PL$14/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": PL$14/*par*/["valueType"],
"property": PL$14/*par*/["valueProperty"]}));
        return PL$17/*assembleCode*/(PL$18/*map*/["members"][PL$14/*par*/["property"]]["connectSlotCode"], PL$14/*par*/);
      }else{
      if(! this["canConnect"](PL$14/*par*/["type"], PL$14/*par*/["property"], PL$14/*par*/["valueType"])){
        return PL$13/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$14/*par*/);
      };
      ;
      return PL$17/*assembleCode*/(PL$18/*map*/["members"][PL$14/*par*/["property"]]["connectFunCode"], PL$14/*par*/);
      };
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$14/*par*/);
      ;});
    PL$6/*cs*/["getPassAsTypeCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$21/*vcDef*/ = PL$8/*getClass*/(PL$14/*par*/["valueType"]);
      if(PL$14/*par*/["value"]){
        if(! this["canSet"](PL$14/*par*/["type"], PL$14/*par*/["valueType"])){
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
        };
        ;
        if(this["isTemporaryTrackedClass"](PL$14/*par*/["type"])){
          return this["getCreateTemporaryClassCode"](PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/([PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["missingVariable"], PL$14/*par*/);
      ;});
    PL$6/*cs*/["getCreateTemporaryClassCode"] = (function(PL$14/*par*/){
    
      ;
      if(this["isTemporaryTrackedClass"](PL$14/*par*/["valueType"])){
        return PL$17/*assembleCode*/([PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      if(! this["isTrackedClass"](PL$14/*par*/["valueType"])){
        return PL$17/*assembleCode*/([PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["valueType"]);
      var PL$22/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + PL$16/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), PL$12/*makro*/["VALUE"], ")"];
      return PL$17/*assembleCode*/(PL$22/*codeAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getDestroyTemporaryClassCode"] = (function(PL$14/*par*/){
    
      ;
      if(! this["isTemporaryTrackedClass"](PL$14/*par*/["valueType"])){
        if(PL$14/*par*/["noValueRequired"]){
          return PL$17/*assembleCode*/([], PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/([PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      var PL$22/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", PL$12/*makro*/["VALUE"], ")"];
      return PL$17/*assembleCode*/(PL$22/*codeAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["dereferencePromisePreCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$22/*codeAr*/ = [PL$12/*makro*/["VALUE"], ".then("];
      if(this["isTemporaryTrackedClass"](PL$14/*par*/["valueType"])){
        PL$22/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];
      };
      ;
      return PL$17/*assembleCode*/(PL$22/*codeAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["dereferencePromisePostCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$22/*codeAr*/ = [");\n"];
      if(this["isTemporaryTrackedClass"](PL$14/*par*/["valueType"])){
        PL$22/*codeAr*/ = [");\nreturn r;\n})(", PL$12/*makro*/["VALUE"], ");/*temptracked promise end*/\n"];
      };
      ;
      return PL$17/*assembleCode*/(PL$22/*codeAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["promisingReturnTypeCheck"] = (function(PL$14/*par*/){
    
      ;
      if(! this["isPromiseOfClass"](PL$14/*par*/["type"])){
        return PL$13/*runtimeError*/(PL$2/*errorMsg*/["notAPromise"], PL$14/*par*/);
      };
      ;
      return PL$17/*assembleCode*/([], PL$14/*par*/);
      ;});
    PL$6/*cs*/["getSetVariableCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$21/*vcDef*/ = PL$8/*getClass*/(PL$14/*par*/["valueType"]);
      if(PL$14/*par*/["instance"]){
        var PL$23/*operator*/ = (PL$14/*par*/["operator"] || "=");
        if((PL$23/*operator*/ != "=")){
          if(! (PL$16/*cDef*/["isVar"] && PL$21/*vcDef*/["isVar"])){
            return PL$13/*runtimeError*/(PL$2/*errorMsg*/["operatorMissmatch"], PL$14/*par*/);
          };
          ;
        };
        ;
        if(! this["canSet"](PL$14/*par*/["type"], PL$14/*par*/["valueType"])){
          if(this["canSet"](PL$14/*par*/["type"], this["getClassFromTemporaryTracked"](PL$14/*par*/["valueType"]))){
            if((PL$14/*par*/["assignmentType"] == "Identifier")){
              return PL$17/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", PL$12/*makro*/["SELF"], "){ _T", PL$12/*makro*/["SELF"], "(); };\n", "if(vAr){\nvar v = vAr[0];\n", PL$12/*makro*/["SELF"], " ", PL$23/*operator*/, " v;\n", "_T", PL$12/*makro*/["SELF"], " = vAr[1];\n", "return v;\n}else{\n", PL$12/*makro*/["SELF"], " ", PL$23/*operator*/, " undefined; ", "_T", PL$12/*makro*/["SELF"], " = undefined;\n", "return;\n}; })", "(", PL$12/*makro*/["VALUE"], ")/*end temp assign*/\n"], PL$14/*par*/);
            };
            ;
          };
          ;
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
        };
        ;
        if(this["isTrackedClass"](PL$14/*par*/["type"])){
          if((PL$14/*par*/["assignmentType"] == "Identifier")){
            return PL$17/*assembleCode*/(["/*tracked assign*/(function(v){\n", "if (_T", PL$12/*makro*/["SELF"], "){ _T", PL$12/*makro*/["SELF"], "(); };\n", PL$12/*makro*/["SELF"], " ", PL$23/*operator*/, " v;\n", "if (v){\n", "_T", PL$12/*makro*/["SELF"], ((" = v[" + PL$21/*vcDef*/["map"]["trackRootIdx"]) + "]();\n"), "}else{\n", "_T", PL$12/*makro*/["SELF"], " = undefined;\n", "};\n", "return v;\n", "})", "(", PL$12/*makro*/["VALUE"], ")/*end assign*/\n"], PL$14/*par*/);
          };
          ;
          return PL$13/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$14/*par*/);
        };
        ;
        return PL$17/*assembleCode*/([PL$12/*makro*/["SELF"], " ", PL$23/*operator*/, " ", PL$12/*makro*/["VALUE"]], PL$14/*par*/);
      };
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["missingVariable"], PL$14/*par*/);
      ;});
    PL$6/*cs*/["declareReturnPromiseCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$24/*retType*/ = PL$14/*par*/["type"];
      var PL$25/*track*/ = false;
      if(this["isTemporaryTrackedClass"](PL$24/*retType*/)){
        PL$25/*track*/ = true;
        PL$24/*retType*/ = this["getClassFromTemporaryTracked"](PL$24/*retType*/);
      };
      ;
      if(this["isTrackedClass"](PL$24/*retType*/)){
        PL$25/*track*/ = true;
      };
      ;
      var PL$26/*assemblyAr*/;
      if(PL$25/*track*/){
        PL$26/*assemblyAr*/ = ["var ", PL$14/*par*/["name"], ";\nvar _T", PL$14/*par*/["name"], ";\n(function(){ var vAr = new ", PL$12/*makro*/["CONSTRUCTOR"], "(); ", PL$14/*par*/["name"], " = vAr[0]; _T", PL$14/*par*/["name"], " = vAr[1]; })();"];
      }else{
      PL$26/*assemblyAr*/ = ["var ", PL$14/*par*/["name"], " = new __Promise();\n"];
      };
      ;
      return PL$17/*assembleCode*/(PL$26/*assemblyAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["returnReturnPromiseCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$24/*retType*/ = PL$14/*par*/["type"];
      var PL$25/*track*/ = false;
      if(this["isTemporaryTrackedClass"](PL$24/*retType*/)){
        PL$25/*track*/ = true;
        PL$24/*retType*/ = this["getClassFromTemporaryTracked"](PL$24/*retType*/);
      };
      ;
      if(this["isTrackedClass"](PL$24/*retType*/)){
        PL$25/*track*/ = true;
      };
      ;
      var PL$26/*assemblyAr*/;
      if(PL$25/*track*/){
        PL$26/*assemblyAr*/ = ["return [", PL$14/*par*/["name"], ", _T", PL$14/*par*/["name"], "];\n"];
      }else{
      PL$26/*assemblyAr*/ = ["return ", PL$14/*par*/["name"], ";\n"];
      };
      ;
      return PL$17/*assembleCode*/(PL$26/*assemblyAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getDeclareVariableCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$26/*assemblyAr*/ = [];
      if(PL$14/*par*/["declaration"]){
        PL$26/*assemblyAr*/["push"]("var ");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"](";\n");
      };
      ;
      if(PL$16/*cDef*/["track"]){
        PL$26/*assemblyAr*/["push"]("var _T");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"](";\n");
      };
      ;
      return PL$17/*assembleCode*/(PL$26/*assemblyAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getProcessParameterCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$26/*assemblyAr*/ = [];
      if(PL$16/*cDef*/["track"]){
        PL$26/*assemblyAr*/["push"]("var _T");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"](";\n");
        PL$26/*assemblyAr*/["push"]("if(");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"]("){ _T");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"](" = ");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"]("[1];\n");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"](" = ");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"]("[0];}\n");
      };
      ;
      return PL$17/*assembleCode*/(PL$26/*assemblyAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getDestroyVariableCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$26/*assemblyAr*/ = [];
      if(PL$16/*cDef*/["track"]){
        PL$26/*assemblyAr*/["push"]("if (_T");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"]("){ _T");
        PL$26/*assemblyAr*/["push"](PL$14/*par*/["name"]);
        PL$26/*assemblyAr*/["push"]("();};");
      };
      ;
      return PL$17/*assembleCode*/(PL$26/*assemblyAr*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getCallCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$16/*cDef*/ = PL$8/*getClass*/(PL$14/*par*/["type"]);
      var PL$27/*i*/;
      var PL$28/*l*/;
      var PL$29/*args*/;
      var PL$30/*assembly*/;
      if(PL$16/*cDef*/["isVar"]){
        PL$29/*args*/ = PL$14/*par*/["arguments"];
        PL$28/*l*/ = PL$29/*args*/["length"];
        PL$30/*assembly*/ = [PL$12/*makro*/["SELF"], "("];
        for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$28/*l*/);++PL$27/*i*/){{
          if((PL$27/*i*/ > 0)){
            PL$30/*assembly*/["push"](", ");
          };
          ;
          PL$30/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": PL$29/*args*/[PL$27/*i*/]["value"],
"valueType": PL$29/*args*/[PL$27/*i*/]["type"]});}};
        ;
        PL$30/*assembly*/["push"](")");
        return PL$17/*assembleCode*/(PL$30/*assembly*/, PL$14/*par*/);
      };
      ;
      if(! PL$16/*cDef*/["isFunction"]){
        return PL$13/*runtimeError*/(PL$2/*errorMsg*/["expectedCallable"], PL$14/*par*/);
      };
      ;
      PL$29/*args*/ = PL$14/*par*/["arguments"];
      PL$28/*l*/ = PL$29/*args*/["length"];
      PL$30/*assembly*/ = [PL$12/*makro*/["SELF"], "("];
      for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$28/*l*/);++PL$27/*i*/){{
        if((PL$27/*i*/ > 0)){
          PL$30/*assembly*/["push"](", ");
        };
        ;
        PL$30/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (PL$16/*cDef*/["arguments"][PL$27/*i*/] || this["getBuiltinType"]("var")),
"value": PL$29/*args*/[PL$27/*i*/]["value"],
"valueType": PL$29/*args*/[PL$27/*i*/]["type"]});}};
      ;
      PL$30/*assembly*/["push"](")");
      return PL$17/*assembleCode*/(PL$30/*assembly*/, PL$14/*par*/);
      ;});
    PL$6/*cs*/["getBinaryExpressionCode"] = (function(PL$14/*par*/){
    
      ;
      var PL$31/*lcDef*/ = PL$8/*getClass*/(PL$14/*par*/["leftType"]);
      var PL$32/*rcDef*/ = PL$8/*getClass*/(PL$14/*par*/["rightType"]);
      if((PL$31/*lcDef*/["isVar"] && PL$32/*rcDef*/["isVar"])){
        return PL$17/*assembleCode*/(["(", PL$12/*makro*/["LEFT"], " ", PL$12/*makro*/["OPERATOR"], " ", PL$12/*makro*/["RIGHT"], ")"], PL$14/*par*/);
      };
      ;
      switch (PL$14/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":

      return PL$17/*assembleCode*/(["(", PL$12/*makro*/["LEFT"], " ", PL$12/*makro*/["OPERATOR"], " ", PL$12/*makro*/["RIGHT"], ")"], PL$14/*par*/);}
;
      ;
      return PL$13/*runtimeError*/(PL$2/*errorMsg*/["operatorMissmatch"], PL$14/*par*/);
      ;});
    var PL$33/*presets*/ = {"getMemberCode": (function(PL$34/*freePart*/){
    
      ;
      return [PL$12/*makro*/["SELF"], (("[" + PL$34/*freePart*/) + "]["), PL$12/*makro*/["PROPERTYVALUE"], "]"];
      ;}),
"setMemberCode": (function(PL$34/*freePart*/){
    
      ;
      return [PL$12/*makro*/["SELF"], (("[" + PL$34/*freePart*/) + "]["), PL$12/*makro*/["PROPERTYVALUE"], "] ", PL$12/*makro*/["OPERATOR"], " ", PL$12/*makro*/["VALUE"]];
      ;})};
    PL$5/*internals*/["presets"] = PL$33/*presets*/;
    PL$17/*assembleCode*/ = (function(PL$35/*ar*/, PL$14/*par*/){
    
      ;
      var PL$36/*res*/ = PL$14/*par*/["result"];
      var PL$37/*resStr*/ = "";
      if(! PL$36/*res*/){
        PL$36/*res*/ = {"push": (function(PL$38/*parStr*/){
        
          ;
          PL$37/*resStr*/ += PL$38/*parStr*/;
          ;})};
      };
      ;
      var PL$27/*i*/ = 0;
      var PL$39/*r*/ = "";
      for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$35/*ar*/["length"]);++PL$27/*i*/){{
        if((typeof PL$35/*ar*/[PL$27/*i*/] == "string")){
          PL$36/*res*/["push"](PL$35/*ar*/[PL$27/*i*/]);
        }else{
        if(PL$35/*ar*/[PL$27/*i*/]["_internFun"]){
          var PL$40/*tempPar*/ = PL$35/*ar*/[PL$27/*i*/];
          PL$40/*tempPar*/["result"] = PL$14/*par*/["result"];
          PL$40/*tempPar*/["errorFun"] = PL$14/*par*/["errorFun"];
          var PL$41/*tempRes*/ = PL$4/*classSystem*/[PL$35/*ar*/[PL$27/*i*/]["_internFun"]](PL$40/*tempPar*/);
          if(! PL$14/*par*/["result"]){
            PL$36/*res*/["push"](PL$41/*tempRes*/);
          };
          ;
        }else{
        switch (PL$35/*ar*/[PL$27/*i*/]){
case PL$12/*makro*/["SELF"]:

        PL$36/*res*/["push"](PL$14/*par*/["instance"]);
        break;;case PL$12/*makro*/["PROPERTY"]:

        PL$36/*res*/["push"](PL$14/*par*/["property"]);
        break;;case PL$12/*makro*/["PROPERTYSTRING"]:

        PL$36/*res*/["push"](PL$11/*stringEncodeStr*/(PL$14/*par*/["property"]));
        break;;case PL$12/*makro*/["PROPERTYVALUE"]:

        if(PL$14/*par*/["propertyValue"]){
          PL$36/*res*/["push"](PL$14/*par*/["propertyValue"]);
        }else{
        PL$36/*res*/["push"](PL$11/*stringEncodeStr*/(PL$14/*par*/["property"]));
        };
        ;
        break;;case PL$12/*makro*/["VALUE"]:

        PL$36/*res*/["push"](PL$14/*par*/["value"]);
        break;;case PL$12/*makro*/["VALUEPROPERTY"]:

        PL$36/*res*/["push"](PL$14/*par*/["valueProperty"]);
        break;;case PL$12/*makro*/["LEFT"]:

        PL$36/*res*/["push"](PL$14/*par*/["left"]);
        break;;case PL$12/*makro*/["RIGHT"]:

        PL$36/*res*/["push"](PL$14/*par*/["right"]);
        break;;case PL$12/*makro*/["OPERATOR"]:

        PL$36/*res*/["push"](PL$14/*par*/["operator"]);
        break;;case PL$12/*makro*/["RESOLVEFUN"]:

        PL$36/*res*/["push"]((PL$14/*par*/["resolveFun"] || "undefined"));
        break;;case PL$12/*makro*/["REJECTFUN"]:

        PL$36/*res*/["push"]((PL$14/*par*/["rejectFun"] || "undefined"));
        break;;case PL$12/*makro*/["TYPEVALUE"]:

        PL$36/*res*/["push"](PL$14/*par*/["typeValue"]);
        break;;case PL$12/*makro*/["CONSTRUCTOR"]:

        PL$36/*res*/["push"](PL$14/*par*/["constructorName"]);
        break;;case PL$12/*makro*/["NEWLINE"]:

        PL$36/*res*/["push"]((PL$14/*par*/["newLine"] || "\n"));}
;
        ;
        };
        };
        ;}};
      ;
      if(PL$14/*par*/["result"]){
        return PL$36/*res*/;
      };
      ;
      return PL$37/*resStr*/;
      ;});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();