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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "6bd61b76756d51bc6ec2dc7c5402904d" })){ return promiseland._getModule("6bd61b76756d51bc6ec2dc7c5402904d"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$26/*Promise*/;try{PL$26/*Promise*/ = Promise;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$4/*getModuleData*/;
var PL$10/*frames*/;
var PL$11/*getInstanceFromTransportData*/;
var PL$12/*getInstanceTransportData*/;
var PL$13/*getEffectiveFunctionResultType*/;

  ;
  ;
  PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  PL$4/*getModuleData*/;
  (function(){
  var PL$5 = new __Promise();
var PL$7 = function(code){ return function(res){ try{code(res);}catch(e){ PL$5.reject(e); }; }; };
var PL$8 = function(e){ PL$5.reject(e); };
PL$7(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$7(function(PL$9){PL$4/*getModuleData*/ = PL$9["getModuleData"];
    PL$5.resolve(); return;}), PL$8);
;})();
return PL$5;
})();
  PL$10/*frames*/;
  PL$11/*getInstanceFromTransportData*/;
  PL$12/*getInstanceTransportData*/;
  PL$13/*getEffectiveFunctionResultType*/;
  return (function(PL$14/*classSystem*/, PL$15/*internals*/){
  var PL$16/*privateClassSystem*/;
var PL$21/*cs*/;
var PL$22/*pcs*/;
var PL$23/*getClass*/;
var PL$24/*DynInstance*/;
var PL$25/*storageEnginePs*/;

    ;
    PL$16/*privateClassSystem*/ = PL$15/*internals*/["privateClassSystem"];
    (function(){
    var PL$17 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$19 = function(e){ PL$17.reject(e); };
PL$18(function(){
    
      ;
      PL$3/*extra*/["framesPs"].then(PL$18(function(PL$20){PL$10/*frames*/ = PL$20;
      PL$17.resolve(); return;}), PL$19);
;})();
return PL$17;
})();
    PL$21/*cs*/ = PL$14/*classSystem*/;
    PL$22/*pcs*/ = PL$16/*privateClassSystem*/;
    PL$23/*getClass*/ = PL$15/*internals*/["getClass"];
    PL$24/*DynInstance*/ = PL$15/*internals*/["DynInstance"];
    PL$25/*storageEnginePs*/ = new PL$26/*Promise*/();
    PL$22/*pcs*/["isSavableType"] = (function(PL$27/*parType*/){
    var PL$28/*cDef*/;

      ;
      if(PL$21/*cs*/["isVar"](PL$27/*parType*/)){
        return true;
      };
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      if(PL$28/*cDef*/["savable"]){
        return true;
      };
      ;
      return false;
      ;});
    PL$22/*pcs*/["registerSavableClass"] = (function(PL$27/*parType*/){
    var PL$29 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.reject(e); }; }; };
var PL$31 = function(e){ PL$29.reject(e); };
var PL$28/*cDef*/;
var PL$33/*engine*/;
var PL$36/*propertiesAr*/;
var PL$37/*properties*/;
var PL$38/*map*/;
var PL$39/*i*/;
var PL$40/*mDef*/;
var PL$41/*p*/;
PL$30(function(){
    
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      
      var PL$32 = new __Promise();if(PL$28/*cDef*/["storageEngine"]){
        PL$33/*engine*/ = PL$28/*cDef*/["storageEngine"];
        PL$32.resolve();;
      }else{
      PL$25/*storageEnginePs*/.then(PL$30(function(PL$34){PL$33/*engine*/ = PL$34;
      PL$32.resolve();;}), PL$31);
;
      };PL$32.then(PL$30(function(PL$35){PL$35;;
      ;
      PL$36/*propertiesAr*/ = [];
      PL$37/*properties*/ = {};
      PL$38/*map*/ = PL$28/*cDef*/["map"];
      PL$39/*i*/ = 0;
      for(PL$39/*i*/ = 0;(PL$39/*i*/ < PL$38/*map*/["membersAr"]["length"]);++PL$39/*i*/){{
        PL$40/*mDef*/ = PL$38/*map*/["membersAr"][PL$39/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$40/*mDef*/["type"]) || PL$40/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$41/*p*/ = {"name": PL$40/*mDef*/["name"],
"type": PL$40/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"]),
"defaultValue": (PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"]) ? PL$40/*mDef*/["defaultValue"] : PL$22/*pcs*/["stringifyInstance"](PL$40/*mDef*/["type"], PL$40/*mDef*/["defaultValue"]))};
        if(PL$40/*mDef*/["meta"]){
          PL$41/*p*/["meta"] = PL$40/*mDef*/["meta"];
        };
        ;
        PL$36/*propertiesAr*/["push"](PL$41/*p*/);
        PL$37/*properties*/[PL$40/*mDef*/["name"]] = PL$41/*p*/;}};
      ;
      try
{
        if(PL$33/*engine*/["registerClass"]){
          PL$28/*cDef*/["storageHandler"] = PL$33/*engine*/["registerClass"]({"idType": PL$28/*cDef*/["idType"],
"properties": PL$37/*properties*/,
"propertiesAr": PL$36/*propertiesAr*/,
"moduleName": PL$28/*cDef*/["moduleName"],
"className": PL$28/*cDef*/["className"],
"moduleHash": PL$28/*cDef*/["moduleHash"]});
        };
        ;}catch(PL$42/*e*/){};
      ;
      PL$29.resolve(); return;}), PL$31);
;})();
return PL$29;
});
    PL$22/*pcs*/["saveInstance"] = (function(PL$27/*parType*/, PL$43/*parInstance*/){
    var PL$44 = new __Promise();
var PL$45 = function(code){ return function(res){ try{code(res);}catch(e){ PL$44.reject(e); }; }; };
var PL$46 = function(e){ PL$44.reject(e); };
var PL$28/*cDef*/;
var PL$47/*h*/;
var PL$36/*propertiesAr*/;
var PL$37/*properties*/;
var PL$38/*map*/;
var PL$39/*i*/;
var PL$40/*mDef*/;
var PL$41/*p*/;
PL$45(function(){
    
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      PL$28/*cDef*/["storageHandler"].then(PL$45(function(PL$48){PL$47/*h*/ = PL$48;
      PL$36/*propertiesAr*/ = [];
      PL$37/*properties*/ = {};
      PL$38/*map*/ = PL$28/*cDef*/["map"];
      PL$39/*i*/ = 0;
      for(PL$39/*i*/ = 0;(PL$39/*i*/ < PL$38/*map*/["membersAr"]["length"]);++PL$39/*i*/){{
        PL$40/*mDef*/ = PL$38/*map*/["membersAr"][PL$39/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$40/*mDef*/["type"]) || PL$40/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$41/*p*/ = {"name": PL$40/*mDef*/["name"],
"type": PL$40/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"]),
"value": (PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"]) ? PL$43/*parInstance*/[PL$40/*mDef*/["index"]] : PL$22/*pcs*/["stringifyInstance"](PL$40/*mDef*/["type"], PL$43/*parInstance*/[PL$40/*mDef*/["index"]]))};
        PL$36/*propertiesAr*/["push"](PL$41/*p*/);
        PL$37/*properties*/[PL$40/*mDef*/["name"]] = PL$41/*p*/;}};
      ;
      PL$47/*h*/["save"]({"properties": PL$37/*properties*/,
"propertiesAr": PL$36/*propertiesAr*/}).then(PL$45(function(PL$49){PL$44.resolve(PL$49); return;
      PL$44.resolve(); return;}), PL$46);
;}), PL$46);
;})();
return PL$44;
});
    PL$22/*pcs*/["loadInstance"] = (function(PL$27/*parType*/, PL$43/*parInstance*/){
    var PL$50 = new __Promise();
var PL$51 = function(code){ return function(res){ try{code(res);}catch(e){ PL$50.reject(e); }; }; };
var PL$52 = function(e){ PL$50.reject(e); };
var PL$28/*cDef*/;
var PL$47/*h*/;
var PL$36/*propertiesAr*/;
var PL$37/*properties*/;
var PL$38/*map*/;
var PL$39/*i*/;
var PL$40/*mDef*/;
var PL$41/*p*/;
var PL$54/*loadVar*/;
PL$51(function(){
    
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      PL$28/*cDef*/["storageHandler"].then(PL$51(function(PL$53){PL$47/*h*/ = PL$53;
      PL$36/*propertiesAr*/ = [];
      PL$37/*properties*/ = {};
      PL$38/*map*/ = PL$28/*cDef*/["map"];
      PL$39/*i*/ = 0;
      for(PL$39/*i*/ = 0;(PL$39/*i*/ < PL$38/*map*/["membersAr"]["length"]);++PL$39/*i*/){{
        PL$40/*mDef*/ = PL$38/*map*/["membersAr"][PL$39/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$40/*mDef*/["type"]) || PL$40/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$41/*p*/ = {"name": PL$40/*mDef*/["name"],
"type": PL$40/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"])};
        if((PL$40/*mDef*/["name"] == "id")){
          PL$41/*p*/["value"] = (PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"]) ? PL$43/*parInstance*/[PL$40/*mDef*/["index"]] : PL$22/*pcs*/["stringifyInstance"](PL$40/*mDef*/["type"], PL$43/*parInstance*/[PL$40/*mDef*/["index"]]));
        };
        ;
        PL$36/*propertiesAr*/["push"](PL$41/*p*/);
        PL$37/*properties*/[PL$40/*mDef*/["name"]] = PL$41/*p*/;}};
      ;
      PL$47/*h*/["load"]({"properties": PL$37/*properties*/,
"propertiesAr": PL$36/*propertiesAr*/}).then(PL$51(function(PL$55){PL$54/*loadVar*/ = PL$55;
      if(! PL$54/*loadVar*/){
        PL$50.resolve(); return;
      };
      ;
      for(PL$39/*i*/ = 0;(PL$39/*i*/ < PL$38/*map*/["membersAr"]["length"]);++PL$39/*i*/){{
        PL$40/*mDef*/ = PL$38/*map*/["membersAr"][PL$39/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$40/*mDef*/["type"]) || PL$40/*mDef*/["noSave"])){
          continue;;
        };
        ;
        if(PL$22/*pcs*/["hasOwnProperty"](PL$54/*loadVar*/, PL$40/*mDef*/["name"])){
          if(PL$14/*classSystem*/["isVar"](PL$40/*mDef*/["type"])){
            PL$22/*pcs*/["setMemberByDefFromInstance"](PL$27/*parType*/, PL$43/*parInstance*/, PL$40/*mDef*/, PL$54/*loadVar*/[PL$40/*mDef*/["name"]]);
          }else{
          };
          ;
        };
        ;}};
      ;
      PL$50.resolve(); return;}), PL$52);
;}), PL$52);
;})();
return PL$50;
});
    PL$21/*cs*/["setStorageEngine"] = (function(PL$56/*parStorageEngine*/, PL$27/*parType*/){
    var PL$57 = new __Promise();
var PL$58 = function(code){ return function(res){ try{code(res);}catch(e){ PL$57.reject(e); }; }; };
var PL$59 = function(e){ PL$57.reject(e); };
var PL$61/*type*/;
var PL$28/*cDef*/;
PL$58(function(){
    
      ;
      
      var PL$60 = new __Promise();if(PL$27/*parType*/){
        PL$21/*cs*/["readyPromise"](PL$27/*parType*/).then(PL$58(function(PL$62){PL$61/*type*/ = PL$62;
        PL$28/*cDef*/ = PL$23/*getClass*/(PL$61/*type*/);
        PL$28/*cDef*/["storageEngine"] = PL$56/*parStorageEngine*/;
        PL$22/*pcs*/["registerSavableClass"](PL$61/*type*/);
        PL$57.resolve(); return;
        PL$60.resolve();;}), PL$59);
;
      }else{PL$60.resolve();
      };PL$60.then(PL$58(function(PL$63){PL$63;;
      ;
      try
{
        PL$25/*storageEnginePs*/["resolve"](PL$56/*parStorageEngine*/);}catch(__dummy){};
      ;
      PL$25/*storageEnginePs*/ = new PL$26/*Promise*/();
      PL$25/*storageEnginePs*/["resolve"](PL$56/*parStorageEngine*/);
      PL$57.resolve(); return;}), PL$59);
;})();
return PL$57;
});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();