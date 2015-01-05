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

if (promiseland._hasModule({ hashStr: "2267d37fbbc2ecb90d64c30ce93f2df0" })){ return promiseland._getModule("2267d37fbbc2ecb90d64c30ce93f2df0"); };
var PL$20/*RegExp*/;try{PL$20/*RegExp*/ = RegExp;}catch(e){};
var PL$23/*Error*/;try{PL$23/*Error*/ = Error;}catch(e){};
var PL$31/*String*/;try{PL$31/*String*/ = String;}catch(e){};
var PL$55/*code**/;try{PL$55/*code**/ = code*;}catch(e){};
var PL$70/*parseInt*/;try{PL$70/*parseInt*/ = parseInt;}catch(e){};
var PL$73/*parseFloat*/;try{PL$73/*parseFloat*/ = parseFloat;}catch(e){};
var PL$158/*Array*/;try{PL$158/*Array*/ = Array;}catch(e){};
var PL$186/*Object*/;try{PL$186/*Object*/ = Object;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*exports*/;
var PL$3/*Token*/;
var PL$4/*TokenName*/;
var PL$5/*FnExprTokens*/;
var PL$6/*Syntax*/;
var PL$7/*PlaceHolders*/;
var PL$8/*PropertyKind*/;
var PL$9/*Messages*/;
var PL$10/*Regex*/;
var PL$11/*source*/;
var PL$12/*strict*/;
var PL$13/*index*/;
var PL$14/*lineNumber*/;
var PL$15/*lineStart*/;
var PL$16/*length*/;
var PL$17/*lookahead*/;
var PL$18/*state*/;
var PL$19/*extra*/;
var PL$24/*assert*/;
var PL$26/*isDecimalDigit*/;
var PL$27/*isHexDigit*/;
var PL$28/*isOctalDigit*/;
var PL$29/*isWhiteSpace*/;
var PL$30/*isLineTerminator*/;
var PL$32/*isIdentifierStart*/;
var PL$33/*isIdentifierPart*/;
var PL$35/*isFutureReservedWord*/;
var PL$36/*isStrictModeReservedWord*/;
var PL$37/*isRestrictedWord*/;
var PL$38/*isKeyword*/;
var PL$45/*addComment*/;
var PL$47/*skipSingleLineComment*/;
var PL$49/*skipMultiLineComment*/;
var PL$50/*skipComment*/;
var PL$56/*scanHexEscape*/;
var PL$59/*scanUnicodeCodePointEscape*/;
var PL$60/*getEscapedIdentifier*/;
var PL$61/*getIdentifier*/;
var PL$62/*scanIdentifier*/;
var PL$68/*scanPunctuator*/;
var PL$71/*scanHexLiteral*/;
var PL$72/*scanOctalLiteral*/;
var PL$74/*scanNumericLiteral*/;
var PL$82/*scanStringLiteral*/;
var PL$90/*testRegExp*/;
var PL$94/*scanRegExpBody*/;
var PL$96/*scanRegExpFlags*/;
var PL$97/*scanRegExp*/;
var PL$101/*collectRegex*/;
var PL$102/*isIdentifierName*/;
var PL$105/*advanceSlash*/;
var PL$106/*advance*/;
var PL$108/*collectToken*/;
var PL$109/*lex*/;
var PL$111/*peek*/;
var PL$112/*Position*/;
var PL$113/*SourceLocation*/;
var PL$115/*WrappingSourceLocation*/;
var PL$116/*Node*/;
var PL$117/*WrappingNode*/;
var PL$155/*peekLineTerminator*/;
var PL$48/*throwError*/;
var PL$95/*throwErrorTolerant*/;
var PL$162/*throwUnexpected*/;
var PL$163/*expect*/;
var PL$164/*expectTolerant*/;
var PL$166/*expectKeyword*/;
var PL$167/*match*/;
var PL$168/*matchKeyword*/;
var PL$170/*matchAssign*/;
var PL$171/*consumeSemicolon*/;
var PL$173/*isLeftHandSide*/;
var PL$176/*parseArrayInitialiser*/;
var PL$180/*parsePropertyFunction*/;
var PL$181/*parseObjectPropertyKey*/;
var PL$183/*parseObjectProperty*/;
var PL$187/*parseObjectInitialiser*/;
var PL$189/*parseGroupExpression*/;
var PL$191/*parsePrimaryExpression*/;
var PL$192/*parseArguments*/;
var PL$193/*parseNonComputedProperty*/;
var PL$194/*parseNonComputedMember*/;
var PL$195/*parseComputedMember*/;
var PL$197/*parseNewExpression*/;
var PL$199/*parseLeftHandSideExpressionAllowCall*/;
var PL$196/*parseLeftHandSideExpression*/;
var PL$200/*parsePostfixExpression*/;
var PL$201/*parseUnaryExpression*/;
var PL$204/*binaryPrecedence*/;
var PL$208/*parseBinaryExpression*/;
var PL$209/*parseConditionalExpression*/;
var PL$210/*parseConciseBody*/;
var PL$215/*reinterpretAsCoverFormalsList*/;
var PL$216/*parseArrowFunctionExpression*/;
var PL$175/*parseAssignmentExpression*/;
var PL$188/*parseExpression*/;
var PL$221/*parseStatementList*/;
var PL$222/*parseBlock*/;
var PL$182/*parseVariableIdentifier*/;
var PL$223/*parseVariableDeclaration*/;
var PL$224/*parseVariableDeclarationList*/;
var PL$225/*parseVariableStatement*/;
var PL$226/*parseConstLetDeclaration*/;
var PL$227/*parseEmptyStatement*/;
var PL$228/*parseExpressionStatement*/;
var PL$230/*parseIfStatement*/;
var PL$232/*parseDoWhileStatement*/;
var PL$233/*parseWhileStatement*/;
var PL$234/*parseForVariableDeclaration*/;
var PL$235/*parseForStatement*/;
var PL$236/*parseContinueStatement*/;
var PL$237/*parseBreakStatement*/;
var PL$238/*parseReturnStatement*/;
var PL$239/*parseWithStatement*/;
var PL$240/*parseSwitchCase*/;
var PL$244/*parseSwitchStatement*/;
var PL$245/*parseThrowStatement*/;
var PL$246/*parseCatchClause*/;
var PL$247/*parseTryStatement*/;
var PL$248/*parseDebuggerStatement*/;
var PL$229/*parseStatement*/;
var PL$179/*parseFunctionSourceElements*/;
var PL$214/*validateParam*/;
var PL$258/*parseParam*/;
var PL$259/*parseParams*/;
var PL$250/*parseFunctionDeclaration*/;
var PL$190/*parseFunctionExpression*/;
var PL$220/*parseSourceElement*/;
var PL$261/*parseSourceElements*/;
var PL$262/*parseProgram*/;
var PL$264/*filterTokenLocation*/;
var PL$266/*tokenize*/;
var PL$268/*parse*/;
var PL$24/*assert*/ = function(PL$21/*condition*/, PL$22/*message*/){

  ;
  if(! PL$21/*condition*/){
    throw new PL$23/*Error*/(("ASSERT: " + PL$22/*message*/));
  };
  ;};
var PL$26/*isDecimalDigit*/ = function(PL$25/*ch*/){

  ;
  return ((PL$25/*ch*/ >= 48) && (PL$25/*ch*/ <= 57));
  ;};
var PL$27/*isHexDigit*/ = function(PL$25/*ch*/){

  ;
  return ("0123456789abcdefABCDEF"["indexOf"](PL$25/*ch*/) >= 0);
  ;};
var PL$28/*isOctalDigit*/ = function(PL$25/*ch*/){

  ;
  return ("01234567"["indexOf"](PL$25/*ch*/) >= 0);
  ;};
var PL$29/*isWhiteSpace*/ = function(PL$25/*ch*/){

  ;
  return ((((((PL$25/*ch*/ === 32) || (PL$25/*ch*/ === 9)) || (PL$25/*ch*/ === 11)) || (PL$25/*ch*/ === 12)) || (PL$25/*ch*/ === 160)) || ((PL$25/*ch*/ >= 5760) && ([5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279]["indexOf"](PL$25/*ch*/) >= 0)));
  ;};
var PL$30/*isLineTerminator*/ = function(PL$25/*ch*/){

  ;
  return ((((PL$25/*ch*/ === 10) || (PL$25/*ch*/ === 13)) || (PL$25/*ch*/ === 8232)) || (PL$25/*ch*/ === 8233));
  ;};
var PL$32/*isIdentifierStart*/ = function(PL$25/*ch*/){

  ;
  return ((((((PL$25/*ch*/ === 36) || (PL$25/*ch*/ === 95)) || ((PL$25/*ch*/ >= 65) && (PL$25/*ch*/ <= 90))) || ((PL$25/*ch*/ >= 97) && (PL$25/*ch*/ <= 122))) || (PL$25/*ch*/ === 92)) || ((PL$25/*ch*/ >= 128) && PL$10/*Regex*/["NonAsciiIdentifierStart"]["test"](PL$31/*String*/["fromCharCode"](PL$25/*ch*/))));
  ;};
var PL$33/*isIdentifierPart*/ = function(PL$25/*ch*/){

  ;
  return (((((((PL$25/*ch*/ === 36) || (PL$25/*ch*/ === 95)) || ((PL$25/*ch*/ >= 65) && (PL$25/*ch*/ <= 90))) || ((PL$25/*ch*/ >= 97) && (PL$25/*ch*/ <= 122))) || ((PL$25/*ch*/ >= 48) && (PL$25/*ch*/ <= 57))) || (PL$25/*ch*/ === 92)) || ((PL$25/*ch*/ >= 128) && PL$10/*Regex*/["NonAsciiIdentifierPart"]["test"](PL$31/*String*/["fromCharCode"](PL$25/*ch*/))));
  ;};
var PL$35/*isFutureReservedWord*/ = function(PL$34/*id*/){

  ;
  switch (PL$34/*id*/){
case "class":
case "enum":
case "export":
case "extends":
case "import":
case "super":

  return true;default:

  return false;}
;
  ;};
var PL$36/*isStrictModeReservedWord*/ = function(PL$34/*id*/){

  ;
  switch (PL$34/*id*/){
case "implements":
case "interface":
case "package":
case "private":
case "protected":
case "public":
case "static":
case "yield":
case "let":

  return true;default:

  return false;}
;
  ;};
var PL$37/*isRestrictedWord*/ = function(PL$34/*id*/){

  ;
  return ((PL$34/*id*/ === "eval") || (PL$34/*id*/ === "arguments"));
  ;};
var PL$38/*isKeyword*/ = function(PL$34/*id*/){

  ;
  if((PL$12/*strict*/ && PL$36/*isStrictModeReservedWord*/(PL$34/*id*/))){
    return true;
  };
  switch (PL$34/*id*/["length"]){
case 2:

  return (((PL$34/*id*/ === "if") || (PL$34/*id*/ === "in")) || (PL$34/*id*/ === "do"));case 3:

  return (((((PL$34/*id*/ === "var") || (PL$34/*id*/ === "for")) || (PL$34/*id*/ === "new")) || (PL$34/*id*/ === "try")) || (PL$34/*id*/ === "let"));case 4:

  return ((((((PL$34/*id*/ === "this") || (PL$34/*id*/ === "else")) || (PL$34/*id*/ === "case")) || (PL$34/*id*/ === "void")) || (PL$34/*id*/ === "with")) || (PL$34/*id*/ === "enum"));case 5:

  return ((((((((PL$34/*id*/ === "while") || (PL$34/*id*/ === "break")) || (PL$34/*id*/ === "catch")) || (PL$34/*id*/ === "throw")) || (PL$34/*id*/ === "const")) || (PL$34/*id*/ === "yield")) || (PL$34/*id*/ === "class")) || (PL$34/*id*/ === "super"));case 6:

  return ((((((PL$34/*id*/ === "return") || (PL$34/*id*/ === "typeof")) || (PL$34/*id*/ === "delete")) || (PL$34/*id*/ === "switch")) || (PL$34/*id*/ === "export")) || (PL$34/*id*/ === "import"));case 7:

  return (((PL$34/*id*/ === "default") || (PL$34/*id*/ === "finally")) || (PL$34/*id*/ === "extends"));case 8:

  return (((PL$34/*id*/ === "function") || (PL$34/*id*/ === "continue")) || (PL$34/*id*/ === "debugger"));case 10:

  return (PL$34/*id*/ === "instanceof");default:

  return false;}
;
  ;};
var PL$45/*addComment*/ = function(PL$39/*type*/, PL$40/*value*/, PL$41/*start*/, PL$42/*end*/, PL$43/*loc*/){
var PL$44/*comment*/;

  ;
  PL$44/*comment*/;
  PL$24/*assert*/((typeof PL$41/*start*/ === "number"), "Comment must have valid position");
  if((PL$18/*state*/["lastCommentStart"] >= PL$41/*start*/)){
    return;
  };
  PL$18/*state*/["lastCommentStart"] = PL$41/*start*/;
  PL$44/*comment*/ = {"type": PL$39/*type*/,
"value": PL$40/*value*/};
  if(PL$19/*extra*/["range"]){
    PL$44/*comment*/["range"] = [PL$41/*start*/, PL$42/*end*/];
  };
  if(PL$19/*extra*/["loc"]){
    PL$44/*comment*/["loc"] = PL$43/*loc*/;
  };
  PL$19/*extra*/["comments"]["push"](PL$44/*comment*/);
  if(PL$19/*extra*/["attachComment"]){
    PL$19/*extra*/["leadingComments"]["push"](PL$44/*comment*/);
    PL$19/*extra*/["trailingComments"]["push"](PL$44/*comment*/);
  };
  ;};
var PL$47/*skipSingleLineComment*/ = function(PL$46/*offset*/){
var PL$41/*start*/;
var PL$43/*loc*/;
var PL$25/*ch*/;
var PL$44/*comment*/;

  ;
  PL$41/*start*/PL$43/*loc*/PL$25/*ch*/PL$44/*comment*/;
  PL$41/*start*/ = (PL$13/*index*/ - PL$46/*offset*/);
  PL$43/*loc*/ = {"start": {"line": PL$14/*lineNumber*/,
"column": ((PL$13/*index*/ - PL$15/*lineStart*/) - PL$46/*offset*/)}};
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
    ++PL$13/*index*/;
    if(PL$30/*isLineTerminator*/(PL$25/*ch*/)){
      if(PL$19/*extra*/["comments"]){
        PL$44/*comment*/ = PL$11/*source*/["slice"]((PL$41/*start*/ + PL$46/*offset*/), (PL$13/*index*/ - 1));
        PL$43/*loc*/["end"] = {"line": PL$14/*lineNumber*/,
"column": ((PL$13/*index*/ - PL$15/*lineStart*/) - 1)};
        PL$45/*addComment*/("Line", PL$44/*comment*/, PL$41/*start*/, (PL$13/*index*/ - 1), PL$43/*loc*/);
      };
      if(((PL$25/*ch*/ === 13) && (PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 10))){
        ++PL$13/*index*/;
      };
      ++PL$14/*lineNumber*/;
      PL$15/*lineStart*/ = PL$13/*index*/;
      return;
    };}};
  if(PL$19/*extra*/["comments"]){
    PL$44/*comment*/ = PL$11/*source*/["slice"]((PL$41/*start*/ + PL$46/*offset*/), PL$13/*index*/);
    PL$43/*loc*/["end"] = {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)};
    PL$45/*addComment*/("Line", PL$44/*comment*/, PL$41/*start*/, PL$13/*index*/, PL$43/*loc*/);
  };
  ;};
var PL$49/*skipMultiLineComment*/ = function(){
var PL$41/*start*/;
var PL$43/*loc*/;
var PL$25/*ch*/;
var PL$44/*comment*/;

  ;
  PL$41/*start*/PL$43/*loc*/PL$25/*ch*/PL$44/*comment*/;
  if(PL$19/*extra*/["comments"]){
    PL$41/*start*/ = (PL$13/*index*/ - 2);
    PL$43/*loc*/ = {"start": {"line": PL$14/*lineNumber*/,
"column": ((PL$13/*index*/ - PL$15/*lineStart*/) - 2)}};
  };
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
    if(PL$30/*isLineTerminator*/(PL$25/*ch*/)){
      if(((PL$25/*ch*/ === 13) && (PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1)) === 10))){
        ++PL$13/*index*/;
      };
      ++PL$14/*lineNumber*/;
      ++PL$13/*index*/;
      PL$15/*lineStart*/ = PL$13/*index*/;
      if((PL$13/*index*/ >= PL$16/*length*/)){
        PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      };
    }else{
    if((PL$25/*ch*/ === 42)){
      if((PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1)) === 47)){
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        if(PL$19/*extra*/["comments"]){
          PL$44/*comment*/ = PL$11/*source*/["slice"]((PL$41/*start*/ + 2), (PL$13/*index*/ - 2));
          PL$43/*loc*/["end"] = {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)};
          PL$45/*addComment*/("Block", PL$44/*comment*/, PL$41/*start*/, PL$13/*index*/, PL$43/*loc*/);
        };
        return;
      };
      ++PL$13/*index*/;
    }else{
    ++PL$13/*index*/;
    };
    };}};
  PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  ;};
var PL$50/*skipComment*/ = function(){
var PL$25/*ch*/;
var PL$41/*start*/;

  ;
  PL$25/*ch*/PL$41/*start*/;
  PL$41/*start*/ = (PL$13/*index*/ === 0);
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
    if(PL$29/*isWhiteSpace*/(PL$25/*ch*/)){
      ++PL$13/*index*/;
    }else{
    if(PL$30/*isLineTerminator*/(PL$25/*ch*/)){
      ++PL$13/*index*/;
      if(((PL$25/*ch*/ === 13) && (PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 10))){
        ++PL$13/*index*/;
      };
      ++PL$14/*lineNumber*/;
      PL$15/*lineStart*/ = PL$13/*index*/;
      PL$41/*start*/ = true;
    }else{
    if((PL$25/*ch*/ === 47)){
      PL$25/*ch*/ = PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1));
      if((PL$25/*ch*/ === 47)){
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        PL$47/*skipSingleLineComment*/(2);
        PL$41/*start*/ = true;
      }else{
      if((PL$25/*ch*/ === 42)){
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        PL$49/*skipMultiLineComment*/();
      }else{
      break;;
      };
      };
    }else{
    if((PL$41/*start*/ && (PL$25/*ch*/ === 45))){
      if(((PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1)) === 45) && (PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 2)) === 62))){
        PL$13/*index*/ += 3;
        PL$47/*skipSingleLineComment*/(3);
      }else{
      break;;
      };
    }else{
    if((PL$25/*ch*/ === 60)){
      if((PL$11/*source*/["slice"]((PL$13/*index*/ + 1), (PL$13/*index*/ + 4)) === "!--")){
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        ++PL$13/*index*/;
        PL$47/*skipSingleLineComment*/(4);
      }else{
      break;;
      };
    }else{
    break;;
    };
    };
    };
    };
    };}};
  ;};
var PL$56/*scanHexEscape*/ = function(PL$51/*prefix*/){
var PL$52/*i*/;
var PL$53/*len*/;
var PL$25/*ch*/;
var PL$54/*code*/;

  ;
  PL$52/*i*/PL$53/*len*/PL$25/*ch*/PL$54/*code*/ = 0;
  PL$53/*len*/ = ((PL$51/*prefix*/ === "u") ? 4 : 2);
  for(PL$52/*i*/ = 0;(PL$52/*i*/ < PL$53/*len*/);++PL$52/*i*/){{
    if(((PL$13/*index*/ < PL$16/*length*/) && PL$27/*isHexDigit*/(PL$11/*source*/[PL$13/*index*/]))){
      PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
      PL$54/*code*/ = ((PL$55/*code**/ * 16) + "0123456789abcdef"["indexOf"](PL$25/*ch*/["toLowerCase"]()));
    }else{
    return "";
    };}};
  return PL$31/*String*/["fromCharCode"](PL$54/*code*/);
  ;};
var PL$59/*scanUnicodeCodePointEscape*/ = function(){
var PL$25/*ch*/;
var PL$54/*code*/;
var PL$57/*cu1*/;
var PL$58/*cu2*/;

  ;
  PL$25/*ch*/PL$54/*code*/PL$57/*cu1*/PL$58/*cu2*/;
  PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
  PL$54/*code*/ = 0;
  if((PL$25/*ch*/ === "}")){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
    if(! PL$27/*isHexDigit*/(PL$25/*ch*/)){
      break;;
    };
    PL$54/*code*/ = ((PL$55/*code**/ * 16) + "0123456789abcdef"["indexOf"](PL$25/*ch*/["toLowerCase"]()));}};
  if(((PL$54/*code*/ > 1114111) || (PL$25/*ch*/ !== "}"))){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  if((PL$54/*code*/ <= 65535)){
    return PL$31/*String*/["fromCharCode"](PL$54/*code*/);
  };
  PL$57/*cu1*/ = (((PL$54/*code*/ - 65536) >> 10) + 55296);
  PL$58/*cu2*/ = (((PL$54/*code*/ - 65536) & 1023) + 56320);
  return PL$31/*String*/["fromCharCode"](PL$57/*cu1*/, PL$58/*cu2*/);
  ;};
