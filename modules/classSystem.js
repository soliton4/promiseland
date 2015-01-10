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
  defineFun(["./classSystem/DynInstance", "./classSystem/Wrapper", "./classSystem/TrackedPromise", "./classSystem/provisional", "./classSystem/temporary", "./classSystem/promiseOf", "./classSystem/sync", "./classSystem/savable", "./classSystem/codeGeneration", "./Map", "./classSystem/makro"], function(PL$4/*DynInstance*/, PL$5/*Wrapper*/, PL$6/*TrackedPromise*/, PL$7/*provisional*/, PL$8/*temporary*/, PL$9/*promiseOf*/, PL$10/*sync*/, PL$11/*savable*/, PL$13/*codeGeneration*/, PL$14/*Map*/, PL$12/*makroModule*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var Map = promiseland.Map;
if (promiseland._hasModule({ hashStr: "1eafd979c1ece4422fcb0a29e39728c3" })){ return promiseland._getModule("1eafd979c1ece4422fcb0a29e39728c3"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$33/*JSON*/;try{PL$33/*JSON*/ = JSON;}catch(e){};
var PL$45/*Object*/;try{PL$45/*Object*/ = Object;}catch(e){};
var PL$68/*Promise*/;try{PL$68/*Promise*/ = Promise;}catch(e){};
var PL$150/*promiseland*/;try{PL$150/*promiseland*/ = promiseland;}catch(e){};
var PL$187/*RegExp*/;try{PL$187/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$37/*classSystem*/;
var PL$128/*cs*/;
var PL$157/*registerSyncClass*/;
var PL$154/*destroySynced*/;
var PL$104/*syncFun*/;
var PL$108/*syncFunctionFun*/;
var PL$83/*internalObjects*/;
var PL$82/*getNewInternalId*/;
var PL$109/*makro*/;
var PL$113/*runtimeError*/;
var PL$85/*presets*/;

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
  PL$12/*makroModule*/ = PL$3/*extra*/["getModule"](PL$12/*makroModule*/);
  PL$13/*codeGeneration*/ = PL$3/*extra*/["getModule"](PL$13/*codeGeneration*/);
  PL$14/*Map*/ = PL$3/*extra*/["getModule"](PL$14/*Map*/);
  var PL$15/*getModuleData*/;
  (function(){
  var PL$16 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$19 = function(e){ PL$16.reject(e); };
PL$18(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$18(function(PL$20){PL$15/*getModuleData*/ = PL$20["getModuleData"];
    PL$16.resolve(); return;}), PL$19);
;})();
return PL$16;
})();
  var PL$21/*Tracker*/;
  (function(){
  var PL$22 = new __Promise();
var PL$23 = function(code){ return function(res){ try{code(res);}catch(e){ PL$22.reject(e); }; }; };
var PL$24 = function(e){ PL$22.reject(e); };
PL$23(function(){
  
    ;
    PL$3/*extra*/["TrackerPs"].then(PL$23(function(PL$25){PL$21/*Tracker*/ = PL$25["Tracker"];
    PL$22.resolve(); return;}), PL$24);
;})();
return PL$22;
})();
  var PL$26/*Chainable*/;
  (function(){
  var PL$27 = new __Promise();
var PL$28 = function(code){ return function(res){ try{code(res);}catch(e){ PL$27.reject(e); }; }; };
var PL$29 = function(e){ PL$27.reject(e); };
PL$28(function(){
  
    ;
    PL$3/*extra*/["ChainablePs"].then(PL$28(function(PL$30){PL$26/*Chainable*/ = PL$30["Chainable"];
    PL$27.resolve(); return;}), PL$29);
;})();
return PL$27;
})();
  var PL$31/*stringify*/ = (function(PL$32/*par*/){
  
    ;
    return PL$33/*JSON*/["stringify"](PL$32/*par*/);
    ;});
  var PL$34/*stringifyInstance*/ = (function(PL$35/*parType*/, PL$36/*parInstance*/){
  
    ;
    if(! PL$37/*classSystem*/["isUniqueClass"](PL$35/*parType*/)){
      throw PL$2/*errorMsg*/["onlyUniqueCanBeStringified"];
    };
    ;
    ;});
  var PL$38/*_actClass*/;
  var PL$39/*getClass*/ = (function(PL$40/*cf*/){
  
    ;
    PL$38/*_actClass*/ = undefined;
    PL$40/*cf*/();
    return PL$38/*_actClass*/;
    ;});
  var PL$41/*classHider*/ = (function(PL$42/*toHide*/){
  
    ;
    return (function(){
    
      ;
      PL$38/*_actClass*/ = PL$42/*toHide*/;
      ;});
    ;});
  var PL$43/*buildInTypesMap*/ = new PL$14/*Map*/();
  PL$43/*buildInTypesMap*/["set"]("var", PL$41/*classHider*/({"isVar": true,
"isReady": true,
"availableByName": true,
"builtin": true}));
  PL$43/*buildInTypesMap*/["set"]("statement", PL$41/*classHider*/({"isStatement": true,
"isReady": true,
"availableByName": false,
"builtin": true}));
  PL$43/*buildInTypesMap*/["set"]("int", PL$41/*classHider*/({"isInt": true,
"isReady": true,
"availableByName": true,
"builtin": true}));
  var PL$44/*hasOwnProperty*/ = PL$45/*Object*/["prototype"]["hasOwnProperty"];
  var PL$46/*privateClassSystem*/ = {"stringifyInstance": PL$34/*stringifyInstance*/,
"stringify": PL$31/*stringify*/,
"getMemberByName": (function(PL$35/*parType*/, PL$36/*parInstance*/, PL$47/*parMemberName*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    var PL$49/*mDef*/ = PL$48/*cDef*/["map"]["members"][PL$47/*parMemberName*/];
    if(PL$49/*mDef*/){
      return PL$36/*parInstance*/[PL$49/*mDef*/["index"]];
    };
    ;
    if((PL$48/*cDef*/["map"]["freePart"] !== undefined)){
      return PL$36/*parInstance*/[PL$48/*cDef*/["map"]["freePart"]][PL$47/*parMemberName*/];
    };
    ;
    return;
    ;}),
"getTrackerFromInstance": (function(PL$35/*parType*/, PL$36/*parInstance*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    return PL$36/*parInstance*/[PL$48/*cDef*/["map"]["trackerIdx"]];
    ;}),
"setMemberByDefFromInstance": (function(PL$35/*parType*/, PL$36/*parInstance*/, PL$50/*parMemberDefinition*/, PL$51/*parValueInstance*/){
  
    ;
    var PL$52/*realInstance*/ = PL$46/*privateClassSystem*/["getRealInstance"](PL$35/*parType*/, PL$36/*parInstance*/);
    PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["index"]] = PL$51/*parValueInstance*/;
    if(PL$37/*classSystem*/["isTrackedClass"](PL$50/*parMemberDefinition*/["type"])){
      var PL$53/*tracker*/ = PL$37/*classSystem*/["getTrackerFromInstance"](PL$35/*parType*/, PL$52/*realInstance*/);
      var PL$48/*cDef*/ = PL$39/*getClass*/(PL$50/*parMemberDefinition*/["type"]);
      var PL$54/*trackMemberIdx*/ = PL$48/*cDef*/["map"]["trackMemberIdx"];
      if(PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]]){
        PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]]();
      };
      ;
      PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]] = PL$51/*parValueInstance*/[PL$54/*trackMemberIdx*/](PL$53/*tracker*/);
    };
    ;
    ;}),
"getRealInstance": (function(PL$35/*parType*/, PL$36/*parInstance*/){
  
    ;
    if(PL$37/*classSystem*/["isTemporaryTrackedClass"](PL$35/*parType*/)){
      return PL$36/*parInstance*/[0];
    };
    ;
    return PL$36/*parInstance*/;
    ;}),
