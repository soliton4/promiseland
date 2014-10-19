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
  defineFun(["./classSystem/DynInstance", "./classSystem/Wrapper", "./classSystem/TrackedPromise", "./classSystem/provisional", "./classSystem/temporary", "./classSystem/promiseOf", "./classSystem/sync", "./classSystem/codeGeneration", "./Map"], function(PL$4/*DynInstance*/, PL$5/*Wrapper*/, PL$6/*TrackedPromise*/, PL$7/*provisional*/, PL$8/*temporary*/, PL$9/*promiseOf*/, PL$10/*sync*/, PL$11/*codeGeneration*/, PL$12/*Map*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "a463ddddcd5c13e29b7e6907b39313a1" })){ return promiseland._getModule("a463ddddcd5c13e29b7e6907b39313a1"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$31/*JSON*/;try{PL$31/*JSON*/ = JSON;}catch(e){};
var PL$73/*Promise*/;try{PL$73/*Promise*/ = Promise;}catch(e){};
var PL$174/*RegExp*/;try{PL$174/*RegExp*/ = RegExp;}catch(e){};
var PL$178/*promiseland*/;try{PL$178/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$13/*getModuleData*/;
var PL$19/*Tracker*/;
var PL$24/*Chainable*/;
var PL$29/*stringify*/;
var PL$32/*stringifyInstance*/;
var PL$36/*MAKRO_SELF*/;
var PL$37/*MAKRO_PROPERTY*/;
var PL$38/*MAKRO_PROPERTYSTRING*/;
var PL$39/*MAKRO_PROPERTYVALUE*/;
var PL$40/*MAKRO_VALUE*/;
var PL$41/*MAKRO_LEFT*/;
var PL$42/*MAKRO_OPERATOR*/;
var PL$43/*MAKRO_RIGHT*/;
var PL$44/*MAKRO_VALUEPROPERTY*/;
var PL$45/*MAKRO_RESOLVEFUN*/;
var PL$46/*MAKRO_REJECTFUN*/;
var PL$47/*MAKRO_TYPEVALUE*/;
var PL$48/*MAKRO_CONSTRUCTOR*/;
var PL$49/*_actClass*/;
var PL$50/*getClass*/;
var PL$52/*classHider*/;
var PL$54/*builtinTypes*/;
var PL$55/*privateClassSystem*/;
var PL$35/*classSystem*/;
var PL$164/*getEffectiveFunctionResultType*/;
var PL$172/*_stringEncodeStr*/;
var PL$175/*stringEncodeStr*/;
var PL$176/*internals*/;
var PL$144/*registerSyncClass*/;
var PL$143/*destroySynced*/;
var PL$177/*getClassBySyncId*/;
var PL$109/*syncFun*/;
var PL$113/*syncFunctionFun*/;
var PL$88/*internalObjects*/;
var PL$87/*getNewInternalId*/;
var PL$117/*runtimeError*/;
var PL$90/*presets*/;
;
;
PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
PL$4/*DynInstance*/ = PL$3/*extra*/["getModule"](PL$4/*DynInstance*/);;
PL$5/*Wrapper*/ = PL$3/*extra*/["getModule"](PL$5/*Wrapper*/);;
PL$6/*TrackedPromise*/ = PL$3/*extra*/["getModule"](PL$6/*TrackedPromise*/);;
PL$7/*provisional*/ = PL$3/*extra*/["getModule"](PL$7/*provisional*/);;
PL$8/*temporary*/ = PL$3/*extra*/["getModule"](PL$8/*temporary*/);;
PL$9/*promiseOf*/ = PL$3/*extra*/["getModule"](PL$9/*promiseOf*/);;
PL$10/*sync*/ = PL$3/*extra*/["getModule"](PL$10/*sync*/);;
PL$11/*codeGeneration*/ = PL$3/*extra*/["getModule"](PL$11/*codeGeneration*/);;
PL$12/*Map*/ = PL$3/*extra*/["getModule"](PL$12/*Map*/);;
PL$13/*getModuleData*/;
(function(){
var PL$14 = new __Promise();
var PL$16 = function(code){ return function(res){ try{code(res);}catch(e){ PL$14.reject(e); }; }; };
var PL$17 = function(e){ PL$14.reject(e); };
PL$16(function(){;
PL$3/*extra*/["moduleSystemPs"].then(PL$16(function(PL$18){PL$13/*getModuleData*/ = PL$18["getModuleData"];;
PL$14.resolve(); return;;
}), PL$17);
;})();
return PL$14;
})();;
PL$19/*Tracker*/;
(function(){
var PL$20 = new __Promise();
var PL$21 = function(code){ return function(res){ try{code(res);}catch(e){ PL$20.reject(e); }; }; };
var PL$22 = function(e){ PL$20.reject(e); };
PL$21(function(){;
PL$3/*extra*/["TrackerPs"].then(PL$21(function(PL$23){PL$19/*Tracker*/ = PL$23["Tracker"];;
PL$20.resolve(); return;;
}), PL$22);
;})();
return PL$20;
})();;
PL$24/*Chainable*/;
(function(){
var PL$25 = new __Promise();
var PL$26 = function(code){ return function(res){ try{code(res);}catch(e){ PL$25.reject(e); }; }; };
var PL$27 = function(e){ PL$25.reject(e); };
PL$26(function(){;
PL$3/*extra*/["ChainablePs"].then(PL$26(function(PL$28){PL$24/*Chainable*/ = PL$28["Chainable"];;
PL$25.resolve(); return;;
}), PL$27);
;})();
return PL$25;
})();;
PL$29/*stringify*/ = (function(PL$30/*par*/){
;
return PL$31/*JSON*/["stringify"](PL$30/*par*/);;
;
});
PL$32/*stringifyInstance*/ = (function(PL$33/*parInstance*/, PL$34/*parType*/){
;
if(! PL$35/*classSystem*/["isUniqueClass"](PL$34/*parType*/)){
throw PL$2/*errorMsg*/["onlyUniqueCanBeStringified"];
};
;
;
});
PL$36/*MAKRO_SELF*/ = 0;
PL$37/*MAKRO_PROPERTY*/ = 1;
PL$38/*MAKRO_PROPERTYSTRING*/ = 2;
PL$39/*MAKRO_PROPERTYVALUE*/ = 3;
PL$40/*MAKRO_VALUE*/ = 4;
PL$41/*MAKRO_LEFT*/ = 5;
PL$42/*MAKRO_OPERATOR*/ = 6;
PL$43/*MAKRO_RIGHT*/ = 7;
PL$44/*MAKRO_VALUEPROPERTY*/ = 8;
PL$45/*MAKRO_RESOLVEFUN*/ = 9;
PL$46/*MAKRO_REJECTFUN*/ = 10;
PL$47/*MAKRO_TYPEVALUE*/ = 11;
PL$48/*MAKRO_CONSTRUCTOR*/ = 12;
PL$49/*_actClass*/;
PL$50/*getClass*/ = (function(PL$51/*cf*/){
;
PL$49/*_actClass*/ = undefined;;
PL$51/*cf*/();;
return PL$49/*_actClass*/;;
;
});
PL$52/*classHider*/ = (function(PL$53/*toHide*/){
;
return (function(){
;
PL$49/*_actClass*/ = PL$53/*toHide*/;;
;
});;
;
});
PL$54/*builtinTypes*/ = {"var": PL$52/*classHider*/({"isVar": true,
"isReady": true}),
"statement": PL$52/*classHider*/({"isStatement": true,
"isReady": true})};
PL$55/*privateClassSystem*/ = {"getMemberByName": (function(PL$34/*parType*/, PL$33/*parInstance*/, PL$56/*parMemberName*/){
var PL$57/*cDef*/;
var PL$58/*mDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
PL$58/*mDef*/ = PL$57/*cDef*/["map"]["members"][PL$56/*parMemberName*/];
if(PL$58/*mDef*/){
return PL$33/*parInstance*/[PL$58/*mDef*/["index"]];;
};
;
if((PL$57/*cDef*/["map"]["freePart"] !== undefined)){
return PL$33/*parInstance*/[PL$57/*cDef*/["map"]["freePart"]][PL$56/*parMemberName*/];;
};
;
return;;
;
}),
"getTrackerFromInstance": (function(PL$34/*parType*/, PL$33/*parInstance*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
return PL$33/*parInstance*/[PL$57/*cDef*/["map"]["trackerIdx"]];;
;
}),
"setMemberByDefFromInstance": (function(PL$34/*parType*/, PL$33/*parInstance*/, PL$59/*parMemberDefinition*/, PL$60/*parValueInstance*/){
var PL$61/*realInstance*/;
var PL$62/*tracker*/;
var PL$57/*cDef*/;
var PL$63/*trackMemberIdx*/;
;
PL$61/*realInstance*/ = PL$55/*privateClassSystem*/["getRealInstance"](PL$34/*parType*/, PL$33/*parInstance*/);
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["index"]] = PL$60/*parValueInstance*/;;
if(PL$35/*classSystem*/["isTrackedClass"](PL$59/*parMemberDefinition*/["type"])){
PL$62/*tracker*/ = PL$35/*classSystem*/["getTrackerFromInstance"](PL$34/*parType*/, PL$61/*realInstance*/);
PL$57/*cDef*/ = PL$50/*getClass*/(PL$59/*parMemberDefinition*/["type"]);
PL$63/*trackMemberIdx*/ = PL$57/*cDef*/["map"]["trackMemberIdx"];
if(PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]]){
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]] = PL$60/*parValueInstance*/[PL$63/*trackMemberIdx*/](PL$62/*tracker*/);;
};
;
;
}),
"getRealInstance": (function(PL$34/*parType*/, PL$33/*parInstance*/){
;
if(PL$35/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/)){
return PL$33/*parInstance*/[0];;
};
;
return PL$33/*parInstance*/;;
;
}),
"untrack": (function(PL$34/*parType*/, PL$33/*parInstance*/){
;
if((PL$33/*parInstance*/ && PL$35/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/))){
PL$33/*parInstance*/[1]();;
};
;
;
})};
PL$35/*classSystem*/ = {"isSameType": (function(PL$64/*type1*/, PL$65/*type2*/){
var PL$66/*cDef1*/;
var PL$67/*cDef2*/;
;
if((PL$64/*type1*/ === PL$65/*type2*/)){
return true;;
};
;
PL$66/*cDef1*/ = PL$50/*getClass*/(PL$64/*type1*/);
if(PL$66/*cDef1*/["provisional"]){
if(! PL$66/*cDef1*/["type"]){
return false;;
};
;
PL$64/*type1*/ = PL$66/*cDef1*/["type"];;
PL$66/*cDef1*/ = PL$50/*getClass*/(PL$64/*type1*/);;
};
;
PL$67/*cDef2*/ = PL$50/*getClass*/(PL$65/*type2*/);
if(PL$67/*cDef2*/["provisional"]){
if(! PL$67/*cDef2*/["type"]){
return false;;
};
;
PL$65/*type2*/ = PL$67/*cDef2*/["type"];;
PL$67/*cDef2*/ = PL$50/*getClass*/(PL$65/*type2*/);;
};
;
if((PL$64/*type1*/ === PL$65/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(PL$68/*classLiteral*/, PL$69/*parDefaults*/){
var PL$70/*self*/;
;
PL$70/*self*/ = this;
return PL$70/*self*/["_createClass"](PL$68/*classLiteral*/, PL$69/*parDefaults*/);;
;
}),
"_membersDefined": (function(PL$68/*classLiteral*/){
var PL$70/*self*/;
var PL$71/*cnt*/;
var PL$72/*retPs*/;
var PL$74/*check*/;
var PL$75/*addMember*/;
var PL$78/*i*/;
;
PL$70/*self*/ = this;
PL$71/*cnt*/ = 1;
PL$72/*retPs*/ = new PL$73/*Promise*/();
PL$74/*check*/ = (function(){
;
if(PL$71/*cnt*/){
return;;
};
;
PL$72/*retPs*/["resolve"](PL$68/*classLiteral*/);;
;
});
PL$75/*addMember*/ = (function(PL$76/*m*/){
;
++PL$71/*cnt*/;;
PL$70/*self*/["definitionPromise"](PL$76/*m*/["type"])["then"]((function(PL$77/*definedType*/){
;
PL$76/*m*/["type"] = PL$77/*definedType*/;;
--PL$71/*cnt*/;;
PL$74/*check*/();;
;
}));;
;
});
if(PL$68/*classLiteral*/["members"]){
PL$78/*i*/ = 0;
for(PL$78/*i*/;(PL$78/*i*/ < PL$68/*classLiteral*/["members"]["length"]);++PL$78/*i*/){{PL$75/*addMember*/(PL$68/*classLiteral*/["members"][PL$78/*i*/]);;
}};
;
};
;
--PL$71/*cnt*/;;
PL$74/*check*/();;
return PL$72/*retPs*/;;
;
}),
"_createClass": (function(PL$68/*classLiteral*/, PL$69/*parDefaults*/){
var PL$79/*cAr*/;
var PL$70/*self*/;
var PL$80/*map*/;
var PL$57/*cDef*/;
var PL$51/*cf*/;
var PL$10/*sync*/;
var PL$81/*syncAll*/;
var PL$82/*syncCnt*/;
var PL$83/*trackerIdx*/;
var PL$84/*trackRootIdx*/;
var PL$63/*trackMemberIdx*/;
var PL$89/*freepart*/;
var PL$91/*helpAr*/;
var PL$92/*makeHelpAr*/;
var PL$93/*conIdx*/;
var PL$99/*constructorDef*/;
var PL$100/*constructorFun*/;
var PL$101/*destroyDef*/;
var PL$102/*destroyFun*/;
var PL$103/*untrackIdxAr*/;
var PL$75/*addMember*/;
var PL$118/*createMembersPs*/;
var PL$122/*memberPs*/;
var PL$78/*i*/;
var PL$123/*proto*/;
var PL$124/*freeFun*/;
var PL$125/*f*/;
var PL$128/*finalPs*/;
;
PL$79/*cAr*/ = [];
PL$70/*self*/ = this;
PL$80/*map*/ = {"members": {},
"membersByIndex": {},
"extends": []};
PL$57/*cDef*/ = {"constructor": undefined,
"map": PL$80/*map*/,
"isReady": false,
"track": ((PL$68/*classLiteral*/["track"] || PL$68/*classLiteral*/["sync"]) ? true : false),
"sync": PL$68/*classLiteral*/["sync"],
"unique": PL$68/*classLiteral*/["unique"],
"savable": PL$68/*classLiteral*/["savable"],
"readyPromise": new PL$73/*Promise*/(),
"syncMembers": []};
PL$51/*cf*/ = PL$52/*classHider*/(PL$57/*cDef*/);
if(PL$57/*cDef*/["sync"]){
if(PL$57/*cDef*/["sync"]["serve"]){
PL$57/*cDef*/["syncServe"] = true;;
};
;
};
;
if(PL$57/*cDef*/["savable"]){
PL$57/*cDef*/["unique"] = true;;
};
;
PL$79/*cAr*/["push"](PL$51/*cf*/);;
PL$10/*sync*/ = (PL$68/*classLiteral*/["sync"] ? true : false);
PL$81/*syncAll*/ = false;
if(PL$10/*sync*/){
if(PL$68/*classLiteral*/["sync"]["all"]){
PL$81/*syncAll*/ = true;;
};
;
};
;
PL$82/*syncCnt*/ = 0;
PL$83/*trackerIdx*/;
PL$84/*trackRootIdx*/;
PL$63/*trackMemberIdx*/;
if(PL$57/*cDef*/["track"]){
PL$80/*map*/["trackerIdx"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](undefined);;
PL$80/*map*/["trackRootIdx"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](undefined);;
PL$80/*map*/["trackMemberIdx"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](undefined);;
PL$83/*trackerIdx*/ = PL$80/*map*/["trackerIdx"];;
PL$84/*trackRootIdx*/ = PL$80/*map*/["trackRootIdx"];;
PL$63/*trackMemberIdx*/ = PL$80/*map*/["trackMemberIdx"];;
};
;
if(PL$10/*sync*/){
PL$80/*map*/["syncDataIdx"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"]((function(){
var PL$70/*self*/;
var PL$85/*internalId*/;
var PL$86/*syncData*/;
;
PL$70/*self*/ = this;
PL$85/*internalId*/;
PL$86/*syncData*/ = {"getInternalId": (function(){
;
if(PL$85/*internalId*/){
return PL$85/*internalId*/;;
};
;
PL$85/*internalId*/ = PL$87/*getNewInternalId*/();;
PL$88/*internalObjects*/[PL$85/*internalId*/] = PL$70/*self*/;;
PL$86/*syncData*/["internalId"] = PL$85/*internalId*/;;
return PL$85/*internalId*/;;
;
}),
"transports": []};
this[PL$80/*map*/["syncDataIdx"]] = (function(){
;
return PL$86/*syncData*/;;
;
});;
return PL$86/*syncData*/;;
;
}));;
};
;
if(PL$68/*classLiteral*/["hasFreePart"]){
PL$89/*freepart*/ = {};
PL$80/*map*/["freePart"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](PL$89/*freepart*/);;
PL$80/*map*/["getMemberCode"] = PL$90/*presets*/["getMemberCode"](PL$80/*map*/["freePart"]);;
PL$80/*map*/["setMemberCode"] = PL$90/*presets*/["setMemberCode"](PL$80/*map*/["freePart"]);;
};
;
PL$91/*helpAr*/ = [];
PL$92/*makeHelpAr*/ = (function(){
;
return PL$91/*helpAr*/["slice"]();;
;
});
PL$80/*map*/["connectIdx"] = PL$79/*cAr*/["length"];;
PL$93/*conIdx*/ = PL$80/*map*/["connectIdx"];
PL$79/*cAr*/["push"]((function(){
var PL$91/*helpAr*/;
var PL$98/*arguments*/ = arguments;
;
PL$91/*helpAr*/ = PL$92/*makeHelpAr*/();
this[PL$93/*conIdx*/] = (function(PL$94/*idx*/, PL$95/*fun*/, PL$96/*base*/){
var PL$97/*chain*/;
;
PL$97/*chain*/ = PL$91/*helpAr*/[PL$94/*idx*/];
if(! PL$97/*chain*/){
PL$97/*chain*/ = PL$24/*Chainable*/(this, PL$94/*idx*/);;
PL$91/*helpAr*/[PL$94/*idx*/] = PL$97/*chain*/;;
};
;
return PL$97/*chain*/(PL$95/*fun*/, PL$96/*base*/);;
;
});;
return this[PL$93/*conIdx*/]["apply"](this, PL$98/*arguments*/);;
;
}));;
PL$99/*constructorDef*/;
PL$100/*constructorFun*/;
PL$101/*destroyDef*/;
PL$102/*destroyFun*/;
PL$103/*untrackIdxAr*/ = [];
PL$75/*addMember*/ = (function(PL$76/*m*/){
var PL$58/*mDef*/;
var PL$104/*mType*/;
var PL$105/*isFunction*/;
var PL$106/*memberIdx*/;
var PL$107/*isTrackedMember*/;
var PL$111/*def*/;
var PL$112/*originalFun*/;
var PL$114/*mCDef*/;
var PL$115/*memberTrackMemberIdx*/;
var PL$116/*memberTrackRootIdx*/;
;
PL$58/*mDef*/ = {"index": PL$79/*cAr*/["length"]};
if((PL$81/*syncAll*/ || PL$76/*m*/["sync"])){
PL$58/*mDef*/["sync"] = true;;
};
;
PL$58/*mDef*/["type"] = PL$76/*m*/["type"];;
PL$104/*mType*/ = PL$76/*m*/["type"];
PL$105/*isFunction*/ = PL$70/*self*/["isFunctionType"](PL$58/*mDef*/["type"]);
PL$106/*memberIdx*/ = PL$58/*mDef*/["index"];
PL$107/*isTrackedMember*/ = PL$70/*self*/["isTrackedClass"](PL$58/*mDef*/["type"]);
if(PL$57/*cDef*/["unique"]){
if((PL$76/*m*/["name"] == "id")){
PL$57/*cDef*/["idIndex"] = PL$106/*memberIdx*/;;
PL$57/*cDef*/["idDef"] = PL$58/*mDef*/;;
};
;
};
;
if(PL$58/*mDef*/["sync"]){
PL$58/*mDef*/["hasSetter"] = true;;
if(PL$107/*isTrackedMember*/){
PL$58/*mDef*/["defaultSetter"] = (function(PL$108/*vAr*/){
;
PL$109/*syncFun*/(this, PL$106/*memberIdx*/, PL$104/*mType*/, PL$108/*vAr*/[0]);;
return PL$108/*vAr*/;;
;
});;

}else{
PL$58/*mDef*/["defaultSetter"] = (function(PL$110/*v*/){
;
PL$109/*syncFun*/(this, PL$106/*memberIdx*/, PL$104/*mType*/, PL$110/*v*/);;
return PL$110/*v*/;;
;
});;
};
;
PL$57/*cDef*/["syncMembers"]["push"](PL$58/*mDef*/);;
};
;
PL$80/*map*/["members"][PL$76/*m*/["name"]] = PL$58/*mDef*/;;
PL$80/*map*/["membersByIndex"][PL$58/*mDef*/["index"]] = PL$58/*mDef*/;;
PL$111/*def*/ = (PL$69/*parDefaults*/ ? PL$69/*parDefaults*/[PL$76/*m*/["name"]] : undefined);
if((PL$105/*isFunction*/ && PL$58/*mDef*/["sync"])){
if(! ((PL$76/*m*/["name"] == "constructor") || (PL$76/*m*/["name"] == "destroy"))){
PL$112/*originalFun*/ = PL$111/*def*/;
PL$111/*def*/ = (function(){
var PL$98/*arguments*/ = arguments;
;
PL$113/*syncFunctionFun*/(this, PL$106/*memberIdx*/, PL$104/*mType*/, PL$98/*arguments*/);;
return PL$112/*originalFun*/["apply"](this, PL$98/*arguments*/);;
;
});;
};
;
};
;
PL$79/*cAr*/["push"](PL$111/*def*/);;
if(PL$58/*mDef*/["hasSetter"]){
PL$58/*mDef*/["setterIdx"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](PL$58/*mDef*/["defaultSetter"]);;
};
;
if((PL$76/*m*/["name"] == "constructor")){
PL$99/*constructorDef*/ = PL$58/*mDef*/;;
PL$100/*constructorFun*/ = PL$111/*def*/;;
};
;
if((PL$76/*m*/["name"] == "destroy")){
PL$101/*destroyDef*/ = PL$58/*mDef*/;;
PL$102/*destroyFun*/ = PL$111/*def*/;;
};
;
PL$58/*mDef*/["getCode"] = [PL$36/*MAKRO_SELF*/, (("[" + PL$58/*mDef*/["index"]) + "]")];;
if(PL$58/*mDef*/["hasSetter"]){
PL$58/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$58/*mDef*/["setterIdx"]) + "](v); s[") + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, " v; return v; })(", PL$36/*MAKRO_SELF*/, ", ", PL$40/*MAKRO_VALUE*/, ")"];;

}else{
PL$58/*mDef*/["setCode"] = [PL$36/*MAKRO_SELF*/, (("[" + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, " ", PL$40/*MAKRO_VALUE*/];;
};
;
if(PL$107/*isTrackedMember*/){
PL$114/*mCDef*/ = PL$50/*getClass*/(PL$58/*mDef*/["type"]);
PL$115/*memberTrackMemberIdx*/ = PL$114/*mCDef*/["map"]["trackMemberIdx"];
PL$116/*memberTrackRootIdx*/ = PL$114/*mCDef*/["map"]["trackRootIdx"];
PL$58/*mDef*/["trackIndex"] = PL$79/*cAr*/["length"];;
PL$79/*cAr*/["push"](undefined);;
PL$103/*untrackIdxAr*/["push"](PL$58/*mDef*/["trackIndex"]);;
if(PL$57/*cDef*/["track"]){
if(PL$58/*mDef*/["hasSetter"]){
PL$58/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$116/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$58/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$58/*mDef*/["trackIndex"]) + "]){ s[") + PL$58/*mDef*/["trackIndex"]) + "](); }; s[") + PL$58/*mDef*/["trackIndex"]) + "] = v[") + PL$115/*memberTrackMemberIdx*/) + "](s[") + PL$83/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$36/*MAKRO_SELF*/, ", ", PL$40/*MAKRO_VALUE*/, ")"];;
PL$58/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$58/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$58/*mDef*/["trackIndex"]) + "]){ s[") + PL$58/*mDef*/["trackIndex"]) + "](); }; s[") + PL$58/*mDef*/["trackIndex"]) + "] = v[") + PL$115/*memberTrackMemberIdx*/) + "](s[") + PL$83/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$36/*MAKRO_SELF*/, ", ", PL$40/*MAKRO_VALUE*/, ")"];;

}else{
PL$58/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$58/*mDef*/["trackIndex"]) + "]){ s[") + PL$58/*mDef*/["trackIndex"]) + "](); }; s[") + PL$58/*mDef*/["trackIndex"]) + "] = v[") + PL$115/*memberTrackMemberIdx*/) + "](s[") + PL$83/*trackerIdx*/) + "]); return v; })("), PL$36/*MAKRO_SELF*/, ", ", PL$40/*MAKRO_VALUE*/, ")"];;
PL$58/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$58/*mDef*/["index"]) + "] "), PL$42/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$58/*mDef*/["trackIndex"]) + "]){ s[") + PL$58/*mDef*/["trackIndex"]) + "](); }; s[") + PL$58/*mDef*/["trackIndex"]) + "] = v[") + PL$115/*memberTrackMemberIdx*/) + "](s[") + PL$83/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$36/*MAKRO_SELF*/, ", ", PL$40/*MAKRO_VALUE*/, ")"];;
};
;

}else{
PL$58/*mDef*/["setCode"] = [PL$117/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$58/*mDef*/["setCodeFromTemporary"] = [PL$117/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
PL$58/*mDef*/["connectFunCode"] = [PL$36/*MAKRO_SELF*/, (((("[" + PL$80/*map*/["connectIdx"]) + "](") + PL$58/*mDef*/["index"]) + ", "), PL$40/*MAKRO_VALUE*/, ")"];;
PL$58/*mDef*/["connectSlotCode"] = [PL$36/*MAKRO_SELF*/, (((("[" + PL$80/*map*/["connectIdx"]) + "](") + PL$58/*mDef*/["index"]) + ", "), PL$40/*MAKRO_VALUE*/, "[", PL$44/*MAKRO_VALUEPROPERTY*/, "], ", PL$40/*MAKRO_VALUE*/, ")"];;
;
});
PL$118/*createMembersPs*/ = (function(){
var PL$119/*donePs*/;
;
PL$119/*donePs*/ = new PL$73/*Promise*/();
PL$70/*self*/["_membersDefined"](PL$68/*classLiteral*/)["then"]((function(){
var PL$78/*i*/;
var PL$120/*passedConstructorType*/;
var PL$76/*m*/;
var PL$121/*conDef*/;
;
PL$78/*i*/;
PL$120/*passedConstructorType*/;
if(PL$68/*classLiteral*/["members"]){
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$68/*classLiteral*/["members"]["length"]);++PL$78/*i*/){{PL$76/*m*/ = PL$68/*classLiteral*/["members"][PL$78/*i*/];
if((PL$76/*m*/["name"] == "constructor")){
PL$120/*passedConstructorType*/ = PL$76/*m*/["type"];;
break;;
};
;
}};
;
};
;
if(PL$120/*passedConstructorType*/){
PL$121/*conDef*/ = PL$50/*getClass*/(PL$120/*passedConstructorType*/);
PL$57/*cDef*/["constructorType"] = PL$70/*self*/["createFunctionType"]({"return": PL$51/*cf*/,
"arguments": PL$121/*conDef*/["arguments"]});;

}else{
PL$57/*cDef*/["constructorType"] = PL$70/*self*/["createFunctionType"]({"return": PL$51/*cf*/});;
};
;
if(PL$57/*cDef*/["unique"]){
debugger;
PL$68/*classLiteral*/["members"] = (PL$68/*classLiteral*/["members"] || []);;
PL$57/*cDef*/["idType"] = PL$70/*self*/["getFunctionArgumentType"](PL$57/*cDef*/["constructorType"], 0);;
PL$68/*classLiteral*/["members"]["unshift"]({"name": "id",
"type": PL$57/*cDef*/["idType"],
"defaultValue": undefined});;
};
;
if(PL$68/*classLiteral*/["members"]){
PL$78/*i*/ = 0;
for(PL$78/*i*/;(PL$78/*i*/ < PL$68/*classLiteral*/["members"]["length"]);++PL$78/*i*/){{PL$75/*addMember*/(PL$68/*classLiteral*/["members"][PL$78/*i*/]);;
}};
;
};
;
PL$119/*donePs*/["resolve"]();;
;
}));;
return PL$119/*donePs*/;;
;
});
PL$122/*memberPs*/ = PL$118/*createMembersPs*/();
PL$78/*i*/;
if(PL$68/*classLiteral*/["hasFreePart"]){
PL$123/*proto*/ = {};
if(PL$69/*parDefaults*/){
for(PL$78/*i*/ in PL$69/*parDefaults*/){if(! PL$80/*map*/["members"][PL$78/*i*/]){
PL$123/*proto*/[PL$78/*i*/] = PL$69/*parDefaults*/[PL$78/*i*/];;
};
;
};
;
};
;
PL$124/*freeFun*/ = (function(){
;
;
});
PL$124/*freeFun*/["prototype"] = PL$123/*proto*/;;
PL$125/*f*/ = PL$80/*map*/["freePart"];
if(PL$57/*cDef*/["track"]){
PL$57/*cDef*/["constructor"] = (function(){
var PL$126/*r*/;
var PL$127/*t*/;
;
PL$126/*r*/ = PL$79/*cAr*/["slice"]();
PL$126/*r*/[PL$125/*f*/] = new PL$124/*freeFun*/();;
PL$127/*t*/ = PL$19/*Tracker*/((function(){
;
PL$102/*destroyFun*/["apply"](PL$126/*r*/);;
;
}));
PL$126/*r*/[PL$83/*trackerIdx*/] = PL$127/*t*/[0];;
PL$126/*r*/[PL$84/*trackRootIdx*/] = PL$127/*t*/[1];;
PL$126/*r*/[PL$63/*trackMemberIdx*/] = PL$127/*t*/[2];;
return [PL$126/*r*/, PL$126/*r*/[PL$84/*trackRootIdx*/]()];;
;
});;

}else{
PL$57/*cDef*/["constructor"] = (function(){
var PL$126/*r*/;
;
PL$126/*r*/ = PL$79/*cAr*/["slice"]();
PL$126/*r*/[PL$125/*f*/] = new PL$124/*freeFun*/();;
return PL$126/*r*/;;
;
});;
};
;

}else{
if(PL$57/*cDef*/["track"]){
PL$57/*cDef*/["constructor"] = (function(){
var PL$126/*r*/;
var PL$127/*t*/;
;
PL$126/*r*/ = PL$79/*cAr*/["slice"]();
PL$127/*t*/ = PL$19/*Tracker*/((function(){
;
PL$102/*destroyFun*/["apply"](PL$126/*r*/);;
;
}));
PL$126/*r*/[PL$83/*trackerIdx*/] = PL$127/*t*/[0];;
PL$126/*r*/[PL$84/*trackRootIdx*/] = PL$127/*t*/[1];;
PL$126/*r*/[PL$63/*trackMemberIdx*/] = PL$127/*t*/[2];;
return [PL$126/*r*/, PL$126/*r*/[PL$84/*trackRootIdx*/]()];;
;
});;

}else{
PL$57/*cDef*/["constructor"] = (function(){
var PL$126/*r*/;
;
PL$126/*r*/ = PL$79/*cAr*/["slice"]();
return PL$126/*r*/;;
;
});;
};
;
};
;
PL$128/*finalPs*/ = new PL$73/*Promise*/();
PL$122/*memberPs*/["then"]((function(){
var PL$78/*i*/;
var PL$129/*uniqueRealConstructor*/;
var PL$130/*uniqueMap*/;
var PL$131/*hasVarId*/;
var PL$132/*idType*/;
var PL$133/*idDef*/;
var PL$136/*realConstructor*/;
var PL$121/*conDef*/;
var PL$137/*uniqueRealConstructor2*/;
var PL$139/*_destroyFun*/;
var PL$142/*_sync_destroyFun*/;
;
PL$78/*i*/;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$79/*cAr*/["length"]);++PL$78/*i*/){{PL$91/*helpAr*/["push"](undefined);;
}};
;
if(PL$57/*cDef*/["unique"]){
debugger;
PL$129/*uniqueRealConstructor*/ = PL$57/*cDef*/["constructor"];
PL$130/*uniqueMap*/ = new PL$12/*Map*/();
PL$131/*hasVarId*/ = PL$70/*self*/["isVar"](PL$57/*cDef*/["idType"]);
PL$132/*idType*/ = PL$57/*cDef*/["idType"];
PL$133/*idDef*/ = PL$57/*cDef*/["idDef"];
PL$57/*cDef*/["constructor"] = (function(PL$134/*parId*/){
var PL$135/*instance*/;
var PL$98/*arguments*/ = arguments;
;
debugger;
PL$135/*instance*/ = PL$129/*uniqueRealConstructor*/["apply"](null, PL$98/*arguments*/);
PL$55/*privateClassSystem*/["setMemberByDefFromInstance"](PL$51/*cf*/, PL$135/*instance*/, PL$133/*idDef*/, PL$134/*parId*/);;
return PL$135/*instance*/;;
;
});;
};
;
PL$57/*cDef*/["constructorArguments"] = [];;
if(PL$99/*constructorDef*/){
PL$136/*realConstructor*/ = PL$57/*cDef*/["constructor"];
if(PL$57/*cDef*/["track"]){
PL$57/*cDef*/["constructor"] = (function(){
var PL$135/*instance*/;
var PL$98/*arguments*/ = arguments;
;
PL$135/*instance*/ = PL$136/*realConstructor*/();
PL$100/*constructorFun*/["apply"](PL$135/*instance*/[0], PL$98/*arguments*/);;
return PL$135/*instance*/;;
;
});;

}else{
PL$57/*cDef*/["constructor"] = (function(){
var PL$135/*instance*/;
var PL$98/*arguments*/ = arguments;
;
PL$135/*instance*/ = PL$136/*realConstructor*/();
PL$100/*constructorFun*/["apply"](PL$135/*instance*/, PL$98/*arguments*/);;
return PL$135/*instance*/;;
;
});;
};
;
PL$121/*conDef*/ = PL$50/*getClass*/(PL$99/*constructorDef*/["type"]);
PL$57/*cDef*/["constructorType"] = PL$70/*self*/["createFunctionType"]({"return": PL$51/*cf*/,
"arguments": PL$121/*conDef*/["arguments"]});;

}else{
PL$57/*cDef*/["constructorType"] = PL$70/*self*/["createFunctionType"]({"return": PL$51/*cf*/});;
};
;
if(PL$57/*cDef*/["unique"]){
debugger;
PL$137/*uniqueRealConstructor2*/ = PL$57/*cDef*/["constructor"];
PL$130/*uniqueMap*/ = new PL$12/*Map*/();
PL$131/*hasVarId*/ = PL$70/*self*/["isVar"](PL$57/*cDef*/["idType"]);
PL$132/*idType*/ = PL$57/*cDef*/["idType"];
PL$133/*idDef*/ = PL$57/*cDef*/["idDef"];
PL$57/*cDef*/["constructor"] = (function(PL$134/*parId*/){
var PL$138/*key*/;
var PL$135/*instance*/;
var PL$98/*arguments*/ = arguments;
;
debugger;
if(PL$131/*hasVarId*/){
PL$138/*key*/ = PL$29/*stringify*/(PL$134/*parId*/);

}else{
PL$138/*key*/ = PL$32/*stringifyInstance*/(PL$132/*idType*/, PL$134/*parId*/);
};
;
PL$135/*instance*/ = PL$130/*uniqueMap*/["get"](PL$138/*key*/);
if(PL$135/*instance*/){
if(PL$134/*parId*/){
PL$55/*privateClassSystem*/["untrack"](PL$132/*idType*/, PL$134/*parId*/);;
};
;
return PL$135/*instance*/;;
};
;
PL$135/*instance*/ = PL$137/*uniqueRealConstructor2*/["apply"](null, PL$98/*arguments*/);;
PL$130/*uniqueMap*/["set"](PL$138/*key*/, PL$135/*instance*/);;
return PL$135/*instance*/;;
;
});;
};
;
if(PL$57/*cDef*/["track"]){
PL$139/*_destroyFun*/;
if(PL$103/*untrackIdxAr*/["length"]){
if(PL$101/*destroyDef*/){
PL$139/*_destroyFun*/ = PL$102/*destroyFun*/;;
PL$102/*destroyFun*/ = (function(){
var PL$78/*i*/;
var PL$140/*curIdx*/;
var PL$141/*tFun*/;
;
PL$78/*i*/;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$103/*untrackIdxAr*/["length"]);++PL$78/*i*/){{PL$140/*curIdx*/ = PL$103/*untrackIdxAr*/[PL$78/*i*/];
PL$141/*tFun*/ = this[PL$140/*curIdx*/];
this[PL$140/*curIdx*/] = undefined;;
if(PL$141/*tFun*/){
PL$141/*tFun*/();;
};
;
}};
;
PL$139/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$102/*destroyFun*/ = (function(){
var PL$78/*i*/;
var PL$141/*tFun*/;
;
PL$78/*i*/;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$103/*untrackIdxAr*/["length"]);++PL$78/*i*/){{PL$141/*tFun*/ = this[PL$103/*untrackIdxAr*/[PL$78/*i*/]];
if(PL$141/*tFun*/){
PL$141/*tFun*/();;
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
if(PL$101/*destroyDef*/){
PL$139/*_destroyFun*/ = PL$102/*destroyFun*/;;
PL$102/*destroyFun*/ = (function(){
;
PL$139/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$102/*destroyFun*/ = (function(){
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
if(PL$10/*sync*/){
PL$142/*_sync_destroyFun*/ = PL$102/*destroyFun*/;
PL$102/*destroyFun*/ = (function(){
var PL$86/*syncData*/;
;
PL$86/*syncData*/ = PL$35/*classSystem*/["getSyncData"](this);
PL$143/*destroySynced*/(PL$86/*syncData*/);;
PL$142/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
if(PL$57/*cDef*/["unique"]){
};
;
PL$128/*finalPs*/["resolve"]();;
;
}));;
PL$128/*finalPs*/["then"]((function(){
;
PL$57/*cDef*/["isReady"] = true;;
PL$57/*cDef*/["readyPromise"]["resolve"](PL$51/*cf*/);;
;
}));;
if(PL$10/*sync*/){
if(PL$68/*classLiteral*/["name"]){
PL$57/*cDef*/["syncId"] = {"hash": PL$68/*classLiteral*/["hashStr"],
"name": PL$68/*classLiteral*/["name"]};;
PL$144/*registerSyncClass*/(PL$68/*classLiteral*/["hashStr"], PL$68/*classLiteral*/["name"], PL$51/*cf*/);;
};
;
};
;
return PL$51/*cf*/;;
;
}),
"getTypeFromInstance": (function(PL$33/*parInstance*/){
;
if((typeof PL$33/*parInstance*/[0] === "function")){
return PL$33/*parInstance*/[0];;
};
;
if((PL$33/*parInstance*/["length"] === 2)){
return this["_createTemporaryTrackedClass"](PL$33/*parInstance*/[0][0]);;
};
;
throw PL$2/*errorMsg*/["unknownInstanceType"];
;
}),
"isFunctionType": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"isUniqueClass": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["unique"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(PL$30/*par*/){
var PL$70/*self*/;
var PL$57/*cDef*/;
var PL$145/*checkReady*/;
var PL$146/*makeTemporaries*/;
var PL$147/*isReady*/;
var PL$148/*resolveTypeFun*/;
var PL$78/*i*/;
var PL$51/*cf*/;
;
PL$70/*self*/ = this;
PL$57/*cDef*/ = {"isFunction": true,
"return": (PL$30/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$30/*par*/["arguments"] || []),
"isReady": false};
PL$145/*checkReady*/ = (function(){
;
PL$146/*makeTemporaries*/();;
;
});
PL$146/*makeTemporaries*/ = (function(){
var PL$78/*i*/;
;
PL$57/*cDef*/["return"] = PL$70/*self*/["_createTemporaryTrackedClass"](PL$57/*cDef*/["return"]);;
PL$78/*i*/ = 0;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$57/*cDef*/["arguments"]["length"]);++PL$78/*i*/){{PL$57/*cDef*/["arguments"][PL$78/*i*/] = PL$70/*self*/["_createTemporaryTrackedClass"](PL$57/*cDef*/["arguments"][PL$78/*i*/]);;
}};
;
;
});
PL$147/*isReady*/ = true;
if(PL$70/*self*/["isProvisional"](PL$57/*cDef*/["return"])){
PL$147/*isReady*/ = false;;
PL$70/*self*/["definitionPromise"](PL$57/*cDef*/["return"])["then"]((function(PL$34/*parType*/){
;
PL$57/*cDef*/["return"] = PL$34/*parType*/;;
PL$145/*checkReady*/();;
;
}));;
};
;
PL$148/*resolveTypeFun*/ = (function(PL$149/*parI*/){
;
return (function(PL$34/*parType*/){
;
PL$57/*cDef*/["arguments"][PL$149/*parI*/] = PL$34/*parType*/;;
PL$145/*checkReady*/();;
;
});;
;
});
PL$78/*i*/ = 0;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$57/*cDef*/["arguments"]["length"]);++PL$78/*i*/){{if(PL$70/*self*/["isProvisional"](PL$57/*cDef*/["arguments"][PL$78/*i*/])){
PL$147/*isReady*/ = false;;
PL$70/*self*/["definitionPromise"](PL$57/*cDef*/["arguments"][PL$78/*i*/])["then"](PL$148/*resolveTypeFun*/(PL$78/*i*/));;
};
;
}};
;
PL$51/*cf*/ = PL$52/*classHider*/(PL$57/*cDef*/);
if(! PL$147/*isReady*/){
PL$57/*cDef*/["readyPromise"] = new PL$73/*Promise*/();;
PL$145/*checkReady*/ = (function(){
var PL$78/*i*/;
;
if(PL$70/*self*/["isProvisional"](PL$57/*cDef*/["return"])){
return;;
};
;
PL$78/*i*/ = 0;
for(PL$78/*i*/ = 0;(PL$78/*i*/ < PL$57/*cDef*/["arguments"]["length"]);++PL$78/*i*/){{if(PL$70/*self*/["isProvisional"](PL$57/*cDef*/["arguments"][PL$78/*i*/])){
return;;
};
;
}};
;
PL$146/*makeTemporaries*/();;
PL$57/*cDef*/["isReady"] = true;;
PL$57/*cDef*/["readyPromise"]["resolve"](PL$51/*cf*/);;
;
});;
PL$145/*checkReady*/();;

}else{
PL$145/*checkReady*/();;
PL$57/*cDef*/["isReady"] = true;;
};
;
return PL$51/*cf*/;;
;
}),
"isVar": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return PL$57/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if(PL$57/*cDef*/["arguments"]){
return PL$57/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(PL$34/*parType*/, PL$150/*parIndex*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
if((PL$57/*cDef*/["arguments"] && PL$57/*cDef*/["arguments"][PL$150/*parIndex*/])){
return PL$57/*cDef*/["arguments"][PL$150/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$34/*parType*/, PL$150/*parIndex*/){
var PL$57/*cDef*/;
var PL$127/*t*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
PL$127/*t*/;
if(PL$57/*cDef*/["constructorArguments"]){
PL$127/*t*/ = PL$57/*cDef*/["constructorArguments"][PL$150/*parIndex*/];;
};
;
if(PL$127/*t*/){
return PL$127/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(PL$34/*parType*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
return PL$57/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(PL$151/*parName*/){
;
return PL$54/*builtinTypes*/[PL$151/*parName*/];;
;
}),
"getPropertyAlias": (function(PL$30/*par*/){
var PL$57/*cDef*/;
var PL$80/*map*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$30/*par*/["type"]);
if(PL$57/*cDef*/["isVar"]){
return PL$30/*par*/["property"];;
};
;
PL$80/*map*/ = PL$57/*cDef*/["map"];
if(((PL$80/*map*/ && PL$80/*map*/["members"]) && PL$80/*map*/["members"][PL$30/*par*/["property"]])){
return PL$80/*map*/["members"][PL$30/*par*/["property"]]["index"];;
};
;
return PL$30/*par*/["property"];;
;
}),
"getPropertyType": (function(PL$30/*par*/){
var PL$57/*cDef*/;
var PL$80/*map*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$30/*par*/["type"]);
if(PL$57/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
PL$80/*map*/ = PL$57/*cDef*/["map"];
if(PL$80/*map*/["members"][PL$30/*par*/["property"]]){
if(PL$30/*par*/["original"]){
return (PL$80/*map*/["members"][PL$30/*par*/["property"]]["originalType"] || PL$80/*map*/["members"][PL$30/*par*/["property"]]["type"]);;

}else{
return PL$80/*map*/["members"][PL$30/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(PL$30/*par*/){
var PL$57/*cDef*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$30/*par*/["type"]);
if(PL$57/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(PL$57/*cDef*/["constructorType"]){
return PL$57/*cDef*/["constructorType"];;
};
;
throw PL$2/*errorMsg*/["noConstructorAvailable"];
;
}),
"setMemberByDef": (function(PL$152/*parDynInstance*/, PL$59/*parMemberDefinition*/, PL$153/*parValueDynInstance*/){
var PL$61/*realInstance*/;
var PL$62/*tracker*/;
var PL$57/*cDef*/;
var PL$63/*trackMemberIdx*/;
;
PL$61/*realInstance*/ = PL$152/*parDynInstance*/["instance"];
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["index"]] = PL$153/*parValueDynInstance*/["getInstanceAsType"](PL$59/*parMemberDefinition*/["type"]);;
if(this["isTrackedClass"](PL$59/*parMemberDefinition*/["type"])){
PL$62/*tracker*/ = this["getTrackerFromDynInstance"](PL$152/*parDynInstance*/);
PL$57/*cDef*/ = PL$50/*getClass*/(PL$153/*parValueDynInstance*/["type"]);
PL$63/*trackMemberIdx*/ = PL$57/*cDef*/["map"]["trackMemberIdx"];
if(PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]]){
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$61/*realInstance*/[PL$59/*parMemberDefinition*/["trackIndex"]] = PL$153/*parValueDynInstance*/["instance"][PL$63/*trackMemberIdx*/](PL$62/*tracker*/);;
};
;
;
}),
"getTrack": (function(PL$33/*parInstance*/){
var PL$154/*type*/;
var PL$57/*cDef*/;
;
if(! PL$33/*parInstance*/){
return;;
};
;
PL$154/*type*/ = PL$33/*parInstance*/[0];
PL$57/*cDef*/ = PL$50/*getClass*/(PL$154/*type*/);
return PL$33/*parInstance*/[PL$57/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"canSet": (function(PL$155/*parTargetType*/, PL$156/*parSourceType*/){
var PL$157/*allOk*/;
var PL$78/*i*/;
var PL$158/*l*/;
var PL$159/*tp*/;
var PL$160/*sp*/;
;
if(((PL$155/*parTargetType*/ === undefined) && (PL$156/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$155/*parTargetType*/ === undefined) || (PL$156/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$155/*parTargetType*/ === PL$156/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$156/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$155/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$155/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$156/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$155/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$155/*parTargetType*/), PL$156/*parSourceType*/);;
};
;
if((((PL$155/*parTargetType*/["isFunction"] && PL$156/*parSourceType*/["isFunction"]) && this["canSet"](PL$155/*parTargetType*/["returnType"], PL$156/*parSourceType*/["returnType"])) && (PL$155/*parTargetType*/["parameters"]["length"] == PL$156/*parSourceType*/["parameters"]["length"]))){
PL$157/*allOk*/ = true;
PL$78/*i*/ = 0;
PL$158/*l*/ = PL$155/*parTargetType*/["parameters"]["length"];
for(PL$78/*i*/;(PL$78/*i*/ < PL$158/*l*/);++PL$78/*i*/){{PL$159/*tp*/ = PL$155/*parTargetType*/["parameters"][PL$78/*i*/];
PL$160/*sp*/ = PL$156/*parSourceType*/["parameters"][PL$78/*i*/];
if(! this["canSet"](PL$160/*sp*/, PL$159/*tp*/)){
PL$157/*allOk*/ = false;;
};
;
}};
;
if(PL$157/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$34/*parType*/, PL$161/*parProperty*/, PL$162/*parFunType*/){
var PL$57/*cDef*/;
var PL$80/*map*/;
var PL$58/*mDef*/;
var PL$163/*propertyType*/;
;
PL$57/*cDef*/ = PL$50/*getClass*/(PL$34/*parType*/);
PL$80/*map*/ = PL$57/*cDef*/["map"];
if(PL$80/*map*/["members"][PL$161/*parProperty*/]){
PL$58/*mDef*/ = PL$80/*map*/["members"][PL$161/*parProperty*/];
PL$163/*propertyType*/ = this["getPropertyType"]({"type": PL$34/*parType*/,
"property": PL$161/*parProperty*/});
if(! this["canSet"](PL$163/*propertyType*/, PL$162/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$163/*propertyType*/) || this["isFunctionType"](PL$163/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$162/*parFunType*/) || this["isFunctionType"](PL$162/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$164/*getEffectiveFunctionResultType*/ = (function(PL$162/*parFunType*/){
var PL$165/*res*/;
var PL$168/*resultType*/;
var PL$169/*unTrackedType*/;
var PL$170/*promiseConstructor*/;
var PL$171/*promiseResolveType*/;
;
PL$165/*res*/ = {"promiseResolveType": PL$35/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$35/*classSystem*/["getFunctionReturnType"](PL$162/*parFunType*/),
"resolvePromise": (function(PL$166/*parPromise*/, PL$167/*parValue*/){
;
PL$166/*parPromise*/["resolve"](PL$167/*parValue*/);;
;
}),
"rejectPromise": (function(PL$166/*parPromise*/, PL$167/*parValue*/){
;
PL$166/*parPromise*/["reject"](PL$167/*parValue*/);;
;
})};
PL$168/*resultType*/ = PL$165/*res*/["originalResultType"];
PL$165/*res*/["newPromise"] = (function(){
;
return new PL$73/*Promise*/();;
;
});;
if(PL$35/*classSystem*/["isTemporaryTrackedClass"](PL$168/*resultType*/)){
PL$165/*res*/["isTemporary"] = true;;
PL$169/*unTrackedType*/ = PL$35/*classSystem*/["getClassFromTemporaryTracked"](PL$168/*resultType*/);
if(PL$35/*classSystem*/["isPromiseOfClass"](PL$169/*unTrackedType*/)){
PL$170/*promiseConstructor*/ = PL$35/*classSystem*/["getTypeConstructor"](PL$169/*unTrackedType*/);
PL$165/*res*/["newPromise"] = (function(){
;
return PL$170/*promiseConstructor*/();;
;
});;
PL$165/*res*/["resolvePromise"] = (function(PL$166/*parPromise*/, PL$167/*parValue*/){
;
PL$166/*parPromise*/[0]["resolve"](PL$167/*parValue*/);;
;
});;
PL$165/*res*/["rejectPromise"] = (function(PL$166/*parPromise*/, PL$167/*parValue*/){
;
PL$166/*parPromise*/[0]["reject"](PL$167/*parValue*/);;
;
});;
PL$171/*promiseResolveType*/ = PL$35/*classSystem*/["getClassFromPromiseOf"](PL$169/*unTrackedType*/);
PL$165/*res*/["promiseResolveType"] = PL$171/*promiseResolveType*/;;
};
;
};
;
return PL$165/*res*/;;
;
});
PL$172/*_stringEncodeStr*/ = (function(PL$30/*par*/){
var PL$173/*s*/;
;
PL$173/*s*/ = PL$30/*par*/["replace"](new PL$174/*RegExp*/("\\\\", "g"), "\\\\");
PL$173/*s*/ = PL$173/*s*/["replace"](new PL$174/*RegExp*/("\\n", "g"), "\\n");;
PL$173/*s*/ = PL$173/*s*/["replace"](new PL$174/*RegExp*/("\\r", "g"), "\\r");;
PL$173/*s*/ = PL$173/*s*/["replace"](new PL$174/*RegExp*/("\\\"", "g"), "\\\"");;
PL$173/*s*/ = PL$173/*s*/["replace"](new PL$174/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$173/*s*/ = PL$173/*s*/["replace"](new PL$174/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$173/*s*/;;
;
});
PL$175/*stringEncodeStr*/ = (function(PL$30/*par*/){
;
return (("\"" + PL$172/*_stringEncodeStr*/(PL$30/*par*/)) + "\"");;
;
});
PL$176/*internals*/ = {"classHider": PL$52/*classHider*/,
"getClass": PL$50/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$175/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$164/*getEffectiveFunctionResultType*/};
PL$7/*provisional*/(PL$35/*classSystem*/, PL$176/*internals*/);;
PL$8/*temporary*/(PL$35/*classSystem*/, PL$176/*internals*/);;
PL$9/*promiseOf*/(PL$35/*classSystem*/, PL$176/*internals*/);;
PL$10/*sync*/(PL$35/*classSystem*/, PL$176/*internals*/);;
PL$144/*registerSyncClass*/ = PL$176/*internals*/["registerSyncClass"];
PL$143/*destroySynced*/ = PL$176/*internals*/["destroySynced"];
PL$177/*getClassBySyncId*/ = PL$176/*internals*/["getClassBySyncId"];
PL$109/*syncFun*/ = PL$176/*internals*/["syncFun"];
PL$113/*syncFunctionFun*/ = PL$176/*internals*/["syncFunctionFun"];
PL$88/*internalObjects*/ = PL$176/*internals*/["internalObjects"];
PL$87/*getNewInternalId*/ = PL$176/*internals*/["getNewInternalId"];
PL$11/*codeGeneration*/(PL$35/*classSystem*/, PL$176/*internals*/);;
PL$117/*runtimeError*/ = PL$176/*internals*/["runtimeError"];
PL$90/*presets*/ = PL$176/*internals*/["presets"];
PL$178/*promiseland*/["classSystem"] = PL$35/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$35/*classSystem*/,
"internalObjects": PL$88/*internalObjects*/,
"getClassBySyncId": PL$177/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$164/*getEffectiveFunctionResultType*/});;
return PL$35/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();