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
var PL$10/*global*/;try{PL$10/*global*/ = global;}catch(e){};
var PL$20/*Error*/;try{PL$20/*Error*/ = Error;}catch(e){};
var PL$21/*Object*/;try{PL$21/*Object*/ = Object;}catch(e){};
var PL$23/*Array*/;try{PL$23/*Array*/ = Array;}catch(e){};
var PL$26/*RegExp*/;try{PL$26/*RegExp*/ = RegExp;}catch(e){};
var PL$42/*NaN*/;try{PL$42/*NaN*/ = NaN;}catch(e){};
var PL$54/*Math*/;try{PL$54/*Math*/ = Math;}catch(e){};
var PL$58/*Infinity*/;try{PL$58/*Infinity*/ = Infinity;}catch(e){};
var PL$59/*isFinite*/;try{PL$59/*isFinite*/ = isFinite;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$36/*hasOwn*/;
var PL$47/*Any*/;
var PL$53/*floor*/;
var PL$55/*abs*/;
function PL$2/*match*/(PL$3/*actual*/, PL$4/*body*/, PL$5/*thisArg*/){
var PL$9/*cases*/;

  ;
  if((typeof PL$4/*body*/ === "undefined")){
    return {"when": (function(PL$6/*pattern*/, PL$7/*template*/, PL$5/*thisArg*/){
    
      ;
      return PL$8/*matchCases*/(PL$3/*actual*/, [{"pattern": PL$6/*pattern*/,
"template": PL$7/*template*/,
"thisArg": PL$5/*thisArg*/}]);
      ;})};
  };
  PL$9/*cases*/ = [];
  if((typeof PL$5/*thisArg*/ === "undefined")){
    PL$5/*thisArg*/ = PL$10/*global*/;
  };
  PL$4/*body*/["call"](PL$5/*thisArg*/, (function(PL$6/*pattern*/, PL$7/*template*/, PL$5/*thisArg*/){
  
    ;
    PL$9/*cases*/["push"]({"pattern": PL$6/*pattern*/,
"template": PL$7/*template*/,
"thisArg": PL$5/*thisArg*/});
    ;}));
  return PL$8/*matchCases*/(PL$3/*actual*/, PL$9/*cases*/);
  ;};
function PL$8/*matchCases*/(PL$3/*actual*/, PL$9/*cases*/){
var PL$11/*i*/;
var PL$12/*n*/;
var PL$13/*c*/;
var PL$14/*matches*/;

  ;
  for(PL$11/*i*/ = 0, PL$12/*n*/ = PL$9/*cases*/["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
    PL$13/*c*/ = PL$9/*cases*/[PL$11/*i*/];
    try
{
      PL$14/*matches*/ = {};
      PL$15/*matchPattern*/(PL$13/*c*/["pattern"], PL$3/*actual*/, PL$14/*matches*/);
      return (PL$13/*c*/["template"] ? PL$13/*c*/["template"]["call"](((typeof PL$13/*c*/["thisArg"] === "undefined") ? PL$10/*global*/ : PL$13/*c*/["thisArg"]), PL$14/*matches*/) : PL$14/*matches*/);}catch(PL$16/*e*/){
      if((PL$16/*e*/ instanceof PL$17/*MatchError*/)){
        continue;;
      };
      throw PL$16/*e*/;};}};
  throw new PL$17/*MatchError*/(PL$9/*cases*/, PL$3/*actual*/, "no more cases");
  ;};
function PL$17/*MatchError*/(PL$18/*expected*/, PL$3/*actual*/, PL$19/*message*/){

  ;
  PL$20/*Error*/["call"](this, PL$19/*message*/);
  if(! ("stack" in this)){
    this["stack"] = new PL$20/*Error*/()["stack"];
  };
  this["expected"] = PL$18/*expected*/;
  this["actual"] = PL$3/*actual*/;
  ;};
function PL$15/*matchPattern*/(PL$6/*pattern*/, PL$3/*actual*/, PL$14/*matches*/){

  ;
  if((PL$6/*pattern*/ instanceof PL$22/*Pattern*/)){
    PL$6/*pattern*/["match"](PL$3/*actual*/, PL$14/*matches*/);
  }else{
  if(PL$23/*Array*/["isArray"](PL$6/*pattern*/)){
    PL$24/*matchArray*/(PL$6/*pattern*/, PL$3/*actual*/, PL$14/*matches*/);
  }else{
  if((typeof PL$6/*pattern*/ === "object")){
    if(! PL$6/*pattern*/){
      PL$25/*matchNull*/(PL$3/*actual*/);
    }else{
    if((PL$6/*pattern*/ instanceof PL$26/*RegExp*/)){
      PL$27/*matchRegExp*/(PL$6/*pattern*/, PL$3/*actual*/);
    }else{
    PL$28/*matchObject*/(PL$6/*pattern*/, PL$3/*actual*/, PL$14/*matches*/);
    };
    };
  }else{
  if((typeof PL$6/*pattern*/ === "string")){
    PL$29/*matchString*/(PL$6/*pattern*/, PL$3/*actual*/);
  }else{
  if((typeof PL$6/*pattern*/ === "number")){
    if((PL$6/*pattern*/ !== PL$6/*pattern*/)){
      PL$30/*matchNaN*/(PL$3/*actual*/);
    }else{
    PL$31/*matchNumber*/(PL$6/*pattern*/, PL$3/*actual*/);
    };
  }else{
  if((typeof PL$6/*pattern*/ === "boolean")){
    PL$32/*matchBoolean*/(PL$6/*pattern*/, PL$3/*actual*/);
  }else{
  if((typeof PL$6/*pattern*/ === "function")){
    PL$33/*matchPredicate*/(PL$6/*pattern*/, PL$3/*actual*/);
  }else{
  if((typeof PL$6/*pattern*/ === "undefined")){
    PL$34/*matchUndefined*/(PL$3/*actual*/);
  };
  };
  };
  };
  };
  };
  };
  };
  ;};
function PL$25/*matchNull*/(PL$3/*actual*/, PL$14/*matches*/){

  ;
  if((PL$3/*actual*/ !== null)){
    throw new PL$17/*MatchError*/(null, PL$3/*actual*/, "not null");
  };
  ;};
function PL$24/*matchArray*/(PL$35/*arr*/, PL$3/*actual*/, PL$14/*matches*/){
var PL$12/*n*/;
var PL$11/*i*/;

  ;
  if((typeof PL$3/*actual*/ !== "object")){
    throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$3/*actual*/, "not an object");
  };
  if(! PL$3/*actual*/){
    throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$3/*actual*/, "null");
  };
  PL$12/*n*/ = PL$35/*arr*/["length"];
  for(PL$11/*i*/ = 0;(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
    if(! (PL$11/*i*/ in PL$3/*actual*/)){
      throw new PL$17/*MatchError*/(PL$35/*arr*/, PL$3/*actual*/, ("no element at index " + PL$11/*i*/));
    };
    PL$15/*matchPattern*/(PL$35/*arr*/[PL$11/*i*/], PL$3/*actual*/[PL$11/*i*/], PL$14/*matches*/);}};
  ;};
