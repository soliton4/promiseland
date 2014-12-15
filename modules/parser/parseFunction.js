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
    if (promiseland._hasModule({ hashStr: "327db0e81a5e2818dc2e069ac170efd5" })){ return promiseland._getModule("327db0e81a5e2818dc2e069ac170efd5"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "327db0e81a5e2818dc2e069ac170efd5", "module": PL$1, promising: true });
var PL$33/*Promise*/;try{PL$33/*Promise*/ = Promise;}catch(e){};
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
this["parseFunction"] = (function(PL$17/*par*/){
var PL$19/*res*/;

;
this["stack"]("isFunction");
this["isFunction"] = true;
PL$19/*res*/ = this["_parseFunction"](PL$17/*par*/);
this["unstack"]("isFunction");
return PL$19/*res*/;;
;});
this["_parseFunction"] = (function(PL$17/*par*/, PL$20/*parJsn*/){
var PL$21/*parGivenPromiseNameStr*/;
var PL$22/*noUntrack*/;
var PL$23/*hasFrameInfo*/;
var PL$24/*runRemote*/;
var PL$25/*runExclusive*/;
var PL$26/*i*/;
var PL$27/*typename*/;
var PL$28/*parParsed*/;
var PL$29/*funClosure*/;
var PL$30/*self*/;
var PL$31/*hasName*/;
var PL$32/*nameStr*/;
var PL$34/*templateTypesAr*/;
var PL$35/*templateTypes*/;
var PL$36/*typeVarInit*/;
var PL$37/*p*/;
var PL$38/*extraTypesRes*/;
var PL$19/*res*/;
var PL$39/*funDecl*/;
var PL$40/*funRes*/;
var PL$41/*l*/;
var PL$42/*classesRes*/;
var PL$43/*addFront*/;
var PL$44/*b*/;
var PL$45/*extraPar*/;
var PL$46/*block*/;
var PL$47/*localVariablesAr*/;
var PL$48/*varname*/;
var PL$49/*type*/;
var PL$50/*completeFun*/;
var PL$51/*returnTypePromiseCheck*/;
var PL$52/*handleExtras*/;
var PL$53/*dt*/;
var PL$54/*thisFunType*/;
var PL$55/*uniqueNameStr*/;
var PL$56/*remoteClosure*/;
var PL$57/*finalResult*/;

;
PL$20/*parJsn*/ = (PL$20/*parJsn*/ || {});
PL$21/*parGivenPromiseNameStr*/ = PL$20/*parJsn*/["promiseName"];
PL$22/*noUntrack*/ = PL$20/*parJsn*/["noUntrack"];
PL$23/*hasFrameInfo*/ = false;
PL$24/*runRemote*/ = false;
PL$25/*runExclusive*/ = false;
PL$26/*i*/ = 0;
PL$27/*typename*/;
PL$28/*parParsed*/ = PL$17/*par*/;
PL$29/*funClosure*/;
PL$30/*self*/ = this;
PL$31/*hasName*/ = false;
PL$32/*nameStr*/;
if(PL$17/*par*/["id"]){
  PL$32/*nameStr*/ = PL$13/*identifierName*/(PL$17/*par*/["id"]);
  PL$31/*hasName*/ = true;
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
this["beforeReturnExistsPs"] = new PL$33/*Promise*/();
this["additionalCodeFrontRes"] = this["newResult"]();
this["additionalCodeEndRes"] = this["newResult"]();
this["stack"]("isClassObject");
this["isClassObject"] = false;
if(PL$17/*par*/["returnTypename"]){
  this["_returnType"] = this["getType"](PL$17/*par*/["returnTypename"], PL$17/*par*/);
}else{
this["_returnType"] = this["getType"]("var");
};
;
if((PL$17/*par*/["frame"] && PL$17/*par*/["frame"]["name"])){
  PL$23/*hasFrameInfo*/ = true;
  if((PL$17/*par*/["frame"]["type"] == "frame")){
    PL$24/*runRemote*/ = true;
    PL$17/*par*/["promising"] = true;
    if(this["dynamicCode"]){
      this["error"](PL$17/*par*/, PL$8/*errorMsg*/["functionFrameInDynamicCode"]);
    };
    ;
  }else{
  if((PL$17/*par*/["frame"]["type"] == "exclusive")){
    PL$25/*runExclusive*/ = true;
  };
  };
  ;
};
;
PL$34/*templateTypesAr*/ = [];
if((PL$17/*par*/["template"] && PL$17/*par*/["template"]["properties"]["length"])){
  PL$35/*templateTypes*/ = this["getTemplateProperty"](PL$17/*par*/["template"], "types", "ObjectExpression");
  if(PL$35/*templateTypes*/){
    PL$36/*typeVarInit*/ = this["newResult"]();
    for(PL$26/*i*/ = 0;(PL$26/*i*/ < PL$35/*templateTypes*/["properties"]["length"]);++PL$26/*i*/){{
      PL$37/*p*/ = PL$35/*templateTypes*/["properties"][PL$26/*i*/];
      PL$27/*typename*/ = PL$13/*identifierName*/(PL$37/*p*/["key"]);
      this["addType"]({"name": PL$27/*typename*/,
"dynamic": true}, PL$37/*p*/["value"]);
      if(! PL$29/*funClosure*/){
        PL$29/*funClosure*/ = this["newResult"]();
        PL$29/*funClosure*/["push"]("(function(){");
      };
      ;
      PL$36/*typeVarInit*/["push"]("var ");
      PL$36/*typeVarInit*/["push"](this["renderType"](PL$27/*typename*/));
      PL$36/*typeVarInit*/["push"](" = ");
      PL$36/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$37/*p*/["value"])));
      PL$36/*typeVarInit*/["push"](";\n");
      PL$36/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$27/*typename*/)) + " = "));
      PL$36/*typeVarInit*/["push"](this["renderType"](PL$27/*typename*/));
      PL$36/*typeVarInit*/["push"]("\n;");
      PL$36/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$27/*typename*/)) + " = undefined;\n"));
      PL$36/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$27/*typename*/}));
      PL$34/*templateTypesAr*/["push"](PL$27/*typename*/);}};
    ;
    PL$29/*funClosure*/["push"](PL$36/*typeVarInit*/);
  };
  ;
};
;
PL$38/*extraTypesRes*/ = this["newResult"]();
if(PL$29/*funClosure*/){
  PL$29/*funClosure*/["push"]("var communicator = {fun: undefined};\n");
  PL$29/*funClosure*/["push"](PL$38/*extraTypesRes*/);
  PL$29/*funClosure*/["push"]("eval(\"communicator.fun = ");
};
;
PL$19/*res*/ = this["newResult"]();
PL$39/*funDecl*/ = this["newResult"]();
PL$40/*funRes*/ = this["newResult"]();
PL$26/*i*/ = 0;
PL$39/*funDecl*/["push"]("function");
if(PL$31/*hasName*/){
  this["functionName"] = PL$32/*nameStr*/;
};
;
PL$39/*funDecl*/["push"]("(");
if((PL$17/*par*/["params"] && PL$17/*par*/["params"]["length"])){
  PL$26/*i*/ = 0;
  PL$41/*l*/ = PL$17/*par*/["params"]["length"];
  for(PL$26/*i*/;(PL$26/*i*/ < PL$41/*l*/);++PL$26/*i*/){{
    if(PL$26/*i*/){
      PL$39/*funDecl*/["push"](", ");
    };
    ;
    PL$39/*funDecl*/["push"](this["getVariableName"](PL$13/*identifierName*/(PL$17/*par*/["params"][PL$26/*i*/]["name"])));
    this["addLocalVariable"]({"name": PL$17/*par*/["params"][PL$26/*i*/]["name"],
"typename": (PL$17/*par*/["params"][PL$26/*i*/]["typename"] || "var"),
"parameter": true}, PL$17/*par*/["params"][PL$26/*i*/]);}};
  ;
};
;
PL$39/*funDecl*/["push"]("){");
PL$40/*funRes*/["push"](this["newLine"]());
PL$42/*classesRes*/ = this["findClasses"](PL$17/*par*/["body"]);
this["findVariables"](PL$17/*par*/["body"]);
if(PL$25/*runExclusive*/){
  PL$40/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])) + ")){"));
  PL$40/*funRes*/["push"](this["newLine"]());
  if(PL$17/*par*/["promising"]){
    PL$40/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));
    PL$40/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");
    PL$40/*funRes*/["push"]("return p;\n");
  }else{
  PL$40/*funRes*/["push"]("return;\n");
  };
  ;
  PL$40/*funRes*/["push"]("};\n");
};
;
PL$43/*addFront*/ = PL$15/*getExtraFromPar*/(PL$17/*par*/, "addFront");
if(PL$43/*addFront*/){
  PL$40/*funRes*/["push"](PL$43/*addFront*/);
};
;
if(PL$17/*par*/["promising"]){
  if(PL$21/*parGivenPromiseNameStr*/){
    this["returnPromise"] = PL$21/*parGivenPromiseNameStr*/;
  }else{
  this["returnPromise"] = this["getUniqueName"]();
  PL$40/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$28/*parParsed*/)),