var PL$60/*getEscapedIdentifier*/ = function(){
var PL$25/*ch*/;
var PL$34/*id*/;

  ;
  PL$25/*ch*/PL$34/*id*/;
  PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/++);
  PL$34/*id*/ = PL$31/*String*/["fromCharCode"](PL$25/*ch*/);
  if((PL$25/*ch*/ === 92)){
    if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) !== 117)){
      PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
    };
    ++PL$13/*index*/;
    PL$25/*ch*/ = PL$56/*scanHexEscape*/("u");
    if(((! PL$25/*ch*/ || (PL$25/*ch*/ === "\\")) || ! PL$32/*isIdentifierStart*/(PL$25/*ch*/["charCodeAt"](0)))){
      PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
    };
    PL$34/*id*/ = PL$25/*ch*/;
  };
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
    if(! PL$33/*isIdentifierPart*/(PL$25/*ch*/)){
      break;;
    };
    ++PL$13/*index*/;
    PL$34/*id*/ += PL$31/*String*/["fromCharCode"](PL$25/*ch*/);
    if((PL$25/*ch*/ === 92)){
      PL$34/*id*/ = PL$34/*id*/["substr"](0, (PL$34/*id*/["length"] - 1));
      if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) !== 117)){
        PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      };
      ++PL$13/*index*/;
      PL$25/*ch*/ = PL$56/*scanHexEscape*/("u");
      if(((! PL$25/*ch*/ || (PL$25/*ch*/ === "\\")) || ! PL$33/*isIdentifierPart*/(PL$25/*ch*/["charCodeAt"](0)))){
        PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      };
      PL$34/*id*/ += PL$25/*ch*/;
    };}};
  return PL$34/*id*/;
  ;};
var PL$61/*getIdentifier*/ = function(){
var PL$41/*start*/;
var PL$25/*ch*/;

  ;
  PL$41/*start*/PL$25/*ch*/;
  PL$41/*start*/ = PL$13/*index*/++;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
    if((PL$25/*ch*/ === 92)){
      PL$13/*index*/ = PL$41/*start*/;
      return PL$60/*getEscapedIdentifier*/();
    };
    if(PL$33/*isIdentifierPart*/(PL$25/*ch*/)){
      ++PL$13/*index*/;
    }else{
    break;;
    };}};
  return PL$11/*source*/["slice"](PL$41/*start*/, PL$13/*index*/);
  ;};
var PL$62/*scanIdentifier*/ = function(){
var PL$41/*start*/;
var PL$34/*id*/;
var PL$39/*type*/;

  ;
  PL$41/*start*/PL$34/*id*/PL$39/*type*/;
  PL$41/*start*/ = PL$13/*index*/;
  PL$34/*id*/ = ((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 92) ? PL$60/*getEscapedIdentifier*/() : PL$61/*getIdentifier*/());
  if((PL$34/*id*/["length"] === 1)){
    PL$39/*type*/ = PL$3/*Token*/["Identifier"];
  }else{
  if(PL$38/*isKeyword*/(PL$34/*id*/)){
    PL$39/*type*/ = PL$3/*Token*/["Keyword"];
  }else{
  if((PL$34/*id*/ === "null")){
    PL$39/*type*/ = PL$3/*Token*/["NullLiteral"];
  }else{
  if(((PL$34/*id*/ === "true") || (PL$34/*id*/ === "false"))){
    PL$39/*type*/ = PL$3/*Token*/["BooleanLiteral"];
  }else{
  PL$39/*type*/ = PL$3/*Token*/["Identifier"];
  };
  };
  };
  };
  return {"type": PL$39/*type*/,
"value": PL$34/*id*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$68/*scanPunctuator*/ = function(){
var PL$41/*start*/;
var PL$54/*code*/;
var PL$63/*code2*/;
var PL$64/*ch1*/;
var PL$65/*ch2*/;
var PL$66/*ch3*/;
var PL$67/*ch4*/;

  ;
  PL$41/*start*/ = PL$13/*index*/PL$54/*code*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/)PL$63/*code2*/PL$64/*ch1*/ = PL$11/*source*/[PL$13/*index*/]PL$65/*ch2*/PL$66/*ch3*/PL$67/*ch4*/;
  switch (PL$54/*code*/){
case 46:
case 40:
case 41:
case 59:
case 44:
case 123:
case 125:
case 91:
case 93:
case 58:
case 63:
case 126:

  ++PL$13/*index*/;
  if(PL$19/*extra*/["tokenize"]){
    if((PL$54/*code*/ === 40)){
      PL$19/*extra*/["openParenToken"] = PL$19/*extra*/["tokens"]["length"];
    }else{
    if((PL$54/*code*/ === 123)){
      PL$19/*extra*/["openCurlyToken"] = PL$19/*extra*/["tokens"]["length"];
    };
    };
  };
  return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$31/*String*/["fromCharCode"](PL$54/*code*/),
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};default:

  PL$63/*code2*/ = PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1));
  if((PL$63/*code2*/ === 61)){
    switch (PL$54/*code*/){
case 43:
case 45:
case 47:
case 60:
case 62:
case 94:
case 124:
case 37:
case 38:
case 42:

    PL$13/*index*/ += 2;
    return {"type": PL$3/*Token*/["Punctuator"],
"value": (PL$31/*String*/["fromCharCode"](PL$54/*code*/) + PL$31/*String*/["fromCharCode"](PL$63/*code2*/)),
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};case 33:
case 61:

    PL$13/*index*/ += 2;
    if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 61)){
      ++PL$13/*index*/;
    };
    return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$11/*source*/["slice"](PL$41/*start*/, PL$13/*index*/),
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};}
;
  };}
;
  PL$67/*ch4*/ = PL$11/*source*/["substr"](PL$13/*index*/, 4);
  if((PL$67/*ch4*/ === ">>>=")){
    PL$13/*index*/ += 4;
    return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$67/*ch4*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  };
  PL$66/*ch3*/ = PL$67/*ch4*/["substr"](0, 3);
  if((((PL$66/*ch3*/ === ">>>") || (PL$66/*ch3*/ === "<<=")) || (PL$66/*ch3*/ === ">>="))){
    PL$13/*index*/ += 3;
    return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$66/*ch3*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  };
  PL$65/*ch2*/ = PL$66/*ch3*/["substr"](0, 2);
  if((((PL$64/*ch1*/ === PL$65/*ch2*/[1]) && ("+-<>&|"["indexOf"](PL$64/*ch1*/) >= 0)) || (PL$65/*ch2*/ === "=>"))){
    PL$13/*index*/ += 2;
    return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$65/*ch2*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  };
  if(("<>=!+-*%&|^/"["indexOf"](PL$64/*ch1*/) >= 0)){
    ++PL$13/*index*/;
    return {"type": PL$3/*Token*/["Punctuator"],
"value": PL$64/*ch1*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  };
  PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  ;};
var PL$71/*scanHexLiteral*/ = function(PL$41/*start*/){
var PL$69/*number*/;

  ;
  PL$69/*number*/ = "";
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(! PL$27/*isHexDigit*/(PL$11/*source*/[PL$13/*index*/])){
      break;;
    };
    PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];}};
  if((PL$69/*number*/["length"] === 0)){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  if(PL$32/*isIdentifierStart*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  return {"type": PL$3/*Token*/["NumericLiteral"],
"value": PL$70/*parseInt*/(("0x" + PL$69/*number*/), 16),
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$72/*scanOctalLiteral*/ = function(PL$41/*start*/){
var PL$69/*number*/;

  ;
  PL$69/*number*/ = ("0" + PL$11/*source*/[PL$13/*index*/++]);
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(! PL$28/*isOctalDigit*/(PL$11/*source*/[PL$13/*index*/])){
      break;;
    };
    PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];}};
  if((PL$32/*isIdentifierStart*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/)) || PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/)))){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  return {"type": PL$3/*Token*/["NumericLiteral"],
"value": PL$70/*parseInt*/(PL$69/*number*/, 8),
"octal": true,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$74/*scanNumericLiteral*/ = function(){
var PL$69/*number*/;
var PL$41/*start*/;
var PL$25/*ch*/;

  ;
  PL$69/*number*/PL$41/*start*/PL$25/*ch*/;
  PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
  PL$24/*assert*/((PL$26/*isDecimalDigit*/(PL$25/*ch*/["charCodeAt"](0)) || (PL$25/*ch*/ === ".")), "Numeric literal must start with a decimal digit or a decimal point");
  PL$41/*start*/ = PL$13/*index*/;
  PL$69/*number*/ = "";
  if((PL$25/*ch*/ !== ".")){
    PL$69/*number*/ = PL$11/*source*/[PL$13/*index*/++];
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
    if((PL$69/*number*/ === "0")){
      if(((PL$25/*ch*/ === "x") || (PL$25/*ch*/ === "X"))){
        ++PL$13/*index*/;
        return PL$71/*scanHexLiteral*/(PL$41/*start*/);
      };
      if(PL$28/*isOctalDigit*/(PL$25/*ch*/)){
        return PL$72/*scanOctalLiteral*/(PL$41/*start*/);
      };
      if((PL$25/*ch*/ && PL$26/*isDecimalDigit*/(PL$25/*ch*/["charCodeAt"](0)))){
        PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      };
    };
    while(PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
{
      PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];}};
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
  };
  if((PL$25/*ch*/ === ".")){
    PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];
    while(PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
{
      PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];}};
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
  };
  if(((PL$25/*ch*/ === "e") || (PL$25/*ch*/ === "E"))){
    PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
    if(((PL$25/*ch*/ === "+") || (PL$25/*ch*/ === "-"))){
      PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];
    };
    if(PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
      while(PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
{
        PL$69/*number*/ += PL$11/*source*/[PL$13/*index*/++];}};
    }else{
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
    };
  };
  if(PL$32/*isIdentifierStart*/(PL$11/*source*/["charCodeAt"](PL$13/*index*/))){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  return {"type": PL$3/*Token*/["NumericLiteral"],
"value": PL$73/*parseFloat*/(PL$69/*number*/),
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$82/*scanStringLiteral*/ = function(){
var PL$75/*str*/;
var PL$76/*quote*/;
var PL$41/*start*/;
var PL$25/*ch*/;
var PL$54/*code*/;
var PL$77/*unescaped*/;
var PL$78/*restore*/;
var PL$79/*octal*/;
var PL$80/*startLineNumber*/;
var PL$81/*startLineStart*/;

  ;
  PL$75/*str*/ = ""PL$76/*quote*/PL$41/*start*/PL$25/*ch*/PL$54/*code*/PL$77/*unescaped*/PL$78/*restore*/PL$79/*octal*/ = falsePL$80/*startLineNumber*/PL$81/*startLineStart*/;
  PL$80/*startLineNumber*/ = PL$14/*lineNumber*/;
  PL$81/*startLineStart*/ = PL$15/*lineStart*/;
  PL$76/*quote*/ = PL$11/*source*/[PL$13/*index*/];
  PL$24/*assert*/(((PL$76/*quote*/ === "'") || (PL$76/*quote*/ === "\"")), "String literal must starts with a quote");
  PL$41/*start*/ = PL$13/*index*/;
  ++PL$13/*index*/;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
    if((PL$25/*ch*/ === PL$76/*quote*/)){
      PL$76/*quote*/ = "";
      break;;
    }else{
    if((PL$25/*ch*/ === "\\")){
      PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
      if((! PL$25/*ch*/ || ! PL$30/*isLineTerminator*/(PL$25/*ch*/["charCodeAt"](0)))){
        switch (PL$25/*ch*/){
case "u":
case "x":

        if((PL$11/*source*/[PL$13/*index*/] === "{")){
          ++PL$13/*index*/;
          PL$75/*str*/ += PL$59/*scanUnicodeCodePointEscape*/();
        }else{
        PL$78/*restore*/ = PL$13/*index*/;
        PL$77/*unescaped*/ = PL$56/*scanHexEscape*/(PL$25/*ch*/);
        if(PL$77/*unescaped*/){
          PL$75/*str*/ += PL$77/*unescaped*/;
        }else{
        PL$13/*index*/ = PL$78/*restore*/;
        PL$75/*str*/ += PL$25/*ch*/;
        };
        };
        break;;case "n":

        PL$75/*str*/ += "\n";
        break;;case "r":

        PL$75/*str*/ += "\r";
        break;;case "t":

        PL$75/*str*/ += "	";
        break;;case "b":

        PL$75/*str*/ += "";
        break;;case "f":

        PL$75/*str*/ += "";
        break;;case "v":

        PL$75/*str*/ += "";
        break;;default:

        if(PL$28/*isOctalDigit*/(PL$25/*ch*/)){
          PL$54/*code*/ = "01234567"["indexOf"](PL$25/*ch*/);
          if((PL$54/*code*/ !== 0)){
            PL$79/*octal*/ = true;
          };
          if(((PL$13/*index*/ < PL$16/*length*/) && PL$28/*isOctalDigit*/(PL$11/*source*/[PL$13/*index*/]))){
            PL$79/*octal*/ = true;
            PL$54/*code*/ = ((PL$55/*code**/ * 8) + "01234567"["indexOf"](PL$11/*source*/[PL$13/*index*/++]));
            if(((("0123"["indexOf"](PL$25/*ch*/) >= 0) && (PL$13/*index*/ < PL$16/*length*/)) && PL$28/*isOctalDigit*/(PL$11/*source*/[PL$13/*index*/]))){
              PL$54/*code*/ = ((PL$55/*code**/ * 8) + "01234567"["indexOf"](PL$11/*source*/[PL$13/*index*/++]));
            };
          };
          PL$75/*str*/ += PL$31/*String*/["fromCharCode"](PL$54/*code*/);
        }else{
        PL$75/*str*/ += PL$25/*ch*/;
        };
        break;;}
;
      }else{
      ++PL$14/*lineNumber*/;
      if(((PL$25/*ch*/ === "\r") && (PL$11/*source*/[PL$13/*index*/] === "\n"))){
        ++PL$13/*index*/;
      };
      PL$15/*lineStart*/ = PL$13/*index*/;
      };
    }else{
    if(PL$30/*isLineTerminator*/(PL$25/*ch*/["charCodeAt"](0))){
      break;;
    }else{
    PL$75/*str*/ += PL$25/*ch*/;
    };
    };
    };}};
  if((PL$76/*quote*/ !== "")){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
  };
  return {"type": PL$3/*Token*/["StringLiteral"],
"value": PL$75/*str*/,
"octal": PL$79/*octal*/,
"startLineNumber": PL$80/*startLineNumber*/,
"startLineStart": PL$81/*startLineStart*/,
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$90/*testRegExp*/ = function(PL$83/*pattern*/, PL$84/*flags*/){
var PL$85/*tmp*/;
var PL$40/*value*/;

  ;
  PL$85/*tmp*/ = PL$83/*pattern*/PL$40/*value*/;
  if((PL$84/*flags*/["indexOf"]("u") >= 0)){
    PL$85/*tmp*/ = PL$85/*tmp*/["replace"](/\\u\{([0-9a-fA-F]+)\}/g, (function(PL$86/*$0*/, PL$87/*$1*/){
    
      ;
      if((PL$70/*parseInt*/(PL$87/*$1*/, 16) <= 1114111)){
        return "x";
      };
      PL$48/*throwError*/({}, PL$9/*Messages*/["InvalidRegExp"]);
      ;}))["replace"](/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x");
  };
  try
{
    PL$40/*value*/ = new PL$20/*RegExp*/(PL$85/*tmp*/);}catch(PL$88/*e*/){
    PL$48/*throwError*/({}, PL$9/*Messages*/["InvalidRegExp"]);};
  try
{
    return new PL$20/*RegExp*/(PL$83/*pattern*/, PL$84/*flags*/);}catch(PL$89/*exception*/){
    return null;};
  ;};
var PL$94/*scanRegExpBody*/ = function(){
var PL$25/*ch*/;
var PL$75/*str*/;
var PL$91/*classMarker*/;
var PL$92/*terminated*/;
var PL$93/*body*/;

  ;
  PL$25/*ch*/PL$75/*str*/PL$91/*classMarker*/PL$92/*terminated*/PL$93/*body*/;
  PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
  PL$24/*assert*/((PL$25/*ch*/ === "/"), "Regular expression literal must start with a slash");
  PL$75/*str*/ = PL$11/*source*/[PL$13/*index*/++];
  PL$91/*classMarker*/ = false;
  PL$92/*terminated*/ = false;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
    PL$75/*str*/ += PL$25/*ch*/;
    if((PL$25/*ch*/ === "\\")){
      PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/++];
      if(PL$30/*isLineTerminator*/(PL$25/*ch*/["charCodeAt"](0))){
        PL$48/*throwError*/({}, PL$9/*Messages*/["UnterminatedRegExp"]);
      };
      PL$75/*str*/ += PL$25/*ch*/;
    }else{
    if(PL$30/*isLineTerminator*/(PL$25/*ch*/["charCodeAt"](0))){
      PL$48/*throwError*/({}, PL$9/*Messages*/["UnterminatedRegExp"]);
    }else{
    if(PL$91/*classMarker*/){
      if((PL$25/*ch*/ === "]")){
        PL$91/*classMarker*/ = false;
      };
    }else{
    if((PL$25/*ch*/ === "/")){
      PL$92/*terminated*/ = true;
      break;;
    }else{
    if((PL$25/*ch*/ === "[")){
      PL$91/*classMarker*/ = true;
    };
    };
    };
    };
    };}};
  if(! PL$92/*terminated*/){
    PL$48/*throwError*/({}, PL$9/*Messages*/["UnterminatedRegExp"]);
  };
  PL$93/*body*/ = PL$75/*str*/["substr"](1, (PL$75/*str*/["length"] - 2));
  return {"value": PL$93/*body*/,
"literal": PL$75/*str*/};
  ;};
var PL$96/*scanRegExpFlags*/ = function(){
var PL$25/*ch*/;
var PL$75/*str*/;
var PL$84/*flags*/;
var PL$78/*restore*/;

  ;
  PL$25/*ch*/PL$75/*str*/PL$84/*flags*/PL$78/*restore*/;
  PL$75/*str*/ = "";
  PL$84/*flags*/ = "";
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
    if(! PL$33/*isIdentifierPart*/(PL$25/*ch*/["charCodeAt"](0))){
      break;;
    };
    ++PL$13/*index*/;
    if(((PL$25/*ch*/ === "\\") && (PL$13/*index*/ < PL$16/*length*/))){
      PL$25/*ch*/ = PL$11/*source*/[PL$13/*index*/];
      if((PL$25/*ch*/ === "u")){
        ++PL$13/*index*/;
        PL$78/*restore*/ = PL$13/*index*/;
        PL$25/*ch*/ = PL$56/*scanHexEscape*/("u");
        if(PL$25/*ch*/){
          PL$84/*flags*/ += PL$25/*ch*/;
          for(PL$75/*str*/ += "\\u";(PL$78/*restore*/ < PL$13/*index*/);++PL$78/*restore*/){{
            PL$75/*str*/ += PL$11/*source*/[PL$78/*restore*/];}};
        }else{
        PL$13/*index*/ = PL$78/*restore*/;
        PL$84/*flags*/ += "u";
        PL$75/*str*/ += "\\u";
        };
        PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      }else{
      PL$75/*str*/ += "\\";
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["UnexpectedToken"], "ILLEGAL");
      };
    }else{
    PL$84/*flags*/ += PL$25/*ch*/;
    PL$75/*str*/ += PL$25/*ch*/;
    };}};
  return {"value": PL$84/*flags*/,
"literal": PL$75/*str*/};
  ;};
var PL$97/*scanRegExp*/ = function(){
var PL$41/*start*/;
var PL$93/*body*/;
var PL$84/*flags*/;
var PL$40/*value*/;

  ;
  PL$41/*start*/PL$93/*body*/PL$84/*flags*/PL$40/*value*/;
  PL$17/*lookahead*/ = null;
  PL$50/*skipComment*/();
  PL$41/*start*/ = PL$13/*index*/;
  PL$93/*body*/ = PL$94/*scanRegExpBody*/();
  PL$84/*flags*/ = PL$96/*scanRegExpFlags*/();
  PL$40/*value*/ = PL$90/*testRegExp*/(PL$93/*body*/["value"], PL$84/*flags*/["value"]);
  if(PL$19/*extra*/["tokenize"]){
    return {"type": PL$3/*Token*/["RegularExpression"],
"value": PL$40/*value*/,
"regex": {"pattern": PL$93/*body*/["value"],
"flags": PL$84/*flags*/["value"]},
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  };
  return {"literal": (PL$93/*body*/["literal"] + PL$84/*flags*/["literal"]),
"value": PL$40/*value*/,
"regex": {"pattern": PL$93/*body*/["value"],
"flags": PL$84/*flags*/["value"]},
"start": PL$41/*start*/,
"end": PL$13/*index*/};
  ;};
var PL$101/*collectRegex*/ = function(){
var PL$98/*pos*/;
var PL$43/*loc*/;
var PL$99/*regex*/;
var PL$100/*token*/;

  ;
  PL$98/*pos*/PL$43/*loc*/PL$99/*regex*/PL$100/*token*/;
  PL$50/*skipComment*/();
  PL$98/*pos*/ = PL$13/*index*/;
  PL$43/*loc*/ = {"start": {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)}};
  PL$99/*regex*/ = PL$97/*scanRegExp*/();
  PL$43/*loc*/["end"] = {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)};
  if(! PL$19/*extra*/["tokenize"]){
    if((PL$19/*extra*/["tokens"]["length"] > 0)){
      PL$100/*token*/ = PL$19/*extra*/["tokens"][(PL$19/*extra*/["tokens"]["length"] - 1)];
      if(((PL$100/*token*/["range"][0] === PL$98/*pos*/) && (PL$100/*token*/["type"] === "Punctuator"))){
        if(((PL$100/*token*/["value"] === "/") || (PL$100/*token*/["value"] === "/="))){
          PL$19/*extra*/["tokens"]["pop"]();
        };
      };
    };
    PL$19/*extra*/["tokens"]["push"]({"type": "RegularExpression",
"value": PL$99/*regex*/["literal"],
"regex": PL$99/*regex*/["regex"],
"range": [PL$98/*pos*/, PL$13/*index*/],
"loc": PL$43/*loc*/});
  };
  return PL$99/*regex*/;
  ;};
