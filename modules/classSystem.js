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
var PL$35/*JSON*/;try{PL$35/*JSON*/ = JSON;}catch(e){};
var PL$47/*Object*/;try{PL$47/*Object*/ = Object;}catch(e){};
var PL$70/*Promise*/;try{PL$70/*Promise*/ = Promise;}catch(e){};
var PL$154/*promiseland*/;try{PL$154/*promiseland*/ = promiseland;}catch(e){};
var PL$191/*RegExp*/;try{PL$191/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$39/*classSystem*/;
var PL$132/*cs*/;
var PL$161/*registerSyncClass*/;
var PL$158/*destroySynced*/;
var PL$106/*syncFun*/;
var PL$110/*syncFunctionFun*/;
var PL$85/*internalObjects*/;
var PL$84/*getNewInternalId*/;
var PL$111/*makro*/;
var PL$115/*runtimeError*/;
var PL$87/*presets*/;

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
  var PL$18/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$16.reject(e);
      };
    };
  };
  var PL$19/*catch rejected*/ = function(e){
    PL$16.reject(e);
  };
  PL$18/*promiseland exception catcher*/(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$18/*promiseland exception catcher*/(function(PL$20){PL$15/*getModuleData*/ = PL$20["getModuleData"];
    PL$16.resolve(); return;}), PL$19/*catch rejected*/);
    ;
  })();return PL$16;
  })();
  var PL$21/*Tracker*/;
  (function(){
  var PL$22 = new __Promise();
  var PL$24/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$22.reject(e);
      };
    };
  };
  var PL$25/*catch rejected*/ = function(e){
    PL$22.reject(e);
  };
  PL$24/*promiseland exception catcher*/(function(){
  
    ;
    PL$3/*extra*/["TrackerPs"].then(PL$24/*promiseland exception catcher*/(function(PL$26){PL$21/*Tracker*/ = PL$26["Tracker"];
    PL$22.resolve(); return;}), PL$25/*catch rejected*/);
    ;
  })();return PL$22;
  })();
  var PL$27/*Chainable*/;
  (function(){
  var PL$28 = new __Promise();
  var PL$30/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$28.reject(e);
      };
    };
  };
  var PL$31/*catch rejected*/ = function(e){
    PL$28.reject(e);
  };
  PL$30/*promiseland exception catcher*/(function(){
  
    ;
    PL$3/*extra*/["ChainablePs"].then(PL$30/*promiseland exception catcher*/(function(PL$32){PL$27/*Chainable*/ = PL$32["Chainable"];
    PL$28.resolve(); return;}), PL$31/*catch rejected*/);
    ;
  })();return PL$28;
  })();
  var PL$33/*stringify*/ = (function(PL$34/*par*/){
  
    ;
    return PL$35/*JSON*/["stringify"](PL$34/*par*/);
    ;});
  var PL$36/*stringifyInstance*/ = (function(PL$37/*parType*/, PL$38/*parInstance*/){
  
    ;
    if(! PL$39/*classSystem*/["isUniqueClass"](PL$37/*parType*/)){
      throw PL$2/*errorMsg*/["onlyUniqueCanBeStringified"];
    };
    ;
    ;});
  var PL$40/*_actClass*/;
  var PL$41/*getClass*/ = (function(PL$42/*cf*/){
  
    ;
    PL$40/*_actClass*/ = undefined;
    PL$42/*cf*/();
    return PL$40/*_actClass*/;
    ;});
  var PL$43/*classHider*/ = (function(PL$44/*toHide*/){
  
    ;
    return (function(){
    
      ;
      PL$40/*_actClass*/ = PL$44/*toHide*/;
      ;});
    ;});
  var PL$45/*buildInTypesMap*/ = new PL$14/*Map*/();
  PL$45/*buildInTypesMap*/["set"]("var", PL$43/*classHider*/({
    "isVar": true,
    "isReady": true,
    "availableByName": true,
    "builtin": true
  }));
  PL$45/*buildInTypesMap*/["set"]("statement", PL$43/*classHider*/({
    "isStatement": true,
    "isReady": true,
    "availableByName": false,
    "builtin": true
  }));
  PL$45/*buildInTypesMap*/["set"]("int", PL$43/*classHider*/({
    "isInt": true,
    "isReady": true,
    "availableByName": true,
    "builtin": true
  }));
  var PL$46/*hasOwnProperty*/ = PL$47/*Object*/["prototype"]["hasOwnProperty"];
  var PL$48/*privateClassSystem*/ = {
    "stringifyInstance": PL$36/*stringifyInstance*/,
    "stringify": PL$33/*stringify*/,
    "getMemberByName": (function(PL$37/*parType*/, PL$38/*parInstance*/, PL$49/*parMemberName*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      var PL$51/*mDef*/ = PL$50/*cDef*/["map"]["members"][PL$49/*parMemberName*/];
      if(PL$51/*mDef*/){
        return PL$38/*parInstance*/[PL$51/*mDef*/["index"]];
      };
      ;
      if((PL$50/*cDef*/["map"]["freePart"] !== undefined)){
        return PL$38/*parInstance*/[PL$50/*cDef*/["map"]["freePart"]][PL$49/*parMemberName*/];
      };
      ;
      return;
      ;}),
    "getTrackerFromInstance": (function(PL$37/*parType*/, PL$38/*parInstance*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      return PL$38/*parInstance*/[PL$50/*cDef*/["map"]["trackerIdx"]];
      ;}),
    "setMemberByDefFromInstance": (function(PL$37/*parType*/, PL$38/*parInstance*/, PL$52/*parMemberDefinition*/, PL$53/*parValueInstance*/){
    
      ;
      var PL$54/*realInstance*/ = PL$48/*privateClassSystem*/["getRealInstance"](PL$37/*parType*/, PL$38/*parInstance*/);
      PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["index"]] = PL$53/*parValueInstance*/;
      if(PL$39/*classSystem*/["isTrackedClass"](PL$52/*parMemberDefinition*/["type"])){
        var PL$55/*tracker*/ = PL$39/*classSystem*/["getTrackerFromInstance"](PL$37/*parType*/, PL$54/*realInstance*/);
        var PL$50/*cDef*/ = PL$41/*getClass*/(PL$52/*parMemberDefinition*/["type"]);
        var PL$56/*trackMemberIdx*/ = PL$50/*cDef*/["map"]["trackMemberIdx"];
        if(PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]]){
          PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]]();
        };
        ;
        PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]] = PL$53/*parValueInstance*/[PL$56/*trackMemberIdx*/](PL$55/*tracker*/);
      };
      ;
      ;}),
    "getRealInstance": (function(PL$37/*parType*/, PL$38/*parInstance*/){
    
      ;
      if(PL$39/*classSystem*/["isTemporaryTrackedClass"](PL$37/*parType*/)){
        return PL$38/*parInstance*/[0];
      };
      ;
      return PL$38/*parInstance*/;
      ;}),
    "getNonTemporaryType": (function(PL$37/*parType*/){
    
      ;
      if(PL$39/*classSystem*/["isTemporaryTrackedClass"](PL$37/*parType*/)){
        return PL$39/*classSystem*/["getClassFromTemporaryTracked"](PL$37/*parType*/);
      };
      ;
      return PL$37/*parType*/;
      ;}),
    "untrack": (function(PL$37/*parType*/, PL$38/*parInstance*/){
    
      ;
      if((PL$38/*parInstance*/ && PL$39/*classSystem*/["isTemporaryTrackedClass"](PL$37/*parType*/))){
        PL$38/*parInstance*/[1]();
      };
      ;
      ;}),
    "hasOwnProperty": (function(PL$57/*obj*/, PL$58/*property*/){
    
      ;
      return PL$46/*hasOwnProperty*/["apply"](PL$57/*obj*/, [
        PL$58/*property*/
      ]);
      ;}),
    "resolvePromise": (function(PL$37/*parType*/, PL$59/*parPromise*/, PL$38/*parInstance*/){
    
      ;
      this["getRealInstance"](PL$37/*parType*/, PL$59/*parPromise*/)["resolve"](PL$38/*parInstance*/);
      return PL$59/*parPromise*/;
      ;}),
    "rejectPromise": (function(PL$37/*parType*/, PL$59/*parPromise*/, PL$38/*parInstance*/){
    
      ;
      this["getRealInstance"](PL$37/*parType*/, PL$59/*parPromise*/)["reject"](PL$38/*parInstance*/);
      return PL$59/*parPromise*/;
      ;})
  };
  var PL$60/*pcs*/ = PL$48/*privateClassSystem*/;
  PL$39/*classSystem*/ = {
    "isSameType": (function(PL$61/*type1*/, PL$62/*type2*/){
    
      ;
      if((PL$61/*type1*/ === PL$62/*type2*/)){
        return true;
      };
      ;
      var PL$63/*cDef1*/ = PL$41/*getClass*/(PL$61/*type1*/);
      if(PL$63/*cDef1*/["provisional"]){
        if(! PL$63/*cDef1*/["type"]){
          return false;
        };
        ;
        PL$61/*type1*/ = PL$63/*cDef1*/["type"];
        PL$63/*cDef1*/ = PL$41/*getClass*/(PL$61/*type1*/);
      };
      ;
      var PL$64/*cDef2*/ = PL$41/*getClass*/(PL$62/*type2*/);
      if(PL$64/*cDef2*/["provisional"]){
        if(! PL$64/*cDef2*/["type"]){
          return false;
        };
        ;
        PL$62/*type2*/ = PL$64/*cDef2*/["type"];
        PL$64/*cDef2*/ = PL$41/*getClass*/(PL$62/*type2*/);
      };
      ;
      if((PL$61/*type1*/ === PL$62/*type2*/)){
        return true;
      };
      ;
      return false;
      ;}),
    "createClass": (function(PL$65/*classLiteral*/, PL$66/*parDefaults*/){
    
      ;
      var PL$67/*self*/ = this;
      return PL$67/*self*/["_createClass"](PL$65/*classLiteral*/, PL$66/*parDefaults*/);
      ;}),
    "_membersDefined": (function(PL$65/*classLiteral*/){
    
      ;
      var PL$67/*self*/ = this;
      var PL$68/*cnt*/ = 1;
      var PL$69/*retPs*/ = new PL$70/*Promise*/();
      var PL$71/*check*/ = (function(){
      
        ;
        if(PL$68/*cnt*/){
          return;
        };
        ;
        PL$69/*retPs*/["resolve"](PL$65/*classLiteral*/);
        ;});
      var PL$72/*addMember*/ = (function(PL$73/*m*/){
      
        ;
        ++PL$68/*cnt*/;
        PL$67/*self*/["definitionPromise"](PL$73/*m*/["type"])["then"]((function(PL$74/*definedType*/){
        
          ;
          PL$73/*m*/["type"] = PL$74/*definedType*/;
          --PL$68/*cnt*/;
          PL$71/*check*/();
          ;}));
        ;});
      if(PL$65/*classLiteral*/["members"]){
        var PL$75/*i*/ = 0;
        for(PL$75/*i*/;(PL$75/*i*/ < PL$65/*classLiteral*/["members"]["length"]);++PL$75/*i*/){{
          PL$72/*addMember*/(PL$65/*classLiteral*/["members"][PL$75/*i*/]);}};
        ;
      };
      ;
      --PL$68/*cnt*/;
      PL$71/*check*/();
      return PL$69/*retPs*/;
      ;}),
    "_createClass": (function(PL$65/*classLiteral*/, PL$66/*parDefaults*/){
    
      ;
      var PL$76/*cAr*/ = [
        
      ];
      var PL$67/*self*/ = this;
      var PL$77/*map*/ = {
        "members": {
          
        },
        "membersByIndex": {
          
        },
        "membersAr": [
          
        ],
        "extends": [
          
        ]
      };
      var PL$50/*cDef*/ = {
        "constructor": undefined,
        "map": PL$77/*map*/,
        "isReady": false,
        "track": ((PL$65/*classLiteral*/["track"] || PL$65/*classLiteral*/["sync"]) ? true : false),
        "sync": PL$65/*classLiteral*/["sync"],
        "unique": PL$65/*classLiteral*/["unique"],
        "savable": PL$65/*classLiteral*/["savable"],
        "readyPromise": new PL$70/*Promise*/(),
        "syncMembers": [
          
        ],
        "moduleName": PL$65/*classLiteral*/["moduleName"],
        "className": PL$65/*classLiteral*/["className"],
        "moduleHash": PL$65/*classLiteral*/["hashStr"]
      };
      var PL$42/*cf*/ = PL$43/*classHider*/(PL$50/*cDef*/);
      if(PL$50/*cDef*/["sync"]){
        if(PL$50/*cDef*/["sync"]["serve"]){
          PL$50/*cDef*/["syncServe"] = true;
        };
        ;
      };
      ;
      if(PL$50/*cDef*/["savable"]){
        PL$50/*cDef*/["unique"] = true;
      };
      ;
      PL$76/*cAr*/["push"](PL$42/*cf*/);
      var PL$10/*sync*/ = (PL$65/*classLiteral*/["sync"] ? true : false);
      var PL$78/*syncAll*/ = false;
      if(PL$10/*sync*/){
        if(PL$65/*classLiteral*/["sync"]["all"]){
          PL$78/*syncAll*/ = true;
        };
        ;
      };
      ;
      var PL$79/*syncCnt*/ = 0;
      var PL$80/*trackerIdx*/;
      var PL$81/*trackRootIdx*/;
      var PL$56/*trackMemberIdx*/;
      if(PL$50/*cDef*/["track"]){
        PL$77/*map*/["trackerIdx"] = PL$76/*cAr*/["length"];
        PL$76/*cAr*/["push"](undefined);
        PL$77/*map*/["trackRootIdx"] = PL$76/*cAr*/["length"];
        PL$76/*cAr*/["push"](undefined);
        PL$77/*map*/["trackMemberIdx"] = PL$76/*cAr*/["length"];
        PL$76/*cAr*/["push"](undefined);
        PL$80/*trackerIdx*/ = PL$77/*map*/["trackerIdx"];
        PL$81/*trackRootIdx*/ = PL$77/*map*/["trackRootIdx"];
        PL$56/*trackMemberIdx*/ = PL$77/*map*/["trackMemberIdx"];
      };
      ;
      if(PL$10/*sync*/){
        PL$77/*map*/["syncDataIdx"] = PL$76/*cAr*/["length"];
        PL$76/*cAr*/["push"]((function(){
        
          ;
          var PL$67/*self*/ = this;
          var PL$82/*internalId*/;
          var PL$83/*syncData*/ = {
            "getInternalId": (function(){
            
              ;
              if(PL$82/*internalId*/){
                return PL$82/*internalId*/;
              };
              ;
              PL$82/*internalId*/ = PL$84/*getNewInternalId*/();
              PL$85/*internalObjects*/[PL$82/*internalId*/] = PL$67/*self*/;
              PL$83/*syncData*/["internalId"] = PL$82/*internalId*/;
              return PL$82/*internalId*/;
              ;}),
            "transports": [
              
            ]
          };
          this[PL$77/*map*/["syncDataIdx"]] = (function(){
          
            ;
            return PL$83/*syncData*/;
            ;});
          return PL$83/*syncData*/;
          ;}));
      };
      ;
      if(PL$65/*classLiteral*/["hasFreePart"]){
        var PL$86/*freepart*/ = {
          
        };
        PL$77/*map*/["freePart"] = PL$76/*cAr*/["length"];
        PL$76/*cAr*/["push"](PL$86/*freepart*/);
        PL$77/*map*/["getMemberCode"] = PL$87/*presets*/["getMemberCode"](PL$77/*map*/["freePart"]);
        PL$77/*map*/["setMemberCode"] = PL$87/*presets*/["setMemberCode"](PL$77/*map*/["freePart"]);
      };
      ;
      var PL$88/*helpAr*/ = [
        
      ];
      var PL$89/*makeHelpAr*/ = (function(){
      
        ;
        return PL$88/*helpAr*/["slice"]();
        ;});
      PL$77/*map*/["connectIdx"] = PL$76/*cAr*/["length"];
      var PL$90/*conIdx*/ = PL$77/*map*/["connectIdx"];
      PL$76/*cAr*/["push"]((function(){
      var PL$95/*arguments*/ = arguments;
      
        ;
        var PL$88/*helpAr*/ = PL$89/*makeHelpAr*/();
        this[PL$90/*conIdx*/] = (function(PL$91/*idx*/, PL$92/*fun*/, PL$93/*base*/){
        
          ;
          var PL$94/*chain*/ = PL$88/*helpAr*/[PL$91/*idx*/];
          if(! PL$94/*chain*/){
            PL$94/*chain*/ = PL$27/*Chainable*/(this, PL$91/*idx*/);
            PL$88/*helpAr*/[PL$91/*idx*/] = PL$94/*chain*/;
          };
          ;
          return PL$94/*chain*/(PL$92/*fun*/, PL$93/*base*/);
          ;});
        return this[PL$90/*conIdx*/]["apply"](this, PL$95/*arguments*/);
        ;}));
      var PL$96/*constructorDef*/;
      var PL$97/*constructorFun*/;
      var PL$98/*destroyDef*/;
      var PL$99/*destroyFun*/;
      var PL$100/*untrackIdxAr*/ = [
        
      ];
      var PL$72/*addMember*/ = (function(PL$73/*m*/){
      
        ;
        var PL$51/*mDef*/ = {
          "index": PL$76/*cAr*/["length"],
          "name": PL$73/*m*/["name"]
        };
        if((PL$78/*syncAll*/ || PL$73/*m*/["sync"])){
          PL$51/*mDef*/["sync"] = true;
        };
        ;
        if(PL$73/*m*/["meta"]){
          PL$51/*mDef*/["meta"] = PL$73/*m*/["meta"];
        };
        ;
        PL$51/*mDef*/["type"] = PL$73/*m*/["type"];
        var PL$101/*mType*/ = PL$73/*m*/["type"];
        var PL$102/*isFunction*/ = PL$67/*self*/["isFunctionType"](PL$51/*mDef*/["type"]);
        var PL$103/*memberIdx*/ = PL$51/*mDef*/["index"];
        var PL$104/*isTrackedMember*/ = PL$67/*self*/["isTrackedClass"](PL$51/*mDef*/["type"]);
        if(PL$50/*cDef*/["unique"]){
          if((PL$73/*m*/["name"] == "id")){
            PL$50/*cDef*/["idIndex"] = PL$103/*memberIdx*/;
            PL$50/*cDef*/["idDef"] = PL$51/*mDef*/;
          };
          ;
        };
        ;
        if(PL$51/*mDef*/["sync"]){
          PL$51/*mDef*/["hasSetter"] = true;
          if(PL$104/*isTrackedMember*/){
            PL$51/*mDef*/["defaultSetter"] = (function(PL$105/*vAr*/){
            
              ;
              PL$106/*syncFun*/(this, PL$103/*memberIdx*/, PL$101/*mType*/, PL$105/*vAr*/[0]);
              return PL$105/*vAr*/;
              ;});
          }else{
          PL$51/*mDef*/["defaultSetter"] = (function(PL$107/*v*/){
          
            ;
            PL$106/*syncFun*/(this, PL$103/*memberIdx*/, PL$101/*mType*/, PL$107/*v*/);
            return PL$107/*v*/;
            ;});
          };
          ;
          PL$50/*cDef*/["syncMembers"]["push"](PL$51/*mDef*/);
        };
        ;
        if(PL$73/*m*/["noSave"]){
          PL$51/*mDef*/["noSave"] = true;
        };
        ;
        PL$77/*map*/["members"][PL$73/*m*/["name"]] = PL$51/*mDef*/;
        PL$77/*map*/["membersByIndex"][PL$51/*mDef*/["index"]] = PL$51/*mDef*/;
        PL$77/*map*/["membersAr"]["push"](PL$51/*mDef*/);
        var PL$108/*def*/ = (PL$66/*parDefaults*/ ? PL$66/*parDefaults*/[PL$73/*m*/["name"]] : undefined);
        PL$51/*mDef*/["defaultValue"] = PL$108/*def*/;
        if((PL$102/*isFunction*/ && PL$51/*mDef*/["sync"])){
          if(! ((PL$73/*m*/["name"] == "constructor") || (PL$73/*m*/["name"] == "destroy"))){
            var PL$109/*originalFun*/ = PL$108/*def*/;
            PL$108/*def*/ = (function(){
            var PL$95/*arguments*/ = arguments;
            
              ;
              PL$110/*syncFunctionFun*/(this, PL$103/*memberIdx*/, PL$101/*mType*/, PL$95/*arguments*/);
              return PL$109/*originalFun*/["apply"](this, PL$95/*arguments*/);
              ;});
          };
          ;
        };
        ;
        PL$76/*cAr*/["push"](PL$108/*def*/);
        if(PL$51/*mDef*/["hasSetter"]){
          PL$51/*mDef*/["setterIdx"] = PL$76/*cAr*/["length"];
          PL$76/*cAr*/["push"](PL$51/*mDef*/["defaultSetter"]);
        };
        ;
        if((PL$73/*m*/["name"] == "constructor")){
          PL$96/*constructorDef*/ = PL$51/*mDef*/;
          PL$97/*constructorFun*/ = PL$108/*def*/;
        };
        ;
        if((PL$73/*m*/["name"] == "destroy")){
          PL$98/*destroyDef*/ = PL$51/*mDef*/;
          PL$99/*destroyFun*/ = PL$108/*def*/;
        };
        ;
        PL$51/*mDef*/["getCode"] = [
          PL$111/*makro*/["SELF"], 
          (("[" + PL$51/*mDef*/["index"]) + "]")
        ];
        if(PL$51/*mDef*/["hasSetter"]){
          PL$51/*mDef*/["setCode"] = [
            (((("(function(s, v){ v = s[" + PL$51/*mDef*/["setterIdx"]) + "](v); s[") + PL$51/*mDef*/["index"]) + "] "), 
            PL$111/*makro*/["OPERATOR"], 
            " v; return v; })(", 
            PL$111/*makro*/["SELF"], 
            ", ", 
            PL$111/*makro*/["VALUE"], 
            ")"
          ];
        }else{
        PL$51/*mDef*/["setCode"] = [
          PL$111/*makro*/["SELF"], 
          (("[" + PL$51/*mDef*/["index"]) + "] "), 
          PL$111/*makro*/["OPERATOR"], 
          " ", 
          PL$111/*makro*/["VALUE"]
        ];
        };
        ;
        if(PL$104/*isTrackedMember*/){
          var PL$112/*mCDef*/ = PL$41/*getClass*/(PL$51/*mDef*/["type"]);
          var PL$113/*memberTrackMemberIdx*/ = PL$112/*mCDef*/["map"]["trackMemberIdx"];
          var PL$114/*memberTrackRootIdx*/ = PL$112/*mCDef*/["map"]["trackRootIdx"];
          PL$51/*mDef*/["trackIndex"] = PL$76/*cAr*/["length"];
          PL$76/*cAr*/["push"](undefined);
          PL$100/*untrackIdxAr*/["push"](PL$51/*mDef*/["trackIndex"]);
          if(PL$50/*cDef*/["track"]){
            if(PL$51/*mDef*/["hasSetter"]){
              PL$51/*mDef*/["setCode"] = [
                (((((("(function(s, v){ var vAr = [v, v[" + PL$114/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$51/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$51/*mDef*/["index"]) + "] "), 
                PL$111/*makro*/["OPERATOR"], 
                ((((((((((" v; if(s[" + PL$51/*mDef*/["trackIndex"]) + "]){ s[") + PL$51/*mDef*/["trackIndex"]) + "](); }; s[") + PL$51/*mDef*/["trackIndex"]) + "] = v[") + PL$113/*memberTrackMemberIdx*/) + "](s[") + PL$80/*trackerIdx*/) + "]); vAr[1](); return v; })("), 
                PL$111/*makro*/["SELF"], 
                ", ", 
                PL$111/*makro*/["VALUE"], 
                ")"
              ];
              PL$51/*mDef*/["setCodeFromTemporary"] = [
                (((("(function(s, vAr){ vAr = s[" + PL$51/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$51/*mDef*/["index"]) + "] "), 
                PL$111/*makro*/["OPERATOR"], 
                ((((((((((" v; if(s[" + PL$51/*mDef*/["trackIndex"]) + "]){ s[") + PL$51/*mDef*/["trackIndex"]) + "](); }; s[") + PL$51/*mDef*/["trackIndex"]) + "] = v[") + PL$113/*memberTrackMemberIdx*/) + "](s[") + PL$80/*trackerIdx*/) + "]); vAr[1](); return v; })("), 
                PL$111/*makro*/["SELF"], 
                ", ", 
                PL$111/*makro*/["VALUE"], 
                ")"
              ];
            }else{
            PL$51/*mDef*/["setCode"] = [
              (("(function(s, v){ s[" + PL$51/*mDef*/["index"]) + "] "), 
              PL$111/*makro*/["OPERATOR"], 
              ((((((((((" v; if(s[" + PL$51/*mDef*/["trackIndex"]) + "]){ s[") + PL$51/*mDef*/["trackIndex"]) + "](); }; s[") + PL$51/*mDef*/["trackIndex"]) + "] = v[") + PL$113/*memberTrackMemberIdx*/) + "](s[") + PL$80/*trackerIdx*/) + "]); return v; })("), 
              PL$111/*makro*/["SELF"], 
              ", ", 
              PL$111/*makro*/["VALUE"], 
              ")"
            ];
            PL$51/*mDef*/["setCodeFromTemporary"] = [
              (("(function(s, vAr){ var v = vAr[0]; s[" + PL$51/*mDef*/["index"]) + "] "), 
              PL$111/*makro*/["OPERATOR"], 
              ((((((((((" v; if(s[" + PL$51/*mDef*/["trackIndex"]) + "]){ s[") + PL$51/*mDef*/["trackIndex"]) + "](); }; s[") + PL$51/*mDef*/["trackIndex"]) + "] = v[") + PL$113/*memberTrackMemberIdx*/) + "](s[") + PL$80/*trackerIdx*/) + "]); vAr[1](); return v; })("), 
              PL$111/*makro*/["SELF"], 
              ", ", 
              PL$111/*makro*/["VALUE"], 
              ")"
            ];
            };
            ;
          }else{
          PL$51/*mDef*/["setCode"] = [
            PL$115/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])
          ];
          PL$51/*mDef*/["setCodeFromTemporary"] = [
            PL$115/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])
          ];
          };
          ;
        };
        ;
        PL$51/*mDef*/["connectFunCode"] = [
          PL$111/*makro*/["SELF"], 
          (((("[" + PL$77/*map*/["connectIdx"]) + "](") + PL$51/*mDef*/["index"]) + ", "), 
          PL$111/*makro*/["VALUE"], 
          ")"
        ];
        PL$51/*mDef*/["connectSlotCode"] = [
          PL$111/*makro*/["SELF"], 
          (((("[" + PL$77/*map*/["connectIdx"]) + "](") + PL$51/*mDef*/["index"]) + ", "), 
          PL$111/*makro*/["VALUE"], 
          "[", 
          PL$111/*makro*/["VALUEPROPERTY"], 
          "], ", 
          PL$111/*makro*/["VALUE"], 
          ")"
        ];
        ;});
      var PL$116/*createMembersPs*/ = (function(){
      
        ;
        var PL$117/*donePs*/ = new PL$70/*Promise*/();
        PL$67/*self*/["_membersDefined"](PL$65/*classLiteral*/)["then"]((function(){
        
          ;
          var PL$75/*i*/;
          var PL$118/*passedConstructorType*/;
          if(PL$65/*classLiteral*/["members"]){
            for(PL$75/*i*/ = 0;(PL$75/*i*/ < PL$65/*classLiteral*/["members"]["length"]);++PL$75/*i*/){{
              var PL$73/*m*/ = PL$65/*classLiteral*/["members"][PL$75/*i*/];
              if((PL$73/*m*/["name"] == "constructor")){
                PL$118/*passedConstructorType*/ = PL$73/*m*/["type"];
                break;;
              };
              ;}};
            ;
          };
          ;
          if(PL$118/*passedConstructorType*/){
            var PL$119/*conDef*/ = PL$41/*getClass*/(PL$118/*passedConstructorType*/);
            PL$50/*cDef*/["constructorType"] = PL$67/*self*/["createFunctionType"]({
              "return": PL$42/*cf*/,
              "arguments": PL$119/*conDef*/["arguments"]
            });
          }else{
          PL$50/*cDef*/["constructorType"] = PL$67/*self*/["createFunctionType"]({
            "return": PL$42/*cf*/
          });
          };
          ;
          PL$50/*cDef*/["constructorTypeIntern"] = PL$50/*cDef*/["constructorType"];
          if(PL$50/*cDef*/["unique"]){
            PL$65/*classLiteral*/["members"] = (PL$65/*classLiteral*/["members"] || [
              
            ]);
            PL$50/*cDef*/["idType"] = PL$67/*self*/["getFunctionArgumentType"](PL$50/*cDef*/["constructorTypeIntern"], 0);
            PL$65/*classLiteral*/["members"]["unshift"]({
              "name": "id",
              "type": PL$50/*cDef*/["idType"]
            });
            if(PL$50/*cDef*/["savable"]){
              PL$65/*classLiteral*/["members"]["unshift"]({
                "name": "save",
                "type": PL$39/*classSystem*/["getBuiltinType"]("var"),
                "noSave": true
              });
              PL$66/*parDefaults*/["save"] = (function(){
              var PL$120 = new __Promise();
              var PL$122/*promiseland exception catcher*/ = function(code){
                return function(res){
                  try{ code(res); }catch(e){
                    PL$120.reject(e);
                  };
                };
              };
              var PL$123/*catch rejected*/ = function(e){
                PL$120.reject(e);
              };
              var PL$124/*this*/ = this;
              PL$122/*promiseland exception catcher*/(function(){
              
                ;
                PL$60/*pcs*/["saveInstance"](PL$42/*cf*/, PL$124/*this*/).then(PL$122/*promiseland exception catcher*/(function(PL$125){PL$125;
                PL$120.resolve(); return;}), PL$123/*catch rejected*/);
                ;
              })();return PL$120;
              });
              PL$65/*classLiteral*/["members"]["unshift"]({
                "name": "load",
                "type": PL$39/*classSystem*/["getBuiltinType"]("var"),
                "noSave": true
              });
              PL$66/*parDefaults*/["load"] = (function(){
              var PL$126 = new __Promise();
              var PL$128/*promiseland exception catcher*/ = function(code){
                return function(res){
                  try{ code(res); }catch(e){
                    PL$126.reject(e);
                  };
                };
              };
              var PL$129/*catch rejected*/ = function(e){
                PL$126.reject(e);
              };
              var PL$130/*this*/ = this;
              PL$128/*promiseland exception catcher*/(function(){
              
                ;
                PL$60/*pcs*/["loadInstance"](PL$42/*cf*/, PL$130/*this*/).then(PL$128/*promiseland exception catcher*/(function(PL$131){PL$131;
                PL$126.resolve(); return;}), PL$129/*catch rejected*/);
                ;
              })();return PL$126;
              });
              PL$119/*conDef*/ = PL$41/*getClass*/(PL$50/*cDef*/["constructorTypeIntern"]);
              PL$50/*cDef*/["constructorReturnType"] = PL$67/*self*/["_createPromiseOfClass"](PL$60/*pcs*/["getNonTemporaryType"](PL$119/*conDef*/["return"]));
              PL$50/*cDef*/["constructorType"] = PL$67/*self*/["createFunctionType"]({
                "return": PL$50/*cDef*/["constructorReturnType"],
                "arguments": PL$119/*conDef*/["arguments"]
              });
              PL$50/*cDef*/["constructorReturnType"] = PL$132/*cs*/["getFunctionReturnType"](PL$50/*cDef*/["constructorType"]);
            };
            ;
          };
          ;
          if(PL$65/*classLiteral*/["members"]){
            PL$75/*i*/ = 0;
            for(PL$75/*i*/;(PL$75/*i*/ < PL$65/*classLiteral*/["members"]["length"]);++PL$75/*i*/){{
              PL$72/*addMember*/(PL$65/*classLiteral*/["members"][PL$75/*i*/]);}};
            ;
          };
          ;
          PL$117/*donePs*/["resolve"]();
          ;}));
        return PL$117/*donePs*/;
        ;});
      var PL$133/*memberPs*/ = PL$116/*createMembersPs*/();
      var PL$75/*i*/;
      var PL$134/*finalPs*/ = new PL$70/*Promise*/();
      PL$133/*memberPs*/["then"]((function(){
      
        ;
        var PL$75/*i*/;
        var PL$135/*simpleConstructor*/ = true;
        var PL$136/*hasDestructor*/ = false;
        if((PL$50/*cDef*/["track"] || PL$50/*cDef*/["unique"])){
          PL$135/*simpleConstructor*/ = false;
        };
        ;
        if((PL$50/*cDef*/["track"] || PL$10/*sync*/)){
          PL$136/*hasDestructor*/ = true;
        };
        ;
        for(PL$75/*i*/ = 0;(PL$75/*i*/ < PL$76/*cAr*/["length"]);++PL$75/*i*/){{
          PL$88/*helpAr*/["push"](undefined);}};
        ;
        PL$50/*cDef*/["constructorArguments"] = [
          
        ];
        if(PL$135/*simpleConstructor*/){
          if(PL$65/*classLiteral*/["hasFreePart"]){
            var PL$137/*proto*/ = {
              
            };
            if(PL$66/*parDefaults*/){
              for(PL$75/*i*/ in PL$66/*parDefaults*/){
                if(! PL$77/*map*/["members"][PL$75/*i*/]){
                  PL$137/*proto*/[PL$75/*i*/] = PL$66/*parDefaults*/[PL$75/*i*/];
                };
                ;};
              ;
            };
            ;
            var PL$138/*freeFun*/ = (function(){
            
              ;
              ;});
            PL$138/*freeFun*/["prototype"] = PL$137/*proto*/;
            var PL$139/*f*/ = PL$77/*map*/["freePart"];
            PL$50/*cDef*/["constructor"] = (function(){
            
              ;
              var PL$140/*r*/ = PL$76/*cAr*/["slice"]();
              PL$140/*r*/[PL$139/*f*/] = new PL$138/*freeFun*/();
              return PL$140/*r*/;
              ;});
          }else{
          PL$50/*cDef*/["constructor"] = (function(){
          
            ;
            return PL$76/*cAr*/["slice"]();
            ;});
          };
          ;
          if(PL$96/*constructorDef*/){
            var PL$141/*realConstructor*/ = PL$50/*cDef*/["constructor"];
            PL$50/*cDef*/["constructor"] = (function(){
            var PL$95/*arguments*/ = arguments;
            
              ;
              var PL$142/*instance*/ = PL$141/*realConstructor*/();
              PL$97/*constructorFun*/["apply"](PL$142/*instance*/, PL$95/*arguments*/);
              return PL$142/*instance*/;
              ;});
          };
          ;
        }else{
        var PL$143/*constructorStr*/ = "";
        var PL$144/*importObj*/ = {
          
        };
        var PL$145/*importVar*/ = (function(PL$107/*v*/, PL$146/*name*/){
        
          ;
          PL$144/*importObj*/[PL$146/*name*/] = PL$107/*v*/;
          ;});
        PL$143/*constructorStr*/ += "var r;";
        if(PL$50/*cDef*/["unique"]){
          var PL$147/*uniqueMap*/ = new PL$14/*Map*/();
          var PL$148/*hasVarId*/ = PL$67/*self*/["isVar"](PL$50/*cDef*/["idType"]);
          var PL$149/*idType*/ = PL$50/*cDef*/["idType"];
          PL$145/*importVar*/(PL$149/*idType*/, "idType");
          var PL$150/*idDef*/ = PL$50/*cDef*/["idDef"];
          if(PL$50/*cDef*/["savable"]){
            PL$145/*importVar*/(PL$132/*cs*/, "cs");
            PL$145/*importVar*/(PL$50/*cDef*/, "cDef");
            PL$145/*importVar*/(PL$132/*cs*/["getTypeConstructor"](PL$60/*pcs*/["getNonTemporaryType"](PL$50/*cDef*/["constructorReturnType"])), "returnPromiseConstructor");
            PL$143/*constructorStr*/ += "var resPs = new returnPromiseConstructor;";
          };
          ;
          if(PL$148/*hasVarId*/){
            PL$145/*importVar*/(PL$33/*stringify*/, "stringify");
            PL$143/*constructorStr*/ += "var key = stringify(arguments[0]);";
          }else{
          PL$145/*importVar*/(PL$33/*stringify*/, "stringifyInstance");
          PL$143/*constructorStr*/ += "var key = stringifyInstance(idType, arguments[0]);";
          };
          ;
          PL$145/*importVar*/(PL$147/*uniqueMap*/, "uniqueMap");
          PL$145/*importVar*/(PL$48/*privateClassSystem*/, "privateClassSystem");
          PL$143/*constructorStr*/ += "r = uniqueMap.get(key);";
          PL$143/*constructorStr*/ += "if (r){";
          PL$143/*constructorStr*/ += "if (arguments[0]){";
          PL$143/*constructorStr*/ += "privateClassSystem.untrack(idType, arguments[0]);";
          PL$143/*constructorStr*/ += "};";
          PL$143/*constructorStr*/ += "}else{";
        };
        ;
        PL$145/*importVar*/(PL$76/*cAr*/, "cAr");
        PL$143/*constructorStr*/ += "r = cAr.slice();";
        if(PL$65/*classLiteral*/["hasFreePart"]){
          PL$137/*proto*/ = {
            
          };
          if(PL$66/*parDefaults*/){
            for(PL$75/*i*/ in PL$66/*parDefaults*/){
              if(! PL$77/*map*/["members"][PL$75/*i*/]){
                PL$137/*proto*/[PL$75/*i*/] = PL$66/*parDefaults*/[PL$75/*i*/];
              };
              ;};
            ;
          };
          ;
          PL$138/*freeFun*/ = (function(){
          
            ;
            ;});
          PL$138/*freeFun*/["prototype"] = PL$137/*proto*/;
          var PL$151/*freeIndex*/ = PL$77/*map*/["freePart"];
          PL$145/*importVar*/(PL$138/*freeFun*/, "freeFun");
          PL$145/*importVar*/(PL$151/*freeIndex*/, "freeIndex");
          PL$143/*constructorStr*/ += "r[freeIndex] = new freeFun();";
        };
        ;
        if(PL$96/*constructorDef*/){
          PL$145/*importVar*/(PL$97/*constructorFun*/, "constructorFun");
          PL$143/*constructorStr*/ += "constructorFun.apply(r, arguments);";
        };
        ;
        if(PL$50/*cDef*/["unique"]){
          PL$145/*importVar*/(PL$42/*cf*/, "cf");
          PL$145/*importVar*/(PL$150/*idDef*/, "idDef");
          PL$143/*constructorStr*/ += "privateClassSystem.setMemberByDefFromInstance(cf, r, idDef, arguments[0]);";
          PL$143/*constructorStr*/ += "uniqueMap.set(key, r);";
          PL$143/*constructorStr*/ += "r.map = uniqueMap;";
          PL$143/*constructorStr*/ += "r.key = key;";
          if(PL$50/*cDef*/["savable"]){
            PL$143/*constructorStr*/ += "var doLoad = true;";
          };
          ;
          PL$143/*constructorStr*/ += "};";
        };
        ;
        PL$143/*constructorStr*/ += "var realInstance = r;";
        if(PL$50/*cDef*/["track"]){
          PL$145/*importVar*/(PL$21/*Tracker*/, "Tracker");
          PL$145/*importVar*/((function(){
          var PL$95/*arguments*/ = arguments;
          
            ;
            PL$99/*destroyFun*/["apply"](this, PL$95/*arguments*/);
            ;}), "destroyFun");
          PL$145/*importVar*/(PL$80/*trackerIdx*/, "trackerIdx");
          PL$145/*importVar*/(PL$81/*trackRootIdx*/, "trackRootIdx");
          PL$145/*importVar*/(PL$56/*trackMemberIdx*/, "trackMemberIdx");
          PL$143/*constructorStr*/ += "var t = Tracker(function(){";
          PL$143/*constructorStr*/ += "destroyFun.apply(realInstance);";
          PL$143/*constructorStr*/ += "});";
          PL$143/*constructorStr*/ += "realInstance[trackerIdx] = t[0];";
          PL$143/*constructorStr*/ += "realInstance[trackRootIdx] = t[1];";
          PL$143/*constructorStr*/ += "realInstance[trackMemberIdx] = t[2];";
          PL$143/*constructorStr*/ += "r = [realInstance, realInstance[trackRootIdx]()];";
        };
        ;
        PL$143/*constructorStr*/ += "var nonPromiseResult = r;";
        if(PL$50/*cDef*/["savable"]){
          PL$145/*importVar*/(PL$60/*pcs*/, "pcs");
          PL$143/*constructorStr*/ += "if (doLoad){";
          PL$143/*constructorStr*/ += "pcs.loadInstance(cf, realInstance).then(function(){";
          PL$143/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
          PL$143/*constructorStr*/ += "}, function(e){ pcs.rejectPromise(cDef.constructorReturnType, resPs, e); });";
          PL$143/*constructorStr*/ += "}else{";
          PL$143/*constructorStr*/ += "pcs.resolvePromise(cDef.constructorReturnType, resPs, nonPromiseResult);";
          PL$143/*constructorStr*/ += "};";
          PL$143/*constructorStr*/ += "r = resPs;";
        };
        ;
        PL$143/*constructorStr*/ += "return r;";
        var PL$152/*constructorObj*/ = {
          
        };
        PL$145/*importVar*/(PL$152/*constructorObj*/, "constructorObj");
        var PL$153/*wrapStr*/ = (("constructorObj.fun = function(){" + PL$143/*constructorStr*/) + "};");
        PL$154/*promiseland*/["javascriptEval"](PL$153/*wrapStr*/, PL$144/*importObj*/);
        PL$50/*cDef*/["constructor"] = PL$152/*constructorObj*/["fun"];
        };
        ;
        if(PL$136/*hasDestructor*/){
          var PL$155/*destructorStr*/ = "";
          var PL$156/*destructorImportObj*/ = {
            
          };
          var PL$157/*destructorImportVar*/ = (function(PL$107/*v*/, PL$146/*name*/){
          
            ;
            PL$156/*destructorImportObj*/[PL$146/*name*/] = PL$107/*v*/;
            ;});
          if(PL$10/*sync*/){
            PL$157/*destructorImportVar*/(PL$158/*destroySynced*/, "destroySynced");
            PL$157/*destructorImportVar*/(PL$39/*classSystem*/, "classSystem");
            PL$155/*destructorStr*/ += "var syncData = classSystem.getSyncData(this);";
            PL$155/*destructorStr*/ += "destroySynced(syncData);";
          };
          ;
          if(PL$50/*cDef*/["track"]){
            var PL$159/*_destroyFun*/;
            if(PL$100/*untrackIdxAr*/["length"]){
              PL$157/*destructorImportVar*/(PL$100/*untrackIdxAr*/, "untrackIdxAr");
              PL$155/*destructorStr*/ += "var i;";
              PL$155/*destructorStr*/ += "for (i = 0; i < untrackIdxAr.length; ++i){";
              PL$155/*destructorStr*/ += "var curIdx = untrackIdxAr[i];";
              PL$155/*destructorStr*/ += "var tFun = this[curIdx];";
              PL$155/*destructorStr*/ += "this[curIdx] = undefined;";
              PL$155/*destructorStr*/ += "if (tFun){";
              PL$155/*destructorStr*/ += "tFun();";
              PL$155/*destructorStr*/ += "};";
              PL$155/*destructorStr*/ += "};";
            };
            ;
            if(PL$50/*cDef*/["unique"]){
              PL$155/*destructorStr*/ += "this.map.delete(this.key);";
            };
            ;
          };
          ;
          if(PL$98/*destroyDef*/){
            PL$157/*destructorImportVar*/(PL$99/*destroyFun*/, "_destroyFun");
            PL$155/*destructorStr*/ += "_destroyFun.apply(this);";
          };
          ;
          PL$155/*destructorStr*/ += "this.splice(0,this.length);";
          var PL$160/*destructorObj*/ = {
            
          };
          PL$157/*destructorImportVar*/(PL$160/*destructorObj*/, "destructorObj");
          PL$153/*wrapStr*/ = (("destructorObj.fun = function(){" + PL$155/*destructorStr*/) + "};");
          PL$154/*promiseland*/["javascriptEval"](PL$153/*wrapStr*/, PL$156/*destructorImportObj*/);
          PL$99/*destroyFun*/ = PL$160/*destructorObj*/["fun"];
        };
        ;
        PL$134/*finalPs*/["resolve"]();
        ;}));
      PL$134/*finalPs*/["then"]((function(){
      
        ;
        PL$50/*cDef*/["isReady"] = true;
        if(PL$50/*cDef*/["savable"]){
          PL$48/*privateClassSystem*/["registerSavableClass"](PL$42/*cf*/);
        };
        ;
        PL$50/*cDef*/["readyPromise"]["resolve"](PL$42/*cf*/);
        ;}));
      if(PL$10/*sync*/){
        if(PL$65/*classLiteral*/["name"]){
          PL$50/*cDef*/["syncId"] = {
            "hash": PL$65/*classLiteral*/["hashStr"],
            "name": PL$65/*classLiteral*/["name"]
          };
          PL$161/*registerSyncClass*/(PL$65/*classLiteral*/["hashStr"], PL$65/*classLiteral*/["name"], PL$42/*cf*/);
        };
        ;
      };
      ;
      return PL$42/*cf*/;
      ;}),
    "getConstructorReturnType": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["constructorReturnType"]){
        return PL$50/*cDef*/["constructorReturnType"];
      };
      ;
      return PL$132/*cs*/["getFunctionReturnType"](PL$50/*cDef*/["constructorType"]);
      ;}),
    "getTypeFromInstance": (function(PL$38/*parInstance*/){
    
      ;
      if((typeof PL$38/*parInstance*/[0] === "function")){
        return PL$38/*parInstance*/[0];
      };
      ;
      if((PL$38/*parInstance*/["length"] === 2)){
        return this["_createTemporaryTrackedClass"](PL$38/*parInstance*/[0][0]);
      };
      ;
      throw PL$2/*errorMsg*/["unknownInstanceType"];
      ;}),
    "isFunctionType": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["isFunction"]){
        return true;
      };
      ;
      return false;
      ;}),
    "isTrackedClass": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["track"]){
        return true;
      };
      ;
      return false;
      ;}),
    "isUniqueClass": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["unique"]){
        return true;
      };
      ;
      return false;
      ;}),
    "createFunctionType": (function(PL$34/*par*/){
    var PL$163/*makeTemporaries*/;
    
      ;
      var PL$67/*self*/ = this;
      var PL$50/*cDef*/ = {
        "isFunction": true,
        "return": (PL$34/*par*/["return"] || this["getBuiltinType"]("var")),
        "arguments": (PL$34/*par*/["arguments"] || [
          
        ]),
        "isReady": false
      };
      var PL$162/*checkReady*/ = (function(){
      
        ;
        PL$163/*makeTemporaries*/();
        ;});
      PL$163/*makeTemporaries*/ = (function(){
      
        ;
        PL$50/*cDef*/["return"] = PL$67/*self*/["_createTemporaryTrackedClass"](PL$50/*cDef*/["return"]);
        var PL$75/*i*/ = 0;
        for(PL$75/*i*/ = 0;(PL$75/*i*/ < PL$50/*cDef*/["arguments"]["length"]);++PL$75/*i*/){{
          PL$50/*cDef*/["arguments"][PL$75/*i*/] = PL$67/*self*/["_createTemporaryTrackedClass"](PL$50/*cDef*/["arguments"][PL$75/*i*/]);}};
        ;
        ;});
      var PL$164/*isReady*/ = true;
      if(PL$67/*self*/["isProvisional"](PL$50/*cDef*/["return"])){
        PL$164/*isReady*/ = false;
        PL$67/*self*/["definitionPromise"](PL$50/*cDef*/["return"])["then"]((function(PL$37/*parType*/){
        
          ;
          PL$50/*cDef*/["return"] = PL$37/*parType*/;
          PL$162/*checkReady*/();
          ;}));
      };
      ;
      var PL$165/*resolveTypeFun*/ = (function(PL$166/*parI*/){
      
        ;
        return (function(PL$37/*parType*/){
        
          ;
          PL$50/*cDef*/["arguments"][PL$166/*parI*/] = PL$37/*parType*/;
          PL$162/*checkReady*/();
          ;});
        ;});
      var PL$75/*i*/ = 0;
      for(PL$75/*i*/ = 0;(PL$75/*i*/ < PL$50/*cDef*/["arguments"]["length"]);++PL$75/*i*/){{
        if(PL$67/*self*/["isProvisional"](PL$50/*cDef*/["arguments"][PL$75/*i*/])){
          PL$164/*isReady*/ = false;
          PL$67/*self*/["definitionPromise"](PL$50/*cDef*/["arguments"][PL$75/*i*/])["then"](PL$165/*resolveTypeFun*/(PL$75/*i*/));
        };
        ;}};
      ;
      var PL$42/*cf*/ = PL$43/*classHider*/(PL$50/*cDef*/);
      if(! PL$164/*isReady*/){
        PL$50/*cDef*/["readyPromise"] = new PL$70/*Promise*/();
        PL$162/*checkReady*/ = (function(){
        
          ;
          if(PL$67/*self*/["isProvisional"](PL$50/*cDef*/["return"])){
            return;
          };
          ;
          var PL$75/*i*/ = 0;
          for(PL$75/*i*/ = 0;(PL$75/*i*/ < PL$50/*cDef*/["arguments"]["length"]);++PL$75/*i*/){{
            if(PL$67/*self*/["isProvisional"](PL$50/*cDef*/["arguments"][PL$75/*i*/])){
              return;
            };
            ;}};
          ;
          PL$163/*makeTemporaries*/();
          PL$50/*cDef*/["isReady"] = true;
          PL$50/*cDef*/["readyPromise"]["resolve"](PL$42/*cf*/);
          ;});
        PL$162/*checkReady*/();
      }else{
      PL$162/*checkReady*/();
      PL$50/*cDef*/["isReady"] = true;
      };
      ;
      return PL$42/*cf*/;
      ;}),
    "isVar": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["isVar"]){
        return true;
      };
      ;
      return false;
      ;}),
    "isStatementType": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["isStatement"]){
        return true;
      };
      ;
      return false;
      ;}),
    "isAvailableByName": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["availableByName"]){
        return true;
      };
      ;
      return false;
      ;}),
    "getFunctionReturnType": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["isVar"]){
        return this["getBuiltinType"]("var");
      };
      ;
      return PL$50/*cDef*/["return"];
      ;}),
    "getFunctionArgumentCount": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if(PL$50/*cDef*/["arguments"]){
        return PL$50/*cDef*/["arguments"]["length"];
      };
      ;
      return 0;
      ;}),
    "getFunctionArgumentType": (function(PL$37/*parType*/, PL$167/*parIndex*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      if((PL$50/*cDef*/["arguments"] && PL$50/*cDef*/["arguments"][PL$167/*parIndex*/])){
        return PL$50/*cDef*/["arguments"][PL$167/*parIndex*/];
      };
      return this["getBuiltinType"]("var");
      ;}),
    "getConstructorArgumentType": (function(PL$37/*parType*/, PL$167/*parIndex*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      var PL$168/*t*/;
      if(PL$50/*cDef*/["constructorArguments"]){
        PL$168/*t*/ = PL$50/*cDef*/["constructorArguments"][PL$167/*parIndex*/];
      };
      ;
      if(PL$168/*t*/){
        return PL$168/*t*/;
      };
      ;
      return this["getBuiltinType"]("var");
      ;}),
    "getTypeConstructor": (function(PL$37/*parType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      return PL$50/*cDef*/["constructor"];
      ;}),
    "getBuiltinType": (function(PL$169/*parName*/){
    
      ;
      return PL$45/*buildInTypesMap*/["get"](PL$169/*parName*/);
      ;}),
    "getBuiltinTypesMap": (function(PL$169/*parName*/){
    
      ;
      return PL$45/*buildInTypesMap*/["clone"]();
      ;}),
    "getPropertyAlias": (function(PL$34/*par*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$34/*par*/["type"]);
      if(PL$50/*cDef*/["isVar"]){
        return PL$34/*par*/["property"];
      };
      ;
      var PL$77/*map*/ = PL$50/*cDef*/["map"];
      if(((PL$77/*map*/ && PL$77/*map*/["members"]) && PL$77/*map*/["members"][PL$34/*par*/["property"]])){
        return PL$77/*map*/["members"][PL$34/*par*/["property"]]["index"];
      };
      ;
      return PL$34/*par*/["property"];
      ;}),
    "getPropertyType": (function(PL$34/*par*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$34/*par*/["type"]);
      if(PL$50/*cDef*/["isVar"]){
        return this["getBuiltinType"]("var");
      };
      ;
      var PL$77/*map*/ = PL$50/*cDef*/["map"];
      if(PL$77/*map*/["members"][PL$34/*par*/["property"]]){
        if(PL$34/*par*/["original"]){
          return (PL$77/*map*/["members"][PL$34/*par*/["property"]]["originalType"] || PL$77/*map*/["members"][PL$34/*par*/["property"]]["type"]);
        }else{
        return PL$77/*map*/["members"][PL$34/*par*/["property"]]["type"];
        };
        ;
      };
      ;
      return this["getBuiltinType"]("var");
      ;}),
    "getConstructorType": (function(PL$34/*par*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$34/*par*/["type"]);
      if(PL$50/*cDef*/["isVar"]){
        return this["getBuiltinType"]("var");
      };
      ;
      if(PL$50/*cDef*/["constructorType"]){
        return PL$50/*cDef*/["constructorType"];
      };
      ;
      throw PL$2/*errorMsg*/["noConstructorAvailable"];
      ;}),
    "setMemberByDef": (function(PL$170/*parDynInstance*/, PL$52/*parMemberDefinition*/, PL$171/*parValueDynInstance*/){
    
      ;
      var PL$54/*realInstance*/ = PL$170/*parDynInstance*/["instance"];
      PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["index"]] = PL$171/*parValueDynInstance*/["getInstanceAsType"](PL$52/*parMemberDefinition*/["type"]);
      if(this["isTrackedClass"](PL$52/*parMemberDefinition*/["type"])){
        var PL$55/*tracker*/ = this["getTrackerFromDynInstance"](PL$170/*parDynInstance*/);
        var PL$50/*cDef*/ = PL$41/*getClass*/(PL$171/*parValueDynInstance*/["type"]);
        var PL$56/*trackMemberIdx*/ = PL$50/*cDef*/["map"]["trackMemberIdx"];
        if(PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]]){
          PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]]();
        };
        ;
        PL$54/*realInstance*/[PL$52/*parMemberDefinition*/["trackIndex"]] = PL$171/*parValueDynInstance*/["instance"][PL$56/*trackMemberIdx*/](PL$55/*tracker*/);
      };
      ;
      ;}),
    "getTrack": (function(PL$38/*parInstance*/){
    
      ;
      if(! PL$38/*parInstance*/){
        return;
      };
      ;
      var PL$172/*type*/ = PL$38/*parInstance*/[0];
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$172/*type*/);
      return PL$38/*parInstance*/[PL$50/*cDef*/["map"]["trackRootIdx"]]();
      ;}),
    "canSet": (function(PL$173/*parTargetType*/, PL$174/*parSourceType*/){
    
      ;
      if(((PL$173/*parTargetType*/ === undefined) && (PL$174/*parSourceType*/ === undefined))){
        return true;
      };
      ;
      if(((PL$173/*parTargetType*/ === undefined) || (PL$174/*parSourceType*/ === undefined))){
        return false;
      };
      ;
      if((PL$173/*parTargetType*/ === PL$174/*parSourceType*/)){
        return true;
      };
      ;
      if(this["isTemporaryTrackedClass"](PL$174/*parSourceType*/)){
        if(this["isTemporaryTrackedClass"](PL$173/*parTargetType*/)){
          return this["canSet"](this["getClassFromTemporaryTracked"](PL$173/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$174/*parSourceType*/));
        };
        ;
        return false;
      };
      ;
      if(this["isTemporaryTrackedClass"](PL$173/*parTargetType*/)){
        return this["canSet"](this["getClassFromTemporaryTracked"](PL$173/*parTargetType*/), PL$174/*parSourceType*/);
      };
      ;
      if((((PL$173/*parTargetType*/["isFunction"] && PL$174/*parSourceType*/["isFunction"]) && this["canSet"](PL$173/*parTargetType*/["returnType"], PL$174/*parSourceType*/["returnType"])) && (PL$173/*parTargetType*/["parameters"]["length"] == PL$174/*parSourceType*/["parameters"]["length"]))){
        var PL$175/*allOk*/ = true;
        var PL$75/*i*/ = 0;
        var PL$176/*l*/ = PL$173/*parTargetType*/["parameters"]["length"];
        for(PL$75/*i*/;(PL$75/*i*/ < PL$176/*l*/);++PL$75/*i*/){{
          var PL$177/*tp*/ = PL$173/*parTargetType*/["parameters"][PL$75/*i*/];
          var PL$178/*sp*/ = PL$174/*parSourceType*/["parameters"][PL$75/*i*/];
          if(! this["canSet"](PL$178/*sp*/, PL$177/*tp*/)){
            PL$175/*allOk*/ = false;
          };
          ;}};
        ;
        if(PL$175/*allOk*/){
          return true;
        };
        ;
      };
      ;
      return false;
      ;}),
    "canConnect": (function(PL$37/*parType*/, PL$179/*parProperty*/, PL$180/*parFunType*/){
    
      ;
      var PL$50/*cDef*/ = PL$41/*getClass*/(PL$37/*parType*/);
      var PL$77/*map*/ = PL$50/*cDef*/["map"];
      if(PL$77/*map*/["members"][PL$179/*parProperty*/]){
        var PL$51/*mDef*/ = PL$77/*map*/["members"][PL$179/*parProperty*/];
        var PL$181/*propertyType*/ = this["getPropertyType"]({
          "type": PL$37/*parType*/,
          "property": PL$179/*parProperty*/
        });
        if(! this["canSet"](PL$181/*propertyType*/, PL$180/*parFunType*/)){
          return false;
        };
        ;
        if(! (this["isVar"](PL$181/*propertyType*/) || this["isFunctionType"](PL$181/*propertyType*/))){
          return false;
        };
        ;
        if(! (this["isVar"](PL$180/*parFunType*/) || this["isFunctionType"](PL$180/*parFunType*/))){
          return false;
        };
        ;
        return true;
      };
      ;
      return false;
      ;})
  };
  PL$132/*cs*/ = PL$39/*classSystem*/;
  var PL$182/*getEffectiveFunctionResultType*/ = (function(PL$180/*parFunType*/){
  
    ;
    var PL$183/*res*/ = {
      "promiseResolveType": PL$39/*classSystem*/["getBuiltinType"]("var"),
      "isTemporary": false,
      "originalResultType": PL$39/*classSystem*/["getFunctionReturnType"](PL$180/*parFunType*/),
      "resolvePromise": (function(PL$59/*parPromise*/, PL$184/*parValue*/){
      
        ;
        PL$59/*parPromise*/["resolve"](PL$184/*parValue*/);
        ;}),
      "rejectPromise": (function(PL$59/*parPromise*/, PL$184/*parValue*/){
      
        ;
        PL$59/*parPromise*/["reject"](PL$184/*parValue*/);
        ;})
    };
    var PL$185/*resultType*/ = PL$183/*res*/["originalResultType"];
    PL$183/*res*/["newPromise"] = (function(){
    
      ;
      return new PL$70/*Promise*/();
      ;});
    if(PL$39/*classSystem*/["isTemporaryTrackedClass"](PL$185/*resultType*/)){
      PL$183/*res*/["isTemporary"] = true;
      var PL$186/*unTrackedType*/ = PL$39/*classSystem*/["getClassFromTemporaryTracked"](PL$185/*resultType*/);
      if(PL$39/*classSystem*/["isPromiseOfClass"](PL$186/*unTrackedType*/)){
        var PL$187/*promiseConstructor*/ = PL$39/*classSystem*/["getTypeConstructor"](PL$186/*unTrackedType*/);
        PL$183/*res*/["newPromise"] = (function(){
        
          ;
          return PL$187/*promiseConstructor*/();
          ;});
        PL$183/*res*/["resolvePromise"] = (function(PL$59/*parPromise*/, PL$184/*parValue*/){
        
          ;
          PL$59/*parPromise*/[0]["resolve"](PL$184/*parValue*/);
          ;});
        PL$183/*res*/["rejectPromise"] = (function(PL$59/*parPromise*/, PL$184/*parValue*/){
        
          ;
          PL$59/*parPromise*/[0]["reject"](PL$184/*parValue*/);
          ;});
        var PL$188/*promiseResolveType*/ = PL$39/*classSystem*/["getClassFromPromiseOf"](PL$186/*unTrackedType*/);
        PL$183/*res*/["promiseResolveType"] = PL$188/*promiseResolveType*/;
      };
      ;
    };
    ;
    return PL$183/*res*/;
    ;});
  var PL$189/*_stringEncodeStr*/ = (function(PL$34/*par*/){
  
    ;
    var PL$190/*s*/ = PL$34/*par*/["replace"](new PL$191/*RegExp*/("\\\\", "g"), "\\\\");
    PL$190/*s*/ = PL$190/*s*/["replace"](new PL$191/*RegExp*/("\\n", "g"), "\\n");
    PL$190/*s*/ = PL$190/*s*/["replace"](new PL$191/*RegExp*/("\\r", "g"), "\\r");
    PL$190/*s*/ = PL$190/*s*/["replace"](new PL$191/*RegExp*/("\\\"", "g"), "\\\"");
    PL$190/*s*/ = PL$190/*s*/["replace"](new PL$191/*RegExp*/("\\u2028", "g"), "\\u2028");
    PL$190/*s*/ = PL$190/*s*/["replace"](new PL$191/*RegExp*/("\\u2029", "g"), "\\u2029");
    return PL$190/*s*/;
    ;});
  var PL$192/*stringEncodeStr*/ = (function(PL$34/*par*/){
  
    ;
    return (("\"" + PL$189/*_stringEncodeStr*/(PL$34/*par*/)) + "\"");
    ;});
  var PL$193/*internals*/ = {
    "classHider": PL$43/*classHider*/,
    "getClass": PL$41/*getClass*/,
    "TrackedPromise": PL$6/*TrackedPromise*/,
    "DynInstance": PL$4/*DynInstance*/,
    "stringEncodeStr": PL$192/*stringEncodeStr*/,
    "getEffectiveFunctionResultType": PL$182/*getEffectiveFunctionResultType*/,
    "privateClassSystem": PL$48/*privateClassSystem*/
  };
  PL$7/*provisional*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$8/*temporary*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$9/*promiseOf*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$10/*sync*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$161/*registerSyncClass*/ = PL$193/*internals*/["registerSyncClass"];
  PL$158/*destroySynced*/ = PL$193/*internals*/["destroySynced"];
  var PL$194/*getClassBySyncId*/ = PL$193/*internals*/["getClassBySyncId"];
  PL$106/*syncFun*/ = PL$193/*internals*/["syncFun"];
  PL$110/*syncFunctionFun*/ = PL$193/*internals*/["syncFunctionFun"];
  PL$85/*internalObjects*/ = PL$193/*internals*/["internalObjects"];
  PL$84/*getNewInternalId*/ = PL$193/*internals*/["getNewInternalId"];
  PL$11/*savable*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$12/*makroModule*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$111/*makro*/ = PL$193/*internals*/["makro"];
  PL$13/*codeGeneration*/(PL$39/*classSystem*/, PL$193/*internals*/);
  PL$115/*runtimeError*/ = PL$193/*internals*/["runtimeError"];
  PL$87/*presets*/ = PL$193/*internals*/["presets"];
  PL$154/*promiseland*/["classSystem"] = PL$39/*classSystem*/;
  PL$3/*extra*/["classSystemPs"]["resolve"]({
    "classSystem": PL$39/*classSystem*/,
    "privateClassSystem": PL$48/*privateClassSystem*/,
    "internalObjects": PL$85/*internalObjects*/,
    "getClassBySyncId": PL$194/*getClassBySyncId*/,
    "DynInstance": PL$4/*DynInstance*/,
    "getEffectiveFunctionResultType": PL$182/*getEffectiveFunctionResultType*/
  });
  return PL$39/*classSystem*/;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();