"parsed": PL$28/*parParsed*/,
"errorFun": this["getWarningFun"](PL$28/*parParsed*/)}));
  };
  ;
  this["tryCatchFunctionStr"] = this["getUniqueName"]();
  PL$40/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));
  PL$40/*funRes*/["push"](this["runBeforeReturnRes"]);
  PL$40/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));
  this["catchFunctionStr"] = this["getUniqueName"]();
  PL$40/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));
  PL$40/*funRes*/["push"](this["runBeforeReturnRes"]);
  PL$40/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));
  this["promising"] = true;
  PL$19/*res*/["makePromising"]();
};
;
PL$44/*b*/ = PL$17/*par*/["body"];
PL$45/*extraPar*/ = {};
PL$44/*b*/["brackets"] = false;
PL$45/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];
PL$45/*extraPar*/["postCode"] = this["newResult"]();
PL$45/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));
PL$45/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);
PL$46/*block*/ = this["blockCreator"](PL$44/*b*/, PL$45/*extraPar*/);
PL$47/*localVariablesAr*/ = this["localVariables"]["getArray"]();
for(PL$26/*i*/ = 0;(PL$26/*i*/ < PL$47/*localVariablesAr*/["length"]);++PL$26/*i*/){{
  PL$48/*varname*/ = PL$47/*localVariablesAr*/[PL$26/*i*/]["key"];
  PL$49/*type*/ = this["getVariableType"](PL$48/*varname*/);
  if(PL$47/*localVariablesAr*/[PL$26/*i*/]["value"]["parameter"]){
    PL$40/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$48/*varname*/),
"type": PL$49/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}));
  }else{
  PL$40/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$48/*varname*/),