var PL$102/*isIdentifierName*/ = function(PL$100/*token*/){

  ;
  return ((((PL$100/*token*/["type"] === PL$3/*Token*/["Identifier"]) || (PL$100/*token*/["type"] === PL$3/*Token*/["Keyword"])) || (PL$100/*token*/["type"] === PL$3/*Token*/["BooleanLiteral"])) || (PL$100/*token*/["type"] === PL$3/*Token*/["NullLiteral"]));
  ;};
var PL$105/*advanceSlash*/ = function(){
var PL$103/*prevToken*/;
var PL$104/*checkToken*/;

  ;
  PL$103/*prevToken*/PL$104/*checkToken*/;
  PL$103/*prevToken*/ = PL$19/*extra*/["tokens"][(PL$19/*extra*/["tokens"]["length"] - 1)];
  if(! PL$103/*prevToken*/){
    return PL$101/*collectRegex*/();
  };
  if((PL$103/*prevToken*/["type"] === "Punctuator")){
    if((PL$103/*prevToken*/["value"] === "]")){
      return PL$68/*scanPunctuator*/();
    };
    if((PL$103/*prevToken*/["value"] === ")")){
      PL$104/*checkToken*/ = PL$19/*extra*/["tokens"][(PL$19/*extra*/["openParenToken"] - 1)];
      if(((PL$104/*checkToken*/ && (PL$104/*checkToken*/["type"] === "Keyword")) && ((((PL$104/*checkToken*/["value"] === "if") || (PL$104/*checkToken*/["value"] === "while")) || (PL$104/*checkToken*/["value"] === "for")) || (PL$104/*checkToken*/["value"] === "with")))){
        return PL$101/*collectRegex*/();
      };
      return PL$68/*scanPunctuator*/();
    };
    if((PL$103/*prevToken*/["value"] === "}")){
      if((PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 3)] && (PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 3)]["type"] === "Keyword"))){
        PL$104/*checkToken*/ = PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 4)];
        if(! PL$104/*checkToken*/){
          return PL$68/*scanPunctuator*/();
        };
      }else{
      if((PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 4)] && (PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 4)]["type"] === "Keyword"))){
        PL$104/*checkToken*/ = PL$19/*extra*/["tokens"][(PL$19/*extra*/["openCurlyToken"] - 5)];
        if(! PL$104/*checkToken*/){
          return PL$101/*collectRegex*/();
        };
      }else{
      return PL$68/*scanPunctuator*/();
      };
      };
      if((PL$5/*FnExprTokens*/["indexOf"](PL$104/*checkToken*/["value"]) >= 0)){
        return PL$68/*scanPunctuator*/();
      };
      return PL$101/*collectRegex*/();
    };
    return PL$101/*collectRegex*/();
  };
  if((PL$103/*prevToken*/["type"] === "Keyword")){
    return PL$101/*collectRegex*/();
  };
  return PL$68/*scanPunctuator*/();
  ;};
var PL$106/*advance*/ = function(){
var PL$25/*ch*/;

  ;
  PL$25/*ch*/;
  PL$50/*skipComment*/();
  if((PL$13/*index*/ >= PL$16/*length*/)){
    return {"type": PL$3/*Token*/["EOF"],
"lineNumber": PL$14/*lineNumber*/,
"lineStart": PL$15/*lineStart*/,
"start": PL$13/*index*/,
"end": PL$13/*index*/};
  };
  PL$25/*ch*/ = PL$11/*source*/["charCodeAt"](PL$13/*index*/);
  if(PL$32/*isIdentifierStart*/(PL$25/*ch*/)){
    return PL$62/*scanIdentifier*/();
  };
  if((((PL$25/*ch*/ === 40) || (PL$25/*ch*/ === 41)) || (PL$25/*ch*/ === 59))){
    return PL$68/*scanPunctuator*/();
  };
  if(((PL$25/*ch*/ === 39) || (PL$25/*ch*/ === 34))){
    return PL$82/*scanStringLiteral*/();
  };
  if((PL$25/*ch*/ === 46)){
    if(PL$26/*isDecimalDigit*/(PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1)))){
      return PL$74/*scanNumericLiteral*/();
    };
    return PL$68/*scanPunctuator*/();
  };
  if(PL$26/*isDecimalDigit*/(PL$25/*ch*/)){
    return PL$74/*scanNumericLiteral*/();
  };
  if((PL$19/*extra*/["tokenize"] && (PL$25/*ch*/ === 47))){
    return PL$105/*advanceSlash*/();
  };
  return PL$68/*scanPunctuator*/();
  ;};
var PL$108/*collectToken*/ = function(){
var PL$43/*loc*/;
var PL$100/*token*/;
var PL$40/*value*/;
var PL$107/*entry*/;

  ;
  PL$43/*loc*/PL$100/*token*/PL$40/*value*/PL$107/*entry*/;
  PL$50/*skipComment*/();
  PL$43/*loc*/ = {"start": {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)}};
  PL$100/*token*/ = PL$106/*advance*/();
  PL$43/*loc*/["end"] = {"line": PL$14/*lineNumber*/,
"column": (PL$13/*index*/ - PL$15/*lineStart*/)};
  if((PL$100/*token*/["type"] !== PL$3/*Token*/["EOF"])){
    PL$40/*value*/ = PL$11/*source*/["slice"](PL$100/*token*/["start"], PL$100/*token*/["end"]);
    PL$107/*entry*/ = {"type": PL$4/*TokenName*/[PL$100/*token*/["type"]],
"value": PL$40/*value*/,
"range": [PL$100/*token*/["start"], PL$100/*token*/["end"]],
"loc": PL$43/*loc*/};
    if(PL$100/*token*/["regex"]){
      PL$107/*entry*/["regex"] = {"pattern": PL$100/*token*/["regex"]["pattern"],
"flags": PL$100/*token*/["regex"]["flags"]};
    };
    PL$19/*extra*/["tokens"]["push"](PL$107/*entry*/);
  };
  return PL$100/*token*/;
  ;};
var PL$109/*lex*/ = function(){
var PL$100/*token*/;

  ;
  PL$100/*token*/;
  PL$100/*token*/ = PL$17/*lookahead*/;
  PL$13/*index*/ = PL$100/*token*/["end"];
  PL$14/*lineNumber*/ = PL$100/*token*/["lineNumber"];
  PL$15/*lineStart*/ = PL$100/*token*/["lineStart"];
  PL$17/*lookahead*/ = ((typeof PL$19/*extra*/["tokens"] !== "undefined") ? PL$108/*collectToken*/() : PL$106/*advance*/());
  PL$13/*index*/ = PL$100/*token*/["end"];
  PL$14/*lineNumber*/ = PL$100/*token*/["lineNumber"];
  PL$15/*lineStart*/ = PL$100/*token*/["lineStart"];
  return PL$100/*token*/;
  ;};
var PL$111/*peek*/ = function(){
var PL$98/*pos*/;
var PL$110/*line*/;
var PL$41/*start*/;

  ;
  PL$98/*pos*/PL$110/*line*/PL$41/*start*/;
  PL$98/*pos*/ = PL$13/*index*/;
  PL$110/*line*/ = PL$14/*lineNumber*/;
  PL$41/*start*/ = PL$15/*lineStart*/;
  PL$17/*lookahead*/ = ((typeof PL$19/*extra*/["tokens"] !== "undefined") ? PL$108/*collectToken*/() : PL$106/*advance*/());
  PL$13/*index*/ = PL$98/*pos*/;
  PL$14/*lineNumber*/ = PL$110/*line*/;
  PL$15/*lineStart*/ = PL$41/*start*/;
  ;};
var PL$112/*Position*/ = function(){

  ;
  this["line"] = PL$14/*lineNumber*/;
  this["column"] = (PL$13/*index*/ - PL$15/*lineStart*/);
  ;};
var PL$113/*SourceLocation*/ = function(){

  ;
  this["start"] = new PL$112/*Position*/();
  this["end"] = null;
  ;};
var PL$115/*WrappingSourceLocation*/ = function(PL$114/*startToken*/){

  ;
  if((PL$114/*startToken*/["type"] === PL$3/*Token*/["StringLiteral"])){
    this["start"] = {"line": PL$114/*startToken*/["startLineNumber"],
"column": (PL$114/*startToken*/["start"] - PL$114/*startToken*/["startLineStart"])};
  }else{
  this["start"] = {"line": PL$114/*startToken*/["lineNumber"],
"column": (PL$114/*startToken*/["start"] - PL$114/*startToken*/["lineStart"])};
  };
  this["end"] = null;
  ;};
var PL$116/*Node*/ = function(){

  ;
  PL$13/*index*/ = PL$17/*lookahead*/["start"];
  if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["StringLiteral"])){
    PL$14/*lineNumber*/ = PL$17/*lookahead*/["startLineNumber"];
    PL$15/*lineStart*/ = PL$17/*lookahead*/["startLineStart"];
  }else{
  PL$14/*lineNumber*/ = PL$17/*lookahead*/["lineNumber"];
  PL$15/*lineStart*/ = PL$17/*lookahead*/["lineStart"];
  };
  if(PL$19/*extra*/["range"]){
    this["range"] = [PL$13/*index*/, 0];
  };
  if(PL$19/*extra*/["loc"]){
    this["loc"] = new PL$113/*SourceLocation*/();
  };
  ;};
var PL$117/*WrappingNode*/ = function(PL$114/*startToken*/){

  ;
  if(PL$19/*extra*/["range"]){
    this["range"] = [PL$114/*startToken*/["start"], 0];
  };
  if(PL$19/*extra*/["loc"]){
    this["loc"] = new PL$115/*WrappingSourceLocation*/(PL$114/*startToken*/);
  };
  ;};
var PL$155/*peekLineTerminator*/ = function(){
var PL$98/*pos*/;
var PL$110/*line*/;
var PL$41/*start*/;
var PL$154/*found*/;

  ;
  PL$98/*pos*/PL$110/*line*/PL$41/*start*/PL$154/*found*/;
  PL$98/*pos*/ = PL$13/*index*/;
  PL$110/*line*/ = PL$14/*lineNumber*/;
  PL$41/*start*/ = PL$15/*lineStart*/;
  PL$50/*skipComment*/();
  PL$154/*found*/ = (PL$14/*lineNumber*/ !== PL$110/*line*/);
  PL$13/*index*/ = PL$98/*pos*/;
  PL$14/*lineNumber*/ = PL$110/*line*/;
  PL$15/*lineStart*/ = PL$41/*start*/;
  return PL$154/*found*/;
  ;};
var PL$48/*throwError*/ = function(PL$100/*token*/, PL$156/*messageFormat*/){
var PL$157/*error*/;
var PL$131/*args*/;
var PL$160/*msg*/;
var PL$159/*arguments*/ = arguments;

  ;
  PL$157/*error*/PL$131/*args*/ = PL$158/*Array*/["prototype"]["slice"]["call"](PL$159/*arguments*/, 2)PL$160/*msg*/ = PL$156/*messageFormat*/["replace"](/%(\d)/g, (function(PL$161/*whole*/, PL$13/*index*/){
  
    ;
    PL$24/*assert*/((PL$13/*index*/ < PL$131/*args*/["length"]), "Message reference must be in range");
    return PL$131/*args*/[PL$13/*index*/];
    ;}));
  if((typeof PL$100/*token*/["lineNumber"] === "number")){
    PL$157/*error*/ = new PL$23/*Error*/(((("Line " + PL$100/*token*/["lineNumber"]) + ": ") + PL$160/*msg*/));
    PL$157/*error*/["index"] = PL$100/*token*/["start"];
    PL$157/*error*/["lineNumber"] = PL$100/*token*/["lineNumber"];
    PL$157/*error*/["column"] = ((PL$100/*token*/["start"] - PL$15/*lineStart*/) + 1);
  }else{
  PL$157/*error*/ = new PL$23/*Error*/(((("Line " + PL$14/*lineNumber*/) + ": ") + PL$160/*msg*/));
  PL$157/*error*/["index"] = PL$13/*index*/;
  PL$157/*error*/["lineNumber"] = PL$14/*lineNumber*/;
  PL$157/*error*/["column"] = ((PL$13/*index*/ - PL$15/*lineStart*/) + 1);
  };
  PL$157/*error*/["description"] = PL$160/*msg*/;
  throw PL$157/*error*/;
  ;};
var PL$95/*throwErrorTolerant*/ = function(){
var PL$159/*arguments*/ = arguments;

  ;
  try
{
    PL$48/*throwError*/["apply"](null, PL$159/*arguments*/);}catch(PL$88/*e*/){
    if(PL$19/*extra*/["errors"]){
      PL$19/*extra*/["errors"]["push"](PL$88/*e*/);
    }else{
    throw PL$88/*e*/;
    };};
  ;};
var PL$162/*throwUnexpected*/ = function(PL$100/*token*/){

  ;
  if((PL$100/*token*/["type"] === PL$3/*Token*/["EOF"])){
    PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedEOS"]);
  };
  if((PL$100/*token*/["type"] === PL$3/*Token*/["NumericLiteral"])){
    PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedNumber"]);
  };
  if((PL$100/*token*/["type"] === PL$3/*Token*/["StringLiteral"])){
    PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedString"]);
  };
  if((PL$100/*token*/["type"] === PL$3/*Token*/["Identifier"])){
    PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedIdentifier"]);
  };
  if((PL$100/*token*/["type"] === PL$3/*Token*/["Keyword"])){
    if(PL$35/*isFutureReservedWord*/(PL$100/*token*/["value"])){
      PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedReserved"]);
    }else{
    if((PL$12/*strict*/ && PL$36/*isStrictModeReservedWord*/(PL$100/*token*/["value"]))){
      PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["StrictReservedWord"]);
      return;
    };
    };
    PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedToken"], PL$100/*token*/["value"]);
  };
  PL$48/*throwError*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedToken"], PL$100/*token*/["value"]);
  ;};
var PL$163/*expect*/ = function(PL$40/*value*/){
var PL$100/*token*/;

  ;
  PL$100/*token*/ = PL$109/*lex*/();
  if(((PL$100/*token*/["type"] !== PL$3/*Token*/["Punctuator"]) || (PL$100/*token*/["value"] !== PL$40/*value*/))){
    PL$162/*throwUnexpected*/(PL$100/*token*/);
  };
  ;};
var PL$164/*expectTolerant*/ = function(PL$40/*value*/){
var PL$100/*token*/;

  ;
  if(PL$19/*extra*/["errors"]){
    PL$100/*token*/ = PL$17/*lookahead*/;
    if(((PL$100/*token*/["type"] !== PL$3/*Token*/["Punctuator"]) && (PL$100/*token*/["value"] !== PL$40/*value*/))){
      PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedToken"], PL$100/*token*/["value"]);
    }else{
    PL$109/*lex*/();
    };
  }else{
  PL$163/*expect*/(PL$40/*value*/);
  };
  ;};
var PL$166/*expectKeyword*/ = function(PL$165/*keyword*/){
var PL$100/*token*/;

  ;
  PL$100/*token*/ = PL$109/*lex*/();
  if(((PL$100/*token*/["type"] !== PL$3/*Token*/["Keyword"]) || (PL$100/*token*/["value"] !== PL$165/*keyword*/))){
    PL$162/*throwUnexpected*/(PL$100/*token*/);
  };
  ;};
