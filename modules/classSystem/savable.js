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
if (promiseland._hasModule({ hashStr: "36e28d890780ab3184b06d6fb4d10568" })){ return promiseland._getModule("36e28d890780ab3184b06d6fb4d10568"); };
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
var PL$35/*propertiesAr*/;
var PL$36/*properties*/;
var PL$37/*map*/;
var PL$38/*i*/;
var PL$39/*mDef*/;
var PL$40/*p*/;
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
      }; PL$32.then(function(){;
      ;
      PL$35/*propertiesAr*/ = [];
      PL$36/*properties*/ = {};
      PL$37/*map*/ = PL$28/*cDef*/["map"];
      PL$38/*i*/ = 0;
      for(PL$38/*i*/ = 0;(PL$38/*i*/ < PL$37/*map*/["membersAr"]["length"]);++PL$38/*i*/){{
        PL$39/*mDef*/ = PL$37/*map*/["membersAr"][PL$38/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$39/*mDef*/["type"]) || PL$39/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$40/*p*/ = {"name": PL$39/*mDef*/["name"],
"type": PL$39/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"]),
"defaultValue": (PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"]) ? PL$39/*mDef*/["defaultValue"] : PL$22/*pcs*/["stringifyInstance"](PL$39/*mDef*/["type"], PL$39/*mDef*/["defaultValue"]))};
        if(PL$39/*mDef*/["meta"]){
          PL$40/*p*/["meta"] = PL$39/*mDef*/["meta"];
        };
        ;
        PL$35/*propertiesAr*/["push"](PL$40/*p*/);
        PL$36/*properties*/[PL$39/*mDef*/["name"]] = PL$40/*p*/;}};
      ;
      try
{
        if(PL$33/*engine*/["registerClass"]){
          PL$28/*cDef*/["storageHandler"] = PL$33/*engine*/["registerClass"]({"idType": PL$28/*cDef*/["idType"],
"properties": PL$36/*properties*/,
"propertiesAr": PL$35/*propertiesAr*/,
"moduleName": PL$28/*cDef*/["moduleName"],
"className": PL$28/*cDef*/["className"]});
        };
        ;}catch(PL$41/*e*/){};
      ;
      PL$29.resolve(); return;});})();
