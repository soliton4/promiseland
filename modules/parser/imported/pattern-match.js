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

if (promiseland._hasModule({ hashStr: "1a48a9f01cc8e1e796c4847347f2fc7a" })){ return promiseland._getModule("1a48a9f01cc8e1e796c4847347f2fc7a"); };
var PL$9/*global*/;try{PL$9/*global*/ = global;}catch(e){};
var PL$20/*Error*/;try{PL$20/*Error*/ = Error;}catch(e){};
var PL$21/*Object*/;try{PL$21/*Object*/ = Object;}catch(e){};
var PL$23/*Array*/;try{PL$23/*Array*/ = Array;}catch(e){};
var PL$26/*RegExp*/;try{PL$26/*RegExp*/ = RegExp;}catch(e){};
var PL$42/*NaN*/;try{PL$42/*NaN*/ = NaN;}catch(e){};
var PL$54/*Math*/;try{PL$54/*Math*/ = Math;}catch(e){};
var PL$57/*Infinity*/;try{PL$57/*Infinity*/ = Infinity;}catch(e){};
var PL$59/*isFinite*/;try{PL$59/*isFinite*/ = isFinite;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$10/*match*/;
var PL$7/*matchCases*/;
var PL$17/*MatchError*/;
var PL$15/*matchPattern*/;
var PL$25/*matchNull*/;
var PL$24/*matchArray*/;
var PL$36/*hasOwn*/;
var PL$28/*matchObject*/;
var PL$29/*matchString*/;
var PL$27/*matchRegExp*/;
var PL$31/*matchNumber*/;
var PL$30/*matchNaN*/;
var PL$33/*matchPredicate*/;
var PL$32/*matchBoolean*/;
var PL$34/*matchUndefined*/;
var PL$22/*Pattern*/;
var PL$47/*Var*/;
var PL$46/*Any*/;
var PL$53/*floor*/;
var PL$55/*abs*/;
var PL$56/*sign*/;
var PL$58/*toInteger*/;
var PL$61/*All*/;
var PL$64/*Some*/;
var PL$10/*match*/ = function(PL$2/*actual*/, PL$3/*body*/, PL$4/*thisArg*/){
var PL$8/*cases*/;

  ;
  if((typeof PL$3/*body*/ === "undefined")){
    return {"when": (function(PL$5/*pattern*/, PL$6/*template*/, PL$4/*thisArg*/){
    
      ;
      return PL$7/*matchCases*/(PL$2/*actual*/, [{"pattern": PL$5/*pattern*/,
"template": PL$6/*template*/,
"thisArg": PL$4/*thisArg*/}]);
      ;})};
  };
  PL$8/*cases*/ = [];
  if((typeof PL$4/*thisArg*/ === "undefined")){
    PL$4/*thisArg*/ = PL$9/*global*/;
  };
  PL$3/*body*/["call"](PL$4/*thisArg*/, (function(PL$5/*pattern*/, PL$6/*template*/, PL$4/*thisArg*/){
  
    ;
    PL$8/*cases*/["push"]({"pattern": PL$5/*pattern*/,
"template": PL$6/*template*/,
"thisArg": PL$4/*thisArg*/});
    ;}));
  return PL$7/*matchCases*/(PL$2/*actual*/, PL$8/*cases*/);
  ;};
var PL$7/*matchCases*/ = function(PL$2/*actual*/, PL$8/*cases*/){
var PL$11/*i*/;
var PL$12/*n*/;
var PL$13/*c*/;
var PL$14/*matches*/;

  ;
  for(PL$11/*i*/ = 0PL$12/*n*/ = PL$8/*cases*/["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
    PL$13/*c*/ = PL$8/*cases*/[PL$11/*i*/];
    try
{
      PL$14/*matches*/ = {};
      PL$15/*matchPattern*/(PL$13/*c*/["pattern"], PL$2/*actual*/, PL$14/*matches*/);
      return (PL$13/*c*/["template"] ? PL$13/*c*/["template"]["call"](((typeof PL$13/*c*/["thisArg"] === "undefined") ? PL$9/*global*/ : PL$13/*c*/["thisArg"]), PL$14/*matches*/) : PL$14/*matches*/);}catch(PL$16/*e*/){
      if((PL$16/*e*/ instanceof PL$17/*MatchError*/)){
        continue;;
      };
      throw PL$16/*e*/;};}};
  throw new PL$17/*MatchError*/(PL$8/*cases*/, PL$2/*actual*/, "no more cases");
  ;};
var PL$17/*MatchError*/ = function(PL$18/*expected*/, PL$2/*actual*/, PL$19/*message*/){

  ;
  PL$20/*Error*/["call"](this, PL$19/*message*/);
  if(! ("stack" in this)){
    this["stack"] = new PL$20/*Error*/()["stack"];
  };
  this["expected"] = PL$18/*expected*/;
  this["actual"] = PL$2/*actual*/;
  ;};
var PL$15/*matchPattern*/ = function(PL$5/*pattern*/, PL$2/*actual*/, PL$14/*matches*/){

  ;
  if((PL$5/*pattern*/ instanceof PL$22/*Pattern*/)){
    PL$5/*pattern*/["match"](PL$2/*actual*/, PL$14/*matches*/);
  }else{
  if(PL$23/*Array*/["isArray"](PL$5/*pattern*/)){
    PL$24/*matchArray*/(PL$5/*pattern*/, PL$2/*actual*/, PL$14/*matches*/);
  }else{
  if((typeof PL$5/*pattern*/ === "object")){
    if(! PL$5/*pattern*/){
      PL$25/*matchNull*/(PL$2/*actual*/);
    }else{
    if((PL$5/*pattern*/ instanceof PL$26/*RegExp*/)){
      PL$27/*matchRegExp*/(PL$5/*pattern*/, PL$2/*actual*/);
    }else{
    PL$28/*matchObject*/(PL$5/*pattern*/, PL$2/*actual*/, PL$14/*matches*/);
    };
    };
  }else{
  if((typeof PL$5/*pattern*/ === "string")){
    PL$29/*matchString*/(PL$5/*pattern*/, PL$2/*actual*/);
  }else{
  if((typeof PL$5/*pattern*/ === "number")){
    if((PL$5/*pattern*/ !== PL$5/*pattern*/)){
      PL$30/*matchNaN*/(PL$2/*actual*/);
    }else{
    PL$31/*matchNumber*/(PL$5/*pattern*/, PL$2/*actual*/);
    };
  }else{
  if((typeof PL$5/*pattern*/ === "boolean")){
    PL$32/*matchBoolean*/(PL$5/*pattern*/, PL$2/*actual*/);
  }else{
  if((typeof PL$5/*pattern*/ === "function")){
    PL$33/*matchPredicate*/(PL$5/*pattern*/, PL$2/*actual*/);
  }else{
  if((typeof PL$5/*pattern*/ === "undefined")){
    PL$34/*matchUndefined*/(PL$2/*actual*/);
  };
  };
  };
  };
  };
  };
  };
  };
  ;};
var PL$25/*matchNull*/ = function(PL$2/*actual*/, PL$14/*matches*/){

  ;
  if((PL$2/*actual*/ !== null)){
    throw new PL$17/*MatchError*/(null, PL$2/*actual*/, "not null");
  };
  ;};
var PL$24/*matchArray*/ = function(PL$35/*arr*/, PL$2/*actual*/, PL$14/*matches*/){
var PL$12/*n*/;
var PL$11/*i*/;

  ;
  if((typeof PL$2/*actual*/ !== "object")){
    throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$2/*actual*/, "not an object");
  };
  if(! PL$2/*actual*/){
    throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$2/*actual*/, "null");
  };
  PL$12/*n*/ = PL$35/*arr*/["length"];
  for(PL$11/*i*/ = 0;(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
    if(! (PL$11/*i*/ in PL$2/*actual*/)){
      throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$2/*actual*/, ("no element at index " + PL$11/*i*/));
    };
    PL$15/*matchPattern*/(PL$35/*arr*/[PL$11/*i*/], PL$2/*actual*/[PL$11/*i*/], PL$14/*matches*/);}};
  ;};