var PL$167/*match*/ = function(PL$40/*value*/){

  ;
  return ((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Punctuator"]) && (PL$17/*lookahead*/["value"] === PL$40/*value*/));
  ;};
var PL$168/*matchKeyword*/ = function(PL$165/*keyword*/){

  ;
  return ((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Keyword"]) && (PL$17/*lookahead*/["value"] === PL$165/*keyword*/));
  ;};
var PL$170/*matchAssign*/ = function(){
var PL$169/*op*/;

  ;
  PL$169/*op*/;
  if((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["Punctuator"])){
    return false;
  };
  PL$169/*op*/ = PL$17/*lookahead*/["value"];
  return ((((((((((((PL$169/*op*/ === "=") || (PL$169/*op*/ === "*=")) || (PL$169/*op*/ === "/=")) || (PL$169/*op*/ === "%=")) || (PL$169/*op*/ === "+=")) || (PL$169/*op*/ === "-=")) || (PL$169/*op*/ === "<<=")) || (PL$169/*op*/ === ">>=")) || (PL$169/*op*/ === ">>>=")) || (PL$169/*op*/ === "&=")) || (PL$169/*op*/ === "^=")) || (PL$169/*op*/ === "|="));
  ;};
var PL$171/*consumeSemicolon*/ = function(){
var PL$110/*line*/;

  ;
  PL$110/*line*/;
  if(((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 59) || PL$167/*match*/(";"))){
    PL$109/*lex*/();
    return;
  };
  PL$110/*line*/ = PL$14/*lineNumber*/;
  PL$50/*skipComment*/();
  if((PL$14/*lineNumber*/ !== PL$110/*line*/)){
    return;
  };
  if(((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["EOF"]) && ! PL$167/*match*/("}"))){
    PL$162/*throwUnexpected*/(PL$17/*lookahead*/);
  };
  ;};
var PL$173/*isLeftHandSide*/ = function(PL$172/*expr*/){

  ;
  return ((PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"]) || (PL$172/*expr*/["type"] === PL$6/*Syntax*/["MemberExpression"]));
  ;};
var PL$176/*parseArrayInitialiser*/ = function(){
var PL$122/*elements*/;
var PL$174/*node*/;

  ;
  PL$122/*elements*/ = []PL$174/*node*/ = new PL$116/*Node*/();
  PL$163/*expect*/("[");
  while(! PL$167/*match*/("]")){
{
    if(PL$167/*match*/(",")){
      PL$109/*lex*/();
      PL$122/*elements*/["push"](null);
    }else{
    PL$122/*elements*/["push"](PL$175/*parseAssignmentExpression*/());
    if(! PL$167/*match*/("]")){
      PL$163/*expect*/(",");
    };
    };}};
  PL$109/*lex*/();
  return PL$174/*node*/["finishArrayExpression"](PL$122/*elements*/);
  ;};
var PL$180/*parsePropertyFunction*/ = function(PL$132/*param*/, PL$177/*first*/){
var PL$178/*previousStrict*/;
var PL$93/*body*/;
var PL$174/*node*/;

  ;
  PL$178/*previousStrict*/PL$93/*body*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$178/*previousStrict*/ = PL$12/*strict*/;
  PL$93/*body*/ = PL$179/*parseFunctionSourceElements*/();
  if(((PL$177/*first*/ && PL$12/*strict*/) && PL$37/*isRestrictedWord*/(PL$132/*param*/[0]["name"]))){
    PL$95/*throwErrorTolerant*/(PL$177/*first*/, PL$9/*Messages*/["StrictParamName"]);
  };
  PL$12/*strict*/ = PL$178/*previousStrict*/;
  return PL$174/*node*/["finishFunctionExpression"](null, PL$132/*param*/, [], PL$93/*body*/);
  ;};
var PL$181/*parseObjectPropertyKey*/ = function(){
var PL$100/*token*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$100/*token*/ = PL$109/*lex*/();
  if(((PL$100/*token*/["type"] === PL$3/*Token*/["StringLiteral"]) || (PL$100/*token*/["type"] === PL$3/*Token*/["NumericLiteral"]))){
    if((PL$12/*strict*/ && PL$100/*token*/["octal"])){
      PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["StrictOctalLiteral"]);
    };
    return PL$174/*node*/["finishLiteral"](PL$100/*token*/);
  };
  return PL$174/*node*/["finishIdentifier"](PL$100/*token*/["value"]);
  ;};
var PL$183/*parseObjectProperty*/ = function(){
var PL$100/*token*/;
var PL$145/*key*/;
var PL$34/*id*/;
var PL$40/*value*/;
var PL$132/*param*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$145/*key*/PL$34/*id*/PL$40/*value*/PL$132/*param*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$100/*token*/ = PL$17/*lookahead*/;
  if((PL$100/*token*/["type"] === PL$3/*Token*/["Identifier"])){
    PL$34/*id*/ = PL$181/*parseObjectPropertyKey*/();
    if(((PL$100/*token*/["value"] === "get") && ! PL$167/*match*/(":"))){
      PL$145/*key*/ = PL$181/*parseObjectPropertyKey*/();
      PL$163/*expect*/("(");
      PL$163/*expect*/(")");
      PL$40/*value*/ = PL$180/*parsePropertyFunction*/([]);
      return PL$174/*node*/["finishProperty"]("get", PL$145/*key*/, PL$40/*value*/);
    };
    if(((PL$100/*token*/["value"] === "set") && ! PL$167/*match*/(":"))){
      PL$145/*key*/ = PL$181/*parseObjectPropertyKey*/();
      PL$163/*expect*/("(");
      PL$100/*token*/ = PL$17/*lookahead*/;
      if((PL$100/*token*/["type"] !== PL$3/*Token*/["Identifier"])){
        PL$163/*expect*/(")");
        PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["UnexpectedToken"], PL$100/*token*/["value"]);
        PL$40/*value*/ = PL$180/*parsePropertyFunction*/([]);
      }else{
      PL$132/*param*/ = [PL$182/*parseVariableIdentifier*/()];
      PL$163/*expect*/(")");
      PL$40/*value*/ = PL$180/*parsePropertyFunction*/(PL$132/*param*/, PL$100/*token*/);
      };
      return PL$174/*node*/["finishProperty"]("set", PL$145/*key*/, PL$40/*value*/);
    };
    PL$163/*expect*/(":");
    PL$40/*value*/ = PL$175/*parseAssignmentExpression*/();
    return PL$174/*node*/["finishProperty"]("init", PL$34/*id*/, PL$40/*value*/);
  };
  if(((PL$100/*token*/["type"] === PL$3/*Token*/["EOF"]) || (PL$100/*token*/["type"] === PL$3/*Token*/["Punctuator"]))){
    PL$162/*throwUnexpected*/(PL$100/*token*/);
  }else{
  PL$145/*key*/ = PL$181/*parseObjectPropertyKey*/();
  PL$163/*expect*/(":");
  PL$40/*value*/ = PL$175/*parseAssignmentExpression*/();
  return PL$174/*node*/["finishProperty"]("init", PL$145/*key*/, PL$40/*value*/);
  };
  ;};
var PL$187/*parseObjectInitialiser*/ = function(){
var PL$142/*properties*/;
var PL$100/*token*/;
var PL$141/*property*/;
var PL$138/*name*/;
var PL$145/*key*/;
var PL$144/*kind*/;
var PL$184/*map*/;
var PL$185/*toString*/;
var PL$174/*node*/;

  ;
  PL$142/*properties*/ = []PL$100/*token*/PL$141/*property*/PL$138/*name*/PL$145/*key*/PL$144/*kind*/PL$184/*map*/ = {}PL$185/*toString*/ = PL$31/*String*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$163/*expect*/("{");
  while(! PL$167/*match*/("}")){
{
    PL$141/*property*/ = PL$183/*parseObjectProperty*/();
    if((PL$141/*property*/["key"]["type"] === PL$6/*Syntax*/["Identifier"])){
      PL$138/*name*/ = PL$141/*property*/["key"]["name"];
    }else{
    PL$138/*name*/ = PL$185/*toString*/(PL$141/*property*/["key"]["value"]);
    };
    PL$144/*kind*/ = ((PL$141/*property*/["kind"] === "init") ? PL$8/*PropertyKind*/["Data"] : ((PL$141/*property*/["kind"] === "get") ? PL$8/*PropertyKind*/["Get"] : PL$8/*PropertyKind*/["Set"]));
    PL$145/*key*/ = ("$" + PL$138/*name*/);
    if(PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$184/*map*/, PL$145/*key*/)){
      if((PL$184/*map*/[PL$145/*key*/] === PL$8/*PropertyKind*/["Data"])){
        if((PL$12/*strict*/ && (PL$144/*kind*/ === PL$8/*PropertyKind*/["Data"]))){
          PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictDuplicateProperty"]);
        }else{
        if((PL$144/*kind*/ !== PL$8/*PropertyKind*/["Data"])){
          PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["AccessorDataProperty"]);
        };
        };
      }else{
      if((PL$144/*kind*/ === PL$8/*PropertyKind*/["Data"])){
        PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["AccessorDataProperty"]);
      }else{
      if((PL$184/*map*/[PL$145/*key*/] & PL$144/*kind*/)){
        PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["AccessorGetSet"]);
      };
      };
      };
      PL$184/*map*/[PL$145/*key*/] |= PL$144/*kind*/;
    }else{
    PL$184/*map*/[PL$145/*key*/] = PL$144/*kind*/;
    };
    PL$142/*properties*/["push"](PL$141/*property*/);
    if(! PL$167/*match*/("}")){
      PL$164/*expectTolerant*/(",");
    };}};
  PL$163/*expect*/("}");
  return PL$174/*node*/["finishObjectExpression"](PL$142/*properties*/);
  ;};
var PL$189/*parseGroupExpression*/ = function(){
var PL$172/*expr*/;

  ;
  PL$172/*expr*/;
  PL$163/*expect*/("(");
  if(PL$167/*match*/(")")){
    PL$109/*lex*/();
    return PL$7/*PlaceHolders*/["ArrowParameterPlaceHolder"];
  };
  ++PL$18/*state*/["parenthesisCount"];
  PL$172/*expr*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  return PL$172/*expr*/;
  ;};
var PL$191/*parsePrimaryExpression*/ = function(){
var PL$39/*type*/;
var PL$100/*token*/;
var PL$172/*expr*/;
var PL$174/*node*/;

  ;
  PL$39/*type*/PL$100/*token*/PL$172/*expr*/PL$174/*node*/;
  if(PL$167/*match*/("(")){
    return PL$189/*parseGroupExpression*/();
  };
  if(PL$167/*match*/("[")){
    return PL$176/*parseArrayInitialiser*/();
  };
  if(PL$167/*match*/("{")){
    return PL$187/*parseObjectInitialiser*/();
  };
  PL$39/*type*/ = PL$17/*lookahead*/["type"];
  PL$174/*node*/ = new PL$116/*Node*/();
  if((PL$39/*type*/ === PL$3/*Token*/["Identifier"])){
    PL$172/*expr*/ = PL$174/*node*/["finishIdentifier"](PL$109/*lex*/()["value"]);
  }else{
  if(((PL$39/*type*/ === PL$3/*Token*/["StringLiteral"]) || (PL$39/*type*/ === PL$3/*Token*/["NumericLiteral"]))){
    if((PL$12/*strict*/ && PL$17/*lookahead*/["octal"])){
      PL$95/*throwErrorTolerant*/(PL$17/*lookahead*/, PL$9/*Messages*/["StrictOctalLiteral"]);
    };
    PL$172/*expr*/ = PL$174/*node*/["finishLiteral"](PL$109/*lex*/());
  }else{
  if((PL$39/*type*/ === PL$3/*Token*/["Keyword"])){
    if(PL$168/*matchKeyword*/("function")){
      return PL$190/*parseFunctionExpression*/();
    };
    if(PL$168/*matchKeyword*/("this")){
      PL$109/*lex*/();
      PL$172/*expr*/ = PL$174/*node*/["finishThisExpression"]();
    }else{
    PL$162/*throwUnexpected*/(PL$109/*lex*/());
    };
  }else{
  if((PL$39/*type*/ === PL$3/*Token*/["BooleanLiteral"])){
    PL$100/*token*/ = PL$109/*lex*/();
    PL$100/*token*/["value"] = (PL$100/*token*/["value"] === "true");
    PL$172/*expr*/ = PL$174/*node*/["finishLiteral"](PL$100/*token*/);
  }else{
  if((PL$39/*type*/ === PL$3/*Token*/["NullLiteral"])){
    PL$100/*token*/ = PL$109/*lex*/();
    PL$100/*token*/["value"] = null;
    PL$172/*expr*/ = PL$174/*node*/["finishLiteral"](PL$100/*token*/);
  }else{
  if((PL$167/*match*/("/") || PL$167/*match*/("/="))){
    if((typeof PL$19/*extra*/["tokens"] !== "undefined")){
      PL$172/*expr*/ = PL$174/*node*/["finishLiteral"](PL$101/*collectRegex*/());
    }else{
    PL$172/*expr*/ = PL$174/*node*/["finishLiteral"](PL$97/*scanRegExp*/());
    };
    PL$111/*peek*/();
  }else{
  PL$162/*throwUnexpected*/(PL$109/*lex*/());
  };
  };
  };
  };
  };
  };
  return PL$172/*expr*/;
  ;};
var PL$192/*parseArguments*/ = function(){
var PL$131/*args*/;

  ;
  PL$131/*args*/ = [];
  PL$163/*expect*/("(");
  if(! PL$167/*match*/(")")){
    while((PL$13/*index*/ < PL$16/*length*/)){
{
      PL$131/*args*/["push"](PL$175/*parseAssignmentExpression*/());
      if(PL$167/*match*/(")")){
        break;;
      };
      PL$164/*expectTolerant*/(",");}};
  };
  PL$163/*expect*/(")");
  return PL$131/*args*/;
  ;};
var PL$193/*parseNonComputedProperty*/ = function(){
var PL$100/*token*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$100/*token*/ = PL$109/*lex*/();
  if(! PL$102/*isIdentifierName*/(PL$100/*token*/)){
    PL$162/*throwUnexpected*/(PL$100/*token*/);
  };
  return PL$174/*node*/["finishIdentifier"](PL$100/*token*/["value"]);
  ;};
var PL$194/*parseNonComputedMember*/ = function(){

  ;
  PL$163/*expect*/(".");
  return PL$193/*parseNonComputedProperty*/();
  ;};
var PL$195/*parseComputedMember*/ = function(){
var PL$172/*expr*/;

  ;
  PL$172/*expr*/;
  PL$163/*expect*/("[");
  PL$172/*expr*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/("]");
  return PL$172/*expr*/;
  ;};
var PL$197/*parseNewExpression*/ = function(){
var PL$130/*callee*/;
var PL$131/*args*/;
var PL$174/*node*/;

  ;
  PL$130/*callee*/PL$131/*args*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$166/*expectKeyword*/("new");
  PL$130/*callee*/ = PL$196/*parseLeftHandSideExpression*/();
  PL$131/*args*/ = (PL$167/*match*/("(") ? PL$192/*parseArguments*/() : []);
  return PL$174/*node*/["finishNewExpression"](PL$130/*callee*/, PL$131/*args*/);
  ;};
var PL$199/*parseLeftHandSideExpressionAllowCall*/ = function(){
var PL$172/*expr*/;
var PL$131/*args*/;
var PL$141/*property*/;
var PL$114/*startToken*/;
var PL$198/*previousAllowIn*/;

  ;
  PL$172/*expr*/PL$131/*args*/PL$141/*property*/PL$114/*startToken*/PL$198/*previousAllowIn*/ = PL$18/*state*/["allowIn"];
  PL$114/*startToken*/ = PL$17/*lookahead*/;
  PL$18/*state*/["allowIn"] = true;
  PL$172/*expr*/ = (PL$168/*matchKeyword*/("new") ? PL$197/*parseNewExpression*/() : PL$191/*parsePrimaryExpression*/());
  for(;;){{
    if(PL$167/*match*/(".")){
      PL$141/*property*/ = PL$194/*parseNonComputedMember*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishMemberExpression"](".", PL$172/*expr*/, PL$141/*property*/);
    }else{
    if(PL$167/*match*/("(")){
      PL$131/*args*/ = PL$192/*parseArguments*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishCallExpression"](PL$172/*expr*/, PL$131/*args*/);
    }else{
    if(PL$167/*match*/("[")){
      PL$141/*property*/ = PL$195/*parseComputedMember*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishMemberExpression"]("[", PL$172/*expr*/, PL$141/*property*/);
    }else{
    break;;
    };
    };
    };}};
  PL$18/*state*/["allowIn"] = PL$198/*previousAllowIn*/;
  return PL$172/*expr*/;
  ;};
var PL$196/*parseLeftHandSideExpression*/ = function(){
var PL$172/*expr*/;
var PL$141/*property*/;
var PL$114/*startToken*/;

  ;
  PL$172/*expr*/PL$141/*property*/PL$114/*startToken*/;
  PL$24/*assert*/(PL$18/*state*/["allowIn"], "callee of new expression always allow in keyword.");
  PL$114/*startToken*/ = PL$17/*lookahead*/;
  PL$172/*expr*/ = (PL$168/*matchKeyword*/("new") ? PL$197/*parseNewExpression*/() : PL$191/*parsePrimaryExpression*/());
  for(;;){{
    if(PL$167/*match*/("[")){
      PL$141/*property*/ = PL$195/*parseComputedMember*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishMemberExpression"]("[", PL$172/*expr*/, PL$141/*property*/);
    }else{
    if(PL$167/*match*/(".")){
      PL$141/*property*/ = PL$194/*parseNonComputedMember*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishMemberExpression"](".", PL$172/*expr*/, PL$141/*property*/);
    }else{
    break;;
    };
    };}};
  return PL$172/*expr*/;
  ;};
