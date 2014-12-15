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
    if (promiseland._hasModule({ hashStr: "b85cc577b7a3f7e919003a621ffe7cdc" })){ return promiseland._getModule("b85cc577b7a3f7e919003a621ffe7cdc"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b85cc577b7a3f7e919003a621ffe7cdc", "module": PL$1, promising: true });
var PL$6/*promiseland*/;try{PL$6/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*Map*/;
var PL$7/*classSystem*/;
var PL$8/*basics*/;
var PL$10/*errorFun*/;
var PL$11/*errorMsg*/;
var PL$12/*_stringEncodeStr*/;
var PL$13/*stringEncodeStr*/;
var PL$14/*VariableNames*/;
var PL$15/*mixin*/;
var PL$16/*identifierName*/;
var PL$17/*checkIsFunction*/;
var PL$18/*getExtraFromPar*/;
var PL$19/*statementType*/;
var PL$20/*checkPromising*/;
var PL$21/*blocksModule*/;
var PL$23/*loopsModule*/;
var PL$25/*conditionalsModule*/;
var PL$27/*literalsModule*/;
var PL$29/*classModule*/;
PL$3(function(){;
PL$5/*Map*/ = PL$6/*promiseland*/["Map"];
PL$7/*classSystem*/ = PL$6/*promiseland*/["classSystem"];
__requireFun("./basics").then(PL$3(function(PL$9){PL$8/*basics*/ = PL$9;
PL$10/*errorFun*/ = PL$8/*basics*/["errorFun"];
PL$11/*errorMsg*/ = PL$8/*basics*/["errorMsg"];
PL$12/*_stringEncodeStr*/ = PL$8/*basics*/["_stringEncodeStr"];
PL$13/*stringEncodeStr*/ = PL$8/*basics*/["stringEncodeStr"];
PL$14/*VariableNames*/ = PL$8/*basics*/["VariableNames"];
PL$15/*mixin*/ = PL$8/*basics*/["mixin"];
PL$16/*identifierName*/ = PL$8/*basics*/["identifierName"];
PL$17/*checkIsFunction*/ = PL$8/*basics*/["checkIsFunction"];
PL$18/*getExtraFromPar*/ = PL$8/*basics*/["getExtraFromPar"];
PL$19/*statementType*/ = PL$8/*basics*/["statementType"];
PL$20/*checkPromising*/ = PL$8/*basics*/["checkPromising"];
__requireFun("./blocks").then(PL$3(function(PL$22){PL$21/*blocksModule*/ = PL$22;
__requireFun("./loops").then(PL$3(function(PL$24){PL$23/*loopsModule*/ = PL$24;
__requireFun("./conditionals").then(PL$3(function(PL$26){PL$25/*conditionalsModule*/ = PL$26;
__requireFun("./literals").then(PL$3(function(PL$28){PL$27/*literalsModule*/ = PL$28;
__requireFun("./class").then(PL$3(function(PL$30){PL$29/*classModule*/ = PL$30;
PL$1.resolve((function(PL$31/*parInstance*/, PL$32/*par*/){
var PL$33/*f*/;
;
PL$33/*f*/ = (function(PL$32/*par*/){
;
PL$21/*blocksModule*/(this, PL$32/*par*/);;
PL$23/*loopsModule*/(this, PL$32/*par*/);;
PL$25/*conditionalsModule*/(this, PL$32/*par*/);;
PL$27/*literalsModule*/(this, PL$32/*par*/);;
PL$29/*classModule*/(this, PL$32/*par*/);;
this["parseExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["_parseExpression"](PL$32/*par*/);
if(! PL$34/*res*/["getType"]()){
this["error"](PL$32/*par*/, PL$11/*errorMsg*/["internalMissingResultType"]);;
};
;
PL$34/*res*/["setParsed"](PL$32/*par*/);;
return PL$34/*res*/;;
;
});;
this["_parseExpression"] = (function(PL$35/*value*/){
var PL$34/*res*/;
;
PL$34/*res*/;
switch (PL$35/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](PL$35/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](PL$35/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](PL$35/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](PL$35/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](PL$35/*value*/);;
case "CallExpression":
return this["expCallExpression"](PL$35/*value*/);;
case "Class":
return this["expClassStatement"](PL$35/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](PL$35/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](PL$35/*value*/);;
case "ConnectExpression":
return this["connectExpression"](PL$35/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](PL$35/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](PL$35/*value*/);;
case "EmptyStatement":
PL$34/*res*/ = this["newResult"]();;
PL$34/*res*/["setType"]("var");;
return PL$34/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](PL$35/*value*/);;
case "ForInStatement":
return this["expForInStatement"](PL$35/*value*/);;
case "ForStatement":
return this["expForStatement"](PL$35/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](PL$35/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](PL$35/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](PL$35/*value*/);;
case "Identifier":
return this["expIdentifier"](PL$35/*value*/);;
case "IfStatement":
return this["expIfStatement"](PL$35/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](PL$35/*value*/);;
case "Literal":
return this["expLiteral"](PL$35/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](PL$35/*value*/);;
case "NewExpression":
return this["expNewExpression"](PL$35/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](PL$35/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](PL$35/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](PL$35/*value*/);;
case "ThisExpression":
return this["expThisExpression"](PL$35/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](PL$35/*value*/);;
case "TryStatement":
return this["expTryStatement"](PL$35/*value*/);;
case "UnaryExpression":
if((PL$35/*value*/["operator"] == "*")){
return this["expPromiseExpression"](PL$35/*value*/["argument"]);;
};
;
if((PL$35/*value*/["operator"] == "require")){
return this["expRequireExpression"](PL$35/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](PL$35/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](PL$35/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](PL$35/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](PL$35/*value*/);;
case "WhileStatement":
return this["whileStatement"](PL$35/*value*/);;
default:
this["error"](PL$35/*value*/, PL$11/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(PL$36/*parParsed*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](PL$36/*parParsed*/["expression"])});
return PL$34/*res*/;;
;
});;
this["expThisExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
if(! this["promising"]){
PL$34/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
PL$34/*res*/["push"](this["thisExpression"]);;
};
;
PL$34/*res*/["setType"](this["thisType"]);;
return PL$34/*res*/;;
;
});;
this["expThrowStatement"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
PL$34/*res*/["push"]("throw ");;
PL$34/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$32/*par*/["argument"])));;
PL$34/*res*/["setType"](PL$19/*statementType*/);;
return PL$34/*res*/;;
;
});;
this["expTryStatement"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$37/*catchPromise*/;
var PL$38/*continuePromise*/;
var PL$39/*b*/;
var PL$40/*extraPar*/;
var PL$41/*temporaryPs*/;
;
PL$34/*res*/ = this["newResult"]();
PL$37/*catchPromise*/;
PL$38/*continuePromise*/;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
PL$38/*continuePromise*/ = this["getUniqueName"]();;
PL$34/*res*/["addPre"]((((("var " + PL$38/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$37/*catchPromise*/ = this["getUniqueName"]();;
PL$34/*res*/["addPre"]((((("var " + PL$37/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
PL$34/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + PL$37/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$34/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + PL$37/*catchPromise*/) + ".resolve(e); };\n"));;
PL$34/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
PL$34/*res*/["push"]("try\n");;
};
;
PL$39/*b*/ = PL$32/*par*/["block"];
PL$40/*extraPar*/ = {};
PL$39/*b*/["brackets"] = true;;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
PL$40/*extraPar*/["postCode"] = this["newResult"]((PL$38/*continuePromise*/ + ".resolve()"));;
};
;
PL$34/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$39/*b*/, PL$40/*extraPar*/)));;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
PL$34/*res*/["push"](")();\n");;
PL$34/*res*/["push"]((((PL$37/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
PL$34/*res*/["push"]("catch(");;
};
;
PL$41/*temporaryPs*/;
if((PL$32/*par*/["handler"] && PL$32/*par*/["handler"]["param"])){
PL$34/*res*/["push"](this["getVariableName"](PL$16/*identifierName*/(PL$32/*par*/["handler"]["param"])));;
PL$41/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": PL$16/*identifierName*/(PL$32/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, PL$32/*par*/["handler"]);;

}else{
PL$34/*res*/["push"]("__dummy");;
};
;
PL$34/*res*/["push"](")");;
if(PL$32/*par*/["handler"]){
PL$39/*b*/ = PL$32/*par*/["handler"]["body"];;
PL$40/*extraPar*/ = {};;
PL$39/*b*/["brackets"] = true;;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
PL$40/*extraPar*/["postCode"] = this["newResult"]((PL$38/*continuePromise*/ + ".resolve();"));;
};
;
PL$34/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$39/*b*/, PL$40/*extraPar*/)));;

}else{
PL$34/*res*/["push"]("{");;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
PL$34/*res*/["push"]((PL$38/*continuePromise*/ + ".resolve();"));;
};
;
PL$34/*res*/["push"]("}");;
};
;
if(PL$20/*checkPromising*/(PL$32/*par*/)){
PL$34/*res*/["push"]("));\n");;
PL$34/*res*/["push"](PL$38/*continuePromise*/);;
PL$34/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
PL$34/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(PL$32/*par*/["finally"]){
PL$34/*res*/["push"]("finally");;
PL$39/*b*/ = PL$32/*par*/["finally"];;
PL$39/*b*/["brackers"] = true;;
PL$34/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$39/*b*/)));;
};
;
if(PL$41/*temporaryPs*/){
PL$41/*temporaryPs*/["resolve"]();;
};
;
PL$34/*res*/["setType"](PL$19/*statementType*/);;
return PL$34/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
PL$34/*res*/["push"]("debugger");;
PL$34/*res*/["setType"](PL$19/*statementType*/);;
return PL$34/*res*/;;
;
});;
this["expFunctionExpression"] = (function(PL$35/*value*/, PL$42/*declaration*/){
var PL$43/*cp*/;
var PL$44/*funName*/;
var PL$45/*funRes*/;
var PL$46/*uv*/;
var PL$47/*name*/;
var PL$34/*res*/;
;
PL$43/*cp*/ = this["newInstance"](PL$35/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
PL$44/*funName*/ = PL$43/*cp*/["getFunctionName"]();
PL$45/*funRes*/ = PL$43/*cp*/["getFunctionRes"]();
PL$46/*uv*/ = PL$43/*cp*/["_getUsedVairables"]();
PL$47/*name*/;
for(PL$47/*name*/ in PL$46/*uv*/){if((PL$46/*uv*/[PL$47/*name*/] === true)){
this["_addUsedVariable"](PL$47/*name*/);;
};
;
};
;
PL$34/*res*/;
if((PL$44/*funName*/ && PL$45/*funRes*/)){
this["addFunction"](PL$45/*funRes*/, PL$44/*funName*/);;
PL$34/*res*/ = this["newResult"](this["getVariableName"](PL$44/*funName*/));;
PL$34/*res*/["setType"](PL$45/*funRes*/["getType"]());;
return PL$34/*res*/;;
};
;
PL$34/*res*/ = this["newResult"]();;
if(! PL$42/*declaration*/){
PL$34/*res*/["push"]("(");;
};
;
PL$34/*res*/["pushType"]((PL$45/*funRes*/ || PL$43/*cp*/["getResult"]()));;
if(! PL$42/*declaration*/){
PL$34/*res*/["push"](")");;
};
;
return PL$34/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(PL$35/*value*/){
;
return this["expFunctionExpression"](PL$35/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(PL$35/*value*/){
;
PL$35/*value*/["id"] = undefined;;
return this["expFunctionExpression"](PL$35/*value*/);;
;
});;
this["expUpdateExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
if(PL$32/*par*/["prefix"]){
PL$34/*res*/["push"](PL$32/*par*/["operator"]);;
};
;
PL$34/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$32/*par*/["argument"])));;
if(! PL$32/*par*/["prefix"]){
PL$34/*res*/["push"](PL$32/*par*/["operator"]);;
};
;
return PL$34/*res*/;;
;
});;
this["expIdentifier"] = (function(PL$32/*par*/){
;
return this["getVariable"](PL$16/*identifierName*/(PL$32/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
switch (typeof PL$32/*par*/["value"]){
case "string":
PL$34/*res*/["push"](PL$13/*stringEncodeStr*/(PL$32/*par*/["value"]));;
break;;
case "number":
PL$34/*res*/["push"](("" + PL$32/*par*/["value"]));;
break;;
case "boolean":
if(PL$32/*par*/["value"]){
PL$34/*res*/["push"]("true");;

}else{
PL$34/*res*/["push"]("false");;
};
;
break;;
default:
if((PL$32/*par*/["value"] === null)){
PL$34/*res*/["push"]("null");;

}else{
if((PL$32/*par*/["value"] && PL$32/*par*/["value"]["exec"])){
PL$34/*res*/["push"](("" + PL$32/*par*/["value"]));;

}else{
this["error"](PL$32/*par*/, PL$11/*errorMsg*/["internalUnknownLiteralType"]);;
};
};
;
}
;
;
PL$34/*res*/["setType"](this["getType"]("var"));;
return PL$34/*res*/;;
;
});;
this["expPromiseExpression"] = (function(PL$48/*parExpression*/){
var PL$34/*res*/;
var PL$49/*expressionRes*/;
var PL$50/*promiseNameStr*/;
var PL$51/*dereferencePre*/;
var PL$52/*preRes*/;
var PL$53/*dereferencePost*/;
var PL$54/*postRes*/;
var PL$55/*promiseType*/;
;
PL$34/*res*/ = this["newResult"]();
PL$49/*expressionRes*/ = this["parseExpression"](PL$48/*parExpression*/);
PL$50/*promiseNameStr*/ = this["getUniqueName"]();
PL$34/*res*/["makePromising"]();;
PL$34/*res*/["setPromiseName"](PL$50/*promiseNameStr*/);;
PL$51/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$49/*expressionRes*/});
PL$52/*preRes*/ = this["newResult"]();
PL$52/*preRes*/["push"](PL$51/*dereferencePre*/);;
PL$52/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$52/*preRes*/["push"](PL$50/*promiseNameStr*/);;
PL$52/*preRes*/["push"]("){");;
PL$34/*res*/["addPre"](PL$52/*preRes*/);;
PL$53/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$49/*expressionRes*/});
PL$54/*postRes*/ = this["newResult"]();
PL$54/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$54/*postRes*/["push"](PL$53/*dereferencePost*/);;
PL$54/*postRes*/["push"](";");;
PL$34/*res*/["addPost"](PL$54/*postRes*/);;
PL$55/*promiseType*/ = PL$49/*expressionRes*/["getType"]();
PL$34/*res*/["setType"](this["getClassFromPromiseOf"](PL$55/*promiseType*/));;
return PL$34/*res*/;;
;
});;
this["expUnaryExpression"] = (function(PL$48/*parExpression*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
PL$34/*res*/["push"](PL$48/*parExpression*/["operator"]);;
PL$34/*res*/["push"](" ");;
PL$34/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$48/*parExpression*/["argument"])));;
return PL$34/*res*/;;
;
});;
this["expRequireExpression"] = (function(PL$48/*parExpression*/){
var PL$34/*res*/;
var PL$49/*expressionRes*/;
var PL$50/*promiseNameStr*/;
var PL$51/*dereferencePre*/;
var PL$52/*preRes*/;
var PL$53/*dereferencePost*/;
var PL$54/*postRes*/;
;
PL$34/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
PL$49/*expressionRes*/ = this["newResult"]();
PL$49/*expressionRes*/["push"]("__requireFun(");;
PL$49/*expressionRes*/["push"](this["parseExpression"](PL$48/*parExpression*/));;
PL$49/*expressionRes*/["push"](")");;
PL$49/*expressionRes*/["setType"]("var");;
PL$50/*promiseNameStr*/ = this["getUniqueName"]();
PL$34/*res*/["makePromising"]();;
PL$34/*res*/["setPromiseName"](PL$50/*promiseNameStr*/);;
PL$51/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$49/*expressionRes*/});
PL$52/*preRes*/ = this["newResult"]();
PL$52/*preRes*/["push"](PL$51/*dereferencePre*/);;
PL$52/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$52/*preRes*/["push"](PL$50/*promiseNameStr*/);;
PL$52/*preRes*/["push"]("){");;
PL$34/*res*/["addPre"](PL$52/*preRes*/);;
PL$53/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$49/*expressionRes*/});
PL$54/*postRes*/ = this["newResult"]();
PL$54/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$54/*postRes*/["push"](PL$53/*dereferencePost*/);;
PL$54/*postRes*/["push"](";");;
PL$34/*res*/["addPost"](PL$54/*postRes*/);;
PL$34/*res*/["setType"]("var");;
return PL$34/*res*/;;
;
});;
this["expNewExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$56/*typed*/;
var PL$57/*type*/;
var PL$58/*i*/;
var PL$59/*constructorType*/;
var PL$60/*expression*/;
;
PL$34/*res*/ = this["newResult"]();
PL$56/*typed*/ = false;
PL$57/*type*/ = "var";
if((PL$32/*par*/["callee"] && (PL$32/*par*/["callee"]["type"] == "Identifier"))){
PL$57/*type*/ = this["getType"](PL$16/*identifierName*/(PL$32/*par*/["callee"]), PL$32/*par*/, {"dontThrow": true});;
if(PL$57/*type*/){
PL$34/*res*/["push"]("new ");;
PL$34/*res*/["push"](this["getConstructorName"](PL$32/*par*/["callee"]));;
PL$34/*res*/["push"]("(");;
PL$56/*typed*/ = true;;
PL$34/*res*/["setType"](this["getConstructorReturnType"](PL$57/*type*/));;
};
;
};
;
if(! PL$56/*typed*/){
PL$34/*res*/["push"]("new ");;
PL$34/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$32/*par*/["callee"])));;
PL$34/*res*/["push"]("(");;
};
;
PL$58/*i*/ = 0;
PL$59/*constructorType*/;
if(PL$56/*typed*/){
PL$59/*constructorType*/ = this["getConstructorType"]({"type": PL$57/*type*/}, PL$32/*par*/);;
};
;
for(PL$58/*i*/;(PL$58/*i*/ < PL$32/*par*/["arguments"]["length"]);++PL$58/*i*/){{if(PL$58/*i*/){
PL$34/*res*/["push"](", ");;
};
;
PL$60/*expression*/ = this["parseExpression"](PL$32/*par*/["arguments"][PL$58/*i*/]);
if(PL$56/*typed*/){
PL$34/*res*/["push"](this["getPassAsTypeCode"]({"value": PL$60/*expression*/,
"valueType": PL$60/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](PL$59/*constructorType*/, PL$58/*i*/, PL$32/*par*/),
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;

}else{
PL$34/*res*/["push"](this["expectTypeVar"](PL$60/*expression*/));;
};
;
}};
;
PL$34/*res*/["push"](")");;
if(! PL$56/*typed*/){
PL$34/*res*/["setType"]("var");;
};
;
return PL$34/*res*/;;
;
});;
this["connectExpression"] = (function(PL$36/*parParsed*/){
var PL$34/*res*/;
var PL$61/*signalObject*/;
var PL$62/*signalProperty*/;
var PL$63/*slotObject*/;
var PL$64/*slotProperty*/;
var PL$65/*fun*/;
;
PL$34/*res*/ = this["newResult"]();
if((PL$36/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](PL$36/*parParsed*/["signal"], PL$11/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$36/*parParsed*/["signal"]["computed"]){
this["error"](PL$36/*parParsed*/["signal"], PL$11/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$61/*signalObject*/ = this["parseExpression"](PL$36/*parParsed*/["signal"]["object"]);
PL$62/*signalProperty*/ = PL$16/*identifierName*/(PL$36/*parParsed*/["signal"]["property"]);
if(PL$36/*parParsed*/["slot"]){
if((PL$36/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](PL$36/*parParsed*/["slot"], PL$11/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$36/*parParsed*/["slot"]["computed"]){
this["error"](PL$36/*parParsed*/["slot"], PL$11/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$63/*slotObject*/ = this["parseExpression"](PL$36/*parParsed*/["slot"]["object"]);
PL$64/*slotProperty*/ = PL$16/*identifierName*/(PL$36/*parParsed*/["slot"]["property"]);
PL$34/*res*/["push"](this["connectSlotCode"]({"signalObject": PL$61/*signalObject*/,
"signalProperty": PL$62/*signalProperty*/,
"slotObject": PL$63/*slotObject*/,
"slotProperty": PL$64/*slotProperty*/,
"errorFun": this["getWarningFun"](PL$36/*parParsed*/)}));;

}else{
if(PL$36/*parParsed*/["fun"]){
PL$65/*fun*/ = this["parseExpression"](PL$36/*parParsed*/["fun"]);
PL$34/*res*/["push"](this["connectFunCode"]({"signalObject": PL$61/*signalObject*/,
"signalProperty": PL$62/*signalProperty*/,
"fun": PL$65/*fun*/,
"errorFun": this["getWarningFun"](PL$36/*parParsed*/)}));;

}else{
this["error"](PL$36/*parParsed*/, PL$11/*errorMsg*/["unknownConnect"]);;
};
};
;
PL$34/*res*/["setType"]("var");;
return PL$34/*res*/;;
;
});;
this["expBinaryExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$66/*left*/;
var PL$67/*right*/;
var PL$68/*ltype*/;
var PL$69/*rtype*/;
var PL$70/*tempPromise*/;
var PL$71/*tempValue*/;
var PL$72/*rightExtraCode*/;
;
PL$34/*res*/ = this["newResult"]();
PL$66/*left*/ = this["parseExpression"](PL$32/*par*/["left"]);
PL$67/*right*/ = this["parseExpression"](PL$32/*par*/["right"]);
PL$34/*res*/["setType"]("var");;
if(((PL$32/*par*/["operator"] == "||") && PL$32/*par*/["right"]["promising"])){
PL$68/*ltype*/ = PL$66/*left*/["getType"]();
PL$69/*rtype*/ = PL$67/*right*/["getType"]();
if(((PL$68/*ltype*/ !== this["getType"]("var")) || (PL$69/*rtype*/ !== this["getType"]("var")))){
this["error"](PL$32/*par*/, PL$11/*errorMsg*/["notImplemented"]);;
};
;
PL$34/*res*/["makePromising"]();;
PL$70/*tempPromise*/ = this["getUniqueName"]();
PL$71/*tempValue*/ = this["getUniqueName"]();
PL$34/*res*/["addPre"]("var ");;
PL$34/*res*/["addPre"](PL$70/*tempPromise*/);;
PL$34/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$34/*res*/["addPre"]("var ");;
PL$34/*res*/["addPre"](PL$71/*tempValue*/);;
PL$34/*res*/["addPre"](" = ");;
PL$34/*res*/["addPre"](PL$66/*left*/);;
PL$34/*res*/["addPre"](";\n");;
PL$34/*res*/["addPre"]("if (");;
PL$34/*res*/["addPre"](PL$71/*tempValue*/);;
PL$34/*res*/["addPre"]("){ ");;
PL$34/*res*/["addPre"](PL$70/*tempPromise*/);;
PL$34/*res*/["addPre"](".resolve(");;
PL$34/*res*/["addPre"](PL$71/*tempValue*/);;
PL$34/*res*/["addPre"](") }else{ ");;
PL$72/*rightExtraCode*/ = this["newResult"]();
PL$72/*rightExtraCode*/["push"](PL$70/*tempPromise*/);;
PL$72/*rightExtraCode*/["push"](".resolve(");;
PL$72/*rightExtraCode*/["push"](PL$67/*right*/);;
PL$72/*rightExtraCode*/["push"](");\n");;
PL$34/*res*/["addPre"](this["makeCompleteStatement"](PL$72/*rightExtraCode*/));;
PL$34/*res*/["addPre"]("};\n");;
PL$34/*res*/["addPre"](PL$70/*tempPromise*/);;
PL$34/*res*/["addPre"](".then(");;
PL$34/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$34/*res*/["addPre"](PL$34/*res*/["getPromiseName"]());;
PL$34/*res*/["addPre"]("){");;
PL$34/*res*/["addPost"]("});");;

}else{
PL$34/*res*/["push"](this["getBinaryExpressionCode"]({"left": PL$66/*left*/,
"right": PL$67/*right*/,
"operator": PL$32/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;
};
;
return PL$34/*res*/;;
;
});;
this["expMemberExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$73/*base*/;
;
PL$34/*res*/ = this["newResult"]();
PL$73/*base*/ = this["parseExpression"](PL$32/*par*/["object"]);
PL$34/*res*/["pushType"](this["getGetPropertyCode"]({"instance": PL$73/*base*/,
"property": (PL$32/*par*/["computed"] ? undefined : PL$16/*identifierName*/(PL$32/*par*/["property"])),
"propertyValue": (PL$32/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](PL$32/*par*/["property"])) : undefined),
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;
return PL$34/*res*/;;
;
});;
this["expVariableStatement"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$74/*declarations*/;
var PL$58/*i*/;
var PL$75/*l*/;
var PL$76/*usedType*/;
var PL$77/*r*/;
;
PL$34/*res*/ = this["newResult"]();
PL$74/*declarations*/ = PL$32/*par*/["declarations"];
if(! PL$74/*declarations*/){
this["error"](PL$32/*par*/, PL$11/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
PL$58/*i*/ = 0;
PL$75/*l*/ = PL$74/*declarations*/["length"];
PL$76/*usedType*/ = this["getType"](PL$16/*identifierName*/(PL$32/*par*/["typename"]), PL$32/*par*/);
for(PL$58/*i*/;(PL$58/*i*/ < PL$75/*l*/);++PL$58/*i*/){{if((PL$74/*declarations*/[PL$58/*i*/]["type"] == "VariableDeclaration")){
PL$77/*r*/ = this["parseExpression"](PL$74/*declarations*/[PL$58/*i*/]);
PL$34/*res*/["push"](PL$77/*r*/);;

}else{
this["error"](PL$74/*declarations*/[PL$58/*i*/], PL$11/*errorMsg*/["unknownType"]);;
};
;
}};
;
PL$34/*res*/["setType"](PL$76/*usedType*/);;
return PL$34/*res*/;;
;
});;
this["expVariableDeclaration"] = (function(PL$32/*par*/){
var PL$34/*res*/;
;
PL$34/*res*/ = this["newResult"]();
if(PL$32/*par*/["init"]){
PL$34/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](PL$16/*identifierName*/(PL$32/*par*/["id"])),
"assignmentType": PL$32/*par*/["id"]["type"],
"value": this["parseExpression"](PL$32/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;

}else{
PL$34/*res*/["pushType"](this["getVariable"](PL$16/*identifierName*/(PL$32/*par*/["id"])));;
};
;
return PL$34/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$73/*base*/;
var PL$78/*property*/;
var PL$79/*propertyValue*/;
;
PL$34/*res*/ = this["newResult"]();
if((PL$32/*par*/["left"]["type"] == "MemberExpression")){
PL$73/*base*/ = this["parseExpression"](PL$32/*par*/["left"]["object"]);
PL$78/*property*/;
PL$79/*propertyValue*/;
if(PL$32/*par*/["left"]["computed"]){
PL$79/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](PL$32/*par*/["left"]["property"]));;

}else{
PL$78/*property*/ = PL$16/*identifierName*/(PL$32/*par*/["left"]["property"]);;
};
;
PL$34/*res*/["pushType"](this["getSetPropertyCode"]({"instance": PL$73/*base*/,
"propertyValue": PL$79/*propertyValue*/,
"property": PL$78/*property*/,
"computed": PL$32/*par*/["left"]["computed"],
"value": this["parseExpression"](PL$32/*par*/["right"]),
"operator": PL$32/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;

}else{
PL$34/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](PL$32/*par*/["left"]),
"assignmentType": PL$32/*par*/["left"]["type"],
"value": this["parseExpression"](PL$32/*par*/["right"]),
"operator": PL$32/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;
};
;
return PL$34/*res*/;;
;
});;
this["expCallExpression"] = (function(PL$32/*par*/){
var PL$34/*res*/;
var PL$58/*i*/;
var PL$75/*l*/;
var PL$80/*calleeRes*/;
var PL$81/*args*/;
var PL$82/*argType*/;
var PL$83/*argRes*/;
;
PL$34/*res*/ = this["newResult"]();
PL$58/*i*/ = 0;
PL$75/*l*/;
PL$80/*calleeRes*/ = this["parseExpression"](PL$32/*par*/["callee"]);
PL$81/*args*/ = [];
if(PL$32/*par*/["arguments"]){
PL$75/*l*/ = PL$32/*par*/["arguments"]["length"];;
for(PL$58/*i*/ = 0;(PL$58/*i*/ < PL$75/*l*/);++PL$58/*i*/){{PL$82/*argType*/ = this["getFunctionArgumentType"](PL$80/*calleeRes*/["getType"](), PL$58/*i*/, PL$32/*par*/["arguments"][PL$58/*i*/]);
PL$83/*argRes*/ = this["parseExpression"](PL$32/*par*/["arguments"][PL$58/*i*/]);
PL$83/*argRes*/ = this["getPassAsTypeCode"]({"value": PL$83/*argRes*/,
"valueType": PL$83/*argRes*/["getType"](),
"type": PL$82/*argType*/,
"errorFun": this["getWarningFun"](PL$32/*par*/)});;
PL$81/*args*/["push"]({"type": PL$83/*argRes*/["getType"](),
"value": PL$83/*argRes*/});;
}};
;
};
;
PL$34/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": PL$80/*calleeRes*/["getType"](),
"instance": PL$80/*calleeRes*/,
"arguments": PL$81/*args*/}));;
PL$34/*res*/["setType"](this["getFunctionReturnType"](PL$80/*calleeRes*/["getType"](), PL$32/*par*/));;
return PL$34/*res*/;;
;
});;
this["expReturnStatement"] = (function(PL$32/*par*/, PL$84/*closingFun*/){
var PL$34/*res*/;
var PL$85/*valueRes*/;
var PL$86/*passAsType*/;
var PL$87/*v*/;
;
if(this["preventreturn"]){
this["error"](PL$32/*par*/, PL$11/*errorMsg*/["returnNotAllowedHere"]);;
};
;
PL$34/*res*/ = this["newResult"]();
PL$85/*valueRes*/;
if(PL$32/*par*/["argument"]){
PL$85/*valueRes*/ = this["newResult"]();;
PL$86/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
PL$86/*passAsType*/ = this["getClassFromPromiseOf"](PL$86/*passAsType*/);;
};
;
PL$86/*passAsType*/ = this["createTemporaryTrackedClass"](PL$86/*passAsType*/);;
PL$87/*v*/ = this["parseExpression"](PL$32/*par*/["argument"]);
PL$85/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": PL$87/*v*/,
"valueType": PL$87/*v*/["getType"](),
"type": PL$86/*passAsType*/,
"errorFun": this["getWarningFun"](PL$32/*par*/)}));;
};
;
PL$34/*res*/["push"](this["getReturnCode"]({"return": true,
"value": PL$85/*valueRes*/}));;
PL$34/*res*/["setType"](PL$19/*statementType*/);;
return PL$34/*res*/;;
;
});;
;
});
PL$33/*f*/["apply"](PL$31/*parInstance*/, [PL$32/*par*/]);;
;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
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