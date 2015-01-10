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
  defineFun(["./classSystem/DynInstance", "./classSystem/Wrapper", "./classSystem/TrackedPromise", "./classSystem/provisional", "./classSystem/temporary", "./classSystem/promiseOf", "./classSystem/sync", "./classSystem/savable", "./classSystem/codeGeneration", "./Map"], function(PL$4/*DynInstance*/, PL$5/*Wrapper*/, PL$6/*TrackedPromise*/, PL$7/*provisional*/, PL$8/*temporary*/, PL$9/*promiseOf*/, PL$10/*sync*/, PL$11/*savable*/, PL$12/*codeGeneration*/, PL$13/*Map*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var Map = promiseland.Map;
if (promiseland._hasModule({ hashStr: "5b005e537834fd30c9652f83202ef9dd" })){ return promiseland._getModule("5b005e537834fd30c9652f83202ef9dd"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$32/*JSON*/;try{PL$32/*JSON*/ = JSON;}catch(e){};
var PL$57/*Object*/;try{PL$57/*Object*/ = Object;}catch(e){};
var PL$80/*Promise*/;try{PL$80/*Promise*/ = Promise;}catch(e){};
var PL$161/*promiseland*/;try{PL$161/*promiseland*/ = promiseland;}catch(e){};
var PL$198/*RegExp*/;try{PL$198/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$36/*classSystem*/;
var PL$139/*cs*/;
var PL$168/*registerSyncClass*/;
var PL$165/*destroySynced*/;
var PL$116/*syncFun*/;
var PL$120/*syncFunctionFun*/;
var PL$95/*internalObjects*/;
var PL$94/*getNewInternalId*/;
var PL$124/*runtimeError*/;
var PL$97/*presets*/;

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  PL$4/*DynInstance*/ = PL$3/*extra*/["getModule"](PL$4/*DynInstance*/);
  PL$5/*Wrapper*/ = PL$3/*extra*/["getModule"](PL$5/*Wrapper*/);
  PL$6/*TrackedPromise*/ = PL$3/*extra*/["getModule"](PL$6/*TrackedPromise*/);
  PL$7/*provisional*/ = PL$3/*extra*/["getModule"](PL$7/*provisional*/);
  PL$8/*temporary*/ = PL$3/*extra*/["getModule"](PL$8/*temporary*/);
  PL$9/*promiseOf*/ = PL$3/*extra*/["getModule"](PL$9/*promiseOf*/);
  PL$10/*sync*/ = PL$3/*extra*/["getModule"](PL$10/*sync*/);
  PL$11/*savable*/ = PL$3/*extra*/["getModule"](PL$11/*savable*/);
  PL$12/*codeGeneration*/ = PL$3/*extra*/["getModule"](PL$12/*codeGeneration*/);
  PL$13/*Map*/ = PL$3/*extra*/["getModule"](PL$13/*Map*/);
  var PL$14/*getModuleData*/;
  (function(){
  var PL$15 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$15.reject(e); }; }; };
var PL$18 = function(e){ PL$15.reject(e); };
PL$17(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$17(function(PL$19){PL$14/*getModuleData*/ = PL$19["getModuleData"];
    PL$15.resolve(); return;}), PL$18);
;})();
return PL$15;
})();
  var PL$20/*Tracker*/;
  (function(){
  var PL$21 = new __Promise();
var PL$22 = function(code){ return function(res){ try{code(res);}catch(e){ PL$21.reject(e); }; }; };
var PL$23 = function(e){ PL$21.reject(e); };
PL$22(function(){
  
    ;
    PL$3/*extra*/["TrackerPs"].then(PL$22(function(PL$24){PL$20/*Tracker*/ = PL$24["Tracker"];
    PL$21.resolve(); return;}), PL$23);
;})();
return PL$21;
})();
  var PL$25/*Chainable*/;
  (function(){
  var PL$26 = new __Promise();
var PL$27 = function(code){ return function(res){ try{code(res);}catch(e){ PL$26.reject(e); }; }; };
var PL$28 = function(e){ PL$26.reject(e); };
PL$27(function(){
  
    ;
    PL$3/*extra*/["ChainablePs"].then(PL$27(function(PL$29){PL$25/*Chainable*/ = PL$29["Chainable"];
    PL$26.resolve(); return;}), PL$28);
;})();
return PL$26;
})();
  var PL$30/*stringify*/ = (function(PL$31/*par*/){
  
    ;
    return PL$32/*JSON*/["stringify"](PL$31/*par*/);
    ;});
  var PL$33/*stringifyInstance*/ = (function(PL$34/*parType*/, PL$35/*parInstance*/){
  
    ;
    if(! PL$36/*classSystem*/["isUniqueClass"](PL$34/*parType*/)){
      throw PL$2/*errorMsg*/["onlyUniqueCanBeStringified"];
    };
    ;
    ;});
  var PL$37/*MAKRO_SELF*/ = 0;
  var PL$38/*MAKRO_PROPERTY*/ = 1;
  var PL$39/*MAKRO_PROPERTYSTRING*/ = 2;
  var PL$40/*MAKRO_PROPERTYVALUE*/ = 3;
  var PL$41/*MAKRO_VALUE*/ = 4;
  var PL$42/*MAKRO_LEFT*/ = 5;
  var PL$43/*MAKRO_OPERATOR*/ = 6;
  var PL$44/*MAKRO_RIGHT*/ = 7;
  var PL$45/*MAKRO_VALUEPROPERTY*/ = 8;
  var PL$46/*MAKRO_RESOLVEFUN*/ = 9;
  var PL$47/*MAKRO_REJECTFUN*/ = 10;
  var PL$48/*MAKRO_TYPEVALUE*/ = 11;
  var PL$49/*MAKRO_CONSTRUCTOR*/ = 12;
  var PL$50/*_actClass*/;
  var PL$51/*getClass*/ = (function(PL$52/*cf*/){
  
    ;
    PL$50/*_actClass*/ = undefined;
    PL$52/*cf*/();
    return PL$50/*_actClass*/;
    ;});
  var PL$53/*classHider*/ = (function(PL$54/*toHide*/){
  
    ;
    return (function(){
    
      ;
      PL$50/*_actClass*/ = PL$54/*toHide*/;
      ;});
    ;});
  var PL$55/*buildInTypesMap*/ = new PL$13/*Map*/();
  PL$55/*buildInTypesMap*/["set"]("var", PL$53/*classHider*/({"isVar": true,
"isReady": true,
"availableByName": true,
"builtin": true}));
  PL$55/*buildInTypesMap*/["set"]("statement", PL$53/*classHider*/({"isStatement": true,
"isReady": true,
"availableByName": false,
"builtin": true}));
  PL$55/*buildInTypesMap*/["set"]("int", PL$53/*classHider*/({"isInt": true,
"isReady": true,
"availableByName": true,
"builtin": true}));
  var PL$56/*hasOwnProperty*/ = PL$57/*Object*/["prototype"]["hasOwnProperty"];
  var PL$58/*privateClassSystem*/ = {"stringifyInstance": PL$33/*stringifyInstance*/,
"stringify": PL$30/*stringify*/,
"getMemberByName": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$59/*parMemberName*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    var PL$61/*mDef*/ = PL$60/*cDef*/["map"]["members"][PL$59/*parMemberName*/];
    if(PL$61/*mDef*/){
      return PL$35/*parInstance*/[PL$61/*mDef*/["index"]];
    };
    ;
    if((PL$60/*cDef*/["map"]["freePart"] !== undefined)){
      return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["freePart"]][PL$59/*parMemberName*/];
    };
    ;
    return;
    ;}),
"getTrackerFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["trackerIdx"]];
    ;}),
"setMemberByDefFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$62/*parMemberDefinition*/, PL$63/*parValueInstance*/){
  
    ;
    var PL$64/*realInstance*/ = PL$58/*privateClassSystem*/["getRealInstance"](PL$34/*parType*/, PL$35/*parInstance*/);
    PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["index"]] = PL$63/*parValueInstance*/;
    if(PL$36/*classSystem*/["isTrackedClass"](PL$62/*parMemberDefinition*/["type"])){
      var PL$65/*tracker*/ = PL$36/*classSystem*/["getTrackerFromInstance"](PL$34/*parType*/, PL$64/*realInstance*/);
      var PL$60/*cDef*/ = PL$51/*getClass*/(PL$62/*parMemberDefinition*/["type"]);
      var PL$66/*trackMemberIdx*/ = PL$60/*cDef*/["map"]["trackMemberIdx"];
      if(PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]){
        PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]();
      };
      ;
      PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]] = PL$63/*parValueInstance*/[PL$66/*trackMemberIdx*/](PL$65/*tracker*/);
    };
    ;
    ;}),
"getRealInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/){
  
    ;
    if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/)){
      return PL$35/*parInstance*/[0];
    };
    ;
    return PL$35/*parInstance*/;
    ;}),
"getNonTemporaryType": (function(PL$34/*parType*/){
  
    ;
    if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/)){
      return PL$36/*classSystem*/["getClassFromTemporaryTracked"](PL$34/*parType*/);
    };
    ;
    return PL$34/*parType*/;
    ;}),
"untrack": (function(PL$34/*parType*/, PL$35/*parInstance*/){
  
    ;
    if((PL$35/*parInstance*/ && PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/))){
      PL$35/*parInstance*/[1]();
    };
    ;
    ;}),
"hasOwnProperty": (function(PL$67/*obj*/, PL$68/*property*/){
  
    ;
    return PL$56/*hasOwnProperty*/["apply"](PL$67/*obj*/, [PL$68/*property*/]);
    ;}),
"resolvePromise": (function(PL$34/*parType*/, PL$69/*parPromise*/, PL$35/*parInstance*/){
  
    ;
    this["getRealInstance"](PL$34/*parType*/, PL$69/*parPromise*/)["resolve"](PL$35/*parInstance*/);
    return PL$69/*parPromise*/;
    ;}),