var PL$200/*parsePostfixExpression*/ = function(){
var PL$172/*expr*/;
var PL$100/*token*/;
var PL$114/*startToken*/;

  ;
  PL$172/*expr*/PL$100/*token*/PL$114/*startToken*/ = PL$17/*lookahead*/;
  PL$172/*expr*/ = PL$199/*parseLeftHandSideExpressionAllowCall*/();
  if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Punctuator"])){
    if(((PL$167/*match*/("++") || PL$167/*match*/("--")) && ! PL$155/*peekLineTerminator*/())){
      if(((PL$12/*strict*/ && (PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"])) && PL$37/*isRestrictedWord*/(PL$172/*expr*/["name"]))){
        PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictLHSPostfix"]);
      };
      if(! PL$173/*isLeftHandSide*/(PL$172/*expr*/)){
        PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["InvalidLHSInAssignment"]);
      };
      PL$100/*token*/ = PL$109/*lex*/();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishPostfixExpression"](PL$100/*token*/["value"], PL$172/*expr*/);
    };
  };
  return PL$172/*expr*/;
  ;};
var PL$201/*parseUnaryExpression*/ = function(){
var PL$100/*token*/;
var PL$172/*expr*/;
var PL$114/*startToken*/;

  ;
  PL$100/*token*/PL$172/*expr*/PL$114/*startToken*/;
  if(((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["Punctuator"]) && (PL$17/*lookahead*/["type"] !== PL$3/*Token*/["Keyword"]))){
    PL$172/*expr*/ = PL$200/*parsePostfixExpression*/();
  }else{
  if((PL$167/*match*/("++") || PL$167/*match*/("--"))){
    PL$114/*startToken*/ = PL$17/*lookahead*/;
    PL$100/*token*/ = PL$109/*lex*/();
    PL$172/*expr*/ = PL$201/*parseUnaryExpression*/();
    if(((PL$12/*strict*/ && (PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"])) && PL$37/*isRestrictedWord*/(PL$172/*expr*/["name"]))){
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictLHSPrefix"]);
    };
    if(! PL$173/*isLeftHandSide*/(PL$172/*expr*/)){
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["InvalidLHSInAssignment"]);
    };
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishUnaryExpression"](PL$100/*token*/["value"], PL$172/*expr*/);
  }else{
  if((((PL$167/*match*/("+") || PL$167/*match*/("-")) || PL$167/*match*/("~")) || PL$167/*match*/("!"))){
    PL$114/*startToken*/ = PL$17/*lookahead*/;
    PL$100/*token*/ = PL$109/*lex*/();
    PL$172/*expr*/ = PL$201/*parseUnaryExpression*/();
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishUnaryExpression"](PL$100/*token*/["value"], PL$172/*expr*/);
  }else{
  if(((PL$168/*matchKeyword*/("delete") || PL$168/*matchKeyword*/("void")) || PL$168/*matchKeyword*/("typeof"))){
    PL$114/*startToken*/ = PL$17/*lookahead*/;
    PL$100/*token*/ = PL$109/*lex*/();
    PL$172/*expr*/ = PL$201/*parseUnaryExpression*/();
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishUnaryExpression"](PL$100/*token*/["value"], PL$172/*expr*/);
    if(((PL$12/*strict*/ && (PL$172/*expr*/["operator"] === "delete")) && (PL$172/*expr*/["argument"]["type"] === PL$6/*Syntax*/["Identifier"]))){
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictDelete"]);
    };
  }else{
  PL$172/*expr*/ = PL$200/*parsePostfixExpression*/();
  };
  };
  };
  };
  return PL$172/*expr*/;
  ;};
var PL$204/*binaryPrecedence*/ = function(PL$100/*token*/, PL$202/*allowIn*/){
var PL$203/*prec*/;

  ;
  PL$203/*prec*/ = 0;
  if(((PL$100/*token*/["type"] !== PL$3/*Token*/["Punctuator"]) && (PL$100/*token*/["type"] !== PL$3/*Token*/["Keyword"]))){
    return 0;
  };
  switch (PL$100/*token*/["value"]){
case "||":

  PL$203/*prec*/ = 1;
  break;;case "&&":

  PL$203/*prec*/ = 2;
  break;;case "|":

  PL$203/*prec*/ = 3;
  break;;case "^":

  PL$203/*prec*/ = 4;
  break;;case "&":

  PL$203/*prec*/ = 5;
  break;;case "==":
case "!=":
case "===":
case "!==":

  PL$203/*prec*/ = 6;
  break;;case "<":
case ">":
case "<=":
case ">=":
case "instanceof":

  PL$203/*prec*/ = 7;
  break;;case "in":

  PL$203/*prec*/ = (PL$202/*allowIn*/ ? 7 : 0);
  break;;case "<<":
case ">>":
case ">>>":

  PL$203/*prec*/ = 8;
  break;;case "+":
case "-":

  PL$203/*prec*/ = 9;
  break;;case "*":
case "/":
case "%":

  PL$203/*prec*/ = 11;
  break;;default:

  break;;}
;
  return PL$203/*prec*/;
  ;};
var PL$208/*parseBinaryExpression*/ = function(){
var PL$205/*marker*/;
var PL$206/*markers*/;
var PL$172/*expr*/;
var PL$100/*token*/;
var PL$203/*prec*/;
var PL$207/*stack*/;
var PL$128/*right*/;
var PL$126/*operator*/;
var PL$127/*left*/;
var PL$52/*i*/;

  ;
  PL$205/*marker*/PL$206/*markers*/PL$172/*expr*/PL$100/*token*/PL$203/*prec*/PL$207/*stack*/PL$128/*right*/PL$126/*operator*/PL$127/*left*/PL$52/*i*/;
  PL$205/*marker*/ = PL$17/*lookahead*/;
  PL$127/*left*/ = PL$201/*parseUnaryExpression*/();
  if((PL$127/*left*/ === PL$7/*PlaceHolders*/["ArrowParameterPlaceHolder"])){
    return PL$127/*left*/;
  };
  PL$100/*token*/ = PL$17/*lookahead*/;
  PL$203/*prec*/ = PL$204/*binaryPrecedence*/(PL$100/*token*/, PL$18/*state*/["allowIn"]);
  if((PL$203/*prec*/ === 0)){
    return PL$127/*left*/;
  };
  PL$100/*token*/["prec"] = PL$203/*prec*/;
  PL$109/*lex*/();
  PL$206/*markers*/ = [PL$205/*marker*/, PL$17/*lookahead*/];
  PL$128/*right*/ = PL$201/*parseUnaryExpression*/();
  PL$207/*stack*/ = [PL$127/*left*/, PL$100/*token*/, PL$128/*right*/];
  while((PL$203/*prec*/ = PL$204/*binaryPrecedence*/(PL$17/*lookahead*/, PL$18/*state*/["allowIn"]) > 0)){
{
    while(((PL$207/*stack*/["length"] > 2) && (PL$203/*prec*/ <= PL$207/*stack*/[(PL$207/*stack*/["length"] - 2)]["prec"]))){
{
      PL$128/*right*/ = PL$207/*stack*/["pop"]();
      PL$126/*operator*/ = PL$207/*stack*/["pop"]()["value"];
      PL$127/*left*/ = PL$207/*stack*/["pop"]();
      PL$206/*markers*/["pop"]();
      PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$206/*markers*/[(PL$206/*markers*/["length"] - 1)])["finishBinaryExpression"](PL$126/*operator*/, PL$127/*left*/, PL$128/*right*/);
      PL$207/*stack*/["push"](PL$172/*expr*/);}};
    PL$100/*token*/ = PL$109/*lex*/();
    PL$100/*token*/["prec"] = PL$203/*prec*/;
    PL$207/*stack*/["push"](PL$100/*token*/);
    PL$206/*markers*/["push"](PL$17/*lookahead*/);
    PL$172/*expr*/ = PL$201/*parseUnaryExpression*/();
    PL$207/*stack*/["push"](PL$172/*expr*/);}};
  PL$52/*i*/ = (PL$207/*stack*/["length"] - 1);
  PL$172/*expr*/ = PL$207/*stack*/[PL$52/*i*/];
  PL$206/*markers*/["pop"]();
  while((PL$52/*i*/ > 1)){
{
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$206/*markers*/["pop"]())["finishBinaryExpression"](PL$207/*stack*/[(PL$52/*i*/ - 1)]["value"], PL$207/*stack*/[(PL$52/*i*/ - 2)], PL$172/*expr*/);
    PL$52/*i*/ -= 2;}};
  return PL$172/*expr*/;
  ;};
var PL$209/*parseConditionalExpression*/ = function(){
var PL$172/*expr*/;
var PL$198/*previousAllowIn*/;
var PL$134/*consequent*/;
var PL$135/*alternate*/;
var PL$114/*startToken*/;

  ;
  PL$172/*expr*/PL$198/*previousAllowIn*/PL$134/*consequent*/PL$135/*alternate*/PL$114/*startToken*/;
  PL$114/*startToken*/ = PL$17/*lookahead*/;
  PL$172/*expr*/ = PL$208/*parseBinaryExpression*/();
  if((PL$172/*expr*/ === PL$7/*PlaceHolders*/["ArrowParameterPlaceHolder"])){
    return PL$172/*expr*/;
  };
  if(PL$167/*match*/("?")){
    PL$109/*lex*/();
    PL$198/*previousAllowIn*/ = PL$18/*state*/["allowIn"];
    PL$18/*state*/["allowIn"] = true;
    PL$134/*consequent*/ = PL$175/*parseAssignmentExpression*/();
    PL$18/*state*/["allowIn"] = PL$198/*previousAllowIn*/;
    PL$163/*expect*/(":");
    PL$135/*alternate*/ = PL$175/*parseAssignmentExpression*/();
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishConditionalExpression"](PL$172/*expr*/, PL$134/*consequent*/, PL$135/*alternate*/);
  };
  return PL$172/*expr*/;
  ;};
var PL$210/*parseConciseBody*/ = function(){

  ;
  if(PL$167/*match*/("{")){
    return PL$179/*parseFunctionSourceElements*/();
  };
  return PL$175/*parseAssignmentExpression*/();
  ;};
var PL$215/*reinterpretAsCoverFormalsList*/ = function(PL$146/*expressions*/){
var PL$52/*i*/;
var PL$53/*len*/;
var PL$132/*param*/;
var PL$123/*params*/;
var PL$124/*defaults*/;
var PL$211/*defaultCount*/;
var PL$212/*options*/;
var PL$213/*rest*/;

  ;
  PL$52/*i*/PL$53/*len*/PL$132/*param*/PL$123/*params*/PL$124/*defaults*/PL$211/*defaultCount*/PL$212/*options*/PL$213/*rest*/;
  PL$123/*params*/ = [];
  PL$124/*defaults*/ = [];
  PL$211/*defaultCount*/ = 0;
  PL$213/*rest*/ = null;
  PL$212/*options*/ = {"paramSet": {}};
  for(PL$52/*i*/ = 0,PL$53/*len*/ = PL$146/*expressions*/["length"];(PL$52/*i*/ < PL$53/*len*/);PL$52/*i*/ += 1){{
    PL$132/*param*/ = PL$146/*expressions*/[PL$52/*i*/];
    if((PL$132/*param*/["type"] === PL$6/*Syntax*/["Identifier"])){
      PL$123/*params*/["push"](PL$132/*param*/);
      PL$124/*defaults*/["push"](null);
      PL$214/*validateParam*/(PL$212/*options*/, PL$132/*param*/, PL$132/*param*/["name"]);
    }else{
    if((PL$132/*param*/["type"] === PL$6/*Syntax*/["AssignmentExpression"])){
      PL$123/*params*/["push"](PL$132/*param*/["left"]);
      PL$124/*defaults*/["push"](PL$132/*param*/["right"]);
      ++PL$211/*defaultCount*/;
      PL$214/*validateParam*/(PL$212/*options*/, PL$132/*param*/["left"], PL$132/*param*/["left"]["name"]);
    }else{
    return null;
    };
    };}};
  if((PL$212/*options*/["message"] === PL$9/*Messages*/["StrictParamDupe"])){
    PL$48/*throwError*/((PL$12/*strict*/ ? PL$212/*options*/["stricted"] : PL$212/*options*/["firstRestricted"]), PL$212/*options*/["message"]);
  };
  if((PL$211/*defaultCount*/ === 0)){
    PL$124/*defaults*/ = [];
  };
  return {"params": PL$123/*params*/,
"defaults": PL$124/*defaults*/,
"rest": PL$213/*rest*/,
"stricted": PL$212/*options*/["stricted"],
"firstRestricted": PL$212/*options*/["firstRestricted"],
"message": PL$212/*options*/["message"]};
  ;};
var PL$216/*parseArrowFunctionExpression*/ = function(PL$212/*options*/, PL$174/*node*/){
var PL$178/*previousStrict*/;
var PL$93/*body*/;

  ;
  PL$178/*previousStrict*/PL$93/*body*/;
  PL$163/*expect*/("=>");
  PL$178/*previousStrict*/ = PL$12/*strict*/;
  PL$93/*body*/ = PL$210/*parseConciseBody*/();
  if((PL$12/*strict*/ && PL$212/*options*/["firstRestricted"])){
    PL$48/*throwError*/(PL$212/*options*/["firstRestricted"], PL$212/*options*/["message"]);
  };
  if((PL$12/*strict*/ && PL$212/*options*/["stricted"])){
    PL$95/*throwErrorTolerant*/(PL$212/*options*/["stricted"], PL$212/*options*/["message"]);
  };
  PL$12/*strict*/ = PL$178/*previousStrict*/;
  return PL$174/*node*/["finishArrowFunctionExpression"](PL$212/*options*/["params"], PL$212/*options*/["defaults"], PL$93/*body*/, (PL$93/*body*/["type"] !== PL$6/*Syntax*/["BlockStatement"]));
  ;};
var PL$175/*parseAssignmentExpression*/ = function(){
var PL$217/*oldParenthesisCount*/;
var PL$100/*token*/;
var PL$172/*expr*/;
var PL$128/*right*/;
var PL$218/*list*/;
var PL$114/*startToken*/;

  ;
  PL$217/*oldParenthesisCount*/PL$100/*token*/PL$172/*expr*/PL$128/*right*/PL$218/*list*/PL$114/*startToken*/;
  PL$217/*oldParenthesisCount*/ = PL$18/*state*/["parenthesisCount"];
  PL$114/*startToken*/ = PL$17/*lookahead*/;
  PL$100/*token*/ = PL$17/*lookahead*/;
  PL$172/*expr*/ = PL$209/*parseConditionalExpression*/();
  if(((PL$172/*expr*/ === PL$7/*PlaceHolders*/["ArrowParameterPlaceHolder"]) || PL$167/*match*/("=>"))){
    if(((PL$18/*state*/["parenthesisCount"] === PL$217/*oldParenthesisCount*/) || (PL$18/*state*/["parenthesisCount"] === (PL$217/*oldParenthesisCount*/ + 1)))){
      if((PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"])){
        PL$218/*list*/ = PL$215/*reinterpretAsCoverFormalsList*/([PL$172/*expr*/]);
      }else{
      if((PL$172/*expr*/["type"] === PL$6/*Syntax*/["AssignmentExpression"])){
        PL$218/*list*/ = PL$215/*reinterpretAsCoverFormalsList*/([PL$172/*expr*/]);
      }else{
      if((PL$172/*expr*/["type"] === PL$6/*Syntax*/["SequenceExpression"])){
        PL$218/*list*/ = PL$215/*reinterpretAsCoverFormalsList*/(PL$172/*expr*/["expressions"]);
      }else{
      if((PL$172/*expr*/ === PL$7/*PlaceHolders*/["ArrowParameterPlaceHolder"])){
        PL$218/*list*/ = PL$215/*reinterpretAsCoverFormalsList*/([]);
      };
      };
      };
      };
      if(PL$218/*list*/){
        return PL$216/*parseArrowFunctionExpression*/(PL$218/*list*/, new PL$117/*WrappingNode*/(PL$114/*startToken*/));
      };
    };
  };
  if(PL$170/*matchAssign*/()){
    if(! PL$173/*isLeftHandSide*/(PL$172/*expr*/)){
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["InvalidLHSInAssignment"]);
    };
    if(((PL$12/*strict*/ && (PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"])) && PL$37/*isRestrictedWord*/(PL$172/*expr*/["name"]))){
      PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["StrictLHSAssignment"]);
    };
    PL$100/*token*/ = PL$109/*lex*/();
    PL$128/*right*/ = PL$175/*parseAssignmentExpression*/();
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishAssignmentExpression"](PL$100/*token*/["value"], PL$172/*expr*/, PL$128/*right*/);
  };
  return PL$172/*expr*/;
  ;};
var PL$188/*parseExpression*/ = function(){
var PL$172/*expr*/;
var PL$114/*startToken*/;
var PL$146/*expressions*/;

  ;
  PL$172/*expr*/PL$114/*startToken*/ = PL$17/*lookahead*/PL$146/*expressions*/;
  PL$172/*expr*/ = PL$175/*parseAssignmentExpression*/();
  if(PL$167/*match*/(",")){
    PL$146/*expressions*/ = [PL$172/*expr*/];
    while((PL$13/*index*/ < PL$16/*length*/)){
{
      if(! PL$167/*match*/(",")){
        break;;
      };
      PL$109/*lex*/();
      PL$146/*expressions*/["push"](PL$175/*parseAssignmentExpression*/());}};
    PL$172/*expr*/ = new PL$117/*WrappingNode*/(PL$114/*startToken*/)["finishSequenceExpression"](PL$146/*expressions*/);
  };
  return PL$172/*expr*/;
  ;};
var PL$221/*parseStatementList*/ = function(){
var PL$218/*list*/;
var PL$219/*statement*/;

  ;
  PL$218/*list*/ = []PL$219/*statement*/;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(PL$167/*match*/("}")){
      break;;
    };
    PL$219/*statement*/ = PL$220/*parseSourceElement*/();
    if((typeof PL$219/*statement*/ === "undefined")){
      break;;
    };
    PL$218/*list*/["push"](PL$219/*statement*/);}};
  return PL$218/*list*/;
  ;};
var PL$222/*parseBlock*/ = function(){
var PL$149/*block*/;
var PL$174/*node*/;

  ;
  PL$149/*block*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$163/*expect*/("{");
  PL$149/*block*/ = PL$221/*parseStatementList*/();
  PL$163/*expect*/("}");
  return PL$174/*node*/["finishBlockStatement"](PL$149/*block*/);
  ;};
var PL$182/*parseVariableIdentifier*/ = function(){
var PL$100/*token*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$100/*token*/ = PL$109/*lex*/();
  if((PL$100/*token*/["type"] !== PL$3/*Token*/["Identifier"])){
    PL$162/*throwUnexpected*/(PL$100/*token*/);
  };
  return PL$174/*node*/["finishIdentifier"](PL$100/*token*/["value"]);
  ;};
var PL$223/*parseVariableDeclaration*/ = function(PL$144/*kind*/){
var PL$136/*init*/;
var PL$34/*id*/;
var PL$174/*node*/;

  ;
  PL$136/*init*/ = nullPL$34/*id*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$34/*id*/ = PL$182/*parseVariableIdentifier*/();
  if((PL$12/*strict*/ && PL$37/*isRestrictedWord*/(PL$34/*id*/["name"]))){
    PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictVarName"]);
  };
  if((PL$144/*kind*/ === "const")){
    PL$163/*expect*/("=");
    PL$136/*init*/ = PL$175/*parseAssignmentExpression*/();
  }else{
  if(PL$167/*match*/("=")){
    PL$109/*lex*/();
    PL$136/*init*/ = PL$175/*parseAssignmentExpression*/();
  };
  };
  return PL$174/*node*/["finishVariableDeclarator"](PL$34/*id*/, PL$136/*init*/);
  ;};
var PL$224/*parseVariableDeclarationList*/ = function(PL$144/*kind*/){
var PL$218/*list*/;

  ;
  PL$218/*list*/ = [];
  do{
{
    PL$218/*list*/["push"](PL$223/*parseVariableDeclaration*/(PL$144/*kind*/));
    if(! PL$167/*match*/(",")){
      break;;
    };
    PL$109/*lex*/();}} while ((PL$13/*index*/ < PL$16/*length*/));
  return PL$218/*list*/;
  ;};
var PL$225/*parseVariableStatement*/ = function(PL$174/*node*/){
var PL$153/*declarations*/;

  ;
  PL$153/*declarations*/;
  PL$166/*expectKeyword*/("var");
  PL$153/*declarations*/ = PL$224/*parseVariableDeclarationList*/();
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishVariableDeclaration"](PL$153/*declarations*/, "var");
  ;};
var PL$226/*parseConstLetDeclaration*/ = function(PL$144/*kind*/){
var PL$153/*declarations*/;
var PL$174/*node*/;

  ;
  PL$153/*declarations*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$166/*expectKeyword*/(PL$144/*kind*/);
  PL$153/*declarations*/ = PL$224/*parseVariableDeclarationList*/(PL$144/*kind*/);
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishVariableDeclaration"](PL$153/*declarations*/, PL$144/*kind*/);
  ;};
var PL$227/*parseEmptyStatement*/ = function(){
var PL$174/*node*/;

  ;
  PL$174/*node*/ = new PL$116/*Node*/();
  PL$163/*expect*/(";");
  return PL$174/*node*/["finishEmptyStatement"]();
  ;};
var PL$228/*parseExpressionStatement*/ = function(PL$174/*node*/){
var PL$172/*expr*/;

  ;
  PL$172/*expr*/ = PL$188/*parseExpression*/();
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishExpressionStatement"](PL$172/*expr*/);
  ;};
var PL$230/*parseIfStatement*/ = function(PL$174/*node*/){
var PL$133/*test*/;
var PL$134/*consequent*/;
var PL$135/*alternate*/;

  ;
  PL$133/*test*/PL$134/*consequent*/PL$135/*alternate*/;
  PL$166/*expectKeyword*/("if");
  PL$163/*expect*/("(");
  PL$133/*test*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  PL$134/*consequent*/ = PL$229/*parseStatement*/();
  if(PL$168/*matchKeyword*/("else")){
    PL$109/*lex*/();
    PL$135/*alternate*/ = PL$229/*parseStatement*/();
  }else{
  PL$135/*alternate*/ = null;
  };
  return PL$174/*node*/["finishIfStatement"](PL$133/*test*/, PL$134/*consequent*/, PL$135/*alternate*/);
  ;};
var PL$232/*parseDoWhileStatement*/ = function(PL$174/*node*/){
var PL$93/*body*/;
var PL$133/*test*/;
var PL$231/*oldInIteration*/;

  ;
  PL$93/*body*/PL$133/*test*/PL$231/*oldInIteration*/;
  PL$166/*expectKeyword*/("do");
  PL$231/*oldInIteration*/ = PL$18/*state*/["inIteration"];
  PL$18/*state*/["inIteration"] = true;
  PL$93/*body*/ = PL$229/*parseStatement*/();
  PL$18/*state*/["inIteration"] = PL$231/*oldInIteration*/;
  PL$166/*expectKeyword*/("while");
  PL$163/*expect*/("(");
  PL$133/*test*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  if(PL$167/*match*/(";")){
    PL$109/*lex*/();
  };
  return PL$174/*node*/["finishDoWhileStatement"](PL$93/*body*/, PL$133/*test*/);
  ;};
var PL$233/*parseWhileStatement*/ = function(PL$174/*node*/){
var PL$133/*test*/;
var PL$93/*body*/;
var PL$231/*oldInIteration*/;

  ;
  PL$133/*test*/PL$93/*body*/PL$231/*oldInIteration*/;
  PL$166/*expectKeyword*/("while");
  PL$163/*expect*/("(");
  PL$133/*test*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  PL$231/*oldInIteration*/ = PL$18/*state*/["inIteration"];
  PL$18/*state*/["inIteration"] = true;
  PL$93/*body*/ = PL$229/*parseStatement*/();
  PL$18/*state*/["inIteration"] = PL$231/*oldInIteration*/;
  return PL$174/*node*/["finishWhileStatement"](PL$133/*test*/, PL$93/*body*/);
  ;};
var PL$234/*parseForVariableDeclaration*/ = function(){
var PL$100/*token*/;
var PL$153/*declarations*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$153/*declarations*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$100/*token*/ = PL$109/*lex*/();
  PL$153/*declarations*/ = PL$224/*parseVariableDeclarationList*/();
  return PL$174/*node*/["finishVariableDeclaration"](PL$153/*declarations*/, PL$100/*token*/["value"]);
  ;};
var PL$235/*parseForStatement*/ = function(PL$174/*node*/){
var PL$136/*init*/;
var PL$133/*test*/;
var PL$137/*update*/;
var PL$127/*left*/;
var PL$128/*right*/;
var PL$93/*body*/;
var PL$231/*oldInIteration*/;
var PL$198/*previousAllowIn*/;

  ;
  PL$136/*init*/PL$133/*test*/PL$137/*update*/PL$127/*left*/PL$128/*right*/PL$93/*body*/PL$231/*oldInIteration*/PL$198/*previousAllowIn*/ = PL$18/*state*/["allowIn"];
  PL$136/*init*/ = PL$133/*test*/ = PL$137/*update*/ = null;
  PL$166/*expectKeyword*/("for");
  PL$163/*expect*/("(");
  if(PL$167/*match*/(";")){
    PL$109/*lex*/();
  }else{
  if((PL$168/*matchKeyword*/("var") || PL$168/*matchKeyword*/("let"))){
    PL$18/*state*/["allowIn"] = false;
    PL$136/*init*/ = PL$234/*parseForVariableDeclaration*/();
    PL$18/*state*/["allowIn"] = PL$198/*previousAllowIn*/;
    if(((PL$136/*init*/["declarations"]["length"] === 1) && PL$168/*matchKeyword*/("in"))){
      PL$109/*lex*/();
      PL$127/*left*/ = PL$136/*init*/;
      PL$128/*right*/ = PL$188/*parseExpression*/();
      PL$136/*init*/ = null;
    };
  }else{
  PL$18/*state*/["allowIn"] = false;
  PL$136/*init*/ = PL$188/*parseExpression*/();
  PL$18/*state*/["allowIn"] = PL$198/*previousAllowIn*/;
  if(PL$168/*matchKeyword*/("in")){
    if(! PL$173/*isLeftHandSide*/(PL$136/*init*/)){
      PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["InvalidLHSInForIn"]);
    };
    PL$109/*lex*/();
    PL$127/*left*/ = PL$136/*init*/;
    PL$128/*right*/ = PL$188/*parseExpression*/();
    PL$136/*init*/ = null;
  };
  };
  if((typeof PL$127/*left*/ === "undefined")){
    PL$163/*expect*/(";");
  };
  };
  if((typeof PL$127/*left*/ === "undefined")){
    if(! PL$167/*match*/(";")){
      PL$133/*test*/ = PL$188/*parseExpression*/();
    };
    PL$163/*expect*/(";");
    if(! PL$167/*match*/(")")){
      PL$137/*update*/ = PL$188/*parseExpression*/();
    };
  };
  PL$163/*expect*/(")");
  PL$231/*oldInIteration*/ = PL$18/*state*/["inIteration"];
  PL$18/*state*/["inIteration"] = true;
  PL$93/*body*/ = PL$229/*parseStatement*/();
  PL$18/*state*/["inIteration"] = PL$231/*oldInIteration*/;
  return ((typeof PL$127/*left*/ === "undefined") ? PL$174/*node*/["finishForStatement"](PL$136/*init*/, PL$133/*test*/, PL$137/*update*/, PL$93/*body*/) : PL$174/*node*/["finishForInStatement"](PL$127/*left*/, PL$128/*right*/, PL$93/*body*/));
  ;};
var PL$236/*parseContinueStatement*/ = function(PL$174/*node*/){
var PL$129/*label*/;
var PL$145/*key*/;

  ;
  PL$129/*label*/ = nullPL$145/*key*/;
  PL$166/*expectKeyword*/("continue");
  if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 59)){
    PL$109/*lex*/();
    if(! PL$18/*state*/["inIteration"]){
      PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalContinue"]);
    };
    return PL$174/*node*/["finishContinueStatement"](null);
  };
  if(PL$155/*peekLineTerminator*/()){
    if(! PL$18/*state*/["inIteration"]){
      PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalContinue"]);
    };
    return PL$174/*node*/["finishContinueStatement"](null);
  };
  if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Identifier"])){
    PL$129/*label*/ = PL$182/*parseVariableIdentifier*/();
    PL$145/*key*/ = ("$" + PL$129/*label*/["name"]);
    if(! PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$18/*state*/["labelSet"], PL$145/*key*/)){
      PL$48/*throwError*/({}, PL$9/*Messages*/["UnknownLabel"], PL$129/*label*/["name"]);
    };
  };
  PL$171/*consumeSemicolon*/();
  if(((PL$129/*label*/ === null) && ! PL$18/*state*/["inIteration"])){
    PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalContinue"]);
  };
  return PL$174/*node*/["finishContinueStatement"](PL$129/*label*/);
  ;};
