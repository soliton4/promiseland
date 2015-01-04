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
    if (promiseland._hasModule({ hashStr: "5574525bc9a7198c6ddfc0419e720d28" })){ return promiseland._getModule("5574525bc9a7198c6ddfc0419e720d28"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "5574525bc9a7198c6ddfc0419e720d28", "module": PL$1, promising: true });
var PL$40/*Promise*/;try{PL$40/*Promise*/ = Promise;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*basics*/;
var PL$7/*errorFun*/;
var PL$8/*errorMsg*/;
var PL$9/*_stringEncodeStr*/;
var PL$10/*stringEncodeStr*/;
var PL$11/*VariableNames*/;
var PL$12/*mixin*/;
var PL$13/*identifierName*/;
var PL$14/*checkIsFunction*/;
var PL$15/*getExtraFromPar*/;
PL$3(function(){

  ;
  __requireFun("./basics").then(PL$3(function(PL$6){PL$5/*basics*/ = PL$6;
  PL$7/*errorFun*/ = PL$5/*basics*/["errorFun"];
  PL$8/*errorMsg*/ = PL$5/*basics*/["errorMsg"];
  PL$9/*_stringEncodeStr*/ = PL$5/*basics*/["_stringEncodeStr"];
  PL$10/*stringEncodeStr*/ = PL$5/*basics*/["stringEncodeStr"];
  PL$11/*VariableNames*/ = PL$5/*basics*/["VariableNames"];
  PL$12/*mixin*/ = PL$5/*basics*/["mixin"];
  PL$13/*identifierName*/ = PL$5/*basics*/["identifierName"];
  PL$14/*checkIsFunction*/ = PL$5/*basics*/["checkIsFunction"];
  PL$15/*getExtraFromPar*/ = PL$5/*basics*/["getExtraFromPar"];
  PL$1.resolve((function(PL$16/*parInstance*/, PL$17/*par*/){
  var PL$18/*f*/;

    ;
    PL$18/*f*/ = (function(PL$17/*par*/){
    
      ;
      this["parseFunction"] = (function(PL$19/*parsed*/){
      var PL$20/*res*/;
var PL$21/*asmRes*/;

        ;
        this["stack"]("isFunction");
        this["isFunction"] = true;
        PL$20/*res*/ = this["_parseFunction"](PL$19/*parsed*/);
        this["unstack"]("isFunction");
        if(this["isAsmFun"](PL$19/*parsed*/)){
          PL$21/*asmRes*/ = this["newResult"]();
          PL$21/*asmRes*/["push"](PL$20/*res*/);
          PL$21/*asmRes*/["checkasm"] = true;
          PL$21/*asmRes*/["setParsed"](PL$19/*parsed*/);
          return PL$21/*asmRes*/;
        };
        ;
        return PL$20/*res*/;
        ;});
      this["functionInfo"] = (function(PL$19/*parsed*/){
      var PL$20/*res*/;
var PL$22/*typeNameStr*/;
var PL$23/*type*/;

        ;
        PL$20/*res*/ = {"hasName": false,
"hasReturnType": false,
"returnTypeNameStr": undefined,
"nameStr": undefined};
        if(PL$19/*parsed*/["id"]){
          PL$20/*res*/["hasName"] = true;
          PL$20/*res*/["nameStr"] = PL$13/*identifierName*/(PL$19/*parsed*/["id"]);
        };
        ;
        if(PL$19/*parsed*/["returnTypename"]){
          PL$22/*typeNameStr*/ = PL$13/*identifierName*/(PL$19/*parsed*/["returnTypename"]);
          if(PL$20/*res*/["hasName"]){
            PL$20/*res*/["returnType"] = this["getType"](PL$22/*typeNameStr*/, PL$19/*parsed*/);
            PL$20/*res*/["returnTypeNameStr"] = PL$22/*typeNameStr*/;
            PL$20/*res*/["hasReturnType"] = true;
          }else{
          PL$23/*type*/ = this["getType"](PL$22/*typeNameStr*/, PL$19/*parsed*/, {"dontThrow": true});
          if(PL$23/*type*/){
            PL$20/*res*/["returnType"] = PL$23/*type*/;
            PL$20/*res*/["returnTypeNameStr"] = PL$22/*typeNameStr*/;
            PL$20/*res*/["hasReturnType"] = true;
          }else{
          PL$20/*res*/["hasName"] = true;
          PL$20/*res*/["nameStr"] = PL$22/*typeNameStr*/;
          };
          ;
          };
          ;
        };
        ;
        if(! PL$20/*res*/["hasReturnType"]){
          PL$20/*res*/["returnType"] = this["getType"]("var");
        };
        ;
        return PL$20/*res*/;
        ;});
      this["_parseFunction"] = (function(PL$17/*par*/, PL$24/*parJsn*/){
      var PL$25/*parGivenPromiseNameStr*/;
var PL$26/*noUntrack*/;
var PL$27/*hasFrameInfo*/;
var PL$28/*runRemote*/;
var PL$29/*runExclusive*/;
var PL$30/*i*/;
var PL$31/*typename*/;
var PL$32/*parParsed*/;
var PL$33/*funClosure*/;
var PL$34/*self*/;
var PL$35/*functionInfo*/;
var PL$36/*hasName*/;
var PL$37/*nameStr*/;
var PL$38/*hasReturnTypeName*/;
var PL$39/*thisFunType*/;
var PL$41/*templateTypesAr*/;
var PL$42/*templateTypes*/;
var PL$43/*typeVarInit*/;
var PL$44/*p*/;
var PL$45/*extraTypesRes*/;
var PL$20/*res*/;
var PL$46/*funDecl*/;
var PL$47/*funRes*/;
var PL$48/*l*/;
var PL$49/*classesRes*/;
var PL$50/*addFront*/;
var PL$51/*b*/;
var PL$52/*extraPar*/;
var PL$53/*block*/;
var PL$54/*localVariablesAr*/;
var PL$55/*varname*/;
var PL$23/*type*/;
var PL$56/*completeFun*/;
var PL$57/*returnTypePromiseCheck*/;
var PL$58/*handleExtras*/;
var PL$59/*dt*/;
var PL$60/*uniqueNameStr*/;
var PL$61/*remoteClosure*/;
var PL$62/*finalResult*/;

        ;
        PL$24/*parJsn*/ = (PL$24/*parJsn*/ || {});
        PL$25/*parGivenPromiseNameStr*/ = PL$24/*parJsn*/["promiseName"];
        PL$26/*noUntrack*/ = PL$24/*parJsn*/["noUntrack"];
        PL$27/*hasFrameInfo*/ = false;
        PL$28/*runRemote*/ = false;
        PL$29/*runExclusive*/ = false;
        PL$30/*i*/ = 0;
        PL$31/*typename*/;
        PL$32/*parParsed*/ = PL$17/*par*/;
        PL$33/*funClosure*/;
        PL$34/*self*/ = this;
        PL$35/*functionInfo*/ = this["functionInfo"](PL$32/*parParsed*/);
        PL$36/*hasName*/ = PL$35/*functionInfo*/["hasName"];
        PL$37/*nameStr*/ = PL$35/*functionInfo*/["nameStr"];
        PL$38/*hasReturnTypeName*/ = PL$35/*functionInfo*/["hasReturnType"];
        this["_returnType"] = PL$35/*functionInfo*/["returnType"];
        PL$39/*thisFunType*/ = this["getFunctionType"](PL$17/*par*/);
        if((PL$36/*hasName*/ && PL$32/*parParsed*/["useLocalVariableName"])){
          this["addLocalVariable"]({"name": PL$37/*nameStr*/,
"isFunction": true,
"type": PL$39/*thisFunType*/,
"localFunction": true}, PL$32/*parParsed*/);
        };
        ;
        this["stack"]("inheritedAvailable");
        this["stack"]("thisType");
        if(this["isClassObject"]){
          this["inheritedAvailable"] = true;
          this["thisType"] = (this["inheritedSystem"]["type"] || this["getType"]("var"));
        }else{
        this["inheritedAvailable"] = false;
        this["thisType"] = this["getType"]("var");
        };
        ;
        this["runBeforeReturnRes"] = this["newResult"]();
        this["beforeReturnExistsPs"] = new PL$40/*Promise*/();
        this["additionalCodeFrontRes"] = this["newResult"]();
        this["additionalCodeEndRes"] = this["newResult"]();
        this["stack"]("isClassObject");
        this["isClassObject"] = false;
        if((PL$17/*par*/["frame"] && PL$17/*par*/["frame"]["name"])){
          PL$27/*hasFrameInfo*/ = true;
          if((PL$17/*par*/["frame"]["type"] == "frame")){
            PL$28/*runRemote*/ = true;
            PL$17/*par*/["promising"] = true;
            if(this["dynamicCode"]){
              this["error"](PL$17/*par*/, PL$8/*errorMsg*/["functionFrameInDynamicCode"]);
            };
            ;
          }else{
          if((PL$17/*par*/["frame"]["type"] == "exclusive")){
            PL$29/*runExclusive*/ = true;
          };
          };
          ;
        };
        ;
        PL$41/*templateTypesAr*/ = [];
        if((PL$17/*par*/["template"] && PL$17/*par*/["template"]["properties"]["length"])){
          PL$42/*templateTypes*/ = this["getTemplateProperty"](PL$17/*par*/["template"], "types", "ObjectExpression");
          if(PL$42/*templateTypes*/){
            PL$43/*typeVarInit*/ = this["newResult"]();
            for(PL$30/*i*/ = 0;(PL$30/*i*/ < PL$42/*templateTypes*/["properties"]["length"]);++PL$30/*i*/){{
              PL$44/*p*/ = PL$42/*templateTypes*/["properties"][PL$30/*i*/];
              PL$31/*typename*/ = PL$13/*identifierName*/(PL$44/*p*/["key"]);
              this["addType"]({"name": PL$31/*typename*/,
"dynamic": true}, PL$44/*p*/["value"]);
              if(! PL$33/*funClosure*/){
                PL$33/*funClosure*/ = this["newResult"]();
                PL$33/*funClosure*/["push"]("(function(){");
              };
              ;
              PL$43/*typeVarInit*/["push"]("var ");
              PL$43/*typeVarInit*/["push"](this["renderType"](PL$31/*typename*/));
              PL$43/*typeVarInit*/["push"](" = ");
              PL$43/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$44/*p*/["value"])));
              PL$43/*typeVarInit*/["push"](";\n");
              PL$43/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$31/*typename*/)) + " = "));
              PL$43/*typeVarInit*/["push"](this["renderType"](PL$31/*typename*/));
              PL$43/*typeVarInit*/["push"]("\n;");
              PL$43/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$31/*typename*/)) + " = undefined;\n"));
              PL$43/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$31/*typename*/}));
              PL$41/*templateTypesAr*/["push"](PL$31/*typename*/);}};
            ;
            PL$33/*funClosure*/["push"](PL$43/*typeVarInit*/);
          };
          ;
        };
        ;
        PL$45/*extraTypesRes*/ = this["newResult"]();
        if(PL$33/*funClosure*/){
          PL$33/*funClosure*/["push"]("var communicator = {fun: undefined};\n");
          PL$33/*funClosure*/["push"](PL$45/*extraTypesRes*/);
          PL$33/*funClosure*/["push"]("eval(\"communicator.fun = ");
        };
        ;
        PL$20/*res*/ = this["newResult"]();
        PL$46/*funDecl*/ = this["newResult"]();
        PL$47/*funRes*/ = this["newResult"]();
        PL$30/*i*/ = 0;
        PL$46/*funDecl*/["push"]("function");
        if(PL$36/*hasName*/){
          this["functionName"] = PL$37/*nameStr*/;
          if(PL$32/*parParsed*/["useLocalVariableName"]){
            PL$46/*funDecl*/["push"](" ");
            PL$46/*funDecl*/["push"](this["getVariableName"](PL$37/*nameStr*/));
          };
          ;
        };
        ;
        PL$46/*funDecl*/["push"]("(");
        if((PL$17/*par*/["params"] && PL$17/*par*/["params"]["length"])){
          PL$30/*i*/ = 0;
          PL$48/*l*/ = PL$17/*par*/["params"]["length"];
          for(PL$30/*i*/;(PL$30/*i*/ < PL$48/*l*/);++PL$30/*i*/){{
            if(PL$30/*i*/){
              PL$46/*funDecl*/["push"](", ");
            };
            ;
            PL$46/*funDecl*/["push"](this["getVariableName"](PL$13/*identifierName*/(PL$17/*par*/["params"][PL$30/*i*/]["name"])));
            this["addLocalVariable"]({"name": PL$17/*par*/["params"][PL$30/*i*/]["name"],
"typename": (PL$17/*par*/["params"][PL$30/*i*/]["typename"] || "var"),
"parameter": true}, PL$17/*par*/["params"][PL$30/*i*/]);}};
          ;
        };
        ;
        PL$46/*funDecl*/["push"]("){");
        PL$47/*funRes*/["push"](this["newLine"]());
        PL$49/*classesRes*/ = this["findClasses"](PL$17/*par*/["body"]);
        this["findVariables"](PL$17/*par*/["body"]);
        if(PL$29/*runExclusive*/){
          PL$47/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])) + ")){"));
          PL$47/*funRes*/["push"](this["newLine"]());
          if(PL$17/*par*/["promising"]){
            PL$47/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));
            PL$47/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");
            PL$47/*funRes*/["push"]("return p;\n");
          }else{
          PL$47/*funRes*/["push"]("return;\n");
          };
          ;
          PL$47/*funRes*/["push"]("};\n");
        };
        ;
        PL$50/*addFront*/ = PL$15/*getExtraFromPar*/(PL$17/*par*/, "addFront");
        if(PL$50/*addFront*/){
          PL$47/*funRes*/["push"](PL$50/*addFront*/);
        };
        ;
        if(PL$17/*par*/["promising"]){
          if(PL$25/*parGivenPromiseNameStr*/){
            this["returnPromise"] = PL$25/*parGivenPromiseNameStr*/;
          }else{
          this["returnPromise"] = this["getUniqueName"]();
          PL$47/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$32/*parParsed*/)),