"getNonTemporaryType": (function(PL$35/*parType*/){
  
    ;
    if(PL$37/*classSystem*/["isTemporaryTrackedClass"](PL$35/*parType*/)){
      return PL$37/*classSystem*/["getClassFromTemporaryTracked"](PL$35/*parType*/);
    };
    ;
    return PL$35/*parType*/;
    ;}),
"untrack": (function(PL$35/*parType*/, PL$36/*parInstance*/){
  
    ;
    if((PL$36/*parInstance*/ && PL$37/*classSystem*/["isTemporaryTrackedClass"](PL$35/*parType*/))){
      PL$36/*parInstance*/[1]();
    };
    ;
    ;}),
"hasOwnProperty": (function(PL$55/*obj*/, PL$56/*property*/){
  
    ;
    return PL$44/*hasOwnProperty*/["apply"](PL$55/*obj*/, [PL$56/*property*/]);
    ;}),
"resolvePromise": (function(PL$35/*parType*/, PL$57/*parPromise*/, PL$36/*parInstance*/){
  
    ;
    this["getRealInstance"](PL$35/*parType*/, PL$57/*parPromise*/)["resolve"](PL$36/*parInstance*/);
    return PL$57/*parPromise*/;
    ;}),
"rejectPromise": (function(PL$35/*parType*/, PL$57/*parPromise*/, PL$36/*parInstance*/){
  
    ;
    this["getRealInstance"](PL$35/*parType*/, PL$57/*parPromise*/)["reject"](PL$36/*parInstance*/);
    return PL$57/*parPromise*/;
    ;})};
  var PL$58/*pcs*/ = PL$46/*privateClassSystem*/;
  PL$37/*classSystem*/ = {"isSameType": (function(PL$59/*type1*/, PL$60/*type2*/){
  
    ;
    if((PL$59/*type1*/ === PL$60/*type2*/)){
      return true;
    };
    ;
    var PL$61/*cDef1*/ = PL$39/*getClass*/(PL$59/*type1*/);
    if(PL$61/*cDef1*/["provisional"]){
      if(! PL$61/*cDef1*/["type"]){
        return false;
      };
      ;
      PL$59/*type1*/ = PL$61/*cDef1*/["type"];
      PL$61/*cDef1*/ = PL$39/*getClass*/(PL$59/*type1*/);
    };
    ;
    var PL$62/*cDef2*/ = PL$39/*getClass*/(PL$60/*type2*/);
    if(PL$62/*cDef2*/["provisional"]){
      if(! PL$62/*cDef2*/["type"]){
        return false;
      };
      ;
      PL$60/*type2*/ = PL$62/*cDef2*/["type"];
      PL$62/*cDef2*/ = PL$39/*getClass*/(PL$60/*type2*/);
    };
    ;
    if((PL$59/*type1*/ === PL$60/*type2*/)){
      return true;
    };
    ;
    return false;
    ;}),
"createClass": (function(PL$63/*classLiteral*/, PL$64/*parDefaults*/){
  
    ;
    var PL$65/*self*/ = this;
    return PL$65/*self*/["_createClass"](PL$63/*classLiteral*/, PL$64/*parDefaults*/);
    ;}),
"_membersDefined": (function(PL$63/*classLiteral*/){
  
    ;
    var PL$65/*self*/ = this;
    var PL$66/*cnt*/ = 1;
    var PL$67/*retPs*/ = new PL$68/*Promise*/();
    var PL$69/*check*/ = (function(){
    
      ;
      if(PL$66/*cnt*/){
        return;
      };
      ;
      PL$67/*retPs*/["resolve"](PL$63/*classLiteral*/);
      ;});
    var PL$70/*addMember*/ = (function(PL$71/*m*/){
    
      ;
      ++PL$66/*cnt*/;
      PL$65/*self*/["definitionPromise"](PL$71/*m*/["type"])["then"]((function(PL$72/*definedType*/){
      
        ;
        PL$71/*m*/["type"] = PL$72/*definedType*/;
        --PL$66/*cnt*/;
        PL$69/*check*/();
        ;}));
      ;});
    if(PL$63/*classLiteral*/["members"]){
      var PL$73/*i*/ = 0;
      for(PL$73/*i*/;(PL$73/*i*/ < PL$63/*classLiteral*/["members"]["length"]);++PL$73/*i*/){{
        PL$70/*addMember*/(PL$63/*classLiteral*/["members"][PL$73/*i*/]);}};
      ;
    };
    ;
    --PL$66/*cnt*/;
    PL$69/*check*/();
    return PL$67/*retPs*/;
    ;}),
"_createClass": (function(PL$63/*classLiteral*/, PL$64/*parDefaults*/){
  
    ;
    var PL$74/*cAr*/ = [];
    var PL$65/*self*/ = this;
    var PL$75/*map*/ = {"members": {},
"membersByIndex": {},
"membersAr": [],
"extends": []};
    var PL$48/*cDef*/ = {"constructor": undefined,
"map": PL$75/*map*/,
"isReady": false,
"track": ((PL$63/*classLiteral*/["track"] || PL$63/*classLiteral*/["sync"]) ? true : false),
"sync": PL$63/*classLiteral*/["sync"],
"unique": PL$63/*classLiteral*/["unique"],
"savable": PL$63/*classLiteral*/["savable"],
"readyPromise": new PL$68/*Promise*/(),
"syncMembers": [],
"moduleName": PL$63/*classLiteral*/["moduleName"],
"className": PL$63/*classLiteral*/["className"],
"moduleHash": PL$63/*classLiteral*/["hashStr"]};
    var PL$40/*cf*/ = PL$41/*classHider*/(PL$48/*cDef*/);
    if(PL$48/*cDef*/["sync"]){
      if(PL$48/*cDef*/["sync"]["serve"]){
        PL$48/*cDef*/["syncServe"] = true;
      };
      ;
    };
    ;
    if(PL$48/*cDef*/["savable"]){
      PL$48/*cDef*/["unique"] = true;
    };
    ;
    PL$74/*cAr*/["push"](PL$40/*cf*/);
    var PL$10/*sync*/ = (PL$63/*classLiteral*/["sync"] ? true : false);
    var PL$76/*syncAll*/ = false;
    if(PL$10/*sync*/){
      if(PL$63/*classLiteral*/["sync"]["all"]){
        PL$76/*syncAll*/ = true;
      };
      ;
    };
    ;
    var PL$77/*syncCnt*/ = 0;
    var PL$78/*trackerIdx*/;
    var PL$79/*trackRootIdx*/;
    var PL$54/*trackMemberIdx*/;
    if(PL$48/*cDef*/["track"]){
      PL$75/*map*/["trackerIdx"] = PL$74/*cAr*/["length"];
      PL$74/*cAr*/["push"](undefined);
      PL$75/*map*/["trackRootIdx"] = PL$74/*cAr*/["length"];
      PL$74/*cAr*/["push"](undefined);
      PL$75/*map*/["trackMemberIdx"] = PL$74/*cAr*/["length"];
      PL$74/*cAr*/["push"](undefined);
      PL$78/*trackerIdx*/ = PL$75/*map*/["trackerIdx"];
      PL$79/*trackRootIdx*/ = PL$75/*map*/["trackRootIdx"];
      PL$54/*trackMemberIdx*/ = PL$75/*map*/["trackMemberIdx"];
    };
    ;
    if(PL$10/*sync*/){
      PL$75/*map*/["syncDataIdx"] = PL$74/*cAr*/["length"];
      PL$74/*cAr*/["push"]((function(){
      
        ;
        var PL$65/*self*/ = this;
        var PL$80/*internalId*/;
        var PL$81/*syncData*/ = {"getInternalId": (function(){
        
          ;
          if(PL$80/*internalId*/){
            return PL$80/*internalId*/;
          };
          ;
          PL$80/*internalId*/ = PL$82/*getNewInternalId*/();
          PL$83/*internalObjects*/[PL$80/*internalId*/] = PL$65/*self*/;
          PL$81/*syncData*/["internalId"] = PL$80/*internalId*/;
          return PL$80/*internalId*/;
          ;}),
"transports": []};
        this[PL$75/*map*/["syncDataIdx"]] = (function(){
        
          ;
          return PL$81/*syncData*/;
          ;});
        return PL$81/*syncData*/;
        ;}));
    };
    ;
    if(PL$63/*classLiteral*/["hasFreePart"]){
      var PL$84/*freepart*/ = {};
      PL$75/*map*/["freePart"] = PL$74/*cAr*/["length"];
      PL$74/*cAr*/["push"](PL$84/*freepart*/);
      PL$75/*map*/["getMemberCode"] = PL$85/*presets*/["getMemberCode"](PL$75/*map*/["freePart"]);
      PL$75/*map*/["setMemberCode"] = PL$85/*presets*/["setMemberCode"](PL$75/*map*/["freePart"]);
    };
    ;
    var PL$86/*helpAr*/ = [];
    var PL$87/*makeHelpAr*/ = (function(){
    
      ;
      return PL$86/*helpAr*/["slice"]();
      ;});
    PL$75/*map*/["connectIdx"] = PL$74/*cAr*/["length"];
    var PL$88/*conIdx*/ = PL$75/*map*/["connectIdx"];
    PL$74/*cAr*/["push"]((function(){
    var PL$93/*arguments*/ = arguments;

      ;
      var PL$86/*helpAr*/ = PL$87/*makeHelpAr*/();
      this[PL$88/*conIdx*/] = (function(PL$89/*idx*/, PL$90/*fun*/, PL$91/*base*/){
      
        ;
        var PL$92/*chain*/ = PL$86/*helpAr*/[PL$89/*idx*/];
        if(! PL$92/*chain*/){
          PL$92/*chain*/ = PL$26/*Chainable*/(this, PL$89/*idx*/);
          PL$86/*helpAr*/[PL$89/*idx*/] = PL$92/*chain*/;
        };
        ;
        return PL$92/*chain*/(PL$90/*fun*/, PL$91/*base*/);
        ;});
      return this[PL$88/*conIdx*/]["apply"](this, PL$93/*arguments*/);
      ;}));
    var PL$94/*constructorDef*/;
    var PL$95/*constructorFun*/;
    var PL$96/*destroyDef*/;
    var PL$97/*destroyFun*/;
    var PL$98/*untrackIdxAr*/ = [];
    var PL$70/*addMember*/ = (function(PL$71/*m*/){
    
      ;
      var PL$49/*mDef*/ = {"index": PL$74/*cAr*/["length"],
"name": PL$71/*m*/["name"]};
      if((PL$76/*syncAll*/ || PL$71/*m*/["sync"])){
        PL$49/*mDef*/["sync"] = true;
      };
      ;
      if(PL$71/*m*/["meta"]){
        PL$49/*mDef*/["meta"] = PL$71/*m*/["meta"];
      };
      ;
      PL$49/*mDef*/["type"] = PL$71/*m*/["type"];
      var PL$99/*mType*/ = PL$71/*m*/["type"];
      var PL$100/*isFunction*/ = PL$65/*self*/["isFunctionType"](PL$49/*mDef*/["type"]);
      var PL$101/*memberIdx*/ = PL$49/*mDef*/["index"];
      var PL$102/*isTrackedMember*/ = PL$65/*self*/["isTrackedClass"](PL$49/*mDef*/["type"]);
      if(PL$48/*cDef*/["unique"]){
        if((PL$71/*m*/["name"] == "id")){
          PL$48/*cDef*/["idIndex"] = PL$101/*memberIdx*/;
          PL$48/*cDef*/["idDef"] = PL$49/*mDef*/;
        };
        ;
      };
      ;
      if(PL$49/*mDef*/["sync"]){
        PL$49/*mDef*/["hasSetter"] = true;
        if(PL$102/*isTrackedMember*/){
          PL$49/*mDef*/["defaultSetter"] = (function(PL$103/*vAr*/){
          
            ;
            PL$104/*syncFun*/(this, PL$101/*memberIdx*/, PL$99/*mType*/, PL$103/*vAr*/[0]);
            return PL$103/*vAr*/;
            ;});
        }else{
        PL$49/*mDef*/["defaultSetter"] = (function(PL$105/*v*/){
        
          ;
          PL$104/*syncFun*/(this, PL$101/*memberIdx*/, PL$99/*mType*/, PL$105/*v*/);
          return PL$105/*v*/;
          ;});
        };
        ;
        PL$48/*cDef*/["syncMembers"]["push"](PL$49/*mDef*/);
      };
      ;
      if(PL$71/*m*/["noSave"]){
        PL$49/*mDef*/["noSave"] = true;
      };
      ;
      PL$75/*map*/["members"][PL$71/*m*/["name"]] = PL$49/*mDef*/;
      PL$75/*map*/["membersByIndex"][PL$49/*mDef*/["index"]] = PL$49/*mDef*/;
      PL$75/*map*/["membersAr"]["push"](PL$49/*mDef*/);
      var PL$106/*def*/ = (PL$64/*parDefaults*/ ? PL$64/*parDefaults*/[PL$71/*m*/["name"]] : undefined);
      PL$49/*mDef*/["defaultValue"] = PL$106/*def*/;
      if((PL$100/*isFunction*/ && PL$49/*mDef*/["sync"])){
        if(! ((PL$71/*m*/["name"] == "constructor") || (PL$71/*m*/["name"] == "destroy"))){
          var PL$107/*originalFun*/ = PL$106/*def*/;
          PL$106/*def*/ = (function(){
          var PL$93/*arguments*/ = arguments;

            ;
            PL$108/*syncFunctionFun*/(this, PL$101/*memberIdx*/, PL$99/*mType*/, PL$93/*arguments*/);
            return PL$107/*originalFun*/["apply"](this, PL$93/*arguments*/);
            ;});
        };
        ;
      };
      ;
      PL$74/*cAr*/["push"](PL$106/*def*/);
      if(PL$49/*mDef*/["hasSetter"]){
        PL$49/*mDef*/["setterIdx"] = PL$74/*cAr*/["length"];
        PL$74/*cAr*/["push"](PL$49/*mDef*/["defaultSetter"]);
      };
      ;
      if((PL$71/*m*/["name"] == "constructor")){
        PL$94/*constructorDef*/ = PL$49/*mDef*/;
        PL$95/*constructorFun*/ = PL$106/*def*/;
      };
      ;
      if((PL$71/*m*/["name"] == "destroy")){
        PL$96/*destroyDef*/ = PL$49/*mDef*/;
        PL$97/*destroyFun*/ = PL$106/*def*/;
      };
      ;
      PL$49/*mDef*/["getCode"] = [PL$109/*makro*/["SELF"], (("[" + PL$49/*mDef*/["index"]) + "]")];
      if(PL$49/*mDef*/["hasSetter"]){
        PL$49/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$49/*mDef*/["setterIdx"]) + "](v); s[") + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], " v; return v; })(", PL$109/*makro*/["SELF"], ", ", PL$109/*makro*/["VALUE"], ")"];
      }else{
      PL$49/*mDef*/["setCode"] = [PL$109/*makro*/["SELF"], (("[" + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], " ", PL$109/*makro*/["VALUE"]];
      };
      ;
      if(PL$102/*isTrackedMember*/){
        var PL$110/*mCDef*/ = PL$39/*getClass*/(PL$49/*mDef*/["type"]);
        var PL$111/*memberTrackMemberIdx*/ = PL$110/*mCDef*/["map"]["trackMemberIdx"];
        var PL$112/*memberTrackRootIdx*/ = PL$110/*mCDef*/["map"]["trackRootIdx"];
        PL$49/*mDef*/["trackIndex"] = PL$74/*cAr*/["length"];
        PL$74/*cAr*/["push"](undefined);
        PL$98/*untrackIdxAr*/["push"](PL$49/*mDef*/["trackIndex"]);
        if(PL$48/*cDef*/["track"]){
          if(PL$49/*mDef*/["hasSetter"]){
            PL$49/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$112/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$49/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], ((((((((((" v; if(s[" + PL$49/*mDef*/["trackIndex"]) + "]){ s[") + PL$49/*mDef*/["trackIndex"]) + "](); }; s[") + PL$49/*mDef*/["trackIndex"]) + "] = v[") + PL$111/*memberTrackMemberIdx*/) + "](s[") + PL$78/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$109/*makro*/["SELF"], ", ", PL$109/*makro*/["VALUE"], ")"];
            PL$49/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$49/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], ((((((((((" v; if(s[" + PL$49/*mDef*/["trackIndex"]) + "]){ s[") + PL$49/*mDef*/["trackIndex"]) + "](); }; s[") + PL$49/*mDef*/["trackIndex"]) + "] = v[") + PL$111/*memberTrackMemberIdx*/) + "](s[") + PL$78/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$109/*makro*/["SELF"], ", ", PL$109/*makro*/["VALUE"], ")"];
          }else{
          PL$49/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], ((((((((((" v; if(s[" + PL$49/*mDef*/["trackIndex"]) + "]){ s[") + PL$49/*mDef*/["trackIndex"]) + "](); }; s[") + PL$49/*mDef*/["trackIndex"]) + "] = v[") + PL$111/*memberTrackMemberIdx*/) + "](s[") + PL$78/*trackerIdx*/) + "]); return v; })("), PL$109/*makro*/["SELF"], ", ", PL$109/*makro*/["VALUE"], ")"];
          PL$49/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$49/*mDef*/["index"]) + "] "), PL$109/*makro*/["OPERATOR"], ((((((((((" v; if(s[" + PL$49/*mDef*/["trackIndex"]) + "]){ s[") + PL$49/*mDef*/["trackIndex"]) + "](); }; s[") + PL$49/*mDef*/["trackIndex"]) + "] = v[") + PL$111/*memberTrackMemberIdx*/) + "](s[") + PL$78/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$109/*makro*/["SELF"], ", ", PL$109/*makro*/["VALUE"], ")"];
          };
          ;
        }else{
        PL$49/*mDef*/["setCode"] = [PL$113/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];
        PL$49/*mDef*/["setCodeFromTemporary"] = [PL$113/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];
        };
        ;
      };
      ;
      PL$49/*mDef*/["connectFunCode"] = [PL$109/*makro*/["SELF"], (((("[" + PL$75/*map*/["connectIdx"]) + "](") + PL$49/*mDef*/["index"]) + ", "), PL$109/*makro*/["VALUE"], ")"];
      PL$49/*mDef*/["connectSlotCode"] = [PL$109/*makro*/["SELF"], (((("[" + PL$75/*map*/["connectIdx"]) + "](") + PL$49/*mDef*/["index"]) + ", "), PL$109/*makro*/["VALUE"], "[", PL$109/*makro*/["VALUEPROPERTY"], "], ", PL$109/*makro*/["VALUE"], ")"];
      ;});
    var PL$114/*createMembersPs*/ = (function(){
    
      ;
      var PL$115/*donePs*/ = new PL$68/*Promise*/();
      PL$65/*self*/["_membersDefined"](PL$63/*classLiteral*/)["then"]((function(){
      
        ;
        var PL$73/*i*/;
        var PL$116/*passedConstructorType*/;
        if(PL$63/*classLiteral*/["members"]){
          for(PL$73/*i*/ = 0;(PL$73/*i*/ < PL$63/*classLiteral*/["members"]["length"]);++PL$73/*i*/){{
            var PL$71/*m*/ = PL$63/*classLiteral*/["members"][PL$73/*i*/];
            if((PL$71/*m*/["name"] == "constructor")){
              PL$116/*passedConstructorType*/ = PL$71/*m*/["type"];
              break;;
            };
            ;}};
          ;
        };
        ;
        if(PL$116/*passedConstructorType*/){
          var PL$117/*conDef*/ = PL$39/*getClass*/(PL$116/*passedConstructorType*/);
          PL$48/*cDef*/["constructorType"] = PL$65/*self*/["createFunctionType"]({"return": PL$40/*cf*/,
"arguments": PL$117/*conDef*/["arguments"]});
        }else{
        PL$48/*cDef*/["constructorType"] = PL$65/*self*/["createFunctionType"]({"return": PL$40/*cf*/});
        };
        ;
        PL$48/*cDef*/["constructorTypeIntern"] = PL$48/*cDef*/["constructorType"];
        if(PL$48/*cDef*/["unique"]){
          PL$63/*classLiteral*/["members"] = (PL$63/*classLiteral*/["members"] || []);
          PL$48/*cDef*/["idType"] = PL$65/*self*/["getFunctionArgumentType"](PL$48/*cDef*/["constructorTypeIntern"], 0);
          PL$63/*classLiteral*/["members"]["unshift"]({"name": "id",
"type": PL$48/*cDef*/["idType"]});
          if(PL$48/*cDef*/["savable"]){
            PL$63/*classLiteral*/["members"]["unshift"]({"name": "save",
"type": PL$37/*classSystem*/["getBuiltinType"]("var"),
"noSave": true});
            PL$64/*parDefaults*/["save"] = (function(){
            var PL$118 = new __Promise();
var PL$119 = function(code){ return function(res){ try{code(res);}catch(e){ PL$118.reject(e); }; }; };
var PL$120 = function(e){ PL$118.reject(e); };
var PL$121/*this*/ = this;
PL$119(function(){
            
              ;
              PL$58/*pcs*/["saveInstance"](PL$40/*cf*/, PL$121/*this*/).then(PL$119(function(PL$122){PL$122;
              PL$118.resolve(); return;}), PL$120);
;})();
return PL$118;
});
            PL$63/*classLiteral*/["members"]["unshift"]({"name": "load",
"type": PL$37/*classSystem*/["getBuiltinType"]("var"),
"noSave": true});
            PL$64/*parDefaults*/["load"] = (function(){
            var PL$123 = new __Promise();
var PL$124 = function(code){ return function(res){ try{code(res);}catch(e){ PL$123.reject(e); }; }; };
var PL$125 = function(e){ PL$123.reject(e); };
var PL$126/*this*/ = this;
PL$124(function(){
            
              ;
              PL$58/*pcs*/["loadInstance"](PL$40/*cf*/, PL$126/*this*/).then(PL$124(function(PL$127){PL$127;
              PL$123.resolve(); return;}), PL$125);
;})();
return PL$123;
});
            PL$117/*conDef*/ = PL$39/*getClass*/(PL$48/*cDef*/["constructorTypeIntern"]);
            PL$48/*cDef*/["constructorReturnType"] = PL$65/*self*/["_createPromiseOfClass"](PL$58/*pcs*/["getNonTemporaryType"](PL$117/*conDef*/["return"]));
            PL$48/*cDef*/["constructorType"] = PL$65/*self*/["createFunctionType"]({"return": PL$48/*cDef*/["constructorReturnType"],
"arguments": PL$117/*conDef*/["arguments"]});
            PL$48/*cDef*/["constructorReturnType"] = PL$128/*cs*/["getFunctionReturnType"](PL$48/*cDef*/["constructorType"]);
          };
          ;
        };
        ;
        if(PL$63/*classLiteral*/["members"]){
          PL$73/*i*/ = 0;
          for(PL$73/*i*/;(PL$73/*i*/ < PL$63/*classLiteral*/["members"]["length"]);++PL$73/*i*/){{
            PL$70/*addMember*/(PL$63/*classLiteral*/["members"][PL$73/*i*/]);}};
          ;
        };
        ;
        PL$115/*donePs*/["resolve"]();
        ;}));
      return PL$115/*donePs*/;
      ;});
    var PL$129/*memberPs*/ = PL$114/*createMembersPs*/();
    var PL$73/*i*/;
    var PL$130/*finalPs*/ = new PL$68/*Promise*/();
    PL$129/*memberPs*/["then"]((function(){
    
      ;
      var PL$73/*i*/;
      var PL$131/*simpleConstructor*/ = true;
      var PL$132/*hasDestructor*/ = false;
      if((PL$48/*cDef*/["track"] || PL$48/*cDef*/["unique"])){
        PL$131/*simpleConstructor*/ = false;
      };
      ;
      if((PL$48/*cDef*/["track"] || PL$10/*sync*/)){
        PL$132/*hasDestructor*/ = true;
      };
      ;
      for(PL$73/*i*/ = 0;(PL$73/*i*/ < PL$74/*cAr*/["length"]);++PL$73/*i*/){{
        PL$86/*helpAr*/["push"](undefined);}};
      ;
      PL$48/*cDef*/["constructorArguments"] = [];
      if(PL$131/*simpleConstructor*/){
        if(PL$63/*classLiteral*/["hasFreePart"]){
          var PL$133/*proto*/ = {};
          if(PL$64/*parDefaults*/){
            for(PL$73/*i*/ in PL$64/*parDefaults*/){
              if(! PL$75/*map*/["members"][PL$73/*i*/]){
                PL$133/*proto*/[PL$73/*i*/] = PL$64/*parDefaults*/[PL$73/*i*/];
              };
              ;};
            ;
          };
          ;
          var PL$134/*freeFun*/ = (function(){
          
            ;
            ;});
          PL$134/*freeFun*/["prototype"] = PL$133/*proto*/;
          var PL$135/*f*/ = PL$75/*map*/["freePart"];
          PL$48/*cDef*/["constructor"] = (function(){
          
            ;
            var PL$136/*r*/ = PL$74/*cAr*/["slice"]();
            PL$136/*r*/[PL$135/*f*/] = new PL$134/*freeFun*/();
            return PL$136/*r*/;
            ;});
        }else{
        PL$48/*cDef*/["constructor"] = (function(){
        
          ;
          return PL$74/*cAr*/["slice"]();
          ;});
        };
        ;
        if(PL$94/*constructorDef*/){
          var PL$137/*realConstructor*/ = PL$48/*cDef*/["constructor"];
          PL$48/*cDef*/["constructor"] = (function(){
          var PL$93/*arguments*/ = arguments;

            ;
            var PL$138/*instance*/ = PL$137/*realConstructor*/();
            PL$95/*constructorFun*/["apply"](PL$138/*instance*/, PL$93/*arguments*/);
            return PL$138/*instance*/;
            ;});
        };
        ;
      }else{
      var PL$139/*constructorStr*/ = "";
      var PL$140/*importObj*/ = {};
      var PL$141/*importVar*/ = (function(PL$105/*v*/, PL$142/*name*/){
      
        ;
        PL$140/*importObj*/[PL$142/*name*/] = PL$105/*v*/;
        ;});
      PL$139/*constructorStr*/ += "var r;";
      if(PL$48/*cDef*/["unique"]){
        var PL$143/*uniqueMap*/ = new PL$14/*Map*/();
        var PL$144/*hasVarId*/ = PL$65/*self*/["isVar"](PL$48/*cDef*/["idType"]);
        var PL$145/*idType*/ = PL$48/*cDef*/["idType"];
        PL$141/*importVar*/(PL$145/*idType*/, "idType");
        var PL$146/*idDef*/ = PL$48/*cDef*/["idDef"];
        if(PL$48/*cDef*/["savable"]){
          PL$141/*importVar*/(PL$128/*cs*/, "cs");
          PL$141/*importVar*/(PL$48/*cDef*/, "cDef");
          PL$141/*importVar*/(PL$128/*cs*/["getTypeConstructor"](PL$58/*pcs*/["getNonTemporaryType"](PL$48/*cDef*/["constructorReturnType"])), "returnPromiseConstructor");
          PL$139/*constructorStr*/ += "var resPs = new returnPromiseConstructor;";
        };
        ;
        if(PL$144/*hasVarId*/){
          PL$141/*importVar*/(PL$31/*stringify*/, "stringify");
          PL$139/*constructorStr*/ += "var key = stringify(arguments[0]);";
        }else{
        PL$141/*importVar*/(PL$31/*stringify*/, "stringifyInstance");
        PL$139/*constructorStr*/ += "var key = stringifyInstance(idType, arguments[0]);";
        };
        ;
        PL$141/*importVar*/(PL$143/*uniqueMap*/, "uniqueMap");
        PL$141/*importVar*/(PL$46/*privateClassSystem*/, "privateClassSystem");
        PL$139/*constructorStr*/ += "r = uniqueMap.get(key);";
        PL$139/*constructorStr*/ += "if (r){";
        PL$139/*constructorStr*/ += "if (arguments[0]){";
        PL$139/*constructorStr*/ += "privateClassSystem.untrack(idType, arguments[0]);";
        PL$139/*constructorStr*/ += "};";
        PL$139/*constructorStr*/ += "}else{";
      };
      ;
      PL$141/*importVar*/(PL$74/*cAr*/, "cAr");
      PL$139/*constructorStr*/ += "r = cAr.slice();";
      if(PL$63/*classLiteral*/["hasFreePart"]){
        PL$133/*proto*/ = {};
        if(PL$64/*parDefaults*/){
          for(PL$73/*i*/ in PL$64/*parDefaults*/){
            if(! PL$75/*map*/["members"][PL$73/*i*/]){
              PL$133/*proto*/[PL$73/*i*/] = PL$64/*parDefaults*/[PL$73/*i*/];
            };
            ;};
          ;
        };
        ;
        PL$134/*freeFun*/ = (function(){
        
          ;
          ;});
        PL$134/*freeFun*/["prototype"] = PL$133/*proto*/;
        var PL$147/*freeIndex*/ = PL$75/*map*/["freePart"];
        PL$141/*importVar*/(PL$134/*freeFun*/, "freeFun");
        PL$141/*importVar*/(PL$147/*freeIndex*/, "freeIndex");
        PL$139/*constructorStr*/ += "r[freeIndex] = new freeFun();";
      };
      ;
      if(PL$94/*constructorDef*/){
        PL$141/*importVar*/(PL$95/*constructorFun*/, "constructorFun");
        PL$139/*constructorStr*/ += "constructorFun.apply(r, arguments);";
      };
      ;
      if(PL$48/*cDef*/["unique"]){
        PL$141/*importVar*/(PL$40/*cf*/, "cf");
        PL$141/*importVar*/(PL$146/*idDef*/, "idDef");
        PL$139/*constructorStr*/ += "privateClassSystem.setMemberByDefFromInstance(cf, r, idDef, arguments[0]);";
        PL$139/*constructorStr*/ += "uniqueMap.set(key, r);";
        PL$139/*constructorStr*/ += "r.map = uniqueMap;";
        PL$139/*constructorStr*/ += "r.key = key;";
        if(PL$48/*cDef*/["savable"]){
          PL$139/*constructorStr*/ += "var doLoad = true;";
        };
        ;
        PL$139/*constructorStr*/ += "};";
      };
      ;
      PL$139/*constructorStr*/ += "var realInstance = r;";
      if(PL$48/*cDef*/["track"]){
        PL$141/*importVar*/(PL$21/*Tracker*/, "Tracker");
        PL$141/*importVar*/((function(){
        var PL$93/*arguments*/ = arguments;

          ;
          PL$97/*destroyFun*/["apply"](this, PL$93/*arguments*/);
          ;}), "destroyFun");
        PL$141/*importVar*/(PL$78/*trackerIdx*/, "trackerIdx");
        PL$141/*importVar*/(PL$79/*trackRootIdx*/, "trackRootIdx");
        PL$141/*importVar*/(PL$54/*trackMemberIdx*/, "trackMemberIdx");
        PL$139/*constructorStr*/ += "var t = Tracker(function(){";
        PL$139/*constructorStr*/ += "destroyFun.apply(realInstance);";
        PL$139/*constructorStr*/ += "});";
        PL$139/*constructorStr*/ += "realInstance[trackerIdx] = t[0];";
        PL$139/*constructorStr*/ += "realInstance[trackRootIdx] = t[1];";
        PL$139/*constructorStr*/ += "realInstance[trackMemberIdx] = t[2];";
        PL$139/*constructorStr*/ += "r = [realInstance, realInstance[trackRootIdx]()];";
      };
      ;
      PL$139/*constructorStr*/ += "var nonPromiseResult = r;";
      if(PL$48/*cDef*/["savable"]){
        PL$141/*importVar*/(PL$58/*pcs*/, "pcs");
        PL$139/*constructorStr*/ += "if (doLoad){";
        PL$139/*constructorStr*/ += "pcs.loadInstance(cf, realInstance).then(function(){";
        PL$139/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
        PL$139/*constructorStr*/ += "}, function(e){ pcs.rejectPromise(cDef.constructorReturnType, resPs, e); });";
        PL$139/*constructorStr*/ += "}else{";
        PL$139/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
        PL$139/*constructorStr*/ += "};";
        PL$139/*constructorStr*/ += "r = resPs;";
      };
      ;
      PL$139/*constructorStr*/ += "return r;";
      var PL$148/*constructorObj*/ = {};
      PL$141/*importVar*/(PL$148/*constructorObj*/, "constructorObj");
      var PL$149/*wrapStr*/ = (("constructorObj.fun = function(){" + PL$139/*constructorStr*/) + "};");
      PL$150/*promiseland*/["javascriptEval"](PL$149/*wrapStr*/, PL$140/*importObj*/);
      PL$48/*cDef*/["constructor"] = PL$148/*constructorObj*/["fun"];
      };
      ;
      if(PL$132/*hasDestructor*/){
        var PL$151/*destructorStr*/ = "";
        var PL$152/*destructorImportObj*/ = {};
        var PL$153/*destructorImportVar*/ = (function(PL$105/*v*/, PL$142/*name*/){
        
          ;
          PL$152/*destructorImportObj*/[PL$142/*name*/] = PL$105/*v*/;
          ;});
        if(PL$10/*sync*/){
          PL$153/*destructorImportVar*/(PL$154/*destroySynced*/, "destroySynced");
          PL$153/*destructorImportVar*/(PL$37/*classSystem*/, "classSystem");
          PL$151/*destructorStr*/ += "var syncData = classSystem.getSyncData(this);";
          PL$151/*destructorStr*/ += "destroySynced(syncData);";
        };
        ;
        if(PL$48/*cDef*/["track"]){
          var PL$155/*_destroyFun*/;
          if(PL$98/*untrackIdxAr*/["length"]){
            PL$153/*destructorImportVar*/(PL$98/*untrackIdxAr*/, "untrackIdxAr");
            PL$151/*destructorStr*/ += "var i;";
            PL$151/*destructorStr*/ += "for (i = 0; i < untrackIdxAr.length; ++i){";
            PL$151/*destructorStr*/ += "var curIdx = untrackIdxAr[i];";
            PL$151/*destructorStr*/ += "var tFun = this[curIdx];";
            PL$151/*destructorStr*/ += "this[curIdx] = undefined;";
            PL$151/*destructorStr*/ += "if (tFun){";
            PL$151/*destructorStr*/ += "tFun();";
            PL$151/*destructorStr*/ += "};";
            PL$151/*destructorStr*/ += "};";
          };
          ;
          if(PL$48/*cDef*/["unique"]){
            PL$151/*destructorStr*/ += "this.map.delete(this.key);";
          };
          ;
        };
        ;
        if(PL$96/*destroyDef*/){
          PL$153/*destructorImportVar*/(PL$97/*destroyFun*/, "_destroyFun");
          PL$151/*destructorStr*/ += "_destroyFun.apply(this);";
        };
        ;
        PL$151/*destructorStr*/ += "this.splice(0,this.length);";
        var PL$156/*destructorObj*/ = {};
        PL$153/*destructorImportVar*/(PL$156/*destructorObj*/, "destructorObj");
        PL$149/*wrapStr*/ = (("destructorObj.fun = function(){" + PL$151/*destructorStr*/) + "};");
        PL$150/*promiseland*/["javascriptEval"](PL$149/*wrapStr*/, PL$152/*destructorImportObj*/);
        PL$97/*destroyFun*/ = PL$156/*destructorObj*/["fun"];
      };
      ;
      PL$130/*finalPs*/["resolve"]();
      ;}));
    PL$130/*finalPs*/["then"]((function(){
    
      ;
      PL$48/*cDef*/["isReady"] = true;
      if(PL$48/*cDef*/["savable"]){
        PL$46/*privateClassSystem*/["registerSavableClass"](PL$40/*cf*/);
      };
      ;
      PL$48/*cDef*/["readyPromise"]["resolve"](PL$40/*cf*/);
      ;}));
    if(PL$10/*sync*/){
      if(PL$63/*classLiteral*/["name"]){
        PL$48/*cDef*/["syncId"] = {"hash": PL$63/*classLiteral*/["hashStr"],
"name": PL$63/*classLiteral*/["name"]};
        PL$157/*registerSyncClass*/(PL$63/*classLiteral*/["hashStr"], PL$63/*classLiteral*/["name"], PL$40/*cf*/);
      };
      ;
    };
    ;
    return PL$40/*cf*/;
    ;}),
