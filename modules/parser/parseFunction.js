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
    if (promiseland._hasModule({ hashStr: "86bc2f7260091a1402535541c028bc41" })){ return promiseland._getModule("86bc2f7260091a1402535541c028bc41"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "86bc2f7260091a1402535541c028bc41", "module": PL$1, promising: true });
var PL$41/*Promise*/;try{PL$41/*Promise*/ = Promise;}catch(e){};
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
var PL$16/*statementType*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  PL$7/*errorFun*/ = PL$5/*basics*/["errorFun"];
  PL$8/*errorMsg*/ = PL$5/*basics*/["errorMsg"];
  PL$9/*_stringEncodeStr*/ = PL$5/*basics*/["_stringEncodeStr"];
  PL$10/*stringEncodeStr*/ = PL$5/*basics*/["stringEncodeStr"];
  PL$11/*VariableNames*/ = PL$5/*basics*/["VariableNames"];
  PL$12/*mixin*/ = PL$5/*basics*/["mixin"];
  PL$13/*identifierName*/ = PL$5/*basics*/["identifierName"];
  PL$14/*checkIsFunction*/ = PL$5/*basics*/["checkIsFunction"];
  PL$15/*getExtraFromPar*/ = PL$5/*basics*/["getExtraFromPar"];
  PL$16/*statementType*/ = PL$5/*basics*/["statementType"];
  PL$1.resolve((function(PL$17/*parInstance*/, PL$18/*par*/){
  
    ;
    var PL$19/*f*/ = (function(PL$18/*par*/){
    
      ;
      this["parseFunction"] = (function(PL$20/*parsed*/){
      
        ;
        this["stack"]("isFunction");
        this["isFunction"] = true;
        var PL$21/*res*/ = this["_parseFunction"](PL$20/*parsed*/);
        ;
        this["unstack"]("isFunction");
        if(this["isAsmFun"](PL$20/*parsed*/)){
          var PL$22/*asmRes*/ = this["newResult"]();
          ;
          PL$22/*asmRes*/["pushType"](PL$21/*res*/);
          PL$22/*asmRes*/["checkasm"] = true;
          PL$22/*asmRes*/["setParsed"](PL$20/*parsed*/);
          return PL$22/*asmRes*/;
        };
        ;
        return PL$21/*res*/;
        ;});
      this["functionInfo"] = (function(PL$20/*parsed*/){
      
        ;
        var PL$21/*res*/ = {
          "hasName": false,
          "hasReturnType": false,
          "returnTypeNameStr": undefined,
          "nameStr": undefined
        };
        ;
        if(PL$20/*parsed*/["id"]){
          PL$21/*res*/["hasName"] = true;
          PL$21/*res*/["nameStr"] = PL$13/*identifierName*/(PL$20/*parsed*/["id"]);
        };
        ;
        if(PL$20/*parsed*/["returnTypename"]){
          var PL$23/*typeNameStr*/ = PL$13/*identifierName*/(PL$20/*parsed*/["returnTypename"]);
          ;
          if(PL$21/*res*/["hasName"]){
            PL$21/*res*/["returnType"] = this["getType"](PL$23/*typeNameStr*/, PL$20/*parsed*/);
            PL$21/*res*/["returnTypeNameStr"] = PL$23/*typeNameStr*/;
            PL$21/*res*/["hasReturnType"] = true;
          }else{
          var PL$24/*type*/ = this["getType"](PL$23/*typeNameStr*/, PL$20/*parsed*/, {
            "dontThrow": true
          });
          ;
          if(PL$24/*type*/){
            PL$21/*res*/["returnType"] = PL$24/*type*/;
            PL$21/*res*/["returnTypeNameStr"] = PL$23/*typeNameStr*/;
            PL$21/*res*/["hasReturnType"] = true;
          }else{
          PL$21/*res*/["hasName"] = true;
          PL$21/*res*/["nameStr"] = PL$23/*typeNameStr*/;
          };
          ;
          };
          ;
        };
        ;
        if(! PL$21/*res*/["hasReturnType"]){
          PL$21/*res*/["returnType"] = this["getType"]("var");
        };
        ;
        if((PL$20/*parsed*/["type"] == "FunctionDeclaration")){
          PL$21/*res*/["declaration"] = true;
          if(PL$21/*res*/["hasName"]){
            PL$21/*res*/["hasExternalName"] = true;
          };
          ;
        };
        ;
        return PL$21/*res*/;
        ;});
      this["_parseFunction"] = (function(PL$18/*par*/, PL$25/*parJsn*/){
      
        ;
        PL$25/*parJsn*/ = (PL$25/*parJsn*/ || {
          
        });
        var PL$26/*parGivenPromiseNameStr*/ = PL$25/*parJsn*/["promiseName"];
        ;
        var PL$27/*noUntrack*/ = PL$25/*parJsn*/["noUntrack"];
        ;
        var PL$28/*hasFrameInfo*/ = false;
        ;
        var PL$29/*runRemote*/ = false;
        ;
        var PL$30/*runExclusive*/ = false;
        ;
        var PL$31/*i*/ = 0;
        ;
        var PL$32/*typename*/;
        ;
        var PL$33/*parParsed*/ = PL$18/*par*/;
        ;
        var PL$34/*funClosure*/;
        ;
        var PL$35/*self*/ = this;
        ;
        var PL$36/*functionInfo*/ = this["functionInfo"](PL$33/*parParsed*/);
        ;
        var PL$37/*hasName*/ = PL$36/*functionInfo*/["hasName"];
        ;
        var PL$38/*nameStr*/ = PL$36/*functionInfo*/["nameStr"];
        ;
        var PL$39/*hasReturnTypeName*/ = PL$36/*functionInfo*/["hasReturnType"];
        ;
        this["_returnType"] = PL$36/*functionInfo*/["returnType"];
        var PL$40/*thisFunType*/ = this["getFunctionType"](PL$18/*par*/);
        ;
        if((PL$37/*hasName*/ && PL$33/*parParsed*/["useLocalVariableName"])){
          this["addLocalVariable"]({
            "name": PL$38/*nameStr*/,
            "isFunction": true,
            "type": PL$40/*thisFunType*/,
            "localFunction": true
          }, PL$33/*parParsed*/);
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
        this["beforeReturnExistsPs"] = new PL$41/*Promise*/();
        this["additionalCodeFrontRes"] = this["newResult"]();
        this["additionalCodeEndRes"] = this["newResult"]();
        this["stack"]("isClassObject");
        this["isClassObject"] = false;
        if((PL$18/*par*/["frame"] && PL$18/*par*/["frame"]["name"])){
          PL$28/*hasFrameInfo*/ = true;
          if((PL$18/*par*/["frame"]["type"] == "frame")){
            PL$29/*runRemote*/ = true;
            PL$18/*par*/["promising"] = true;
            if(this["dynamicCode"]){
              this["error"](PL$18/*par*/, PL$8/*errorMsg*/["functionFrameInDynamicCode"]);
            };
            ;
          }else{
          if((PL$18/*par*/["frame"]["type"] == "exclusive")){
            PL$30/*runExclusive*/ = true;
          };
          };
          ;
        };
        ;
        var PL$42/*templateTypesAr*/ = [
          
        ];
        ;
        if((PL$18/*par*/["template"] && PL$18/*par*/["template"]["properties"]["length"])){
          var PL$43/*templateTypes*/ = this["getTemplateProperty"](PL$18/*par*/["template"], "types", "ObjectExpression");
          ;
          if(PL$43/*templateTypes*/){
            var PL$44/*typeVarInit*/ = this["newResult"]();
            ;
            for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$43/*templateTypes*/["properties"]["length"]);++PL$31/*i*/){{
              var PL$45/*p*/ = PL$43/*templateTypes*/["properties"][PL$31/*i*/];
              ;
              PL$32/*typename*/ = PL$13/*identifierName*/(PL$45/*p*/["key"]);
              this["addType"]({
                "name": PL$32/*typename*/,
                "dynamic": true
              }, PL$45/*p*/["value"]);
              if(! PL$34/*funClosure*/){
                PL$34/*funClosure*/ = this["newResult"]();
                PL$34/*funClosure*/["push"]("(function(){");
              };
              ;
              PL$44/*typeVarInit*/["push"]("var ");
              PL$44/*typeVarInit*/["push"](this["renderType"](PL$32/*typename*/));
              PL$44/*typeVarInit*/["push"](" = ");
              PL$44/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$45/*p*/["value"])));
              PL$44/*typeVarInit*/["push"](";");
              PL$44/*typeVarInit*/["push"](this["newLine"]());
              PL$44/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$32/*typename*/)) + " = "));
              PL$44/*typeVarInit*/["push"](this["renderType"](PL$32/*typename*/));
              PL$44/*typeVarInit*/["push"](this["newLine"]());
              PL$44/*typeVarInit*/["push"](";");
              PL$44/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$32/*typename*/)) + " = undefined;"));
              PL$44/*typeVarInit*/["push"](this["newLine"]());
              PL$44/*typeVarInit*/["push"](this["_typeReadyCode"]({
                "typename": PL$32/*typename*/
              }));
              PL$42/*templateTypesAr*/["push"](PL$32/*typename*/);}};
            ;
            PL$34/*funClosure*/["push"](PL$44/*typeVarInit*/);
          };
          ;
        };
        ;
        var PL$46/*extraTypesRes*/ = this["newResult"]();
        ;
        if(PL$34/*funClosure*/){
          PL$34/*funClosure*/["push"]("var communicator = {fun: undefined};");
          PL$34/*funClosure*/["push"](this["newLine"]());
          PL$34/*funClosure*/["push"](PL$46/*extraTypesRes*/);
          PL$34/*funClosure*/["push"]("eval(\"communicator.fun = ");
        };
        ;
        var PL$21/*res*/ = this["newResult"]();
        ;
        var PL$47/*funDecl*/ = this["newResult"]();
        ;
        var PL$48/*funRes*/ = this["newResult"]();
        ;
        PL$31/*i*/ = 0;
        PL$47/*funDecl*/["push"]("function");
        var PL$49/*nameRes*/;
        ;
        if(PL$37/*hasName*/){
          this["functionName"] = PL$38/*nameStr*/;
          PL$47/*funDecl*/["push"](" ");
          PL$49/*nameRes*/ = this["newResult"]();
          PL$49/*nameRes*/["push"](this["getVariableName"](PL$38/*nameStr*/));
          PL$47/*funDecl*/["push"](PL$49/*nameRes*/);
        };
        ;
        PL$47/*funDecl*/["push"]("(");
        var PL$50/*params*/ = [
          
        ];
        ;
        if(PL$29/*runRemote*/){
          PL$50/*params*/["push"]({
            "name": "session",
            "typename": "var",
            "parsed": PL$33/*parParsed*/
          });
        };
        ;
        if((PL$18/*par*/["params"] && PL$18/*par*/["params"]["length"])){
          PL$31/*i*/ = 0;
          var PL$51/*l*/ = PL$18/*par*/["params"]["length"];
          ;
          for(PL$31/*i*/;(PL$31/*i*/ < PL$51/*l*/);++PL$31/*i*/){{
            PL$50/*params*/["push"]({
              "name": PL$13/*identifierName*/(PL$18/*par*/["params"][PL$31/*i*/]["name"]),
              "typename": (PL$18/*par*/["params"][PL$31/*i*/]["typename"] || "var"),
              "parsed": PL$18/*par*/["params"][PL$31/*i*/]
            });}};
          ;
        };
        ;
        if(PL$50/*params*/["length"]){
          PL$31/*i*/ = 0;
          PL$51/*l*/ = PL$50/*params*/["length"];
          for(PL$31/*i*/;(PL$31/*i*/ < PL$51/*l*/);++PL$31/*i*/){{
            if(PL$31/*i*/){
              PL$47/*funDecl*/["push"](", ");
            };
            ;
            PL$47/*funDecl*/["push"](this["getVariableName"](PL$13/*identifierName*/(PL$50/*params*/[PL$31/*i*/]["name"])));
            this["addLocalVariable"]({
              "name": PL$50/*params*/[PL$31/*i*/]["name"],
              "typename": (PL$50/*params*/[PL$31/*i*/]["typename"] || "var"),
              "parameter": true
            }, PL$50/*params*/[PL$31/*i*/]["parsed"]);}};
          ;
        };
        ;
        PL$47/*funDecl*/["push"]("){");
        if(this["isAsmFun"](PL$33/*parParsed*/)){
          PL$47/*funDecl*/["push"](this["newLine"]());
          PL$47/*funDecl*/["push"]("\"use asm\";");
          PL$47/*funDecl*/["push"](this["newLine"]());
          this["asmMode"] = true;
        };
        ;
        PL$48/*funRes*/["push"](this["newLine"]());
        var PL$52/*classesRes*/ = this["findClasses"](PL$18/*par*/["body"]);
        ;
        this["findVariables"](PL$18/*par*/["body"]);
        if(PL$30/*runExclusive*/){
          PL$48/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])) + ")){"));
          PL$48/*funRes*/["push"](this["newLine"]());
          if(PL$18/*par*/["promising"]){
            PL$48/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";"));
            PL$48/*funRes*/["push"](this["newLine"]());
            PL$48/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});");
            PL$48/*funRes*/["push"](this["newLine"]());
            PL$48/*funRes*/["push"]("return p;");
            PL$48/*funRes*/["push"](this["newLine"]());
          }else{
          PL$48/*funRes*/["push"]("return;");
          PL$48/*funRes*/["push"](this["newLine"]());
          };
          ;
          PL$48/*funRes*/["push"]("};");
          PL$48/*funRes*/["push"](this["newLine"]());
        };
        ;
        var PL$53/*addFront*/ = PL$15/*getExtraFromPar*/(PL$18/*par*/, "addFront");
        ;
        if(PL$53/*addFront*/){
          PL$48/*funRes*/["push"](PL$53/*addFront*/);
        };
        ;
        if(PL$18/*par*/["promising"]){
          if(PL$26/*parGivenPromiseNameStr*/){
            this["returnPromise"] = PL$26/*parGivenPromiseNameStr*/;
          }else{
          this["returnPromise"] = this["getUniqueName"]();
          PL$48/*funRes*/["push"](this["declareReturnPromiseCode"]({
            "type": this["_returnType"],
            "name": this["returnPromise"],
            "constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$33/*parParsed*/)),
            "parsed": PL$33/*parParsed*/,
            "errorFun": this["getWarningFun"](PL$33/*parParsed*/)
          }));
          };
          ;
          this["tryCatchFunctionStr"] = this["getUniqueName"]("promiseland exception catcher");
          PL$48/*funRes*/["push"]([
            (("var " + this["tryCatchFunctionStr"]) + " = function(code){"), 
            this["indent"]([
              this["newLine"](), 
              "return function(res){", 
              this["indentNewLine"]([
                "try{ code(res); }catch(e){", 
                this["indentNewLine"]([
                  this["runBeforeReturnRes"], 
                  (this["returnPromise"] + ".reject(e);")
                ]), 
                "};"
              ]), 
              "};"
            ]), 
            this["newLine"](), 
            "};"
          ]);
          PL$48/*funRes*/["push"](this["newLine"]());
          this["catchFunctionStr"] = this["getUniqueName"]("catch rejected");
          PL$48/*funRes*/["push"]([
            (("var " + this["catchFunctionStr"]) + " = function(e){"), 
            this["indentNewLine"]([
              this["runBeforeReturnRes"], 
              (this["returnPromise"] + ".reject(e);")
            ]), 
            "};", 
            this["newLine"]()
          ]);
          this["promising"] = true;
          PL$21/*res*/["makePromising"]();
        };
        ;
        var PL$54/*b*/ = PL$18/*par*/["body"];
        ;
        var PL$55/*extraPar*/ = {
          
        };
        ;
        PL$54/*b*/["brackets"] = false;
        PL$55/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];
        PL$55/*extraPar*/["postCode"] = this["newResult"]();
        PL$55/*extraPar*/["postCode"]["push"](this["getReturnCode"]({
          
        }));
        PL$55/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);
        var PL$56/*block*/ = this["blockCreator"](PL$54/*b*/, PL$55/*extraPar*/);
        ;
        var PL$57/*localVariablesAr*/ = this["localVariables"]["getArray"]();
        ;
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$57/*localVariablesAr*/["length"]);++PL$31/*i*/){{
          var PL$58/*varname*/ = PL$57/*localVariablesAr*/[PL$31/*i*/]["key"];
          ;
          var PL$24/*type*/ = this["getVariableType"](PL$58/*varname*/);
          ;
          if(PL$57/*localVariablesAr*/[PL$31/*i*/]["value"]["localFunction"]){
          }else{
          if(PL$57/*localVariablesAr*/[PL$31/*i*/]["value"]["parameter"]){
            PL$48/*funRes*/["push"](this["getProcessParameterCode"]({
              "name": this["getVariableName"](PL$58/*varname*/),
              "type": PL$24/*type*/,
              "errorFun": this["getWarningFun"](PL$18/*par*/),
              "parsed": PL$18/*par*/
            }));
          }else{
          if(PL$57/*localVariablesAr*/[PL$31/*i*/]["value"]["declaration"]){
            PL$48/*funRes*/["push"](this["getDeclareVariableCode"]({
              "name": this["getVariableName"](PL$58/*varname*/),
              "type": PL$24/*type*/,
              "errorFun": this["getWarningFun"](PL$18/*par*/),
              "parsed": PL$18/*par*/,
              "declaration": PL$57/*localVariablesAr*/[PL$31/*i*/]["value"]["needsDeclaration"]
            }));
          }else{
          if(PL$57/*localVariablesAr*/[PL$31/*i*/]["value"]["isFunction"]){
          }else{
          debugger;
          };
          };
          };
          };
          if(! PL$27/*noUntrack*/){
            this["addBeforeReturn"](this["getDestroyVariableCode"]({
              "name": this["getVariableName"](PL$58/*varname*/),
              "type": PL$24/*type*/,
              "errorFun": this["getWarningFun"](PL$18/*par*/),
              "parsed": PL$18/*par*/
            }), this["isTrackedClassConRes"](PL$24/*type*/, PL$18/*par*/));
          };
          ;
          this["usedVariablesMap"]["set"](PL$58/*varname*/, false);}};
        ;
        if(this["usedVariablesMap"]["get"]("arguments")){
          PL$48/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;"));
          PL$48/*funRes*/["push"](this["newLine"]());
          this["usedVariablesMap"]["set"]("arguments", false);
        };
        ;
        PL$48/*funRes*/["push"](PL$52/*classesRes*/);
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < this["functionsAr"]["length"]);++PL$31/*i*/){{
          PL$48/*funRes*/["push"](this["functionsAr"][PL$31/*i*/]["res"]);
          PL$48/*funRes*/["push"](";");
          PL$48/*funRes*/["push"](this["newLine"]());}};
        ;
        if(PL$18/*par*/["promising"]){
          if(this["usingThis"]){
            PL$48/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;"));
            PL$48/*funRes*/["push"](this["newLine"]());
          };
          ;
          PL$48/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));
          PL$48/*funRes*/["push"](this["newLine"]());
        };
        ;
        PL$48/*funRes*/["push"](this["indent"](PL$56/*block*/));
        PL$47/*funDecl*/["push"](PL$48/*funRes*/);
        if(PL$18/*par*/["promising"]){
          PL$47/*funDecl*/["addPost"]("})();");
          PL$47/*funDecl*/["push"](this["newLine"]());
          PL$47/*funDecl*/["addPost"](this["returnReturnPromiseCode"]({
            "type": this["_returnType"],
            "name": this["returnPromise"],
            "parsed": PL$33/*parParsed*/,
            "errorFun": this["getWarningFun"](PL$33/*parParsed*/)
          }));
          PL$47/*funDecl*/["addPost"]("}");
        }else{
        PL$47/*funDecl*/["push"]("}");
        };
        ;
        var PL$59/*completeFun*/ = this["makeCompleteStatement"](PL$47/*funDecl*/);
        ;
        var PL$60/*funNameScrewUp*/ = false;
        ;
        if((this["promising"] && PL$39/*hasReturnTypeName*/)){
          var PL$61/*returnTypePromiseCheck*/ = this["newResult"]();
          ;
          PL$61/*returnTypePromiseCheck*/["push"]("(function(t){");
          PL$61/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({
            "type": this["_returnType"],
            "errorFun": this["getWarningFun"](PL$33/*parParsed*/),
            "parsed": PL$33/*parParsed*/
          }));
          PL$61/*returnTypePromiseCheck*/["push"]("return t;})(");
          PL$61/*returnTypePromiseCheck*/["push"](PL$59/*completeFun*/);
          PL$61/*returnTypePromiseCheck*/["push"](")");
          PL$59/*completeFun*/ = PL$61/*returnTypePromiseCheck*/;
          PL$60/*funNameScrewUp*/ = true;
        };
        ;
        if(PL$34/*funClosure*/){
          var PL$62/*handleExtras*/ = (function(PL$63/*dt*/){
          
            ;
            if(PL$63/*dt*/["extraTypes"]){
              var PL$31/*i*/ = 0;
              ;
              for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$63/*dt*/["extraTypes"]["length"]);++PL$31/*i*/){{
                PL$46/*extraTypesRes*/["push"](PL$63/*dt*/["extraTypes"][PL$31/*i*/]["res"]);
                PL$62/*handleExtras*/(PL$63/*dt*/["extraTypes"][PL$31/*i*/]["type"]);}};
              ;
            };
            ;
            ;});
          ;
          for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$42/*templateTypesAr*/["length"]);++PL$31/*i*/){{
            var PL$63/*dt*/ = this["getType"](PL$42/*templateTypesAr*/[PL$31/*i*/], PL$18/*par*/);
            ;
            PL$62/*handleExtras*/(PL$63/*dt*/);}};
          ;
          PL$34/*funClosure*/["push"](PL$59/*completeFun*/, PL$18/*par*/, {
            "stringEncode": true
          });
          PL$34/*funClosure*/["push"](";\"); return communicator.fun; })()");
          PL$59/*completeFun*/ = this["makeCompleteStatement"](PL$34/*funClosure*/);
          PL$60/*funNameScrewUp*/ = true;
        };
        ;
        var PL$64/*uniqueNameStr*/;
        ;
        if(PL$29/*runRemote*/){
          var PL$65/*remoteClosure*/ = this["newResult"]();
          ;
          PL$64/*uniqueNameStr*/ = this["getUniqueName"]();
          PL$65/*remoteClosure*/["push"]("(function(f){");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])));
          PL$65/*remoteClosure*/["push"](((((", " + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$64/*uniqueNameStr*/)) + ", f, "));
          PL$65/*remoteClosure*/["push"](this["renderType"](PL$40/*thisFunType*/, PL$33/*parParsed*/));
          PL$65/*remoteClosure*/["push"](");");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$18/*par*/["frame"]["name"]["value"])) + ")){"));
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("return ");
          PL$65/*remoteClosure*/["push"]("function(){");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("var i = 0; var l = arguments.length; var newArgs = [undefined];");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("return f.apply(this, newArgs);");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("};");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("}else{");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("return function(){");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$64/*uniqueNameStr*/)) + ", arguments);"));
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("}");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("};");
          PL$65/*remoteClosure*/["push"](this["newLine"]());
          PL$65/*remoteClosure*/["push"]("})(");
          PL$65/*remoteClosure*/["push"](PL$59/*completeFun*/);
          PL$65/*remoteClosure*/["push"](")");
          PL$21/*res*/["push"](PL$65/*remoteClosure*/);
          PL$60/*funNameScrewUp*/ = true;
        }else{
        PL$21/*res*/["push"](PL$59/*completeFun*/);
        };
        ;
        PL$21/*res*/["setType"](PL$40/*thisFunType*/);
        this["unstack"]("isClassObject");
        this["unstack"]("inheritedAvailable");
        this["unstack"]("thisType");
        var PL$66/*finalResult*/ = this["newResult"]();
        ;
        if(((PL$60/*funNameScrewUp*/ && PL$37/*hasName*/) && PL$36/*functionInfo*/["declaration"])){
          PL$66/*finalResult*/["push"]("var ");
          PL$66/*finalResult*/["push"](this["getVariableName"](PL$38/*nameStr*/));
          PL$66/*finalResult*/["push"](" = ");
          PL$49/*nameRes*/["replace"]("");
        };
        ;
        PL$66/*finalResult*/["push"](this["makeCompleteStatement"](PL$21/*res*/));
        PL$66/*finalResult*/["setType"](PL$40/*thisFunType*/);
        return PL$66/*finalResult*/;
        ;});
      this["expFunctionExpression"] = (function(PL$67/*value*/, PL$68/*declaration*/){
      
        ;
        if(! PL$68/*declaration*/){
          PL$67/*value*/["useLocalVariableName"] = true;
        };
        ;
        var PL$69/*cp*/ = this["newInstance"](PL$67/*value*/, {
          "dynamicCode": (this["dynamicCode"] || this["isFunction"]),
          "asmMode": this["asmMode"]
        });
        ;
        var PL$70/*funName*/ = PL$69/*cp*/["getFunctionName"]();
        ;
        var PL$48/*funRes*/ = PL$69/*cp*/["getFunctionRes"]();
        ;
        var PL$71/*uv*/ = PL$69/*cp*/["_getUsedVairablesMap"]();
        ;
        var PL$72/*name*/;
        ;
        PL$71/*uv*/["forEach"]((function(PL$67/*value*/, PL$72/*name*/){
        
          ;
          if((PL$67/*value*/ === true)){
            this["_addUsedVariable"](PL$72/*name*/);
          };
          ;
          ;}), this);
        var PL$21/*res*/;
        ;
        if(((PL$70/*funName*/ && PL$48/*funRes*/) && PL$68/*declaration*/)){
          if(this["asmMode"]){
            PL$67/*value*/["hoist"] = false;
            this["addFunction"](PL$48/*funRes*/, PL$70/*funName*/, PL$67/*value*/);
          }else{
          PL$67/*value*/["hoist"] = true;
          this["addFunction"](PL$48/*funRes*/, PL$70/*funName*/, PL$67/*value*/);
          if(PL$68/*declaration*/){
            PL$21/*res*/ = this["newResult"]((("/* function " + PL$70/*funName*/) + " (){} - hoisted */"));
            PL$21/*res*/["setType"](PL$16/*statementType*/);
          }else{
          PL$21/*res*/ = this["newResult"](this["getVariableName"](PL$70/*funName*/));
          PL$21/*res*/["setType"](PL$48/*funRes*/["getType"]());
          };
          ;
          return PL$21/*res*/;
          };
          ;
        };
        ;
        PL$21/*res*/ = this["newResult"]();
        if(! PL$68/*declaration*/){
          PL$21/*res*/["push"]("(");
        };
        ;
        PL$21/*res*/["pushType"]((PL$48/*funRes*/ || PL$69/*cp*/["getResult"]()));
        if(! PL$68/*declaration*/){
          PL$21/*res*/["push"](")");
        };
        ;
        return PL$21/*res*/;
        ;});
      this["expFunctionDeclaration"] = (function(PL$67/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$67/*value*/, true);
        ;});
      this["expMemberFunction"] = (function(PL$67/*value*/){
      
        ;
        return this["expFunctionExpression"](PL$67/*value*/);
        ;});
      this["functionsAr"] = [
        
      ];
      this["addFunction"] = (function(PL$21/*res*/, PL$72/*name*/, PL$20/*parsed*/){
      
        ;
        this["resolveFunctionType"]({
          "name": PL$13/*identifierName*/(PL$72/*name*/),
          "type": PL$21/*res*/["getType"]()
        }, PL$20/*parsed*/);
        if(PL$20/*parsed*/["hoist"]){
          this["functionsAr"]["push"]({
            "res": PL$21/*res*/,
            "name": PL$72/*name*/
          });
        };
        ;
        ;});
      this["getReturnCode"] = (function(PL$18/*par*/){
      
        ;
        var PL$35/*self*/ = this;
        ;
        var PL$21/*res*/ = this["newResult"]();
        ;
        if(this["promising"]){
          PL$21/*res*/["push"]((this["returnPromise"] + ".resolve("));
          if(PL$18/*par*/["value"]){
            PL$21/*res*/["push"](PL$18/*par*/["value"]);
          };
          ;
          PL$21/*res*/["push"]("); return");
        }else{
        if((PL$18/*par*/["return"] || PL$18/*par*/["value"])){
          PL$21/*res*/["push"]("return");
        };
        ;
        if(PL$18/*par*/["value"]){
          PL$21/*res*/["push"](" ");
          PL$21/*res*/["push"](PL$18/*par*/["value"]);
        };
        ;
        if((PL$18/*par*/["return"] || PL$18/*par*/["value"])){
        };
        ;
        };
        ;
        var PL$73/*falseRes*/ = PL$21/*res*/;
        ;
        var PL$74/*beforeReturnCode*/ = this["runBeforeReturnRes"];
        ;
        var PL$75/*newRes*/ = PL$35/*self*/["newResult"]();
        ;
        var PL$76/*valueRes*/ = PL$35/*self*/["newResult"]();
        ;
        if(PL$18/*par*/["value"]){
          PL$76/*valueRes*/["push"]("(function(ret){ ");
          PL$76/*valueRes*/["push"](PL$74/*beforeReturnCode*/);
          PL$76/*valueRes*/["push"]("return ret; })(");
          PL$76/*valueRes*/["push"](PL$18/*par*/["value"]);
          PL$76/*valueRes*/["push"](")");
        };
        ;
        if(PL$35/*self*/["promising"]){
          if(PL$18/*par*/["value"]){
            PL$75/*newRes*/["push"]((PL$35/*self*/["returnPromise"] + ".resolve("));
            PL$75/*newRes*/["push"](PL$76/*valueRes*/);
            PL$75/*newRes*/["push"]("); return;");
          }else{
          PL$75/*newRes*/["push"](PL$74/*beforeReturnCode*/);
          PL$75/*newRes*/["push"]((PL$35/*self*/["returnPromise"] + ".resolve("));
          PL$75/*newRes*/["push"]("); return;");
          };
          ;
        }else{
        if(PL$18/*par*/["value"]){
          PL$75/*newRes*/["push"]("return ");
          PL$75/*newRes*/["push"](PL$76/*valueRes*/);
          PL$75/*newRes*/["push"](";");
        }else{
        PL$75/*newRes*/["push"](PL$74/*beforeReturnCode*/);
        if(PL$18/*par*/["return"]){
          PL$75/*newRes*/["push"]("return;");
        };
        ;
        };
        ;
        };
        ;
        var PL$77/*trueRes*/ = PL$75/*newRes*/;
        ;
        var PL$78/*conditional*/ = this["createConditionalCode"](PL$77/*trueRes*/, PL$73/*falseRes*/);
        ;
        this["addBeforeReturnConditionFun"]((function(PL$79/*con*/){
        
          ;
          PL$78/*conditional*/["addCondition"](PL$79/*con*/);
          ;}));
        return PL$78/*conditional*/["res"];
        ;});
      this["addBeforeReturn"] = (function(PL$80/*parRes*/, PL$81/*parCondition*/){
      
        ;
        var PL$82/*condition*/ = PL$81/*parCondition*/;
        ;
        if((PL$81/*parCondition*/ === undefined)){
          PL$82/*condition*/ = true;
        };
        ;
        var PL$78/*conditional*/ = this["createConditionalCode"](PL$80/*parRes*/);
        ;
        PL$78/*conditional*/["addCondition"](PL$82/*condition*/);
        this["runBeforeReturnRes"]["push"](PL$78/*conditional*/["res"]);
        if(! this["beforeReturnExists"]){
          this["beforeReturnExists"] = true;
          var PL$83/*frontRes*/ = this["newResult"]();
          ;
          var PL$84/*endRes*/ = this["newResult"]();
          ;
          this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$83/*frontRes*/);
          this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$84/*endRes*/);
          this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);
          if(! this["promising"]){
            PL$83/*frontRes*/["push"]("try{");
            this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);
            PL$84/*endRes*/["push"]("}catch(e){");
            PL$84/*endRes*/["push"](this["runBeforeReturnRes"]);
            PL$84/*endRes*/["push"]("throw e};");
            this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);
          };
          ;
        };
        ;
        this["beforeReturnFrontConditional"]["addCondition"](PL$82/*condition*/);
        this["beforeReturnEndConditional"]["addCondition"](PL$82/*condition*/);
        this["addBeforeReturnCondition"](PL$82/*condition*/);
        ;});
      this["beforeReturnConditions"] = [
        
      ];
      this["addBeforeReturnCondition"] = (function(PL$81/*parCondition*/){
      
        ;
        this["beforeReturnConditions"]["push"](PL$81/*parCondition*/);
        var PL$31/*i*/ = 0;
        ;
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$31/*i*/){{
          this["beforeReturnConditionFuns"][PL$31/*i*/](PL$81/*parCondition*/);}};
        ;
        ;});
      this["beforeReturnConditionFuns"] = [
        
      ];
      this["addBeforeReturnConditionFun"] = (function(PL$85/*parFun*/){
      
        ;
        this["beforeReturnConditionFuns"]["push"](PL$85/*parFun*/);
        var PL$31/*i*/ = 0;
        ;
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < this["beforeReturnConditions"]["length"]);++PL$31/*i*/){{
          PL$85/*parFun*/(this["beforeReturnConditions"][PL$31/*i*/]);}};
        ;
        ;});
      ;});
    ;
    PL$19/*f*/["apply"](PL$17/*parInstance*/, [
      PL$18/*par*/
    ]);
    ;})); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();