"rejectPromise": (function(PL$34/*parType*/, PL$69/*parPromise*/, PL$35/*parInstance*/){
  
    ;
    this["getRealInstance"](PL$34/*parType*/, PL$69/*parPromise*/)["reject"](PL$35/*parInstance*/);
    return PL$69/*parPromise*/;
    ;})};
  var PL$70/*pcs*/ = PL$58/*privateClassSystem*/;
  PL$36/*classSystem*/ = {"isSameType": (function(PL$71/*type1*/, PL$72/*type2*/){
  
    ;
    if((PL$71/*type1*/ === PL$72/*type2*/)){
      return true;
    };
    ;
    var PL$73/*cDef1*/ = PL$51/*getClass*/(PL$71/*type1*/);
    if(PL$73/*cDef1*/["provisional"]){
      if(! PL$73/*cDef1*/["type"]){
        return false;
      };
      ;
      PL$71/*type1*/ = PL$73/*cDef1*/["type"];
      PL$73/*cDef1*/ = PL$51/*getClass*/(PL$71/*type1*/);
    };
    ;
    var PL$74/*cDef2*/ = PL$51/*getClass*/(PL$72/*type2*/);
    if(PL$74/*cDef2*/["provisional"]){
      if(! PL$74/*cDef2*/["type"]){
        return false;
      };
      ;
      PL$72/*type2*/ = PL$74/*cDef2*/["type"];
      PL$74/*cDef2*/ = PL$51/*getClass*/(PL$72/*type2*/);
    };
    ;
    if((PL$71/*type1*/ === PL$72/*type2*/)){
      return true;
    };
    ;
    return false;
    ;}),
"createClass": (function(PL$75/*classLiteral*/, PL$76/*parDefaults*/){
  
    ;
    var PL$77/*self*/ = this;
    return PL$77/*self*/["_createClass"](PL$75/*classLiteral*/, PL$76/*parDefaults*/);
    ;}),
"_membersDefined": (function(PL$75/*classLiteral*/){
  
    ;
    var PL$77/*self*/ = this;
    var PL$78/*cnt*/ = 1;
    var PL$79/*retPs*/ = new PL$80/*Promise*/();
    var PL$81/*check*/ = (function(){
    
      ;
      if(PL$78/*cnt*/){
        return;
      };
      ;
      PL$79/*retPs*/["resolve"](PL$75/*classLiteral*/);
      ;});
    var PL$82/*addMember*/ = (function(PL$83/*m*/){
    
      ;
      ++PL$78/*cnt*/;
      PL$77/*self*/["definitionPromise"](PL$83/*m*/["type"])["then"]((function(PL$84/*definedType*/){
      
        ;
        PL$83/*m*/["type"] = PL$84/*definedType*/;
        --PL$78/*cnt*/;
        PL$81/*check*/();
        ;}));
      ;});
    if(PL$75/*classLiteral*/["members"]){
      var PL$85/*i*/ = 0;
      for(PL$85/*i*/;(PL$85/*i*/ < PL$75/*classLiteral*/["members"]["length"]);++PL$85/*i*/){{
        PL$82/*addMember*/(PL$75/*classLiteral*/["members"][PL$85/*i*/]);}};
      ;
    };
    ;
    --PL$78/*cnt*/;
    PL$81/*check*/();
    return PL$79/*retPs*/;
    ;}),
"_createClass": (function(PL$75/*classLiteral*/, PL$76/*parDefaults*/){
  
    ;
    var PL$86/*cAr*/ = [];
    var PL$77/*self*/ = this;
    var PL$87/*map*/ = {"members": {},
"membersByIndex": {},
"membersAr": [],
"extends": []};
    var PL$60/*cDef*/ = {"constructor": undefined,
"map": PL$87/*map*/,
"isReady": false,
"track": ((PL$75/*classLiteral*/["track"] || PL$75/*classLiteral*/["sync"]) ? true : false),
"sync": PL$75/*classLiteral*/["sync"],
"unique": PL$75/*classLiteral*/["unique"],
"savable": PL$75/*classLiteral*/["savable"],
"readyPromise": new PL$80/*Promise*/(),
"syncMembers": [],
"moduleName": PL$75/*classLiteral*/["moduleName"],
"className": PL$75/*classLiteral*/["className"],
"moduleHash": PL$75/*classLiteral*/["hashStr"]};
    var PL$52/*cf*/ = PL$53/*classHider*/(PL$60/*cDef*/);
    if(PL$60/*cDef*/["sync"]){
      if(PL$60/*cDef*/["sync"]["serve"]){
        PL$60/*cDef*/["syncServe"] = true;
      };
      ;
    };
    ;
    if(PL$60/*cDef*/["savable"]){
      PL$60/*cDef*/["unique"] = true;
    };
    ;
    PL$86/*cAr*/["push"](PL$52/*cf*/);
    var PL$10/*sync*/ = (PL$75/*classLiteral*/["sync"] ? true : false);
    var PL$88/*syncAll*/ = false;
    if(PL$10/*sync*/){
      if(PL$75/*classLiteral*/["sync"]["all"]){
        PL$88/*syncAll*/ = true;
      };
      ;
    };
    ;
    var PL$89/*syncCnt*/ = 0;
    var PL$90/*trackerIdx*/;
    var PL$91/*trackRootIdx*/;
    var PL$66/*trackMemberIdx*/;
    if(PL$60/*cDef*/["track"]){
      PL$87/*map*/["trackerIdx"] = PL$86/*cAr*/["length"];
      PL$86/*cAr*/["push"](undefined);
      PL$87/*map*/["trackRootIdx"] = PL$86/*cAr*/["length"];
      PL$86/*cAr*/["push"](undefined);
      PL$87/*map*/["trackMemberIdx"] = PL$86/*cAr*/["length"];
      PL$86/*cAr*/["push"](undefined);
      PL$90/*trackerIdx*/ = PL$87/*map*/["trackerIdx"];
      PL$91/*trackRootIdx*/ = PL$87/*map*/["trackRootIdx"];
      PL$66/*trackMemberIdx*/ = PL$87/*map*/["trackMemberIdx"];
    };
    ;
    if(PL$10/*sync*/){
      PL$87/*map*/["syncDataIdx"] = PL$86/*cAr*/["length"];
      PL$86/*cAr*/["push"]((function(){
      
        ;
        var PL$77/*self*/ = this;
        var PL$92/*internalId*/;
        var PL$93/*syncData*/ = {"getInternalId": (function(){
        
          ;
          if(PL$92/*internalId*/){
            return PL$92/*internalId*/;
          };
          ;
          PL$92/*internalId*/ = PL$94/*getNewInternalId*/();
          PL$95/*internalObjects*/[PL$92/*internalId*/] = PL$77/*self*/;
          PL$93/*syncData*/["internalId"] = PL$92/*internalId*/;
          return PL$92/*internalId*/;
          ;}),
"transports": []};
        this[PL$87/*map*/["syncDataIdx"]] = (function(){
        
          ;
          return PL$93/*syncData*/;
          ;});
        return PL$93/*syncData*/;
        ;}));
    };
    ;
    if(PL$75/*classLiteral*/["hasFreePart"]){
      var PL$96/*freepart*/ = {};
      PL$87/*map*/["freePart"] = PL$86/*cAr*/["length"];
      PL$86/*cAr*/["push"](PL$96/*freepart*/);
      PL$87/*map*/["getMemberCode"] = PL$97/*presets*/["getMemberCode"](PL$87/*map*/["freePart"]);
      PL$87/*map*/["setMemberCode"] = PL$97/*presets*/["setMemberCode"](PL$87/*map*/["freePart"]);
    };
    ;
    var PL$98/*helpAr*/ = [];
    var PL$99/*makeHelpAr*/ = (function(){
    
      ;
      return PL$98/*helpAr*/["slice"]();
      ;});
    PL$87/*map*/["connectIdx"] = PL$86/*cAr*/["length"];
    var PL$100/*conIdx*/ = PL$87/*map*/["connectIdx"];
    PL$86/*cAr*/["push"]((function(){
    var PL$105/*arguments*/ = arguments;

      ;
      var PL$98/*helpAr*/ = PL$99/*makeHelpAr*/();
      this[PL$100/*conIdx*/] = (function(PL$101/*idx*/, PL$102/*fun*/, PL$103/*base*/){
      
        ;
        var PL$104/*chain*/ = PL$98/*helpAr*/[PL$101/*idx*/];
        if(! PL$104/*chain*/){
          PL$104/*chain*/ = PL$25/*Chainable*/(this, PL$101/*idx*/);
          PL$98/*helpAr*/[PL$101/*idx*/] = PL$104/*chain*/;
        };
        ;
        return PL$104/*chain*/(PL$102/*fun*/, PL$103/*base*/);
        ;});
      return this[PL$100/*conIdx*/]["apply"](this, PL$105/*arguments*/);
      ;}));
    var PL$106/*constructorDef*/;
    var PL$107/*constructorFun*/;
    var PL$108/*destroyDef*/;
    var PL$109/*destroyFun*/;
    var PL$110/*untrackIdxAr*/ = [];
    var PL$82/*addMember*/ = (function(PL$83/*m*/){
    
      ;
      var PL$61/*mDef*/ = {"index": PL$86/*cAr*/["length"],
"name": PL$83/*m*/["name"]};
      if((PL$88/*syncAll*/ || PL$83/*m*/["sync"])){
        PL$61/*mDef*/["sync"] = true;
      };
      ;
      if(PL$83/*m*/["meta"]){
        PL$61/*mDef*/["meta"] = PL$83/*m*/["meta"];
      };
      ;
      PL$61/*mDef*/["type"] = PL$83/*m*/["type"];
      var PL$111/*mType*/ = PL$83/*m*/["type"];
      var PL$112/*isFunction*/ = PL$77/*self*/["isFunctionType"](PL$61/*mDef*/["type"]);
      var PL$113/*memberIdx*/ = PL$61/*mDef*/["index"];
      var PL$114/*isTrackedMember*/ = PL$77/*self*/["isTrackedClass"](PL$61/*mDef*/["type"]);
      if(PL$60/*cDef*/["unique"]){
        if((PL$83/*m*/["name"] == "id")){
          PL$60/*cDef*/["idIndex"] = PL$113/*memberIdx*/;
          PL$60/*cDef*/["idDef"] = PL$61/*mDef*/;
        };
        ;
      };
      ;
      if(PL$61/*mDef*/["sync"]){
        PL$61/*mDef*/["hasSetter"] = true;
        if(PL$114/*isTrackedMember*/){
          PL$61/*mDef*/["defaultSetter"] = (function(PL$115/*vAr*/){
          
            ;
            PL$116/*syncFun*/(this, PL$113/*memberIdx*/, PL$111/*mType*/, PL$115/*vAr*/[0]);
            return PL$115/*vAr*/;
            ;});
        }else{
        PL$61/*mDef*/["defaultSetter"] = (function(PL$117/*v*/){
        
          ;
          PL$116/*syncFun*/(this, PL$113/*memberIdx*/, PL$111/*mType*/, PL$117/*v*/);
          return PL$117/*v*/;
          ;});
        };
        ;
        PL$60/*cDef*/["syncMembers"]["push"](PL$61/*mDef*/);
      };
      ;
      if(PL$83/*m*/["noSave"]){
        PL$61/*mDef*/["noSave"] = true;
      };
      ;
      PL$87/*map*/["members"][PL$83/*m*/["name"]] = PL$61/*mDef*/;
      PL$87/*map*/["membersByIndex"][PL$61/*mDef*/["index"]] = PL$61/*mDef*/;
      PL$87/*map*/["membersAr"]["push"](PL$61/*mDef*/);
      var PL$118/*def*/ = (PL$76/*parDefaults*/ ? PL$76/*parDefaults*/[PL$83/*m*/["name"]] : undefined);
      PL$61/*mDef*/["defaultValue"] = PL$118/*def*/;
      if((PL$112/*isFunction*/ && PL$61/*mDef*/["sync"])){
        if(! ((PL$83/*m*/["name"] == "constructor") || (PL$83/*m*/["name"] == "destroy"))){
          var PL$119/*originalFun*/ = PL$118/*def*/;
          PL$118/*def*/ = (function(){
          var PL$105/*arguments*/ = arguments;

            ;
            PL$120/*syncFunctionFun*/(this, PL$113/*memberIdx*/, PL$111/*mType*/, PL$105/*arguments*/);
            return PL$119/*originalFun*/["apply"](this, PL$105/*arguments*/);
            ;});
        };
        ;
      };
      ;
      PL$86/*cAr*/["push"](PL$118/*def*/);
      if(PL$61/*mDef*/["hasSetter"]){
        PL$61/*mDef*/["setterIdx"] = PL$86/*cAr*/["length"];
        PL$86/*cAr*/["push"](PL$61/*mDef*/["defaultSetter"]);
      };
      ;
      if((PL$83/*m*/["name"] == "constructor")){
        PL$106/*constructorDef*/ = PL$61/*mDef*/;
        PL$107/*constructorFun*/ = PL$118/*def*/;
      };
      ;
      if((PL$83/*m*/["name"] == "destroy")){
        PL$108/*destroyDef*/ = PL$61/*mDef*/;
        PL$109/*destroyFun*/ = PL$118/*def*/;
      };
      ;
      PL$61/*mDef*/["getCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$61/*mDef*/["index"]) + "]")];
      if(PL$61/*mDef*/["hasSetter"]){
        PL$61/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$61/*mDef*/["setterIdx"]) + "](v); s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " v; return v; })(", PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];
      }else{
      PL$61/*mDef*/["setCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " ", PL$41/*MAKRO_VALUE*/];
      };
      ;
      if(PL$114/*isTrackedMember*/){
        var PL$121/*mCDef*/ = PL$51/*getClass*/(PL$61/*mDef*/["type"]);
        var PL$122/*memberTrackMemberIdx*/ = PL$121/*mCDef*/["map"]["trackMemberIdx"];
        var PL$123/*memberTrackRootIdx*/ = PL$121/*mCDef*/["map"]["trackRootIdx"];
        PL$61/*mDef*/["trackIndex"] = PL$86/*cAr*/["length"];
        PL$86/*cAr*/["push"](undefined);
        PL$110/*untrackIdxAr*/["push"](PL$61/*mDef*/["trackIndex"]);
        if(PL$60/*cDef*/["track"]){
          if(PL$61/*mDef*/["hasSetter"]){
            PL$61/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$123/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$61/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$122/*memberTrackMemberIdx*/) + "](s[") + PL$90/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];
            PL$61/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$61/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$122/*memberTrackMemberIdx*/) + "](s[") + PL$90/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];
          }else{
          PL$61/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$122/*memberTrackMemberIdx*/) + "](s[") + PL$90/*trackerIdx*/) + "]); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];
          PL$61/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$122/*memberTrackMemberIdx*/) + "](s[") + PL$90/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];
          };
          ;
        }else{
        PL$61/*mDef*/["setCode"] = [PL$124/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];
        PL$61/*mDef*/["setCodeFromTemporary"] = [PL$124/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];
        };
        ;
      };
      ;
      PL$61/*mDef*/["connectFunCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$87/*map*/["connectIdx"]) + "](") + PL$61/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, ")"];
      PL$61/*mDef*/["connectSlotCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$87/*map*/["connectIdx"]) + "](") + PL$61/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, "[", PL$45/*MAKRO_VALUEPROPERTY*/, "], ", PL$41/*MAKRO_VALUE*/, ")"];
      ;});
    var PL$125/*createMembersPs*/ = (function(){
    
      ;
      var PL$126/*donePs*/ = new PL$80/*Promise*/();
      PL$77/*self*/["_membersDefined"](PL$75/*classLiteral*/)["then"]((function(){
      
        ;
        var PL$85/*i*/;
        var PL$127/*passedConstructorType*/;
        if(PL$75/*classLiteral*/["members"]){
          for(PL$85/*i*/ = 0;(PL$85/*i*/ < PL$75/*classLiteral*/["members"]["length"]);++PL$85/*i*/){{
            var PL$83/*m*/ = PL$75/*classLiteral*/["members"][PL$85/*i*/];
            if((PL$83/*m*/["name"] == "constructor")){
              PL$127/*passedConstructorType*/ = PL$83/*m*/["type"];
              break;;
            };
            ;}};
          ;
        };
        ;
        if(PL$127/*passedConstructorType*/){
          var PL$128/*conDef*/ = PL$51/*getClass*/(PL$127/*passedConstructorType*/);
          PL$60/*cDef*/["constructorType"] = PL$77/*self*/["createFunctionType"]({"return": PL$52/*cf*/,
"arguments": PL$128/*conDef*/["arguments"]});
        }else{
        PL$60/*cDef*/["constructorType"] = PL$77/*self*/["createFunctionType"]({"return": PL$52/*cf*/});
        };
        ;
        PL$60/*cDef*/["constructorTypeIntern"] = PL$60/*cDef*/["constructorType"];
        if(PL$60/*cDef*/["unique"]){
          PL$75/*classLiteral*/["members"] = (PL$75/*classLiteral*/["members"] || []);
          PL$60/*cDef*/["idType"] = PL$77/*self*/["getFunctionArgumentType"](PL$60/*cDef*/["constructorTypeIntern"], 0);
          PL$75/*classLiteral*/["members"]["unshift"]({"name": "id",
"type": PL$60/*cDef*/["idType"]});
          if(PL$60/*cDef*/["savable"]){
            PL$75/*classLiteral*/["members"]["unshift"]({"name": "save",
"type": PL$36/*classSystem*/["getBuiltinType"]("var"),
"noSave": true});
            PL$76/*parDefaults*/["save"] = (function(){
            var PL$129 = new __Promise();
var PL$130 = function(code){ return function(res){ try{code(res);}catch(e){ PL$129.reject(e); }; }; };
var PL$131 = function(e){ PL$129.reject(e); };
var PL$132/*this*/ = this;
PL$130(function(){
            
              ;
              PL$70/*pcs*/["saveInstance"](PL$52/*cf*/, PL$132/*this*/).then(PL$130(function(PL$133){PL$133;
              PL$129.resolve(); return;}), PL$131);
;})();
return PL$129;
});
            PL$75/*classLiteral*/["members"]["unshift"]({"name": "load",
"type": PL$36/*classSystem*/["getBuiltinType"]("var"),
"noSave": true});
            PL$76/*parDefaults*/["load"] = (function(){
            var PL$134 = new __Promise();
var PL$135 = function(code){ return function(res){ try{code(res);}catch(e){ PL$134.reject(e); }; }; };
var PL$136 = function(e){ PL$134.reject(e); };
var PL$137/*this*/ = this;
PL$135(function(){
            
              ;
              PL$70/*pcs*/["loadInstance"](PL$52/*cf*/, PL$137/*this*/).then(PL$135(function(PL$138){PL$138;
              PL$134.resolve(); return;}), PL$136);
;})();
return PL$134;
});
            PL$128/*conDef*/ = PL$51/*getClass*/(PL$60/*cDef*/["constructorTypeIntern"]);
            PL$60/*cDef*/["constructorReturnType"] = PL$77/*self*/["_createPromiseOfClass"](PL$70/*pcs*/["getNonTemporaryType"](PL$128/*conDef*/["return"]));
            PL$60/*cDef*/["constructorType"] = PL$77/*self*/["createFunctionType"]({"return": PL$60/*cDef*/["constructorReturnType"],
"arguments": PL$128/*conDef*/["arguments"]});
            PL$60/*cDef*/["constructorReturnType"] = PL$139/*cs*/["getFunctionReturnType"](PL$60/*cDef*/["constructorType"]);
          };
          ;
        };
        ;
        if(PL$75/*classLiteral*/["members"]){
          PL$85/*i*/ = 0;
          for(PL$85/*i*/;(PL$85/*i*/ < PL$75/*classLiteral*/["members"]["length"]);++PL$85/*i*/){{
            PL$82/*addMember*/(PL$75/*classLiteral*/["members"][PL$85/*i*/]);}};
          ;
        };
        ;
        PL$126/*donePs*/["resolve"]();
        ;}));
      return PL$126/*donePs*/;
      ;});
    var PL$140/*memberPs*/ = PL$125/*createMembersPs*/();
    var PL$85/*i*/;
    var PL$141/*finalPs*/ = new PL$80/*Promise*/();
    PL$140/*memberPs*/["then"]((function(){
    
      ;
      var PL$85/*i*/;
      var PL$142/*simpleConstructor*/ = true;
      var PL$143/*hasDestructor*/ = false;
      if((PL$60/*cDef*/["track"] || PL$60/*cDef*/["unique"])){
        PL$142/*simpleConstructor*/ = false;
      };
      ;
      if((PL$60/*cDef*/["track"] || PL$10/*sync*/)){
        PL$143/*hasDestructor*/ = true;
      };
      ;
      for(PL$85/*i*/ = 0;(PL$85/*i*/ < PL$86/*cAr*/["length"]);++PL$85/*i*/){{
        PL$98/*helpAr*/["push"](undefined);}};
      ;
      PL$60/*cDef*/["constructorArguments"] = [];
      if(PL$142/*simpleConstructor*/){
        if(PL$75/*classLiteral*/["hasFreePart"]){
          var PL$144/*proto*/ = {};
          if(PL$76/*parDefaults*/){
            for(PL$85/*i*/ in PL$76/*parDefaults*/){
              if(! PL$87/*map*/["members"][PL$85/*i*/]){
                PL$144/*proto*/[PL$85/*i*/] = PL$76/*parDefaults*/[PL$85/*i*/];
              };
              ;};
            ;
          };
          ;
          var PL$145/*freeFun*/ = (function(){
          
            ;
            ;});
          PL$145/*freeFun*/["prototype"] = PL$144/*proto*/;
          var PL$146/*f*/ = PL$87/*map*/["freePart"];
          PL$60/*cDef*/["constructor"] = (function(){
          
            ;
            var PL$147/*r*/ = PL$86/*cAr*/["slice"]();
            PL$147/*r*/[PL$146/*f*/] = new PL$145/*freeFun*/();
            return PL$147/*r*/;
            ;});
        }else{
        PL$60/*cDef*/["constructor"] = (function(){
        
          ;
          return PL$86/*cAr*/["slice"]();
          ;});
        };
        ;
        if(PL$106/*constructorDef*/){
          var PL$148/*realConstructor*/ = PL$60/*cDef*/["constructor"];
          PL$60/*cDef*/["constructor"] = (function(){
          var PL$105/*arguments*/ = arguments;

            ;
            var PL$149/*instance*/ = PL$148/*realConstructor*/();
            PL$107/*constructorFun*/["apply"](PL$149/*instance*/, PL$105/*arguments*/);
            return PL$149/*instance*/;
            ;});
        };
        ;
      }else{
      var PL$150/*constructorStr*/ = "";
      var PL$151/*importObj*/ = {};
      var PL$152/*importVar*/ = (function(PL$117/*v*/, PL$153/*name*/){
      
        ;
        PL$151/*importObj*/[PL$153/*name*/] = PL$117/*v*/;
        ;});
      PL$150/*constructorStr*/ += "var r;";
      if(PL$60/*cDef*/["unique"]){
        var PL$154/*uniqueMap*/ = new PL$13/*Map*/();
        var PL$155/*hasVarId*/ = PL$77/*self*/["isVar"](PL$60/*cDef*/["idType"]);
        var PL$156/*idType*/ = PL$60/*cDef*/["idType"];
        PL$152/*importVar*/(PL$156/*idType*/, "idType");
        var PL$157/*idDef*/ = PL$60/*cDef*/["idDef"];
        if(PL$60/*cDef*/["savable"]){
          PL$152/*importVar*/(PL$139/*cs*/, "cs");
          PL$152/*importVar*/(PL$60/*cDef*/, "cDef");
          PL$152/*importVar*/(PL$139/*cs*/["getTypeConstructor"](PL$70/*pcs*/["getNonTemporaryType"](PL$60/*cDef*/["constructorReturnType"])), "returnPromiseConstructor");
          PL$150/*constructorStr*/ += "var resPs = new returnPromiseConstructor;";
        };
        ;
        if(PL$155/*hasVarId*/){
          PL$152/*importVar*/(PL$30/*stringify*/, "stringify");
          PL$150/*constructorStr*/ += "var key = stringify(arguments[0]);";
        }else{
        PL$152/*importVar*/(PL$30/*stringify*/, "stringifyInstance");
        PL$150/*constructorStr*/ += "var key = stringifyInstance(idType, arguments[0]);";
        };
        ;
        PL$152/*importVar*/(PL$154/*uniqueMap*/, "uniqueMap");
        PL$152/*importVar*/(PL$58/*privateClassSystem*/, "privateClassSystem");
        PL$150/*constructorStr*/ += "r = uniqueMap.get(key);";
        PL$150/*constructorStr*/ += "if (r){";
        PL$150/*constructorStr*/ += "if (arguments[0]){";
        PL$150/*constructorStr*/ += "privateClassSystem.untrack(idType, arguments[0]);";
        PL$150/*constructorStr*/ += "};";
        PL$150/*constructorStr*/ += "}else{";
      };
      ;
      PL$152/*importVar*/(PL$86/*cAr*/, "cAr");
      PL$150/*constructorStr*/ += "r = cAr.slice();";
      if(PL$75/*classLiteral*/["hasFreePart"]){
        PL$144/*proto*/ = {};
        if(PL$76/*parDefaults*/){
          for(PL$85/*i*/ in PL$76/*parDefaults*/){
            if(! PL$87/*map*/["members"][PL$85/*i*/]){
              PL$144/*proto*/[PL$85/*i*/] = PL$76/*parDefaults*/[PL$85/*i*/];
            };
            ;};
          ;
        };
        ;
        PL$145/*freeFun*/ = (function(){
        
          ;
          ;});
        PL$145/*freeFun*/["prototype"] = PL$144/*proto*/;
        var PL$158/*freeIndex*/ = PL$87/*map*/["freePart"];
        PL$152/*importVar*/(PL$145/*freeFun*/, "freeFun");
        PL$152/*importVar*/(PL$158/*freeIndex*/, "freeIndex");
        PL$150/*constructorStr*/ += "r[freeIndex] = new freeFun();";
      };
      ;
      if(PL$106/*constructorDef*/){
        PL$152/*importVar*/(PL$107/*constructorFun*/, "constructorFun");
        PL$150/*constructorStr*/ += "constructorFun.apply(r, arguments);";
      };
      ;
      if(PL$60/*cDef*/["unique"]){
        PL$152/*importVar*/(PL$52/*cf*/, "cf");
        PL$152/*importVar*/(PL$157/*idDef*/, "idDef");
        PL$150/*constructorStr*/ += "privateClassSystem.setMemberByDefFromInstance(cf, r, idDef, arguments[0]);";
        PL$150/*constructorStr*/ += "uniqueMap.set(key, r);";
        PL$150/*constructorStr*/ += "r.map = uniqueMap;";
        PL$150/*constructorStr*/ += "r.key = key;";
        if(PL$60/*cDef*/["savable"]){
          PL$150/*constructorStr*/ += "var doLoad = true;";
        };
        ;
        PL$150/*constructorStr*/ += "};";
      };
      ;
      PL$150/*constructorStr*/ += "var realInstance = r;";
      if(PL$60/*cDef*/["track"]){
        PL$152/*importVar*/(PL$20/*Tracker*/, "Tracker");
        PL$152/*importVar*/((function(){
        var PL$105/*arguments*/ = arguments;

          ;
          PL$109/*destroyFun*/["apply"](this, PL$105/*arguments*/);
          ;}), "destroyFun");
        PL$152/*importVar*/(PL$90/*trackerIdx*/, "trackerIdx");
        PL$152/*importVar*/(PL$91/*trackRootIdx*/, "trackRootIdx");
        PL$152/*importVar*/(PL$66/*trackMemberIdx*/, "trackMemberIdx");
        PL$150/*constructorStr*/ += "var t = Tracker(function(){";
        PL$150/*constructorStr*/ += "destroyFun.apply(realInstance);";
        PL$150/*constructorStr*/ += "});";
        PL$150/*constructorStr*/ += "realInstance[trackerIdx] = t[0];";
        PL$150/*constructorStr*/ += "realInstance[trackRootIdx] = t[1];";
        PL$150/*constructorStr*/ += "realInstance[trackMemberIdx] = t[2];";
        PL$150/*constructorStr*/ += "r = [realInstance, realInstance[trackRootIdx]()];";
      };
      ;
      PL$150/*constructorStr*/ += "var nonPromiseResult = r;";
      if(PL$60/*cDef*/["savable"]){
        PL$152/*importVar*/(PL$70/*pcs*/, "pcs");
        PL$150/*constructorStr*/ += "if (doLoad){";
        PL$150/*constructorStr*/ += "pcs.loadInstance(cf, realInstance).then(function(){";
        PL$150/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
        PL$150/*constructorStr*/ += "}, function(e){ pcs.rejectPromise(cDef.constructorReturnType, resPs, e); });";
        PL$150/*constructorStr*/ += "}else{";
        PL$150/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
        PL$150/*constructorStr*/ += "};";
        PL$150/*constructorStr*/ += "r = resPs;";
      };
      ;
      PL$150/*constructorStr*/ += "return r;";
      var PL$159/*constructorObj*/ = {};
      PL$152/*importVar*/(PL$159/*constructorObj*/, "constructorObj");
      var PL$160/*wrapStr*/ = (("constructorObj.fun = function(){" + PL$150/*constructorStr*/) + "};");
      PL$161/*promiseland*/["javascriptEval"](PL$160/*wrapStr*/, PL$151/*importObj*/);
      PL$60/*cDef*/["constructor"] = PL$159/*constructorObj*/["fun"];
      };
      ;
      if(PL$143/*hasDestructor*/){
        var PL$162/*destructorStr*/ = "";
        var PL$163/*destructorImportObj*/ = {};
        var PL$164/*destructorImportVar*/ = (function(PL$117/*v*/, PL$153/*name*/){
        
          ;
          PL$163/*destructorImportObj*/[PL$153/*name*/] = PL$117/*v*/;
          ;});
        if(PL$10/*sync*/){
          PL$164/*destructorImportVar*/(PL$165/*destroySynced*/, "destroySynced");
          PL$164/*destructorImportVar*/(PL$36/*classSystem*/, "classSystem");
          PL$162/*destructorStr*/ += "var syncData = classSystem.getSyncData(this);";
          PL$162/*destructorStr*/ += "destroySynced(syncData);";
        };
        ;
        if(PL$60/*cDef*/["track"]){
          var PL$166/*_destroyFun*/;
          if(PL$110/*untrackIdxAr*/["length"]){
            PL$164/*destructorImportVar*/(PL$110/*untrackIdxAr*/, "untrackIdxAr");
            PL$162/*destructorStr*/ += "var i;";
            PL$162/*destructorStr*/ += "for (i = 0; i < untrackIdxAr.length; ++i){";
            PL$162/*destructorStr*/ += "var curIdx = untrackIdxAr[i];";
            PL$162/*destructorStr*/ += "var tFun = this[curIdx];";
            PL$162/*destructorStr*/ += "this[curIdx] = undefined;";
            PL$162/*destructorStr*/ += "if (tFun){";
            PL$162/*destructorStr*/ += "tFun();";
            PL$162/*destructorStr*/ += "};";
            PL$162/*destructorStr*/ += "};";
          };
          ;
          if(PL$60/*cDef*/["unique"]){
            PL$162/*destructorStr*/ += "this.map.delete(this.key);";
          };
          ;
        };
        ;
        if(PL$108/*destroyDef*/){
          PL$164/*destructorImportVar*/(PL$109/*destroyFun*/, "_destroyFun");
          PL$162/*destructorStr*/ += "_destroyFun.apply(this);";
        };
        ;
        PL$162/*destructorStr*/ += "this.splice(0,this.length);";
        var PL$167/*destructorObj*/ = {};
        PL$164/*destructorImportVar*/(PL$167/*destructorObj*/, "destructorObj");
        PL$160/*wrapStr*/ = (("destructorObj.fun = function(){" + PL$162/*destructorStr*/) + "};");
        PL$161/*promiseland*/["javascriptEval"](PL$160/*wrapStr*/, PL$163/*destructorImportObj*/);
        PL$109/*destroyFun*/ = PL$167/*destructorObj*/["fun"];
      };
      ;
      PL$141/*finalPs*/["resolve"]();
      ;}));
    PL$141/*finalPs*/["then"]((function(){
    
      ;
      PL$60/*cDef*/["isReady"] = true;
      if(PL$60/*cDef*/["savable"]){
        PL$58/*privateClassSystem*/["registerSavableClass"](PL$52/*cf*/);
      };
      ;
      PL$60/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);
      ;}));
    if(PL$10/*sync*/){
      if(PL$75/*classLiteral*/["name"]){
        PL$60/*cDef*/["syncId"] = {"hash": PL$75/*classLiteral*/["hashStr"],
"name": PL$75/*classLiteral*/["name"]};
        PL$168/*registerSyncClass*/(PL$75/*classLiteral*/["hashStr"], PL$75/*classLiteral*/["name"], PL$52/*cf*/);
      };
      ;
    };
    ;
    return PL$52/*cf*/;
    ;}),