"parsed": PL$32/*parParsed*/,
"errorFun": this["getWarningFun"](PL$32/*parParsed*/)}));
          };
          ;
          this["tryCatchFunctionStr"] = this["getUniqueName"]();
          PL$47/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));
          PL$47/*funRes*/["push"](this["runBeforeReturnRes"]);
          PL$47/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));
          this["catchFunctionStr"] = this["getUniqueName"]();
          PL$47/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));
          PL$47/*funRes*/["push"](this["runBeforeReturnRes"]);
          PL$47/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));
          this["promising"] = true;
          PL$20/*res*/["makePromising"]();
        };
        ;
        PL$51/*b*/ = PL$17/*par*/["body"];
        PL$52/*extraPar*/ = {};
        PL$51/*b*/["brackets"] = false;
        PL$52/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];
        PL$52/*extraPar*/["postCode"] = this["newResult"]();
        PL$52/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));
        PL$52/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);
        PL$53/*block*/ = this["blockCreator"](PL$51/*b*/, PL$52/*extraPar*/);
        PL$54/*localVariablesAr*/ = this["localVariables"]["getArray"]();
        for(PL$30/*i*/ = 0;(PL$30/*i*/ < PL$54/*localVariablesAr*/["length"]);++PL$30/*i*/){{
          PL$55/*varname*/ = PL$54/*localVariablesAr*/[PL$30/*i*/]["key"];
          PL$23/*type*/ = this["getVariableType"](PL$55/*varname*/);
          if(PL$54/*localVariablesAr*/[PL$30/*i*/]["value"]["localFunction"]){
          }else{
          if(PL$54/*localVariablesAr*/[PL$30/*i*/]["value"]["parameter"]){
            PL$47/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$55/*varname*/),
"type": PL$23/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}));
          }else{
          PL$47/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$55/*varname*/),