var PL$237/*parseBreakStatement*/ = function(PL$174/*node*/){
var PL$129/*label*/;
var PL$145/*key*/;

  ;
  PL$129/*label*/ = nullPL$145/*key*/;
  PL$166/*expectKeyword*/("break");
  if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 59)){
    PL$109/*lex*/();
    if(! (PL$18/*state*/["inIteration"] || PL$18/*state*/["inSwitch"])){
      PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalBreak"]);
    };
    return PL$174/*node*/["finishBreakStatement"](null);
  };
  if(PL$155/*peekLineTerminator*/()){
    if(! (PL$18/*state*/["inIteration"] || PL$18/*state*/["inSwitch"])){
      PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalBreak"]);
    };
    return PL$174/*node*/["finishBreakStatement"](null);
  };
  if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Identifier"])){
    PL$129/*label*/ = PL$182/*parseVariableIdentifier*/();
    PL$145/*key*/ = ("$" + PL$129/*label*/["name"]);
    if(! PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$18/*state*/["labelSet"], PL$145/*key*/)){
      PL$48/*throwError*/({}, PL$9/*Messages*/["UnknownLabel"], PL$129/*label*/["name"]);
    };
  };
  PL$171/*consumeSemicolon*/();
  if(((PL$129/*label*/ === null) && ! (PL$18/*state*/["inIteration"] || PL$18/*state*/["inSwitch"]))){
    PL$48/*throwError*/({}, PL$9/*Messages*/["IllegalBreak"]);
  };
  return PL$174/*node*/["finishBreakStatement"](PL$129/*label*/);
  ;};
var PL$238/*parseReturnStatement*/ = function(PL$174/*node*/){
var PL$143/*argument*/;

  ;
  PL$143/*argument*/ = null;
  PL$166/*expectKeyword*/("return");
  if(! PL$18/*state*/["inFunctionBody"]){
    PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["IllegalReturn"]);
  };
  if((PL$11/*source*/["charCodeAt"](PL$13/*index*/) === 32)){
    if(PL$32/*isIdentifierStart*/(PL$11/*source*/["charCodeAt"]((PL$13/*index*/ + 1)))){
      PL$143/*argument*/ = PL$188/*parseExpression*/();
      PL$171/*consumeSemicolon*/();
      return PL$174/*node*/["finishReturnStatement"](PL$143/*argument*/);
    };
  };
  if(PL$155/*peekLineTerminator*/()){
    return PL$174/*node*/["finishReturnStatement"](null);
  };
  if(! PL$167/*match*/(";")){
    if((! PL$167/*match*/("}") && (PL$17/*lookahead*/["type"] !== PL$3/*Token*/["EOF"]))){
      PL$143/*argument*/ = PL$188/*parseExpression*/();
    };
  };
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishReturnStatement"](PL$143/*argument*/);
  ;};
var PL$239/*parseWithStatement*/ = function(PL$174/*node*/){
var PL$140/*object*/;
var PL$93/*body*/;

  ;
  PL$140/*object*/PL$93/*body*/;
  if(PL$12/*strict*/){
    PL$50/*skipComment*/();
    PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictModeWith"]);
  };
  PL$166/*expectKeyword*/("with");
  PL$163/*expect*/("(");
  PL$140/*object*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  PL$93/*body*/ = PL$229/*parseStatement*/();
  return PL$174/*node*/["finishWithStatement"](PL$140/*object*/, PL$93/*body*/);
  ;};
var PL$240/*parseSwitchCase*/ = function(){
var PL$133/*test*/;
var PL$134/*consequent*/;
var PL$219/*statement*/;
var PL$174/*node*/;

  ;
  PL$133/*test*/PL$134/*consequent*/ = []PL$219/*statement*/PL$174/*node*/ = new PL$116/*Node*/();
  if(PL$168/*matchKeyword*/("default")){
    PL$109/*lex*/();
    PL$133/*test*/ = null;
  }else{
  PL$166/*expectKeyword*/("case");
  PL$133/*test*/ = PL$188/*parseExpression*/();
  };
  PL$163/*expect*/(":");
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(((PL$167/*match*/("}") || PL$168/*matchKeyword*/("default")) || PL$168/*matchKeyword*/("case"))){
      break;;
    };
    PL$219/*statement*/ = PL$229/*parseStatement*/();
    PL$134/*consequent*/["push"](PL$219/*statement*/);}};
  return PL$174/*node*/["finishSwitchCase"](PL$133/*test*/, PL$134/*consequent*/);
  ;};
var PL$244/*parseSwitchStatement*/ = function(PL$174/*node*/){
var PL$147/*discriminant*/;
var PL$148/*cases*/;
var PL$241/*clause*/;
var PL$242/*oldInSwitch*/;
var PL$243/*defaultFound*/;

  ;
  PL$147/*discriminant*/PL$148/*cases*/PL$241/*clause*/PL$242/*oldInSwitch*/PL$243/*defaultFound*/;
  PL$166/*expectKeyword*/("switch");
  PL$163/*expect*/("(");
  PL$147/*discriminant*/ = PL$188/*parseExpression*/();
  PL$163/*expect*/(")");
  PL$163/*expect*/("{");
  PL$148/*cases*/ = [];
  if(PL$167/*match*/("}")){
    PL$109/*lex*/();
    return PL$174/*node*/["finishSwitchStatement"](PL$147/*discriminant*/, PL$148/*cases*/);
  };
  PL$242/*oldInSwitch*/ = PL$18/*state*/["inSwitch"];
  PL$18/*state*/["inSwitch"] = true;
  PL$243/*defaultFound*/ = false;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(PL$167/*match*/("}")){
      break;;
    };
    PL$241/*clause*/ = PL$240/*parseSwitchCase*/();
    if((PL$241/*clause*/["test"] === null)){
      if(PL$243/*defaultFound*/){
        PL$48/*throwError*/({}, PL$9/*Messages*/["MultipleDefaultsInSwitch"]);
      };
      PL$243/*defaultFound*/ = true;
    };
    PL$148/*cases*/["push"](PL$241/*clause*/);}};
  PL$18/*state*/["inSwitch"] = PL$242/*oldInSwitch*/;
  PL$163/*expect*/("}");
  return PL$174/*node*/["finishSwitchStatement"](PL$147/*discriminant*/, PL$148/*cases*/);
  ;};
var PL$245/*parseThrowStatement*/ = function(PL$174/*node*/){
var PL$143/*argument*/;

  ;
  PL$143/*argument*/;
  PL$166/*expectKeyword*/("throw");
  if(PL$155/*peekLineTerminator*/()){
    PL$48/*throwError*/({}, PL$9/*Messages*/["NewlineAfterThrow"]);
  };
  PL$143/*argument*/ = PL$188/*parseExpression*/();
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishThrowStatement"](PL$143/*argument*/);
  ;};
var PL$246/*parseCatchClause*/ = function(){
var PL$132/*param*/;
var PL$93/*body*/;
var PL$174/*node*/;

  ;
  PL$132/*param*/PL$93/*body*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$166/*expectKeyword*/("catch");
  PL$163/*expect*/("(");
  if(PL$167/*match*/(")")){
    PL$162/*throwUnexpected*/(PL$17/*lookahead*/);
  };
  PL$132/*param*/ = PL$182/*parseVariableIdentifier*/();
  if((PL$12/*strict*/ && PL$37/*isRestrictedWord*/(PL$132/*param*/["name"]))){
    PL$95/*throwErrorTolerant*/({}, PL$9/*Messages*/["StrictCatchVariable"]);
  };
  PL$163/*expect*/(")");
  PL$93/*body*/ = PL$222/*parseBlock*/();
  return PL$174/*node*/["finishCatchClause"](PL$132/*param*/, PL$93/*body*/);
  ;};
var PL$247/*parseTryStatement*/ = function(PL$174/*node*/){
var PL$149/*block*/;
var PL$151/*handlers*/;
var PL$152/*finalizer*/;

  ;
  PL$149/*block*/PL$151/*handlers*/ = []PL$152/*finalizer*/ = null;
  PL$166/*expectKeyword*/("try");
  PL$149/*block*/ = PL$222/*parseBlock*/();
  if(PL$168/*matchKeyword*/("catch")){
    PL$151/*handlers*/["push"](PL$246/*parseCatchClause*/());
  };
  if(PL$168/*matchKeyword*/("finally")){
    PL$109/*lex*/();
    PL$152/*finalizer*/ = PL$222/*parseBlock*/();
  };
  if(((PL$151/*handlers*/["length"] === 0) && ! PL$152/*finalizer*/)){
    PL$48/*throwError*/({}, PL$9/*Messages*/["NoCatchOrFinally"]);
  };
  return PL$174/*node*/["finishTryStatement"](PL$149/*block*/, [], PL$151/*handlers*/, PL$152/*finalizer*/);
  ;};
var PL$248/*parseDebuggerStatement*/ = function(PL$174/*node*/){

  ;
  PL$166/*expectKeyword*/("debugger");
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishDebuggerStatement"]();
  ;};
var PL$229/*parseStatement*/ = function(){
var PL$39/*type*/;
var PL$172/*expr*/;
var PL$249/*labeledBody*/;
var PL$145/*key*/;
var PL$174/*node*/;

  ;
  PL$39/*type*/ = PL$17/*lookahead*/["type"]PL$172/*expr*/PL$249/*labeledBody*/PL$145/*key*/PL$174/*node*/;
  if((PL$39/*type*/ === PL$3/*Token*/["EOF"])){
    PL$162/*throwUnexpected*/(PL$17/*lookahead*/);
  };
  if(((PL$39/*type*/ === PL$3/*Token*/["Punctuator"]) && (PL$17/*lookahead*/["value"] === "{"))){
    return PL$222/*parseBlock*/();
  };
  PL$174/*node*/ = new PL$116/*Node*/();
  if((PL$39/*type*/ === PL$3/*Token*/["Punctuator"])){
    switch (PL$17/*lookahead*/["value"]){
case ";":

    return PL$227/*parseEmptyStatement*/(PL$174/*node*/);case "(":

    return PL$228/*parseExpressionStatement*/(PL$174/*node*/);default:

    break;;}
;
  }else{
  if((PL$39/*type*/ === PL$3/*Token*/["Keyword"])){
    switch (PL$17/*lookahead*/["value"]){
case "break":

    return PL$237/*parseBreakStatement*/(PL$174/*node*/);case "continue":

    return PL$236/*parseContinueStatement*/(PL$174/*node*/);case "debugger":

    return PL$248/*parseDebuggerStatement*/(PL$174/*node*/);case "do":

    return PL$232/*parseDoWhileStatement*/(PL$174/*node*/);case "for":

    return PL$235/*parseForStatement*/(PL$174/*node*/);case "function":

    return PL$250/*parseFunctionDeclaration*/(PL$174/*node*/);case "if":

    return PL$230/*parseIfStatement*/(PL$174/*node*/);case "return":

    return PL$238/*parseReturnStatement*/(PL$174/*node*/);case "switch":

    return PL$244/*parseSwitchStatement*/(PL$174/*node*/);case "throw":

    return PL$245/*parseThrowStatement*/(PL$174/*node*/);case "try":

    return PL$247/*parseTryStatement*/(PL$174/*node*/);case "var":

    return PL$225/*parseVariableStatement*/(PL$174/*node*/);case "while":

    return PL$233/*parseWhileStatement*/(PL$174/*node*/);case "with":

    return PL$239/*parseWithStatement*/(PL$174/*node*/);default:

    break;;}
;
  };
  };
  PL$172/*expr*/ = PL$188/*parseExpression*/();
  if(((PL$172/*expr*/["type"] === PL$6/*Syntax*/["Identifier"]) && PL$167/*match*/(":"))){
    PL$109/*lex*/();
    PL$145/*key*/ = ("$" + PL$172/*expr*/["name"]);
    if(PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$18/*state*/["labelSet"], PL$145/*key*/)){
      PL$48/*throwError*/({}, PL$9/*Messages*/["Redeclaration"], "Label", PL$172/*expr*/["name"]);
    };
    PL$18/*state*/["labelSet"][PL$145/*key*/] = true;
    PL$249/*labeledBody*/ = PL$229/*parseStatement*/();
    delete PL$18/*state*/["labelSet"][PL$145/*key*/];
    return PL$174/*node*/["finishLabeledStatement"](PL$172/*expr*/, PL$249/*labeledBody*/);
  };
  PL$171/*consumeSemicolon*/();
  return PL$174/*node*/["finishExpressionStatement"](PL$172/*expr*/);
  ;};
var PL$179/*parseFunctionSourceElements*/ = function(){
var PL$251/*sourceElement*/;
var PL$252/*sourceElements*/;
var PL$100/*token*/;
var PL$253/*directive*/;
var PL$254/*firstRestricted*/;
var PL$255/*oldLabelSet*/;
var PL$231/*oldInIteration*/;
var PL$242/*oldInSwitch*/;
var PL$256/*oldInFunctionBody*/;
var PL$217/*oldParenthesisCount*/;
var PL$174/*node*/;

  ;
  PL$251/*sourceElement*/PL$252/*sourceElements*/ = []PL$100/*token*/PL$253/*directive*/PL$254/*firstRestricted*/PL$255/*oldLabelSet*/PL$231/*oldInIteration*/PL$242/*oldInSwitch*/PL$256/*oldInFunctionBody*/PL$217/*oldParenthesisCount*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$163/*expect*/("{");
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["StringLiteral"])){
      break;;
    };
    PL$100/*token*/ = PL$17/*lookahead*/;
    PL$251/*sourceElement*/ = PL$220/*parseSourceElement*/();
    PL$252/*sourceElements*/["push"](PL$251/*sourceElement*/);
    if((PL$251/*sourceElement*/["expression"]["type"] !== PL$6/*Syntax*/["Literal"])){
      break;;
    };
    PL$253/*directive*/ = PL$11/*source*/["slice"]((PL$100/*token*/["start"] + 1), (PL$100/*token*/["end"] - 1));
    if((PL$253/*directive*/ === "use strict")){
      PL$12/*strict*/ = true;
      if(PL$254/*firstRestricted*/){
        PL$95/*throwErrorTolerant*/(PL$254/*firstRestricted*/, PL$9/*Messages*/["StrictOctalLiteral"]);
      };
    }else{
    if((! PL$254/*firstRestricted*/ && PL$100/*token*/["octal"])){
      PL$254/*firstRestricted*/ = PL$100/*token*/;
    };
    };}};
  PL$255/*oldLabelSet*/ = PL$18/*state*/["labelSet"];
  PL$231/*oldInIteration*/ = PL$18/*state*/["inIteration"];
  PL$242/*oldInSwitch*/ = PL$18/*state*/["inSwitch"];
  PL$256/*oldInFunctionBody*/ = PL$18/*state*/["inFunctionBody"];
  PL$217/*oldParenthesisCount*/ = PL$18/*state*/["parenthesizedCount"];
  PL$18/*state*/["labelSet"] = {};
  PL$18/*state*/["inIteration"] = false;
  PL$18/*state*/["inSwitch"] = false;
  PL$18/*state*/["inFunctionBody"] = true;
  PL$18/*state*/["parenthesizedCount"] = 0;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    if(PL$167/*match*/("}")){
      break;;
    };
    PL$251/*sourceElement*/ = PL$220/*parseSourceElement*/();
    if((typeof PL$251/*sourceElement*/ === "undefined")){
      break;;
    };
    PL$252/*sourceElements*/["push"](PL$251/*sourceElement*/);}};
  PL$163/*expect*/("}");
  PL$18/*state*/["labelSet"] = PL$255/*oldLabelSet*/;
  PL$18/*state*/["inIteration"] = PL$231/*oldInIteration*/;
  PL$18/*state*/["inSwitch"] = PL$242/*oldInSwitch*/;
  PL$18/*state*/["inFunctionBody"] = PL$256/*oldInFunctionBody*/;
  PL$18/*state*/["parenthesizedCount"] = PL$217/*oldParenthesisCount*/;
  return PL$174/*node*/["finishBlockStatement"](PL$252/*sourceElements*/);
  ;};
var PL$214/*validateParam*/ = function(PL$212/*options*/, PL$132/*param*/, PL$138/*name*/){
var PL$145/*key*/;

  ;
  PL$145/*key*/ = ("$" + PL$138/*name*/);
  if(PL$12/*strict*/){
    if(PL$37/*isRestrictedWord*/(PL$138/*name*/)){
      PL$212/*options*/["stricted"] = PL$132/*param*/;
      PL$212/*options*/["message"] = PL$9/*Messages*/["StrictParamName"];
    };
    if(PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$212/*options*/["paramSet"], PL$145/*key*/)){
      PL$212/*options*/["stricted"] = PL$132/*param*/;
      PL$212/*options*/["message"] = PL$9/*Messages*/["StrictParamDupe"];
    };
  }else{
  if(! PL$212/*options*/["firstRestricted"]){
    if(PL$37/*isRestrictedWord*/(PL$138/*name*/)){
      PL$212/*options*/["firstRestricted"] = PL$132/*param*/;
      PL$212/*options*/["message"] = PL$9/*Messages*/["StrictParamName"];
    }else{
    if(PL$36/*isStrictModeReservedWord*/(PL$138/*name*/)){
      PL$212/*options*/["firstRestricted"] = PL$132/*param*/;
      PL$212/*options*/["message"] = PL$9/*Messages*/["StrictReservedWord"];
    }else{
    if(PL$186/*Object*/["prototype"]["hasOwnProperty"]["call"](PL$212/*options*/["paramSet"], PL$145/*key*/)){
      PL$212/*options*/["firstRestricted"] = PL$132/*param*/;
      PL$212/*options*/["message"] = PL$9/*Messages*/["StrictParamDupe"];
    };
    };
    };
  };
  };
  PL$212/*options*/["paramSet"][PL$145/*key*/] = true;
  ;};
var PL$258/*parseParam*/ = function(PL$212/*options*/){
var PL$100/*token*/;
var PL$132/*param*/;
var PL$257/*def*/;

  ;
  PL$100/*token*/PL$132/*param*/PL$257/*def*/;
  PL$100/*token*/ = PL$17/*lookahead*/;
  PL$132/*param*/ = PL$182/*parseVariableIdentifier*/();
  PL$214/*validateParam*/(PL$212/*options*/, PL$100/*token*/, PL$100/*token*/["value"]);
  if(PL$167/*match*/("=")){
    PL$109/*lex*/();
    PL$257/*def*/ = PL$175/*parseAssignmentExpression*/();
    ++PL$212/*options*/["defaultCount"];
  };
  PL$212/*options*/["params"]["push"](PL$132/*param*/);
  PL$212/*options*/["defaults"]["push"](PL$257/*def*/);
  return ! PL$167/*match*/(")");
  ;};
var PL$259/*parseParams*/ = function(PL$254/*firstRestricted*/){
var PL$212/*options*/;

  ;
  PL$212/*options*/;
  PL$212/*options*/ = {"params": [],
"defaultCount": 0,
"defaults": [],
"firstRestricted": PL$254/*firstRestricted*/};
  PL$163/*expect*/("(");
  if(! PL$167/*match*/(")")){
    PL$212/*options*/["paramSet"] = {};
    while((PL$13/*index*/ < PL$16/*length*/)){
{
      if(! PL$258/*parseParam*/(PL$212/*options*/)){
        break;;
      };
      PL$163/*expect*/(",");}};
  };
  PL$163/*expect*/(")");
  if((PL$212/*options*/["defaultCount"] === 0)){
    PL$212/*options*/["defaults"] = [];
  };
  return {"params": PL$212/*options*/["params"],
"defaults": PL$212/*options*/["defaults"],
"stricted": PL$212/*options*/["stricted"],
"firstRestricted": PL$212/*options*/["firstRestricted"],
"message": PL$212/*options*/["message"]};
  ;};