function PL$28/*matchObject*/(PL$37/*obj*/, PL$3/*actual*/, PL$14/*matches*/){
var PL$38/*key*/;

  ;
  if((typeof PL$3/*actual*/ !== "object")){
    throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$3/*actual*/, "not an object");
  };
  if(! PL$3/*actual*/){
    throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$3/*actual*/, "null");
  };
  for(PL$38/*key*/ in PL$37/*obj*/){
    if(! PL$36/*hasOwn*/["call"](PL$37/*obj*/, PL$38/*key*/)){
      continue;;
    };
    if(! (PL$38/*key*/ in PL$3/*actual*/)){
      throw new PL$17/*MatchError*/(PL$37/*obj*/, PL$3/*actual*/, ("no property " + PL$38/*key*/));
    };
    PL$15/*matchPattern*/(PL$37/*obj*/[PL$38/*key*/], PL$3/*actual*/[PL$38/*key*/], PL$14/*matches*/);};
  ;};
function PL$29/*matchString*/(PL$39/*str*/, PL$3/*actual*/){

  ;
  if((typeof PL$3/*actual*/ !== "string")){
    throw new PL$17/*MatchError*/(PL$39/*str*/, PL$3/*actual*/, "not a string");
  };
  if((PL$3/*actual*/ !== PL$39/*str*/)){
    throw new PL$17/*MatchError*/(PL$39/*str*/, PL$3/*actual*/, "wrong string value");
  };
  ;};
function PL$27/*matchRegExp*/(PL$40/*re*/, PL$3/*actual*/){

  ;
  if((typeof PL$3/*actual*/ !== "string")){
    throw new PL$17/*MatchError*/(PL$40/*re*/, PL$3/*actual*/, "not a string");
  };
  if(! PL$40/*re*/["test"](PL$3/*actual*/)){
    throw new PL$17/*MatchError*/(PL$40/*re*/, PL$3/*actual*/, "regexp pattern match failed");
  };
  ;};
function PL$31/*matchNumber*/(PL$41/*num*/, PL$3/*actual*/){

  ;
  if((typeof PL$3/*actual*/ !== "number")){
    throw new PL$17/*MatchError*/(PL$41/*num*/, PL$3/*actual*/, "not a number");
  };
  if((PL$3/*actual*/ !== PL$41/*num*/)){
    throw new PL$17/*MatchError*/(PL$41/*num*/, PL$3/*actual*/, "wrong number value");
  };
  ;};