"getConstructorReturnType": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["constructorReturnType"]){
      return PL$60/*cDef*/["constructorReturnType"];
    };
    ;
    return PL$139/*cs*/["getFunctionReturnType"](PL$60/*cDef*/["constructorType"]);
    ;}),
"getTypeFromInstance": (function(PL$35/*parInstance*/){
  
    ;
    if((typeof PL$35/*parInstance*/[0] === "function")){
      return PL$35/*parInstance*/[0];
    };
    ;
    if((PL$35/*parInstance*/["length"] === 2)){
      return this["_createTemporaryTrackedClass"](PL$35/*parInstance*/[0][0]);
    };
    ;
    throw PL$2/*errorMsg*/["unknownInstanceType"];
    ;}),
"isFunctionType": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["isFunction"]){
      return true;
    };
    ;
    return false;
    ;}),
"isTrackedClass": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["track"]){
      return true;
    };
    ;
    return false;
    ;}),
"isUniqueClass": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["unique"]){
      return true;
    };
    ;
    return false;
    ;}),
"createFunctionType": (function(PL$31/*par*/){
  var PL$170/*makeTemporaries*/;

    ;
    var PL$77/*self*/ = this;
    var PL$60/*cDef*/ = {"isFunction": true,
"return": (PL$31/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$31/*par*/["arguments"] || []),
"isReady": false};
    var PL$169/*checkReady*/ = (function(){
    
      ;
      PL$170/*makeTemporaries*/();
      ;});
    PL$170/*makeTemporaries*/ = (function(){
    
      ;
      PL$60/*cDef*/["return"] = PL$77/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["return"]);
      var PL$85/*i*/ = 0;
      for(PL$85/*i*/ = 0;(PL$85/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$85/*i*/){{
        PL$60/*cDef*/["arguments"][PL$85/*i*/] = PL$77/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["arguments"][PL$85/*i*/]);}};
      ;
      ;});
    var PL$171/*isReady*/ = true;
    if(PL$77/*self*/["isProvisional"](PL$60/*cDef*/["return"])){
      PL$171/*isReady*/ = false;
      PL$77/*self*/["definitionPromise"](PL$60/*cDef*/["return"])["then"]((function(PL$34/*parType*/){
      
        ;
        PL$60/*cDef*/["return"] = PL$34/*parType*/;
        PL$169/*checkReady*/();
        ;}));
    };
    ;
    var PL$172/*resolveTypeFun*/ = (function(PL$173/*parI*/){
    
      ;
      return (function(PL$34/*parType*/){
      
        ;
        PL$60/*cDef*/["arguments"][PL$173/*parI*/] = PL$34/*parType*/;
        PL$169/*checkReady*/();
        ;});
      ;});
    var PL$85/*i*/ = 0;
    for(PL$85/*i*/ = 0;(PL$85/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$85/*i*/){{
      if(PL$77/*self*/["isProvisional"](PL$60/*cDef*/["arguments"][PL$85/*i*/])){
        PL$171/*isReady*/ = false;
        PL$77/*self*/["definitionPromise"](PL$60/*cDef*/["arguments"][PL$85/*i*/])["then"](PL$172/*resolveTypeFun*/(PL$85/*i*/));
      };
      ;}};
    ;
    var PL$52/*cf*/ = PL$53/*classHider*/(PL$60/*cDef*/);
    if(! PL$171/*isReady*/){
      PL$60/*cDef*/["readyPromise"] = new PL$80/*Promise*/();
      PL$169/*checkReady*/ = (function(){
      
        ;
        if(PL$77/*self*/["isProvisional"](PL$60/*cDef*/["return"])){
          return;
        };
        ;
        var PL$85/*i*/ = 0;
        for(PL$85/*i*/ = 0;(PL$85/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$85/*i*/){{
          if(PL$77/*self*/["isProvisional"](PL$60/*cDef*/["arguments"][PL$85/*i*/])){
            return;
          };
          ;}};
        ;
        PL$170/*makeTemporaries*/();
        PL$60/*cDef*/["isReady"] = true;
        PL$60/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);
        ;});
      PL$169/*checkReady*/();
    }else{
    PL$169/*checkReady*/();
    PL$60/*cDef*/["isReady"] = true;
    };
    ;
    return PL$52/*cf*/;
    ;}),