"type": PL$49/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}));
  };
  ;
  if(! PL$22/*noUntrack*/){
    this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$48/*varname*/),
"type": PL$49/*type*/,
"errorFun": this["getWarningFun"](PL$17/*par*/),
"parsed": PL$17/*par*/}), this["isTrackedClassConRes"](PL$49/*type*/, PL$17/*par*/));
  };
  ;
  this["usedVariables"][PL$48/*varname*/] = false;}};
;
if(this["usedVariables"]["arguments"]){
  PL$40/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));
  this["usedVariables"]["arguments"] = false;
};
;
PL$40/*funRes*/["push"](PL$42/*classesRes*/);
for(PL$26/*i*/ = 0;(PL$26/*i*/ < this["functionsAr"]["length"]);++PL$26/*i*/){{
  PL$40/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][PL$26/*i*/]["name"])) + " = "));
  PL$40/*funRes*/["push"](this["functionsAr"][PL$26/*i*/]["res"]);
  PL$40/*funRes*/["push"](";\n");}};
;
if(PL$17/*par*/["promising"]){
  if(this["usingThis"]){
    PL$40/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));
  };
  ;
  PL$40/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));
  PL$40/*funRes*/["push"](this["newLine"]());
};
;
PL$40/*funRes*/["push"](this["indent"](PL$46/*block*/));
PL$39/*funDecl*/["push"](PL$40/*funRes*/);
if(PL$17/*par*/["promising"]){
  PL$39/*funDecl*/["addPost"]("})();\n");
  PL$39/*funDecl*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$28/*parParsed*/,
"errorFun": this["getWarningFun"](PL$28/*parParsed*/)}));
  PL$39/*funDecl*/["addPost"]("}");
}else{
PL$39/*funDecl*/["push"]("}");
};
;
PL$50/*completeFun*/ = this["makeCompleteStatement"](PL$39/*funDecl*/);
if((this["promising"] && PL$17/*par*/["returnTypename"])){
  PL$51/*returnTypePromiseCheck*/ = this["newResult"]();
  PL$51/*returnTypePromiseCheck*/["push"]("(function(t){");
  PL$51/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$28/*parParsed*/),
