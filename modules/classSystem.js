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
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["./classSystem/DynInstance", "./classSystem/TrackedPromise", "./classSystem/provisional", "./classSystem/temporary", "./classSystem/promiseOf", "./classSystem/sync", "./classSystem/codeGeneration"], function(PL$4/*DynInstance*/, PL$5/*TrackedPromise*/, PL$6/*provisional*/, PL$7/*temporary*/, PL$8/*promiseOf*/, PL$9/*sync*/, PL$10/*codeGeneration*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "f86d6d76c518fa5ede632e3b6023b051" })){ return promiseland._getModule("f86d6d76c518fa5ede632e3b6023b051"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$56/*Promise*/;try{PL$56/*Promise*/ = Promise;}catch(e){};
var PL$152/*RegExp*/;try{PL$152/*RegExp*/ = RegExp;}catch(e){};
var PL$156/*promiseland*/;try{PL$156/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$11/*getModuleData*/;
var PL$17/*Tracker*/;
var PL$22/*Chainable*/;
var PL$27/*MAKRO_SELF*/;
var PL$28/*MAKRO_PROPERTY*/;
var PL$29/*MAKRO_PROPERTYSTRING*/;
var PL$30/*MAKRO_PROPERTYVALUE*/;
var PL$31/*MAKRO_VALUE*/;
var PL$32/*MAKRO_LEFT*/;
var PL$33/*MAKRO_OPERATOR*/;
var PL$34/*MAKRO_RIGHT*/;
var PL$35/*MAKRO_VALUEPROPERTY*/;
var PL$36/*MAKRO_RESOLVEFUN*/;
var PL$37/*MAKRO_REJECTFUN*/;
var PL$38/*MAKRO_TYPEVALUE*/;
var PL$39/*MAKRO_CONSTRUCTOR*/;
var PL$40/*_actClass*/;
var PL$41/*getClass*/;
var PL$43/*classHider*/;
var PL$45/*builtinTypes*/;
var PL$46/*classSystem*/;
var PL$142/*getEffectiveFunctionResultType*/;
var PL$150/*_stringEncodeStr*/;
var PL$153/*stringEncodeStr*/;
var PL$154/*internals*/;
var PL$121/*registerSyncClass*/;
var PL$120/*destroySynced*/;
var PL$155/*getClassBySyncId*/;
var PL$95/*syncFun*/;
var PL$99/*syncFunctionFun*/;
var PL$73/*internalObjects*/;
var PL$72/*getNewInternalId*/;
var PL$103/*runtimeError*/;
var PL$75/*presets*/;
;
;
PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
PL$4/*DynInstance*/ = PL$3/*extra*/["getModule"](PL$4/*DynInstance*/);;
PL$5/*TrackedPromise*/ = PL$3/*extra*/["getModule"](PL$5/*TrackedPromise*/);;
PL$6/*provisional*/ = PL$3/*extra*/["getModule"](PL$6/*provisional*/);;
PL$7/*temporary*/ = PL$3/*extra*/["getModule"](PL$7/*temporary*/);;
PL$8/*promiseOf*/ = PL$3/*extra*/["getModule"](PL$8/*promiseOf*/);;
PL$9/*sync*/ = PL$3/*extra*/["getModule"](PL$9/*sync*/);;
PL$10/*codeGeneration*/ = PL$3/*extra*/["getModule"](PL$10/*codeGeneration*/);;
PL$11/*getModuleData*/;
(function(){
var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
PL$14(function(){;
PL$3/*extra*/["moduleSystemPs"].then(PL$14(function(PL$16){PL$11/*getModuleData*/ = PL$16["getModuleData"];;
PL$12.resolve(); return;;
}), PL$15);
;})();
return PL$12;
})();;
PL$17/*Tracker*/;
(function(){
var PL$18 = new __Promise();
var PL$19 = function(code){ return function(res){ try{code(res);}catch(e){ PL$18.reject(e); }; }; };
var PL$20 = function(e){ PL$18.reject(e); };
PL$19(function(){;
PL$3/*extra*/["TrackerPs"].then(PL$19(function(PL$21){PL$17/*Tracker*/ = PL$21["Tracker"];;
PL$18.resolve(); return;;
}), PL$20);
;})();
return PL$18;
})();;
PL$22/*Chainable*/;
(function(){
var PL$23 = new __Promise();
var PL$24 = function(code){ return function(res){ try{code(res);}catch(e){ PL$23.reject(e); }; }; };
var PL$25 = function(e){ PL$23.reject(e); };
PL$24(function(){;
PL$3/*extra*/["ChainablePs"].then(PL$24(function(PL$26){PL$22/*Chainable*/ = PL$26["Chainable"];;
PL$23.resolve(); return;;
}), PL$25);
;})();
return PL$23;
})();;
PL$27/*MAKRO_SELF*/ = 0;
PL$28/*MAKRO_PROPERTY*/ = 1;
PL$29/*MAKRO_PROPERTYSTRING*/ = 2;
PL$30/*MAKRO_PROPERTYVALUE*/ = 3;
PL$31/*MAKRO_VALUE*/ = 4;
PL$32/*MAKRO_LEFT*/ = 5;
PL$33/*MAKRO_OPERATOR*/ = 6;
PL$34/*MAKRO_RIGHT*/ = 7;
PL$35/*MAKRO_VALUEPROPERTY*/ = 8;
PL$36/*MAKRO_RESOLVEFUN*/ = 9;
PL$37/*MAKRO_REJECTFUN*/ = 10;
PL$38/*MAKRO_TYPEVALUE*/ = 11;
PL$39/*MAKRO_CONSTRUCTOR*/ = 12;
PL$40/*_actClass*/;
PL$41/*getClass*/ = (function(PL$42/*cf*/){
;
PL$40/*_actClass*/ = undefined;;
PL$42/*cf*/();;
return PL$40/*_actClass*/;;
;
});
PL$43/*classHider*/ = (function(PL$44/*toHide*/){
;
return (function(){
;
PL$40/*_actClass*/ = PL$44/*toHide*/;;
;
});;
;
});
PL$45/*builtinTypes*/ = {"var": PL$43/*classHider*/({"isVar": true,
"isReady": true}),
"statement": PL$43/*classHider*/({"isStatement": true,
"isReady": true})};
PL$46/*classSystem*/ = {"isSameType": (function(PL$47/*type1*/, PL$48/*type2*/){
var PL$49/*cDef1*/;
var PL$50/*cDef2*/;
;
if((PL$47/*type1*/ === PL$48/*type2*/)){
return true;;
};
;
PL$49/*cDef1*/ = PL$41/*getClass*/(PL$47/*type1*/);
if(PL$49/*cDef1*/["provisional"]){
if(! PL$49/*cDef1*/["type"]){
return false;;
};
;
PL$47/*type1*/ = PL$49/*cDef1*/["type"];;
PL$49/*cDef1*/ = PL$41/*getClass*/(PL$47/*type1*/);;
};
;
PL$50/*cDef2*/ = PL$41/*getClass*/(PL$48/*type2*/);
if(PL$50/*cDef2*/["provisional"]){
if(! PL$50/*cDef2*/["type"]){
return false;;
};
;
PL$48/*type2*/ = PL$50/*cDef2*/["type"];;
PL$50/*cDef2*/ = PL$41/*getClass*/(PL$48/*type2*/);;
};
;
if((PL$47/*type1*/ === PL$48/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(PL$51/*classLiteral*/, PL$52/*parDefaults*/){
var PL$53/*self*/;
;
PL$53/*self*/ = this;
return PL$53/*self*/["_createClass"](PL$51/*classLiteral*/, PL$52/*parDefaults*/);;
;
}),
"_membersDefined": (function(PL$51/*classLiteral*/){
var PL$53/*self*/;
var PL$54/*cnt*/;
var PL$55/*retPs*/;
var PL$57/*check*/;
var PL$58/*addMember*/;
var PL$61/*i*/;
;
PL$53/*self*/ = this;
PL$54/*cnt*/ = 1;
PL$55/*retPs*/ = new PL$56/*Promise*/();
PL$57/*check*/ = (function(){
;
if(PL$54/*cnt*/){
return;;
};
;
PL$55/*retPs*/["resolve"](PL$51/*classLiteral*/);;
;
});
PL$58/*addMember*/ = (function(PL$59/*m*/){
;
++PL$54/*cnt*/;;
PL$53/*self*/["definitionPromise"](PL$59/*m*/["type"])["then"]((function(PL$60/*definedType*/){
;
PL$59/*m*/["type"] = PL$60/*definedType*/;;
--PL$54/*cnt*/;;
PL$57/*check*/();;
;
}));;
;
});
if(PL$51/*classLiteral*/["members"]){
PL$61/*i*/ = 0;
for(PL$61/*i*/;(PL$61/*i*/ < PL$51/*classLiteral*/["members"]["length"]);++PL$61/*i*/){{PL$58/*addMember*/(PL$51/*classLiteral*/["members"][PL$61/*i*/]);;
}};
;
};
;
--PL$54/*cnt*/;;
PL$57/*check*/();;
return PL$55/*retPs*/;;
;
}),
"_createClass": (function(PL$51/*classLiteral*/, PL$52/*parDefaults*/){
var PL$62/*cAr*/;
var PL$53/*self*/;
var PL$63/*map*/;
var PL$64/*cDef*/;
var PL$42/*cf*/;
var PL$9/*sync*/;
var PL$65/*syncAll*/;
var PL$66/*syncCnt*/;
var PL$67/*trackerIdx*/;
var PL$68/*trackRootIdx*/;
var PL$69/*trackMemberIdx*/;
var PL$74/*freepart*/;
var PL$76/*helpAr*/;
var PL$77/*makeHelpAr*/;
var PL$78/*conIdx*/;
var PL$84/*constructorDef*/;
var PL$85/*constructorFun*/;
var PL$86/*destroyDef*/;
var PL$87/*destroyFun*/;
var PL$88/*untrackIdxAr*/;
var PL$58/*addMember*/;
var PL$104/*createMembersPs*/;
var PL$106/*memberPs*/;
var PL$61/*i*/;
var PL$107/*proto*/;
var PL$108/*freeFun*/;
var PL$109/*f*/;
var PL$112/*finalPs*/;
;
PL$62/*cAr*/ = [];
PL$53/*self*/ = this;
PL$63/*map*/ = {"members": {},
"membersByIndex": {},
"extends": []};
PL$64/*cDef*/ = {"constructor": undefined,
"map": PL$63/*map*/,
"isReady": false,
"track": ((PL$51/*classLiteral*/["track"] || PL$51/*classLiteral*/["sync"]) ? true : false),
"sync": PL$51/*classLiteral*/["sync"],
"readyPromise": new PL$56/*Promise*/(),
"syncMembers": []};
PL$42/*cf*/ = PL$43/*classHider*/(PL$64/*cDef*/);
if(PL$64/*cDef*/["sync"]){
if(PL$64/*cDef*/["sync"]["serve"]){
PL$64/*cDef*/["syncServe"] = true;;
};
;
};
;
PL$62/*cAr*/["push"](PL$42/*cf*/);;
PL$9/*sync*/ = (PL$51/*classLiteral*/["sync"] ? true : false);
PL$65/*syncAll*/ = false;
if(PL$9/*sync*/){
if(PL$51/*classLiteral*/["sync"]["all"]){
PL$65/*syncAll*/ = true;;
};
;
};
;
PL$66/*syncCnt*/ = 0;
PL$67/*trackerIdx*/;
PL$68/*trackRootIdx*/;
PL$69/*trackMemberIdx*/;
if(PL$64/*cDef*/["track"]){
PL$63/*map*/["trackerIdx"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](undefined);;
PL$63/*map*/["trackRootIdx"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](undefined);;
PL$63/*map*/["trackMemberIdx"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](undefined);;
PL$67/*trackerIdx*/ = PL$63/*map*/["trackerIdx"];;
PL$68/*trackRootIdx*/ = PL$63/*map*/["trackRootIdx"];;
PL$69/*trackMemberIdx*/ = PL$63/*map*/["trackMemberIdx"];;
};
;
if(PL$9/*sync*/){
PL$63/*map*/["syncDataIdx"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"]((function(){
var PL$53/*self*/;
var PL$70/*internalId*/;
var PL$71/*syncData*/;
;
PL$53/*self*/ = this;
PL$70/*internalId*/;
PL$71/*syncData*/ = {"getInternalId": (function(){
;
if(PL$70/*internalId*/){
return PL$70/*internalId*/;;
};
;
PL$70/*internalId*/ = PL$72/*getNewInternalId*/();;
PL$73/*internalObjects*/[PL$70/*internalId*/] = PL$53/*self*/;;
PL$71/*syncData*/["internalId"] = PL$70/*internalId*/;;
return PL$70/*internalId*/;;
;
}),
"transports": []};
this[PL$63/*map*/["syncDataIdx"]] = (function(){
;
return PL$71/*syncData*/;;
;
});;
return PL$71/*syncData*/;;
;
}));;
};
;
if(PL$51/*classLiteral*/["hasFreePart"]){
PL$74/*freepart*/ = {};
PL$63/*map*/["freePart"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](PL$74/*freepart*/);;
PL$63/*map*/["getMemberCode"] = PL$75/*presets*/["getMemberCode"](PL$63/*map*/["freePart"]);;
PL$63/*map*/["setMemberCode"] = PL$75/*presets*/["setMemberCode"](PL$63/*map*/["freePart"]);;
};
;
PL$76/*helpAr*/ = [];
PL$77/*makeHelpAr*/ = (function(){
;
return PL$76/*helpAr*/["slice"]();;
;
});
PL$63/*map*/["connectIdx"] = PL$62/*cAr*/["length"];;
PL$78/*conIdx*/ = PL$63/*map*/["connectIdx"];
PL$62/*cAr*/["push"]((function(){
var PL$76/*helpAr*/;
var PL$83/*arguments*/ = arguments;
;
PL$76/*helpAr*/ = PL$77/*makeHelpAr*/();
this[PL$78/*conIdx*/] = (function(PL$79/*idx*/, PL$80/*fun*/, PL$81/*base*/){
var PL$82/*chain*/;
;
PL$82/*chain*/ = PL$76/*helpAr*/[PL$79/*idx*/];
if(! PL$82/*chain*/){
PL$82/*chain*/ = PL$22/*Chainable*/(this, PL$79/*idx*/);;
PL$76/*helpAr*/[PL$79/*idx*/] = PL$82/*chain*/;;
};
;
return PL$82/*chain*/(PL$80/*fun*/, PL$81/*base*/);;
;
});;
return this[PL$78/*conIdx*/]["apply"](this, PL$83/*arguments*/);;
;
}));;
PL$84/*constructorDef*/;
PL$85/*constructorFun*/;
PL$86/*destroyDef*/;
PL$87/*destroyFun*/;
PL$88/*untrackIdxAr*/ = [];
PL$58/*addMember*/ = (function(PL$59/*m*/){
var PL$89/*mDef*/;
var PL$90/*mType*/;
var PL$91/*isFunction*/;
var PL$92/*memberIdx*/;
var PL$93/*isTrackedMember*/;
var PL$97/*def*/;
var PL$98/*originalFun*/;
var PL$100/*mCDef*/;
var PL$101/*memberTrackMemberIdx*/;
var PL$102/*memberTrackRootIdx*/;
;
PL$89/*mDef*/ = {"index": PL$62/*cAr*/["length"]};
if((PL$65/*syncAll*/ || PL$59/*m*/["sync"])){
PL$89/*mDef*/["sync"] = true;;
};
;
PL$89/*mDef*/["type"] = PL$59/*m*/["type"];;
PL$90/*mType*/ = PL$59/*m*/["type"];
PL$91/*isFunction*/ = PL$53/*self*/["isFunctionType"](PL$89/*mDef*/["type"]);
PL$92/*memberIdx*/ = PL$89/*mDef*/["index"];
PL$93/*isTrackedMember*/ = PL$53/*self*/["isTrackedClass"](PL$89/*mDef*/["type"]);
if(PL$89/*mDef*/["sync"]){
PL$89/*mDef*/["hasSetter"] = true;;
if(PL$93/*isTrackedMember*/){
PL$89/*mDef*/["defaultSetter"] = (function(PL$94/*vAr*/){
;
PL$95/*syncFun*/(this, PL$92/*memberIdx*/, PL$90/*mType*/, PL$94/*vAr*/[0]);;
return PL$94/*vAr*/;;
;
});;

}else{
PL$89/*mDef*/["defaultSetter"] = (function(PL$96/*v*/){
;
PL$95/*syncFun*/(this, PL$92/*memberIdx*/, PL$90/*mType*/, PL$96/*v*/);;
return PL$96/*v*/;;
;
});;
};
;
PL$64/*cDef*/["syncMembers"]["push"](PL$89/*mDef*/);;
};
;
PL$63/*map*/["members"][PL$59/*m*/["name"]] = PL$89/*mDef*/;;
PL$63/*map*/["membersByIndex"][PL$89/*mDef*/["index"]] = PL$89/*mDef*/;;
PL$97/*def*/ = (PL$52/*parDefaults*/ ? PL$52/*parDefaults*/[PL$59/*m*/["name"]] : undefined);
if((PL$91/*isFunction*/ && PL$89/*mDef*/["sync"])){
if(! ((PL$59/*m*/["name"] == "constructor") || (PL$59/*m*/["name"] == "destroy"))){
PL$98/*originalFun*/ = PL$97/*def*/;
PL$97/*def*/ = (function(){
var PL$83/*arguments*/ = arguments;
;
PL$99/*syncFunctionFun*/(this, PL$92/*memberIdx*/, PL$90/*mType*/, PL$83/*arguments*/);;
return PL$98/*originalFun*/["apply"](this, PL$83/*arguments*/);;
;
});;
};
;
};
;
PL$62/*cAr*/["push"](PL$97/*def*/);;
if(PL$89/*mDef*/["hasSetter"]){
PL$89/*mDef*/["setterIdx"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](PL$89/*mDef*/["defaultSetter"]);;
};
;
if((PL$59/*m*/["name"] == "constructor")){
PL$84/*constructorDef*/ = PL$89/*mDef*/;;
PL$85/*constructorFun*/ = PL$97/*def*/;;
};
;
if((PL$59/*m*/["name"] == "destroy")){
PL$86/*destroyDef*/ = PL$89/*mDef*/;;
PL$87/*destroyFun*/ = PL$97/*def*/;;
};
;
PL$89/*mDef*/["getCode"] = [PL$27/*MAKRO_SELF*/, (("[" + PL$89/*mDef*/["index"]) + "]")];;
if(PL$89/*mDef*/["hasSetter"]){
PL$89/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$89/*mDef*/["setterIdx"]) + "](v); s[") + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, " v; return v; })(", PL$27/*MAKRO_SELF*/, ", ", PL$31/*MAKRO_VALUE*/, ")"];;

}else{
PL$89/*mDef*/["setCode"] = [PL$27/*MAKRO_SELF*/, (("[" + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, " ", PL$31/*MAKRO_VALUE*/];;
};
;
if(PL$93/*isTrackedMember*/){
PL$100/*mCDef*/ = PL$41/*getClass*/(PL$89/*mDef*/["type"]);
PL$101/*memberTrackMemberIdx*/ = PL$100/*mCDef*/["map"]["trackMemberIdx"];
PL$102/*memberTrackRootIdx*/ = PL$100/*mCDef*/["map"]["trackRootIdx"];
PL$89/*mDef*/["trackIndex"] = PL$62/*cAr*/["length"];;
PL$62/*cAr*/["push"](undefined);;
PL$88/*untrackIdxAr*/["push"](PL$89/*mDef*/["trackIndex"]);;
if(PL$64/*cDef*/["track"]){
if(PL$89/*mDef*/["hasSetter"]){
PL$89/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$102/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$89/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$89/*mDef*/["trackIndex"]) + "]){ s[") + PL$89/*mDef*/["trackIndex"]) + "](); }; s[") + PL$89/*mDef*/["trackIndex"]) + "] = v[") + PL$101/*memberTrackMemberIdx*/) + "](s[") + PL$67/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$27/*MAKRO_SELF*/, ", ", PL$31/*MAKRO_VALUE*/, ")"];;
PL$89/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$89/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$89/*mDef*/["trackIndex"]) + "]){ s[") + PL$89/*mDef*/["trackIndex"]) + "](); }; s[") + PL$89/*mDef*/["trackIndex"]) + "] = v[") + PL$101/*memberTrackMemberIdx*/) + "](s[") + PL$67/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$27/*MAKRO_SELF*/, ", ", PL$31/*MAKRO_VALUE*/, ")"];;

}else{
PL$89/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$89/*mDef*/["trackIndex"]) + "]){ s[") + PL$89/*mDef*/["trackIndex"]) + "](); }; s[") + PL$89/*mDef*/["trackIndex"]) + "] = v[") + PL$101/*memberTrackMemberIdx*/) + "](s[") + PL$67/*trackerIdx*/) + "]); return v; })("), PL$27/*MAKRO_SELF*/, ", ", PL$31/*MAKRO_VALUE*/, ")"];;
PL$89/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$89/*mDef*/["index"]) + "] "), PL$33/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$89/*mDef*/["trackIndex"]) + "]){ s[") + PL$89/*mDef*/["trackIndex"]) + "](); }; s[") + PL$89/*mDef*/["trackIndex"]) + "] = v[") + PL$101/*memberTrackMemberIdx*/) + "](s[") + PL$67/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$27/*MAKRO_SELF*/, ", ", PL$31/*MAKRO_VALUE*/, ")"];;
};
;

}else{
PL$89/*mDef*/["setCode"] = [PL$103/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$89/*mDef*/["setCodeFromTemporary"] = [PL$103/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
PL$89/*mDef*/["connectFunCode"] = [PL$27/*MAKRO_SELF*/, (((("[" + PL$63/*map*/["connectIdx"]) + "](") + PL$89/*mDef*/["index"]) + ", "), PL$31/*MAKRO_VALUE*/, ")"];;
PL$89/*mDef*/["connectSlotCode"] = [PL$27/*MAKRO_SELF*/, (((("[" + PL$63/*map*/["connectIdx"]) + "](") + PL$89/*mDef*/["index"]) + ", "), PL$31/*MAKRO_VALUE*/, "[", PL$35/*MAKRO_VALUEPROPERTY*/, "], ", PL$31/*MAKRO_VALUE*/, ")"];;
;
});
PL$104/*createMembersPs*/ = (function(){
var PL$105/*donePs*/;
;
PL$105/*donePs*/ = new PL$56/*Promise*/();
PL$53/*self*/["_membersDefined"](PL$51/*classLiteral*/)["then"]((function(){
var PL$61/*i*/;
;
PL$61/*i*/;
if(PL$51/*classLiteral*/["members"]){
PL$61/*i*/ = 0;
for(PL$61/*i*/;(PL$61/*i*/ < PL$51/*classLiteral*/["members"]["length"]);++PL$61/*i*/){{PL$58/*addMember*/(PL$51/*classLiteral*/["members"][PL$61/*i*/]);;
}};
;
};
;
PL$105/*donePs*/["resolve"]();;
;
}));;
return PL$105/*donePs*/;;
;
});
PL$106/*memberPs*/ = new PL$104/*createMembersPs*/();
PL$61/*i*/;
if(PL$51/*classLiteral*/["hasFreePart"]){
PL$107/*proto*/ = {};
if(PL$52/*parDefaults*/){
for(PL$61/*i*/ in PL$52/*parDefaults*/){if(! PL$63/*map*/["members"][PL$61/*i*/]){
PL$107/*proto*/[PL$61/*i*/] = PL$52/*parDefaults*/[PL$61/*i*/];;
};
;
};
;
};
;
PL$108/*freeFun*/ = (function(){
;
;
});
PL$108/*freeFun*/["prototype"] = PL$107/*proto*/;;
PL$109/*f*/ = PL$63/*map*/["freePart"];
if(PL$64/*cDef*/["track"]){
PL$64/*cDef*/["constructor"] = (function(){
var PL$110/*r*/;
var PL$111/*t*/;
;
PL$110/*r*/ = PL$62/*cAr*/["slice"]();
PL$110/*r*/[PL$109/*f*/] = new PL$108/*freeFun*/();;
PL$111/*t*/ = PL$17/*Tracker*/((function(){
;
PL$87/*destroyFun*/["apply"](PL$110/*r*/);;
;
}));
PL$110/*r*/[PL$67/*trackerIdx*/] = PL$111/*t*/[0];;
PL$110/*r*/[PL$68/*trackRootIdx*/] = PL$111/*t*/[1];;
PL$110/*r*/[PL$69/*trackMemberIdx*/] = PL$111/*t*/[2];;
return [PL$110/*r*/, PL$110/*r*/[PL$68/*trackRootIdx*/]()];;
;
});;

}else{
PL$64/*cDef*/["constructor"] = (function(){
var PL$110/*r*/;
;
PL$110/*r*/ = PL$62/*cAr*/["slice"]();
PL$110/*r*/[PL$109/*f*/] = new PL$108/*freeFun*/();;
return PL$110/*r*/;;
;
});;
};
;

}else{
if(PL$64/*cDef*/["track"]){
PL$64/*cDef*/["constructor"] = (function(){
var PL$110/*r*/;
var PL$111/*t*/;
;
PL$110/*r*/ = PL$62/*cAr*/["slice"]();
PL$111/*t*/ = PL$17/*Tracker*/((function(){
;
PL$87/*destroyFun*/["apply"](PL$110/*r*/);;
;
}));
PL$110/*r*/[PL$67/*trackerIdx*/] = PL$111/*t*/[0];;
PL$110/*r*/[PL$68/*trackRootIdx*/] = PL$111/*t*/[1];;
PL$110/*r*/[PL$69/*trackMemberIdx*/] = PL$111/*t*/[2];;
return [PL$110/*r*/, PL$110/*r*/[PL$68/*trackRootIdx*/]()];;
;
});;

}else{
PL$64/*cDef*/["constructor"] = (function(){
var PL$110/*r*/;
;
PL$110/*r*/ = PL$62/*cAr*/["slice"]();
return PL$110/*r*/;;
;
});;
};
;
};
;
PL$112/*finalPs*/ = new PL$56/*Promise*/();
PL$106/*memberPs*/["then"]((function(){
var PL$61/*i*/;
var PL$113/*realConstructor*/;
var PL$115/*conDef*/;
var PL$116/*_destroyFun*/;
var PL$119/*_sync_destroyFun*/;
;
PL$61/*i*/;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$62/*cAr*/["length"]);++PL$61/*i*/){{PL$76/*helpAr*/["push"](undefined);;
}};
;
if(PL$84/*constructorDef*/){
PL$64/*cDef*/["constructorArguments"] = [];;
PL$113/*realConstructor*/ = PL$64/*cDef*/["constructor"];
if(PL$64/*cDef*/["track"]){
PL$64/*cDef*/["constructor"] = (function(){
var PL$114/*instance*/;
var PL$83/*arguments*/ = arguments;
;
PL$114/*instance*/ = PL$113/*realConstructor*/();
PL$85/*constructorFun*/["apply"](PL$114/*instance*/[0], PL$83/*arguments*/);;
return PL$114/*instance*/;;
;
});;

}else{
PL$64/*cDef*/["constructor"] = (function(){
var PL$114/*instance*/;
var PL$83/*arguments*/ = arguments;
;
PL$114/*instance*/ = PL$113/*realConstructor*/();
PL$85/*constructorFun*/["apply"](PL$114/*instance*/, PL$83/*arguments*/);;
return PL$114/*instance*/;;
;
});;
};
;
PL$115/*conDef*/ = PL$41/*getClass*/(PL$84/*constructorDef*/["type"]);
PL$64/*cDef*/["constructorType"] = PL$53/*self*/["createFunctionType"]({"return": PL$42/*cf*/,
"arguments": PL$115/*conDef*/["arguments"]});;

}else{
PL$64/*cDef*/["constructorType"] = PL$53/*self*/["createFunctionType"]({"return": PL$42/*cf*/});;
};
;
if(PL$64/*cDef*/["track"]){
PL$116/*_destroyFun*/;
if(PL$88/*untrackIdxAr*/["length"]){
if(PL$86/*destroyDef*/){
PL$116/*_destroyFun*/ = PL$87/*destroyFun*/;;
PL$87/*destroyFun*/ = (function(){
var PL$61/*i*/;
var PL$117/*curIdx*/;
var PL$118/*tFun*/;
;
PL$61/*i*/;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$88/*untrackIdxAr*/["length"]);++PL$61/*i*/){{PL$117/*curIdx*/ = PL$88/*untrackIdxAr*/[PL$61/*i*/];
PL$118/*tFun*/ = this[PL$117/*curIdx*/];
this[PL$117/*curIdx*/] = undefined;;
if(PL$118/*tFun*/){
PL$118/*tFun*/();;
};
;
}};
;
PL$116/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$87/*destroyFun*/ = (function(){
var PL$61/*i*/;
var PL$118/*tFun*/;
;
PL$61/*i*/;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$88/*untrackIdxAr*/["length"]);++PL$61/*i*/){{PL$118/*tFun*/ = this[PL$88/*untrackIdxAr*/[PL$61/*i*/]];
if(PL$118/*tFun*/){
PL$118/*tFun*/();;
};
;
}};
;
this["splice"](0, this["length"]);;
;
});;
};
;

}else{
if(PL$86/*destroyDef*/){
PL$116/*_destroyFun*/ = PL$87/*destroyFun*/;;
PL$87/*destroyFun*/ = (function(){
;
PL$116/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$87/*destroyFun*/ = (function(){
;
this["splice"](0, this["length"]);;
;
});;
};
;
};
;
};
;
if(PL$9/*sync*/){
PL$119/*_sync_destroyFun*/ = PL$87/*destroyFun*/;
PL$87/*destroyFun*/ = (function(){
var PL$71/*syncData*/;
;
PL$71/*syncData*/ = PL$46/*classSystem*/["getSyncData"](this);
PL$120/*destroySynced*/(PL$71/*syncData*/);;
PL$119/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
PL$112/*finalPs*/["resolve"]();;
;
}));;
PL$112/*finalPs*/["then"]((function(){
;
PL$64/*cDef*/["isReady"] = true;;
PL$64/*cDef*/["readyPromise"]["resolve"](PL$42/*cf*/);;
;
}));;
if(PL$9/*sync*/){
if(PL$51/*classLiteral*/["name"]){
PL$64/*cDef*/["syncId"] = {"hash": PL$51/*classLiteral*/["hashStr"],
"name": PL$51/*classLiteral*/["name"]};;
PL$121/*registerSyncClass*/(PL$51/*classLiteral*/["hashStr"], PL$51/*classLiteral*/["name"], PL$42/*cf*/);;
};
;
};
;
return PL$42/*cf*/;;
;
}),
"getTypeFromInstance": (function(PL$122/*parInstance*/){
;
if((typeof PL$122/*parInstance*/[0] === "function")){
return PL$122/*parInstance*/[0];;
};
;
if((PL$122/*parInstance*/["length"] === 2)){
return this["_createTemporaryTrackedClass"](PL$122/*parInstance*/[0][0]);;
};
;
throw PL$2/*errorMsg*/["unknownInstanceType"];
;
}),
"isFunctionType": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if(PL$64/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if(PL$64/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(PL$124/*par*/){
var PL$53/*self*/;
var PL$64/*cDef*/;
var PL$125/*checkReady*/;
var PL$126/*makeTemporaries*/;
var PL$127/*isReady*/;
var PL$128/*resolveTypeFun*/;
var PL$61/*i*/;
var PL$42/*cf*/;
;
PL$53/*self*/ = this;
PL$64/*cDef*/ = {"isFunction": true,
"return": (PL$124/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$124/*par*/["arguments"] || []),
"isReady": false};
PL$125/*checkReady*/ = (function(){
;
PL$126/*makeTemporaries*/();;
;
});
PL$126/*makeTemporaries*/ = (function(){
var PL$61/*i*/;
;
PL$64/*cDef*/["return"] = PL$53/*self*/["_createTemporaryTrackedClass"](PL$64/*cDef*/["return"]);;
PL$61/*i*/ = 0;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$64/*cDef*/["arguments"]["length"]);++PL$61/*i*/){{PL$64/*cDef*/["arguments"][PL$61/*i*/] = PL$53/*self*/["_createTemporaryTrackedClass"](PL$64/*cDef*/["arguments"][PL$61/*i*/]);;
}};
;
;
});
PL$127/*isReady*/ = true;
if(PL$53/*self*/["isProvisional"](PL$64/*cDef*/["return"])){
PL$127/*isReady*/ = false;;
PL$53/*self*/["definitionPromise"](PL$64/*cDef*/["return"])["then"]((function(PL$123/*parType*/){
;
PL$64/*cDef*/["return"] = PL$123/*parType*/;;
PL$125/*checkReady*/();;
;
}));;
};
;
PL$128/*resolveTypeFun*/ = (function(PL$129/*parI*/){
;
return (function(PL$123/*parType*/){
;
PL$64/*cDef*/["arguments"][PL$129/*parI*/] = PL$123/*parType*/;;
PL$125/*checkReady*/();;
;
});;
;
});
PL$61/*i*/ = 0;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$64/*cDef*/["arguments"]["length"]);++PL$61/*i*/){{if(PL$53/*self*/["isProvisional"](PL$64/*cDef*/["arguments"][PL$61/*i*/])){
PL$127/*isReady*/ = false;;
PL$53/*self*/["definitionPromise"](PL$64/*cDef*/["arguments"][PL$61/*i*/])["then"](PL$128/*resolveTypeFun*/(PL$61/*i*/));;
};
;
}};
;
PL$42/*cf*/ = PL$43/*classHider*/(PL$64/*cDef*/);
if(! PL$127/*isReady*/){
PL$64/*cDef*/["readyPromise"] = new PL$56/*Promise*/();;
PL$125/*checkReady*/ = (function(){
var PL$61/*i*/;
;
if(PL$53/*self*/["isProvisional"](PL$64/*cDef*/["return"])){
return;;
};
;
PL$61/*i*/ = 0;
for(PL$61/*i*/ = 0;(PL$61/*i*/ < PL$64/*cDef*/["arguments"]["length"]);++PL$61/*i*/){{if(PL$53/*self*/["isProvisional"](PL$64/*cDef*/["arguments"][PL$61/*i*/])){
return;;
};
;
}};
;
PL$126/*makeTemporaries*/();;
PL$64/*cDef*/["isReady"] = true;;
PL$64/*cDef*/["readyPromise"]["resolve"](PL$42/*cf*/);;
;
});;
PL$125/*checkReady*/();;

}else{
PL$125/*checkReady*/();;
PL$64/*cDef*/["isReady"] = true;;
};
;
return PL$42/*cf*/;;
;
}),
"isVar": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if(PL$64/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if(PL$64/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return PL$64/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if(PL$64/*cDef*/["arguments"]){
return PL$64/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(PL$123/*parType*/, PL$130/*parIndex*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
if((PL$64/*cDef*/["arguments"] && PL$64/*cDef*/["arguments"][PL$130/*parIndex*/])){
return PL$64/*cDef*/["arguments"][PL$130/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$123/*parType*/, PL$130/*parIndex*/){
var PL$64/*cDef*/;
var PL$111/*t*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
PL$111/*t*/;
if(PL$64/*cDef*/["constructorArguments"]){
PL$111/*t*/ = PL$64/*cDef*/["constructorArguments"][PL$130/*parIndex*/];;
};
;
if(PL$111/*t*/){
return PL$111/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(PL$123/*parType*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
return PL$64/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(PL$131/*parName*/){
;
return PL$45/*builtinTypes*/[PL$131/*parName*/];;
;
}),
"getPropertyAlias": (function(PL$124/*par*/){
var PL$64/*cDef*/;
var PL$63/*map*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$124/*par*/["type"]);
if(PL$64/*cDef*/["isVar"]){
return PL$124/*par*/["property"];;
};
;
PL$63/*map*/ = PL$64/*cDef*/["map"];
if(((PL$63/*map*/ && PL$63/*map*/["members"]) && PL$63/*map*/["members"][PL$124/*par*/["property"]])){
return PL$63/*map*/["members"][PL$124/*par*/["property"]]["index"];;
};
;
return PL$124/*par*/["property"];;
;
}),
"getPropertyType": (function(PL$124/*par*/){
var PL$64/*cDef*/;
var PL$63/*map*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$124/*par*/["type"]);
if(PL$64/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
PL$63/*map*/ = PL$64/*cDef*/["map"];
if(PL$63/*map*/["members"][PL$124/*par*/["property"]]){
if(PL$124/*par*/["original"]){
return (PL$63/*map*/["members"][PL$124/*par*/["property"]]["originalType"] || PL$63/*map*/["members"][PL$124/*par*/["property"]]["type"]);;

}else{
return PL$63/*map*/["members"][PL$124/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(PL$124/*par*/){
var PL$64/*cDef*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$124/*par*/["type"]);
if(PL$64/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(PL$64/*cDef*/["constructorType"]){
return PL$64/*cDef*/["constructorType"];;
};
;
throw PL$2/*errorMsg*/["noConstructorAvailable"];
;
}),
"getTrack": (function(PL$122/*parInstance*/){
var PL$132/*type*/;
var PL$64/*cDef*/;
;
if(! PL$122/*parInstance*/){
return;;
};
;
PL$132/*type*/ = PL$122/*parInstance*/[0];
PL$64/*cDef*/ = PL$41/*getClass*/(PL$132/*type*/);
return PL$122/*parInstance*/[PL$64/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"canSet": (function(PL$133/*parTargetType*/, PL$134/*parSourceType*/){
var PL$135/*allOk*/;
var PL$61/*i*/;
var PL$136/*l*/;
var PL$137/*tp*/;
var PL$138/*sp*/;
;
if(((PL$133/*parTargetType*/ === undefined) && (PL$134/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$133/*parTargetType*/ === undefined) || (PL$134/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$133/*parTargetType*/ === PL$134/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$134/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$133/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$133/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$134/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$133/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$133/*parTargetType*/), PL$134/*parSourceType*/);;
};
;
if((((PL$133/*parTargetType*/["isFunction"] && PL$134/*parSourceType*/["isFunction"]) && this["canSet"](PL$133/*parTargetType*/["returnType"], PL$134/*parSourceType*/["returnType"])) && (PL$133/*parTargetType*/["parameters"]["length"] == PL$134/*parSourceType*/["parameters"]["length"]))){
PL$135/*allOk*/ = true;
PL$61/*i*/ = 0;
PL$136/*l*/ = PL$133/*parTargetType*/["parameters"]["length"];
for(PL$61/*i*/;(PL$61/*i*/ < PL$136/*l*/);++PL$61/*i*/){{PL$137/*tp*/ = PL$133/*parTargetType*/["parameters"][PL$61/*i*/];
PL$138/*sp*/ = PL$134/*parSourceType*/["parameters"][PL$61/*i*/];
if(! this["canSet"](PL$138/*sp*/, PL$137/*tp*/)){
PL$135/*allOk*/ = false;;
};
;
}};
;
if(PL$135/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$123/*parType*/, PL$139/*parProperty*/, PL$140/*parFunType*/){
var PL$64/*cDef*/;
var PL$63/*map*/;
var PL$89/*mDef*/;
var PL$141/*propertyType*/;
;
PL$64/*cDef*/ = PL$41/*getClass*/(PL$123/*parType*/);
PL$63/*map*/ = PL$64/*cDef*/["map"];
if(PL$63/*map*/["members"][PL$139/*parProperty*/]){
PL$89/*mDef*/ = PL$63/*map*/["members"][PL$139/*parProperty*/];
PL$141/*propertyType*/ = this["getPropertyType"]({"type": PL$123/*parType*/,
"property": PL$139/*parProperty*/});
if(! this["canSet"](PL$141/*propertyType*/, PL$140/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$141/*propertyType*/) || this["isFunctionType"](PL$141/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$140/*parFunType*/) || this["isFunctionType"](PL$140/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$142/*getEffectiveFunctionResultType*/ = (function(PL$140/*parFunType*/){
var PL$143/*res*/;
var PL$146/*resultType*/;
var PL$147/*unTrackedType*/;
var PL$148/*promiseConstructor*/;
var PL$149/*promiseResolveType*/;
;
PL$143/*res*/ = {"promiseResolveType": PL$46/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$46/*classSystem*/["getFunctionReturnType"](PL$140/*parFunType*/),
"resolvePromise": (function(PL$144/*parPromise*/, PL$145/*parValue*/){
;
PL$144/*parPromise*/["resolve"](PL$145/*parValue*/);;
;
}),
"rejectPromise": (function(PL$144/*parPromise*/, PL$145/*parValue*/){
;
PL$144/*parPromise*/["reject"](PL$145/*parValue*/);;
;
})};
PL$146/*resultType*/ = PL$143/*res*/["originalResultType"];
PL$143/*res*/["newPromise"] = (function(){
;
return new PL$56/*Promise*/();;
;
});;
if(PL$46/*classSystem*/["isTemporaryTrackedClass"](PL$146/*resultType*/)){
PL$143/*res*/["isTemporary"] = true;;
PL$147/*unTrackedType*/ = PL$46/*classSystem*/["getClassFromTemporaryTracked"](PL$146/*resultType*/);
if(PL$46/*classSystem*/["isPromiseOfClass"](PL$147/*unTrackedType*/)){
PL$148/*promiseConstructor*/ = PL$46/*classSystem*/["getTypeConstructor"](PL$147/*unTrackedType*/);
PL$143/*res*/["newPromise"] = (function(){
;
return PL$148/*promiseConstructor*/();;
;
});;
PL$143/*res*/["resolvePromise"] = (function(PL$144/*parPromise*/, PL$145/*parValue*/){
;
PL$144/*parPromise*/[0]["resolve"](PL$145/*parValue*/);;
;
});;
PL$143/*res*/["rejectPromise"] = (function(PL$144/*parPromise*/, PL$145/*parValue*/){
;
PL$144/*parPromise*/[0]["reject"](PL$145/*parValue*/);;
;
});;
PL$149/*promiseResolveType*/ = PL$46/*classSystem*/["getClassFromPromiseOf"](PL$147/*unTrackedType*/);
PL$143/*res*/["promiseResolveType"] = PL$149/*promiseResolveType*/;;
};
;
};
;
return PL$143/*res*/;;
;
});
PL$150/*_stringEncodeStr*/ = (function(PL$124/*par*/){
var PL$151/*s*/;
;
PL$151/*s*/ = PL$124/*par*/["replace"](new PL$152/*RegExp*/("\\\\", "g"), "\\\\");
PL$151/*s*/ = PL$151/*s*/["replace"](new PL$152/*RegExp*/("\\n", "g"), "\\n");;
PL$151/*s*/ = PL$151/*s*/["replace"](new PL$152/*RegExp*/("\\r", "g"), "\\r");;
PL$151/*s*/ = PL$151/*s*/["replace"](new PL$152/*RegExp*/("\\\"", "g"), "\\\"");;
PL$151/*s*/ = PL$151/*s*/["replace"](new PL$152/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$151/*s*/ = PL$151/*s*/["replace"](new PL$152/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$151/*s*/;;
;
});
PL$153/*stringEncodeStr*/ = (function(PL$124/*par*/){
;
return (("\"" + PL$150/*_stringEncodeStr*/(PL$124/*par*/)) + "\"");;
;
});
PL$154/*internals*/ = {"classHider": PL$43/*classHider*/,
"getClass": PL$41/*getClass*/,
"TrackedPromise": PL$5/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$153/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$142/*getEffectiveFunctionResultType*/};
PL$6/*provisional*/(PL$46/*classSystem*/, PL$154/*internals*/);;
PL$7/*temporary*/(PL$46/*classSystem*/, PL$154/*internals*/);;
PL$8/*promiseOf*/(PL$46/*classSystem*/, PL$154/*internals*/);;
PL$9/*sync*/(PL$46/*classSystem*/, PL$154/*internals*/);;
PL$121/*registerSyncClass*/ = PL$154/*internals*/["registerSyncClass"];
PL$120/*destroySynced*/ = PL$154/*internals*/["destroySynced"];
PL$155/*getClassBySyncId*/ = PL$154/*internals*/["getClassBySyncId"];
PL$95/*syncFun*/ = PL$154/*internals*/["syncFun"];
PL$99/*syncFunctionFun*/ = PL$154/*internals*/["syncFunctionFun"];
PL$73/*internalObjects*/ = PL$154/*internals*/["internalObjects"];
PL$72/*getNewInternalId*/ = PL$154/*internals*/["getNewInternalId"];
PL$10/*codeGeneration*/(PL$46/*classSystem*/, PL$154/*internals*/);;
PL$103/*runtimeError*/ = PL$154/*internals*/["runtimeError"];
PL$75/*presets*/ = PL$154/*internals*/["presets"];
PL$156/*promiseland*/["classSystem"] = PL$46/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$46/*classSystem*/,
"internalObjects": PL$73/*internalObjects*/,
"getClassBySyncId": PL$155/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$142/*getEffectiveFunctionResultType*/});;
return PL$46/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();