"isVar": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["isVar"]){
      return true;
    };
    ;
    return false;
    ;}),
"isStatementType": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["isStatement"]){
      return true;
    };
    ;
    return false;
    ;}),
"isAvailableByName": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["availableByName"]){
      return true;
    };
    ;
    return false;
    ;}),
"getFunctionReturnType": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    return PL$60/*cDef*/["return"];
    ;}),
"getFunctionArgumentCount": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if(PL$60/*cDef*/["arguments"]){
      return PL$60/*cDef*/["arguments"]["length"];
    };
    ;
    return 0;
    ;}),
"getFunctionArgumentType": (function(PL$34/*parType*/, PL$174/*parIndex*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    if((PL$60/*cDef*/["arguments"] && PL$60/*cDef*/["arguments"][PL$174/*parIndex*/])){
      return PL$60/*cDef*/["arguments"][PL$174/*parIndex*/];
    };
    return this["getBuiltinType"]("var");
    ;}),
"getConstructorArgumentType": (function(PL$34/*parType*/, PL$174/*parIndex*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    var PL$175/*t*/;
    if(PL$60/*cDef*/["constructorArguments"]){
      PL$175/*t*/ = PL$60/*cDef*/["constructorArguments"][PL$174/*parIndex*/];
    };
    ;
    if(PL$175/*t*/){
      return PL$175/*t*/;
    };
    ;
    return this["getBuiltinType"]("var");
    ;}),