"getConstructorReturnType": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["constructorReturnType"]){
      return PL$48/*cDef*/["constructorReturnType"];
    };
    ;
    return PL$128/*cs*/["getFunctionReturnType"](PL$48/*cDef*/["constructorType"]);
    ;}),
"getTypeFromInstance": (function(PL$36/*parInstance*/){
  
    ;
    if((typeof PL$36/*parInstance*/[0] === "function")){
      return PL$36/*parInstance*/[0];
    };
    ;
    if((PL$36/*parInstance*/["length"] === 2)){
      return this["_createTemporaryTrackedClass"](PL$36/*parInstance*/[0][0]);
    };
    ;
    throw PL$2/*errorMsg*/["unknownInstanceType"];
    ;}),
"isFunctionType": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["isFunction"]){
      return true;
    };
    ;
    return false;
    ;}),
"isTrackedClass": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["track"]){
      return true;
    };
    ;
    return false;
    ;}),
"isUniqueClass": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["unique"]){
      return true;
    };
    ;
    return false;
    ;}),
"createFunctionType": (function(PL$32/*par*/){
  var PL$159/*makeTemporaries*/;

    ;
    var PL$65/*self*/ = this;
    var PL$48/*cDef*/ = {"isFunction": true,
"return": (PL$32/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$32/*par*/["arguments"] || []),
"isReady": false};
    var PL$158/*checkReady*/ = (function(){
    
      ;
      PL$159/*makeTemporaries*/();
      ;});
    PL$159/*makeTemporaries*/ = (function(){
    
      ;
      PL$48/*cDef*/["return"] = PL$65/*self*/["_createTemporaryTrackedClass"](PL$48/*cDef*/["return"]);
      var PL$73/*i*/ = 0;
      for(PL$73/*i*/ = 0;(PL$73/*i*/ < PL$48/*cDef*/["arguments"]["length"]);++PL$73/*i*/){{
        PL$48/*cDef*/["arguments"][PL$73/*i*/] = PL$65/*self*/["_createTemporaryTrackedClass"](PL$48/*cDef*/["arguments"][PL$73/*i*/]);}};
      ;
      ;});
    var PL$160/*isReady*/ = true;
    if(PL$65/*self*/["isProvisional"](PL$48/*cDef*/["return"])){
      PL$160/*isReady*/ = false;
      PL$65/*self*/["definitionPromise"](PL$48/*cDef*/["return"])["then"]((function(PL$35/*parType*/){
      
        ;
        PL$48/*cDef*/["return"] = PL$35/*parType*/;
        PL$158/*checkReady*/();
        ;}));
    };
    ;
    var PL$161/*resolveTypeFun*/ = (function(PL$162/*parI*/){
    
      ;
      return (function(PL$35/*parType*/){
      
        ;
        PL$48/*cDef*/["arguments"][PL$162/*parI*/] = PL$35/*parType*/;
        PL$158/*checkReady*/();
        ;});
      ;});
    var PL$73/*i*/ = 0;
    for(PL$73/*i*/ = 0;(PL$73/*i*/ < PL$48/*cDef*/["arguments"]["length"]);++PL$73/*i*/){{
      if(PL$65/*self*/["isProvisional"](PL$48/*cDef*/["arguments"][PL$73/*i*/])){
        PL$160/*isReady*/ = false;
        PL$65/*self*/["definitionPromise"](PL$48/*cDef*/["arguments"][PL$73/*i*/])["then"](PL$161/*resolveTypeFun*/(PL$73/*i*/));
      };
      ;}};
    ;
    var PL$40/*cf*/ = PL$41/*classHider*/(PL$48/*cDef*/);
    if(! PL$160/*isReady*/){
      PL$48/*cDef*/["readyPromise"] = new PL$68/*Promise*/();
      PL$158/*checkReady*/ = (function(){
      
        ;
        if(PL$65/*self*/["isProvisional"](PL$48/*cDef*/["return"])){
          return;
        };
        ;
        var PL$73/*i*/ = 0;
        for(PL$73/*i*/ = 0;(PL$73/*i*/ < PL$48/*cDef*/["arguments"]["length"]);++PL$73/*i*/){{
          if(PL$65/*self*/["isProvisional"](PL$48/*cDef*/["arguments"][PL$73/*i*/])){
            return;
          };
          ;}};
        ;
        PL$159/*makeTemporaries*/();
        PL$48/*cDef*/["isReady"] = true;
        PL$48/*cDef*/["readyPromise"]["resolve"](PL$40/*cf*/);
        ;});
      PL$158/*checkReady*/();
    }else{
    PL$158/*checkReady*/();
    PL$48/*cDef*/["isReady"] = true;
    };
    ;
    return PL$40/*cf*/;
    ;}),
