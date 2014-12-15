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

if (promiseland._hasModule({ hashStr: "3b763441a2c5c2edd6f62b60b8e8d97a" })){ return promiseland._getModule("3b763441a2c5c2edd6f62b60b8e8d97a"); };
var PL$3/*promiseland*/;try{PL$3/*promiseland*/ = promiseland;}catch(e){};
var PL$7/*RegExp*/;try{PL$7/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*Map*/;
var PL$4/*_stringEncodeStr*/;
var PL$8/*stringEncodeStr*/;
var PL$9/*errorFun*/;
var PL$12/*identifierName*/;
var PL$13/*checkIsFunction*/;
var PL$17/*VariableNames*/;
var PL$18/*mixin*/;
var PL$24/*addExtraToPar*/;
var PL$27/*getExtraFromPar*/;
var PL$28/*statementType*/;
var PL$29/*checkPromising*/;
var PL$11/*errorMsg*/;
;
PL$2/*Map*/ = PL$3/*promiseland*/["Map"];
PL$4/*_stringEncodeStr*/ = (function(PL$5/*par*/){
var PL$6/*s*/;
;
PL$6/*s*/ = PL$5/*par*/["replace"](new PL$7/*RegExp*/("\\\\", "g"), "\\\\");
PL$6/*s*/ = PL$6/*s*/["replace"](new PL$7/*RegExp*/("\\n", "g"), "\\n");;
PL$6/*s*/ = PL$6/*s*/["replace"](new PL$7/*RegExp*/("\\r", "g"), "\\r");;
PL$6/*s*/ = PL$6/*s*/["replace"](new PL$7/*RegExp*/("\\\"", "g"), "\\\"");;
PL$6/*s*/ = PL$6/*s*/["replace"](new PL$7/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$6/*s*/ = PL$6/*s*/["replace"](new PL$7/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$6/*s*/;;
;
});
PL$8/*stringEncodeStr*/ = (function(PL$5/*par*/){
;
return (("\"" + PL$4/*_stringEncodeStr*/(PL$5/*par*/)) + "\"");;
;
});
PL$9/*errorFun*/ = (function(PL$5/*par*/, PL$10/*err*/){
;
if((! PL$5/*par*/ || ! PL$5/*par*/["line"])){
throw PL$11/*errorMsg*/["internalParserInfoMissing"];
};
;
PL$10/*err*/["line"] = PL$5/*par*/["line"];;
PL$10/*err*/["column"] = PL$5/*par*/["column"];;
throw PL$10/*err*/;
;
});
PL$12/*identifierName*/ = (function(PL$5/*par*/){
;
if((typeof PL$5/*par*/ == "string")){
return PL$5/*par*/;;
};
;
if((PL$5/*par*/["type"] == "Literal")){
return PL$5/*par*/["value"];;
};
;
return PL$5/*par*/["name"];;
;
});
PL$13/*checkIsFunction*/ = (function(PL$5/*par*/){
;
if((((PL$5/*par*/["type"] == "FunctionExpression") || (PL$5/*par*/["type"] == "FunctionDeclaration")) || (PL$5/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
PL$17/*VariableNames*/ = (function(){var PL$14/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$5/*par*/){
;
this["givenNames"] = (PL$5/*par*/["givenNames"] || new PL$2/*Map*/());;
this["getUniqueName"] = PL$5/*par*/["getUniqueName"];;
;
}),
"get": (function(PL$15/*name*/){
var PL$16/*n*/;
;
PL$16/*n*/ = PL$12/*identifierName*/(PL$15/*name*/);
if((PL$16/*n*/ === "undefined")){
return PL$16/*n*/;;
};
;
if(! this["givenNames"]["get"](PL$16/*n*/)){
this["givenNames"]["set"](PL$16/*n*/, (((this["getUniqueName"]() + "/*") + PL$16/*n*/) + "*/"));;
};
;
return this["givenNames"]["get"](PL$16/*n*/);;
;
})}, [], PL$14/*inherited*/);
return res; })();PL$17/*VariableNames*/;;
PL$18/*mixin*/ = (function(){
var PL$19/*t*/;
var PL$21/*i*/;
var PL$22/*m*/;
var PL$23/*p*/;
var PL$20/*arguments*/ = arguments;
;
PL$19/*t*/ = PL$20/*arguments*/[0];
PL$21/*i*/ = 0;
for(PL$21/*i*/ = 1;(PL$21/*i*/ < PL$20/*arguments*/["length"]);++PL$21/*i*/){{PL$22/*m*/ = PL$20/*arguments*/[PL$21/*i*/];
for(PL$23/*p*/ in PL$22/*m*/){PL$19/*t*/[PL$23/*p*/] = PL$22/*m*/[PL$23/*p*/];;
};
;
}};
;
return PL$19/*t*/;;
;
});
PL$24/*addExtraToPar*/ = (function(PL$5/*par*/, PL$25/*property*/, PL$26/*obj*/){
;
if(! PL$5/*par*/["_extrainfo"]){
PL$5/*par*/["_extrainfo"] = {};;
};
;
PL$5/*par*/["_extrainfo"][PL$25/*property*/] = PL$26/*obj*/;;
;
});
PL$27/*getExtraFromPar*/ = (function(PL$5/*par*/, PL$25/*property*/){
;
if(PL$5/*par*/["_extrainfo"]){
return PL$5/*par*/["_extrainfo"][PL$25/*property*/];;
};
;
;
});
PL$28/*statementType*/ = {"builtin": true,
"statement": true};
PL$29/*checkPromising*/ = (function(PL$5/*par*/){
;
if((! PL$5/*par*/ || (typeof PL$5/*par*/ == "string"))){
return false;;
};
;
if((typeof PL$5/*par*/["isPromising"] == "function")){
return PL$5/*par*/["isPromising"]();;
};
;
return (PL$5/*par*/["promising"] || PL$5/*par*/["isPromising"]);;
;
});
PL$11/*errorMsg*/ = {"typeExists": {"id": 100,
"msg": "type already exists"},
"needsClassBodyLiteral": {"id": 101,
"msg": "class types need to be defined with a literal body"},
"usedUntyped": {"id": 102,
"msg": "variable already in use without type"},
"variableRedefinition": {"id": 103,
"msg": "ilegal variable redefinition"},
"expectedVar": {"id": 104,
"msg": "type missmatch: expected var"},
"typeUndeclared": {"id": 105,
"msg": "type undeclared"},
"notABlockStatment": {"id": 106,
"msg": "not a block statement"},
"missingDeclarations": {"id": 107,
"msg": "missing Declarations"},
"functionFrameInDynamicCode": {"id": 108,
"msg": "function frame is not allowed in dynamic code"},
"unknownIfStatement": {"id": 109,
"msg": "unknown if statement "},
"unknownElseStatement": {"id": 109,
"msg": "unknown else statement "},
"unknownPropertyAssignmentType": {"id": 110,
"msg": "unknown property assignment"},
"severalProgramElements": {"id": 111,
"msg": "several Program Elements"},
"variableHasNoType": {"id": 112,
"msg": "variable has no type"},
"expectedCallable": {"id": 113,
"msg": "expected callable expression"},
"typeLookupFailed": {"id": 114,
"msg": "type lookup failed"},
"dynamicTypeCantBeDefined": {"id": 115,
"msg": "dynamic type can not be defined"},
"typeRedefinition": {"id": 116,
"msg": "type redefinition"},
"unresolvedType": {"id": 117,
"msg": "unresolved Type"},
"inheritedOnlyInMember": {"id": 118,
"msg": "inherited is only available within member functions"},
"expectedMemberExpression": {"id": 119,
"msg": "expected member expression"},
"noComputedMembersAllowed": {"id": 120,
"msg": "no computed member allowed here"},
"unknownConnect": {"id": 121,
"msg": "unknown connect"},
"returnNotAllowedHere": {"id": 122,
"msg": "return not allowed here"},
"unknownCase": {"id": 123,
"msg": "unknown case"},
"templateSyntaxError": {"id": 400,
"msg": "template syntax error"},
"internalMissingResultType": {"id": 1000,
"msg": "internal: result type missing"},
"differentTypesInVariableDeclaration": {"id": 1001,
"msg": "internal: different type in variable declaration"},
"notImplemented": {"id": 1002,
"msg": "internal: not implemented"},
"internalUnknownLiteralType": {"id": 1003,
"msg": "internal: unknown literal type"},
"internalMissingType": {"id": 1004,
"msg": "internal: missing type"},
"unknownType": {"id": 1005,
"msg": "internal: unknown script element type"},
"multipleTypeProviding": {"id": 1006,
"msg": "internal: multiple types provided",
"additional": "pls provide this error in a github issue"},
"internalMissingTypeProperty": {"id": 1007,
"msg": "internal: missing type property",
"additional": "pls provide this error in a github issue"},
"internalCantAddToStringResult": {"id": 1008,
"msg": "internal: can not add to string result",
"additional": "pls provide this error in a github issue"},
"internalWrongUseOfReference": {"id": 1009,
"msg": "internal: wrong use of Reference",
"additional": "pls provide this error in a github issue"},
"internalNegativeStringEncode": {"id": 1010,
"msg": "internal: negative string encode",
"additional": "pls provide this error in a github issue"},
"internalTypeHasNoName": {"id": 1011,
"msg": "internal: type has no name",
"additional": "pls provide this error in a github issue"},
"internalParserInfoMissing": {"id": 1012,
"msg": "internal: missing parser info",
"additional": "pls provide this error in a github issue"}};
return {"errorFun": PL$9/*errorFun*/,
"errorMsg": PL$11/*errorMsg*/,
"_stringEncodeStr": PL$4/*_stringEncodeStr*/,
"stringEncodeStr": PL$8/*stringEncodeStr*/,
"VariableNames": PL$17/*VariableNames*/,
"identifierName": PL$12/*identifierName*/,
"checkIsFunction": PL$13/*checkIsFunction*/,
"mixin": PL$18/*mixin*/,
"addExtraToPar": PL$24/*addExtraToPar*/,
"getExtraFromPar": PL$27/*getExtraFromPar*/,
"statementType": PL$28/*statementType*/,
"checkPromising": PL$29/*checkPromising*/};;
;
})();
;return PL$1;
});
})();