return PL$29;
});
    PL$22/*pcs*/["saveInstance"] = (function(PL$27/*parType*/, PL$42/*parInstance*/){
    var PL$43 = new __Promise();
var PL$44 = function(code){ return function(res){ try{code(res);}catch(e){ PL$43.reject(e); }; }; };
var PL$45 = function(e){ PL$43.reject(e); };
var PL$28/*cDef*/;
var PL$46/*h*/;
var PL$35/*propertiesAr*/;
var PL$36/*properties*/;
var PL$37/*map*/;
var PL$38/*i*/;
var PL$39/*mDef*/;
var PL$40/*p*/;
PL$44(function(){
    
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      PL$28/*cDef*/["storageHandler"].then(PL$44(function(PL$47){PL$46/*h*/ = PL$47;
      PL$35/*propertiesAr*/ = [];
      PL$36/*properties*/ = {};
      PL$37/*map*/ = PL$28/*cDef*/["map"];
      PL$38/*i*/ = 0;
      for(PL$38/*i*/ = 0;(PL$38/*i*/ < PL$37/*map*/["membersAr"]["length"]);++PL$38/*i*/){{
        PL$39/*mDef*/ = PL$37/*map*/["membersAr"][PL$38/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$39/*mDef*/["type"]) || PL$39/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$40/*p*/ = {"name": PL$39/*mDef*/["name"],
"type": PL$39/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"]),
"value": (PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"]) ? PL$42/*parInstance*/[PL$39/*mDef*/["index"]] : PL$22/*pcs*/["stringifyInstance"](PL$39/*mDef*/["type"], PL$42/*parInstance*/[PL$39/*mDef*/["index"]]))};
        PL$35/*propertiesAr*/["push"](PL$40/*p*/);
        PL$36/*properties*/[PL$39/*mDef*/["name"]] = PL$40/*p*/;}};
      ;
      PL$46/*h*/["save"]({"properties": PL$36/*properties*/,
"propertiesAr": PL$35/*propertiesAr*/}).then(PL$44(function(PL$48){PL$43.resolve(PL$48); return;
      PL$43.resolve(); return;}), PL$45);
;}), PL$45);
;})();
return PL$43;
});
    PL$22/*pcs*/["loadInstance"] = (function(PL$27/*parType*/, PL$42/*parInstance*/){
    var PL$49 = new __Promise();
var PL$50 = function(code){ return function(res){ try{code(res);}catch(e){ PL$49.reject(e); }; }; };
var PL$51 = function(e){ PL$49.reject(e); };
var PL$28/*cDef*/;
var PL$46/*h*/;
var PL$35/*propertiesAr*/;
var PL$36/*properties*/;
var PL$37/*map*/;
var PL$38/*i*/;
var PL$39/*mDef*/;
var PL$40/*p*/;
var PL$53/*loadVar*/;
PL$50(function(){
    
      ;
      PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
      PL$28/*cDef*/["storageHandler"].then(PL$50(function(PL$52){PL$46/*h*/ = PL$52;
      PL$35/*propertiesAr*/ = [];
      PL$36/*properties*/ = {};
      PL$37/*map*/ = PL$28/*cDef*/["map"];
      PL$38/*i*/ = 0;
      for(PL$38/*i*/ = 0;(PL$38/*i*/ < PL$37/*map*/["membersAr"]["length"]);++PL$38/*i*/){{
        PL$39/*mDef*/ = PL$37/*map*/["membersAr"][PL$38/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$39/*mDef*/["type"]) || PL$39/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$40/*p*/ = {"name": PL$39/*mDef*/["name"],
"type": PL$39/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"])};
        if((PL$39/*mDef*/["name"] == "id")){
          PL$40/*p*/["value"] = (PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"]) ? PL$42/*parInstance*/[PL$39/*mDef*/["index"]] : PL$22/*pcs*/["stringifyInstance"](PL$39/*mDef*/["type"], PL$42/*parInstance*/[PL$39/*mDef*/["index"]]));
        };
        ;
        PL$35/*propertiesAr*/["push"](PL$40/*p*/);
        PL$36/*properties*/[PL$39/*mDef*/["name"]] = PL$40/*p*/;}};
      ;
      PL$46/*h*/["load"]({"properties": PL$36/*properties*/,
"propertiesAr": PL$35/*propertiesAr*/}).then(PL$50(function(PL$54){PL$53/*loadVar*/ = PL$54;
      if(! PL$53/*loadVar*/){
        PL$49.resolve(); return;
      };
      ;
      for(PL$38/*i*/ = 0;(PL$38/*i*/ < PL$37/*map*/["membersAr"]["length"]);++PL$38/*i*/){{
        PL$39/*mDef*/ = PL$37/*map*/["membersAr"][PL$38/*i*/];
        if((! PL$22/*pcs*/["isSavableType"](PL$39/*mDef*/["type"]) || PL$39/*mDef*/["noSave"])){
          continue;;
        };
        ;
        if(PL$22/*pcs*/["hasOwnProperty"](PL$53/*loadVar*/, PL$39/*mDef*/["name"])){
          if(PL$14/*classSystem*/["isVar"](PL$39/*mDef*/["type"])){
            PL$22/*pcs*/["setMemberByDefFromInstance"](PL$27/*parType*/, PL$42/*parInstance*/, PL$39/*mDef*/, PL$53/*loadVar*/[PL$39/*mDef*/["name"]]);
          }else{
          };
          ;
        };
        ;}};
      ;
      PL$49.resolve(); return;}), PL$51);
;}), PL$51);
;})();
return PL$49;
});
    PL$21/*cs*/["setStorageEngine"] = (function(PL$55/*parStorageEngine*/, PL$27/*parType*/){
    var PL$56 = new __Promise();
var PL$57 = function(code){ return function(res){ try{code(res);}catch(e){ PL$56.reject(e); }; }; };
var PL$58 = function(e){ PL$56.reject(e); };
var PL$60/*type*/;
var PL$28/*cDef*/;
PL$57(function(){
    
      ;
      
      var PL$59 = new __Promise();if(PL$27/*parType*/){
        PL$21/*cs*/["readyPromise"](PL$27/*parType*/).then(PL$57(function(PL$61){PL$60/*type*/ = PL$61;
        PL$28/*cDef*/ = PL$23/*getClass*/(PL$60/*type*/);
        PL$28/*cDef*/["storageEngine"] = PL$55/*parStorageEngine*/;
        PL$22/*pcs*/["registerSavableClass"](PL$60/*type*/);
        PL$56.resolve(); return;
        PL$59.resolve();;}), PL$58);
;
      }else{PL$59.resolve();
      }; PL$59.then(function(){;
      ;
      try
{
        PL$25/*storageEnginePs*/["resolve"](PL$55/*parStorageEngine*/);}catch(__dummy){};
      ;
      PL$25/*storageEnginePs*/ = new PL$26/*Promise*/();
      PL$25/*storageEnginePs*/["resolve"](PL$55/*parStorageEngine*/);
      PL$56.resolve(); return;});})();
return PL$56;
});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();