"isVar": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["isVar"]){
      return true;
    };
    ;
    return false;
    ;}),
"isStatementType": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["isStatement"]){
      return true;
    };
    ;
    return false;
    ;}),
"isAvailableByName": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["availableByName"]){
      return true;
    };
    ;
    return false;
    ;}),
"getFunctionReturnType": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    return PL$48/*cDef*/["return"];
    ;}),
"getFunctionArgumentCount": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if(PL$48/*cDef*/["arguments"]){
      return PL$48/*cDef*/["arguments"]["length"];
    };
    ;
    return 0;
    ;}),
"getFunctionArgumentType": (function(PL$35/*parType*/, PL$163/*parIndex*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    if((PL$48/*cDef*/["arguments"] && PL$48/*cDef*/["arguments"][PL$163/*parIndex*/])){
      return PL$48/*cDef*/["arguments"][PL$163/*parIndex*/];
    };
    return this["getBuiltinType"]("var");
    ;}),
"getConstructorArgumentType": (function(PL$35/*parType*/, PL$163/*parIndex*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    var PL$164/*t*/;
    if(PL$48/*cDef*/["constructorArguments"]){
      PL$164/*t*/ = PL$48/*cDef*/["constructorArguments"][PL$163/*parIndex*/];
    };
    ;
    if(PL$164/*t*/){
      return PL$164/*t*/;
    };
    ;
    return this["getBuiltinType"]("var");
    ;}),