"getTypeConstructor": (function(PL$34/*parType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    return PL$60/*cDef*/["constructor"];
    ;}),
"getBuiltinType": (function(PL$176/*parName*/){
  
    ;
    return PL$55/*buildInTypesMap*/["get"](PL$176/*parName*/);
    ;}),
"getBuiltinTypesMap": (function(PL$176/*parName*/){
  
    ;
    return PL$55/*buildInTypesMap*/["clone"]();
    ;}),
"getPropertyAlias": (function(PL$31/*par*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
    if(PL$60/*cDef*/["isVar"]){
      return PL$31/*par*/["property"];
    };
    ;
    var PL$87/*map*/ = PL$60/*cDef*/["map"];
    if(((PL$87/*map*/ && PL$87/*map*/["members"]) && PL$87/*map*/["members"][PL$31/*par*/["property"]])){
      return PL$87/*map*/["members"][PL$31/*par*/["property"]]["index"];
    };
    ;
    return PL$31/*par*/["property"];
    ;}),
"getPropertyType": (function(PL$31/*par*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
    if(PL$60/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    var PL$87/*map*/ = PL$60/*cDef*/["map"];
    if(PL$87/*map*/["members"][PL$31/*par*/["property"]]){
      if(PL$31/*par*/["original"]){
        return (PL$87/*map*/["members"][PL$31/*par*/["property"]]["originalType"] || PL$87/*map*/["members"][PL$31/*par*/["property"]]["type"]);
      }else{
      return PL$87/*map*/["members"][PL$31/*par*/["property"]]["type"];
      };
      ;
    };
    ;
    return this["getBuiltinType"]("var");
    ;}),