var PL$250/*parseFunctionDeclaration*/ = function(){
var PL$34/*id*/;
var PL$123/*params*/;
var PL$124/*defaults*/;
var PL$93/*body*/;
var PL$100/*token*/;
var PL$260/*stricted*/;
var PL$85/*tmp*/;
var PL$254/*firstRestricted*/;
var PL$22/*message*/;
var PL$178/*previousStrict*/;
var PL$174/*node*/;

  ;
  PL$34/*id*/PL$123/*params*/ = []PL$124/*defaults*/ = []PL$93/*body*/PL$100/*token*/PL$260/*stricted*/PL$85/*tmp*/PL$254/*firstRestricted*/PL$22/*message*/PL$178/*previousStrict*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$166/*expectKeyword*/("function");
  PL$100/*token*/ = PL$17/*lookahead*/;
  PL$34/*id*/ = PL$182/*parseVariableIdentifier*/();
  if(PL$12/*strict*/){
    if(PL$37/*isRestrictedWord*/(PL$100/*token*/["value"])){
      PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["StrictFunctionName"]);
    };
  }else{
  if(PL$37/*isRestrictedWord*/(PL$100/*token*/["value"])){
    PL$254/*firstRestricted*/ = PL$100/*token*/;
    PL$22/*message*/ = PL$9/*Messages*/["StrictFunctionName"];
  }else{
  if(PL$36/*isStrictModeReservedWord*/(PL$100/*token*/["value"])){
    PL$254/*firstRestricted*/ = PL$100/*token*/;
    PL$22/*message*/ = PL$9/*Messages*/["StrictReservedWord"];
  };
  };
  };
  PL$85/*tmp*/ = PL$259/*parseParams*/(PL$254/*firstRestricted*/);
  PL$123/*params*/ = PL$85/*tmp*/["params"];
  PL$124/*defaults*/ = PL$85/*tmp*/["defaults"];
  PL$260/*stricted*/ = PL$85/*tmp*/["stricted"];
  PL$254/*firstRestricted*/ = PL$85/*tmp*/["firstRestricted"];
  if(PL$85/*tmp*/["message"]){
    PL$22/*message*/ = PL$85/*tmp*/["message"];
  };
  PL$178/*previousStrict*/ = PL$12/*strict*/;
  PL$93/*body*/ = PL$179/*parseFunctionSourceElements*/();
  if((PL$12/*strict*/ && PL$254/*firstRestricted*/)){
    PL$48/*throwError*/(PL$254/*firstRestricted*/, PL$22/*message*/);
  };
  if((PL$12/*strict*/ && PL$260/*stricted*/)){
    PL$95/*throwErrorTolerant*/(PL$260/*stricted*/, PL$22/*message*/);
  };
  PL$12/*strict*/ = PL$178/*previousStrict*/;
  return PL$174/*node*/["finishFunctionDeclaration"](PL$34/*id*/, PL$123/*params*/, PL$124/*defaults*/, PL$93/*body*/);
  ;};
var PL$190/*parseFunctionExpression*/ = function(){
var PL$100/*token*/;
var PL$34/*id*/;
var PL$260/*stricted*/;
var PL$254/*firstRestricted*/;
var PL$22/*message*/;
var PL$85/*tmp*/;
var PL$123/*params*/;
var PL$124/*defaults*/;
var PL$93/*body*/;
var PL$178/*previousStrict*/;
var PL$174/*node*/;

  ;
  PL$100/*token*/PL$34/*id*/ = nullPL$260/*stricted*/PL$254/*firstRestricted*/PL$22/*message*/PL$85/*tmp*/PL$123/*params*/ = []PL$124/*defaults*/ = []PL$93/*body*/PL$178/*previousStrict*/PL$174/*node*/ = new PL$116/*Node*/();
  PL$166/*expectKeyword*/("function");
  if(! PL$167/*match*/("(")){
    PL$100/*token*/ = PL$17/*lookahead*/;
    PL$34/*id*/ = PL$182/*parseVariableIdentifier*/();
    if(PL$12/*strict*/){
      if(PL$37/*isRestrictedWord*/(PL$100/*token*/["value"])){
        PL$95/*throwErrorTolerant*/(PL$100/*token*/, PL$9/*Messages*/["StrictFunctionName"]);
      };
    }else{
    if(PL$37/*isRestrictedWord*/(PL$100/*token*/["value"])){
      PL$254/*firstRestricted*/ = PL$100/*token*/;
      PL$22/*message*/ = PL$9/*Messages*/["StrictFunctionName"];
    }else{
    if(PL$36/*isStrictModeReservedWord*/(PL$100/*token*/["value"])){
      PL$254/*firstRestricted*/ = PL$100/*token*/;
      PL$22/*message*/ = PL$9/*Messages*/["StrictReservedWord"];
    };
    };
    };
  };
  PL$85/*tmp*/ = PL$259/*parseParams*/(PL$254/*firstRestricted*/);
  PL$123/*params*/ = PL$85/*tmp*/["params"];
  PL$124/*defaults*/ = PL$85/*tmp*/["defaults"];
  PL$260/*stricted*/ = PL$85/*tmp*/["stricted"];
  PL$254/*firstRestricted*/ = PL$85/*tmp*/["firstRestricted"];
  if(PL$85/*tmp*/["message"]){
    PL$22/*message*/ = PL$85/*tmp*/["message"];
  };
  PL$178/*previousStrict*/ = PL$12/*strict*/;
  PL$93/*body*/ = PL$179/*parseFunctionSourceElements*/();
  if((PL$12/*strict*/ && PL$254/*firstRestricted*/)){
    PL$48/*throwError*/(PL$254/*firstRestricted*/, PL$22/*message*/);
  };
  if((PL$12/*strict*/ && PL$260/*stricted*/)){
    PL$95/*throwErrorTolerant*/(PL$260/*stricted*/, PL$22/*message*/);
  };
  PL$12/*strict*/ = PL$178/*previousStrict*/;
  return PL$174/*node*/["finishFunctionExpression"](PL$34/*id*/, PL$123/*params*/, PL$124/*defaults*/, PL$93/*body*/);
  ;};
var PL$220/*parseSourceElement*/ = function(){

  ;
  if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["Keyword"])){
    switch (PL$17/*lookahead*/["value"]){
case "const":
case "let":

    return PL$226/*parseConstLetDeclaration*/(PL$17/*lookahead*/["value"]);case "function":

    return PL$250/*parseFunctionDeclaration*/();default:

    return PL$229/*parseStatement*/();}
;
  };
  if((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["EOF"])){
    return PL$229/*parseStatement*/();
  };
  ;};
var PL$261/*parseSourceElements*/ = function(){
var PL$251/*sourceElement*/;
var PL$252/*sourceElements*/;
var PL$100/*token*/;
var PL$253/*directive*/;
var PL$254/*firstRestricted*/;

  ;
  PL$251/*sourceElement*/PL$252/*sourceElements*/ = []PL$100/*token*/PL$253/*directive*/PL$254/*firstRestricted*/;
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$100/*token*/ = PL$17/*lookahead*/;
    if((PL$100/*token*/["type"] !== PL$3/*Token*/["StringLiteral"])){
      break;;
    };
    PL$251/*sourceElement*/ = PL$220/*parseSourceElement*/();
    PL$252/*sourceElements*/["push"](PL$251/*sourceElement*/);
    if((PL$251/*sourceElement*/["expression"]["type"] !== PL$6/*Syntax*/["Literal"])){
      break;;
    };
    PL$253/*directive*/ = PL$11/*source*/["slice"]((PL$100/*token*/["start"] + 1), (PL$100/*token*/["end"] - 1));
    if((PL$253/*directive*/ === "use strict")){
      PL$12/*strict*/ = true;
      if(PL$254/*firstRestricted*/){
        PL$95/*throwErrorTolerant*/(PL$254/*firstRestricted*/, PL$9/*Messages*/["StrictOctalLiteral"]);
      };
    }else{
    if((! PL$254/*firstRestricted*/ && PL$100/*token*/["octal"])){
      PL$254/*firstRestricted*/ = PL$100/*token*/;
    };
    };}};
  while((PL$13/*index*/ < PL$16/*length*/)){
{
    PL$251/*sourceElement*/ = PL$220/*parseSourceElement*/();
    if((typeof PL$251/*sourceElement*/ === "undefined")){
      break;;
    };
    PL$252/*sourceElements*/["push"](PL$251/*sourceElement*/);}};
  return PL$252/*sourceElements*/;
  ;};
var PL$262/*parseProgram*/ = function(){
var PL$93/*body*/;
var PL$174/*node*/;

  ;
  PL$93/*body*/PL$174/*node*/;
  PL$50/*skipComment*/();
  PL$111/*peek*/();
  PL$174/*node*/ = new PL$116/*Node*/();
  PL$12/*strict*/ = false;
  PL$93/*body*/ = PL$261/*parseSourceElements*/();
  return PL$174/*node*/["finishProgram"](PL$93/*body*/);
  ;};
var PL$264/*filterTokenLocation*/ = function(){
var PL$52/*i*/;
var PL$107/*entry*/;
var PL$100/*token*/;
var PL$263/*tokens*/;

  ;
  PL$52/*i*/PL$107/*entry*/PL$100/*token*/PL$263/*tokens*/ = [];
  for(PL$52/*i*/ = 0;(PL$52/*i*/ < PL$19/*extra*/["tokens"]["length"]);++PL$52/*i*/){{
    PL$107/*entry*/ = PL$19/*extra*/["tokens"][PL$52/*i*/];
    PL$100/*token*/ = {"type": PL$107/*entry*/["type"],
"value": PL$107/*entry*/["value"]};
    if(PL$107/*entry*/["regex"]){
      PL$100/*token*/["regex"] = {"pattern": PL$107/*entry*/["regex"]["pattern"],
"flags": PL$107/*entry*/["regex"]["flags"]};
    };
    if(PL$19/*extra*/["range"]){
      PL$100/*token*/["range"] = PL$107/*entry*/["range"];
    };
    if(PL$19/*extra*/["loc"]){
      PL$100/*token*/["loc"] = PL$107/*entry*/["loc"];
    };
    PL$263/*tokens*/["push"](PL$100/*token*/);}};
  PL$19/*extra*/["tokens"] = PL$263/*tokens*/;
  ;};
var PL$266/*tokenize*/ = function(PL$54/*code*/, PL$212/*options*/){
var PL$185/*toString*/;
var PL$263/*tokens*/;

  ;
  PL$185/*toString*/PL$263/*tokens*/;
  PL$185/*toString*/ = PL$31/*String*/;
  if(((typeof PL$54/*code*/ !== "string") && ! (PL$54/*code*/ instanceof PL$31/*String*/))){
    PL$54/*code*/ = PL$185/*toString*/(PL$54/*code*/);
  };
  PL$11/*source*/ = PL$54/*code*/;
  PL$13/*index*/ = 0;
  PL$14/*lineNumber*/ = ((PL$11/*source*/["length"] > 0) ? 1 : 0);
  PL$15/*lineStart*/ = 0;
  PL$16/*length*/ = PL$11/*source*/["length"];
  PL$17/*lookahead*/ = null;
  PL$18/*state*/ = {"allowIn": true,
"labelSet": {},
"inFunctionBody": false,
"inIteration": false,
"inSwitch": false,
"lastCommentStart": - 1};
  PL$19/*extra*/ = {};
  PL$212/*options*/ = (PL$212/*options*/ || {});
  PL$212/*options*/["tokens"] = true;
  PL$19/*extra*/["tokens"] = [];
  PL$19/*extra*/["tokenize"] = true;
  PL$19/*extra*/["openParenToken"] = - 1;
  PL$19/*extra*/["openCurlyToken"] = - 1;
  PL$19/*extra*/["range"] = ((typeof PL$212/*options*/["range"] === "boolean") && PL$212/*options*/["range"]);
  PL$19/*extra*/["loc"] = ((typeof PL$212/*options*/["loc"] === "boolean") && PL$212/*options*/["loc"]);
  if(((typeof PL$212/*options*/["comment"] === "boolean") && PL$212/*options*/["comment"])){
    PL$19/*extra*/["comments"] = [];
  };
  if(((typeof PL$212/*options*/["tolerant"] === "boolean") && PL$212/*options*/["tolerant"])){
    PL$19/*extra*/["errors"] = [];
  };
  try
{
    PL$111/*peek*/();
    if((PL$17/*lookahead*/["type"] === PL$3/*Token*/["EOF"])){
      return PL$19/*extra*/["tokens"];
    };
    PL$109/*lex*/();
    while((PL$17/*lookahead*/["type"] !== PL$3/*Token*/["EOF"])){
{
      try
{
        PL$109/*lex*/();}catch(PL$265/*lexError*/){
        if(PL$19/*extra*/["errors"]){
          PL$19/*extra*/["errors"]["push"](PL$265/*lexError*/);
          break;;
        }else{
        throw PL$265/*lexError*/;
        };};}};
    PL$264/*filterTokenLocation*/();
    PL$263/*tokens*/ = PL$19/*extra*/["tokens"];
    if((typeof PL$19/*extra*/["comments"] !== "undefined")){
      PL$263/*tokens*/["comments"] = PL$19/*extra*/["comments"];
    };
    if((typeof PL$19/*extra*/["errors"] !== "undefined")){
      PL$263/*tokens*/["errors"] = PL$19/*extra*/["errors"];
    };}catch(PL$88/*e*/){
    throw PL$88/*e*/;};
  return PL$263/*tokens*/;
  ;};