"getTypeConstructor": (function(PL$35/*parType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    return PL$48/*cDef*/["constructor"];
    ;}),
"getBuiltinType": (function(PL$165/*parName*/){
  
    ;
    return PL$43/*buildInTypesMap*/["get"](PL$165/*parName*/);
    ;}),
"getBuiltinTypesMap": (function(PL$165/*parName*/){
  
    ;
    return PL$43/*buildInTypesMap*/["clone"]();
    ;}),
"getPropertyAlias": (function(PL$32/*par*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$32/*par*/["type"]);
    if(PL$48/*cDef*/["isVar"]){
      return PL$32/*par*/["property"];
    };
    ;
    var PL$75/*map*/ = PL$48/*cDef*/["map"];
    if(((PL$75/*map*/ && PL$75/*map*/["members"]) && PL$75/*map*/["members"][PL$32/*par*/["property"]])){
      return PL$75/*map*/["members"][PL$32/*par*/["property"]]["index"];
    };
    ;
    return PL$32/*par*/["property"];
    ;}),
"getPropertyType": (function(PL$32/*par*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$32/*par*/["type"]);
    if(PL$48/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    var PL$75/*map*/ = PL$48/*cDef*/["map"];
    if(PL$75/*map*/["members"][PL$32/*par*/["property"]]){
      if(PL$32/*par*/["original"]){
        return (PL$75/*map*/["members"][PL$32/*par*/["property"]]["originalType"] || PL$75/*map*/["members"][PL$32/*par*/["property"]]["type"]);
      }else{
      return PL$75/*map*/["members"][PL$32/*par*/["property"]]["type"];
      };
      ;
    };
    ;
    return this["getBuiltinType"]("var");
    ;}),
