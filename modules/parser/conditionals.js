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
    if (promiseland._hasModule({ hashStr: "1f52fa7d5db2a5872d2337ccdf05d962" })){ return promiseland._getModule("1f52fa7d5db2a5872d2337ccdf05d962"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "1f52fa7d5db2a5872d2337ccdf05d962", "module": PL$1, promising: true });
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
PL$3(function(){
;
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
this["expIfStatement"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$27/*promising*/;
var PL$28/*continuePromise*/;
var PL$29/*continueCode*/;
var PL$30/*statement*/;
var PL$31/*b*/;
var PL$32/*extraPar*/;

;
this["stack"]("conditionalCode");
this["conditionalCode"] = true;
this["stack"]("algorithmicCode");
this["algorithmicCode"] = true;
PL$26/*res*/ = this["newResult"]();
PL$27/*promising*/ = false;
if((PL$24/*par*/["consequent"] && PL$20/*checkPromising*/(PL$24/*par*/["consequent"]))){
  PL$27/*promising*/ = true;
};
;
if((PL$24/*par*/["alternate"] && PL$20/*checkPromising*/(PL$24/*par*/["alternate"]))){
  PL$27/*promising*/ = true;
};
;
PL$28/*continuePromise*/;
PL$29/*continueCode*/;
if(PL$27/*promising*/){
  PL$28/*continuePromise*/ = this["getUniqueName"]();
  PL$26/*res*/["push"](this["newLine"]());
  PL$26/*res*/["push"]((((("var " + PL$28/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";"));
  PL$29/*continueCode*/ = (PL$28/*continuePromise*/ + ".resolve();");
};
;
PL$26/*res*/["push"]("if(");
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"])));
PL$26/*res*/["push"]("){");
if(! PL$24/*par*/["consequent"]){
  this["error"](PL$24/*par*/, PL$11/*errorMsg*/["unknownIfStatement"]);
};
;
PL$30/*statement*/ = this["newResult"]();
PL$31/*b*/;
if((PL$24/*par*/["consequent"]["type"] == "BlockStatement")){
  PL$31/*b*/ = PL$24/*par*/["consequent"]["body"];
}else{
PL$31/*b*/ = [PL$24/*par*/["consequent"]];
};
;
PL$31/*b*/["brackets"] = false;
PL$32/*extraPar*/ = {};
if(PL$27/*promising*/){
  PL$32/*extraPar*/["postCode"] = this["newResult"](PL$29/*continueCode*/);
};
;
PL$30/*statement*/["push"](this["blockCreator"](PL$31/*b*/, PL$32/*extraPar*/));
PL$26/*res*/["push"](this["indent"](this["makeCompleteStatement"](PL$30/*statement*/)));
if(PL$24/*par*/["alternate"]){
  PL$26/*res*/["push"](this["newLine"]());
  PL$26/*res*/["push"]("}else{");
  PL$30/*statement*/ = this["newResult"]();
  if((PL$24/*par*/["alternate"]["type"] == "BlockStatement")){
    PL$31/*b*/ = PL$24/*par*/["alternate"]["body"];
  }else{
  PL$31/*b*/ = [PL$24/*par*/["alternate"]];
  };
  ;
  PL$31/*b*/["brackets"] = false;
  PL$32/*extraPar*/ = {};
  if(PL$27/*promising*/){
    PL$32/*extraPar*/["postCode"] = this["newResult"](PL$29/*continueCode*/);
  };
  ;
  PL$30/*statement*/["push"](this["blockCreator"](PL$31/*b*/, PL$32/*extraPar*/));
  PL$26/*res*/["push"](this["makeCompleteStatement"](PL$30/*statement*/));
}else{
if(PL$27/*promising*/){
  PL$26/*res*/["push"](this["newLine"]());
  PL$26/*res*/["push"]("}else{");
  PL$30/*statement*/ = this["newResult"]();
  PL$30/*statement*/["push"](PL$29/*continueCode*/);
  PL$26/*res*/["push"](this["makeCompleteStatement"](PL$30/*statement*/));
};
};
;
PL$26/*res*/["push"](this["newLine"]());
PL$26/*res*/["push"]("}");
if(PL$27/*promising*/){
  PL$26/*res*/["push"]((("; " + PL$28/*continuePromise*/) + ".then(function(){"));
  PL$26/*res*/["addPost"]("});");
};
;
this["unstack"]("conditionalCode");
this["unstack"]("algorithmicCode");
PL$26/*res*/["setType"](PL$19/*statementType*/);
return PL$26/*res*/;;
;});
this["conditionalExpression"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$33/*tempPromise*/;
var PL$34/*tempValue*/;
var PL$35/*trueExtraCode*/;
var PL$36/*falseExtraCode*/;

;
PL$26/*res*/ = this["newResult"]();
if((PL$24/*par*/["consequent"]["promising"] || PL$24/*par*/["alternate"]["promising"])){
  PL$26/*res*/["makePromising"]();
  PL$33/*tempPromise*/ = this["getUniqueName"]();
  PL$34/*tempValue*/ = this["getUniqueName"]();
  PL$26/*res*/["addPre"]("var ");
  PL$26/*res*/["addPre"](PL$33/*tempPromise*/);
  PL$26/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));
  PL$26/*res*/["addPre"]("if(");
  PL$26/*res*/["addPre"](this["parseExpression"](PL$24/*par*/["test"]));
  PL$26/*res*/["addPre"]("){");
  this["stack"]("conditionalCode");
  this["conditionalCode"] = true;
  PL$35/*trueExtraCode*/ = this["newResult"]();
  PL$35/*trueExtraCode*/["push"](PL$33/*tempPromise*/);
  PL$35/*trueExtraCode*/["push"](".resolve(");
  PL$35/*trueExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));
  PL$35/*trueExtraCode*/["push"](");\n");
  PL$26/*res*/["addPre"](this["makeCompleteStatement"](PL$35/*trueExtraCode*/));
  PL$26/*res*/["addPre"]("}else{");
  PL$36/*falseExtraCode*/ = this["newResult"]();
  PL$36/*falseExtraCode*/["push"](PL$33/*tempPromise*/);
  PL$36/*falseExtraCode*/["push"](".resolve(");
  PL$36/*falseExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));
  PL$36/*falseExtraCode*/["push"](");\n");
  PL$26/*res*/["addPre"](this["makeCompleteStatement"](PL$36/*falseExtraCode*/));
  PL$26/*res*/["addPre"]("};\n");
  PL$26/*res*/["addPre"](PL$33/*tempPromise*/);
  PL$26/*res*/["addPre"](".then(");
  PL$26/*res*/["setPromiseName"](this["getUniqueName"]());
  PL$26/*res*/["addPre"](PL$26/*res*/["getPromiseName"]());
  PL$26/*res*/["addPre"]("){");
  PL$26/*res*/["addPost"]("});");
  this["unstack"]("conditionalCode");
}else{
PL$26/*res*/["push"]("(");
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["test"]));
PL$26/*res*/["push"](" ? ");
this["stack"]("conditionalCode");
this["conditionalCode"] = true;
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));
PL$26/*res*/["push"](" : ");
PL$26/*res*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));
PL$26/*res*/["push"](")");
this["unstack"]("conditionalCode");
};
;
PL$26/*res*/["setType"]("var");
return PL$26/*res*/;;
;});
this["expSwitchStatement"] = (function(PL$24/*par*/){
var PL$26/*res*/;
var PL$27/*promising*/;
var PL$28/*continuePromise*/;
var PL$29/*continueCode*/;
var PL$37/*discriminant*/;
var PL$38/*cases*/;
var PL$30/*statement*/;
var PL$39/*hasDefault*/;
var PL$40/*defaultCase*/;
var PL$42/*isDefault*/;
var PL$43/*defaultCheck*/;
var PL$44/*firstCheck*/;
var PL$45/*hasFirstCheck*/;
var PL$46/*currentCase*/;
var PL$47/*caseFun*/;
var PL$48/*checkFun*/;
var PL$49/*nextCheckCode*/;
var PL$50/*j*/;
var PL$51/*nextCaseCode*/;
var PL$52/*checkCode*/;
var PL$31/*b*/;
var PL$32/*extraPar*/;
var PL$41/*i*/;

;
this["stack"]("conditionalCode");
this["conditionalCode"] = true;
this["stack"]("algorithmicCode");
this["algorithmicCode"] = true;
PL$26/*res*/ = this["newResult"]();
PL$27/*promising*/ = false;
if((PL$24/*par*/["cases"] && PL$20/*checkPromising*/(PL$24/*par*/["cases"]))){
  PL$27/*promising*/ = true;
};
;
PL$28/*continuePromise*/;
PL$29/*continueCode*/;
if(PL$27/*promising*/){
  PL$28/*continuePromise*/ = this["getUniqueName"]();
  PL$26/*res*/["push"]((((("var " + PL$28/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));
  PL$29/*continueCode*/ = (PL$28/*continuePromise*/ + ".resolve(); return;");
  this["stack"]("breakCode");
  this["breakCode"] = PL$29/*continueCode*/;
  PL$37/*discriminant*/ = this["getUniqueName"]("discriminant");
  PL$26/*res*/["push"]((("var " + PL$37/*discriminant*/) + " = "));
  PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));
  PL$26/*res*/["push"](";\n");
  PL$38/*cases*/ = [];
  PL$30/*statement*/;
  PL$39/*hasDefault*/ = false;
  PL$40/*defaultCase*/;
  for(PL$41/*i*/ = 0;(PL$41/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$41/*i*/){{
    PL$42/*isDefault*/ = false;
    if(! PL$24/*par*/["cases"][PL$41/*i*/]["test"]){
      PL$42/*isDefault*/ = true;
      if(! PL$39/*hasDefault*/){
        PL$39/*hasDefault*/ = true;
        PL$40/*defaultCase*/ = PL$24/*par*/["cases"][PL$41/*i*/];
      };
      ;
    };
    ;
    PL$38/*cases*/["push"]({"theCase": PL$24/*par*/["cases"][PL$41/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": PL$42/*isDefault*/});}};
  ;
  PL$43/*defaultCheck*/ = PL$29/*continueCode*/;
  if(PL$39/*hasDefault*/){
    PL$43/*defaultCheck*/ = (PL$40/*defaultCase*/["checkFun"] + "();");
  };
  ;
  PL$44/*firstCheck*/ = PL$29/*continueCode*/;
  PL$45/*hasFirstCheck*/ = false;
  for(PL$41/*i*/ = 0;(PL$41/*i*/ < PL$38/*cases*/["length"]);++PL$41/*i*/){{
    PL$46/*currentCase*/ = PL$38/*cases*/[PL$41/*i*/]["theCase"];
    PL$47/*caseFun*/ = PL$38/*cases*/[PL$41/*i*/]["caseFun"];
    PL$48/*checkFun*/ = PL$38/*cases*/[PL$41/*i*/]["checkFun"];
    if(! PL$45/*hasFirstCheck*/){
      PL$45/*hasFirstCheck*/ = true;
      PL$44/*firstCheck*/ = (PL$48/*checkFun*/ + "()");
    };
    ;
    PL$49/*nextCheckCode*/ = PL$43/*defaultCheck*/;
    for(PL$50/*j*/ = (PL$41/*i*/ + 1);(PL$50/*j*/ < PL$38/*cases*/["length"]);++PL$50/*j*/){{
      if(! PL$38/*cases*/[PL$50/*j*/]["isDefault"]){
        PL$49/*nextCheckCode*/ = (PL$38/*cases*/[PL$50/*j*/]["checkFun"] + "()");
        break;;
      };
      ;}};
    ;
    PL$51/*nextCaseCode*/ = PL$29/*continueCode*/;
    if(PL$38/*cases*/[(PL$41/*i*/ + 1)]){
      PL$51/*nextCaseCode*/ = (PL$38/*cases*/[(PL$41/*i*/ + 1)]["caseFun"] + "(); return;");
    };
    ;
    PL$26/*res*/["push"]((("var " + PL$48/*checkFun*/) + " = function(){"));
    PL$52/*checkCode*/ = this["newResult"]();
    PL$52/*checkCode*/["push"]((("if(" + PL$37/*discriminant*/) + " === "));
    PL$52/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](PL$46/*currentCase*/["test"])));
    PL$52/*checkCode*/["push"]("){");
    PL$52/*checkCode*/["push"](PL$47/*caseFun*/);
    PL$52/*checkCode*/["push"]("(); return; };\n");
    PL$52/*checkCode*/["push"](PL$49/*nextCheckCode*/);
    PL$26/*res*/["push"](this["makeCompleteStatement"](PL$52/*checkCode*/));
    PL$26/*res*/["push"]("};\n");
    PL$26/*res*/["push"]((("var " + PL$47/*caseFun*/) + " = function(){"));
    PL$30/*statement*/ = this["newResult"]();
    PL$31/*b*/ = PL$46/*currentCase*/["consequent"];
    PL$32/*extraPar*/ = {};
    if(PL$27/*promising*/){
      PL$32/*extraPar*/["postCode"] = this["newResult"]();
      PL$32/*extraPar*/["postCode"]["push"](PL$51/*nextCaseCode*/);
    };
    ;
    PL$30/*statement*/["push"](this["blockCreator"](PL$31/*b*/, PL$32/*extraPar*/));
    PL$26/*res*/["push"](this["makeCompleteStatement"](PL$30/*statement*/));
    PL$26/*res*/["push"]("};\n");}};
  ;
  PL$26/*res*/["push"](PL$44/*firstCheck*/);
  PL$26/*res*/["push"]((("; " + PL$28/*continuePromise*/) + ".then(function(){"));
  PL$26/*res*/["addPost"]("});");
  this["unstack"]("breakCode");
}else{
this["stack"]("breakCode");
this["breakCode"] = "break;";
PL$26/*res*/["push"]("switch (");
PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));
PL$26/*res*/["push"]("){\n");
PL$41/*i*/ = 0;
for(PL$41/*i*/ = 0;(PL$41/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$41/*i*/){{
  PL$46/*currentCase*/ = PL$24/*par*/["cases"][PL$41/*i*/];
  if((PL$46/*currentCase*/["type"] != "SwitchCase")){
    this["error"](PL$24/*par*/, PL$11/*errorMsg*/["unknownCase"]);
  };
  ;
  if(PL$46/*currentCase*/["test"]){
    PL$26/*res*/["push"]("case ");
    PL$26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$46/*currentCase*/["test"])));
    PL$26/*res*/["push"](":\n");
  }else{
  PL$26/*res*/["push"]("default");
  PL$26/*res*/["push"](":\n");
  };
  ;
  PL$26/*res*/["push"](this["blockCreator"](PL$46/*currentCase*/["consequent"]));}};
;
PL$26/*res*/["push"]("}\n");
this["unstack"]("breakCode");
};
;
this["unstack"]("conditionalCode");
this["unstack"]("algorithmicCode");
PL$26/*res*/["setType"](PL$19/*statementType*/);
return PL$26/*res*/;;
;});
;});
PL$25/*f*/["apply"](PL$23/*parInstance*/, [PL$24/*par*/]);
;})); return;;
PL$1.resolve(); return;;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();