var PL$28/*matchObject*/ = function(PL$37/*obj*/, PL$2/*actual*/, PL$14/*matches*/){
var PL$38/*key*/;

  ;
  if((typeof PL$2/*actual*/ !== "object")){
    throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$2/*actual*/, "not an object");
  };
  if(! PL$2/*actual*/){
    throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$2/*actual*/, "null");
  };
  for(PL$38/*key*/ in PL$37/*obj*/){
    if(! PL$36/*hasOwn*/["call"](PL$37/*obj*/, PL$38/*key*/)){
      continue;;
    };
    if(! (PL$38/*key*/ in PL$2/*actual*/)){
      throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$2/*actual*/, ("no property " + PL$38/*key*/));
    };
    PL$15/*matchPattern*/(PL$37/*obj*/[PL$38/*key*/], PL$2/*actual*/[PL$38/*key*/], PL$14/*matches*/);};
  ;};
var PL$29/*matchString*/ = function(PL$39/*str*/, PL$2/*actual*/){

  ;
  if((typeof PL$2/*actual*/ !== "string")){
    throw new PL$17/*MatchError*/(PL$39/*str*/, PL$2/*actual*/, "not a string");
  };
  if((PL$2/*actual*/ !== PL$39/*str*/)){
    throw new PL$17/*MatchError*/(PL$39/*str*/, PL$2/*actual*/, "wrong string value");
  };
  ;};