"getConstructorType": (function(PL$31/*par*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
    if(PL$60/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    if(PL$60/*cDef*/["constructorType"]){
      return PL$60/*cDef*/["constructorType"];
    };
    ;
    throw PL$2/*errorMsg*/["noConstructorAvailable"];
    ;}),
"setMemberByDef": (function(PL$177/*parDynInstance*/, PL$62/*parMemberDefinition*/, PL$178/*parValueDynInstance*/){
  
    ;
    var PL$64/*realInstance*/ = PL$177/*parDynInstance*/["instance"];
    PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["index"]] = PL$178/*parValueDynInstance*/["getInstanceAsType"](PL$62/*parMemberDefinition*/["type"]);
    if(this["isTrackedClass"](PL$62/*parMemberDefinition*/["type"])){
      var PL$65/*tracker*/ = this["getTrackerFromDynInstance"](PL$177/*parDynInstance*/);
      var PL$60/*cDef*/ = PL$51/*getClass*/(PL$178/*parValueDynInstance*/["type"]);
      var PL$66/*trackMemberIdx*/ = PL$60/*cDef*/["map"]["trackMemberIdx"];
      if(PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]){
        PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]();
      };
      ;
      PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]] = PL$178/*parValueDynInstance*/["instance"][PL$66/*trackMemberIdx*/](PL$65/*tracker*/);
    };
    ;
    ;}),
"getTrack": (function(PL$35/*parInstance*/){
  
    ;
    if(! PL$35/*parInstance*/){
      return;
    };
    ;
    var PL$179/*type*/ = PL$35/*parInstance*/[0];
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$179/*type*/);
    return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["trackRootIdx"]]();
    ;}),
