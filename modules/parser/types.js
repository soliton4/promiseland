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
    if (promiseland._hasModule({ hashStr: "e7ec99e6f592a47baa884525a79bc90a" })){ return promiseland._getModule("e7ec99e6f592a47baa884525a79bc90a"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "e7ec99e6f592a47baa884525a79bc90a", "module": PL$1, promising: true });
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
PL$1.resolve((function(PL$19/*parInstance*/, PL$20/*par*/){
var PL$21/*f*/;
;
PL$21/*f*/ = (function(PL$20/*par*/){
;
this["types"] = new PL$5/*Map*/()["mixin"](PL$20/*par*/["types"]);;
if(! this["types"]["get"]("var")){
this["types"]["set"]("var", {"name": "var",
"type": PL$7/*classSystem*/["getBuiltinType"]("var")});;
};
this["compareTypes"] = (function(PL$22/*par1*/, PL$23/*par2*/){
;
return (PL$22/*par1*/ === PL$23/*par2*/);;
;
});;
this["resolveFunctionType"] = (function(PL$20/*par*/, PL$24/*parsed*/){
var PL$25/*name*/;
var PL$26/*entry*/;
var PL$27/*t*/;
;
PL$25/*name*/ = PL$16/*identifierName*/(PL$20/*par*/["name"]);
PL$26/*entry*/ = this["localVariables"]["get"](PL$25/*name*/);
if(PL$26/*entry*/["needsResolving"]){
PL$26/*entry*/["needsResolving"] = false;;
PL$27/*t*/ = PL$26/*entry*/["type"];
PL$26/*entry*/["type"] = PL$20/*par*/["type"];;
this["resolveProvisional"](PL$27/*t*/, PL$20/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": PL$20/*par*/["name"],
"type": PL$20/*par*/["type"]}, PL$24/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(PL$28/*parParsed*/){
var PL$29/*type*/;
var PL$30/*ps*/;
;
if(! PL$28/*parParsed*/){
PL$10/*errorFun*/({}, PL$11/*errorMsg*/["internalParserInfoMissing"]);;
};
;
PL$29/*type*/ = PL$7/*classSystem*/["_createProvisionalClass"]();
PL$30/*ps*/ = this["addError"](PL$28/*parParsed*/, PL$11/*errorMsg*/["unresolvedType"]);
PL$7/*classSystem*/["definitionPromise"](PL$29/*type*/)["then"]((function(){
;
PL$30/*ps*/["resolve"]();;
;
}));;
return PL$29/*type*/;;
;
});;
this["resolveProvisional"] = (function(PL$31/*parType*/, PL$32/*parResult*/){
;
return PL$7/*classSystem*/["_resolveProvisional"](PL$31/*parType*/, PL$32/*parResult*/);;
;
});;
this["getUniqueTypeMacro"] = (function(PL$25/*name*/){
var PL$33/*uniqueStr*/;
var PL$34/*res*/;
;
PL$33/*uniqueStr*/ = this["getUniqueName"]();
PL$34/*res*/ = (((("/*\n'''\"\"\" " + PL$33/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " start */");
PL$34/*res*/ += this["runtimeErrorNoWarning"](PL$11/*errorMsg*/["failedToDetermineType"]);;
PL$34/*res*/ += (((("/* " + PL$33/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " end */");;
return PL$34/*res*/;;
;
});;
this["renderType"] = (function(PL$31/*parType*/, PL$28/*parParsed*/){
var PL$34/*res*/;
var PL$35/*self*/;
var PL$36/*typeExpression*/;
var PL$37/*renderTypeName*/;
var PL$42/*errPs*/;
var PL$25/*name*/;
;
PL$34/*res*/ = this["newResult"]();
PL$34/*res*/["setType"]("var");;
PL$35/*self*/ = this;
PL$36/*typeExpression*/;
PL$37/*renderTypeName*/ = (function(PL$38/*parType1*/, PL$39/*parType2*/){
var PL$40/*i*/;
var PL$41/*typesAr*/;
var PL$25/*name*/;
;
PL$40/*i*/;
PL$41/*typesAr*/ = PL$35/*self*/["types"]["getArray"]();
for(PL$40/*i*/ = 0;(PL$40/*i*/ < PL$41/*typesAr*/["length"]);++PL$40/*i*/){{if(((PL$41/*typesAr*/[PL$40/*i*/]["value"]["type"] === PL$38/*parType1*/) || (PL$41/*typesAr*/[PL$40/*i*/]["value"]["type"] === PL$39/*parType2*/))){
if(PL$35/*self*/["isVar"](PL$41/*typesAr*/[PL$40/*i*/]["value"]["type"])){
PL$35/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
PL$25/*name*/ = PL$41/*typesAr*/[PL$40/*i*/]["key"];
if(! PL$35/*self*/["common"]["givenTypeNames"][PL$25/*name*/]){
PL$35/*self*/["common"]["givenTypeNames"][PL$25/*name*/] = (((PL$35/*self*/["getUniqueName"]() + "/*type:") + PL$25/*name*/) + "*/");;
};
;
return PL$35/*self*/["common"]["givenTypeNames"][PL$25/*name*/];;
};
;
}};
;
;
});
if((typeof PL$31/*parType*/ == "function")){
PL$42/*errPs*/ = this["addError"](PL$28/*parParsed*/, PL$11/*errorMsg*/["internalMissingType"]);
PL$7/*classSystem*/["readyPromise"](PL$31/*parType*/)["then"]((function(PL$43/*resolvedType*/){
var PL$44/*replace*/;
var PL$36/*typeExpression*/;
var PL$40/*i*/;
var PL$45/*l*/;
;
PL$44/*replace*/ = PL$35/*self*/["newResult"]();
PL$36/*typeExpression*/ = PL$37/*renderTypeName*/(PL$31/*parType*/, PL$43/*resolvedType*/);
if(PL$36/*typeExpression*/){
PL$44/*replace*/["push"](PL$36/*typeExpression*/);;
PL$34/*res*/["push"](PL$44/*replace*/);;
PL$42/*errPs*/["resolve"]();;
return;;
};
;
if(PL$7/*classSystem*/["isFunctionType"](PL$43/*resolvedType*/)){
PL$40/*i*/;
PL$35/*self*/["common"]["useClassSystem"] = true;;
PL$44/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
PL$44/*replace*/["push"](PL$35/*self*/["renderType"](PL$35/*self*/["getClassFromTemporaryTracked"](PL$35/*self*/["getFunctionReturnType"](PL$43/*resolvedType*/, PL$28/*parParsed*/), PL$28/*parParsed*/), PL$28/*parParsed*/));;
PL$44/*replace*/["push"](", arguments: [");;
PL$45/*l*/ = PL$35/*self*/["getFunctionArgumentCount"](PL$43/*resolvedType*/);
for(PL$40/*i*/ = 0;(PL$40/*i*/ < PL$45/*l*/);++PL$40/*i*/){{if(PL$40/*i*/){
PL$44/*replace*/["push"](", ");;
};
;
PL$44/*replace*/["push"](PL$35/*self*/["renderType"](PL$35/*self*/["getClassFromTemporaryTracked"](PL$35/*self*/["getFunctionArgumentType"](PL$43/*resolvedType*/, PL$40/*i*/, PL$28/*parParsed*/), PL$28/*parParsed*/), PL$28/*parParsed*/));;
}};
;
PL$44/*replace*/["push"]("]}))");;
PL$34/*res*/["push"](PL$44/*replace*/);;
PL$42/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return PL$34/*res*/;;

}else{
if(PL$31/*parType*/["isDynamic"]){
PL$36/*typeExpression*/ = PL$37/*renderTypeName*/(PL$31/*parType*/, PL$31/*parType*/);;
if(PL$36/*typeExpression*/){
PL$34/*res*/["push"](PL$36/*typeExpression*/);;

}else{
PL$34/*res*/["push"](this["addError"](PL$28/*parParsed*/, PL$11/*errorMsg*/["internalMissingType"]));;
};
;

}else{
PL$25/*name*/ = PL$16/*identifierName*/(PL$31/*parType*/);
PL$31/*parType*/ = this["getType"](PL$25/*name*/, PL$28/*parParsed*/);;
PL$36/*typeExpression*/ = PL$37/*renderTypeName*/(PL$31/*parType*/, PL$31/*parType*/);;
if(PL$36/*typeExpression*/){
PL$34/*res*/["push"](PL$36/*typeExpression*/);;

}else{
PL$34/*res*/["push"](this["addError"](PL$28/*parParsed*/, PL$11/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return PL$34/*res*/;;
;
});;
this["getFunctionType"] = (function(PL$20/*par*/){
var PL$46/*isTyped*/;
var PL$47/*functionTypeParam*/;
var PL$40/*i*/;
var PL$45/*l*/;
var PL$48/*tempTypename*/;
;
PL$46/*isTyped*/ = false;
PL$47/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(PL$20/*par*/["returnTypename"]){
PL$46/*isTyped*/ = true;;
PL$47/*functionTypeParam*/["return"] = this["getType"](PL$20/*par*/["returnTypename"]);;
};
;
if((PL$20/*par*/["params"] && PL$20/*par*/["params"]["length"])){
PL$40/*i*/ = 0;
PL$45/*l*/ = PL$20/*par*/["params"]["length"];
for(PL$40/*i*/;(PL$40/*i*/ < PL$45/*l*/);++PL$40/*i*/){{PL$48/*tempTypename*/ = PL$16/*identifierName*/((PL$20/*par*/["params"][PL$40/*i*/]["typename"] || "var"));
PL$47/*functionTypeParam*/["arguments"]["push"](this["getType"](PL$48/*tempTypename*/, PL$20/*par*/));;
if((PL$48/*tempTypename*/ != "var")){
PL$46/*isTyped*/ = true;;
};
;
}};
;
};
;
if(PL$46/*isTyped*/){
return this["createFunctionType"](PL$47/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(PL$20/*par*/){
var PL$49/*isDynamic*/;
var PL$40/*i*/;
;
PL$49/*isDynamic*/ = false;
if(PL$20/*par*/["return"]["isDynamic"]){
PL$49/*isDynamic*/ = true;;
};
;
PL$40/*i*/ = 0;
for(PL$40/*i*/ = 0;(PL$40/*i*/ < PL$20/*par*/["arguments"]["length"]);++PL$40/*i*/){{if(PL$20/*par*/["arguments"][PL$40/*i*/]["isDynamic"]){
PL$49/*isDynamic*/ = true;;
};
;
}};
;
if(PL$49/*isDynamic*/){
debugger;

}else{
return PL$7/*classSystem*/["createFunctionType"](PL$20/*par*/);;
};
;
;
});;
this["addType"] = (function(PL$20/*par*/, PL$28/*parParsed*/){
var PL$25/*name*/;
var PL$29/*type*/;
;
PL$25/*name*/ = PL$16/*identifierName*/(PL$20/*par*/["name"]);
if(this["types"]["has"][PL$25/*name*/]){
this["error"](PL$28/*parParsed*/, PL$11/*errorMsg*/["typeExists"]);;
};
;
PL$29/*type*/;
if(PL$20/*par*/["dynamic"]){
PL$29/*type*/ = {"isDynamic": true,
"extraRes": PL$20/*par*/["extraRes"]};;

}else{
PL$29/*type*/ = this["getProvisionalType"](PL$28/*parParsed*/);;
};
;
this["types"]["set"](PL$25/*name*/, {"name": PL$25/*name*/,
"type": PL$29/*type*/,
"isDynamic": PL$29/*type*/["isDynamic"],
"extraRes": PL$20/*par*/["extraRes"]});;
;
});;
this["getTypeName"] = (function(PL$31/*parType*/, PL$28/*parParsed*/){
var PL$25/*name*/;
var PL$41/*typesAr*/;
var PL$40/*i*/;
;
PL$25/*name*/;
PL$41/*typesAr*/ = this["types"]["getArray"]();
PL$40/*i*/;
for(PL$40/*i*/ = 0;(PL$40/*i*/ < PL$41/*typesAr*/["length"]);++PL$40/*i*/){{PL$25/*name*/ = PL$41/*typesAr*/[PL$40/*i*/]["key"];;
if((this["types"]["get"](PL$25/*name*/)["type"] === PL$31/*parType*/)){
return this["types"]["get"](PL$25/*name*/)["name"];;
};
;
}};
;
this["error"](PL$28/*parParsed*/, PL$11/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(PL$20/*par*/){
var PL$25/*name*/;
var PL$26/*entry*/;
var PL$29/*type*/;
var PL$50/*provisional*/;
;
PL$25/*name*/ = PL$16/*identifierName*/(PL$20/*par*/["name"]);
PL$26/*entry*/ = this["_getTypeEntry"](PL$20/*par*/["name"]);
if(PL$26/*entry*/["type"]["isDynamic"]){
this["error"](PL$20/*par*/["par"], PL$11/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(PL$26/*entry*/["isDefined"]){
this["error"](PL$20/*par*/["par"], PL$11/*errorMsg*/["typeRedefinition"]);;
};
;
PL$29/*type*/ = PL$7/*classSystem*/["createClass"](PL$20/*par*/["literal"], {});
PL$50/*provisional*/ = PL$26/*entry*/["type"];
PL$26/*entry*/["type"] = PL$29/*type*/;;
try
{this["resolveProvisional"](PL$50/*provisional*/, PL$29/*type*/);;
}catch(PL$51/*e*/){this["error"](PL$20/*par*/["par"], PL$11/*errorMsg*/["typeRedefinition"]);;
};
;
PL$26/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(PL$52/*parName*/, PL$28/*parParsed*/, PL$20/*par*/){
var PL$25/*name*/;
var PL$53/*throwError*/;
var PL$54/*typename*/;
var PL$55/*typeEntry*/;
var PL$56/*extraRes*/;
;
PL$25/*name*/ = PL$16/*identifierName*/(PL$52/*parName*/);
PL$53/*throwError*/ = true;
if((PL$20/*par*/ && PL$20/*par*/["dontThrow"])){
PL$53/*throwError*/ = false;;
};
;
if(this["types"]["has"](PL$25/*name*/)){
return this["types"]["get"](PL$25/*name*/);;
};
;
if((PL$25/*name*/[(PL$25/*name*/["length"] - 1)] == "*")){
PL$54/*typename*/ = PL$25/*name*/["substr"](0, (PL$25/*name*/["length"] - 1));
PL$55/*typeEntry*/ = this["_getTypeEntry"](PL$54/*typename*/, PL$28/*parParsed*/, PL$20/*par*/);
if(PL$55/*typeEntry*/){
PL$56/*extraRes*/ = PL$55/*typeEntry*/["extraRes"];
this["types"]["set"](PL$25/*name*/, {"name": PL$25/*name*/,
"type": PL$7/*classSystem*/["_createPromiseOfClass"](PL$55/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": PL$56/*extraRes*/});;
PL$56/*extraRes*/["push"]("var ");;
PL$56/*extraRes*/["push"](this["renderType"](PL$25/*name*/));;
this["common"]["useClassSystem"] = true;;
PL$56/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
PL$56/*extraRes*/["push"](this["renderType"](PL$54/*typename*/));;
PL$56/*extraRes*/["push"](");\nvar ");;
PL$56/*extraRes*/["push"]((this["getVariableName"](PL$25/*name*/) + " = "));;
PL$56/*extraRes*/["push"](this["renderType"](PL$25/*name*/));;
PL$56/*extraRes*/["push"](";\n");;
PL$56/*extraRes*/["push"]((("var " + this["getConstructorName"](PL$25/*name*/)) + " = undefined;"));;
PL$56/*extraRes*/["push"](this["_typeReadyCode"]({"typename": PL$25/*name*/,
"noConstructor": false}));;
return this["types"]["get"](PL$25/*name*/);;
};
;
};
;
if(! PL$53/*throwError*/){
return;;
};
;
this["error"](PL$28/*parParsed*/, PL$11/*errorMsg*/["typeUndeclared"], {"name": PL$25/*name*/});;
;
});;
this["getType"] = (function(PL$52/*parName*/, PL$28/*parParsed*/, PL$20/*par*/){
var PL$26/*entry*/;
;
PL$26/*entry*/ = this["_getTypeEntry"](PL$52/*parName*/, PL$28/*parParsed*/, PL$20/*par*/);
if(PL$26/*entry*/){
return PL$26/*entry*/["type"];;
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
this["expectTypeVar"] = (function(PL$20/*par*/){
var PL$35/*self*/;
var PL$51/*e*/;
;
if((PL$20/*par*/["getType"]() === this["getType"]("var"))){
return PL$20/*par*/;;
};
;
PL$35/*self*/ = this;
PL$51/*e*/ = this["addError"](PL$20/*par*/["getParsed"](), PL$11/*errorMsg*/["expectedVar"]);
PL$7/*classSystem*/["definitionPromise"](PL$20/*par*/["getType"]())["then"]((function(PL$27/*t*/){
;
if((PL$27/*t*/ === PL$35/*self*/["getType"]("var"))){
PL$51/*e*/["resolve"]();;
};
;
;
}));;
return PL$20/*par*/;;
;
});;
this["isSameType"] = (function(PL$57/*type1*/, PL$58/*type2*/){
;
return PL$7/*classSystem*/["isSameType"](PL$57/*type1*/, PL$58/*type2*/);;
;
});;
this["getResultType"] = (function(PL$20/*par*/){
var PL$27/*t*/;
;
if(! PL$20/*par*/){
return undefined;;
};
;
if((typeof PL$20/*par*/ == "string")){
return undefined;;
};
;
PL$27/*t*/ = PL$20/*par*/["getType"]();
if((typeof PL$27/*t*/ == "string")){
return this["getType"](PL$27/*t*/);;
};
;
return PL$27/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(PL$31/*parType*/, PL$59/*parIndex*/, PL$24/*parsed*/){
var PL$60/*retType*/;
var PL$35/*self*/;
;
PL$60/*retType*/ = this["getProvisionalType"](PL$24/*parsed*/);
PL$35/*self*/ = this;
PL$7/*classSystem*/["readyPromise"](PL$31/*parType*/)["then"]((function(PL$31/*parType*/){
;
PL$35/*self*/["resolveProvisional"](PL$60/*retType*/, PL$7/*classSystem*/["getFunctionArgumentType"](PL$31/*parType*/, PL$59/*parIndex*/));;
;
}));;
return PL$60/*retType*/;;
;
});;
this["getFunctionReturnType"] = (function(PL$31/*parType*/, PL$24/*parsed*/){
var PL$27/*t*/;
var PL$35/*self*/;
;
PL$27/*t*/ = this["getProvisionalType"](PL$24/*parsed*/);
PL$35/*self*/ = this;
PL$7/*classSystem*/["readyPromise"](PL$31/*parType*/)["then"]((function(PL$61/*newt*/){
;
PL$35/*self*/["resolveProvisional"](PL$27/*t*/, PL$7/*classSystem*/["getFunctionReturnType"](PL$61/*newt*/, PL$24/*parsed*/));;
;
}));;
return PL$27/*t*/;;
;
});;
;
});
PL$21/*f*/["apply"](PL$19/*parInstance*/, [PL$20/*par*/]);;
;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();