"type": PL$23/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}));
          };
          };
          ;
          if(! PL$26/*noUntrack*/){
            this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$55/*varname*/),
"type": PL$23/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}), this["isTrackedClassConRes"](PL$23/*type*/, PL$17/*par*/));
          };
          ;
          this["usedVariables"][PL$55/*varname*/] = false;}};
        ;
        if(this["usedVariables"]["arguments"]){
          PL$47/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));
          this["usedVariables"]["arguments"] = false;
        };
        ;
        PL$47/*funRes*/["push"](PL$49/*classesRes*/);
        for(PL$30/*i*/ = 0;(PL$30/*i*/ < this["functionsAr"]["length"]);++PL$30/*i*/){{
          PL$47/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][PL$30/*i*/]["name"])) + " = "));
          PL$47/*funRes*/["push"](this["functionsAr"][PL$30/*i*/]["res"]);
          PL$47/*funRes*/["push"](";\n");}};
        ;
        if(PL$17/*par*/["promising"]){
          if(this["usingThis"]){
            PL$47/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));
          };
          ;
          PL$47/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));
          PL$47/*funRes*/["push"](this["newLine"]());
        };
        ;
        PL$47/*funRes*/["push"](this["indent"](PL$53/*block*/));
        PL$46/*funDecl*/["push"](PL$47/*funRes*/);
        if(PL$17/*par*/["promising"]){
          PL$46/*funDecl*/["addPost"]("})();\n");
          PL$46/*funDecl*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$32/*parParsed*/,
"errorFun": this["getWarningFun"](PL$32/*parParsed*/)}));
          PL$46/*funDecl*/["addPost"]("}");
        }else{
        PL$46/*funDecl*/["push"]("}");
        };
        ;
        PL$56/*completeFun*/ = this["makeCompleteStatement"](PL$46/*funDecl*/);
        if((this["promising"] && PL$38/*hasReturnTypeName*/)){
          PL$57/*returnTypePromiseCheck*/ = this["newResult"]();
          PL$57/*returnTypePromiseCheck*/["push"]("(function(t){");
          PL$57/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$32/*parParsed*/),
