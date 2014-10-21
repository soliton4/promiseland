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
  defineFun(["./classSystem/DynInstance", "./classSystem/Wrapper", "./classSystem/TrackedPromise", "./classSystem/provisional", "./classSystem/temporary", "./classSystem/promiseOf", "./classSystem/sync", "./classSystem/savable", "./classSystem/codeGeneration", "./Map"], function(PL$4/*DynInstance*/, PL$5/*Wrapper*/, PL$6/*TrackedPromise*/, PL$7/*provisional*/, PL$8/*temporary*/, PL$9/*promiseOf*/, PL$10/*sync*/, PL$11/*savable*/, PL$12/*codeGeneration*/, PL$13/*Map*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "ba1742d7c09fd1f14726a549a28729fd" })){ return promiseland._getModule("ba1742d7c09fd1f14726a549a28729fd"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$32/*JSON*/;try{PL$32/*JSON*/ = JSON;}catch(e){};
var PL$74/*Promise*/;try{PL$74/*Promise*/ = Promise;}catch(e){};
var PL$175/*RegExp*/;try{PL$175/*RegExp*/ = RegExp;}catch(e){};
var PL$179/*promiseland*/;try{PL$179/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$14/*getModuleData*/;
var PL$20/*Tracker*/;
var PL$25/*Chainable*/;
var PL$30/*stringify*/;
var PL$33/*stringifyInstance*/;
var PL$37/*MAKRO_SELF*/;
var PL$38/*MAKRO_PROPERTY*/;
var PL$39/*MAKRO_PROPERTYSTRING*/;
var PL$40/*MAKRO_PROPERTYVALUE*/;
var PL$41/*MAKRO_VALUE*/;
var PL$42/*MAKRO_LEFT*/;
var PL$43/*MAKRO_OPERATOR*/;
var PL$44/*MAKRO_RIGHT*/;
var PL$45/*MAKRO_VALUEPROPERTY*/;
var PL$46/*MAKRO_RESOLVEFUN*/;
var PL$47/*MAKRO_REJECTFUN*/;
var PL$48/*MAKRO_TYPEVALUE*/;
var PL$49/*MAKRO_CONSTRUCTOR*/;
var PL$50/*_actClass*/;
var PL$51/*getClass*/;
var PL$53/*classHider*/;
var PL$55/*builtinTypes*/;
var PL$56/*privateClassSystem*/;
var PL$36/*classSystem*/;
var PL$165/*getEffectiveFunctionResultType*/;
var PL$173/*_stringEncodeStr*/;
var PL$176/*stringEncodeStr*/;
var PL$177/*internals*/;
var PL$145/*registerSyncClass*/;
var PL$144/*destroySynced*/;
var PL$178/*getClassBySyncId*/;
var PL$110/*syncFun*/;
var PL$114/*syncFunctionFun*/;
var PL$89/*internalObjects*/;
var PL$88/*getNewInternalId*/;
var PL$118/*runtimeError*/;
var PL$91/*presets*/;
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
PL$11/*savable*/ = PL$3/*extra*/["getModule"](PL$11/*savable*/);;
PL$12/*codeGeneration*/ = PL$3/*extra*/["getModule"](PL$12/*codeGeneration*/);;
PL$13/*Map*/ = PL$3/*extra*/["getModule"](PL$13/*Map*/);;
PL$14/*getModuleData*/;
(function(){
var PL$15 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$15.reject(e); }; }; };
var PL$18 = function(e){ PL$15.reject(e); };
PL$17(function(){;
PL$3/*extra*/["moduleSystemPs"].then(PL$17(function(PL$19){PL$14/*getModuleData*/ = PL$19["getModuleData"];;
PL$15.resolve(); return;;
}), PL$18);
;})();
return PL$15;
})();;
PL$20/*Tracker*/;
(function(){
var PL$21 = new __Promise();
var PL$22 = function(code){ return function(res){ try{code(res);}catch(e){ PL$21.reject(e); }; }; };
var PL$23 = function(e){ PL$21.reject(e); };
PL$22(function(){;
PL$3/*extra*/["TrackerPs"].then(PL$22(function(PL$24){PL$20/*Tracker*/ = PL$24["Tracker"];;
PL$21.resolve(); return;;
}), PL$23);
;})();
return PL$21;
})();;
PL$25/*Chainable*/;
(function(){
var PL$26 = new __Promise();
var PL$27 = function(code){ return function(res){ try{code(res);}catch(e){ PL$26.reject(e); }; }; };
var PL$28 = function(e){ PL$26.reject(e); };
PL$27(function(){;
PL$3/*extra*/["ChainablePs"].then(PL$27(function(PL$29){PL$25/*Chainable*/ = PL$29["Chainable"];;
PL$26.resolve(); return;;
}), PL$28);
;})();
return PL$26;
})();;
PL$30/*stringify*/ = (function(PL$31/*par*/){
;
return PL$32/*JSON*/["stringify"](PL$31/*par*/);;
;
});
PL$33/*stringifyInstance*/ = (function(PL$34/*parType*/, PL$35/*parInstance*/){
;
if(! PL$36/*classSystem*/["isUniqueClass"](PL$34/*parType*/)){
throw PL$2/*errorMsg*/["onlyUniqueCanBeStringified"];
};
;
;
});
PL$37/*MAKRO_SELF*/ = 0;
PL$38/*MAKRO_PROPERTY*/ = 1;
PL$39/*MAKRO_PROPERTYSTRING*/ = 2;
PL$40/*MAKRO_PROPERTYVALUE*/ = 3;
PL$41/*MAKRO_VALUE*/ = 4;
PL$42/*MAKRO_LEFT*/ = 5;
PL$43/*MAKRO_OPERATOR*/ = 6;
PL$44/*MAKRO_RIGHT*/ = 7;
PL$45/*MAKRO_VALUEPROPERTY*/ = 8;
PL$46/*MAKRO_RESOLVEFUN*/ = 9;
PL$47/*MAKRO_REJECTFUN*/ = 10;
PL$48/*MAKRO_TYPEVALUE*/ = 11;
PL$49/*MAKRO_CONSTRUCTOR*/ = 12;
PL$50/*_actClass*/;
PL$51/*getClass*/ = (function(PL$52/*cf*/){
;
PL$50/*_actClass*/ = undefined;;
PL$52/*cf*/();;
return PL$50/*_actClass*/;;
;
});
PL$53/*classHider*/ = (function(PL$54/*toHide*/){
;
return (function(){
;
PL$50/*_actClass*/ = PL$54/*toHide*/;;
;
});;
;
});
PL$55/*builtinTypes*/ = {"var": PL$53/*classHider*/({"isVar": true,
"isReady": true}),
"statement": PL$53/*classHider*/({"isStatement": true,
"isReady": true})};
PL$56/*privateClassSystem*/ = {"stringifyInstance": PL$33/*stringifyInstance*/,
"stringify": PL$30/*stringify*/,
"getMemberByName": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$57/*parMemberName*/){
var PL$58/*cDef*/;
var PL$59/*mDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$59/*mDef*/ = PL$58/*cDef*/["map"]["members"][PL$57/*parMemberName*/];
if(PL$59/*mDef*/){
return PL$35/*parInstance*/[PL$59/*mDef*/["index"]];;
};
;
if((PL$58/*cDef*/["map"]["freePart"] !== undefined)){
return PL$35/*parInstance*/[PL$58/*cDef*/["map"]["freePart"]][PL$57/*parMemberName*/];;
};
;
return;;
;
}),
"getTrackerFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
return PL$35/*parInstance*/[PL$58/*cDef*/["map"]["trackerIdx"]];;
;
}),
"setMemberByDefFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$60/*parMemberDefinition*/, PL$61/*parValueInstance*/){
var PL$62/*realInstance*/;
var PL$63/*tracker*/;
var PL$58/*cDef*/;
var PL$64/*trackMemberIdx*/;
;
PL$62/*realInstance*/ = PL$56/*privateClassSystem*/["getRealInstance"](PL$34/*parType*/, PL$35/*parInstance*/);
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["index"]] = PL$61/*parValueInstance*/;;
if(PL$36/*classSystem*/["isTrackedClass"](PL$60/*parMemberDefinition*/["type"])){
PL$63/*tracker*/ = PL$36/*classSystem*/["getTrackerFromInstance"](PL$34/*parType*/, PL$62/*realInstance*/);
PL$58/*cDef*/ = PL$51/*getClass*/(PL$60/*parMemberDefinition*/["type"]);
PL$64/*trackMemberIdx*/ = PL$58/*cDef*/["map"]["trackMemberIdx"];
if(PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]]){
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]] = PL$61/*parValueInstance*/[PL$64/*trackMemberIdx*/](PL$63/*tracker*/);;
};
;
;
}),
"getRealInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/){
;
if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/)){
return PL$35/*parInstance*/[0];;
};
;
return PL$35/*parInstance*/;;
;
}),
"untrack": (function(PL$34/*parType*/, PL$35/*parInstance*/){
;
if((PL$35/*parInstance*/ && PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$34/*parType*/))){
PL$35/*parInstance*/[1]();;
};
;
;
})};
PL$36/*classSystem*/ = {"isSameType": (function(PL$65/*type1*/, PL$66/*type2*/){
var PL$67/*cDef1*/;
var PL$68/*cDef2*/;
;
if((PL$65/*type1*/ === PL$66/*type2*/)){
return true;;
};
;
PL$67/*cDef1*/ = PL$51/*getClass*/(PL$65/*type1*/);
if(PL$67/*cDef1*/["provisional"]){
if(! PL$67/*cDef1*/["type"]){
return false;;
};
;
PL$65/*type1*/ = PL$67/*cDef1*/["type"];;
PL$67/*cDef1*/ = PL$51/*getClass*/(PL$65/*type1*/);;
};
;
PL$68/*cDef2*/ = PL$51/*getClass*/(PL$66/*type2*/);
if(PL$68/*cDef2*/["provisional"]){
if(! PL$68/*cDef2*/["type"]){
return false;;
};
;
PL$66/*type2*/ = PL$68/*cDef2*/["type"];;
PL$68/*cDef2*/ = PL$51/*getClass*/(PL$66/*type2*/);;
};
;
if((PL$65/*type1*/ === PL$66/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(PL$69/*classLiteral*/, PL$70/*parDefaults*/){
var PL$71/*self*/;
;
PL$71/*self*/ = this;
return PL$71/*self*/["_createClass"](PL$69/*classLiteral*/, PL$70/*parDefaults*/);;
;
}),
"_membersDefined": (function(PL$69/*classLiteral*/){
var PL$71/*self*/;
var PL$72/*cnt*/;
var PL$73/*retPs*/;
var PL$75/*check*/;
var PL$76/*addMember*/;
var PL$79/*i*/;
;
PL$71/*self*/ = this;
PL$72/*cnt*/ = 1;
PL$73/*retPs*/ = new PL$74/*Promise*/();
PL$75/*check*/ = (function(){
;
if(PL$72/*cnt*/){
return;;
};
;
PL$73/*retPs*/["resolve"](PL$69/*classLiteral*/);;
;
});
PL$76/*addMember*/ = (function(PL$77/*m*/){
;
++PL$72/*cnt*/;;
PL$71/*self*/["definitionPromise"](PL$77/*m*/["type"])["then"]((function(PL$78/*definedType*/){
;
PL$77/*m*/["type"] = PL$78/*definedType*/;;
--PL$72/*cnt*/;;
PL$75/*check*/();;
;
}));;
;
});
if(PL$69/*classLiteral*/["members"]){
PL$79/*i*/ = 0;
for(PL$79/*i*/;(PL$79/*i*/ < PL$69/*classLiteral*/["members"]["length"]);++PL$79/*i*/){{PL$76/*addMember*/(PL$69/*classLiteral*/["members"][PL$79/*i*/]);;
}};
;
};
;
--PL$72/*cnt*/;;
PL$75/*check*/();;
return PL$73/*retPs*/;;
;
}),
"_createClass": (function(PL$69/*classLiteral*/, PL$70/*parDefaults*/){
var PL$80/*cAr*/;
var PL$71/*self*/;
var PL$81/*map*/;
var PL$58/*cDef*/;
var PL$52/*cf*/;
var PL$10/*sync*/;
var PL$82/*syncAll*/;
var PL$83/*syncCnt*/;
var PL$84/*trackerIdx*/;
var PL$85/*trackRootIdx*/;
var PL$64/*trackMemberIdx*/;
var PL$90/*freepart*/;
var PL$92/*helpAr*/;
var PL$93/*makeHelpAr*/;
var PL$94/*conIdx*/;
var PL$100/*constructorDef*/;
var PL$101/*constructorFun*/;
var PL$102/*destroyDef*/;
var PL$103/*destroyFun*/;
var PL$104/*untrackIdxAr*/;
var PL$76/*addMember*/;
var PL$119/*createMembersPs*/;
var PL$123/*memberPs*/;
var PL$79/*i*/;
var PL$124/*proto*/;
var PL$125/*freeFun*/;
var PL$126/*f*/;
var PL$129/*finalPs*/;
;
PL$80/*cAr*/ = [];
PL$71/*self*/ = this;
PL$81/*map*/ = {"members": {},
"membersByIndex": {},
"membersAr": [],
"extends": []};
PL$58/*cDef*/ = {"constructor": undefined,
"map": PL$81/*map*/,
"isReady": false,
"track": ((PL$69/*classLiteral*/["track"] || PL$69/*classLiteral*/["sync"]) ? true : false),
"sync": PL$69/*classLiteral*/["sync"],
"unique": PL$69/*classLiteral*/["unique"],
"savable": PL$69/*classLiteral*/["savable"],
"readyPromise": new PL$74/*Promise*/(),
"syncMembers": []};
PL$52/*cf*/ = PL$53/*classHider*/(PL$58/*cDef*/);
if(PL$58/*cDef*/["sync"]){
if(PL$58/*cDef*/["sync"]["serve"]){
PL$58/*cDef*/["syncServe"] = true;;
};
;
};
;
if(PL$58/*cDef*/["savable"]){
PL$58/*cDef*/["unique"] = true;;
};
;
PL$80/*cAr*/["push"](PL$52/*cf*/);;
PL$10/*sync*/ = (PL$69/*classLiteral*/["sync"] ? true : false);
PL$82/*syncAll*/ = false;
if(PL$10/*sync*/){
if(PL$69/*classLiteral*/["sync"]["all"]){
PL$82/*syncAll*/ = true;;
};
;
};
;
PL$83/*syncCnt*/ = 0;
PL$84/*trackerIdx*/;
PL$85/*trackRootIdx*/;
PL$64/*trackMemberIdx*/;
if(PL$58/*cDef*/["track"]){
PL$81/*map*/["trackerIdx"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](undefined);;
PL$81/*map*/["trackRootIdx"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](undefined);;
PL$81/*map*/["trackMemberIdx"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](undefined);;
PL$84/*trackerIdx*/ = PL$81/*map*/["trackerIdx"];;
PL$85/*trackRootIdx*/ = PL$81/*map*/["trackRootIdx"];;
PL$64/*trackMemberIdx*/ = PL$81/*map*/["trackMemberIdx"];;
};
;
if(PL$10/*sync*/){
PL$81/*map*/["syncDataIdx"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"]((function(){
var PL$71/*self*/;
var PL$86/*internalId*/;
var PL$87/*syncData*/;
;
PL$71/*self*/ = this;
PL$86/*internalId*/;
PL$87/*syncData*/ = {"getInternalId": (function(){
;
if(PL$86/*internalId*/){
return PL$86/*internalId*/;;
};
;
PL$86/*internalId*/ = PL$88/*getNewInternalId*/();;
PL$89/*internalObjects*/[PL$86/*internalId*/] = PL$71/*self*/;;
PL$87/*syncData*/["internalId"] = PL$86/*internalId*/;;
return PL$86/*internalId*/;;
;
}),
"transports": []};
this[PL$81/*map*/["syncDataIdx"]] = (function(){
;
return PL$87/*syncData*/;;
;
});;
return PL$87/*syncData*/;;
;
}));;
};
;
if(PL$69/*classLiteral*/["hasFreePart"]){
PL$90/*freepart*/ = {};
PL$81/*map*/["freePart"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](PL$90/*freepart*/);;
PL$81/*map*/["getMemberCode"] = PL$91/*presets*/["getMemberCode"](PL$81/*map*/["freePart"]);;
PL$81/*map*/["setMemberCode"] = PL$91/*presets*/["setMemberCode"](PL$81/*map*/["freePart"]);;
};
;
PL$92/*helpAr*/ = [];
PL$93/*makeHelpAr*/ = (function(){
;
return PL$92/*helpAr*/["slice"]();;
;
});
PL$81/*map*/["connectIdx"] = PL$80/*cAr*/["length"];;
PL$94/*conIdx*/ = PL$81/*map*/["connectIdx"];
PL$80/*cAr*/["push"]((function(){
var PL$92/*helpAr*/;
var PL$99/*arguments*/ = arguments;
;
PL$92/*helpAr*/ = PL$93/*makeHelpAr*/();
this[PL$94/*conIdx*/] = (function(PL$95/*idx*/, PL$96/*fun*/, PL$97/*base*/){
var PL$98/*chain*/;
;
PL$98/*chain*/ = PL$92/*helpAr*/[PL$95/*idx*/];
if(! PL$98/*chain*/){
PL$98/*chain*/ = PL$25/*Chainable*/(this, PL$95/*idx*/);;
PL$92/*helpAr*/[PL$95/*idx*/] = PL$98/*chain*/;;
};
;
return PL$98/*chain*/(PL$96/*fun*/, PL$97/*base*/);;
;
});;
return this[PL$94/*conIdx*/]["apply"](this, PL$99/*arguments*/);;
;
}));;
PL$100/*constructorDef*/;
PL$101/*constructorFun*/;
PL$102/*destroyDef*/;
PL$103/*destroyFun*/;
PL$104/*untrackIdxAr*/ = [];
PL$76/*addMember*/ = (function(PL$77/*m*/){
var PL$59/*mDef*/;
var PL$105/*mType*/;
var PL$106/*isFunction*/;
var PL$107/*memberIdx*/;
var PL$108/*isTrackedMember*/;
var PL$112/*def*/;
var PL$113/*originalFun*/;
var PL$115/*mCDef*/;
var PL$116/*memberTrackMemberIdx*/;
var PL$117/*memberTrackRootIdx*/;
;
PL$59/*mDef*/ = {"index": PL$80/*cAr*/["length"],
"name": PL$77/*m*/["name"]};
if((PL$82/*syncAll*/ || PL$77/*m*/["sync"])){
PL$59/*mDef*/["sync"] = true;;
};
;
PL$59/*mDef*/["type"] = PL$77/*m*/["type"];;
PL$105/*mType*/ = PL$77/*m*/["type"];
PL$106/*isFunction*/ = PL$71/*self*/["isFunctionType"](PL$59/*mDef*/["type"]);
PL$107/*memberIdx*/ = PL$59/*mDef*/["index"];
PL$108/*isTrackedMember*/ = PL$71/*self*/["isTrackedClass"](PL$59/*mDef*/["type"]);
if(PL$58/*cDef*/["unique"]){
if((PL$77/*m*/["name"] == "id")){
PL$58/*cDef*/["idIndex"] = PL$107/*memberIdx*/;;
PL$58/*cDef*/["idDef"] = PL$59/*mDef*/;;
};
;
};
;
if(PL$59/*mDef*/["sync"]){
PL$59/*mDef*/["hasSetter"] = true;;
if(PL$108/*isTrackedMember*/){
PL$59/*mDef*/["defaultSetter"] = (function(PL$109/*vAr*/){
;
PL$110/*syncFun*/(this, PL$107/*memberIdx*/, PL$105/*mType*/, PL$109/*vAr*/[0]);;
return PL$109/*vAr*/;;
;
});;

}else{
PL$59/*mDef*/["defaultSetter"] = (function(PL$111/*v*/){
;
PL$110/*syncFun*/(this, PL$107/*memberIdx*/, PL$105/*mType*/, PL$111/*v*/);;
return PL$111/*v*/;;
;
});;
};
;
PL$58/*cDef*/["syncMembers"]["push"](PL$59/*mDef*/);;
};
;
PL$81/*map*/["members"][PL$77/*m*/["name"]] = PL$59/*mDef*/;;
PL$81/*map*/["membersByIndex"][PL$59/*mDef*/["index"]] = PL$59/*mDef*/;;
PL$81/*map*/["membersAr"]["push"](PL$59/*mDef*/);;
PL$112/*def*/ = (PL$70/*parDefaults*/ ? PL$70/*parDefaults*/[PL$77/*m*/["name"]] : undefined);
if((PL$106/*isFunction*/ && PL$59/*mDef*/["sync"])){
if(! ((PL$77/*m*/["name"] == "constructor") || (PL$77/*m*/["name"] == "destroy"))){
PL$113/*originalFun*/ = PL$112/*def*/;
PL$112/*def*/ = (function(){
var PL$99/*arguments*/ = arguments;
;
PL$114/*syncFunctionFun*/(this, PL$107/*memberIdx*/, PL$105/*mType*/, PL$99/*arguments*/);;
return PL$113/*originalFun*/["apply"](this, PL$99/*arguments*/);;
;
});;
};
;
};
;
PL$80/*cAr*/["push"](PL$112/*def*/);;
if(PL$59/*mDef*/["hasSetter"]){
PL$59/*mDef*/["setterIdx"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](PL$59/*mDef*/["defaultSetter"]);;
};
;
if((PL$77/*m*/["name"] == "constructor")){
PL$100/*constructorDef*/ = PL$59/*mDef*/;;
PL$101/*constructorFun*/ = PL$112/*def*/;;
};
;
if((PL$77/*m*/["name"] == "destroy")){
PL$102/*destroyDef*/ = PL$59/*mDef*/;;
PL$103/*destroyFun*/ = PL$112/*def*/;;
};
;
PL$59/*mDef*/["getCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$59/*mDef*/["index"]) + "]")];;
if(PL$59/*mDef*/["hasSetter"]){
PL$59/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$59/*mDef*/["setterIdx"]) + "](v); s[") + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " v; return v; })(", PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;

}else{
PL$59/*mDef*/["setCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " ", PL$41/*MAKRO_VALUE*/];;
};
;
if(PL$108/*isTrackedMember*/){
PL$115/*mCDef*/ = PL$51/*getClass*/(PL$59/*mDef*/["type"]);
PL$116/*memberTrackMemberIdx*/ = PL$115/*mCDef*/["map"]["trackMemberIdx"];
PL$117/*memberTrackRootIdx*/ = PL$115/*mCDef*/["map"]["trackRootIdx"];
PL$59/*mDef*/["trackIndex"] = PL$80/*cAr*/["length"];;
PL$80/*cAr*/["push"](undefined);;
PL$104/*untrackIdxAr*/["push"](PL$59/*mDef*/["trackIndex"]);;
if(PL$58/*cDef*/["track"]){
if(PL$59/*mDef*/["hasSetter"]){
PL$59/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$117/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$59/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$59/*mDef*/["trackIndex"]) + "]){ s[") + PL$59/*mDef*/["trackIndex"]) + "](); }; s[") + PL$59/*mDef*/["trackIndex"]) + "] = v[") + PL$116/*memberTrackMemberIdx*/) + "](s[") + PL$84/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
PL$59/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$59/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$59/*mDef*/["trackIndex"]) + "]){ s[") + PL$59/*mDef*/["trackIndex"]) + "](); }; s[") + PL$59/*mDef*/["trackIndex"]) + "] = v[") + PL$116/*memberTrackMemberIdx*/) + "](s[") + PL$84/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;

}else{
PL$59/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$59/*mDef*/["trackIndex"]) + "]){ s[") + PL$59/*mDef*/["trackIndex"]) + "](); }; s[") + PL$59/*mDef*/["trackIndex"]) + "] = v[") + PL$116/*memberTrackMemberIdx*/) + "](s[") + PL$84/*trackerIdx*/) + "]); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
PL$59/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$59/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$59/*mDef*/["trackIndex"]) + "]){ s[") + PL$59/*mDef*/["trackIndex"]) + "](); }; s[") + PL$59/*mDef*/["trackIndex"]) + "] = v[") + PL$116/*memberTrackMemberIdx*/) + "](s[") + PL$84/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
};
;

}else{
PL$59/*mDef*/["setCode"] = [PL$118/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$59/*mDef*/["setCodeFromTemporary"] = [PL$118/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
PL$59/*mDef*/["connectFunCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$81/*map*/["connectIdx"]) + "](") + PL$59/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, ")"];;
PL$59/*mDef*/["connectSlotCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$81/*map*/["connectIdx"]) + "](") + PL$59/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, "[", PL$45/*MAKRO_VALUEPROPERTY*/, "], ", PL$41/*MAKRO_VALUE*/, ")"];;
;
});
PL$119/*createMembersPs*/ = (function(){
var PL$120/*donePs*/;
;
PL$120/*donePs*/ = new PL$74/*Promise*/();
PL$71/*self*/["_membersDefined"](PL$69/*classLiteral*/)["then"]((function(){
var PL$79/*i*/;
var PL$121/*passedConstructorType*/;
var PL$77/*m*/;
var PL$122/*conDef*/;
;
PL$79/*i*/;
PL$121/*passedConstructorType*/;
if(PL$69/*classLiteral*/["members"]){
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$69/*classLiteral*/["members"]["length"]);++PL$79/*i*/){{PL$77/*m*/ = PL$69/*classLiteral*/["members"][PL$79/*i*/];
if((PL$77/*m*/["name"] == "constructor")){
PL$121/*passedConstructorType*/ = PL$77/*m*/["type"];;
break;;
};
;
}};
;
};
;
if(PL$121/*passedConstructorType*/){
PL$122/*conDef*/ = PL$51/*getClass*/(PL$121/*passedConstructorType*/);
PL$58/*cDef*/["constructorType"] = PL$71/*self*/["createFunctionType"]({"return": PL$52/*cf*/,
"arguments": PL$122/*conDef*/["arguments"]});;

}else{
PL$58/*cDef*/["constructorType"] = PL$71/*self*/["createFunctionType"]({"return": PL$52/*cf*/});;
};
;
if(PL$58/*cDef*/["unique"]){
PL$69/*classLiteral*/["members"] = (PL$69/*classLiteral*/["members"] || []);;
PL$58/*cDef*/["idType"] = PL$71/*self*/["getFunctionArgumentType"](PL$58/*cDef*/["constructorType"], 0);;
PL$69/*classLiteral*/["members"]["unshift"]({"name": "id",
"type": PL$58/*cDef*/["idType"],
"defaultValue": undefined});;
};
;
if(PL$69/*classLiteral*/["members"]){
PL$79/*i*/ = 0;
for(PL$79/*i*/;(PL$79/*i*/ < PL$69/*classLiteral*/["members"]["length"]);++PL$79/*i*/){{PL$76/*addMember*/(PL$69/*classLiteral*/["members"][PL$79/*i*/]);;
}};
;
};
;
PL$120/*donePs*/["resolve"]();;
;
}));;
return PL$120/*donePs*/;;
;
});
PL$123/*memberPs*/ = PL$119/*createMembersPs*/();
PL$79/*i*/;
if(PL$69/*classLiteral*/["hasFreePart"]){
PL$124/*proto*/ = {};
if(PL$70/*parDefaults*/){
for(PL$79/*i*/ in PL$70/*parDefaults*/){if(! PL$81/*map*/["members"][PL$79/*i*/]){
PL$124/*proto*/[PL$79/*i*/] = PL$70/*parDefaults*/[PL$79/*i*/];;
};
;
};
;
};
;
PL$125/*freeFun*/ = (function(){
;
;
});
PL$125/*freeFun*/["prototype"] = PL$124/*proto*/;;
PL$126/*f*/ = PL$81/*map*/["freePart"];
if(PL$58/*cDef*/["track"]){
PL$58/*cDef*/["constructor"] = (function(){
var PL$127/*r*/;
var PL$128/*t*/;
;
PL$127/*r*/ = PL$80/*cAr*/["slice"]();
PL$127/*r*/[PL$126/*f*/] = new PL$125/*freeFun*/();;
PL$128/*t*/ = PL$20/*Tracker*/((function(){
;
PL$103/*destroyFun*/["apply"](PL$127/*r*/);;
;
}));
PL$127/*r*/[PL$84/*trackerIdx*/] = PL$128/*t*/[0];;
PL$127/*r*/[PL$85/*trackRootIdx*/] = PL$128/*t*/[1];;
PL$127/*r*/[PL$64/*trackMemberIdx*/] = PL$128/*t*/[2];;
return [PL$127/*r*/, PL$127/*r*/[PL$85/*trackRootIdx*/]()];;
;
});;

}else{
PL$58/*cDef*/["constructor"] = (function(){
var PL$127/*r*/;
;
PL$127/*r*/ = PL$80/*cAr*/["slice"]();
PL$127/*r*/[PL$126/*f*/] = new PL$125/*freeFun*/();;
return PL$127/*r*/;;
;
});;
};
;

}else{
if(PL$58/*cDef*/["track"]){
PL$58/*cDef*/["constructor"] = (function(){
var PL$127/*r*/;
var PL$128/*t*/;
;
PL$127/*r*/ = PL$80/*cAr*/["slice"]();
PL$128/*t*/ = PL$20/*Tracker*/((function(){
;
PL$103/*destroyFun*/["apply"](PL$127/*r*/);;
;
}));
PL$127/*r*/[PL$84/*trackerIdx*/] = PL$128/*t*/[0];;
PL$127/*r*/[PL$85/*trackRootIdx*/] = PL$128/*t*/[1];;
PL$127/*r*/[PL$64/*trackMemberIdx*/] = PL$128/*t*/[2];;
return [PL$127/*r*/, PL$127/*r*/[PL$85/*trackRootIdx*/]()];;
;
});;

}else{
PL$58/*cDef*/["constructor"] = (function(){
var PL$127/*r*/;
;
PL$127/*r*/ = PL$80/*cAr*/["slice"]();
return PL$127/*r*/;;
;
});;
};
;
};
;
PL$129/*finalPs*/ = new PL$74/*Promise*/();
PL$123/*memberPs*/["then"]((function(){
var PL$79/*i*/;
var PL$130/*uniqueRealConstructor*/;
var PL$131/*uniqueMap*/;
var PL$132/*hasVarId*/;
var PL$133/*idType*/;
var PL$134/*idDef*/;
var PL$137/*realConstructor*/;
var PL$122/*conDef*/;
var PL$138/*uniqueRealConstructor2*/;
var PL$140/*_destroyFun*/;
var PL$143/*_sync_destroyFun*/;
;
PL$79/*i*/;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$80/*cAr*/["length"]);++PL$79/*i*/){{PL$92/*helpAr*/["push"](undefined);;
}};
;
if(PL$58/*cDef*/["unique"]){
debugger;
PL$130/*uniqueRealConstructor*/ = PL$58/*cDef*/["constructor"];
PL$131/*uniqueMap*/ = new PL$13/*Map*/();
PL$132/*hasVarId*/ = PL$71/*self*/["isVar"](PL$58/*cDef*/["idType"]);
PL$133/*idType*/ = PL$58/*cDef*/["idType"];
PL$134/*idDef*/ = PL$58/*cDef*/["idDef"];
PL$58/*cDef*/["constructor"] = (function(PL$135/*parId*/){
var PL$136/*instance*/;
var PL$99/*arguments*/ = arguments;
;
debugger;
PL$136/*instance*/ = PL$130/*uniqueRealConstructor*/["apply"](null, PL$99/*arguments*/);
PL$56/*privateClassSystem*/["setMemberByDefFromInstance"](PL$52/*cf*/, PL$136/*instance*/, PL$134/*idDef*/, PL$135/*parId*/);;
return PL$136/*instance*/;;
;
});;
};
;
PL$58/*cDef*/["constructorArguments"] = [];;
if(PL$100/*constructorDef*/){
PL$137/*realConstructor*/ = PL$58/*cDef*/["constructor"];
if(PL$58/*cDef*/["track"]){
PL$58/*cDef*/["constructor"] = (function(){
var PL$136/*instance*/;
var PL$99/*arguments*/ = arguments;
;
PL$136/*instance*/ = PL$137/*realConstructor*/();
PL$101/*constructorFun*/["apply"](PL$136/*instance*/[0], PL$99/*arguments*/);;
return PL$136/*instance*/;;
;
});;

}else{
PL$58/*cDef*/["constructor"] = (function(){
var PL$136/*instance*/;
var PL$99/*arguments*/ = arguments;
;
PL$136/*instance*/ = PL$137/*realConstructor*/();
PL$101/*constructorFun*/["apply"](PL$136/*instance*/, PL$99/*arguments*/);;
return PL$136/*instance*/;;
;
});;
};
;
PL$122/*conDef*/ = PL$51/*getClass*/(PL$100/*constructorDef*/["type"]);
PL$58/*cDef*/["constructorType"] = PL$71/*self*/["createFunctionType"]({"return": PL$52/*cf*/,
"arguments": PL$122/*conDef*/["arguments"]});;

}else{
PL$58/*cDef*/["constructorType"] = PL$71/*self*/["createFunctionType"]({"return": PL$52/*cf*/});;
};
;
if(PL$58/*cDef*/["unique"]){
PL$138/*uniqueRealConstructor2*/ = PL$58/*cDef*/["constructor"];
PL$131/*uniqueMap*/ = new PL$13/*Map*/();
PL$132/*hasVarId*/ = PL$71/*self*/["isVar"](PL$58/*cDef*/["idType"]);
PL$133/*idType*/ = PL$58/*cDef*/["idType"];
PL$134/*idDef*/ = PL$58/*cDef*/["idDef"];
PL$58/*cDef*/["constructor"] = (function(PL$135/*parId*/){
var PL$139/*key*/;
var PL$136/*instance*/;
var PL$99/*arguments*/ = arguments;
;
if(PL$132/*hasVarId*/){
PL$139/*key*/ = PL$30/*stringify*/(PL$135/*parId*/);

}else{
PL$139/*key*/ = PL$33/*stringifyInstance*/(PL$133/*idType*/, PL$135/*parId*/);
};
;
PL$136/*instance*/ = PL$131/*uniqueMap*/["get"](PL$139/*key*/);
if(PL$136/*instance*/){
if(PL$135/*parId*/){
PL$56/*privateClassSystem*/["untrack"](PL$133/*idType*/, PL$135/*parId*/);;
};
;
return PL$136/*instance*/;;
};
;
PL$136/*instance*/ = PL$138/*uniqueRealConstructor2*/["apply"](null, PL$99/*arguments*/);;
PL$131/*uniqueMap*/["set"](PL$139/*key*/, PL$136/*instance*/);;
return PL$136/*instance*/;;
;
});;
};
;
if(PL$58/*cDef*/["track"]){
PL$140/*_destroyFun*/;
if(PL$104/*untrackIdxAr*/["length"]){
if(PL$102/*destroyDef*/){
PL$140/*_destroyFun*/ = PL$103/*destroyFun*/;;
PL$103/*destroyFun*/ = (function(){
var PL$79/*i*/;
var PL$141/*curIdx*/;
var PL$142/*tFun*/;
;
PL$79/*i*/;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$104/*untrackIdxAr*/["length"]);++PL$79/*i*/){{PL$141/*curIdx*/ = PL$104/*untrackIdxAr*/[PL$79/*i*/];
PL$142/*tFun*/ = this[PL$141/*curIdx*/];
this[PL$141/*curIdx*/] = undefined;;
if(PL$142/*tFun*/){
PL$142/*tFun*/();;
};
;
}};
;
PL$140/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$103/*destroyFun*/ = (function(){
var PL$79/*i*/;
var PL$142/*tFun*/;
;
PL$79/*i*/;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$104/*untrackIdxAr*/["length"]);++PL$79/*i*/){{PL$142/*tFun*/ = this[PL$104/*untrackIdxAr*/[PL$79/*i*/]];
if(PL$142/*tFun*/){
PL$142/*tFun*/();;
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
if(PL$102/*destroyDef*/){
PL$140/*_destroyFun*/ = PL$103/*destroyFun*/;;
PL$103/*destroyFun*/ = (function(){
;
PL$140/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$103/*destroyFun*/ = (function(){
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
PL$143/*_sync_destroyFun*/ = PL$103/*destroyFun*/;
PL$103/*destroyFun*/ = (function(){
var PL$87/*syncData*/;
;
PL$87/*syncData*/ = PL$36/*classSystem*/["getSyncData"](this);
PL$144/*destroySynced*/(PL$87/*syncData*/);;
PL$143/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
if(PL$58/*cDef*/["unique"]){
};
;
PL$129/*finalPs*/["resolve"]();;
;
}));;
PL$129/*finalPs*/["then"]((function(){
;
PL$58/*cDef*/["isReady"] = true;;
if(PL$58/*cDef*/["savable"]){
PL$56/*privateClassSystem*/["registerSavableClass"](PL$52/*cf*/);;
};
;
PL$58/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);;
;
}));;
if(PL$10/*sync*/){
if(PL$69/*classLiteral*/["name"]){
PL$58/*cDef*/["syncId"] = {"hash": PL$69/*classLiteral*/["hashStr"],
"name": PL$69/*classLiteral*/["name"]};;
PL$145/*registerSyncClass*/(PL$69/*classLiteral*/["hashStr"], PL$69/*classLiteral*/["name"], PL$52/*cf*/);;
};
;
};
;
return PL$52/*cf*/;;
;
}),
"getTypeFromInstance": (function(PL$35/*parInstance*/){
;
if((typeof PL$35/*parInstance*/[0] === "function")){
return PL$35/*parInstance*/[0];;
};
;
if((PL$35/*parInstance*/["length"] === 2)){
return this["_createTemporaryTrackedClass"](PL$35/*parInstance*/[0][0]);;
};
;
throw PL$2/*errorMsg*/["unknownInstanceType"];
;
}),
"isFunctionType": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"isUniqueClass": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["unique"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(PL$31/*par*/){
var PL$71/*self*/;
var PL$58/*cDef*/;
var PL$146/*checkReady*/;
var PL$147/*makeTemporaries*/;
var PL$148/*isReady*/;
var PL$149/*resolveTypeFun*/;
var PL$79/*i*/;
var PL$52/*cf*/;
;
PL$71/*self*/ = this;
PL$58/*cDef*/ = {"isFunction": true,
"return": (PL$31/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$31/*par*/["arguments"] || []),
"isReady": false};
PL$146/*checkReady*/ = (function(){
;
PL$147/*makeTemporaries*/();;
;
});
PL$147/*makeTemporaries*/ = (function(){
var PL$79/*i*/;
;
PL$58/*cDef*/["return"] = PL$71/*self*/["_createTemporaryTrackedClass"](PL$58/*cDef*/["return"]);;
PL$79/*i*/ = 0;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$58/*cDef*/["arguments"]["length"]);++PL$79/*i*/){{PL$58/*cDef*/["arguments"][PL$79/*i*/] = PL$71/*self*/["_createTemporaryTrackedClass"](PL$58/*cDef*/["arguments"][PL$79/*i*/]);;
}};
;
;
});
PL$148/*isReady*/ = true;
if(PL$71/*self*/["isProvisional"](PL$58/*cDef*/["return"])){
PL$148/*isReady*/ = false;;
PL$71/*self*/["definitionPromise"](PL$58/*cDef*/["return"])["then"]((function(PL$34/*parType*/){
;
PL$58/*cDef*/["return"] = PL$34/*parType*/;;
PL$146/*checkReady*/();;
;
}));;
};
;
PL$149/*resolveTypeFun*/ = (function(PL$150/*parI*/){
;
return (function(PL$34/*parType*/){
;
PL$58/*cDef*/["arguments"][PL$150/*parI*/] = PL$34/*parType*/;;
PL$146/*checkReady*/();;
;
});;
;
});
PL$79/*i*/ = 0;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$58/*cDef*/["arguments"]["length"]);++PL$79/*i*/){{if(PL$71/*self*/["isProvisional"](PL$58/*cDef*/["arguments"][PL$79/*i*/])){
PL$148/*isReady*/ = false;;
PL$71/*self*/["definitionPromise"](PL$58/*cDef*/["arguments"][PL$79/*i*/])["then"](PL$149/*resolveTypeFun*/(PL$79/*i*/));;
};
;
}};
;
PL$52/*cf*/ = PL$53/*classHider*/(PL$58/*cDef*/);
if(! PL$148/*isReady*/){
PL$58/*cDef*/["readyPromise"] = new PL$74/*Promise*/();;
PL$146/*checkReady*/ = (function(){
var PL$79/*i*/;
;
if(PL$71/*self*/["isProvisional"](PL$58/*cDef*/["return"])){
return;;
};
;
PL$79/*i*/ = 0;
for(PL$79/*i*/ = 0;(PL$79/*i*/ < PL$58/*cDef*/["arguments"]["length"]);++PL$79/*i*/){{if(PL$71/*self*/["isProvisional"](PL$58/*cDef*/["arguments"][PL$79/*i*/])){
return;;
};
;
}};
;
PL$147/*makeTemporaries*/();;
PL$58/*cDef*/["isReady"] = true;;
PL$58/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);;
;
});;
PL$146/*checkReady*/();;

}else{
PL$146/*checkReady*/();;
PL$58/*cDef*/["isReady"] = true;;
};
;
return PL$52/*cf*/;;
;
}),
"isVar": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return PL$58/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$58/*cDef*/["arguments"]){
return PL$58/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(PL$34/*parType*/, PL$151/*parIndex*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if((PL$58/*cDef*/["arguments"] && PL$58/*cDef*/["arguments"][PL$151/*parIndex*/])){
return PL$58/*cDef*/["arguments"][PL$151/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$34/*parType*/, PL$151/*parIndex*/){
var PL$58/*cDef*/;
var PL$128/*t*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$128/*t*/;
if(PL$58/*cDef*/["constructorArguments"]){
PL$128/*t*/ = PL$58/*cDef*/["constructorArguments"][PL$151/*parIndex*/];;
};
;
if(PL$128/*t*/){
return PL$128/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(PL$34/*parType*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
return PL$58/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(PL$152/*parName*/){
;
return PL$55/*builtinTypes*/[PL$152/*parName*/];;
;
}),
"getPropertyAlias": (function(PL$31/*par*/){
var PL$58/*cDef*/;
var PL$81/*map*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$58/*cDef*/["isVar"]){
return PL$31/*par*/["property"];;
};
;
PL$81/*map*/ = PL$58/*cDef*/["map"];
if(((PL$81/*map*/ && PL$81/*map*/["members"]) && PL$81/*map*/["members"][PL$31/*par*/["property"]])){
return PL$81/*map*/["members"][PL$31/*par*/["property"]]["index"];;
};
;
return PL$31/*par*/["property"];;
;
}),
"getPropertyType": (function(PL$31/*par*/){
var PL$58/*cDef*/;
var PL$81/*map*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$58/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
PL$81/*map*/ = PL$58/*cDef*/["map"];
if(PL$81/*map*/["members"][PL$31/*par*/["property"]]){
if(PL$31/*par*/["original"]){
return (PL$81/*map*/["members"][PL$31/*par*/["property"]]["originalType"] || PL$81/*map*/["members"][PL$31/*par*/["property"]]["type"]);;

}else{
return PL$81/*map*/["members"][PL$31/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(PL$31/*par*/){
var PL$58/*cDef*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$58/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(PL$58/*cDef*/["constructorType"]){
return PL$58/*cDef*/["constructorType"];;
};
;
throw PL$2/*errorMsg*/["noConstructorAvailable"];
;
}),
"setMemberByDef": (function(PL$153/*parDynInstance*/, PL$60/*parMemberDefinition*/, PL$154/*parValueDynInstance*/){
var PL$62/*realInstance*/;
var PL$63/*tracker*/;
var PL$58/*cDef*/;
var PL$64/*trackMemberIdx*/;
;
PL$62/*realInstance*/ = PL$153/*parDynInstance*/["instance"];
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["index"]] = PL$154/*parValueDynInstance*/["getInstanceAsType"](PL$60/*parMemberDefinition*/["type"]);;
if(this["isTrackedClass"](PL$60/*parMemberDefinition*/["type"])){
PL$63/*tracker*/ = this["getTrackerFromDynInstance"](PL$153/*parDynInstance*/);
PL$58/*cDef*/ = PL$51/*getClass*/(PL$154/*parValueDynInstance*/["type"]);
PL$64/*trackMemberIdx*/ = PL$58/*cDef*/["map"]["trackMemberIdx"];
if(PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]]){
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$62/*realInstance*/[PL$60/*parMemberDefinition*/["trackIndex"]] = PL$154/*parValueDynInstance*/["instance"][PL$64/*trackMemberIdx*/](PL$63/*tracker*/);;
};
;
;
}),
"getTrack": (function(PL$35/*parInstance*/){
var PL$155/*type*/;
var PL$58/*cDef*/;
;
if(! PL$35/*parInstance*/){
return;;
};
;
PL$155/*type*/ = PL$35/*parInstance*/[0];
PL$58/*cDef*/ = PL$51/*getClass*/(PL$155/*type*/);
return PL$35/*parInstance*/[PL$58/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"canSet": (function(PL$156/*parTargetType*/, PL$157/*parSourceType*/){
var PL$158/*allOk*/;
var PL$79/*i*/;
var PL$159/*l*/;
var PL$160/*tp*/;
var PL$161/*sp*/;
;
if(((PL$156/*parTargetType*/ === undefined) && (PL$157/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$156/*parTargetType*/ === undefined) || (PL$157/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$156/*parTargetType*/ === PL$157/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$157/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$156/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$156/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$157/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$156/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$156/*parTargetType*/), PL$157/*parSourceType*/);;
};
;
if((((PL$156/*parTargetType*/["isFunction"] && PL$157/*parSourceType*/["isFunction"]) && this["canSet"](PL$156/*parTargetType*/["returnType"], PL$157/*parSourceType*/["returnType"])) && (PL$156/*parTargetType*/["parameters"]["length"] == PL$157/*parSourceType*/["parameters"]["length"]))){
PL$158/*allOk*/ = true;
PL$79/*i*/ = 0;
PL$159/*l*/ = PL$156/*parTargetType*/["parameters"]["length"];
for(PL$79/*i*/;(PL$79/*i*/ < PL$159/*l*/);++PL$79/*i*/){{PL$160/*tp*/ = PL$156/*parTargetType*/["parameters"][PL$79/*i*/];
PL$161/*sp*/ = PL$157/*parSourceType*/["parameters"][PL$79/*i*/];
if(! this["canSet"](PL$161/*sp*/, PL$160/*tp*/)){
PL$158/*allOk*/ = false;;
};
;
}};
;
if(PL$158/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$34/*parType*/, PL$162/*parProperty*/, PL$163/*parFunType*/){
var PL$58/*cDef*/;
var PL$81/*map*/;
var PL$59/*mDef*/;
var PL$164/*propertyType*/;
;
PL$58/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$81/*map*/ = PL$58/*cDef*/["map"];
if(PL$81/*map*/["members"][PL$162/*parProperty*/]){
PL$59/*mDef*/ = PL$81/*map*/["members"][PL$162/*parProperty*/];
PL$164/*propertyType*/ = this["getPropertyType"]({"type": PL$34/*parType*/,
"property": PL$162/*parProperty*/});
if(! this["canSet"](PL$164/*propertyType*/, PL$163/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$164/*propertyType*/) || this["isFunctionType"](PL$164/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$163/*parFunType*/) || this["isFunctionType"](PL$163/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$165/*getEffectiveFunctionResultType*/ = (function(PL$163/*parFunType*/){
var PL$166/*res*/;
var PL$169/*resultType*/;
var PL$170/*unTrackedType*/;
var PL$171/*promiseConstructor*/;
var PL$172/*promiseResolveType*/;
;
PL$166/*res*/ = {"promiseResolveType": PL$36/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$36/*classSystem*/["getFunctionReturnType"](PL$163/*parFunType*/),
"resolvePromise": (function(PL$167/*parPromise*/, PL$168/*parValue*/){
;
PL$167/*parPromise*/["resolve"](PL$168/*parValue*/);;
;
}),
"rejectPromise": (function(PL$167/*parPromise*/, PL$168/*parValue*/){
;
PL$167/*parPromise*/["reject"](PL$168/*parValue*/);;
;
})};
PL$169/*resultType*/ = PL$166/*res*/["originalResultType"];
PL$166/*res*/["newPromise"] = (function(){
;
return new PL$74/*Promise*/();;
;
});;
if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$169/*resultType*/)){
PL$166/*res*/["isTemporary"] = true;;
PL$170/*unTrackedType*/ = PL$36/*classSystem*/["getClassFromTemporaryTracked"](PL$169/*resultType*/);
if(PL$36/*classSystem*/["isPromiseOfClass"](PL$170/*unTrackedType*/)){
PL$171/*promiseConstructor*/ = PL$36/*classSystem*/["getTypeConstructor"](PL$170/*unTrackedType*/);
PL$166/*res*/["newPromise"] = (function(){
;
return PL$171/*promiseConstructor*/();;
;
});;
PL$166/*res*/["resolvePromise"] = (function(PL$167/*parPromise*/, PL$168/*parValue*/){
;
PL$167/*parPromise*/[0]["resolve"](PL$168/*parValue*/);;
;
});;
PL$166/*res*/["rejectPromise"] = (function(PL$167/*parPromise*/, PL$168/*parValue*/){
;
PL$167/*parPromise*/[0]["reject"](PL$168/*parValue*/);;
;
});;
PL$172/*promiseResolveType*/ = PL$36/*classSystem*/["getClassFromPromiseOf"](PL$170/*unTrackedType*/);
PL$166/*res*/["promiseResolveType"] = PL$172/*promiseResolveType*/;;
};
;
};
;
return PL$166/*res*/;;
;
});
PL$173/*_stringEncodeStr*/ = (function(PL$31/*par*/){
var PL$174/*s*/;
;
PL$174/*s*/ = PL$31/*par*/["replace"](new PL$175/*RegExp*/("\\\\", "g"), "\\\\");
PL$174/*s*/ = PL$174/*s*/["replace"](new PL$175/*RegExp*/("\\n", "g"), "\\n");;
PL$174/*s*/ = PL$174/*s*/["replace"](new PL$175/*RegExp*/("\\r", "g"), "\\r");;
PL$174/*s*/ = PL$174/*s*/["replace"](new PL$175/*RegExp*/("\\\"", "g"), "\\\"");;
PL$174/*s*/ = PL$174/*s*/["replace"](new PL$175/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$174/*s*/ = PL$174/*s*/["replace"](new PL$175/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$174/*s*/;;
;
});
PL$176/*stringEncodeStr*/ = (function(PL$31/*par*/){
;
return (("\"" + PL$173/*_stringEncodeStr*/(PL$31/*par*/)) + "\"");;
;
});
PL$177/*internals*/ = {"classHider": PL$53/*classHider*/,
"getClass": PL$51/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$176/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$165/*getEffectiveFunctionResultType*/,
"privateClassSystem": PL$56/*privateClassSystem*/};
PL$7/*provisional*/(PL$36/*classSystem*/, PL$177/*internals*/);;
PL$8/*temporary*/(PL$36/*classSystem*/, PL$177/*internals*/);;
PL$9/*promiseOf*/(PL$36/*classSystem*/, PL$177/*internals*/);;
PL$10/*sync*/(PL$36/*classSystem*/, PL$177/*internals*/);;
PL$145/*registerSyncClass*/ = PL$177/*internals*/["registerSyncClass"];
PL$144/*destroySynced*/ = PL$177/*internals*/["destroySynced"];
PL$178/*getClassBySyncId*/ = PL$177/*internals*/["getClassBySyncId"];
PL$110/*syncFun*/ = PL$177/*internals*/["syncFun"];
PL$114/*syncFunctionFun*/ = PL$177/*internals*/["syncFunctionFun"];
PL$89/*internalObjects*/ = PL$177/*internals*/["internalObjects"];
PL$88/*getNewInternalId*/ = PL$177/*internals*/["getNewInternalId"];
PL$12/*codeGeneration*/(PL$36/*classSystem*/, PL$177/*internals*/);;
PL$118/*runtimeError*/ = PL$177/*internals*/["runtimeError"];
PL$91/*presets*/ = PL$177/*internals*/["presets"];
PL$179/*promiseland*/["classSystem"] = PL$36/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$36/*classSystem*/,
"privateClassSystem": PL$56/*privateClassSystem*/,
"internalObjects": PL$89/*internalObjects*/,
"getClassBySyncId": PL$178/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$165/*getEffectiveFunctionResultType*/});;
return PL$36/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();