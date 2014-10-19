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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "3d194d4e772656ad61c60c13e094cbc6" })){ return promiseland._getModule("3d194d4e772656ad61c60c13e094cbc6"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$38/*console*/;try{PL$38/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$4/*internalObjects*/;
var PL$5/*getModuleData*/;
var PL$11/*frames*/;
var PL$12/*getInstanceFromTransportData*/;
var PL$13/*getInstanceTransportData*/;
var PL$14/*getEffectiveFunctionResultType*/;
;
;
PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
PL$4/*internalObjects*/ = {};
PL$5/*getModuleData*/;
(function(){
var PL$6 = new __Promise();
var PL$8 = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.reject(e); }; }; };
var PL$9 = function(e){ PL$6.reject(e); };
PL$8(function(){;
PL$3/*extra*/["moduleSystemPs"].then(PL$8(function(PL$10){PL$5/*getModuleData*/ = PL$10["getModuleData"];;
PL$6.resolve(); return;;
}), PL$9);
;})();
return PL$6;
})();;
PL$11/*frames*/;
PL$12/*getInstanceFromTransportData*/;
PL$13/*getInstanceTransportData*/;
PL$14/*getEffectiveFunctionResultType*/;
return (function(PL$15/*classSystem*/, PL$16/*internals*/){
var PL$50/*cs*/;
var PL$61/*classHider*/;
var PL$62/*getClass*/;
var PL$63/*TrackedPromise*/;
var PL$34/*DynInstance*/;
var PL$64/*nextInternalId*/;
var PL$65/*getNewInternalId*/;
var PL$66/*syncFun*/;
var PL$59/*currentTransport*/;
var PL$74/*syncFunctionFun*/;
var PL$78/*destroySynced*/;
var PL$81/*registerSyncClass*/;
var PL$86/*getClassBySyncId*/;
;
(function(){
var PL$17 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$19 = function(e){ PL$17.reject(e); };
PL$18(function(){;
PL$3/*extra*/["framesPs"].then(PL$18(function(PL$20){PL$11/*frames*/ = PL$20;;
PL$12/*getInstanceFromTransportData*/ = PL$11/*frames*/["getInstanceFromTransportData"];;
PL$13/*getInstanceTransportData*/ = PL$11/*frames*/["getInstanceTransportData"];;
PL$11/*frames*/["handlers"]["sync2"] = (function(PL$21/*parContent*/, PL$22/*parPackage*/){
var PL$23 = new __Promise();
var PL$24 = function(code){ return function(res){ try{code(res);}catch(e){ PL$23.reject(e); }; }; };
var PL$25 = function(e){ PL$23.reject(e); };
var PL$30/*data*/;
var PL$31/*t*/;
var PL$32/*realInstance*/;
var PL$33/*dynInstance*/;
var PL$35/*valueInstance*/;
PL$24(function(){;
var PL$26 = new __Promise();
var PL$27 = new __Promise();
var PL$28/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$27.resolve(e); }; }; };
var PL$29 = function(e){ PL$27.resolve(e); };
PL$28/*try catch*/(function(){PL$30/*data*/ = PL$21/*parContent*/["getData"]();
PL$31/*t*/ = PL$21/*parContent*/["getTransport"]();
PL$32/*realInstance*/ = PL$4/*internalObjects*/[PL$30/*data*/["remoteId"]];
PL$33/*dynInstance*/ = new PL$34/*DynInstance*/(undefined, PL$32/*realInstance*/);
PL$12/*getInstanceFromTransportData*/(PL$30/*data*/["value"], PL$21/*parContent*/).then(PL$28/*try catch*/(function(PL$36){PL$35/*valueInstance*/ = PL$36;
if(! PL$32/*realInstance*/){
PL$35/*valueInstance*/["track"]();;
PL$23.resolve(); return;;
};
;
PL$15/*classSystem*/["setMemberByIndex"](PL$33/*dynInstance*/, PL$30/*data*/["memberIdx"], PL$35/*valueInstance*/);;
PL$26.resolve();
}), PL$29);
;})();
PL$27.then(PL$24(function(PL$37/*e*/){if(PL$35/*valueInstance*/){
PL$35/*valueInstance*/["track"]();;
};
;
if(PL$33/*dynInstance*/){
PL$33/*dynInstance*/["track"]();;
};
;
PL$38/*console*/["log"]("sync error");;
PL$38/*console*/["log"](PL$37/*e*/);;
PL$26.resolve();;
}));
PL$26.then(PL$24(function(){;
;
if(PL$35/*valueInstance*/){
PL$35/*valueInstance*/["track"]();;
};
;
if(PL$33/*dynInstance*/){
PL$33/*dynInstance*/["track"]();;
};
;
PL$23.resolve(); return;;
}), PL$25)})();
return PL$23;
});;
PL$11/*frames*/["handlers"]["syncf"] = (function(PL$21/*parContent*/, PL$22/*parPackage*/){
var PL$39 = new __Promise();
var PL$40 = function(code){ return function(res){ try{code(res);}catch(e){ PL$39.reject(e); }; }; };
var PL$41 = function(e){ PL$39.reject(e); };
var PL$42/*argInstances*/;
var PL$43/*clearUpArgs*/;
var PL$30/*data*/;
var PL$31/*t*/;
var PL$32/*realInstance*/;
var PL$33/*dynInstance*/;
var PL$49/*funType*/;
var PL$51/*resultTypes*/;
var PL$52/*args*/;
var PL$44/*i*/;
var PL$58/*realArgs*/;
var PL$60/*funResult*/;
PL$40(function(){;
PL$42/*argInstances*/ = [];
PL$43/*clearUpArgs*/ = (function(){
var PL$44/*i*/;
;
PL$44/*i*/;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$42/*argInstances*/["length"]);++PL$44/*i*/){{PL$42/*argInstances*/[PL$44/*i*/]["track"]();;
}};
;
PL$42/*argInstances*/ = [];;
;
});
var PL$45 = new __Promise();
var PL$46 = new __Promise();
var PL$47/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$46.resolve(e); }; }; };
var PL$48 = function(e){ PL$46.resolve(e); };
PL$47/*try catch*/(function(){PL$30/*data*/ = PL$21/*parContent*/["getData"]();
PL$31/*t*/ = PL$21/*parContent*/["getTransport"]();
PL$32/*realInstance*/ = PL$4/*internalObjects*/[PL$30/*data*/["remoteId"]];
PL$33/*dynInstance*/ = new PL$34/*DynInstance*/(undefined, PL$32/*realInstance*/);
PL$49/*funType*/ = PL$50/*cs*/["getMemberTypeByIndex"](PL$33/*dynInstance*/, PL$30/*data*/["memberIdx"]);
PL$51/*resultTypes*/ = PL$14/*getEffectiveFunctionResultType*/(PL$49/*funType*/);
PL$52/*args*/ = PL$30/*data*/["args"];
PL$44/*i*/ = 0;
PL$44/*i*/ = 0;
var PL$54 = new __Promise();
var PL$53 = function(){var PL$55 = new __Promise();
if((PL$44/*i*/ < PL$52/*args*/["length"])){PL$12/*getInstanceFromTransportData*/(PL$52/*args*/[PL$44/*i*/], PL$21/*parContent*/).then(PL$47/*try catch*/(function(PL$56){PL$42/*argInstances*/["push"](PL$56);;
PL$55.resolve(true); return PL$55;
;
}), PL$48);
;}else{PL$55.resolve(false); return PL$55;
};
PL$55;
return PL$55;
};
var PL$57 = function(){PL$53().then(function(contLoop){
if (contLoop){++PL$44/*i*/;
PL$57();}else{PL$54.resolve();};
});
};
PL$57();
PL$54.then(function(){;
;
PL$49/*funType*/;
PL$58/*realArgs*/ = [];
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$52/*args*/["length"]);++PL$44/*i*/){{PL$58/*realArgs*/["push"](PL$42/*argInstances*/[PL$44/*i*/]["getInstanceAsType"](PL$15/*classSystem*/["getFunctionArgumentType"](PL$49/*funType*/, PL$44/*i*/)));;
}};
;
PL$43/*clearUpArgs*/();;
PL$59/*currentTransport*/ = PL$31/*t*/;;
PL$60/*funResult*/ = PL$32/*realInstance*/[PL$30/*data*/["memberIdx"]]["apply"](PL$32/*realInstance*/, PL$58/*realArgs*/);
if(PL$51/*resultTypes*/["isTemporary"]){
PL$60/*funResult*/[1]();;
};
;
PL$45.resolve();
});})();
PL$46.then(PL$40(function(PL$37/*e*/){if(PL$33/*dynInstance*/){
PL$33/*dynInstance*/["track"]();;
};
;
PL$38/*console*/["log"]("syncf error");;
PL$38/*console*/["log"](PL$37/*e*/);;
PL$45.resolve();;
}));
PL$45.then(PL$40(function(){;
;
if(PL$33/*dynInstance*/){
PL$33/*dynInstance*/["track"]();;
};
;
PL$43/*clearUpArgs*/();;
PL$39.resolve(); return;;
}), PL$41)})();
return PL$39;
});;
PL$17.resolve(); return;;
}), PL$19);
;})();
return PL$17;
})();;
PL$50/*cs*/ = PL$15/*classSystem*/;
PL$61/*classHider*/ = PL$16/*internals*/["classHider"];
PL$62/*getClass*/ = PL$16/*internals*/["getClass"];
PL$63/*TrackedPromise*/ = PL$16/*internals*/["TrackedPromise"];
PL$34/*DynInstance*/ = PL$16/*internals*/["DynInstance"];
PL$14/*getEffectiveFunctionResultType*/ = PL$16/*internals*/["getEffectiveFunctionResultType"];;
PL$64/*nextInternalId*/ = 1;
PL$65/*getNewInternalId*/ = (function(){
;
return PL$64/*nextInternalId*/++;;
;
});
PL$16/*internals*/["getNewInternalId"] = PL$65/*getNewInternalId*/;;
PL$16/*internals*/["internalObjects"] = PL$4/*internalObjects*/;;
PL$66/*syncFun*/ = (function(PL$67/*parInstance*/, PL$68/*memberIdx*/, PL$69/*mType*/, PL$70/*value*/){
var PL$71/*syncData*/;
var PL$44/*i*/;
var PL$72/*transport*/;
var PL$73/*m*/;
;
PL$71/*syncData*/ = PL$15/*classSystem*/["getSyncData"](PL$67/*parInstance*/);
if(PL$71/*syncData*/){
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$71/*syncData*/["transports"]["length"]);++PL$44/*i*/){{PL$72/*transport*/ = PL$71/*syncData*/["transports"][PL$44/*i*/]["t"];
PL$73/*m*/ = PL$72/*transport*/["newMessage"]();
PL$73/*m*/["setData"]({"type": "sync2",
"remoteId": PL$72/*transport*/["getInstanceRemoteId"](PL$67/*parInstance*/),
"memberIdx": PL$68/*memberIdx*/,
"value": PL$13/*getInstanceTransportData*/(PL$69/*mType*/, PL$70/*value*/, PL$73/*m*/)});;
PL$73/*m*/["send"]();;
}};
;
};
;
;
});
PL$16/*internals*/["syncFun"] = PL$66/*syncFun*/;;
PL$59/*currentTransport*/;
PL$74/*syncFunctionFun*/ = (function(PL$67/*parInstance*/, PL$68/*memberIdx*/, PL$69/*mType*/, PL$52/*args*/){
var PL$75/*cTransport*/;
var PL$71/*syncData*/;
var PL$44/*i*/;
var PL$72/*transport*/;
var PL$73/*m*/;
var PL$42/*argInstances*/;
var PL$76/*j*/;
var PL$77/*argType*/;
;
PL$75/*cTransport*/ = PL$59/*currentTransport*/;
PL$59/*currentTransport*/ = undefined;;
PL$71/*syncData*/ = PL$15/*classSystem*/["getSyncData"](PL$67/*parInstance*/);
if(PL$71/*syncData*/){
PL$44/*i*/ = 0;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$71/*syncData*/["transports"]["length"]);++PL$44/*i*/){{PL$72/*transport*/ = PL$71/*syncData*/["transports"][PL$44/*i*/]["t"];
if((PL$72/*transport*/ === PL$75/*cTransport*/)){
continue;;
};
;
PL$73/*m*/ = PL$72/*transport*/["newMessage"]();
PL$42/*argInstances*/ = [];
PL$76/*j*/;
for(PL$76/*j*/ = 0;(PL$76/*j*/ < PL$52/*args*/["length"]);++PL$76/*j*/){{PL$77/*argType*/ = PL$50/*cs*/["getFunctionArgumentType"](PL$69/*mType*/, PL$76/*j*/);
PL$42/*argInstances*/["push"](PL$13/*getInstanceTransportData*/(PL$77/*argType*/, PL$52/*args*/[PL$76/*j*/], PL$73/*m*/));;
}};
;
PL$73/*m*/["setData"]({"type": "syncf",
"remoteId": PL$72/*transport*/["getInstanceRemoteId"](PL$67/*parInstance*/),
"memberIdx": PL$68/*memberIdx*/,
"args": PL$42/*argInstances*/});;
PL$73/*m*/["send"]();;
}};
;
};
;
;
});
PL$16/*internals*/["syncFunctionFun"] = PL$74/*syncFunctionFun*/;;
PL$78/*destroySynced*/ = (function(PL$79/*parSyncData*/){
var PL$71/*syncData*/;
var PL$80/*transports*/;
var PL$44/*i*/;
var PL$31/*t*/;
;
if(! PL$79/*parSyncData*/){
return;;
};
;
PL$71/*syncData*/ = PL$79/*parSyncData*/;
PL$80/*transports*/ = PL$71/*syncData*/["transports"]["slice"]();
PL$44/*i*/;
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$80/*transports*/["length"]);++PL$44/*i*/){{PL$31/*t*/ = PL$80/*transports*/[PL$44/*i*/]["t"];
PL$31/*t*/["removeInstance"](PL$71/*syncData*/["getInternalId"]());;
}};
;
if(PL$71/*syncData*/["internalId"]){
delete PL$4/*internalObjects*/[PL$71/*syncData*/["internalId"]];;
};
;
;
});
PL$16/*internals*/["destroySynced"] = PL$78/*destroySynced*/;;
PL$81/*registerSyncClass*/ = (function(PL$82/*hashStr*/, PL$83/*nameStr*/, PL$84/*parType*/){
var PL$85/*moduleData*/;
;
PL$85/*moduleData*/ = PL$5/*getModuleData*/(PL$82/*hashStr*/);
PL$85/*moduleData*/["classes"][PL$83/*nameStr*/] = {"type": PL$84/*parType*/};;
;
});
PL$16/*internals*/["registerSyncClass"] = PL$81/*registerSyncClass*/;;
PL$86/*getClassBySyncId*/ = (function(PL$87/*parSyncId*/){
var PL$85/*moduleData*/;
;
PL$85/*moduleData*/ = PL$5/*getModuleData*/(PL$87/*parSyncId*/["hash"]);
if((PL$85/*moduleData*/ && PL$85/*moduleData*/["classes"][PL$87/*parSyncId*/["name"]])){
return PL$85/*moduleData*/["classes"][PL$87/*parSyncId*/["name"]]["type"];;
};
;
;
});
PL$16/*internals*/["getClassBySyncId"] = PL$86/*getClassBySyncId*/;;
PL$50/*cs*/["isSyncedClass"] = (function(PL$84/*parType*/){
var PL$88/*cDef*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$84/*parType*/);
if(PL$88/*cDef*/["sync"]){
return true;;
};
;
return false;;
;
});;
PL$50/*cs*/["isServe"] = (function(PL$84/*parType*/){
var PL$88/*cDef*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$84/*parType*/);
if(PL$88/*cDef*/["syncServe"]){
return true;;
};
;
return false;;
;
});;
PL$50/*cs*/["getInternalId"] = (function(PL$67/*parInstance*/){
var PL$89/*type*/;
var PL$88/*cDef*/;
var PL$71/*syncData*/;
;
PL$89/*type*/ = PL$67/*parInstance*/[0];
PL$88/*cDef*/ = PL$62/*getClass*/(PL$89/*type*/);
if(PL$88/*cDef*/["sync"]){
PL$71/*syncData*/ = PL$67/*parInstance*/[PL$88/*cDef*/["map"]["syncDataIdx"]]();
return PL$71/*syncData*/["getInternalId"]();;
};
;
return;;
;
});;
PL$50/*cs*/["getSyncData"] = (function(PL$67/*parInstance*/){
var PL$89/*type*/;
var PL$88/*cDef*/;
;
PL$89/*type*/ = PL$67/*parInstance*/[0];
PL$88/*cDef*/ = PL$62/*getClass*/(PL$89/*type*/);
if(PL$88/*cDef*/["sync"]){
return PL$67/*parInstance*/[PL$88/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
});;
PL$50/*cs*/["getSyncId"] = (function(PL$84/*parType*/){
var PL$88/*cDef*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$84/*parType*/);
return PL$88/*cDef*/["syncId"];;
;
});;
PL$50/*cs*/["addTransport"] = (function(PL$90/*parDynInstance*/, PL$91/*parTransport*/){
var PL$71/*syncData*/;
;
PL$71/*syncData*/ = this["getSyncData"](PL$90/*parDynInstance*/["instance"]);
PL$71/*syncData*/["transports"]["push"]({"t": PL$91/*parTransport*/,
"remove": (function(){
;
;
})});;
if(((PL$71/*syncData*/["transports"]["length"] > 1) && ! PL$71/*syncData*/["track"])){
PL$71/*syncData*/["track"] = PL$90/*parDynInstance*/["getTrack"]();;
};
;
;
});;
PL$50/*cs*/["removeTransport"] = (function(PL$92/*parInternalId*/, PL$91/*parTransport*/){
var PL$32/*realInstance*/;
var PL$71/*syncData*/;
var PL$80/*transports*/;
var PL$93/*index*/;
var PL$44/*i*/;
var PL$94/*l*/;
var PL$95/*track*/;
;
PL$32/*realInstance*/ = PL$4/*internalObjects*/[PL$92/*parInternalId*/];
if(! PL$32/*realInstance*/){
return;;
};
;
PL$71/*syncData*/ = this["getSyncData"](PL$32/*realInstance*/);
PL$80/*transports*/ = PL$71/*syncData*/["transports"];
PL$93/*index*/ = - 1;
PL$44/*i*/;
PL$94/*l*/ = PL$80/*transports*/["length"];
for(PL$44/*i*/ = 0;(PL$44/*i*/ < PL$94/*l*/);++PL$44/*i*/){{if((PL$80/*transports*/[PL$44/*i*/]["t"] === PL$91/*parTransport*/)){
PL$80/*transports*/[PL$44/*i*/]["remove"]();;
PL$93/*index*/ = PL$44/*i*/;;
break;;
};
;
}};
;
if((PL$93/*index*/ > - 1)){
PL$80/*transports*/["splice"](PL$93/*index*/, 1);;
};
;
if(((PL$71/*syncData*/["transports"]["length"] < 2) && PL$71/*syncData*/["track"])){
PL$95/*track*/ = PL$71/*syncData*/["track"];
PL$71/*syncData*/["track"] = undefined;;
PL$95/*track*/();;
};
;
;
});;
PL$50/*cs*/["getInstanceSyncData"] = (function(PL$90/*parDynInstance*/, PL$96/*parGetDataFun*/, PL$97/*parGetTypeFun*/){
var PL$89/*type*/;
var PL$98/*instance*/;
var PL$88/*cDef*/;
var PL$99/*res*/;
var PL$100/*syncMembers*/;
var PL$44/*i*/;
var PL$94/*l*/;
var PL$31/*t*/;
var PL$101/*d*/;
;
if(! PL$90/*parDynInstance*/){
return;;
};
;
PL$89/*type*/ = PL$90/*parDynInstance*/["type"];
PL$98/*instance*/ = PL$90/*parDynInstance*/["instance"];
PL$88/*cDef*/ = PL$62/*getClass*/(PL$89/*type*/);
if(! PL$88/*cDef*/["sync"]){
throw PL$2/*errorMsg*/["notSyncable"];
};
;
PL$99/*res*/ = [PL$97/*parGetTypeFun*/(PL$89/*type*/)];
PL$100/*syncMembers*/ = PL$88/*cDef*/["syncMembers"];
PL$44/*i*/ = 0;
PL$94/*l*/ = PL$100/*syncMembers*/["length"];
for(PL$44/*i*/;(PL$44/*i*/ < PL$94/*l*/);++PL$44/*i*/){{PL$31/*t*/ = PL$100/*syncMembers*/[PL$44/*i*/]["type"];
PL$101/*d*/ = PL$98/*instance*/[PL$100/*syncMembers*/[PL$44/*i*/]["index"]];
if(! this["isFunctionType"](PL$31/*t*/)){
PL$99/*res*/["push"](PL$96/*parGetDataFun*/(PL$31/*t*/, PL$101/*d*/));;
};
;
}};
;
return PL$99/*res*/;;
;
});;
PL$50/*cs*/["setMemberByIndex"] = (function(PL$90/*parDynInstance*/, PL$102/*parIndex*/, PL$103/*parValueDynInstance*/){
var PL$88/*cDef*/;
var PL$104/*mDef*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$90/*parDynInstance*/["type"]);
PL$104/*mDef*/ = PL$88/*cDef*/["map"]["membersByIndex"][PL$102/*parIndex*/];
return this["setMemberByDef"](PL$90/*parDynInstance*/, PL$104/*mDef*/, PL$103/*parValueDynInstance*/);;
;
});;
PL$50/*cs*/["getMemberTypeByIndex"] = (function(PL$90/*parDynInstance*/, PL$102/*parIndex*/){
var PL$88/*cDef*/;
var PL$104/*mDef*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$90/*parDynInstance*/["type"]);
PL$104/*mDef*/ = PL$88/*cDef*/["map"]["membersByIndex"][PL$102/*parIndex*/];
return PL$104/*mDef*/["type"];;
;
});;
PL$50/*cs*/["getTrackerFromDynInstance"] = (function(PL$90/*parDynInstance*/){
var PL$88/*cDef*/;
var PL$105/*trackerIdx*/;
;
PL$88/*cDef*/ = PL$62/*getClass*/(PL$90/*parDynInstance*/["type"]);
PL$105/*trackerIdx*/ = PL$88/*cDef*/["map"]["trackerIdx"];
return PL$90/*parDynInstance*/["instance"][PL$105/*trackerIdx*/];;
;
});;
PL$50/*cs*/["getInstanceFromSyncData"] = (function(PL$106/*parData*/){
var PL$89/*type*/;
var PL$88/*cDef*/;
var PL$107/*isTracked*/;
var PL$98/*instance*/;
var PL$100/*syncMembers*/;
var PL$44/*i*/;
var PL$94/*l*/;
var PL$108/*nextData*/;
var PL$31/*t*/;
;
PL$89/*type*/ = PL$106/*parData*/[0];
PL$88/*cDef*/ = PL$62/*getClass*/(PL$89/*type*/);
if(! PL$88/*cDef*/["sync"]){
throw PL$2/*errorMsg*/["notSyncable"];
};
;
PL$107/*isTracked*/ = this["isTrackedClass"](PL$89/*type*/);
PL$98/*instance*/ = new PL$34/*DynInstance*/(PL$89/*type*/, this["getTypeConstructor"](PL$89/*type*/)());
try
{PL$100/*syncMembers*/ = PL$88/*cDef*/["syncMembers"];
PL$44/*i*/ = 0;
PL$94/*l*/ = PL$100/*syncMembers*/["length"];
PL$108/*nextData*/ = 1;
for(PL$44/*i*/;(PL$44/*i*/ < PL$94/*l*/);++PL$44/*i*/){{PL$31/*t*/ = PL$100/*syncMembers*/[PL$44/*i*/]["type"];
if(this["isFunctionType"](PL$31/*t*/)){
continue;;
};
;
this["setMemberByDef"](PL$98/*instance*/, PL$100/*syncMembers*/[PL$44/*i*/], PL$106/*parData*/[PL$108/*nextData*/]);;
++PL$108/*nextData*/;;
}};
;
}catch(PL$37/*e*/){PL$98/*instance*/["track"]();;
throw PL$37/*e*/;
};
;
return PL$98/*instance*/;;
;
});;
;
});;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();