"getConstructorType": (function(PL$32/*par*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$32/*par*/["type"]);
    if(PL$48/*cDef*/["isVar"]){
      return this["getBuiltinType"]("var");
    };
    ;
    if(PL$48/*cDef*/["constructorType"]){
      return PL$48/*cDef*/["constructorType"];
    };
    ;
    throw PL$2/*errorMsg*/["noConstructorAvailable"];
    ;}),
"setMemberByDef": (function(PL$166/*parDynInstance*/, PL$50/*parMemberDefinition*/, PL$167/*parValueDynInstance*/){
  
    ;
    var PL$52/*realInstance*/ = PL$166/*parDynInstance*/["instance"];
    PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["index"]] = PL$167/*parValueDynInstance*/["getInstanceAsType"](PL$50/*parMemberDefinition*/["type"]);
    if(this["isTrackedClass"](PL$50/*parMemberDefinition*/["type"])){
      var PL$53/*tracker*/ = this["getTrackerFromDynInstance"](PL$166/*parDynInstance*/);
      var PL$48/*cDef*/ = PL$39/*getClass*/(PL$167/*parValueDynInstance*/["type"]);
      var PL$54/*trackMemberIdx*/ = PL$48/*cDef*/["map"]["trackMemberIdx"];
      if(PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]]){
        PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]]();
      };
      ;
      PL$52/*realInstance*/[PL$50/*parMemberDefinition*/["trackIndex"]] = PL$167/*parValueDynInstance*/["instance"][PL$54/*trackMemberIdx*/](PL$53/*tracker*/);
    };
    ;
    ;}),