function PL$30/*matchNaN*/(PL$3/*actual*/){

  ;
  if(((typeof PL$3/*actual*/ !== "number") || (PL$3/*actual*/ === PL$3/*actual*/))){
    throw new PL$17/*MatchError*/(PL$42/*NaN*/, PL$3/*actual*/, "not NaN");
  };
  ;};
function PL$33/*matchPredicate*/(PL$43/*pred*/, PL$3/*actual*/){

  ;
  if(! PL$43/*pred*/(PL$3/*actual*/)){
    throw new PL$17/*MatchError*/(PL$43/*pred*/, PL$3/*actual*/, "predicate failed");
  };
  ;};
function PL$32/*matchBoolean*/(PL$44/*bool*/, PL$3/*actual*/){

  ;
  if((typeof PL$3/*actual*/ !== "boolean")){
    throw new PL$17/*MatchError*/(PL$44/*bool*/, PL$3/*actual*/, "not a boolean");
  };
  if((PL$3/*actual*/ !== PL$44/*bool*/)){
    throw new PL$17/*MatchError*/(PL$44/*bool*/, PL$3/*actual*/, "wrong boolean value");
  };
  ;};
function PL$34/*matchUndefined*/(PL$3/*actual*/){

  ;
  if((typeof PL$3/*actual*/ !== "undefined")){
    throw new PL$17/*MatchError*/(undefined, PL$3/*actual*/, "not undefined");
  };
  ;};
function PL$22/*Pattern*/(){

  ;
  ;};
function PL$45/*Var*/(PL$46/*name*/, PL$6/*pattern*/){

  ;
  this["_name"] = PL$46/*name*/;
  this["_pattern"] = ((typeof PL$6/*pattern*/ === "undefined") ? PL$47/*Any*/ : PL$6/*pattern*/);
  ;};
function PL$56/*sign*/(PL$50/*x*/){

  ;
  return ((PL$50/*x*/ < 0) ? - 1 : 1);
  ;};
function PL$57/*toInteger*/(PL$50/*x*/){

  ;
  return ((PL$50/*x*/ !== PL$50/*x*/) ? 0 : ((((PL$50/*x*/ === 0) || (PL$50/*x*/ === - PL$58/*Infinity*/)) || (PL$50/*x*/ === PL$58/*Infinity*/)) ? PL$50/*x*/ : (PL$56/*sign*/(PL$50/*x*/) * PL$53/*floor*/(PL$55/*abs*/(PL$50/*x*/)))));
  ;};
function PL$60/*All*/(PL$61/*patterns*/){

  ;
  this["patterns"] = PL$61/*patterns*/;
  ;};