var PL$27/*matchRegExp*/ = function(PL$40/*re*/, PL$2/*actual*/){

  ;
  if((typeof PL$2/*actual*/ !== "string")){
    throw new PL$17/*MatchError*/(PL$40/*re*/, PL$2/*actual*/, "not a string");
  };
  if(! PL$40/*re*/["test"](PL$2/*actual*/)){
    throw new PL$17/*MatchError*/(PL$40/*re*/, PL$2/*actual*/, "regexp pattern match failed");
  };
  ;};
var PL$31/*matchNumber*/ = function(PL$41/*num*/, PL$2/*actual*/){

  ;
  if((typeof PL$2/*actual*/ !== "number")){
    throw new PL$17/*MatchError*/(PL$41/*num*/, PL$2/*actual*/, "not a number");
  };
  if((PL$2/*actual*/ !== PL$41/*num*/)){
    throw new PL$17/*MatchError*/(PL$41/*num*/, PL$2/*actual*/, "wrong number value");
  };
  ;};
var PL$30/*matchNaN*/ = function(PL$2/*actual*/){

  ;
  if(((typeof PL$2/*actual*/ !== "number") || (PL$2/*actual*/ === PL$2/*actual*/))){
    throw new PL$17/*MatchError*/(PL$42/*NaN*/, PL$2/*actual*/, "not NaN");
  };
  ;};
var PL$33/*matchPredicate*/ = function(PL$43/*pred*/, PL$2/*actual*/){

  ;
  if(! PL$43/*pred*/(PL$2/*actual*/)){
    throw new PL$17/*MatchError*/(PL$43/*pred*/, PL$2/*actual*/, "predicate failed");
  };
  ;};
var PL$32/*matchBoolean*/ = function(PL$44/*bool*/, PL$2/*actual*/){

  ;
  if((typeof PL$2/*actual*/ !== "boolean")){
    throw new PL$17/*MatchError*/(PL$44/*bool*/, PL$2/*actual*/, "not a boolean");
  };
  if((PL$2/*actual*/ !== PL$44/*bool*/)){
    throw new PL$17/*MatchError*/(PL$44/*bool*/, PL$2/*actual*/, "wrong boolean value");
  };
  ;};
var PL$34/*matchUndefined*/ = function(PL$2/*actual*/){

  ;
  if((typeof PL$2/*actual*/ !== "undefined")){
    throw new PL$17/*MatchError*/(undefined, PL$2/*actual*/, "not undefined");
  };
  ;};
var PL$22/*Pattern*/ = function(){

  ;
  ;};
