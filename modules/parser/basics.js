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

if (promiseland._hasModule({ hashStr: "fd537a0410655be5ac8cae2363b1e88f" })){ return promiseland._getModule("fd537a0410655be5ac8cae2363b1e88f"); };
var PL$5/*RegExp*/;try{PL$5/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*_stringEncodeStr*/;
var PL$6/*stringEncodeStr*/;
var PL$7/*errorFun*/;
var PL$9/*errorMsg*/;
;
PL$2/*_stringEncodeStr*/ = (function(PL$3/*par*/){
var PL$4/*s*/;
;
PL$4/*s*/ = PL$3/*par*/["replace"](new PL$5/*RegExp*/("\\\\", "g"), "\\\\");
PL$4/*s*/ = PL$4/*s*/["replace"](new PL$5/*RegExp*/("\\n", "g"), "\\n");;
PL$4/*s*/ = PL$4/*s*/["replace"](new PL$5/*RegExp*/("\\r", "g"), "\\r");;
PL$4/*s*/ = PL$4/*s*/["replace"](new PL$5/*RegExp*/("\\\"", "g"), "\\\"");;
PL$4/*s*/ = PL$4/*s*/["replace"](new PL$5/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$4/*s*/ = PL$4/*s*/["replace"](new PL$5/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$4/*s*/;;
;
});
PL$6/*stringEncodeStr*/ = (function(PL$3/*par*/){
;
return (("\"" + PL$2/*_stringEncodeStr*/(PL$3/*par*/)) + "\"");;
;
});
PL$7/*errorFun*/ = (function(PL$3/*par*/, PL$8/*err*/){
;
if((! PL$3/*par*/ || ! PL$3/*par*/["line"])){
throw PL$9/*errorMsg*/["internalParserInfoMissing"];
};
;
PL$8/*err*/["line"] = PL$3/*par*/["line"];;
PL$8/*err*/["column"] = PL$3/*par*/["column"];;
throw PL$8/*err*/;
;
});
PL$9/*errorMsg*/ = {"typeExists": {"id": 100,
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
return {"errorFun": PL$7/*errorFun*/,
"errorMsg": PL$9/*errorMsg*/,
"_stringEncodeStr": PL$2/*_stringEncodeStr*/,
"stringEncodeStr": PL$6/*stringEncodeStr*/};;
;
})();
;return PL$1;
});
})();