"getTrack": (function(PL$36/*parInstance*/){
  
    ;
    if(! PL$36/*parInstance*/){
      return;
    };
    ;
    var PL$168/*type*/ = PL$36/*parInstance*/[0];
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$168/*type*/);
    return PL$36/*parInstance*/[PL$48/*cDef*/["map"]["trackRootIdx"]]();
    ;}),
"canSet": (function(PL$169/*parTargetType*/, PL$170/*parSourceType*/){
  
    ;
    if(((PL$169/*parTargetType*/ === undefined) && (PL$170/*parSourceType*/ === undefined))){
      return true;
    };
    ;
    if(((PL$169/*parTargetType*/ === undefined) || (PL$170/*parSourceType*/ === undefined))){
      return false;
    };
    ;
    if((PL$169/*parTargetType*/ === PL$170/*parSourceType*/)){
      return true;
    };
    ;
    if(this["isTemporaryTrackedClass"](PL$170/*parSourceType*/)){
      if(this["isTemporaryTrackedClass"](PL$169/*parTargetType*/)){
        return this["canSet"](this["getClassFromTemporaryTracked"](PL$169/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$170/*parSourceType*/));
      };
      ;
      return false;
    };
    ;
    if(this["isTemporaryTrackedClass"](PL$169/*parTargetType*/)){
      return this["canSet"](this["getClassFromTemporaryTracked"](PL$169/*parTargetType*/), PL$170/*parSourceType*/);
    };
    ;
    if((((PL$169/*parTargetType*/["isFunction"] && PL$170/*parSourceType*/["isFunction"]) && this["canSet"](PL$169/*parTargetType*/["returnType"], PL$170/*parSourceType*/["returnType"])) && (PL$169/*parTargetType*/["parameters"]["length"] == PL$170/*parSourceType*/["parameters"]["length"]))){
      var PL$171/*allOk*/ = true;
      var PL$73/*i*/ = 0;
      var PL$172/*l*/ = PL$169/*parTargetType*/["parameters"]["length"];
      for(PL$73/*i*/;(PL$73/*i*/ < PL$172/*l*/);++PL$73/*i*/){{
        var PL$173/*tp*/ = PL$169/*parTargetType*/["parameters"][PL$73/*i*/];
        var PL$174/*sp*/ = PL$170/*parSourceType*/["parameters"][PL$73/*i*/];
        if(! this["canSet"](PL$174/*sp*/, PL$173/*tp*/)){
          PL$171/*allOk*/ = false;
        };
        ;}};
      ;
      if(PL$171/*allOk*/){
        return true;
      };
      ;
    };
    ;
    return false;
    ;}),