"parsed": PL$28/*parParsed*/}));
  PL$51/*returnTypePromiseCheck*/["push"]("return t;})(");
  PL$51/*returnTypePromiseCheck*/["push"](PL$50/*completeFun*/);
  PL$51/*returnTypePromiseCheck*/["push"](")");
  PL$50/*completeFun*/ = PL$51/*returnTypePromiseCheck*/;
};
;
if(PL$29/*funClosure*/){
  PL$52/*handleExtras*/ = (function(PL$53/*dt*/){
var PL$26/*i*/;

  ;
  if(PL$53/*dt*/["extraTypes"]){
    PL$26/*i*/ = 0;
    for(PL$26/*i*/ = 0;(PL$26/*i*/ < PL$53/*dt*/["extraTypes"]["length"]);++PL$26/*i*/){{
      PL$38/*extraTypesRes*/["push"](PL$53/*dt*/["extraTypes"][PL$26/*i*/]["res"]);
      PL$52/*handleExtras*/(PL$53/*dt*/["extraTypes"][PL$26/*i*/]["type"]);}};
    ;
  };
  ;
  ;});
  for(PL$26/*i*/ = 0;(PL$26/*i*/ < PL$34/*templateTypesAr*/["length"]);++PL$26/*i*/){{
    PL$53/*dt*/ = this["getType"](PL$34/*templateTypesAr*/[PL$26/*i*/], PL$17/*par*/);
    PL$52/*handleExtras*/(PL$53/*dt*/);}};
  ;
  PL$29/*funClosure*/["push"](PL$50/*completeFun*/, PL$17/*par*/, {"stringEncode": true});
  PL$29/*funClosure*/["push"](";\"); return communicator.fun; })()");
  PL$50/*completeFun*/ = this["makeCompleteStatement"](PL$29/*funClosure*/);
};
;
PL$54/*thisFunType*/ = this["getFunctionType"](PL$17/*par*/);
PL$55/*uniqueNameStr*/;
if(PL$24/*runRemote*/){
  PL$56/*remoteClosure*/ = this["newResult"]();
  PL$55/*uniqueNameStr*/ = this["getUniqueName"]();
  PL$56/*remoteClosure*/["push"]("(function(f){\n");
  PL$56/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])));
  PL$56/*remoteClosure*/["push"](((((", " + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$55/*uniqueNameStr*/)) + ", f, "));
  PL$56/*remoteClosure*/["push"](this["renderType"](PL$54/*thisFunType*/, PL$28/*parParsed*/));
  PL$56/*remoteClosure*/["push"](");\n");
  PL$56/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$10/*stringEncodeStr*/(PL$17/*par*/["frame"]["name"]["value"])) + ")){\n"));
  PL$56/*remoteClosure*/["push"]("return f;\n");
  PL$56/*remoteClosure*/["push"]("}else{\n");
  PL$56/*remoteClosure*/["push"]("return function(){\n");
  PL$56/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$10/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$10/*stringEncodeStr*/(PL$55/*uniqueNameStr*/)) + ", arguments);\n"));
  PL$56/*remoteClosure*/["push"]("}\n");
  PL$56/*remoteClosure*/["push"]("};\n");
  PL$56/*remoteClosure*/["push"]("})(");
  PL$56/*remoteClosure*/["push"](PL$50/*completeFun*/);
  PL$56/*remoteClosure*/["push"](")");
  PL$19/*res*/["push"](PL$56/*remoteClosure*/);
}else{
PL$19/*res*/["push"](PL$50/*completeFun*/);
};
;
PL$19/*res*/["setType"](PL$54/*thisFunType*/);
this["unstack"]("isClassObject");
this["unstack"]("inheritedAvailable");
this["unstack"]("thisType");
PL$57/*finalResult*/ = this["newResult"]();
PL$57/*finalResult*/["push"](this["makeCompleteStatement"](PL$19/*res*/));
PL$57/*finalResult*/["setType"](PL$54/*thisFunType*/);
return PL$57/*finalResult*/;;
;});
;});
PL$18/*f*/["apply"](PL$16/*parInstance*/, [PL$17/*par*/]);
;})); return;;
PL$1.resolve(); return;;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();