function PL$64/*Some*/(PL$61/*patterns*/){

  ;
  this["patterns"] = PL$61/*patterns*/;
  ;};

  ;
  PL$2/*match*/;
  PL$8/*matchCases*/;
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
  PL$45/*Var*/;
  PL$45/*Var*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$45/*Var*/["prototype"]["match"] = (function PL$48/*Var_match*/(PL$3/*actual*/, PL$14/*matches*/){
  
    ;
    PL$15/*matchPattern*/(this["_pattern"], PL$3/*actual*/, PL$14/*matches*/);
    PL$14/*matches*/[this["_name"]] = PL$3/*actual*/;
    ;});
  PL$47/*Any*/ = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$47/*Any*/["match"] = (function PL$49/*Any_match*/(PL$3/*actual*/){
  
    ;
    ;});
  PL$2/*match*/["var"] = (function(PL$46/*name*/, PL$6/*pattern*/){
  
    ;
    return new PL$45/*Var*/(PL$46/*name*/, PL$6/*pattern*/);
    ;});
  PL$2/*match*/["any"] = PL$47/*Any*/;
  PL$2/*match*/["object"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "object") && PL$50/*x*/);
    ;});
  PL$2/*match*/["array"] = PL$23/*Array*/["isArray"];
  PL$2/*match*/["primitive"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === null) || (typeof PL$50/*x*/ !== "object"));
    ;});
  PL$2/*match*/["number"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "number");
    ;});
  PL$2/*match*/["range"] = (function(PL$51/*start*/, PL$52/*end*/){
  
    ;
    return (function(PL$50/*x*/){
    
      ;
      return (((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ >= PL$51/*start*/)) && (PL$50/*x*/ < PL$52/*end*/));
      ;});
    ;});
  PL$53/*floor*/ = PL$54/*Math*/["floor"], PL$55/*abs*/ = PL$54/*Math*/["abs"];
  PL$56/*sign*/;
  PL$57/*toInteger*/;
  PL$2/*match*/["negative"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ < 0));
    ;});
  PL$2/*match*/["positive"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ > 0));
    ;});
  PL$2/*match*/["nonnegative"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ >= 0));
    ;});
  PL$2/*match*/["minusZero"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === 0) && ((1 / PL$50/*x*/) === - PL$58/*Infinity*/));
    ;});
  PL$2/*match*/["plusZero"] = (function(PL$50/*x*/){
  
    ;
    return ((PL$50/*x*/ === 0) && ((1 / PL$50/*x*/) === PL$58/*Infinity*/));
    ;});
  PL$2/*match*/["finite"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && PL$59/*isFinite*/(PL$50/*x*/));
    ;});
  PL$2/*match*/["infinite"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && ((PL$50/*x*/ === PL$58/*Infinity*/) || (PL$50/*x*/ === - PL$58/*Infinity*/)));
    ;});
  PL$2/*match*/["integer"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === PL$57/*toInteger*/(PL$50/*x*/)));
    ;});
  PL$2/*match*/["int32"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === (PL$50/*x*/ | 0)));
    ;});
  PL$2/*match*/["uint32"] = (function(PL$50/*x*/){
  
    ;
    return ((typeof PL$50/*x*/ === "number") && (PL$50/*x*/ === (PL$50/*x*/ >>> 0)));
    ;});
  PL$2/*match*/["string"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "string");
    ;});
  PL$2/*match*/["boolean"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "boolean");
    ;});
  PL$2/*match*/["null"] = (function(PL$50/*x*/){
  
    ;
    return (PL$50/*x*/ === null);
    ;});
  PL$2/*match*/["undefined"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "undefined");
    ;});
  PL$2/*match*/["function"] = (function(PL$50/*x*/){
  
    ;
    return (typeof PL$50/*x*/ === "function");
    ;});
  PL$60/*All*/;
  PL$60/*All*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$60/*All*/["prototype"]["match"] = (function(PL$3/*actual*/, PL$14/*matches*/){
  var PL$62/*temp*/;
var PL$11/*i*/;
var PL$12/*n*/;
var PL$38/*key*/;

    ;
    PL$62/*temp*/ = {};
    for(PL$11/*i*/ = 0, PL$12/*n*/ = this["patterns"]["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
      PL$15/*matchPattern*/(this["patterns"][PL$11/*i*/], PL$3/*actual*/, PL$62/*temp*/);}};
    for(PL$38/*key*/ in PL$62/*temp*/){
      if(! PL$36/*hasOwn*/["call"](PL$62/*temp*/, PL$38/*key*/)){
        continue;;
      };
      PL$14/*matches*/[PL$38/*key*/] = PL$62/*temp*/[PL$38/*key*/];};
    ;});
  PL$2/*match*/["all"] = (function(){
  var PL$63/*arguments*/ = arguments;

    ;
    return new PL$60/*All*/(PL$63/*arguments*/);
    ;});
  PL$64/*Some*/;
  PL$64/*Some*/["prototype"] = PL$21/*Object*/["create"](PL$22/*Pattern*/["prototype"]);
  PL$64/*Some*/["prototype"]["match"] = (function(PL$3/*actual*/, PL$14/*matches*/){
  var PL$62/*temp*/;
var PL$11/*i*/;
var PL$12/*n*/;
var PL$38/*key*/;

    ;
    PL$62/*temp*/;
    for(PL$11/*i*/ = 0, PL$12/*n*/ = this["patterns"]["length"];(PL$11/*i*/ < PL$12/*n*/);PL$11/*i*/++){{
      PL$62/*temp*/ = {};
      try
{
        PL$15/*matchPattern*/(this["patterns"][PL$11/*i*/], PL$3/*actual*/, PL$62/*temp*/);
        for(PL$38/*key*/ in PL$62/*temp*/){
          if(! PL$36/*hasOwn*/["call"](PL$62/*temp*/, PL$38/*key*/)){
            continue;;
          };
          PL$14/*matches*/[PL$38/*key*/] = PL$62/*temp*/[PL$38/*key*/];};
        return;}catch(PL$16/*e*/){
        if(! (PL$16/*e*/ instanceof PL$17/*MatchError*/)){
          throw PL$16/*e*/;
        };};}};
    throw new PL$17/*MatchError*/("no alternates matched", PL$3/*actual*/, this);
    ;});
  PL$2/*match*/["some"] = (function(){
  var PL$63/*arguments*/ = arguments;

    ;
    return new PL$64/*Some*/(PL$63/*arguments*/);
    ;});
  PL$2/*match*/["MatchError"] = PL$17/*MatchError*/;
  PL$2/*match*/["pattern"] = PL$22/*Pattern*/["prototype"];
  return PL$2/*match*/;
  ;})();
;return PL$1;
});
})();