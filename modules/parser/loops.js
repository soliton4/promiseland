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
    if (promiseland._hasModule({ hashStr: "f22ae8551b1be68c5e740080b3376b35" })){ return promiseland._getModule("f22ae8551b1be68c5e740080b3376b35"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "f22ae8551b1be68c5e740080b3376b35", "module": PL$1, promising: true });
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
PL$1.resolve((function(PL$23/*parInstance*/, PL$24/*par*/){
var PL$25/*f*/;
;
PL$25/*f*/ = (function(PL$24/*par*/){
;
this["breakOrContinuePromise"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$27/*promiseName*/;
var PL$28/*outerBlock*/;
var PL$29/*b*/;
var PL$30/*block*/;
;
PL$26/*res*/ = this["newResult"]();
PL$26/*res*/["makePromising"]();;
PL$27/*promiseName*/ = (PL$24/*par*/["promiseName"] || this["getUniqueName"]());
PL$26/*res*/["setPromiseName"](PL$27/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((PL$27/*promiseName*/ + ".resolve(false); return ") + PL$27/*promiseName*/) + ";\n");;
this["continueCode"] = (((PL$27/*promiseName*/ + ".resolve(true); return ") + PL$27/*promiseName*/) + ";\n");;
PL$26/*res*/["push"]((((("var " + PL$27/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$28/*outerBlock*/ = this["newResult"]();
if(PL$24/*par*/["preCondition"]){
PL$28/*outerBlock*/["push"]("if(");;
PL$28/*outerBlock*/["push"](PL$24/*par*/["preCondition"]);;
PL$28/*outerBlock*/["push"]("){");;
};
;
PL$29/*b*/ = PL$24/*par*/["block"];
PL$29/*b*/["brackets"] = false;;
PL$30/*block*/ = this["blockCreator"](PL$29/*b*/, {"postCode": this["newResult"](this["continueCode"])});
PL$28/*outerBlock*/["push"](this["makeCompleteStatement"](PL$30/*block*/));;
if(PL$24/*par*/["preCondition"]){
PL$28/*outerBlock*/["push"]("}else{");;
PL$28/*outerBlock*/["push"](this["breakCode"]);;
PL$28/*outerBlock*/["push"]("};\n");;
};
;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$28/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return PL$26/*res*/;;
;
});;
this["generateLoop"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$31/*loopFun*/;
var PL$32/*loopEndPromise*/;
var PL$33/*loopCode*/;
var PL$34/*doFun*/;
var PL$35/*doFunStatement*/;
;
PL$26/*res*/ = this["newResult"]();
PL$31/*loopFun*/ = this["getUniqueName"]();
PL$32/*loopEndPromise*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((((("var " + PL$32/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$26/*res*/["push"]((("var " + PL$31/*loopFun*/) + " = function(){"));;
PL$33/*loopCode*/ = this["breakOrContinuePromise"]({"block": PL$24/*par*/["block"],
"preCondition": PL$24/*par*/["preCondition"],
"postCode": PL$24/*par*/["postCode"]});
PL$26/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](PL$33/*loopCode*/)));;
PL$26/*res*/["push"]("return ");;
PL$26/*res*/["push"](PL$33/*loopCode*/["getPromiseName"]());;
PL$26/*res*/["push"](";\n");;
PL$26/*res*/["push"]("};\n");;
PL$34/*doFun*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((("var " + PL$34/*doFun*/) + " = function(){"));;
PL$26/*res*/["push"](PL$31/*loopFun*/);;
PL$26/*res*/["push"]("().then(function(contLoop){\n");;
PL$26/*res*/["push"]("if (contLoop){");;
PL$35/*doFunStatement*/ = this["newResult"]();
if(PL$24/*par*/["postCode"]){
PL$35/*doFunStatement*/["push"](this["makeStatement"](PL$24/*par*/["postCode"]));;
};
;
PL$35/*doFunStatement*/["push"]((PL$34/*doFun*/ + "();"));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$35/*doFunStatement*/));;
PL$26/*res*/["push"]("}else{");;
PL$26/*res*/["push"]((PL$32/*loopEndPromise*/ + ".resolve();"));;
PL$26/*res*/["push"]("};\n");;
PL$26/*res*/["push"]("});\n");;
PL$26/*res*/["push"]("};\n");;
PL$26/*res*/["push"]((PL$34/*doFun*/ + "();\n"));;
PL$26/*res*/["push"](PL$32/*loopEndPromise*/);;
PL$26/*res*/["push"](".then(function(){");;
PL$26/*res*/["addPost"]("});");;
return PL$26/*res*/;;
;
});;
this["expForStatement"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$36/*statement*/;
var PL$37/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$36/*statement*/;
PL$37/*promising*/ = false;
if(((PL$20/*checkPromising*/(PL$24/*par*/["test"]) || PL$20/*checkPromising*/(PL$24/*par*/["update"])) || PL$20/*checkPromising*/(PL$24/*par*/["body"]))){
PL$37/*promising*/ = true;;
};
;
if(PL$37/*promising*/){
PL$26/*res*/["push"](this["makeStatement"](this["parseExpression"](PL$24/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": this["parseExpression"](PL$24/*par*/["test"]),
"postCode": this["parseExpression"](PL$24/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["init"]));;
PL$26/*res*/["push"](";");;
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$26/*res*/["push"](";");;
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["update"]));;
PL$26/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$36/*statement*/ = this["newResult"]();;
PL$36/*statement*/["push"](this["expBlockStatement"](PL$24/*par*/["body"]));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$36/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expForInStatement"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$36/*statement*/;
var PL$37/*promising*/;
var PL$38/*iteratorRes*/;
var PL$39/*iteratorAccess*/;
var PL$40/*arrayName*/;
var PL$41/*iName*/;
var PL$42/*conditionRes*/;
var PL$43/*postCodeRes*/;
var PL$29/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$36/*statement*/;
PL$37/*promising*/ = false;
if(PL$20/*checkPromising*/(PL$24/*par*/["body"])){
PL$37/*promising*/ = true;;
};
;
if(PL$37/*promising*/){
PL$38/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]));
PL$39/*iteratorAccess*/ = PL$38/*iteratorRes*/;
if(PL$38/*iteratorRes*/["promising"]){
PL$39/*iteratorAccess*/ = PL$38/*iteratorRes*/["getPromiseName"]();;
};
;
PL$40/*arrayName*/ = this["getUniqueName"]();
PL$26/*res*/["addPre"]((("var " + PL$40/*arrayName*/) + " = [];"));;
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](PL$38/*iteratorRes*/);;
PL$26/*res*/["push"](" in ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$26/*res*/["push"]("){");;
PL$26/*res*/["push"]((PL$40/*arrayName*/ + ".push("));;
PL$26/*res*/["push"](PL$39/*iteratorAccess*/);;
PL$26/*res*/["push"](");");;
PL$26/*res*/["push"]("};");;
PL$26/*res*/["push"](PL$38/*iteratorRes*/);;
PL$26/*res*/["push"](((" = " + PL$40/*arrayName*/) + "[0];"));;
PL$41/*iName*/ = this["getUniqueName"]();
PL$26/*res*/["push"]((("var " + PL$41/*iName*/) + " = 0;"));;
PL$42/*conditionRes*/ = this["newResult"]();
PL$42/*conditionRes*/["push"]((((PL$41/*iName*/ + " < ") + PL$40/*arrayName*/) + ".length"));;
PL$43/*postCodeRes*/ = this["newResult"]();
PL$43/*postCodeRes*/["push"]((PL$41/*iName*/ + "++;"));;
PL$43/*postCodeRes*/["push"](PL$38/*iteratorRes*/);;
PL$43/*postCodeRes*/["push"](((((" = " + PL$40/*arrayName*/) + "[") + PL$41/*iName*/) + "];"));;
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$42/*conditionRes*/,
"postCode": PL$43/*postCodeRes*/}));;
PL$26/*res*/["push"]("}");;

}else{
PL$26/*res*/["push"]("for(");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"])));;
PL$26/*res*/["push"](" in ");;
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$26/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$36/*statement*/ = this["newResult"]();;
PL$29/*b*/ = PL$24/*par*/["body"];
PL$29/*b*/["brackets"] = true;;
PL$36/*statement*/["push"](this["blockCreator"](PL$29/*b*/));;
PL$26/*res*/["push"](this["makeCompleteStatement"](PL$36/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["whileStatement"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$44/*statements*/;
var PL$45/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$26/*res*/ = this["newResult"]();
PL$44/*statements*/;
PL$45/*condition*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"]));
if((PL$20/*checkPromising*/(PL$45/*condition*/) || PL$20/*checkPromising*/(PL$24/*par*/["body"]))){
PL$26/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$45/*condition*/}));;

}else{
PL$26/*res*/["push"]("while(");;
PL$26/*res*/["push"](PL$45/*condition*/);;
PL$26/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$26/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](PL$24/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expBreakStatement"] = (function(PL$46/*parParsed*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(this["breakCode"]){
PL$26/*res*/["push"](this["breakCode"]);;

}else{
PL$26/*res*/["push"]("break;");;
};
;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
this["expContinueStatement"] = (function(PL$46/*parParsed*/){
var PL$26/*res*/;
;
PL$26/*res*/ = this["newResult"]();
if(this["continueCode"]){
PL$26/*res*/["push"](this["continueCode"]);;

}else{
PL$26/*res*/["push"]("continue;");;
};
;
PL$26/*res*/["setType"](PL$19/*statementType*/);;
return PL$26/*res*/;;
;
});;
;
});
PL$25/*f*/["apply"](PL$23/*parInstance*/, [PL$24/*par*/]);;
;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();