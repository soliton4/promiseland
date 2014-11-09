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
if (promiseland._hasModule({ hashStr: "430999d808f9ce4404a8f6d57f657752" })){ return promiseland._getModule("430999d808f9ce4404a8f6d57f657752"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$32/*JSON*/;try{PL$32/*JSON*/ = JSON;}catch(e){};
var PL$57/*Object*/;try{PL$57/*Object*/ = Object;}catch(e){};
var PL$79/*Promise*/;try{PL$79/*Promise*/ = Promise;}catch(e){};
var PL$159/*promiseland*/;try{PL$159/*promiseland*/ = promiseland;}catch(e){};
var PL$198/*RegExp*/;try{PL$198/*RegExp*/ = RegExp;}catch(e){};
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
var PL$187/*cs*/;
var PL$188/*getEffectiveFunctionResultType*/;
var PL$196/*_stringEncodeStr*/;
var PL$199/*stringEncodeStr*/;
var PL$200/*internals*/;
var PL$166/*registerSyncClass*/;
var PL$163/*destroySynced*/;
var PL$201/*getClassBySyncId*/;
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
var PL$141/*hasDestructor*/;
var PL$142/*proto*/;
var PL$143/*freeFun*/;
var PL$144/*f*/;
var PL$146/*realConstructor*/;
var PL$148/*constructorStr*/;
var PL$149/*importObj*/;
var PL$150/*importVar*/;
var PL$152/*uniqueMap*/;
var PL$153/*hasVarId*/;
var PL$154/*idType*/;
var PL$155/*idDef*/;
var PL$156/*freeIndex*/;
var PL$157/*constructorObj*/;
var PL$158/*wrapStr*/;
var PL$160/*destructorStr*/;
var PL$161/*destructorImportObj*/;
var PL$162/*destructorImportVar*/;
var PL$164/*_destroyFun*/;
var PL$165/*destructorObj*/;
;
PL$84/*i*/;
PL$140/*simpleConstructor*/ = true;
PL$141/*hasDestructor*/ = false;
if((PL$60/*cDef*/["track"] || PL$60/*cDef*/["unique"])){
PL$140/*simpleConstructor*/ = false;;
};
;
if((PL$60/*cDef*/["track"] || PL$10/*sync*/)){
PL$141/*hasDestructor*/ = true;;
};
;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$85/*cAr*/["length"]);++PL$84/*i*/){{PL$97/*helpAr*/["push"](undefined);;
}};
;
PL$60/*cDef*/["constructorArguments"] = [];;
if(PL$140/*simpleConstructor*/){
if(PL$74/*classLiteral*/["hasFreePart"]){
PL$142/*proto*/ = {};
if(PL$75/*parDefaults*/){
for(PL$84/*i*/ in PL$75/*parDefaults*/){if(! PL$86/*map*/["members"][PL$84/*i*/]){
PL$142/*proto*/[PL$84/*i*/] = PL$75/*parDefaults*/[PL$84/*i*/];;
};
;
};
;
};
;
PL$143/*freeFun*/ = (function(){
;
;
});
PL$143/*freeFun*/["prototype"] = PL$142/*proto*/;;
PL$144/*f*/ = PL$86/*map*/["freePart"];
PL$60/*cDef*/["constructor"] = (function(){
var PL$145/*r*/;
;
PL$145/*r*/ = PL$85/*cAr*/["slice"]();
PL$145/*r*/[PL$144/*f*/] = new PL$143/*freeFun*/();;
return PL$145/*r*/;;
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
PL$146/*realConstructor*/ = PL$60/*cDef*/["constructor"];
PL$60/*cDef*/["constructor"] = (function(){
var PL$147/*instance*/;
var PL$104/*arguments*/ = arguments;
;
PL$147/*instance*/ = PL$146/*realConstructor*/();
PL$106/*constructorFun*/["apply"](PL$147/*instance*/, PL$104/*arguments*/);;
return PL$147/*instance*/;;
;
});;
};
;

}else{
PL$148/*constructorStr*/ = "";
PL$149/*importObj*/ = {};
PL$150/*importVar*/ = (function(PL$116/*v*/, PL$151/*name*/){
;
PL$149/*importObj*/[PL$151/*name*/] = PL$116/*v*/;;
;
});
PL$148/*constructorStr*/ += "var r;";;
if(PL$60/*cDef*/["unique"]){
PL$152/*uniqueMap*/ = new PL$13/*Map*/();
PL$153/*hasVarId*/ = PL$76/*self*/["isVar"](PL$60/*cDef*/["idType"]);
PL$154/*idType*/ = PL$60/*cDef*/["idType"];
PL$150/*importVar*/(PL$154/*idType*/, "idType");;
PL$155/*idDef*/ = PL$60/*cDef*/["idDef"];
if(PL$153/*hasVarId*/){
PL$150/*importVar*/(PL$30/*stringify*/, "stringify");;
PL$148/*constructorStr*/ += "var key = stringify(arguments[0]);";;

}else{
PL$150/*importVar*/(PL$30/*stringify*/, "stringifyInstance");;
PL$148/*constructorStr*/ += "var key = stringifyInstance(idType, arguments[0]);";;
};
;
PL$150/*importVar*/(PL$152/*uniqueMap*/, "uniqueMap");;
PL$150/*importVar*/(PL$58/*privateClassSystem*/, "privateClassSystem");;
PL$148/*constructorStr*/ += "r = uniqueMap.get(key);";;
PL$148/*constructorStr*/ += "if (r){";;
PL$148/*constructorStr*/ += "if (arguments[0]){";;
PL$148/*constructorStr*/ += "privateClassSystem.untrack(idType, arguments[0]);";;
PL$148/*constructorStr*/ += "};";;
PL$148/*constructorStr*/ += "}else{";;
};
;
PL$150/*importVar*/(PL$85/*cAr*/, "cAr");;
PL$148/*constructorStr*/ += "r = cAr.slice();";;
if(PL$74/*classLiteral*/["hasFreePart"]){
PL$142/*proto*/ = {};
if(PL$75/*parDefaults*/){
for(PL$84/*i*/ in PL$75/*parDefaults*/){if(! PL$86/*map*/["members"][PL$84/*i*/]){
PL$142/*proto*/[PL$84/*i*/] = PL$75/*parDefaults*/[PL$84/*i*/];;
};
;
};
;
};
;
PL$143/*freeFun*/ = (function(){
;
;
});
PL$143/*freeFun*/["prototype"] = PL$142/*proto*/;;
PL$156/*freeIndex*/ = PL$86/*map*/["freePart"];
PL$150/*importVar*/(PL$143/*freeFun*/, "freeFun");;
PL$150/*importVar*/(PL$156/*freeIndex*/, "freeIndex");;
PL$148/*constructorStr*/ += "r[freeIndex] = new freeFun();";;
};
;
if(PL$105/*constructorDef*/){
PL$150/*importVar*/(PL$106/*constructorFun*/, "constructorFun");;
PL$148/*constructorStr*/ += "constructorFun.apply(r, arguments);";;
};
;
if(PL$60/*cDef*/["unique"]){
PL$150/*importVar*/(PL$52/*cf*/, "cf");;
PL$150/*importVar*/(PL$155/*idDef*/, "idDef");;
PL$148/*constructorStr*/ += "privateClassSystem.setMemberByDefFromInstance(cf, r, idDef, arguments[0]);";;
PL$148/*constructorStr*/ += "uniqueMap.set(key, r);";;
PL$148/*constructorStr*/ += "r.map = uniqueMap;";;
PL$148/*constructorStr*/ += "r.key = key;";;
PL$148/*constructorStr*/ += "};";;
};
;
PL$148/*constructorStr*/ += "var realInstance = r;";;
if(PL$60/*cDef*/["track"]){
PL$150/*importVar*/(PL$20/*Tracker*/, "Tracker");;
PL$150/*importVar*/((function(){
var PL$104/*arguments*/ = arguments;
;
PL$108/*destroyFun*/["apply"](this, PL$104/*arguments*/);;
;
}), "destroyFun");;
PL$150/*importVar*/(PL$89/*trackerIdx*/, "trackerIdx");;
PL$150/*importVar*/(PL$90/*trackRootIdx*/, "trackRootIdx");;
PL$150/*importVar*/(PL$66/*trackMemberIdx*/, "trackMemberIdx");;
PL$148/*constructorStr*/ += "var t = Tracker(function(){";;
PL$148/*constructorStr*/ += "destroyFun.apply(realInstance);";;
PL$148/*constructorStr*/ += "});";;
PL$148/*constructorStr*/ += "realInstance[trackerIdx] = t[0];";;
PL$148/*constructorStr*/ += "realInstance[trackRootIdx] = t[1];";;
PL$148/*constructorStr*/ += "realInstance[trackMemberIdx] = t[2];";;
PL$148/*constructorStr*/ += "r = [realInstance, realInstance[trackRootIdx]()];";;
};
;
PL$148/*constructorStr*/ += "return r;";;
PL$157/*constructorObj*/ = {};
PL$150/*importVar*/(PL$157/*constructorObj*/, "constructorObj");;
PL$158/*wrapStr*/ = (("constructorObj.fun = function(){" + PL$148/*constructorStr*/) + "};");
PL$159/*promiseland*/["javascriptEval"](PL$158/*wrapStr*/, PL$149/*importObj*/);;
PL$60/*cDef*/["constructor"] = PL$157/*constructorObj*/["fun"];;
};
;
if(PL$141/*hasDestructor*/){
PL$160/*destructorStr*/ = "";
PL$161/*destructorImportObj*/ = {};
PL$162/*destructorImportVar*/ = (function(PL$116/*v*/, PL$151/*name*/){
;
PL$161/*destructorImportObj*/[PL$151/*name*/] = PL$116/*v*/;;
;
});
if(PL$10/*sync*/){
PL$162/*destructorImportVar*/(PL$163/*destroySynced*/, "destroySynced");;
PL$162/*destructorImportVar*/(PL$36/*classSystem*/, "classSystem");;
PL$160/*destructorStr*/ += "var syncData = classSystem.getSyncData(this);";;
PL$160/*destructorStr*/ += "destroySynced(syncData);";;
};
;
if(PL$60/*cDef*/["track"]){
PL$164/*_destroyFun*/;
if(PL$109/*untrackIdxAr*/["length"]){
PL$162/*destructorImportVar*/(PL$109/*untrackIdxAr*/, "untrackIdxAr");;
PL$160/*destructorStr*/ += "var i;";;
PL$160/*destructorStr*/ += "for (i = 0; i < untrackIdxAr.length; ++i){";;
PL$160/*destructorStr*/ += "var curIdx = untrackIdxAr[i];";;
PL$160/*destructorStr*/ += "var tFun = this[curIdx];";;
PL$160/*destructorStr*/ += "this[curIdx] = undefined;";;
PL$160/*destructorStr*/ += "if (tFun){";;
PL$160/*destructorStr*/ += "tFun();";;
PL$160/*destructorStr*/ += "};";;
PL$160/*destructorStr*/ += "};";;
};
;
if(PL$60/*cDef*/["unique"]){
PL$160/*destructorStr*/ += "this.map.delete(this.key);";;
};
;
};
;
if(PL$107/*destroyDef*/){
PL$162/*destructorImportVar*/(PL$108/*destroyFun*/, "_destroyFun");;
PL$160/*destructorStr*/ += "_destroyFun.apply(this);";;
};
;
PL$160/*destructorStr*/ += "this.splice(0,this.length);";;
PL$165/*destructorObj*/ = {};
PL$162/*destructorImportVar*/(PL$165/*destructorObj*/, "destructorObj");;
PL$158/*wrapStr*/ = (("destructorObj.fun = function(){" + PL$160/*destructorStr*/) + "};");
PL$159/*promiseland*/["javascriptEval"](PL$158/*wrapStr*/, PL$161/*destructorImportObj*/);;
PL$108/*destroyFun*/ = PL$165/*destructorObj*/["fun"];;
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
PL$166/*registerSyncClass*/(PL$74/*classLiteral*/["hashStr"], PL$74/*classLiteral*/["name"], PL$52/*cf*/);;
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
var PL$167/*checkReady*/;
var PL$168/*makeTemporaries*/;
var PL$169/*isReady*/;
var PL$170/*resolveTypeFun*/;
var PL$84/*i*/;
var PL$52/*cf*/;
;
PL$76/*self*/ = this;
PL$60/*cDef*/ = {"isFunction": true,
"return": (PL$31/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$31/*par*/["arguments"] || []),
"isReady": false};
PL$167/*checkReady*/ = (function(){
;
PL$168/*makeTemporaries*/();;
;
});
PL$168/*makeTemporaries*/ = (function(){
var PL$84/*i*/;
;
PL$60/*cDef*/["return"] = PL$76/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["return"]);;
PL$84/*i*/ = 0;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$84/*i*/){{PL$60/*cDef*/["arguments"][PL$84/*i*/] = PL$76/*self*/["_createTemporaryTrackedClass"](PL$60/*cDef*/["arguments"][PL$84/*i*/]);;
}};
;
;
});
PL$169/*isReady*/ = true;
if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["return"])){
PL$169/*isReady*/ = false;;
PL$76/*self*/["definitionPromise"](PL$60/*cDef*/["return"])["then"]((function(PL$34/*parType*/){
;
PL$60/*cDef*/["return"] = PL$34/*parType*/;;
PL$167/*checkReady*/();;
;
}));;
};
;
PL$170/*resolveTypeFun*/ = (function(PL$171/*parI*/){
;
return (function(PL$34/*parType*/){
;
PL$60/*cDef*/["arguments"][PL$171/*parI*/] = PL$34/*parType*/;;
PL$167/*checkReady*/();;
;
});;
;
});
PL$84/*i*/ = 0;
for(PL$84/*i*/ = 0;(PL$84/*i*/ < PL$60/*cDef*/["arguments"]["length"]);++PL$84/*i*/){{if(PL$76/*self*/["isProvisional"](PL$60/*cDef*/["arguments"][PL$84/*i*/])){
PL$169/*isReady*/ = false;;
PL$76/*self*/["definitionPromise"](PL$60/*cDef*/["arguments"][PL$84/*i*/])["then"](PL$170/*resolveTypeFun*/(PL$84/*i*/));;
};
;
}};
;
PL$52/*cf*/ = PL$53/*classHider*/(PL$60/*cDef*/);
if(! PL$169/*isReady*/){
PL$60/*cDef*/["readyPromise"] = new PL$79/*Promise*/();;
PL$167/*checkReady*/ = (function(){
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
PL$168/*makeTemporaries*/();;
PL$60/*cDef*/["isReady"] = true;;
PL$60/*cDef*/["readyPromise"]["resolve"](PL$52/*cf*/);;
;
});;
PL$167/*checkReady*/();;

}else{
PL$167/*checkReady*/();;
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
"getFunctionArgumentType": (function(PL$34/*parType*/, PL$172/*parIndex*/){
var PL$60/*cDef*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
if((PL$60/*cDef*/["arguments"] && PL$60/*cDef*/["arguments"][PL$172/*parIndex*/])){
return PL$60/*cDef*/["arguments"][PL$172/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$34/*parType*/, PL$172/*parIndex*/){
var PL$60/*cDef*/;
var PL$173/*t*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$173/*t*/;
if(PL$60/*cDef*/["constructorArguments"]){
PL$173/*t*/ = PL$60/*cDef*/["constructorArguments"][PL$172/*parIndex*/];;
};
;
if(PL$173/*t*/){
return PL$173/*t*/;;
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
"getBuiltinType": (function(PL$174/*parName*/){
;
return PL$55/*builtinTypes*/[PL$174/*parName*/];;
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
"setMemberByDef": (function(PL$175/*parDynInstance*/, PL$62/*parMemberDefinition*/, PL$176/*parValueDynInstance*/){
var PL$64/*realInstance*/;
var PL$65/*tracker*/;
var PL$60/*cDef*/;
var PL$66/*trackMemberIdx*/;
;
PL$64/*realInstance*/ = PL$175/*parDynInstance*/["instance"];
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["index"]] = PL$176/*parValueDynInstance*/["getInstanceAsType"](PL$62/*parMemberDefinition*/["type"]);;
if(this["isTrackedClass"](PL$62/*parMemberDefinition*/["type"])){
PL$65/*tracker*/ = this["getTrackerFromDynInstance"](PL$175/*parDynInstance*/);
PL$60/*cDef*/ = PL$51/*getClass*/(PL$176/*parValueDynInstance*/["type"]);
PL$66/*trackMemberIdx*/ = PL$60/*cDef*/["map"]["trackMemberIdx"];
if(PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]){
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$64/*realInstance*/[PL$62/*parMemberDefinition*/["trackIndex"]] = PL$176/*parValueDynInstance*/["instance"][PL$66/*trackMemberIdx*/](PL$65/*tracker*/);;
};
;
;
}),
"getTrack": (function(PL$35/*parInstance*/){
var PL$177/*type*/;
var PL$60/*cDef*/;
;
if(! PL$35/*parInstance*/){
return;;
};
;
PL$177/*type*/ = PL$35/*parInstance*/[0];
PL$60/*cDef*/ = PL$51/*getClass*/(PL$177/*type*/);
return PL$35/*parInstance*/[PL$60/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"canSet": (function(PL$178/*parTargetType*/, PL$179/*parSourceType*/){
var PL$180/*allOk*/;
var PL$84/*i*/;
var PL$181/*l*/;
var PL$182/*tp*/;
var PL$183/*sp*/;
;
if(((PL$178/*parTargetType*/ === undefined) && (PL$179/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$178/*parTargetType*/ === undefined) || (PL$179/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$178/*parTargetType*/ === PL$179/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$179/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$178/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$178/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$179/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$178/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$178/*parTargetType*/), PL$179/*parSourceType*/);;
};
;
if((((PL$178/*parTargetType*/["isFunction"] && PL$179/*parSourceType*/["isFunction"]) && this["canSet"](PL$178/*parTargetType*/["returnType"], PL$179/*parSourceType*/["returnType"])) && (PL$178/*parTargetType*/["parameters"]["length"] == PL$179/*parSourceType*/["parameters"]["length"]))){
PL$180/*allOk*/ = true;
PL$84/*i*/ = 0;
PL$181/*l*/ = PL$178/*parTargetType*/["parameters"]["length"];
for(PL$84/*i*/;(PL$84/*i*/ < PL$181/*l*/);++PL$84/*i*/){{PL$182/*tp*/ = PL$178/*parTargetType*/["parameters"][PL$84/*i*/];
PL$183/*sp*/ = PL$179/*parSourceType*/["parameters"][PL$84/*i*/];
if(! this["canSet"](PL$183/*sp*/, PL$182/*tp*/)){
PL$180/*allOk*/ = false;;
};
;
}};
;
if(PL$180/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$34/*parType*/, PL$184/*parProperty*/, PL$185/*parFunType*/){
var PL$60/*cDef*/;
var PL$86/*map*/;
var PL$61/*mDef*/;
var PL$186/*propertyType*/;
;
PL$60/*cDef*/ = PL$51/*getClass*/(PL$34/*parType*/);
PL$86/*map*/ = PL$60/*cDef*/["map"];
if(PL$86/*map*/["members"][PL$184/*parProperty*/]){
PL$61/*mDef*/ = PL$86/*map*/["members"][PL$184/*parProperty*/];
PL$186/*propertyType*/ = this["getPropertyType"]({"type": PL$34/*parType*/,
"property": PL$184/*parProperty*/});
if(! this["canSet"](PL$186/*propertyType*/, PL$185/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$186/*propertyType*/) || this["isFunctionType"](PL$186/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$185/*parFunType*/) || this["isFunctionType"](PL$185/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$187/*cs*/ = PL$36/*classSystem*/;
PL$188/*getEffectiveFunctionResultType*/ = (function(PL$185/*parFunType*/){
var PL$189/*res*/;
var PL$192/*resultType*/;
var PL$193/*unTrackedType*/;
var PL$194/*promiseConstructor*/;
var PL$195/*promiseResolveType*/;
;
PL$189/*res*/ = {"promiseResolveType": PL$36/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": PL$36/*classSystem*/["getFunctionReturnType"](PL$185/*parFunType*/),
"resolvePromise": (function(PL$190/*parPromise*/, PL$191/*parValue*/){
;
PL$190/*parPromise*/["resolve"](PL$191/*parValue*/);;
;
}),
"rejectPromise": (function(PL$190/*parPromise*/, PL$191/*parValue*/){
;
PL$190/*parPromise*/["reject"](PL$191/*parValue*/);;
;
})};
PL$192/*resultType*/ = PL$189/*res*/["originalResultType"];
PL$189/*res*/["newPromise"] = (function(){
;
return new PL$79/*Promise*/();;
;
});;
if(PL$36/*classSystem*/["isTemporaryTrackedClass"](PL$192/*resultType*/)){
PL$189/*res*/["isTemporary"] = true;;
PL$193/*unTrackedType*/ = PL$36/*classSystem*/["getClassFromTemporaryTracked"](PL$192/*resultType*/);
if(PL$36/*classSystem*/["isPromiseOfClass"](PL$193/*unTrackedType*/)){
PL$194/*promiseConstructor*/ = PL$36/*classSystem*/["getTypeConstructor"](PL$193/*unTrackedType*/);
PL$189/*res*/["newPromise"] = (function(){
;
return PL$194/*promiseConstructor*/();;
;
});;
PL$189/*res*/["resolvePromise"] = (function(PL$190/*parPromise*/, PL$191/*parValue*/){
;
PL$190/*parPromise*/[0]["resolve"](PL$191/*parValue*/);;
;
});;
PL$189/*res*/["rejectPromise"] = (function(PL$190/*parPromise*/, PL$191/*parValue*/){
;
PL$190/*parPromise*/[0]["reject"](PL$191/*parValue*/);;
;
});;
PL$195/*promiseResolveType*/ = PL$36/*classSystem*/["getClassFromPromiseOf"](PL$193/*unTrackedType*/);
PL$189/*res*/["promiseResolveType"] = PL$195/*promiseResolveType*/;;
};
;
};
;
return PL$189/*res*/;;
;
});
PL$196/*_stringEncodeStr*/ = (function(PL$31/*par*/){
var PL$197/*s*/;
;
PL$197/*s*/ = PL$31/*par*/["replace"](new PL$198/*RegExp*/("\\\\", "g"), "\\\\");
PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\n", "g"), "\\n");;
PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\r", "g"), "\\r");;
PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\\"", "g"), "\\\"");;
PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$197/*s*/ = PL$197/*s*/["replace"](new PL$198/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$197/*s*/;;
;
});
PL$199/*stringEncodeStr*/ = (function(PL$31/*par*/){
;
return (("\"" + PL$196/*_stringEncodeStr*/(PL$31/*par*/)) + "\"");;
;
});
PL$200/*internals*/ = {"classHider": PL$53/*classHider*/,
"getClass": PL$51/*getClass*/,
"TrackedPromise": PL$6/*TrackedPromise*/,
"DynInstance": PL$4/*DynInstance*/,
"stringEncodeStr": PL$199/*stringEncodeStr*/,
"getEffectiveFunctionResultType": PL$188/*getEffectiveFunctionResultType*/,
"privateClassSystem": PL$58/*privateClassSystem*/};
PL$7/*provisional*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$8/*temporary*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$9/*promiseOf*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$10/*sync*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$166/*registerSyncClass*/ = PL$200/*internals*/["registerSyncClass"];
PL$163/*destroySynced*/ = PL$200/*internals*/["destroySynced"];
PL$201/*getClassBySyncId*/ = PL$200/*internals*/["getClassBySyncId"];
PL$115/*syncFun*/ = PL$200/*internals*/["syncFun"];
PL$119/*syncFunctionFun*/ = PL$200/*internals*/["syncFunctionFun"];
PL$94/*internalObjects*/ = PL$200/*internals*/["internalObjects"];
PL$93/*getNewInternalId*/ = PL$200/*internals*/["getNewInternalId"];
PL$11/*savable*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$12/*codeGeneration*/(PL$36/*classSystem*/, PL$200/*internals*/);;
PL$123/*runtimeError*/ = PL$200/*internals*/["runtimeError"];
PL$96/*presets*/ = PL$200/*internals*/["presets"];
PL$159/*promiseland*/["classSystem"] = PL$36/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$36/*classSystem*/,
"privateClassSystem": PL$58/*privateClassSystem*/,
"internalObjects": PL$94/*internalObjects*/,
"getClassBySyncId": PL$201/*getClassBySyncId*/,
"DynInstance": PL$4/*DynInstance*/,
"getEffectiveFunctionResultType": PL$188/*getEffectiveFunctionResultType*/});;
return PL$36/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();