var PL$47/*Var*/ = function(PL$45/*name*/, PL$5/*pattern*/){

  ;
  this["_name"] = PL$45/*name*/;
  this["_pattern"] = ((typeof PL$5/*pattern*/ === "undefined") ? PL$46/*Any*/ : PL$5/*pattern*/);
  ;};
var PL$56/*sign*/ = function(PL$50/*x*/){

  ;
  return ((PL$50/*x*/ < 0) ? - 1 : 1);
  ;};
var PL$58/*toInteger*/ = function(PL$50/*x*/){

  ;
  return ((PL$50/*x*/ !== PL$50/*x*/) ? 0 : ((((PL$50/*x*/ === 0) || (PL$50/*x*/ === - PL$57/*Infinity*/)) || (PL$50/*x*/ === PL$57/*Infinity*/)) ? PL$50/*x*/ : (PL$56/*sign*/(PL$50/*x*/) * PL$53/*floor*/(PL$55/*abs*/(PL$50/*x*/)))));
  ;};
var PL$61/*All*/ = function(PL$60/*patterns*/){

  ;
  this["patterns"] = PL$60/*patterns*/;
  ;};
var PL$64/*Some*/ = function(PL$60/*patterns*/){

  ;
  this["patterns"] = PL$60/*patterns*/;
  ;};

  ;
  PL$10/*match*/;
  PL$7/*matchCases*/;
  PL$17/*MatchError*/;
  PL$17/*MatchError*/["prototype"] = PL$21/*Object*/["create"](PL$20/*Error*/["prototype"]);
  PL$15/*matchPattern*/;
  PL$25/*matchNull*/;
  PL$24/*matchArray*/;
  PL$36/*hasOwn*/ = {}["hasOwnProperty"];
  PL$28/*matchObject*/;
  PL$29/*matchString*/;
  PL$27/*matchRegExp*/;
  PL$31/*matchNumber*/;
  PL$30/*matchNaN*/;
  PL$33/*matchPredicate*/;
  PL$32/*matchBoolean*/;
  PL$34/*matchUndefined*/;
  PL$22/*Pattern*/;
  PL$47/*Var*/;
  PL$47/*Var*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$47/*Var*/["prototype"]["match"] = (function PL$48/*Var_match*/(PL$2/*actual*/, PL$14/*matches*/){
  
    ;
    PL$15/*matchPattern*/(this["_pattern"], PL$2/*actual*/, PL$14/*matches*/);
    PL$14/*matches*/[this["_name"]] = PL$2/*actual*/;
    ;});
  PL$46/*Any*/ = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$46/*Any*/["match"] = (function PL$49/*Any_match*/(PL$2/*actual*/){
  
    ;
    ;});
  PL$10/*match*/["var"] = (function(PL$45/*name*/, PL$5/*pattern*/){
  
    ;
    return new PL$47/*Var*/(PL$45/*name*/, PL$5/*pattern*/);
    ;});
  PL$10/*match*/["any"] = PL$46/*Any*/;
  PL$10/*match*/["object"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "object") && PL$50/*x*/);
    ;});
  PL$10/*match*/["array"] = PL$23/*Array*/["isArray"];
  PL$10/*match*/["primitive"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === null) || (typeof PL$50/*x*/ !== "object"));
    ;});
  PL$10/*match*/["number"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "number");
    ;});
  PL$10/*match*/["range"] = (function(PL$51/*start*/, PL$52/*end*/){
  
    ;
    return (function(PL$50/*x*/){
    
      ;
      return (((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ >= PL$51/*start*/)) && (PL$50/*x*/ < PL$52/*end*/));
      ;});
    ;});
  PL$53/*floor*/ = PL$54/*Math*/["floor"]PL$55/*abs*/ = PL$54/*Math*/["abs"];
  PL$56/*sign*/;
  PL$58/*toInteger*/;
  PL$10/*match*/["negative"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ < 0));
    ;});
  PL$10/*match*/["positive"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ > 0));
    ;});
  PL$10/*match*/["nonnegative"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ >= 0));
    ;});
  PL$10/*match*/["minusZero"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === 0) && ((1 / PL$50/*x*/) === - PL$57/*Infinity*/));
    ;});
  PL$10/*match*/["plusZero"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === 0) && ((1 / PL$50/*x*/) === PL$57/*Infinity*/));
    ;});
  PL$10/*match*/["finite"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && PL$59/*isFinite*/(PL$50/*x*/));
    ;});
  PL$10/*match*/["infinite"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && ((PL$50/*x*/ === PL$57/*Infinity*/) || (PL$50/*x*/ === - PL$57/*Infinity*/)));
    ;});
  PL$10/*match*/["integer"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === PL$58/*toInteger*/(PL$50/*x*/)));
    ;});
  PL$10/*match*/["int32"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === (PL$50/*x*/ | 0)));
    ;});
  PL$10/*match*/["uint32"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === (PL$50/*x*/ >>> 0)));
    ;});
  PL$10/*match*/["string"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "string");
    ;});
  PL$10/*match*/["boolean"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "boolean");
    ;});
  PL$10/*match*/["null"] = (function(PL$50/*x*/){
  
    ;
    return (PL$50/*x*/ === null);
    ;});
  PL$10/*match*/["undefined"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "undefined");
    ;});
  PL$10/*match*/["function"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "function");
    ;});
  PL$61/*All*/;
  PL$61/*All*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$61/*All*/["prototype"]["match"] = (function(PL$2/*actual*/, PL$14/*matches*/){
  var PL$62/*temp*/;
var PL$11/*i*/;
var PL$12/*n*/;
var PL$38/*key*/;

    ;
    PL$62/*temp*/ = {};
    for(PL$11/*i*/ = 0PL$12/*n*/ = this["patterns"]["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
      PL$15/*matchPattern*/(this["patterns"][PL$11/*i*/], PL$2/*actual*/, PL$62/*temp*/);}};
    for(PL$38/*key*/ in PL$62/*temp*/){
      if(! PL$36/*hasOwn*/["call"](PL$62/*temp*/, PL$38/*key*/)){
        continue;;
      };
      PL$14/*matches*/[PL$38/*key*/] = PL$62/*temp*/[PL$38/*key*/];};
    ;});
  PL$10/*match*/["all"] = (function(){
  var PL$63/*arguments*/ = arguments;

    ;
    return new PL$61/*All*/(PL$63/*arguments*/);
    ;});
  PL$64/*Some*/;
  PL$64/*Some*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$64/*Some*/["prototype"]["match"] = (function(PL$2/*actual*/, PL$14/*matches*/){
  var PL$62/*temp*/;
var PL$11/*i*/;
var PL$12/*n*/;
var PL$38/*key*/;

    ;
    PL$62/*temp*/;
    for(PL$11/*i*/ = 0PL$12/*n*/ = this["patterns"]["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
      PL$62/*temp*/ = {};
      try
{
        PL$15/*matchPattern*/(this["patterns"][PL$11/*i*/], PL$2/*actual*/, PL$62/*temp*/);
        for(PL$38/*key*/ in PL$62/*temp*/){
          if(! PL$36/*hasOwn*/["call"](PL$62/*temp*/, PL$38/*key*/)){
            continue;;
          };
          PL$14/*matches*/[PL$38/*key*/] = PL$62/*temp*/[PL$38/*key*/];};
        return;}catch(PL$16/*e*/){
        if(! (PL$16/*e*/ instanceof PL$17/*MatchError*/)){
          throw PL$16/*e*/;
        };};}};
    throw new PL$17/*MatchError*/("no alternates matched", PL$2/*actual*/, this);
    ;});
  PL$10/*match*/["some"] = (function(){
  var PL$63/*arguments*/ = arguments;

    ;
    return new PL$64/*Some*/(PL$63/*arguments*/);
    ;});
  PL$10/*match*/["MatchError"] = PL$17/*MatchError*/;
  PL$10/*match*/["pattern"] = PL$22/*Pattern*/["prototype"];
  return PL$10/*match*/;
  ;})();
;return PL$1;
});
})();