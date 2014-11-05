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
if (promiseland._hasModule({ hashStr: "3b6f0d5ff777822a4bfb356595c25d24" })){ return promiseland._getModule("3b6f0d5ff777822a4bfb356595c25d24"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$32/*JSON*/;try{PL$32/*JSON*/ = JSON;}catch(e){};
var PL$57/*Object*/;try{PL$57/*Object*/ = Object;}catch(e){};
var PL$79/*Promise*/;try{PL$79/*Promise*/ = Promise;}catch(e){};
var PL$158/*promiseland*/;try{PL$158/*promiseland*/ = promiseland;}catch(e){};
var PL$196/*RegExp*/;try{PL$196/*RegExp*/ = RegExp;}catch(e){};
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
var PL$56/*hasOwnProperty*/;
var PL$58/*privateClassSystem*/;
var PL$69/*pcs*/;
var PL$36/*classSystem*/;
var PL$185/*cs*/;
var PL$186/*getEffectiveFunctionResultType*/;
var PL$194/*_stringEncodeStr*/;
var PL$197/*stringEncodeStr*/;
var PL$198/*internals*/;
var PL$164/*registerSyncClass*/;
var PL$163/*destroySynced*/;
var PL$199/*getClassBySyncId*/;
var PL$115/*syncFun*/;
var PL$119/*syncFunctionFun*/;
var PL$94/*internalObjects*/;
var PL$93/*getNewInternalId*/;
var PL$123/*runtimeError*/;
var PL$96/*presets*/;
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
PL$56/*hasOwnProperty*/ = PL$57/*Object*/["prototype"]["hasOwnProperty"];
PL$58/*privateClassSystem*/ = {"stringifyInstance": PL$33/*stringifyInstance*/,
"stringify": PL$30/*stringify*/,
"getMemberByName": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$59/*parMemberName*/){
var PL$60/*cDef*/;
var PL$61/*mDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$61/*mDef*/ = PL$60/*cDef*/["map"]["members"][PL$59/*parMemberName*/];
if(PL$61/*mDef*/){
return PL$35/*parInstance*/[PL$61/*mDef*/["index"]];;
};
;
if((PL$60/*cDef*/["map"]["freePart"] !== undefined)){
return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["freePart"]][PL$59/*parMemberName*/];;
};
;
return;;
;
}),
"getTrackerFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["trackerIdx"]];;
;
}),
"setMemberByDefFromInstance": (function(PL$34/*parType*/, PL$35/*parInstance*/, PL$62/*parMemberDefinition*/, PL$63/*parValueInstance*/){
var PL$64/*realInstance*/;
var PL$65/*tracker*/;
var PL$60/*cDef*/;
var PL$66/*trackMemberIdx*/;
;
PL$64/*realInstance*/ = PL$58/*privateClassSystem*/["getRealInstance"](PL$34/*parType*/, PL$35/*parInstance*/);
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["index"]] = PL$63/*parValueInstance*/;;
if(PL$36/*classSystem*/["isTrackedClass"](PL$62/*parMemberDefinition*/["type"])){
PL$65/*tracker*/ = PL$36/*classSystem*/["getTrackerFromInstance"](PL$34/*parType*/, PL$64/*realInstance*/);
PL$60/*cDef*/ = PL$51/*getClass*/(PL$62/*parMemberDefinition*/["type"]);
PL$66/*trackMemberIdx*/ = PL$60/*cDef*/["map"]["trackMemberIdx"];
if(PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]){
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]] = PL$63/*parValueInstance*/[PL$66/*trackMemberIdx*/](PL$65/*tracker*/);;
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
}),
"hasOwnProperty": (function(PL$67/*obj*/, PL$68/*property*/){
;
return PL$56/*hasOwnProperty*/["apply"](PL$67/*obj*/, [PL$68/*property*/]);;
;
})};
PL$69/*pcs*/ = PL$58/*privateClassSystem*/;
PL$36/*classSystem*/ = {"isSameType": (function(PL$70/*type1*/, PL$71/*type2*/){
var PL$72/*cDef1*/;
var PL$73/*cDef2*/;
;
if((PL$70/*type1*/ === PL$71/*type2*/)){
return true;;
};
;
PL$72/*cDef1*/ = PL$51/*getClass*/(PL$70/*type1*/);
if(PL$72/*cDef1*/["provisional"]){
if(! PL$72/*cDef1*/["type"]){
return false;;
};
;
PL$70/*type1*/ = PL$72/*cDef1*/["type"];;
PL$72/*cDef1*/ = PL$51/*getClass*/(PL$70/*type1*/);;
};
;
PL$73/*cDef2*/ = PL$51/*getClass*/(PL$71/*type2*/);
if(PL$73/*cDef2*/["provisional"]){
if(! PL$73/*cDef2*/["type"]){
return false;;
};
;
PL$71/*type2*/ = PL$73/*cDef2*/["type"];;
PL$73/*cDef2*/ = PL$51/*getClass*/(PL$71/*type2*/);;
};
;
if((PL$70/*type1*/ === PL$71/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(PL$74/*classLiteral*/, PL$75/*parDefaults*/){
var PL$76/*self*/;
;
PL$76/*self*/ = this;
return PL$76/*self*/["_createClass"](PL$74/*classLiteral*/, PL$75/*parDefaults*/);;
;
}),
"_membersDefined": (function(PL$74/*classLiteral*/){
var PL$76/*self*/;
var PL$77/*cnt*/;
var PL$78/*retPs*/;
var PL$80/*check*/;
var PL$81/*addMember*/;
var PL$84/*i*/;
;
PL$76/*self*/ = this;
PL$77/*cnt*/ = 1;
PL$78/*retPs*/ = new PL$79/*Promise*/();
PL$80/*check*/ = (function(){
;
if(PL$77/*cnt*/){
return;;
};
;
PL$78/*retPs*/["resolve"](PL$74/*classLiteral*/);;
;
});
PL$81/*addMember*/ = (function(PL$82/*m*/){
;
++PL$77/*cnt*/;;
PL$76/*self*/["definitionPromise"](PL$82/*m*/["type"])["then"]((function(PL$83/*definedType*/){
;
PL$82/*m*/["type"] = PL$83/*definedType*/;;
--PL$77/*cnt*/;;
PL$80/*check*/();;
;
}));;
;
});
if(PL$74/*classLiteral*/["members"]){
PL$84/*i*/ = 0;
for(PL$84/*i*/;(PL$84/*i*/ < PL$74/*classLiteral*/["members"]["length"]);++PL$84/*i*/){{PL$81/*addMember*/(PL$74/*classLiteral*/["members"][PL$84/*i*/]);;
}};
;
};
;
--PL$77/*cnt*/;;
PL$80/*check*/();;
return PL$78/*retPs*/;;
;
}),
"_createClass": (function(PL$74/*classLiteral*/, PL$75/*parDefaults*/){
var PL$85/*cAr*/;
var PL$76/*self*/;
var PL$86/*map*/;
var PL$60/*cDef*/;
var PL$52/*cf*/;
var PL$10/*sync*/;
var PL$87/*syncAll*/;
var PL$88/*syncCnt*/;
var PL$89/*trackerIdx*/;
var PL$90/*trackRootIdx*/;
var PL$66/*trackMemberIdx*/;
var PL$95/*freepart*/;
var PL$97/*helpAr*/;
var PL$98/*makeHelpAr*/;
var PL$99/*conIdx*/;
var PL$105/*constructorDef*/;
var PL$106/*constructorFun*/;
var PL$107/*destroyDef*/;
var PL$108/*destroyFun*/;
var PL$109/*untrackIdxAr*/;
var PL$81/*addMember*/;
var PL$124/*createMembersPs*/;
var PL$138/*memberPs*/;
var PL$84/*i*/;
var PL$139/*finalPs*/;
;
PL$85/*cAr*/ = [];
PL$76/*self*/ = this;
PL$86/*map*/ = {"members": {},
"membersByIndex": {},
"membersAr": [],
"extends": []};
PL$60/*cDef*/ = {"constructor": undefined,
"map": PL$86/*map*/,
"isReady": false,
"track": ((PL$74/*classLiteral*/["track"] || PL$74/*classLiteral*/["sync"]) ? true : false),
"sync": PL$74/*classLiteral*/["sync"],
"unique": PL$74/*classLiteral*/["unique"],
"savable": PL$74/*classLiteral*/["savable"],
"readyPromise": new PL$79/*Promise*/(),
"syncMembers": []};
PL$52/*cf*/ = PL$53/*classHider*/(PL$60/*cDef*/);
if(PL$60/*cDef*/["sync"]){
if(PL$60/*cDef*/["sync"]["serve"]){
PL$60/*cDef*/["syncServe"] = true;;
};
;
};
;
if(PL$60/*cDef*/["savable"]){
PL$60/*cDef*/["unique"] = true;;
};
;
PL$85/*cAr*/["push"](PL$52/*cf*/);;
PL$10/*sync*/ = (PL$74/*classLiteral*/["sync"] ? true : false);
PL$87/*syncAll*/ = false;
if(PL$10/*sync*/){
if(PL$74/*classLiteral*/["sync"]["all"]){
PL$87/*syncAll*/ = true;;
};
;
};
;
PL$88/*syncCnt*/ = 0;
PL$89/*trackerIdx*/;
PL$90/*trackRootIdx*/;
PL$66/*trackMemberIdx*/;
if(PL$60/*cDef*/["track"]){
PL$86/*map*/["trackerIdx"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](undefined);;
PL$86/*map*/["trackRootIdx"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](undefined);;
PL$86/*map*/["trackMemberIdx"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](undefined);;
PL$89/*trackerIdx*/ = PL$86/*map*/["trackerIdx"];;
PL$90/*trackRootIdx*/ = PL$86/*map*/["trackRootIdx"];;
PL$66/*trackMemberIdx*/ = PL$86/*map*/["trackMemberIdx"];;
};
;
if(PL$10/*sync*/){
PL$86/*map*/["syncDataIdx"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"]((function(){
var PL$76/*self*/;
var PL$91/*internalId*/;
var PL$92/*syncData*/;
;
PL$76/*self*/ = this;
PL$91/*internalId*/;
PL$92/*syncData*/ = {"getInternalId": (function(){
;
if(PL$91/*internalId*/){
return PL$91/*internalId*/;;
};
;
PL$91/*internalId*/ = PL$93/*getNewInternalId*/();;
PL$94/*internalObjects*/[PL$91/*internalId*/] = PL$76/*self*/;;
PL$92/*syncData*/["internalId"] = PL$91/*internalId*/;;
return PL$91/*internalId*/;;
;
}),
"transports": []};
this[PL$86/*map*/["syncDataIdx"]] = (function(){
;
return PL$92/*syncData*/;;
;
});;
return PL$92/*syncData*/;;
;
}));;
};
;
if(PL$74/*classLiteral*/["hasFreePart"]){
PL$95/*freepart*/ = {};
PL$86/*map*/["freePart"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](PL$95/*freepart*/);;
PL$86/*map*/["getMemberCode"] = PL$96/*presets*/["getMemberCode"](PL$86/*map*/["freePart"]);;
PL$86/*map*/["setMemberCode"] = PL$96/*presets*/["setMemberCode"](PL$86/*map*/["freePart"]);;
};
;
PL$97/*helpAr*/ = [];
PL$98/*makeHelpAr*/ = (function(){
;
return PL$97/*helpAr*/["slice"]();;
;
});
PL$86/*map*/["connectIdx"] = PL$85/*cAr*/["length"];;
PL$99/*conIdx*/ = PL$86/*map*/["connectIdx"];
PL$85/*cAr*/["push"]((function(){
var PL$97/*helpAr*/;
var PL$104/*arguments*/ = arguments;
;
PL$97/*helpAr*/ = PL$98/*makeHelpAr*/();
this[PL$99/*conIdx*/] = (function(PL$100/*idx*/, PL$101/*fun*/, PL$102/*base*/){
var PL$103/*chain*/;
;
PL$103/*chain*/ = PL$97/*helpAr*/[PL$100/*idx*/];
if(! PL$103/*chain*/){
PL$103/*chain*/ = PL$25/*Chainable*/(this, PL$100/*idx*/);;
PL$97/*helpAr*/[PL$100/*idx*/] = PL$103/*chain*/;;
};
;
return PL$103/*chain*/(PL$101/*fun*/, PL$102/*base*/);;
;
});;
return this[PL$99/*conIdx*/]["apply"](this, PL$104/*arguments*/);;
;
}));;
PL$105/*constructorDef*/;
PL$106/*constructorFun*/;
PL$107/*destroyDef*/;
PL$108/*destroyFun*/;
PL$109/*untrackIdxAr*/ = [];
PL$81/*addMember*/ = (function(PL$82/*m*/){
var PL$61/*mDef*/;
var PL$110/*mType*/;
var PL$111/*isFunction*/;
var PL$112/*memberIdx*/;
var PL$113/*isTrackedMember*/;
var PL$117/*def*/;
var PL$118/*originalFun*/;
var PL$120/*mCDef*/;
var PL$121/*memberTrackMemberIdx*/;
var PL$122/*memberTrackRootIdx*/;
;
PL$61/*mDef*/ = {"index": PL$85/*cAr*/["length"],
"name": PL$82/*m*/["name"]};
if((PL$87/*syncAll*/ || PL$82/*m*/["sync"])){
PL$61/*mDef*/["sync"] = true;;
};
;
PL$61/*mDef*/["type"] = PL$82/*m*/["type"];;
PL$110/*mType*/ = PL$82/*m*/["type"];
PL$111/*isFunction*/ = PL$76/*self*/["isFunctionType"](PL$61/*mDef*/["type"]);
PL$112/*memberIdx*/ = PL$61/*mDef*/["index"];
PL$113/*isTrackedMember*/ = PL$76/*self*/["isTrackedClass"](PL$61/*mDef*/["type"]);
if(PL$60/*cDef*/["unique"]){
if((PL$82/*m*/["name"] == "id")){
PL$60/*cDef*/["idIndex"] = PL$112/*memberIdx*/;;
PL$60/*cDef*/["idDef"] = PL$61/*mDef*/;;
};
;
};
;
if(PL$61/*mDef*/["sync"]){
PL$61/*mDef*/["hasSetter"] = true;;
if(PL$113/*isTrackedMember*/){
PL$61/*mDef*/["defaultSetter"] = (function(PL$114/*vAr*/){
;
PL$115/*syncFun*/(this, PL$112/*memberIdx*/, PL$110/*mType*/, PL$114/*vAr*/[0]);;
return PL$114/*vAr*/;;
;
});;

}else{
PL$61/*mDef*/["defaultSetter"] = (function(PL$116/*v*/){
;
PL$115/*syncFun*/(this, PL$112/*memberIdx*/, PL$110/*mType*/, PL$116/*v*/);;
return PL$116/*v*/;;
;
});;
};
;
PL$60/*cDef*/["syncMembers"]["push"](PL$61/*mDef*/);;
};
;
PL$86/*map*/["members"][PL$82/*m*/["name"]] = PL$61/*mDef*/;;
PL$86/*map*/["membersByIndex"][PL$61/*mDef*/["index"]] = PL$61/*mDef*/;;
PL$86/*map*/["membersAr"]["push"](PL$61/*mDef*/);;
PL$117/*def*/ = (PL$75/*parDefaults*/ ? PL$75/*parDefaults*/[PL$82/*m*/["name"]] : undefined);
PL$61/*mDef*/["defaultValue"] = PL$117/*def*/;;
if((PL$111/*isFunction*/ && PL$61/*mDef*/["sync"])){
if(! ((PL$82/*m*/["name"] == "constructor") || (PL$82/*m*/["name"] == "destroy"))){
PL$118/*originalFun*/ = PL$117/*def*/;
PL$117/*def*/ = (function(){
var PL$104/*arguments*/ = arguments;
;
PL$119/*syncFunctionFun*/(this, PL$112/*memberIdx*/, PL$110/*mType*/, PL$104/*arguments*/);;
return PL$118/*originalFun*/["apply"](this, PL$104/*arguments*/);;
;
});;
};
;
};
;
PL$85/*cAr*/["push"](PL$117/*def*/);;
if(PL$61/*mDef*/["hasSetter"]){
PL$61/*mDef*/["setterIdx"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](PL$61/*mDef*/["defaultSetter"]);;
};
;
if((PL$82/*m*/["name"] == "constructor")){
PL$105/*constructorDef*/ = PL$61/*mDef*/;;
PL$106/*constructorFun*/ = PL$117/*def*/;;
};
;
if((PL$82/*m*/["name"] == "destroy")){
PL$107/*destroyDef*/ = PL$61/*mDef*/;;
PL$108/*destroyFun*/ = PL$117/*def*/;;
};
;
PL$61/*mDef*/["getCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$61/*mDef*/["index"]) + "]")];;
if(PL$61/*mDef*/["hasSetter"]){
PL$61/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$61/*mDef*/["setterIdx"]) + "](v); s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " v; return v; })(", PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;

}else{
PL$61/*mDef*/["setCode"] = [PL$37/*MAKRO_SELF*/, (("[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, " ", PL$41/*MAKRO_VALUE*/];;
};
;
if(PL$113/*isTrackedMember*/){
PL$120/*mCDef*/ = PL$51/*getClass*/(PL$61/*mDef*/["type"]);
PL$121/*memberTrackMemberIdx*/ = PL$120/*mCDef*/["map"]["trackMemberIdx"];
PL$122/*memberTrackRootIdx*/ = PL$120/*mCDef*/["map"]["trackRootIdx"];
PL$61/*mDef*/["trackIndex"] = PL$85/*cAr*/["length"];;
PL$85/*cAr*/["push"](undefined);;
PL$109/*untrackIdxAr*/["push"](PL$61/*mDef*/["trackIndex"]);;
if(PL$60/*cDef*/["track"]){
if(PL$61/*mDef*/["hasSetter"]){
PL$61/*mDef*/["setCode"] = [(((((("(function(s, v){ var vAr = [v, v[" + PL$122/*memberTrackRootIdx*/) + "]()]; vAr = s[") + PL$61/*mDef*/["setterIdx"]) + "](vAr); s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$121/*memberTrackMemberIdx*/) + "](s[") + PL$89/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
PL$61/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$61/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$121/*memberTrackMemberIdx*/) + "](s[") + PL$89/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;

}else{
PL$61/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$121/*memberTrackMemberIdx*/) + "](s[") + PL$89/*trackerIdx*/) + "]); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
PL$61/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$61/*mDef*/["index"]) + "] "), PL$43/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$61/*mDef*/["trackIndex"]) + "]){ s[") + PL$61/*mDef*/["trackIndex"]) + "](); }; s[") + PL$61/*mDef*/["trackIndex"]) + "] = v[") + PL$121/*memberTrackMemberIdx*/) + "](s[") + PL$89/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$37/*MAKRO_SELF*/, ", ", PL$41/*MAKRO_VALUE*/, ")"];;
};
;

}else{
PL$61/*mDef*/["setCode"] = [PL$123/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$61/*mDef*/["setCodeFromTemporary"] = [PL$123/*runtimeError*/(PL$2/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
PL$61/*mDef*/["connectFunCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$86/*map*/["connectIdx"]) + "](") + PL$61/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, ")"];;
PL$61/*mDef*/["connectSlotCode"] = [PL$37/*MAKRO_SELF*/, (((("[" + PL$86/*map*/["connectIdx"]) + "](") + PL$61/*mDef*/["index"]) + ", "), PL$41/*MAKRO_VALUE*/, "[", PL$45/*MAKRO_VALUEPROPERTY*/, "], ", PL$41/*MAKRO_VALUE*/, ")"];;
;
});
PL$124/*createMembersPs*/ = (function(){
var PL$125/*donePs*/;
;
PL$125/*donePs*/ = new PL$79/*Promise*/();
PL$76/*self*/["_membersDefined"](PL$74/*classLiteral*/)["then"]((function(){
var PL$84/*i*/;
var PL$126/*passedConstructorType*/;
var PL$82/*m*/;
var PL$127/*conDef*/;
;
PL$84/*i*/;
PL$126/*passedConstructorType*/;
if(PL$74/*classLiteral*/["members"]){
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$74/*classLiteral*/["members"]["length"]);++PL$84/*i*/){{PL$82/*m*/ = PL$74/*classLiteral*/["members"][PL$84/*i*/];
if((PL$82/*m*/["name"] == "constructor")){
PL$126/*passedConstructorType*/ = PL$82/*m*/["type"];;
break;;
};
;
}};
;
};
;
if(PL$126/*passedConstructorType*/){
PL$127/*conDef*/ = PL$51/*getClass*/(PL$126/*passedConstructorType*/);
PL$60/*cDef*/["constructorType"] = PL$76/*self*/["createFunctionType"]({"return": PL$52/*cf*/,
"arguments": PL$127/*conDef*/["arguments"]});;

}else{
PL$60/*cDef*/["constructorType"] = PL$76/*self*/["createFunctionType"]({"return": PL$52/*cf*/});;
};
;
PL$60/*cDef*/["constructorTypeIntern"] = PL$60/*cDef*/["constructorType"];;
if(PL$60/*cDef*/["unique"]){
PL$74/*classLiteral*/["members"] = (PL$74/*classLiteral*/["members"] || []);;
PL$60/*cDef*/["idType"] = PL$76/*self*/["getFunctionArgumentType"](PL$60/*cDef*/["constructorTypeIntern"], 0);;
PL$74/*classLiteral*/["members"]["unshift"]({"name": "id",
"type": PL$60/*cDef*/["idType"]});;
if(PL$60/*cDef*/["savable"]){
PL$74/*classLiteral*/["members"]["unshift"]({"name": "save",
"type": PL$36/*classSystem*/["getBuiltinType"]("var")});;
PL$75/*parDefaults*/["save"] = (function(){
var PL$128 = new __Promise();
var PL$129 = function(code){ return function(res){ try{code(res);}catch(e){ PL$128.reject(e); }; }; };
var PL$130 = function(e){ PL$128.reject(e); };
var PL$131/*this*/ = this;
PL$129(function(){;
PL$69/*pcs*/["saveInstance"](PL$52/*cf*/, PL$131/*this*/).then(PL$129(function(PL$132){PL$132;;
PL$128.resolve(); return;;
}), PL$130);
;})();
return PL$128;
});;
PL$74/*classLiteral*/["members"]["unshift"]({"name": "load",
"type": PL$36/*classSystem*/["getBuiltinType"]("var")});;
PL$75/*parDefaults*/["load"] = (function(){
var PL$133 = new __Promise();
var PL$134 = function(code){ return function(res){ try{code(res);}catch(e){ PL$133.reject(e); }; }; };
var PL$135 = function(e){ PL$133.reject(e); };
var PL$136/*this*/ = this;
PL$134(function(){;
PL$69/*pcs*/["loadInstance"](PL$52/*cf*/, PL$136/*this*/).then(PL$134(function(PL$137){PL$137;;
PL$133.resolve(); return;;
}), PL$135);
;})();
return PL$133;
});;
PL$127/*conDef*/ = PL$51/*getClass*/(PL$60/*cDef*/["constructorTypeIntern"]);
PL$60/*cDef*/["constructorReturnType"] = PL$76/*self*/["_createPromiseOfClass"](PL$127/*conDef*/["return"]);;
PL$60/*cDef*/["constructorType"] = PL$76/*self*/["createFunctionType"]({"return": PL$60/*cDef*/["constructorReturnType"],
"arguments": PL$127/*conDef*/["arguments"]});;
};
;
};
;
if(PL$74/*classLiteral*/["members"]){
PL$84/*i*/ = 0;
for(PL$84/*i*/;(PL$84/*i*/ < PL$74/*classLiteral*/["members"]["length"]);++PL$84/*i*/){{PL$81/*addMember*/(PL$74/*classLiteral*/["members"][PL$84/*i*/]);;
}};
;
};
;
PL$125/*donePs*/["resolve"]();;
;
}));;
return PL$125/*donePs*/;;
;
});
PL$138/*memberPs*/ = PL$124/*createMembersPs*/();
PL$84/*i*/;
PL$139/*finalPs*/ = new PL$79/*Promise*/();
PL$138/*memberPs*/["then"]((function(){
var PL$84/*i*/;
var PL$140/*simpleConstructor*/;
var PL$141/*proto*/;
var PL$142/*freeFun*/;
var PL$143/*f*/;
var PL$145/*realConstructor*/;
var PL$147/*constructorStr*/;
var PL$148/*importObj*/;
var PL$149/*importVar*/;
var PL$151/*uniqueMap*/;
var PL$152/*hasVarId*/;
var PL$153/*idType*/;
var PL$154/*idDef*/;
var PL$155/*freeIndex*/;
var PL$156/*constructorObj*/;
var PL$157/*wrapStr*/;
var PL$159/*_destroyFun*/;
var PL$162/*_sync_destroyFun*/;
;
PL$84/*i*/;
PL$140/*simpleConstructor*/ = true;
if((PL$60/*cDef*/["track"] || PL$60/*cDef*/["unique"])){
PL$140/*simpleConstructor*/ = false;;
};
;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$85/*cAr*/["length"]);++PL$84/*i*/){{PL$97/*helpAr*/["push"](undefined);;
}};
;
PL$60/*cDef*/["constructorArguments"] = [];;
if(PL$140/*simpleConstructor*/){
if(PL$74/*classLiteral*/["hasFreePart"]){
PL$141/*proto*/ = {};
if(PL$75/*parDefaults*/){
for(PL$84/*i*/ in PL$75/*parDefaults*/){if(! PL$86/*map*/["members"][PL$84/*i*/]){
PL$141/*proto*/[PL$84/*i*/] = PL$75/*parDefaults*/[PL$84/*i*/];;
};
;
};
;
};
;
PL$142/*freeFun*/ = (function(){
;
;
});
PL$142/*freeFun*/["prototype"] = PL$141/*proto*/;;
PL$143/*f*/ = PL$86/*map*/["freePart"];
PL$60/*cDef*/["constructor"] = (function(){
var PL$144/*r*/;
;
PL$144/*r*/ = PL$85/*cAr*/["slice"]();
PL$144/*r*/[PL$143/*f*/] = new PL$142/*freeFun*/();;
return PL$144/*r*/;;
;
});;

}else{
PL$60/*cDef*/["constructor"] = (function(){
;
return PL$85/*cAr*/["slice"]();;
;
});;
};
;
if(PL$105/*constructorDef*/){
PL$145/*realConstructor*/ = PL$60/*cDef*/["constructor"];
PL$60/*cDef*/["constructor"] = (function(){
var PL$146/*instance*/;
var PL$104/*arguments*/ = arguments;
;
PL$146/*instance*/ = PL$145/*realConstructor*/();
PL$106/*constructorFun*/["apply"](PL$146/*instance*/, PL$104/*arguments*/);;
return PL$146/*instance*/;;
;
});;
};
;

}else{
PL$147/*constructorStr*/ = "";
PL$148/*importObj*/ = {};
PL$149/*importVar*/ = (function(PL$116/*v*/, PL$150/*name*/){
;
PL$148/*importObj*/[PL$150/*name*/] = PL$116/*v*/;;
;
});
PL$147/*constructorStr*/ += "var r;";;
if(PL$60/*cDef*/["unique"]){
PL$151/*uniqueMap*/ = new PL$13/*Map*/();
PL$152/*hasVarId*/ = PL$76/*self*/["isVar"](PL$60/*cDef*/["idType"]);
PL$153/*idType*/ = PL$60/*cDef*/["idType"];
PL$149/*importVar*/(PL$153/*idType*/, "idType");;
PL$154/*idDef*/ = PL$60/*cDef*/["idDef"];
if(PL$152/*hasVarId*/){
PL$149/*importVar*/(PL$30/*stringify*/, "stringify");;
PL$147/*constructorStr*/ += "var key = stringify(arguments[0]);";;

}else{
PL$149/*importVar*/(PL$30/*stringify*/, "stringifyInstance");;
PL$147/*constructorStr*/ += "var key = stringifyInstance(idType, arguments[0]);";;
};
;
PL$149/*importVar*/(PL$151/*uniqueMap*/, "uniqueMap");;
PL$149/*importVar*/(PL$58/*privateClassSystem*/, "privateClassSystem");;
PL$147/*constructorStr*/ += "r = uniqueMap.get(key);";;
PL$147/*constructorStr*/ += "if (r){\n                if (arguments[0]){\n                  privateClassSystem.untrack(idType, arguments[0]);\n                };";;
PL$147/*constructorStr*/ += "}else{";;
};
;
PL$149/*importVar*/(PL$85/*cAr*/, "cAr");;
PL$147/*constructorStr*/ += "r = cAr.slice();";;
if(PL$74/*classLiteral*/["hasFreePart"]){
PL$141/*proto*/ = {};
if(PL$75/*parDefaults*/){
for(PL$84/*i*/ in PL$75/*parDefaults*/){if(! PL$86/*map*/["members"][PL$84/*i*/]){
PL$141/*proto*/[PL$84/*i*/] = PL$75/*parDefaults*/[PL$84/*i*/];;
};
;
};
;
};
;
PL$142/*freeFun*/ = (function(){
;
;
});
PL$142/*freeFun*/["prototype"] = PL$141/*proto*/;;
PL$155/*freeIndex*/ = PL$86/*map*/["freePart"];
PL$149/*importVar*/(PL$142/*freeFun*/, "freeFun");;
PL$149/*importVar*/(PL$155/*freeIndex*/, "freeIndex");;
PL$147/*constructorStr*/ += "r[freeIndex] = new freeFun();";;
};
;
if(PL$105/*constructorDef*/){
PL$149/*importVar*/(PL$106/*constructorFun*/, "constructorFun");;
PL$147/*constructorStr*/ += "constructorFun.apply(r, arguments);";;
};
;
if(PL$60/*cDef*/["unique"]){
PL$149/*importVar*/(PL$52/*cf*/, "cf");;
PL$149/*importVar*/(PL$154/*idDef*/, "idDef");;
PL$147/*constructorStr*/ += "privateClassSystem.setMemberByDefFromInstance(cf, r, idDef, arguments[0]);";;
PL$147/*constructorStr*/ += "uniqueMap.set(key, r);";;
PL$147/*constructorStr*/ += "};";;
};
;
PL$147/*constructorStr*/ += "var realInstance = r;";;
if(PL$60/*cDef*/["track"]){
PL$149/*importVar*/(PL$20/*Tracker*/, "Tracker");;
PL$149/*importVar*/((function(){
var PL$104/*arguments*/ = arguments;
;
PL$108/*destroyFun*/["apply"](this, PL$104/*arguments*/);;
;
}), "destroyFun");;
PL$149/*importVar*/(PL$89/*trackerIdx*/, "trackerIdx");;
PL$149/*importVar*/(PL$90/*trackRootIdx*/, "trackRootIdx");;
PL$149/*importVar*/(PL$66/*trackMemberIdx*/, "trackMemberIdx");;
PL$147/*constructorStr*/ += "var t = Tracker(function(){\n            destroyFun.apply(realInstance);\n          });";;
PL$147/*constructorStr*/ += "realInstance[trackerIdx] = t[0];";;
PL$147/*constructorStr*/ += "realInstance[trackRootIdx] = t[1];";;
PL$147/*constructorStr*/ += "realInstance[trackMemberIdx] = t[2];";;
PL$147/*constructorStr*/ += "r = [realInstance, realInstance[trackRootIdx]()];";;
};
;
PL$147/*constructorStr*/ += "return r;";;
PL$156/*constructorObj*/ = {};
PL$149/*importVar*/(PL$156/*constructorObj*/, "constructorObj");;
PL$157/*wrapStr*/ = (("constructorObj.fun = function(){" + PL$147/*constructorStr*/) + "};");
PL$158/*promiseland*/["javascriptEval"](PL$157/*wrapStr*/, PL$148/*importObj*/);;
PL$60/*cDef*/["constructor"] = PL$156/*constructorObj*/["fun"];;
if(PL$60/*cDef*/["track"]){
PL$159/*_destroyFun*/;
if(PL$109/*untrackIdxAr*/["length"]){
if(PL$107/*destroyDef*/){
PL$159/*_destroyFun*/ = PL$108/*destroyFun*/;;
PL$108/*destroyFun*/ = (function(){
var PL$84/*i*/;
var PL$160/*curIdx*/;
var PL$161/*tFun*/;
;
PL$84/*i*/;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$109/*untrackIdxAr*/["length"]);++PL$84/*i*/){{PL$160/*curIdx*/ = PL$109/*untrackIdxAr*/[PL$84/*i*/];
PL$161/*tFun*/ = this[PL$160/*curIdx*/];
this[PL$160/*curIdx*/] = undefined;;
if(PL$161/*tFun*/){
PL$161/*tFun*/();;
};
;
}};
;
PL$159/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$108/*destroyFun*/ = (function(){
var PL$84/*i*/;
var PL$161/*tFun*/;
;
PL$84/*i*/;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$109/*untrackIdxAr*/["length"]);++PL$84/*i*/){{PL$161/*tFun*/ = this[PL$109/*untrackIdxAr*/[PL$84/*i*/]];
if(PL$161/*tFun*/){
PL$161/*tFun*/();;
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
if(PL$107/*destroyDef*/){
PL$159/*_destroyFun*/ = PL$108/*destroyFun*/;;
PL$108/*destroyFun*/ = (function(){
;
PL$159/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$108/*destroyFun*/ = (function(){
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
PL$162/*_sync_destroyFun*/ = PL$108/*destroyFun*/;
PL$108/*destroyFun*/ = (function(){
var PL$92/*syncData*/;
;
PL$92/*syncData*/ = PL$36/*classSystem*/["getSyncData"](this);
PL$163/*destroySynced*/(PL$92/*syncData*/);;
PL$162/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
};
;
PL$139/*finalPs*/["resolve"]();;
;
}));;
PL$139/*finalPs*/["then"]((function(){
;
PL$60/*cDef*/["isReady"] = true;;
if(PL$60/*cDef*/["savable"]){
PL$58/*privateClassSystem*/["registerSavableClass"](PL$52/*cf*/);;
};
;
PL$60/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);;
;
}));;
if(PL$10/*sync*/){
if(PL$74/*classLiteral*/["name"]){
PL$60/*cDef*/["syncId"] = {"hash": PL$74/*classLiteral*/["hashStr"],
"name": PL$74/*classLiteral*/["name"]};;
PL$164/*registerSyncClass*/(PL$74/*classLiteral*/["hashStr"], PL$74/*classLiteral*/["name"], PL$52/*cf*/);;
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
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"isUniqueClass": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["unique"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(PL$31/*par*/){
var PL$76/*self*/;
var PL$60/*cDef*/;
var PL$165/*checkReady*/;
var PL$166/*makeTemporaries*/;
var PL$167/*isReady*/;
var PL$168/*resolveTypeFun*/;
var PL$84/*i*/;
var PL$52/*cf*/;
;
PL$76/*self*/ = this;
PL$60/*cDef*/ = {"isFunction": true,
"return": (PL$31/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$31/*par*/["arguments"] || []),
"isReady": false};
PL$165/*checkReady*/ = (function(){
;
PL$166/*makeTemporaries*/();;
;
});
PL$166/*makeTemporaries*/ = (function(){
var PL$84/*i*/;
;
PL$60/*cDef*/["return"] = PL$76/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["return"]);;
PL$84/*i*/ = 0;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$84/*i*/){{PL$60/*cDef*/["arguments"][PL$84/*i*/] = PL$76/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["arguments"][PL$84/*i*/]);;
}};
;
;
});
PL$167/*isReady*/ = true;
if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["return"])){
PL$167/*isReady*/ = false;;
PL$76/*self*/["definitionPromise"](PL$60/*cDef*/["return"])["then"]((function(PL$34/*parType*/){
;
PL$60/*cDef*/["return"] = PL$34/*parType*/;;
PL$165/*checkReady*/();;
;
}));;
};
;
PL$168/*resolveTypeFun*/ = (function(PL$169/*parI*/){
;
return (function(PL$34/*parType*/){
;
PL$60/*cDef*/["arguments"][PL$169/*parI*/] = PL$34/*parType*/;;
PL$165/*checkReady*/();;
;
});;
;
});
PL$84/*i*/ = 0;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$84/*i*/){{if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["arguments"][PL$84/*i*/])){
PL$167/*isReady*/ = false;;
PL$76/*self*/["definitionPromise"](PL$60/*cDef*/["arguments"][PL$84/*i*/])["then"](PL$168/*resolveTypeFun*/(PL$84/*i*/));;
};
;
}};
;
PL$52/*cf*/ = PL$53/*classHider*/(PL$60/*cDef*/);
if(! PL$167/*isReady*/){
PL$60/*cDef*/["readyPromise"] = new PL$79/*Promise*/();;
PL$165/*checkReady*/ = (function(){
var PL$84/*i*/;
;
if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["return"])){
return;;
};
;
PL$84/*i*/ = 0;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$84/*i*/){{if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["arguments"][PL$84/*i*/])){
return;;
};
;
}};
;
PL$166/*makeTemporaries*/();;
PL$60/*cDef*/["isReady"] = true;;
PL$60/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);;
;
});;
PL$165/*checkReady*/();;

}else{
PL$165/*checkReady*/();;
PL$60/*cDef*/["isReady"] = true;;
};
;
return PL$52/*cf*/;;
;
}),
"isVar": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return PL$60/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if(PL$60/*cDef*/["arguments"]){
return PL$60/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(PL$34/*parType*/, PL$170/*parIndex*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if((PL$60/*cDef*/["arguments"] && PL$60/*cDef*/["arguments"][PL$170/*parIndex*/])){
return PL$60/*cDef*/["arguments"][PL$170/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$34/*parType*/, PL$170/*parIndex*/){
var PL$60/*cDef*/;
var PL$171/*t*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$171/*t*/;
if(PL$60/*cDef*/["constructorArguments"]){
PL$171/*t*/ = PL$60/*cDef*/["constructorArguments"][PL$170/*parIndex*/];;
};
;
if(PL$171/*t*/){
return PL$171/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(PL$34/*parType*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
return PL$60/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(PL$172/*parName*/){
;
return PL$55/*builtinTypes*/[PL$172/*parName*/];;
;
}),
"getPropertyAlias": (function(PL$31/*par*/){
var PL$60/*cDef*/;
var PL$86/*map*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$60/*cDef*/["isVar"]){
return PL$31/*par*/["property"];;
};
;
PL$86/*map*/ = PL$60/*cDef*/["map"];
if(((PL$86/*map*/ && PL$86/*map*/["members"]) && PL$86/*map*/["members"][PL$31/*par*/["property"]])){
return PL$86/*map*/["members"][PL$31/*par*/["property"]]["index"];;
};
;
return PL$31/*par*/["property"];;
;
}),
"getPropertyType": (function(PL$31/*par*/){
var PL$60/*cDef*/;
var PL$86/*map*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$60/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
PL$86/*map*/ = PL$60/*cDef*/["map"];
if(PL$86/*map*/["members"][PL$31/*par*/["property"]]){
if(PL$31/*par*/["original"]){
return (PL$86/*map*/["members"][PL$31/*par*/["property"]]["originalType"] || PL$86/*map*/["members"][PL$31/*par*/["property"]]["type"]);;

}else{
return PL$86/*map*/["members"][PL$31/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(PL$31/*par*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$31/*par*/["type"]);
if(PL$60/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(PL$60/*cDef*/["constructorType"]){
return PL$60/*cDef*/["constructorType"];;
};
;
throw PL$2/*errorMsg*/["noConstructorAvailable"];
;
}),
"setMemberByDef": (function(PL$173/*parDynInstance*/, PL$62/*parMemberDefinition*/, PL$174/*parValueDynInstance*/){
var PL$64/*realInstance*/;
var PL$65/*tracker*/;
var PL$60/*cDef*/;
var PL$66/*trackMemberIdx*/;
;
PL$64/*realInstance*/ = PL$173/*parDynInstance*/["instance"];
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["index"]] = PL$174/*parValueDynInstance*/["getInstanceAsType"](PL$62/*parMemberDefinition*/["type"]);;
if(this["isTrackedClass"](PL$62/*parMemberDefinition*/["type"])){
PL$65/*tracker*/ = this["getTrackerFromDynInstance"](PL$173/*parDynInstance*/);
PL$60/*cDef*/ = PL$51/*getClass*/(PL$174/*parValueDynInstance*/["type"]);
PL$66/*trackMemberIdx*/ = PL$60/*cDef*/["map"]["trackMemberIdx"];
if(PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]){
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]] = PL$174/*parValueDynInstance*/["instance"][PL$66/*trackMemberIdx*/](PL$65/*tracker*/);;
};
;
;
}),
"getTrack": (function(PL$35/*parInstance*/){
var PL$175/*type*/;
var PL$60/*cDef*/;
;
if(! PL$35/*parInstance*/){
return;;
};
;
PL$175/*type*/ = PL$35/*parInstance*/[0];
PL$60/*cDef*/ = PL$51/*getClass*/(PL$175/*type*/);
return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"canSet": (function(PL$176/*parTargetType*/, PL$177/*parSourceType*/){
var PL$178/*allOk*/;
var PL$84/*i*/;
var PL$179/*l*/;
var PL$180/*tp*/;
var PL$181/*sp*/;
;
if(((PL$176/*parTargetType*/ === undefined) && (PL$177/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$176/*parTargetType*/ === undefined) || (PL$177/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$176/*parTargetType*/ === PL$177/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$177/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$176/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$176/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$177/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$176/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$176/*parTargetType*/), PL$177/*parSourceType*/);;
};
;
if((((PL$176/*parTargetType*/["isFunction"] && PL$177/*parSourceType*/["isFunction"]) && this["canSet"](PL$176/*parTargetType*/["returnType"], PL$177/*parSourceType*/["returnType"])) && (PL$176/*parTargetType*/["parameters"]["length"] == PL$177/*parSourceType*/["parameters"]["length"]))){
PL$178/*allOk*/ = true;
PL$84/*i*/ = 0;
PL$179/*l*/ = PL$176/*parTargetType*/["parameters"]["length"];
for(PL$84/*i*/;(PL$84/*i*/ < PL$179/*l*/);++PL$84/*i*/){{PL$180/*tp*/ = PL$176/*parTargetType*/["parameters"][PL$84/*i*/];
PL$181/*sp*/ = PL$177/*parSourceType*/["parameters"][PL$84/*i*/];
if(! this["canSet"](PL$181/*sp*/, PL$180/*tp*/)){
PL$178/*allOk*/ = false;;
};
;
}};
;
if(PL$178/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$34/*parType*/, PL$182/*parProperty*/, PL$183/*parFunType*/){
var PL$60/*cDef*/;
var PL$86/*map*/;
var PL$61/*mDef*/;
var PL$184/*propertyType*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$86/*map*/ = PL$60/*cDef*/["map"];
if(PL$86/*map*/["members"][PL$182/*parProperty*/]){
PL$61/*mDef*/ = PL$86/*map*/["members"][PL$182/*parProperty*/];
PL$184/*propertyType*/ = this["getPropertyType"]({"type": PL$34/*parType*/,
"property": PL$182/*parProperty*/});
if(! this["canSet"](PL$184/*propertyType*/, PL$183/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$184/*propertyType*/) || this["isFunctionType"](PL$184/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$183/*parFunType*/) || this["isFunctionType"](PL$183/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$185/*cs*/ = PL$36/*classSystem*/;
PL$186/*getEffectiveFunctionResultType*/ = (function(PL$183/*parFunType*/){
var PL$187/*res*/;
var PL$190/*resultType*/;
var PL$191/*unTrackedType*/;
var PL$192/*promiseConstructor*/;
var PL$193/*promiseResolveType*/;
;
PL$187/*res*/ = {"promiseResolveType": PL$36/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$36/*classSystem*/["getFunctionReturnType"](PL$183/*parFunType*/),
"resolvePromise": (function(PL$188/*parPromise*/, PL$189/*parValue*/){
;
PL$188/*parPromise*/["resolve"](PL$189/*parValue*/);;
;
}),
"rejectPromise": (function(PL$188/*parPromise*/, PL$189/*parValue*/){
;
PL$188/*parPromise*/["reject"](PL$189/*parValue*/);;
;
})};
PL$190/*resultType*/ = PL$187/*res*/["originalResultType"];
PL$187/*res*/["newPromise"] = (function(){
;
return new PL$79/*Promise*/();;
;
});;
if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$190/*resultType*/)){
PL$187/*res*/["isTemporary"] = true;;
PL$191/*unTrackedType*/ = PL$36/*classSystem*/["getClassFromTemporaryTracked"](PL$190/*resultType*/);
if(PL$36/*classSystem*/["isPromiseOfClass"](PL$191/*unTrackedType*/)){
PL$192/*promiseConstructor*/ = PL$36/*classSystem*/["getTypeConstructor"](PL$191/*unTrackedType*/);
PL$187/*res*/["newPromise"] = (function(){
;
return PL$192/*promiseConstructor*/();;
;
});;
PL$187/*res*/["resolvePromise"] = (function(PL$188/*parPromise*/, PL$189/*parValue*/){
;
PL$188/*parPromise*/[0]["resolve"](PL$189/*parValue*/);;
;
});;
PL$187/*res*/["rejectPromise"] = (function(PL$188/*parPromise*/, PL$189/*parValue*/){
;
PL$188/*parPromise*/[0]["reject"](PL$189/*parValue*/);;
;
});;
PL$193/*promiseResolveType*/ = PL$36/*classSystem*/["getClassFromPromiseOf"](PL$191/*unTrackedType*/);
PL$187/*res*/["promiseResolveType"] = PL$193/*promiseResolveType*/;;
};
;
};
;
return PL$187/*res*/;;
;
});
PL$194/*_stringEncodeStr*/ = (function(PL$31/*par*/){
var PL$195/*s*/;
;
PL$195/*s*/ = PL$31/*par*/["replace"](new PL$196/*RegExp*/("\\\\", "g"), "\\\\");
PL$195/*s*/ = PL$195/*s*/["replace"](new PL$196/*RegExp*/("\\n", "g"), "\\n");;
PL$195/*s*/ = PL$195/*s*/["replace"](new PL$196/*RegExp*/("\\r", "g"), "\\r");;
PL$195/*s*/ = PL$195/*s*/["replace"](new PL$196/*RegExp*/("\\\"", "g"), "\\\"");;
PL$195/*s*/ = PL$195/*s*/["replace"](new PL$196/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$195/*s*/ = PL$195/*s*/["replace"](new PL$196/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$195/*s*/;;
;
});
PL$197/*stringEncodeStr*/ = (function(PL$31/*par*/){
;
return (("\"" + PL$194/*_stringEncodeStr*/(PL$31/*par*/)) + "\"");;
;
});
PL$198/*internals*/ = {"classHider": PL$53/*classHider*/,
"getClass": PL$51/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$197/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$186/*getEffectiveFunctionResultType*/,
"privateClassSystem": PL$58/*privateClassSystem*/};
PL$7/*provisional*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$8/*temporary*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$9/*promiseOf*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$10/*sync*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$164/*registerSyncClass*/ = PL$198/*internals*/["registerSyncClass"];
PL$163/*destroySynced*/ = PL$198/*internals*/["destroySynced"];
PL$199/*getClassBySyncId*/ = PL$198/*internals*/["getClassBySyncId"];
PL$115/*syncFun*/ = PL$198/*internals*/["syncFun"];
PL$119/*syncFunctionFun*/ = PL$198/*internals*/["syncFunctionFun"];
PL$94/*internalObjects*/ = PL$198/*internals*/["internalObjects"];
PL$93/*getNewInternalId*/ = PL$198/*internals*/["getNewInternalId"];
PL$11/*savable*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$12/*codeGeneration*/(PL$36/*classSystem*/, PL$198/*internals*/);;
PL$123/*runtimeError*/ = PL$198/*internals*/["runtimeError"];
PL$96/*presets*/ = PL$198/*internals*/["presets"];
PL$158/*promiseland*/["classSystem"] = PL$36/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$36/*classSystem*/,
"privateClassSystem": PL$58/*privateClassSystem*/,
"internalObjects": PL$94/*internalObjects*/,
"getClassBySyncId": PL$199/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$186/*getEffectiveFunctionResultType*/});;
return PL$36/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();