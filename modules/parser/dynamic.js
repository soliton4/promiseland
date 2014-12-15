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
    if (promiseland._hasModule({ hashStr: "bc9cad5cfe6bbe445be3fd14d7c943e0" })){ return promiseland._getModule("bc9cad5cfe6bbe445be3fd14d7c943e0"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "bc9cad5cfe6bbe445be3fd14d7c943e0", "module": PL$1, promising: true });
var PL$6/*promiseland*/;try{PL$6/*promiseland*/ = promiseland;}catch(e){};
var PL$49/*Promise*/;try{PL$49/*Promise*/ = Promise;}catch(e){};
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
this["callClassSystem"] = (function(PL$34/*parFun*/, PL$32/*par*/){
var PL$35/*dynamic*/;
var PL$36/*typeProps*/;
var PL$37/*ignoreProps*/;
var PL$38/*i*/;
var PL$39/*p*/;
var PL$40/*promises*/;
var PL$41/*parsed*/;
var PL$42/*errRes*/;
var PL$43/*self*/;
var PL$44/*resolveType*/;
var PL$50/*t*/;
;
PL$35/*dynamic*/ = false;
PL$36/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
PL$37/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
PL$38/*i*/ = 0;
PL$39/*p*/;
PL$40/*promises*/ = [];
PL$41/*parsed*/ = PL$32/*par*/["parsed"];
PL$41/*parsed*/ = (PL$41/*parsed*/ || (PL$32/*par*/["value"] && PL$32/*par*/["value"]["getParsed"]()));;
PL$41/*parsed*/ = (PL$41/*parsed*/ || (PL$32/*par*/["instance"] && PL$32/*par*/["instance"]["getParsed"]()));;
PL$41/*parsed*/ = (PL$41/*parsed*/ || (PL$32/*par*/["left"] && PL$32/*par*/["left"]["getParsed"]()));;
PL$41/*parsed*/ = (PL$41/*parsed*/ || (PL$32/*par*/["right"] && PL$32/*par*/["right"]["getParsed"]()));;
if(! PL$41/*parsed*/){
PL$10/*errorFun*/({}, PL$11/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
PL$42/*errRes*/ = this["runtimeError"](PL$41/*parsed*/, PL$11/*errorMsg*/["typeLookupFailed"]);
PL$43/*self*/ = this;
PL$44/*resolveType*/ = (function(PL$45/*prop*/, PL$46/*ps*/, PL$47/*parArgument*/){
var PL$48/*res*/;
;
PL$48/*res*/ = new PL$49/*Promise*/();
PL$46/*ps*/["then"]((function(PL$50/*t*/){
;
if(PL$47/*parArgument*/){
PL$32/*par*/["arguments"][PL$45/*prop*/]["type"] = PL$50/*t*/;;

}else{
PL$32/*par*/[PL$45/*prop*/] = PL$50/*t*/;;
};
;
PL$48/*res*/["resolve"]();;
;
}));;
PL$40/*promises*/["push"](PL$48/*res*/);;
return PL$48/*res*/;;
;
});
PL$50/*t*/;
for(PL$39/*p*/ in PL$36/*typeProps*/){PL$50/*t*/ = PL$32/*par*/[PL$39/*p*/];;
if(PL$50/*t*/){
if(PL$50/*t*/["isDynamic"]){
PL$35/*dynamic*/ = true;;

}else{
PL$44/*resolveType*/(PL$39/*p*/, PL$7/*classSystem*/["readyPromise"](PL$50/*t*/));;
};
;
};
;
};
;
if(PL$32/*par*/["arguments"]){
for(PL$38/*i*/ = 0;(PL$38/*i*/ < PL$32/*par*/["arguments"]["length"]);++PL$38/*i*/){{PL$50/*t*/ = PL$32/*par*/["arguments"][PL$38/*i*/]["type"];;
if(PL$50/*t*/){
if(PL$50/*t*/["isDynamic"]){
PL$35/*dynamic*/ = true;;

}else{
PL$44/*resolveType*/(PL$38/*i*/, PL$7/*classSystem*/["readyPromise"](PL$50/*t*/), true);;
};
;
};
;
}};
;
};
;
PL$6/*promiseland*/["all"](PL$40/*promises*/)["then"]((function(){
var PL$39/*p*/;
var PL$48/*res*/;
var PL$51/*propsStarted*/;
var PL$52/*addProperty*/;
var PL$53/*dynRes*/;
var PL$54/*tempRes*/;
;
PL$39/*p*/;
if(PL$35/*dynamic*/){
PL$43/*self*/["common"]["useClassSystem"] = true;;
PL$48/*res*/ = PL$43/*self*/["newResult"]();
PL$48/*res*/["push"]("classSystem.");;
PL$48/*res*/["push"](PL$34/*parFun*/);;
PL$48/*res*/["push"]("({");;
PL$51/*propsStarted*/ = false;
PL$52/*addProperty*/ = (function(PL$39/*p*/){
;
if(PL$51/*propsStarted*/){
PL$48/*res*/["push"](", ");;
};
;
PL$51/*propsStarted*/ = true;;
PL$48/*res*/["push"](PL$13/*stringEncodeStr*/(PL$39/*p*/));;
PL$48/*res*/["push"](":");;
;
});
for(PL$39/*p*/ in PL$32/*par*/){if((! PL$32/*par*/[PL$39/*p*/] || PL$37/*ignoreProps*/[PL$39/*p*/])){

}else{
if(PL$36/*typeProps*/[PL$39/*p*/]){
PL$52/*addProperty*/(PL$39/*p*/);;
PL$48/*res*/["push"](PL$43/*self*/["renderType"](PL$32/*par*/[PL$39/*p*/], PL$41/*parsed*/));;

}else{
PL$52/*addProperty*/(PL$39/*p*/);;
PL$48/*res*/["push"](PL$43/*self*/["makeCompleteStatementDynamic"](PL$32/*par*/[PL$39/*p*/]));;
};
};
;
};
;
PL$48/*res*/["push"]("})");;
PL$53/*dynRes*/ = PL$43/*self*/["newResult"]();
PL$53/*dynRes*/["push"](PL$43/*self*/["makeCompleteStatement"](PL$48/*res*/), undefined, {"dynamic": true});;
PL$42/*errRes*/["resolve"](PL$53/*dynRes*/);;

}else{
PL$54/*tempRes*/ = PL$43/*self*/["newResult"]();
PL$32/*par*/["result"] = PL$54/*tempRes*/;;
PL$42/*errRes*/["resolve"](PL$6/*promiseland*/["classSystem"][PL$34/*parFun*/](PL$32/*par*/));;
};
;
;
}));;
return PL$42/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(PL$55/*parType*/, PL$56/*parParsed*/){
var PL$43/*self*/;
var PL$48/*res*/;
;
PL$43/*self*/ = this;
if(PL$55/*parType*/["isDynamic"]){
PL$48/*res*/ = PL$43/*self*/["newResult"]();
PL$43/*self*/["common"]["useClassSystem"] = true;;
PL$48/*res*/["push"]("classSystem.isTrackedClass");;
PL$48/*res*/["push"]("(");;
PL$48/*res*/["push"](PL$43/*self*/["renderType"](PL$55/*parType*/, PL$56/*parParsed*/));;
PL$48/*res*/["push"](")");;
return PL$48/*res*/;;
};
;
return PL$7/*classSystem*/["isTrackedClass"](PL$55/*parType*/);;
;
});;
this["isTrackedClass"] = (function(PL$55/*parType*/){
;
return PL$7/*classSystem*/["isTrackedClass"](PL$55/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(PL$55/*parType*/, PL$56/*parParsed*/){
;
if(PL$55/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$55/*parType*/, {"temporaryTracked": true}, PL$56/*parParsed*/);;
};
;
return PL$7/*classSystem*/["_createTemporaryTrackedClass"](PL$55/*parType*/);;
;
});;
this["getConstructorReturnType"] = (function(PL$55/*parType*/, PL$56/*parParsed*/){
;
if(PL$55/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$55/*parType*/, {"constructorReturn": true}, PL$56/*parParsed*/);;
};
;
return PL$7/*classSystem*/["getConstructorReturnType"](PL$55/*parType*/);;
;
});;
this["parseAsType"] = (function(PL$55/*parType*/, PL$32/*par*/){
var PL$57/*value*/;
;
PL$57/*value*/ = this["parseExpression"](PL$32/*par*/);
return this["getPassAsTypeCode"]({"value": PL$57/*value*/,
"valueType": PL$57/*value*/["getType"](),
"type": PL$55/*parType*/,
"errorFun": this["getWarningFun"](PL$32/*par*/),
"parsed": PL$32/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": PL$32/*par*/["type"],
"value": PL$32/*par*/["value"],
"valueType": this["getResultType"](PL$32/*par*/["value"], PL$32/*par*/),
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"](PL$32/*par*/["type"]);;
return PL$48/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
var PL$57/*value*/;
var PL$58/*valueType*/;
;
PL$48/*res*/ = this["newResult"]();
PL$57/*value*/ = PL$32/*par*/["value"];
PL$58/*valueType*/ = PL$57/*value*/["getType"]();
PL$48/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": PL$57/*value*/,
"valueType": PL$57/*value*/["getType"](),
"errorFun": PL$32/*par*/["errorFun"],
"noValueRequired": (PL$32/*par*/ ? PL$32/*par*/["noValueRequired"] : undefined)}));;
PL$48/*res*/["setType"](this["getClassFromTemporaryTracked"](PL$58/*valueType*/, PL$57/*value*/["getParsed"]()));;
return PL$48/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(PL$55/*parType*/, PL$56/*parParsed*/){
var PL$43/*self*/;
var PL$59/*resType*/;
;
PL$43/*self*/ = this;
if(PL$55/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$55/*parType*/, {"temporaryTrackedResolved": true}, PL$56/*parParsed*/);;
};
;
PL$59/*resType*/ = this["getProvisionalType"](PL$56/*parParsed*/, PL$56/*parParsed*/);
PL$7/*classSystem*/["definitionPromise"](PL$55/*parType*/)["then"]((function(PL$60/*parDefinedType*/){
;
PL$43/*self*/["resolveProvisional"](PL$59/*resType*/, PL$7/*classSystem*/["getClassFromTemporaryTracked"](PL$60/*parDefinedType*/));;
;
}));;
return PL$59/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": PL$32/*par*/["instance"],
"type": this["getResultType"](PL$32/*par*/["instance"]),
"property": PL$32/*par*/["property"],
"propertyValue": PL$32/*par*/["propertyValue"],
"computed": PL$32/*par*/["computed"],
"value": PL$32/*par*/["value"],
"valueType": this["getResultType"](PL$32/*par*/["value"]),
"operator": (PL$32/*par*/["operator"] || "="),
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$32/*par*/["instance"]),
"property": PL$32/*par*/["property"]}, PL$32/*par*/["instance"]));;
return PL$48/*res*/;;
;
});;
this["getSetVariableCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": PL$32/*par*/["instance"],
"type": this["getResultType"](PL$32/*par*/["instance"]),
"value": PL$32/*par*/["value"],
"valueType": this["getResultType"](PL$32/*par*/["value"]),
"operator": (PL$32/*par*/["operator"] || "="),
"errorFun": PL$32/*par*/["errorFun"],
"assignmentType": PL$32/*par*/["assignmentType"]}));;
PL$48/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](PL$32/*par*/["value"]), PL$32/*par*/["value"]["getParsed"]()));;
return PL$48/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
PL$48/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": PL$32/*par*/["type"],
"name": PL$32/*par*/["name"],
"constructorName": PL$32/*par*/["constructorName"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": PL$32/*par*/["type"],
"name": PL$32/*par*/["name"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": PL$32/*par*/["type"],
"name": PL$32/*par*/["name"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": PL$32/*par*/["type"],
"name": PL$32/*par*/["name"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": PL$32/*par*/["type"],
"name": PL$32/*par*/["name"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["connectFunCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$32/*par*/["signalObject"],
"type": this["getResultType"](PL$32/*par*/["signalObject"]),
"property": PL$32/*par*/["signalProperty"],
"value": PL$32/*par*/["fun"],
"valueType": this["getResultType"](PL$32/*par*/["fun"]),
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"]("var");;
return PL$48/*res*/;;
;
});;
this["connectSlotCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$32/*par*/["signalObject"],
"type": this["getResultType"](PL$32/*par*/["signalObject"]),
"property": PL$32/*par*/["signalProperty"],
"value": PL$32/*par*/["slotObject"],
"valueType": this["getResultType"](PL$32/*par*/["slotObject"]),
"valueProperty": PL$32/*par*/["slotProperty"],
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"]("var");;
return PL$48/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": PL$32/*par*/["value"],
"valueType": this["getResultType"](PL$32/*par*/["value"]),
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": PL$32/*par*/["value"],
"valueType": this["getResultType"](PL$32/*par*/["value"]),
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": PL$32/*par*/["type"],
"errorFun": PL$32/*par*/["errorFun"],
"parsed": PL$32/*par*/["parsed"]}));;
PL$48/*res*/["setType"](PL$19/*statementType*/);;
return PL$48/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(PL$55/*parType*/){
;
return PL$7/*classSystem*/["getClassFromPromiseOf"](PL$55/*parType*/);;
;
});;
this["getPropertyType"] = (function(PL$32/*par*/, PL$56/*parParsed*/){
var PL$61/*type*/;
var PL$43/*self*/;
var PL$62/*r*/;
;
PL$61/*type*/ = PL$32/*par*/["type"];
PL$43/*self*/ = this;
if(PL$61/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$61/*type*/, {"property": PL$32/*par*/["property"]}, PL$56/*parParsed*/);;

}else{
PL$62/*r*/ = this["getProvisionalType"](PL$56/*parParsed*/);
PL$7/*classSystem*/["readyPromise"](PL$32/*par*/["type"])["then"]((function(PL$63/*resultType*/){
;
PL$43/*self*/["resolveProvisional"](PL$62/*r*/, PL$6/*promiseland*/["classSystem"]["getPropertyType"]({"type": PL$63/*resultType*/,
"property": PL$32/*par*/["property"]}));;
;
}));;
return PL$62/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(PL$32/*par*/, PL$56/*parParsed*/){
var PL$61/*type*/;
var PL$43/*self*/;
var PL$62/*r*/;
;
PL$61/*type*/ = PL$32/*par*/["type"];
PL$43/*self*/ = this;
if(PL$61/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$61/*type*/, {"property": "constructor"}, PL$56/*parParsed*/);;

}else{
PL$62/*r*/ = this["getProvisionalType"](PL$56/*parParsed*/);
PL$7/*classSystem*/["readyPromise"](PL$32/*par*/["type"])["then"]((function(PL$63/*resultType*/){
;
try
{PL$43/*self*/["resolveProvisional"](PL$62/*r*/, PL$6/*promiseland*/["classSystem"]["getConstructorType"]({"type": PL$63/*resultType*/}));;
}catch(PL$64/*e*/){PL$43/*self*/["error"](PL$56/*parParsed*/, PL$64/*e*/);;
};
;
;
}));;
return PL$62/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": PL$32/*par*/["instance"],
"type": this["getResultType"](PL$32/*par*/["instance"]),
"property": PL$32/*par*/["property"],
"propertyValue": PL$32/*par*/["propertyValue"],
"errorFun": PL$32/*par*/["errorFun"]}));;
if(PL$32/*par*/["property"]){
PL$48/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$32/*par*/["instance"]),
"property": PL$32/*par*/["property"]}, PL$32/*par*/["instance"]));;

}else{
PL$48/*res*/["setType"]("var");;
};
;
return PL$48/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(PL$32/*par*/){
var PL$48/*res*/;
;
PL$48/*res*/ = this["newResult"]();
PL$48/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": PL$32/*par*/["left"],
"leftType": this["getResultType"](PL$32/*par*/["left"]),
"right": PL$32/*par*/["right"],
"rightType": this["getResultType"](PL$32/*par*/["right"]),
"operator": PL$32/*par*/["operator"],
"errorFun": PL$32/*par*/["errorFun"]}));;
PL$48/*res*/["setType"]("var");;
return PL$48/*res*/;;
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