"canConnect": (function(PL$35/*parType*/, PL$175/*parProperty*/, PL$176/*parFunType*/){
  
    ;
    var PL$48/*cDef*/ = PL$39/*getClass*/(PL$35/*parType*/);
    var PL$75/*map*/ = PL$48/*cDef*/["map"];
    if(PL$75/*map*/["members"][PL$175/*parProperty*/]){
      var PL$49/*mDef*/ = PL$75/*map*/["members"][PL$175/*parProperty*/];
      var PL$177/*propertyType*/ = this["getPropertyType"]({"type": PL$35/*parType*/,
"property": PL$175/*parProperty*/});
      if(! this["canSet"](PL$177/*propertyType*/, PL$176/*parFunType*/)){
        return false;
      };
      ;
      if(! (this["isVar"](PL$177/*propertyType*/) || this["isFunctionType"](PL$177/*propertyType*/))){
        return false;
      };
      ;
      if(! (this["isVar"](PL$176/*parFunType*/) || this["isFunctionType"](PL$176/*parFunType*/))){
        return false;
      };
      ;
      return true;
    };
    ;
    return false;
    ;})};
  PL$128/*cs*/ = PL$37/*classSystem*/;
  var PL$178/*getEffectiveFunctionResultType*/ = (function(PL$176/*parFunType*/){
  
    ;
    var PL$179/*res*/ = {"promiseResolveType": PL$37/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$37/*classSystem*/["getFunctionReturnType"](PL$176/*parFunType*/),
"resolvePromise": (function(PL$57/*parPromise*/, PL$180/*parValue*/){
    
      ;
      PL$57/*parPromise*/["resolve"](PL$180/*parValue*/);
      ;}),
"rejectPromise": (function(PL$57/*parPromise*/, PL$180/*parValue*/){
    
      ;
      PL$57/*parPromise*/["reject"](PL$180/*parValue*/);
      ;})};
    var PL$181/*resultType*/ = PL$179/*res*/["originalResultType"];
    PL$179/*res*/["newPromise"] = (function(){
    
      ;
      return new PL$68/*Promise*/();
      ;});
    if(PL$37/*classSystem*/["isTemporaryTrackedClass"](PL$181/*resultType*/)){
      PL$179/*res*/["isTemporary"] = true;
      var PL$182/*unTrackedType*/ = PL$37/*classSystem*/["getClassFromTemporaryTracked"](PL$181/*resultType*/);
      if(PL$37/*classSystem*/["isPromiseOfClass"](PL$182/*unTrackedType*/)){
        var PL$183/*promiseConstructor*/ = PL$37/*classSystem*/["getTypeConstructor"](PL$182/*unTrackedType*/);
        PL$179/*res*/["newPromise"] = (function(){
        
          ;
          return PL$183/*promiseConstructor*/();
          ;});
        PL$179/*res*/["resolvePromise"] = (function(PL$57/*parPromise*/, PL$180/*parValue*/){
        
          ;
          PL$57/*parPromise*/[0]["resolve"](PL$180/*parValue*/);
          ;});
        PL$179/*res*/["rejectPromise"] = (function(PL$57/*parPromise*/, PL$180/*parValue*/){
        
          ;
          PL$57/*parPromise*/[0]["reject"](PL$180/*parValue*/);
          ;});
        var PL$184/*promiseResolveType*/ = PL$37/*classSystem*/["getClassFromPromiseOf"](PL$182/*unTrackedType*/);
        PL$179/*res*/["promiseResolveType"] = PL$184/*promiseResolveType*/;
      };
      ;
    };
    ;
    return PL$179/*res*/;
    ;});
  var PL$185/*_stringEncodeStr*/ = (function(PL$32/*par*/){
  
    ;
    var PL$186/*s*/ = PL$32/*par*/["replace"](new PL$187/*RegExp*/("\\\\", "g"), "\\\\");
    PL$186/*s*/ = PL$186/*s*/["replace"](new PL$187/*RegExp*/("\\n", "g"), "\\n");
    PL$186/*s*/ = PL$186/*s*/["replace"](new PL$187/*RegExp*/("\\r", "g"), "\\r");
    PL$186/*s*/ = PL$186/*s*/["replace"](new PL$187/*RegExp*/("\\\"", "g"), "\\\"");
    PL$186/*s*/ = PL$186/*s*/["replace"](new PL$187/*RegExp*/("\\u2028", "g"), "\\u2028");
    PL$186/*s*/ = PL$186/*s*/["replace"](new PL$187/*RegExp*/("\\u2029", "g"), "\\u2029");
    return PL$186/*s*/;
    ;});
  var PL$188/*stringEncodeStr*/ = (function(PL$32/*par*/){
  
    ;
    return (("\"" + PL$185/*_stringEncodeStr*/(PL$32/*par*/)) + "\"");
    ;});
  var PL$189/*internals*/ = {"classHider": PL$41/*classHider*/,
"getClass": PL$39/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$188/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$178/*getEffectiveFunctionResultType*/,
"privateClassSystem": PL$46/*privateClassSystem*/};
  PL$7/*provisional*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$8/*temporary*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$9/*promiseOf*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$10/*sync*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$157/*registerSyncClass*/ = PL$189/*internals*/["registerSyncClass"];
  PL$154/*destroySynced*/ = PL$189/*internals*/["destroySynced"];
  var PL$190/*getClassBySyncId*/ = PL$189/*internals*/["getClassBySyncId"];
  PL$104/*syncFun*/ = PL$189/*internals*/["syncFun"];
  PL$108/*syncFunctionFun*/ = PL$189/*internals*/["syncFunctionFun"];
  PL$83/*internalObjects*/ = PL$189/*internals*/["internalObjects"];
  PL$82/*getNewInternalId*/ = PL$189/*internals*/["getNewInternalId"];
  PL$11/*savable*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$12/*makroModule*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$109/*makro*/ = PL$189/*internals*/["makro"];
  PL$13/*codeGeneration*/(PL$37/*classSystem*/, PL$189/*internals*/);
  PL$113/*runtimeError*/ = PL$189/*internals*/["runtimeError"];
  PL$85/*presets*/ = PL$189/*internals*/["presets"];
  PL$150/*promiseland*/["classSystem"] = PL$37/*classSystem*/;
  PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$37/*classSystem*/,
"privateClassSystem": PL$46/*privateClassSystem*/,
"internalObjects": PL$83/*internalObjects*/,
"getClassBySyncId": PL$190/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$178/*getEffectiveFunctionResultType*/});
  return PL$37/*classSystem*/;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();