var PL$268/*parse*/ = function(PL$54/*code*/, PL$212/*options*/){
var PL$267/*program*/;
var PL$185/*toString*/;

  ;
  PL$267/*program*/PL$185/*toString*/;
  PL$185/*toString*/ = PL$31/*String*/;
  if(((typeof PL$54/*code*/ !== "string") && ! (PL$54/*code*/ instanceof PL$31/*String*/))){
    PL$54/*code*/ = PL$185/*toString*/(PL$54/*code*/);
  };
  PL$11/*source*/ = PL$54/*code*/;
  PL$13/*index*/ = 0;
  PL$14/*lineNumber*/ = ((PL$11/*source*/["length"] > 0) ? 1 : 0);
  PL$15/*lineStart*/ = 0;
  PL$16/*length*/ = PL$11/*source*/["length"];
  PL$17/*lookahead*/ = null;
  PL$18/*state*/ = {"allowIn": true,
"labelSet": {},
"parenthesisCount": 0,
"inFunctionBody": false,
"inIteration": false,
"inSwitch": false,
"lastCommentStart": - 1};
  PL$19/*extra*/ = {};
  if((typeof PL$212/*options*/ !== "undefined")){
    PL$19/*extra*/["range"] = ((typeof PL$212/*options*/["range"] === "boolean") && PL$212/*options*/["range"]);
    PL$19/*extra*/["loc"] = ((typeof PL$212/*options*/["loc"] === "boolean") && PL$212/*options*/["loc"]);
    PL$19/*extra*/["attachComment"] = ((typeof PL$212/*options*/["attachComment"] === "boolean") && PL$212/*options*/["attachComment"]);
    if(((PL$19/*extra*/["loc"] && (PL$212/*options*/["source"] !== null)) && (PL$212/*options*/["source"] !== undefined))){
      PL$19/*extra*/["source"] = PL$185/*toString*/(PL$212/*options*/["source"]);
    };
    if(((typeof PL$212/*options*/["tokens"] === "boolean") && PL$212/*options*/["tokens"])){
      PL$19/*extra*/["tokens"] = [];
    };
    if(((typeof PL$212/*options*/["comment"] === "boolean") && PL$212/*options*/["comment"])){
      PL$19/*extra*/["comments"] = [];
    };
    if(((typeof PL$212/*options*/["tolerant"] === "boolean") && PL$212/*options*/["tolerant"])){
      PL$19/*extra*/["errors"] = [];
    };
    if(PL$19/*extra*/["attachComment"]){
      PL$19/*extra*/["range"] = true;
      PL$19/*extra*/["comments"] = [];
      PL$19/*extra*/["bottomRightStack"] = [];
      PL$19/*extra*/["trailingComments"] = [];
      PL$19/*extra*/["leadingComments"] = [];
    };
  };
  try
{
    PL$267/*program*/ = PL$262/*parseProgram*/();
    if((typeof PL$19/*extra*/["comments"] !== "undefined")){
      PL$267/*program*/["comments"] = PL$19/*extra*/["comments"];
    };
    if((typeof PL$19/*extra*/["tokens"] !== "undefined")){
      PL$264/*filterTokenLocation*/();
      PL$267/*program*/["tokens"] = PL$19/*extra*/["tokens"];
    };
    if((typeof PL$19/*extra*/["errors"] !== "undefined")){
      PL$267/*program*/["errors"] = PL$19/*extra*/["errors"];
    };}catch(PL$88/*e*/){
    throw PL$88/*e*/;};
  return PL$267/*program*/;
  ;};

  ;
  PL$2/*exports*/ = {};
  PL$3/*Token*/PL$4/*TokenName*/PL$5/*FnExprTokens*/PL$6/*Syntax*/PL$7/*PlaceHolders*/PL$8/*PropertyKind*/PL$9/*Messages*/PL$10/*Regex*/PL$11/*source*/PL$12/*strict*/PL$13/*index*/PL$14/*lineNumber*/PL$15/*lineStart*/PL$16/*length*/PL$17/*lookahead*/PL$18/*state*/PL$19/*extra*/;
  PL$3/*Token*/ = {"BooleanLiteral": 1,
"EOF": 2,
"Identifier": 3,
"Keyword": 4,
"NullLiteral": 5,
"NumericLiteral": 6,
"Punctuator": 7,
"StringLiteral": 8,
"RegularExpression": 9};
  PL$4/*TokenName*/ = {};
  PL$4/*TokenName*/[PL$3/*Token*/["BooleanLiteral"]] = "Boolean";
  PL$4/*TokenName*/[PL$3/*Token*/["EOF"]] = "<end>";
  PL$4/*TokenName*/[PL$3/*Token*/["Identifier"]] = "Identifier";
  PL$4/*TokenName*/[PL$3/*Token*/["Keyword"]] = "Keyword";
  PL$4/*TokenName*/[PL$3/*Token*/["NullLiteral"]] = "Null";
  PL$4/*TokenName*/[PL$3/*Token*/["NumericLiteral"]] = "Numeric";
  PL$4/*TokenName*/[PL$3/*Token*/["Punctuator"]] = "Punctuator";
  PL$4/*TokenName*/[PL$3/*Token*/["StringLiteral"]] = "String";
  PL$4/*TokenName*/[PL$3/*Token*/["RegularExpression"]] = "RegularExpression";
  PL$5/*FnExprTokens*/ = ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="];
  PL$6/*Syntax*/ = {"AssignmentExpression": "AssignmentExpression",
"ArrayExpression": "ArrayExpression",
"ArrowFunctionExpression": "ArrowFunctionExpression",
"BlockStatement": "BlockStatement",
"BinaryExpression": "BinaryExpression",
"BreakStatement": "BreakStatement",
"CallExpression": "CallExpression",
"CatchClause": "CatchClause",
"ConditionalExpression": "ConditionalExpression",
"ContinueStatement": "ContinueStatement",
"DoWhileStatement": "DoWhileStatement",
"DebuggerStatement": "DebuggerStatement",
"EmptyStatement": "EmptyStatement",
"ExpressionStatement": "ExpressionStatement",
"ForStatement": "ForStatement",
"ForInStatement": "ForInStatement",
"FunctionDeclaration": "FunctionDeclaration",
"FunctionExpression": "FunctionExpression",
"Identifier": "Identifier",
"IfStatement": "IfStatement",
"Literal": "Literal",
"LabeledStatement": "LabeledStatement",
"LogicalExpression": "LogicalExpression",
"MemberExpression": "MemberExpression",
"NewExpression": "NewExpression",
"ObjectExpression": "ObjectExpression",
"Program": "Program",
"Property": "Property",
"ReturnStatement": "ReturnStatement",
"SequenceExpression": "SequenceExpression",
"SwitchStatement": "SwitchStatement",
"SwitchCase": "SwitchCase",
"ThisExpression": "ThisExpression",
"ThrowStatement": "ThrowStatement",
"TryStatement": "TryStatement",
"UnaryExpression": "UnaryExpression",
"UpdateExpression": "UpdateExpression",
"VariableDeclaration": "VariableDeclaration",
"VariableDeclarator": "VariableDeclarator",
"WhileStatement": "WhileStatement",
"WithStatement": "WithStatement"};
  PL$7/*PlaceHolders*/ = {"ArrowParameterPlaceHolder": {"type": "ArrowParameterPlaceHolder"}};
  PL$8/*PropertyKind*/ = {"Data": 1,
"Get": 2,
"Set": 4};
  PL$9/*Messages*/ = {"UnexpectedToken": "Unexpected token %0",
"UnexpectedNumber": "Unexpected number",
"UnexpectedString": "Unexpected string",
"UnexpectedIdentifier": "Unexpected identifier",
"UnexpectedReserved": "Unexpected reserved word",
"UnexpectedEOS": "Unexpected end of input",
"NewlineAfterThrow": "Illegal newline after throw",
"InvalidRegExp": "Invalid regular expression",
"UnterminatedRegExp": "Invalid regular expression: missing /",
"InvalidLHSInAssignment": "Invalid left-hand side in assignment",
"InvalidLHSInForIn": "Invalid left-hand side in for-in",
"MultipleDefaultsInSwitch": "More than one default clause in switch statement",
"NoCatchOrFinally": "Missing catch or finally after try",
"UnknownLabel": "Undefined label '%0'",
"Redeclaration": "%0 '%1' has already been declared",
"IllegalContinue": "Illegal continue statement",
"IllegalBreak": "Illegal break statement",
"IllegalReturn": "Illegal return statement",
"StrictModeWith": "Strict mode code may not include a with statement",
"StrictCatchVariable": "Catch variable may not be eval or arguments in strict mode",
"StrictVarName": "Variable name may not be eval or arguments in strict mode",
"StrictParamName": "Parameter name eval or arguments is not allowed in strict mode",
"StrictParamDupe": "Strict mode function may not have duplicate parameter names",
"StrictFunctionName": "Function name may not be eval or arguments in strict mode",
"StrictOctalLiteral": "Octal literals are not allowed in strict mode.",
"StrictDelete": "Delete of an unqualified identifier in strict mode.",
"StrictDuplicateProperty": "Duplicate data property in object literal not allowed in strict mode",
"AccessorDataProperty": "Object literal may not have data and accessor property with the same name",
"AccessorGetSet": "Object literal may not have multiple get/set accessors with the same name",
"StrictLHSAssignment": "Assignment to eval or arguments is not allowed in strict mode",
"StrictLHSPostfix": "Postfix increment/decrement may not have eval or arguments operand in strict mode",
"StrictLHSPrefix": "Prefix increment/decrement may not have eval or arguments operand in strict mode",
"StrictReservedWord": "Use of future reserved word in strict mode"};
  PL$10/*Regex*/ = {"NonAsciiIdentifierStart": new PL$20/*RegExp*/("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢲऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
"NonAsciiIdentifierPart": new PL$20/*RegExp*/("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԯԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠ-ࢲࣤ-ॣ०-९ॱ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧ᪰-᪽ᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶ᳸᳹ᴀ-᷵᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚝꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꧠ-ꧾꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︭︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")};
  PL$24/*assert*/;
  PL$26/*isDecimalDigit*/;
  PL$27/*isHexDigit*/;
  PL$28/*isOctalDigit*/;
  PL$29/*isWhiteSpace*/;
  PL$30/*isLineTerminator*/;
  PL$32/*isIdentifierStart*/;
  PL$33/*isIdentifierPart*/;
  PL$35/*isFutureReservedWord*/;
  PL$36/*isStrictModeReservedWord*/;
  PL$37/*isRestrictedWord*/;
  PL$38/*isKeyword*/;
  PL$45/*addComment*/;
  PL$47/*skipSingleLineComment*/;
  PL$49/*skipMultiLineComment*/;
  PL$50/*skipComment*/;
  PL$56/*scanHexEscape*/;
  PL$59/*scanUnicodeCodePointEscape*/;
  PL$60/*getEscapedIdentifier*/;
  PL$61/*getIdentifier*/;
  PL$62/*scanIdentifier*/;
  PL$68/*scanPunctuator*/;
  PL$71/*scanHexLiteral*/;
  PL$72/*scanOctalLiteral*/;
  PL$74/*scanNumericLiteral*/;
  PL$82/*scanStringLiteral*/;
  PL$90/*testRegExp*/;
  PL$94/*scanRegExpBody*/;
  PL$96/*scanRegExpFlags*/;
  PL$97/*scanRegExp*/;
  PL$101/*collectRegex*/;
  PL$102/*isIdentifierName*/;
  PL$105/*advanceSlash*/;
  PL$106/*advance*/;
  PL$108/*collectToken*/;
  PL$109/*lex*/;
  PL$111/*peek*/;
  PL$112/*Position*/;
  PL$113/*SourceLocation*/;
  PL$115/*WrappingSourceLocation*/;
  PL$116/*Node*/;
  PL$117/*WrappingNode*/;
  PL$117/*WrappingNode*/["prototype"] = PL$116/*Node*/["prototype"] = {"processComment": (function(){
  var PL$118/*lastChild*/;
var PL$119/*trailingComments*/;
var PL$120/*bottomRight*/;
var PL$121/*last*/;

    ;
    PL$118/*lastChild*/PL$119/*trailingComments*/PL$120/*bottomRight*/ = PL$19/*extra*/["bottomRightStack"]PL$121/*last*/ = PL$120/*bottomRight*/[(PL$120/*bottomRight*/["length"] - 1)];
    if((this["type"] === PL$6/*Syntax*/["Program"])){
      if((this["body"]["length"] > 0)){
        return;
      };
    };
    if((PL$19/*extra*/["trailingComments"]["length"] > 0)){
      if((PL$19/*extra*/["trailingComments"][0]["range"][0] >= this["range"][1])){
        PL$119/*trailingComments*/ = PL$19/*extra*/["trailingComments"];
        PL$19/*extra*/["trailingComments"] = [];
      }else{
      PL$19/*extra*/["trailingComments"]["length"] = 0;
      };
    }else{
    if(((PL$121/*last*/ && PL$121/*last*/["trailingComments"]) && (PL$121/*last*/["trailingComments"][0]["range"][0] >= this["range"][1]))){
      PL$119/*trailingComments*/ = PL$121/*last*/["trailingComments"];
      delete PL$121/*last*/["trailingComments"];
    };
    };
    if(PL$121/*last*/){
      while((PL$121/*last*/ && (PL$121/*last*/["range"][0] >= this["range"][0]))){
{
        PL$118/*lastChild*/ = PL$121/*last*/;
        PL$121/*last*/ = PL$120/*bottomRight*/["pop"]();}};
    };
    if(PL$118/*lastChild*/){
      if((PL$118/*lastChild*/["leadingComments"] && (PL$118/*lastChild*/["leadingComments"][(PL$118/*lastChild*/["leadingComments"]["length"] - 1)]["range"][1] <= this["range"][0]))){
        this["leadingComments"] = PL$118/*lastChild*/["leadingComments"];
        PL$118/*lastChild*/["leadingComments"] = undefined;
      };
    }else{
    if(((PL$19/*extra*/["leadingComments"]["length"] > 0) && (PL$19/*extra*/["leadingComments"][(PL$19/*extra*/["leadingComments"]["length"] - 1)]["range"][1] <= this["range"][0]))){
      this["leadingComments"] = PL$19/*extra*/["leadingComments"];
      PL$19/*extra*/["leadingComments"] = [];
    };
    };
    if(PL$119/*trailingComments*/){
      this["trailingComments"] = PL$119/*trailingComments*/;
    };
    PL$120/*bottomRight*/["push"](this);
    ;}),
"finish": (function(){
  
    ;
    if(PL$19/*extra*/["range"]){
      this["range"][1] = PL$13/*index*/;
    };
    if(PL$19/*extra*/["loc"]){
      this["loc"]["end"] = new PL$112/*Position*/();
      if(PL$19/*extra*/["source"]){
        this["loc"]["source"] = PL$19/*extra*/["source"];
      };
    };
    if(PL$19/*extra*/["attachComment"]){
      this["processComment"]();
    };
    ;}),
"finishArrayExpression": (function(PL$122/*elements*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ArrayExpression"];
    this["elements"] = PL$122/*elements*/;
    this["finish"]();
    return this;
    ;}),
"finishArrowFunctionExpression": (function(PL$123/*params*/, PL$124/*defaults*/, PL$93/*body*/, PL$125/*expression*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ArrowFunctionExpression"];
    this["id"] = null;
    this["params"] = PL$123/*params*/;
    this["defaults"] = PL$124/*defaults*/;
    this["body"] = PL$93/*body*/;
    this["rest"] = null;
    this["generator"] = false;
    this["expression"] = PL$125/*expression*/;
    this["finish"]();
    return this;
    ;}),
"finishAssignmentExpression": (function(PL$126/*operator*/, PL$127/*left*/, PL$128/*right*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["AssignmentExpression"];
    this["operator"] = PL$126/*operator*/;
    this["left"] = PL$127/*left*/;
    this["right"] = PL$128/*right*/;
    this["finish"]();
    return this;
    ;}),
"finishBinaryExpression": (function(PL$126/*operator*/, PL$127/*left*/, PL$128/*right*/){
  
    ;
    this["type"] = (((PL$126/*operator*/ === "||") || (PL$126/*operator*/ === "&&")) ? PL$6/*Syntax*/["LogicalExpression"] : PL$6/*Syntax*/["BinaryExpression"]);
    this["operator"] = PL$126/*operator*/;
    this["left"] = PL$127/*left*/;
    this["right"] = PL$128/*right*/;
    this["finish"]();
    return this;
    ;}),
"finishBlockStatement": (function(PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["BlockStatement"];
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishBreakStatement": (function(PL$129/*label*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["BreakStatement"];
    this["label"] = PL$129/*label*/;
    this["finish"]();
    return this;
    ;}),
"finishCallExpression": (function(PL$130/*callee*/, PL$131/*args*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["CallExpression"];
    this["callee"] = PL$130/*callee*/;
    this["arguments"] = PL$131/*args*/;
    this["finish"]();
    return this;
    ;}),
"finishCatchClause": (function(PL$132/*param*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["CatchClause"];
    this["param"] = PL$132/*param*/;
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishConditionalExpression": (function(PL$133/*test*/, PL$134/*consequent*/, PL$135/*alternate*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ConditionalExpression"];
    this["test"] = PL$133/*test*/;
    this["consequent"] = PL$134/*consequent*/;
    this["alternate"] = PL$135/*alternate*/;
    this["finish"]();
    return this;
    ;}),
"finishContinueStatement": (function(PL$129/*label*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ContinueStatement"];
    this["label"] = PL$129/*label*/;
    this["finish"]();
    return this;
    ;}),
"finishDebuggerStatement": (function(){
  
    ;
    this["type"] = PL$6/*Syntax*/["DebuggerStatement"];
    this["finish"]();
    return this;
    ;}),
"finishDoWhileStatement": (function(PL$93/*body*/, PL$133/*test*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["DoWhileStatement"];
    this["body"] = PL$93/*body*/;
    this["test"] = PL$133/*test*/;
    this["finish"]();
    return this;
    ;}),
"finishEmptyStatement": (function(){
  
    ;
    this["type"] = PL$6/*Syntax*/["EmptyStatement"];
    this["finish"]();
    return this;
    ;}),
"finishExpressionStatement": (function(PL$125/*expression*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ExpressionStatement"];
    this["expression"] = PL$125/*expression*/;
    this["finish"]();
    return this;
    ;}),
"finishForStatement": (function(PL$136/*init*/, PL$133/*test*/, PL$137/*update*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ForStatement"];
    this["init"] = PL$136/*init*/;
    this["test"] = PL$133/*test*/;
    this["update"] = PL$137/*update*/;
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishForInStatement": (function(PL$127/*left*/, PL$128/*right*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ForInStatement"];
    this["left"] = PL$127/*left*/;
    this["right"] = PL$128/*right*/;
    this["body"] = PL$93/*body*/;
    this["each"] = false;
    this["finish"]();
    return this;
    ;}),
"finishFunctionDeclaration": (function(PL$34/*id*/, PL$123/*params*/, PL$124/*defaults*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["FunctionDeclaration"];
    this["id"] = PL$34/*id*/;
    this["params"] = PL$123/*params*/;
    this["defaults"] = PL$124/*defaults*/;
    this["body"] = PL$93/*body*/;
    this["rest"] = null;
    this["generator"] = false;
    this["expression"] = false;
    this["finish"]();
    return this;
    ;}),
"finishFunctionExpression": (function(PL$34/*id*/, PL$123/*params*/, PL$124/*defaults*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["FunctionExpression"];
    this["id"] = PL$34/*id*/;
    this["params"] = PL$123/*params*/;
    this["defaults"] = PL$124/*defaults*/;
    this["body"] = PL$93/*body*/;
    this["rest"] = null;
    this["generator"] = false;
    this["expression"] = false;
    this["finish"]();
    return this;
    ;}),
"finishIdentifier": (function(PL$138/*name*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["Identifier"];
    this["name"] = PL$138/*name*/;
    this["finish"]();
    return this;
    ;}),
"finishIfStatement": (function(PL$133/*test*/, PL$134/*consequent*/, PL$135/*alternate*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["IfStatement"];
    this["test"] = PL$133/*test*/;
    this["consequent"] = PL$134/*consequent*/;
    this["alternate"] = PL$135/*alternate*/;
    this["finish"]();
    return this;
    ;}),
"finishLabeledStatement": (function(PL$129/*label*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["LabeledStatement"];
    this["label"] = PL$129/*label*/;
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishLiteral": (function(PL$100/*token*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["Literal"];
    this["value"] = PL$100/*token*/["value"];
    this["raw"] = PL$11/*source*/["slice"](PL$100/*token*/["start"], PL$100/*token*/["end"]);
    if(PL$100/*token*/["regex"]){
      this["regex"] = PL$100/*token*/["regex"];
    };
    this["finish"]();
    return this;
    ;}),
"finishMemberExpression": (function(PL$139/*accessor*/, PL$140/*object*/, PL$141/*property*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["MemberExpression"];
    this["computed"] = (PL$139/*accessor*/ === "[");
    this["object"] = PL$140/*object*/;
    this["property"] = PL$141/*property*/;
    this["finish"]();
    return this;
    ;}),
"finishNewExpression": (function(PL$130/*callee*/, PL$131/*args*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["NewExpression"];
    this["callee"] = PL$130/*callee*/;
    this["arguments"] = PL$131/*args*/;
    this["finish"]();
    return this;
    ;}),
"finishObjectExpression": (function(PL$142/*properties*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ObjectExpression"];
    this["properties"] = PL$142/*properties*/;
    this["finish"]();
    return this;
    ;}),
"finishPostfixExpression": (function(PL$126/*operator*/, PL$143/*argument*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["UpdateExpression"];
    this["operator"] = PL$126/*operator*/;
    this["argument"] = PL$143/*argument*/;
    this["prefix"] = false;
    this["finish"]();
    return this;
    ;}),
"finishProgram": (function(PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["Program"];
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishProperty": (function(PL$144/*kind*/, PL$145/*key*/, PL$40/*value*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["Property"];
    this["key"] = PL$145/*key*/;
    this["value"] = PL$40/*value*/;
    this["kind"] = PL$144/*kind*/;
    this["finish"]();
    return this;
    ;}),
"finishReturnStatement": (function(PL$143/*argument*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ReturnStatement"];
    this["argument"] = PL$143/*argument*/;
    this["finish"]();
    return this;
    ;}),
"finishSequenceExpression": (function(PL$146/*expressions*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["SequenceExpression"];
    this["expressions"] = PL$146/*expressions*/;
    this["finish"]();
    return this;
    ;}),
"finishSwitchCase": (function(PL$133/*test*/, PL$134/*consequent*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["SwitchCase"];
    this["test"] = PL$133/*test*/;
    this["consequent"] = PL$134/*consequent*/;
    this["finish"]();
    return this;
    ;}),
"finishSwitchStatement": (function(PL$147/*discriminant*/, PL$148/*cases*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["SwitchStatement"];
    this["discriminant"] = PL$147/*discriminant*/;
    this["cases"] = PL$148/*cases*/;
    this["finish"]();
    return this;
    ;}),
"finishThisExpression": (function(){
  
    ;
    this["type"] = PL$6/*Syntax*/["ThisExpression"];
    this["finish"]();
    return this;
    ;}),
"finishThrowStatement": (function(PL$143/*argument*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["ThrowStatement"];
    this["argument"] = PL$143/*argument*/;
    this["finish"]();
    return this;
    ;}),
"finishTryStatement": (function(PL$149/*block*/, PL$150/*guardedHandlers*/, PL$151/*handlers*/, PL$152/*finalizer*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["TryStatement"];
    this["block"] = PL$149/*block*/;
    this["guardedHandlers"] = PL$150/*guardedHandlers*/;
    this["handlers"] = PL$151/*handlers*/;
    this["finalizer"] = PL$152/*finalizer*/;
    this["finish"]();
    return this;
    ;}),
"finishUnaryExpression": (function(PL$126/*operator*/, PL$143/*argument*/){
  
    ;
    this["type"] = (((PL$126/*operator*/ === "++") || (PL$126/*operator*/ === "--")) ? PL$6/*Syntax*/["UpdateExpression"] : PL$6/*Syntax*/["UnaryExpression"]);
    this["operator"] = PL$126/*operator*/;
    this["argument"] = PL$143/*argument*/;
    this["prefix"] = true;
    this["finish"]();
    return this;
    ;}),
"finishVariableDeclaration": (function(PL$153/*declarations*/, PL$144/*kind*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["VariableDeclaration"];
    this["declarations"] = PL$153/*declarations*/;
    this["kind"] = PL$144/*kind*/;
    this["finish"]();
    return this;
    ;}),
"finishVariableDeclarator": (function(PL$34/*id*/, PL$136/*init*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["VariableDeclarator"];
    this["id"] = PL$34/*id*/;
    this["init"] = PL$136/*init*/;
    this["finish"]();
    return this;
    ;}),
"finishWhileStatement": (function(PL$133/*test*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["WhileStatement"];
    this["test"] = PL$133/*test*/;
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;}),
"finishWithStatement": (function(PL$140/*object*/, PL$93/*body*/){
  
    ;
    this["type"] = PL$6/*Syntax*/["WithStatement"];
    this["object"] = PL$140/*object*/;
    this["body"] = PL$93/*body*/;
    this["finish"]();
    return this;
    ;})};
  PL$155/*peekLineTerminator*/;
  PL$48/*throwError*/;
  PL$95/*throwErrorTolerant*/;
  PL$162/*throwUnexpected*/;
  PL$163/*expect*/;
  PL$164/*expectTolerant*/;
  PL$166/*expectKeyword*/;
  PL$167/*match*/;
  PL$168/*matchKeyword*/;
  PL$170/*matchAssign*/;
  PL$171/*consumeSemicolon*/;
  PL$173/*isLeftHandSide*/;
  PL$176/*parseArrayInitialiser*/;
  PL$180/*parsePropertyFunction*/;
  PL$181/*parseObjectPropertyKey*/;
  PL$183/*parseObjectProperty*/;
  PL$187/*parseObjectInitialiser*/;
  PL$189/*parseGroupExpression*/;
  PL$191/*parsePrimaryExpression*/;
  PL$192/*parseArguments*/;
  PL$193/*parseNonComputedProperty*/;
  PL$194/*parseNonComputedMember*/;
  PL$195/*parseComputedMember*/;
  PL$197/*parseNewExpression*/;
  PL$199/*parseLeftHandSideExpressionAllowCall*/;
  PL$196/*parseLeftHandSideExpression*/;
  PL$200/*parsePostfixExpression*/;
  PL$201/*parseUnaryExpression*/;
  PL$204/*binaryPrecedence*/;
  PL$208/*parseBinaryExpression*/;
  PL$209/*parseConditionalExpression*/;
  PL$210/*parseConciseBody*/;
  PL$215/*reinterpretAsCoverFormalsList*/;
  PL$216/*parseArrowFunctionExpression*/;
  PL$175/*parseAssignmentExpression*/;
  PL$188/*parseExpression*/;
  PL$221/*parseStatementList*/;
  PL$222/*parseBlock*/;
  PL$182/*parseVariableIdentifier*/;
  PL$223/*parseVariableDeclaration*/;
  PL$224/*parseVariableDeclarationList*/;
  PL$225/*parseVariableStatement*/;
  PL$226/*parseConstLetDeclaration*/;
  PL$227/*parseEmptyStatement*/;
  PL$228/*parseExpressionStatement*/;
  PL$230/*parseIfStatement*/;
  PL$232/*parseDoWhileStatement*/;
  PL$233/*parseWhileStatement*/;
  PL$234/*parseForVariableDeclaration*/;
  PL$235/*parseForStatement*/;
  PL$236/*parseContinueStatement*/;
  PL$237/*parseBreakStatement*/;
  PL$238/*parseReturnStatement*/;
  PL$239/*parseWithStatement*/;
  PL$240/*parseSwitchCase*/;
  PL$244/*parseSwitchStatement*/;
  PL$245/*parseThrowStatement*/;
  PL$246/*parseCatchClause*/;
  PL$247/*parseTryStatement*/;
  PL$248/*parseDebuggerStatement*/;
  PL$229/*parseStatement*/;
  PL$179/*parseFunctionSourceElements*/;
  PL$214/*validateParam*/;
  PL$258/*parseParam*/;
  PL$259/*parseParams*/;
  PL$250/*parseFunctionDeclaration*/;
  PL$190/*parseFunctionExpression*/;
  PL$220/*parseSourceElement*/;
  PL$261/*parseSourceElements*/;
  PL$262/*parseProgram*/;
  PL$264/*filterTokenLocation*/;
  PL$266/*tokenize*/;
  PL$268/*parse*/;
  PL$2/*exports*/["version"] = "2.0.0-dev";
  PL$2/*exports*/["tokenize"] = PL$266/*tokenize*/;
  PL$2/*exports*/["parse"] = PL$268/*parse*/;
  PL$2/*exports*/["Syntax"] = (function(){
  var PL$138/*name*/;
var PL$269/*types*/;

    ;
    PL$138/*name*/PL$269/*types*/ = {};
    if((typeof PL$186/*Object*/["create"] === "function")){
      PL$269/*types*/ = PL$186/*Object*/["create"](null);
    };
    for(PL$138/*name*/ in PL$6/*Syntax*/){
      if(PL$6/*Syntax*/["hasOwnProperty"](PL$138/*name*/)){
        PL$269/*types*/[PL$138/*name*/] = PL$6/*Syntax*/[PL$138/*name*/];
      };};
    if((typeof PL$186/*Object*/["freeze"] === "function")){
      PL$186/*Object*/["freeze"](PL$269/*types*/);
    };
    return PL$269/*types*/;
    ;})();
  return PL$2/*exports*/;
  ;})();
;return PL$1;
});
})();