"canSet": (function(PL$180/*parTargetType*/, PL$181/*parSourceType*/){
  
    ;
    if(((PL$180/*parTargetType*/ === undefined) && (PL$181/*parSourceType*/ === undefined))){
      return true;
    };
    ;
    if(((PL$180/*parTargetType*/ === undefined) || (PL$181/*parSourceType*/ === undefined))){
      return false;
    };
    ;
    if((PL$180/*parTargetType*/ === PL$181/*parSourceType*/)){
      return true;
    };
    ;
    if(this["isTemporaryTrackedClass"](PL$181/*parSourceType*/)){
      if(this["isTemporaryTrackedClass"](PL$180/*parTargetType*/)){
        return this["canSet"](this["getClassFromTemporaryTracked"](PL$180/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$181/*parSourceType*/));
      };
      ;
      return false;
    };
    ;
    if(this["isTemporaryTrackedClass"](PL$180/*parTargetType*/)){
      return this["canSet"](this["getClassFromTemporaryTracked"](PL$180/*parTargetType*/), PL$181/*parSourceType*/);
    };
    ;
    if((((PL$180/*parTargetType*/["isFunction"] && PL$181/*parSourceType*/["isFunction"]) && this["canSet"](PL$180/*parTargetType*/["returnType"], PL$181/*parSourceType*/["returnType"])) && (PL$180/*parTargetType*/["parameters"]["length"] == PL$181/*parSourceType*/["parameters"]["length"]))){
      var PL$182/*allOk*/ = true;
      var PL$85/*i*/ = 0;
      var PL$183/*l*/ = PL$180/*parTargetType*/["parameters"]["length"];
      for(PL$85/*i*/;(PL$85/*i*/ < PL$183/*l*/);++PL$85/*i*/){{
        var PL$184/*tp*/ = PL$180/*parTargetType*/["parameters"][PL$85/*i*/];
        var PL$185/*sp*/ = PL$181/*parSourceType*/["parameters"][PL$85/*i*/];
        if(! this["canSet"](PL$185/*sp*/, PL$184/*tp*/)){
          PL$182/*allOk*/ = false;
        };
        ;}};
      ;
      if(PL$182/*allOk*/){
        return true;
      };
      ;
    };
    ;
    return false;
    ;}),
"canConnect": (function(PL$34/*parType*/, PL$186/*parProperty*/, PL$187/*parFunType*/){
  
    ;
    var PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
    var PL$87/*map*/ = PL$60/*cDef*/["map"];
    if(PL$87/*map*/["members"][PL$186/*parProperty*/]){
      var PL$61/*mDef*/ = PL$87/*map*/["members"][PL$186/*parProperty*/];
      var PL$188/*propertyType*/ = this["getPropertyType"]({"type": PL$34/*parType*/,
"property": PL$186/*parProperty*/});
      if(! this["canSet"](PL$188/*propertyType*/, PL$187/*parFunType*/)){
        return false;
      };
      ;
      if(! (this["isVar"](PL$188/*propertyType*/) || this["isFunctionType"](PL$188/*propertyType*/))){
        return false;
      };
      ;
      if(! (this["isVar"](PL$187/*parFunType*/) || this["isFunctionType"](PL$187/*parFunType*/))){
        return false;
      };
      ;
      return true;
    };
    ;
    return false;
    ;})};
  PL$139/*cs*/ = PL$36/*classSystem*/;
  var PL$189/*getEffectiveFunctionResultType*/ = (function(PL$187/*parFunType*/){
  
    ;
    var PL$190/*res*/ = {"promiseResolveType": PL$36/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$36/*classSystem*/["getFunctionReturnType"](PL$187/*parFunType*/),
"resolvePromise": (function(PL$69/*parPromise*/, PL$191/*parValue*/){
    
      ;
      PL$69/*parPromise*/["resolve"](PL$191/*parValue*/);
      ;}),
"rejectPromise": (function(PL$69/*parPromise*/, PL$191/*parValue*/){
    
      ;
      PL$69/*parPromise*/["reject"](PL$191/*parValue*/);
      ;})};
    var PL$192/*resultType*/ = PL$190/*res*/["originalResultType"];
    PL$190/*res*/["newPromise"] = (function(){
    
      ;
      return new PL$80/*Promise*/();
      ;});
    if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$192/*resultType*/)){
      PL$190/*res*/["isTemporary"] = true;
      var PL$193/*unTrackedType*/ = PL$36/*classSystem*/["getClassFromTemporaryTracked"](PL$192/*resultType*/);
      if(PL$36/*classSystem*/["isPromiseOfClass"](PL$193/*unTrackedType*/)){
        var PL$194/*promiseConstructor*/ = PL$36/*classSystem*/["getTypeConstructor"](PL$193/*unTrackedType*/);
        PL$190/*res*/["newPromise"] = (function(){
        
          ;
          return PL$194/*promiseConstructor*/();
          ;});
        PL$190/*res*/["resolvePromise"] = (function(PL$69/*parPromise*/, PL$191/*parValue*/){
        
          ;
          PL$69/*parPromise*/[0]["resolve"](PL$191/*parValue*/);
          ;});
        PL$190/*res*/["rejectPromise"] = (function(PL$69/*parPromise*/, PL$191/*parValue*/){
        
          ;
          PL$69/*parPromise*/[0]["reject"](PL$191/*parValue*/);
          ;});
        var PL$195/*promiseResolveType*/ = PL$36/*classSystem*/["getClassFromPromiseOf"](PL$193/*unTrackedType*/);
        PL$190/*res*/["promiseResolveType"] = PL$195/*promiseResolveType*/;
      };
      ;
    };
    ;
    return PL$190/*res*/;
    ;});
  var PL$196/*_stringEncodeStr*/ = (function(PL$31/*par*/){
  
    ;
    var PL$197/*s*/ = PL$31/*par*/["replace"](new PL$198/*RegExp*/("\\\\", "g"), "\\\\");
    PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\n", "g"), "\\n");
    PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\r", "g"), "\\r");
    PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\\"", "g"), "\\\"");
    PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\u2028", "g"), "\\u2028");
    PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\u2029", "g"), "\\u2029");
    return PL$197/*s*/;
    ;});
  var PL$199/*stringEncodeStr*/ = (function(PL$31/*par*/){
  
    ;
    return (("\"" + PL$196/*_stringEncodeStr*/(PL$31/*par*/)) + "\"");
    ;});
  var PL$200/*internals*/ = {"classHider": PL$53/*classHider*/,
"getClass": PL$51/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$199/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$189/*getEffectiveFunctionResultType*/,
"privateClassSystem": PL$58/*privateClassSystem*/};
  PL$7/*provisional*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$8/*temporary*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$9/*promiseOf*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$10/*sync*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$168/*registerSyncClass*/ = PL$200/*internals*/["registerSyncClass"];
  PL$165/*destroySynced*/ = PL$200/*internals*/["destroySynced"];
  var PL$201/*getClassBySyncId*/ = PL$200/*internals*/["getClassBySyncId"];
  PL$116/*syncFun*/ = PL$200/*internals*/["syncFun"];
  PL$120/*syncFunctionFun*/ = PL$200/*internals*/["syncFunctionFun"];
  PL$95/*internalObjects*/ = PL$200/*internals*/["internalObjects"];
  PL$94/*getNewInternalId*/ = PL$200/*internals*/["getNewInternalId"];
  PL$11/*savable*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$12/*codeGeneration*/(PL$36/*classSystem*/, PL$200/*internals*/);
  PL$124/*runtimeError*/ = PL$200/*internals*/["runtimeError"];
  PL$97/*presets*/ = PL$200/*internals*/["presets"];
  PL$161/*promiseland*/["classSystem"] = PL$36/*classSystem*/;
  PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$36/*classSystem*/,
"privateClassSystem": PL$58/*privateClassSystem*/,
"internalObjects": PL$95/*internalObjects*/,
"getClassBySyncId": PL$201/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$189/*getEffectiveFunctionResultType*/});
  return PL$36/*classSystem*/;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();