"parsed": PL$32/*parParsed*/}));
          PL$57/*returnTypePromiseCheck*/["push"]("return t;})(");
          PL$57/*returnTypePromiseCheck*/["push"](PL$56/*completeFun*/);
          PL$57/*returnTypePromiseCheck*/["push"](")");
          PL$56/*completeFun*/ = PL$57/*returnTypePromiseCheck*/;
        };
        ;
        if(PL$33/*funClosure*/){
          PL$58/*handleExtras*/ = (function(PL$59/*dt*/){
          var PL$30/*i*/;

            ;
            if(PL$59/*dt*/["extraTypes"]){
              PL$30/*i*/ = 0;
              for(PL$30/*i*/ = 0;(PL$30/*i*/ < PL$59/*dt*/["extraTypes"]["length"]);++PL$30/*i*/){{
                PL$45/*extraTypesRes*/["push"](PL$59/*dt*/["extraTypes"][PL$30/*i*/]["res"]);
                PL$58/*handleExtras*/(PL$59/*dt*/["extraTypes"][PL$30/*i*/]["type"]);}};
              ;
            };
            ;
            ;});
          for(PL$30/*i*/ = 0;(PL$30/*i*/ < PL$41/*templateTypesAr*/["length"]);++PL$30/*i*/){{
            PL$59/*dt*/ = this["getType"](PL$41/*templateTypesAr*/[PL$30/*i*/], PL$17/*par*/);
            PL$58/*handleExtras*/(PL$59/*dt*/);}};
          ;
          PL$33/*funClosure*/["push"](PL$56/*completeFun*/, PL$17/*par*/, {"stringEncode": true});
          PL$33/*funClosure*/["push"](";\"); return communicator.fun; })()");
          PL$56/*completeFun*/ = this["makeCompleteStatement"](PL$33/*funClosure*/);
        };
        ;
        PL$60/*uniqueNameStr*/;
        if(PL$28/*runRemote*/){
          PL$61/*remoteClosure*/ = this["newResult"]();
          PL$60/*uniqueNameStr*/ = this["getUniqueName"]();
          PL$61/*remoteClosure*/["push"]("(function(f){\n");
          PL$61/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])));
          PL$61/*remoteClosure*/["push"](((((", " + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$60/*uniqueNameStr*/)) + ", f, "));
          PL$61/*remoteClosure*/["push"](this["renderType"](PL$39/*thisFunType*/, PL$32/*parParsed*/));
          PL$61/*remoteClosure*/["push"](");\n");
          PL$61/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])) + ")){\n"));
          PL$61/*remoteClosure*/["push"]("return f;\n");
          PL$61/*remoteClosure*/["push"]("}else{\n");
          PL$61/*remoteClosure*/["push"]("return function(){\n");
          PL$61/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$60/*uniqueNameStr*/)) + ", arguments);\n"));
          PL$61/*remoteClosure*/["push"]("}\n");
          PL$61/*remoteClosure*/["push"]("};\n");
          PL$61/*remoteClosure*/["push"]("})(");
          PL$61/*remoteClosure*/["push"](PL$56/*completeFun*/);
          PL$61/*remoteClosure*/["push"](")");
          PL$20/*res*/["push"](PL$61/*remoteClosure*/);
        }else{
        PL$20/*res*/["push"](PL$56/*completeFun*/);
        };
        ;
        PL$20/*res*/["setType"](PL$39/*thisFunType*/);
        this["unstack"]("isClassObject");
        this["unstack"]("inheritedAvailable");
        this["unstack"]("thisType");
        PL$62/*finalResult*/ = this["newResult"]();
        PL$62/*finalResult*/["push"](this["makeCompleteStatement"](PL$20/*res*/));
        PL$62/*finalResult*/["setType"](PL$39/*thisFunType*/);
        return PL$62/*finalResult*/;
        ;});
      this["isAsmFun"] = (function(PL$19/*parsed*/){
      var PL$63/*first*/;

        ;
        if(((! PL$19/*parsed*/ || ! PL$19/*parsed*/["body"]) || ! PL$19/*parsed*/["body"]["length"])){
          return false;
        };
        ;
        PL$63/*first*/ = PL$19/*parsed*/["body"][0];
        if((((PL$63/*first*/["type"] == "Literal") && (typeof PL$63/*first*/["value"] == "string")) && (PL$63/*first*/["value"] == "use asm"))){
          return true;
        };
        ;
        return false;
        ;});
      this["expFunctionExpression"] = (function(PL$64/*value*/, PL$65/*declaration*/){
      var PL$66/*cp*/;
var PL$67/*funName*/;
var PL$47/*funRes*/;
var PL$68/*uv*/;
var PL$69/*name*/;
var PL$20/*res*/;

        ;
        if(! PL$65/*declaration*/){
          PL$64/*value*/["useLocalVariableName"] = true;
        };
        ;
        PL$66/*cp*/ = this["newInstance"](PL$64/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
        PL$67/*funName*/ = PL$66/*cp*/["getFunctionName"]();
        PL$47/*funRes*/ = PL$66/*cp*/["getFunctionRes"]();
        PL$68/*uv*/ = PL$66/*cp*/["_getUsedVairables"]();
        PL$69/*name*/;
        for(PL$69/*name*/ in PL$68/*uv*/){
          if((PL$68/*uv*/[PL$69/*name*/] === true)){
            this["_addUsedVariable"](PL$69/*name*/);
          };
          ;};
        ;
        PL$20/*res*/;
        if(((PL$67/*funName*/ && PL$47/*funRes*/) && PL$65/*declaration*/)){
          this["addFunction"](PL$47/*funRes*/, PL$67/*funName*/);
          PL$20/*res*/ = this["newResult"](this["getVariableName"](PL$67/*funName*/));
          PL$20/*res*/["setType"](PL$47/*funRes*/["getType"]());
          return PL$20/*res*/;
        };
        ;
        PL$20/*res*/ = this["newResult"]();
        if(! PL$65/*declaration*/){
          PL$20/*res*/["push"]("(");
        };
        ;
        PL$20/*res*/["pushType"]((PL$47/*funRes*/ || PL$66/*cp*/["getResult"]()));
        if(! PL$65/*declaration*/){
          PL$20/*res*/["push"](")");
        };
        ;
        return PL$20/*res*/;
        ;});
      this["expFunctionDeclaration"] = (function(PL$64/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$64/*value*/, true);
        ;});
      this["expMemberFunction"] = (function(PL$64/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$64/*value*/);
        ;});
      this["functionsAr"] = [];
      this["addFunction"] = (function(PL$20/*res*/, PL$69/*name*/, PL$17/*par*/){
      
        ;
        this["resolveFunctionType"]({"name": PL$13/*identifierName*/(PL$69/*name*/),
"type": PL$20/*res*/["getType"]()}, PL$17/*par*/);
        this["functionsAr"]["push"]({"res": PL$20/*res*/,
"name": PL$69/*name*/});
        ;});
      ;});
    PL$18/*f*/["apply"](PL$16/*parInstance*/, [PL$17/*par*/]);
    ;})); return;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();