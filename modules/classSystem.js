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
  defineFun(["./classSystem/test"], function(PL$2/*testModule*/){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "70876c4385bd83337a1cbc4a64becbe7" })){ return promiseland._getModule("70876c4385bd83337a1cbc4a64becbe7"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$78/*Promise*/;try{PL$78/*Promise*/ = Promise;}catch(e){};
var PL$202/*RegExp*/;try{PL$202/*RegExp*/ = RegExp;}catch(e){};
var PL$213/*promiseland*/;try{PL$213/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$4/*getModuleData*/;
var PL$10/*Tracker*/;
var PL$15/*Chainable*/;
var PL$29/*DynInstance*/;
var PL$30/*TrackedPromise*/;
var PL$52/*_ClassToken*/;
var PL$53/*_actClass*/;
var PL$54/*getClass*/;
var PL$56/*classHider*/;
var PL$58/*builtinTypes*/;
var PL$59/*nextInternalId*/;
var PL$60/*getNewInternalId*/;
var PL$61/*internalObjects*/;
var PL$62/*syncFun*/;
var PL$68/*destroySynced*/;
var PL$71/*registerSyncClass*/;
var PL$75/*getClassBySyncId*/;
var PL$23/*classSystem*/;
var PL$136/*runtimeError*/;
var PL$200/*_stringEncodeStr*/;
var PL$199/*stringEncodeStr*/;
var PL$177/*assembleCode*/;
var PL$115/*MAKRO_SELF*/;
var PL$208/*MAKRO_PROPERTY*/;
var PL$209/*MAKRO_PROPERTYSTRING*/;
var PL$116/*MAKRO_PROPERTYVALUE*/;
var PL$118/*MAKRO_VALUE*/;
var PL$190/*MAKRO_LEFT*/;
var PL$117/*MAKRO_OPERATOR*/;
var PL$191/*MAKRO_RIGHT*/;
var PL$137/*MAKRO_VALUEPROPERTY*/;
var PL$210/*MAKRO_RESOLVEFUN*/;
var PL$211/*MAKRO_REJECTFUN*/;
var PL$212/*MAKRO_TYPEVALUE*/;
var PL$185/*MAKRO_CONSTRUCTOR*/;
var PL$25/*errorMsg*/;
;
;
PL$2/*testModule*/ = PL$3/*extra*/["getModule"](PL$2/*testModule*/);;
PL$4/*getModuleData*/;
(function(){
var PL$5 = new __Promise();
var PL$7 = function(code){ return function(res){ try{code(res);}catch(e){ PL$5.reject(e); }; }; };
var PL$8 = function(e){ PL$5.reject(e); };
PL$7(function(){;
PL$3/*extra*/["moduleSystemPs"].then(PL$7(function(PL$9){PL$4/*getModuleData*/ = PL$9["getModuleData"];;
PL$5.resolve(); return;;
}), PL$8);
;})();
return PL$5;
})();;
PL$10/*Tracker*/;
(function(){
var PL$11 = new __Promise();
var PL$12 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$13 = function(e){ PL$11.reject(e); };
PL$12(function(){;
PL$3/*extra*/["TrackerPs"].then(PL$12(function(PL$14){PL$10/*Tracker*/ = PL$14["Tracker"];;
PL$11.resolve(); return;;
}), PL$13);
;})();
return PL$11;
})();;
PL$15/*Chainable*/;
(function(){
var PL$16 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$18 = function(e){ PL$16.reject(e); };
PL$17(function(){;
PL$3/*extra*/["ChainablePs"].then(PL$17(function(PL$19){PL$15/*Chainable*/ = PL$19["Chainable"];;
PL$16.resolve(); return;;
}), PL$18);
;})();
return PL$16;
})();;
PL$29/*DynInstance*/ = (function(){var PL$20/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$21/*parType*/, PL$22/*parInstance*/){
var PL$24/*passedType*/;
;
this["extraTracks"] = [];;
if(! PL$21/*parType*/){
PL$21/*parType*/ = PL$23/*classSystem*/["getTypeFromInstance"](PL$22/*parInstance*/);;
};
;
this["track"] = (function(){
;
;
});;
if(PL$23/*classSystem*/["isVar"](PL$21/*parType*/)){
this["instance"] = PL$22/*parInstance*/;;
this["type"] = PL$21/*parType*/;;
return;;
};
;
PL$24/*passedType*/ = PL$23/*classSystem*/["getTypeFromInstance"](PL$22/*parInstance*/);
if(PL$23/*classSystem*/["isTemporaryTrackedClass"](PL$24/*passedType*/)){
this["instance"] = PL$22/*parInstance*/[0];;
this["track"] = PL$22/*parInstance*/[1];;
this["_isTrack"] = true;;
this["type"] = PL$23/*classSystem*/["getClassFromTemporaryTracked"](PL$24/*passedType*/);;

}else{
if(PL$23/*classSystem*/["isTrackedClass"](PL$24/*passedType*/)){
this["instance"] = PL$22/*parInstance*/;;
this["track"] = PL$23/*classSystem*/["getTrack"](PL$22/*parInstance*/);;
;
this["_isTrack"] = true;;
this["type"] = PL$24/*passedType*/;;

}else{
this["instance"] = PL$22/*parInstance*/;;
this["track"] = (function(){
;
;
});;
this["type"] = PL$24/*passedType*/;;
};
};
;
;
}),
"getInternalId": (function(){
;
return PL$23/*classSystem*/["getInternalId"](this["instance"]);;
;
}),
"getTrack": (function(){
;
if(this["_isTrack"]){
return PL$23/*classSystem*/["getTrack"](this["instance"]);;
};
;
return (function(){
;
;
});;
;
}),
"isServe": (function(){
;
return PL$23/*classSystem*/["isServe"](this["type"]);;
;
}),
"getInstanceAsType": (function(PL$21/*parType*/){
var PL$26/*track*/;
;
if(! PL$23/*classSystem*/["canSet"](PL$21/*parType*/, this["type"])){
throw PL$25/*errorMsg*/["typeMissmatch"];
};
;
if(PL$23/*classSystem*/["isTemporaryTrackedClass"](PL$21/*parType*/)){
PL$26/*track*/ = this["getTrack"]();
this["extraTracks"]["push"](PL$26/*track*/);;
return [this["instance"], PL$26/*track*/];;
};
;
return this["instance"];;
;
}),
"clearExtraTracks": (function(){
var PL$27/*i*/;
;
PL$27/*i*/ = 0;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < this["extraTracks"]["length"]);++PL$27/*i*/){{try
{this["extraTracks"][PL$27/*i*/]();;
}catch(PL$28/*e*/){};
;
}};
;
;
})}, [], PL$20/*inherited*/);
return res; })();PL$29/*DynInstance*/;;
PL$30/*TrackedPromise*/ = (function(PL$31/*parTrackFun*/){
var PL$32/*self*/;
var PL$33/*lifeLine*/;
var PL$34/*destroyFun*/;
var PL$35/*t*/;
var PL$36/*tracker*/;
var PL$37/*rootTrack*/;
var PL$38/*thenAr*/;
var PL$39/*elseAr*/;
var PL$40/*thenFun*/;
var PL$43/*thenReuseFun*/;
;
PL$32/*self*/ = this;
PL$33/*lifeLine*/;
PL$34/*destroyFun*/ = (function(){
;
if(PL$33/*lifeLine*/){
PL$33/*lifeLine*/();;
PL$33/*lifeLine*/ = undefined;;

}else{
PL$32/*self*/["then"]((function(){
;
if(PL$33/*lifeLine*/){
PL$33/*lifeLine*/();;
PL$33/*lifeLine*/ = undefined;;
};
;
;
}));;
};
;
;
});
PL$35/*t*/ = PL$10/*Tracker*/(PL$34/*destroyFun*/);
PL$36/*tracker*/ = PL$35/*t*/[0];
this["rootTrack"] = PL$35/*t*/[1];;
this["memberTrack"] = PL$35/*t*/[2];;
PL$37/*rootTrack*/ = this["rootTrack"];
PL$38/*thenAr*/ = [];
PL$39/*elseAr*/ = [];
PL$40/*thenFun*/ = (function(PL$41/*parThenFun*/, PL$42/*parElseFun*/){
;
if(PL$41/*parThenFun*/){
PL$38/*thenAr*/["push"]([PL$41/*parThenFun*/, PL$37/*rootTrack*/()]);;
};
;
if(PL$42/*parElseFun*/){
PL$39/*elseAr*/["push"](PL$42/*parElseFun*/);;
};
;
;
});
PL$43/*thenReuseFun*/ = (function(PL$44/*parReuse*/, PL$41/*parThenFun*/, PL$42/*parElseFun*/){
;
if(PL$41/*parThenFun*/){
PL$38/*thenAr*/["push"]([PL$41/*parThenFun*/, PL$44/*parReuse*/]);;

}else{
PL$44/*parReuse*/();;
};
;
if(PL$42/*parElseFun*/){
PL$39/*elseAr*/["push"](PL$42/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(PL$45/*value*/){
var PL$46/*realValue*/;
var PL$27/*i*/;
var PL$47/*l*/;
var PL$48/*entryAr*/;
;
if(PL$45/*value*/){
PL$46/*realValue*/ = PL$45/*value*/[0];
PL$33/*lifeLine*/ = PL$31/*parTrackFun*/(PL$45/*value*/, PL$36/*tracker*/);;
PL$45/*value*/ = PL$46/*realValue*/;;
};
;
PL$40/*thenFun*/ = (function(PL$41/*parThenFun*/){
;
if(PL$41/*parThenFun*/){
try
{PL$41/*parThenFun*/([PL$45/*value*/, PL$37/*rootTrack*/()]);;
}catch(PL$28/*e*/){};
;
};
;
;
});;
PL$43/*thenReuseFun*/ = (function(PL$44/*parReuse*/, PL$41/*parThenFun*/){
;
if(PL$41/*parThenFun*/){
try
{PL$41/*parThenFun*/([PL$45/*value*/, PL$44/*parReuse*/]);;
}catch(PL$28/*e*/){};
;

}else{
PL$44/*parReuse*/();;
};
;
;
});;
if(! PL$38/*thenAr*/){
return;;
};
PL$27/*i*/ = 0;
PL$47/*l*/ = PL$38/*thenAr*/["length"];
for(PL$27/*i*/;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{try
{PL$48/*entryAr*/ = PL$38/*thenAr*/[PL$27/*i*/];
PL$48/*entryAr*/[0]([PL$45/*value*/, PL$48/*entryAr*/[1]]);;
}catch(PL$28/*e*/){};
;
}};
;
PL$38/*thenAr*/ = undefined;;
PL$39/*elseAr*/ = undefined;;
this["resolve"] = undefined;;
this["reject"] = undefined;;
;
});;
this["reject"] = (function(PL$45/*value*/){
var PL$27/*i*/;
var PL$47/*l*/;
;
PL$40/*thenFun*/ = (function(PL$49/*u*/, PL$42/*parElseFun*/){
;
if(PL$42/*parElseFun*/){
try
{PL$42/*parElseFun*/(PL$45/*value*/);;
}catch(PL$28/*e*/){};
;
};
;
;
});;
PL$43/*thenReuseFun*/ = (function(PL$44/*parReuse*/, PL$49/*u*/, PL$42/*parElseFun*/){
;
PL$44/*parReuse*/();;
if(PL$42/*parElseFun*/){
try
{PL$42/*parElseFun*/(PL$45/*value*/);;
}catch(PL$28/*e*/){};
;
};
;
;
});;
if(! PL$39/*elseAr*/){
return;;
};
PL$27/*i*/ = 0;
PL$47/*l*/ = PL$39/*elseAr*/["length"];
for(PL$27/*i*/;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{try
{PL$39/*elseAr*/[PL$27/*i*/](PL$45/*value*/);;
}catch(PL$28/*e*/){};
}};
;
PL$38/*thenAr*/ = undefined;;
PL$39/*elseAr*/ = undefined;;
this["resolve"] = undefined;;
this["reject"] = undefined;;
;
});;
this["then"] = (function(PL$50/*par1*/, PL$51/*par2*/){
;
PL$40/*thenFun*/(PL$50/*par1*/, PL$51/*par2*/);;
;
});;
this["thenReuse"] = (function(PL$44/*parReuse*/, PL$50/*par1*/, PL$51/*par2*/){
;
PL$43/*thenReuseFun*/(PL$44/*parReuse*/, PL$50/*par1*/, PL$51/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
this["then"]["thenReuse"] = this["thenReuse"];;
;
});
PL$52/*_ClassToken*/;
PL$53/*_actClass*/;
PL$54/*getClass*/ = (function(PL$55/*cf*/){
;
PL$53/*_actClass*/ = undefined;;
PL$55/*cf*/();;
return PL$53/*_actClass*/;;
;
});
PL$56/*classHider*/ = (function(PL$57/*toHide*/){
;
return (function(){
;
PL$53/*_actClass*/ = PL$57/*toHide*/;;
;
});;
;
});
PL$58/*builtinTypes*/ = {"var": PL$56/*classHider*/({"isVar": true,
"isReady": true}),
"statement": PL$56/*classHider*/({"isStatement": true,
"isReady": true})};
PL$59/*nextInternalId*/ = 1;
PL$60/*getNewInternalId*/ = (function(){
;
return PL$59/*nextInternalId*/++;;
;
});
PL$61/*internalObjects*/ = {};
PL$62/*syncFun*/ = (function(PL$22/*parInstance*/, PL$63/*memberIdx*/, PL$64/*mType*/, PL$45/*value*/){
var PL$65/*syncData*/;
var PL$27/*i*/;
var PL$66/*transport*/;
var PL$67/*m*/;
;
PL$65/*syncData*/ = PL$23/*classSystem*/["getSyncData"](PL$22/*parInstance*/);
if(PL$65/*syncData*/){
PL$27/*i*/ = 0;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$65/*syncData*/["transports"]["length"]);++PL$27/*i*/){{PL$66/*transport*/ = PL$65/*syncData*/["transports"][PL$27/*i*/];
PL$67/*m*/ = PL$66/*transport*/["newMessage"]();
PL$67/*m*/["setData"]({"type": "sync",
"remoteId": PL$66/*transport*/["getInstanceRemoteId"](PL$22/*parInstance*/),
"memberIdx": PL$63/*memberIdx*/,
"value": PL$45/*value*/});;
PL$67/*m*/["send"]();;
}};
;
};
;
;
});
PL$68/*destroySynced*/ = (function(PL$69/*parSyncData*/){
var PL$65/*syncData*/;
var PL$70/*transports*/;
var PL$27/*i*/;
var PL$35/*t*/;
;
if(! PL$69/*parSyncData*/){
return;;
};
;
PL$65/*syncData*/ = PL$69/*parSyncData*/;
PL$70/*transports*/ = PL$65/*syncData*/["transports"]["slice"]();
PL$27/*i*/;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$70/*transports*/["length"]);++PL$27/*i*/){{PL$35/*t*/ = PL$70/*transports*/[PL$27/*i*/];
PL$35/*t*/["removeInstance"](PL$65/*syncData*/["getInternalId"]());;
}};
;
if(PL$65/*syncData*/["internalId"]){
delete PL$61/*internalObjects*/[PL$65/*syncData*/["internalId"]];;
};
;
;
});
PL$71/*registerSyncClass*/ = (function(PL$72/*hashStr*/, PL$73/*nameStr*/, PL$21/*parType*/){
var PL$74/*moduleData*/;
;
PL$74/*moduleData*/ = PL$4/*getModuleData*/(PL$72/*hashStr*/);
PL$74/*moduleData*/["classes"][PL$73/*nameStr*/] = {"type": PL$21/*parType*/};;
;
});
PL$75/*getClassBySyncId*/ = (function(PL$76/*parSyncId*/){
var PL$74/*moduleData*/;
;
PL$74/*moduleData*/ = PL$4/*getModuleData*/(PL$76/*parSyncId*/["hash"]);
if((PL$74/*moduleData*/ && PL$74/*moduleData*/["classes"][PL$76/*parSyncId*/["name"]])){
return PL$74/*moduleData*/["classes"][PL$76/*parSyncId*/["name"]]["type"];;
};
;
;
});
PL$23/*classSystem*/ = {"_createProvisionalClass": (function(){
var PL$77/*cDef*/;
var PL$55/*cf*/;
;
PL$77/*cDef*/ = {"provisional": true,
"promise": new PL$78/*Promise*/(),
"type": undefined};
PL$77/*cDef*/["promise"]["then"]((function(PL$79/*type*/){
;
PL$77/*cDef*/["type"] = PL$79/*type*/;;
;
}));;
PL$55/*cf*/ = PL$56/*classHider*/(PL$77/*cDef*/);
return PL$55/*cf*/;;
;
}),
"_resolveProvisional": (function(PL$21/*parType*/, PL$80/*parResult*/){
var PL$32/*self*/;
var PL$81/*typeDef*/;
var PL$82/*resultDef*/;
;
PL$32/*self*/ = this;
PL$81/*typeDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
PL$82/*resultDef*/ = PL$54/*getClass*/(PL$80/*parResult*/);
if(PL$82/*resultDef*/["provisional"]){
PL$82/*resultDef*/["promise"]["then"]((function(PL$83/*result*/){
;
PL$32/*self*/["resolveProvisional"](PL$21/*parType*/, PL$83/*result*/);;
;
}));;

}else{
PL$81/*typeDef*/["promise"]["resolve"](PL$80/*parResult*/);;
};
;
;
}),
"isProvisional": (function(PL$21/*parType*/){
var PL$81/*typeDef*/;
;
PL$81/*typeDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$81/*typeDef*/["provisional"]){
return true;;
};
;
return false;;
;
}),
"definitionPromise": (function(PL$21/*parType*/){
var PL$81/*typeDef*/;
var PL$84/*p*/;
;
PL$81/*typeDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$81/*typeDef*/["provisional"]){
return PL$81/*typeDef*/["promise"];;
};
;
PL$84/*p*/ = new PL$78/*Promise*/();
PL$84/*p*/["resolve"](PL$21/*parType*/);;
return PL$84/*p*/;;
;
}),
"readyPromise": (function(PL$85/*_parType*/){
var PL$84/*p*/;
;
PL$84/*p*/ = new PL$78/*Promise*/();
this["definitionPromise"](PL$85/*_parType*/)["then"]((function(PL$21/*parType*/){
var PL$81/*typeDef*/;
;
PL$81/*typeDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$81/*typeDef*/["isReady"]){
PL$84/*p*/["resolve"](PL$21/*parType*/);;
return;;
};
;
PL$81/*typeDef*/["readyPromise"]["then"]((function(PL$21/*parType*/){
;
PL$84/*p*/["resolve"](PL$21/*parType*/);;
;
}));;
return;;
;
}));;
return PL$84/*p*/;;
;
}),
"_createTemporaryTrackedClass": (function(PL$21/*parType*/){
var PL$32/*self*/;
var PL$86/*pr*/;
var PL$77/*cDef*/;
var PL$55/*cf*/;
;
PL$32/*self*/ = this;
if(this["isProvisional"](PL$21/*parType*/)){
PL$86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](PL$21/*parType*/)["then"]((function(PL$87/*parDefinedClass*/){
;
PL$32/*self*/["_resolveProvisional"](PL$86/*pr*/, PL$32/*self*/["_createTemporaryTrackedClass"](PL$87/*parDefinedClass*/));;
;
}));;
return PL$86/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](PL$21/*parType*/)){
return PL$21/*parType*/;;
};
;
if(! this["isTrackedClass"](PL$21/*parType*/)){
return PL$21/*parType*/;;
};
;
PL$77/*cDef*/ = {"temporaryTracked": true,
"type": PL$21/*parType*/,
"isReady": false,
"readyPromise": new PL$78/*Promise*/()};
PL$55/*cf*/ = PL$56/*classHider*/(PL$77/*cDef*/);
PL$32/*self*/["readyPromise"](PL$21/*parType*/)["then"]((function(){
;
PL$77/*cDef*/["ready"] = true;;
PL$77/*cDef*/["readyPromise"]["resolve"](PL$55/*cf*/);;
;
}));;
return PL$55/*cf*/;;
;
}),
"isSyncedClass": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["sync"]){
return true;;
};
;
return false;;
;
}),
"isTemporaryTrackedClass": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["temporaryTracked"]){
return true;;
};
;
return false;;
;
}),
"isServe": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["syncServe"]){
return true;;
};
;
return false;;
;
}),
"getClassFromTemporaryTracked": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
if(this["isTemporaryTrackedClass"](PL$21/*parType*/)){
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
return PL$77/*cDef*/["type"];;
};
;
return PL$21/*parType*/;;
;
}),
"_createPromiseOfClass": (function(PL$21/*parType*/){
var PL$32/*self*/;
var PL$86/*pr*/;
var PL$26/*track*/;
var PL$88/*map*/;
var PL$77/*cDef*/;
var PL$55/*cf*/;
var PL$89/*pcDef*/;
var PL$90/*memberTrackMemberIdx*/;
;
PL$32/*self*/ = this;
if(this["isProvisional"](PL$21/*parType*/)){
PL$86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](PL$21/*parType*/)["then"]((function(PL$87/*parDefinedClass*/){
;
PL$32/*self*/["_resolveProvisional"](PL$86/*pr*/, PL$32/*self*/["_createPromiseOfClass"](PL$87/*parDefinedClass*/));;
;
}));;
return PL$86/*pr*/;;
};
;
if(this["isVar"](PL$21/*parType*/)){
return PL$21/*parType*/;;
};
;
PL$26/*track*/ = false;
if(this["isTrackedClass"](PL$21/*parType*/)){
PL$26/*track*/ = true;;
};
;
PL$88/*map*/ = {};
PL$77/*cDef*/ = {"promiseOf": true,
"type": PL$21/*parType*/,
"isReady": true,
"readyPromise": new PL$78/*Promise*/(),
"track": PL$26/*track*/,
"map": PL$88/*map*/};
PL$55/*cf*/ = PL$56/*classHider*/(PL$77/*cDef*/);
if(PL$26/*track*/){
PL$77/*cDef*/["map"]["trackRootIdx"] = "rootTrack";;
PL$77/*cDef*/["map"]["trackMemberIdx"] = "memberTrack";;
PL$89/*pcDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
PL$90/*memberTrackMemberIdx*/ = PL$89/*pcDef*/["map"]["trackMemberIdx"];
PL$77/*cDef*/["constructor"] = (function(){
var PL$91/*r*/;
;
PL$91/*r*/ = new PL$30/*TrackedPromise*/((function(PL$92/*parTempValue*/, PL$93/*parTracker*/){
var PL$94/*v*/;
var PL$47/*l*/;
;
PL$94/*v*/ = PL$92/*parTempValue*/[0];
PL$47/*l*/ = PL$94/*v*/[PL$90/*memberTrackMemberIdx*/](PL$93/*parTracker*/);
PL$92/*parTempValue*/[1]();;
return PL$47/*l*/;;
;
}));
return [PL$91/*r*/, PL$91/*r*/["rootTrack"]()];;
;
});;

}else{
PL$77/*cDef*/["constructor"] = PL$78/*Promise*/;;
};
;
PL$77/*cDef*/["readyPromise"]["resolve"](PL$55/*cf*/);;
return PL$55/*cf*/;;
;
}),
"isPromiseOfClass": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["promiseOf"]){
return true;;
};
;
return false;;
;
}),
"getClassFromPromiseOf": (function(PL$21/*parType*/){
var PL$32/*self*/;
var PL$86/*pr*/;
var PL$77/*cDef*/;
;
PL$32/*self*/ = this;
if(this["isProvisional"](PL$21/*parType*/)){
PL$86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](PL$21/*parType*/)["then"]((function(PL$87/*parDefinedClass*/){
;
PL$32/*self*/["_resolveProvisional"](PL$86/*pr*/, PL$32/*self*/["getClassFromPromiseOf"](PL$87/*parDefinedClass*/));;
;
}));;
return PL$86/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](PL$21/*parType*/)){
return this["getClassFromPromiseOf"](this["getClassFromTemporaryTracked"](PL$21/*parType*/));;
};
;
if(this["isPromiseOfClass"](PL$21/*parType*/)){
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
return this["_createTemporaryTrackedClass"](PL$77/*cDef*/["type"]);;
};
;
return PL$21/*parType*/;;
;
}),
"isSameType": (function(PL$95/*type1*/, PL$96/*type2*/){
var PL$97/*cDef1*/;
var PL$98/*cDef2*/;
;
if((PL$95/*type1*/ === PL$96/*type2*/)){
return true;;
};
;
PL$97/*cDef1*/ = PL$54/*getClass*/(PL$95/*type1*/);
if(PL$97/*cDef1*/["provisional"]){
if(! PL$97/*cDef1*/["type"]){
return false;;
};
;
PL$95/*type1*/ = PL$97/*cDef1*/["type"];;
PL$97/*cDef1*/ = PL$54/*getClass*/(PL$95/*type1*/);;
};
;
PL$98/*cDef2*/ = PL$54/*getClass*/(PL$96/*type2*/);
if(PL$98/*cDef2*/["provisional"]){
if(! PL$98/*cDef2*/["type"]){
return false;;
};
;
PL$96/*type2*/ = PL$98/*cDef2*/["type"];;
PL$98/*cDef2*/ = PL$54/*getClass*/(PL$96/*type2*/);;
};
;
if((PL$95/*type1*/ === PL$96/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(PL$99/*classLiteral*/, PL$100/*parDefaults*/){
var PL$32/*self*/;
;
PL$32/*self*/ = this;
return PL$32/*self*/["_createClass"](PL$99/*classLiteral*/, PL$100/*parDefaults*/);;
;
}),
"_membersDefined": (function(PL$99/*classLiteral*/){
var PL$32/*self*/;
var PL$101/*cnt*/;
var PL$102/*retPs*/;
var PL$103/*check*/;
var PL$104/*addMember*/;
var PL$27/*i*/;
;
PL$32/*self*/ = this;
PL$101/*cnt*/ = 1;
PL$102/*retPs*/ = new PL$78/*Promise*/();
PL$103/*check*/ = (function(){
;
if(PL$101/*cnt*/){
return;;
};
;
PL$102/*retPs*/["resolve"](PL$99/*classLiteral*/);;
;
});
PL$104/*addMember*/ = (function(PL$67/*m*/){
;
++PL$101/*cnt*/;;
PL$32/*self*/["definitionPromise"](PL$67/*m*/["type"])["then"]((function(PL$105/*definedType*/){
;
PL$67/*m*/["type"] = PL$105/*definedType*/;;
--PL$101/*cnt*/;;
PL$103/*check*/();;
;
}));;
;
});
if(PL$99/*classLiteral*/["members"]){
PL$27/*i*/ = 0;
for(PL$27/*i*/;(PL$27/*i*/ < PL$99/*classLiteral*/["members"]["length"]);++PL$27/*i*/){{PL$104/*addMember*/(PL$99/*classLiteral*/["members"][PL$27/*i*/]);;
}};
;
};
;
--PL$101/*cnt*/;;
PL$103/*check*/();;
return PL$102/*retPs*/;;
;
}),
"_createClass": (function(PL$99/*classLiteral*/, PL$100/*parDefaults*/){
var PL$106/*cAr*/;
var PL$32/*self*/;
var PL$88/*map*/;
var PL$77/*cDef*/;
var PL$55/*cf*/;
var PL$107/*sync*/;
var PL$108/*syncAll*/;
var PL$109/*syncCnt*/;
var PL$110/*trackerIdx*/;
var PL$111/*trackRootIdx*/;
var PL$112/*trackMemberIdx*/;
var PL$114/*freepart*/;
var PL$119/*helpAr*/;
var PL$120/*makeHelpAr*/;
var PL$121/*conIdx*/;
var PL$127/*constructorDef*/;
var PL$128/*constructorFun*/;
var PL$129/*destroyDef*/;
var PL$34/*destroyFun*/;
var PL$130/*untrackIdxAr*/;
var PL$104/*addMember*/;
var PL$138/*createMembersPs*/;
var PL$140/*memberPs*/;
var PL$27/*i*/;
var PL$141/*proto*/;
var PL$142/*freeFun*/;
var PL$143/*f*/;
var PL$144/*finalPs*/;
;
PL$106/*cAr*/ = [];
PL$32/*self*/ = this;
PL$88/*map*/ = {"members": {},
"extends": []};
PL$77/*cDef*/ = {"constructor": undefined,
"map": PL$88/*map*/,
"isReady": false,
"track": ((PL$99/*classLiteral*/["track"] || PL$99/*classLiteral*/["sync"]) ? true : false),
"sync": PL$99/*classLiteral*/["sync"],
"readyPromise": new PL$78/*Promise*/(),
"syncMembers": []};
PL$55/*cf*/ = PL$56/*classHider*/(PL$77/*cDef*/);
if(PL$77/*cDef*/["sync"]){
if(PL$77/*cDef*/["sync"]["serve"]){
PL$77/*cDef*/["syncServe"] = true;;
};
;
};
;
PL$106/*cAr*/["push"](PL$55/*cf*/);;
PL$107/*sync*/ = (PL$99/*classLiteral*/["sync"] ? true : false);
PL$108/*syncAll*/ = false;
if(PL$107/*sync*/){
if(PL$99/*classLiteral*/["sync"]["all"]){
PL$108/*syncAll*/ = true;;
};
;
};
;
PL$109/*syncCnt*/ = 0;
PL$110/*trackerIdx*/;
PL$111/*trackRootIdx*/;
PL$112/*trackMemberIdx*/;
if(PL$77/*cDef*/["track"]){
PL$88/*map*/["trackerIdx"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](undefined);;
PL$88/*map*/["trackRootIdx"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](undefined);;
PL$88/*map*/["trackMemberIdx"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](undefined);;
PL$110/*trackerIdx*/ = PL$88/*map*/["trackerIdx"];;
PL$111/*trackRootIdx*/ = PL$88/*map*/["trackRootIdx"];;
PL$112/*trackMemberIdx*/ = PL$88/*map*/["trackMemberIdx"];;
};
;
if(PL$107/*sync*/){
PL$88/*map*/["syncDataIdx"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"]((function(){
var PL$32/*self*/;
var PL$113/*internalId*/;
var PL$65/*syncData*/;
;
PL$32/*self*/ = this;
PL$113/*internalId*/;
PL$65/*syncData*/ = {"getInternalId": (function(){
;
if(PL$113/*internalId*/){
return PL$113/*internalId*/;;
};
;
PL$113/*internalId*/ = PL$60/*getNewInternalId*/();;
PL$61/*internalObjects*/[PL$113/*internalId*/] = PL$32/*self*/;;
PL$65/*syncData*/["internalId"] = PL$113/*internalId*/;;
return PL$113/*internalId*/;;
;
}),
"transports": []};
this[PL$88/*map*/["syncDataIdx"]] = (function(){
;
return PL$65/*syncData*/;;
;
});;
return PL$65/*syncData*/;;
;
}));;
};
;
if(PL$99/*classLiteral*/["hasFreePart"]){
PL$114/*freepart*/ = {};
PL$88/*map*/["freePart"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](PL$114/*freepart*/);;
PL$88/*map*/["getMemberCode"] = [PL$115/*MAKRO_SELF*/, (("[" + PL$88/*map*/["freePart"]) + "]["), PL$116/*MAKRO_PROPERTYVALUE*/, "]"];;
PL$88/*map*/["setMemberCode"] = [PL$115/*MAKRO_SELF*/, (("[" + PL$88/*map*/["freePart"]) + "]["), PL$116/*MAKRO_PROPERTYVALUE*/, "] ", PL$117/*MAKRO_OPERATOR*/, " ", PL$118/*MAKRO_VALUE*/];;
};
;
PL$119/*helpAr*/ = [];
PL$120/*makeHelpAr*/ = (function(){
;
return PL$119/*helpAr*/["slice"]();;
;
});
PL$88/*map*/["connectIdx"] = PL$106/*cAr*/["length"];;
PL$121/*conIdx*/ = PL$88/*map*/["connectIdx"];
PL$106/*cAr*/["push"]((function(){
var PL$119/*helpAr*/;
var PL$126/*arguments*/ = arguments;
;
PL$119/*helpAr*/ = PL$120/*makeHelpAr*/();
this[PL$121/*conIdx*/] = (function(PL$122/*idx*/, PL$123/*fun*/, PL$124/*base*/){
var PL$125/*chain*/;
;
PL$125/*chain*/ = PL$119/*helpAr*/[PL$122/*idx*/];
if(! PL$125/*chain*/){
PL$125/*chain*/ = PL$15/*Chainable*/(this, PL$122/*idx*/);;
PL$119/*helpAr*/[PL$122/*idx*/] = PL$125/*chain*/;;
};
;
return PL$125/*chain*/(PL$123/*fun*/, PL$124/*base*/);;
;
});;
return this[PL$121/*conIdx*/]["apply"](this, PL$126/*arguments*/);;
;
}));;
PL$127/*constructorDef*/;
PL$128/*constructorFun*/;
PL$129/*destroyDef*/;
PL$34/*destroyFun*/;
PL$130/*untrackIdxAr*/ = [];
PL$104/*addMember*/ = (function(PL$67/*m*/){
var PL$131/*mDef*/;
var PL$64/*mType*/;
var PL$63/*memberIdx*/;
var PL$132/*isTrackedMember*/;
var PL$134/*def*/;
var PL$135/*mCDef*/;
var PL$90/*memberTrackMemberIdx*/;
;
PL$131/*mDef*/ = {"index": PL$106/*cAr*/["length"]};
if((PL$108/*syncAll*/ || PL$67/*m*/["sync"])){
PL$131/*mDef*/["sync"] = true;;
};
;
PL$131/*mDef*/["type"] = PL$67/*m*/["type"];;
PL$64/*mType*/ = PL$67/*m*/["type"];
PL$63/*memberIdx*/ = PL$131/*mDef*/["index"];
PL$132/*isTrackedMember*/ = PL$32/*self*/["isTrackedClass"](PL$131/*mDef*/["type"]);
if(PL$131/*mDef*/["sync"]){
PL$131/*mDef*/["hasSetter"] = true;;
if(PL$132/*isTrackedMember*/){
PL$131/*mDef*/["defaultSetter"] = (function(PL$133/*vAr*/){
;
PL$62/*syncFun*/(this, PL$63/*memberIdx*/, PL$64/*mType*/, PL$133/*vAr*/[0]);;
return PL$133/*vAr*/;;
;
});;

}else{
PL$131/*mDef*/["defaultSetter"] = (function(PL$94/*v*/){
;
PL$62/*syncFun*/(this, PL$63/*memberIdx*/, PL$64/*mType*/, PL$94/*v*/);;
return PL$94/*v*/;;
;
});;
};
;
PL$77/*cDef*/["syncMembers"]["push"](PL$131/*mDef*/);;
};
;
PL$88/*map*/["members"][PL$67/*m*/["name"]] = PL$131/*mDef*/;;
PL$134/*def*/ = (PL$100/*parDefaults*/ ? PL$100/*parDefaults*/[PL$67/*m*/["name"]] : undefined);
PL$106/*cAr*/["push"](PL$134/*def*/);;
if(PL$131/*mDef*/["hasSetter"]){
PL$131/*mDef*/["setterIdx"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](PL$131/*mDef*/["defaultSetter"]);;
};
;
if((PL$67/*m*/["name"] == "constructor")){
PL$127/*constructorDef*/ = PL$131/*mDef*/;;
PL$128/*constructorFun*/ = PL$134/*def*/;;
};
;
if((PL$67/*m*/["name"] == "destroy")){
PL$129/*destroyDef*/ = PL$131/*mDef*/;;
PL$34/*destroyFun*/ = PL$134/*def*/;;
};
;
PL$131/*mDef*/["getCode"] = [PL$115/*MAKRO_SELF*/, (("[" + PL$131/*mDef*/["index"]) + "]")];;
if(PL$131/*mDef*/["hasSetter"]){
PL$131/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + PL$131/*mDef*/["setterIdx"]) + "](v); s[") + PL$131/*mDef*/["index"]) + "] "), PL$117/*MAKRO_OPERATOR*/, " v; return v; })(", PL$115/*MAKRO_SELF*/, ", ", PL$118/*MAKRO_VALUE*/, ")"];;

}else{
PL$131/*mDef*/["setCode"] = [PL$115/*MAKRO_SELF*/, (("[" + PL$131/*mDef*/["index"]) + "] "), PL$117/*MAKRO_OPERATOR*/, " ", PL$118/*MAKRO_VALUE*/];;
};
;
if(PL$132/*isTrackedMember*/){
PL$135/*mCDef*/ = PL$54/*getClass*/(PL$131/*mDef*/["type"]);
PL$90/*memberTrackMemberIdx*/ = PL$135/*mCDef*/["map"]["trackMemberIdx"];
PL$131/*mDef*/["trackIndex"] = PL$106/*cAr*/["length"];;
PL$106/*cAr*/["push"](undefined);;
PL$130/*untrackIdxAr*/["push"](PL$131/*mDef*/["trackIndex"]);;
if(PL$77/*cDef*/["track"]){
if(PL$131/*mDef*/["hasSetter"]){
PL$131/*mDef*/["setCode"] = [PL$136/*runtimeError*/(PL$25/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$131/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + PL$131/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + PL$131/*mDef*/["index"]) + "] "), PL$117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$131/*mDef*/["trackIndex"]) + "]){ s[") + PL$131/*mDef*/["trackIndex"]) + "](); }; s[") + PL$131/*mDef*/["trackIndex"]) + "] = v[") + PL$90/*memberTrackMemberIdx*/) + "](s[") + PL$110/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$115/*MAKRO_SELF*/, ", ", PL$118/*MAKRO_VALUE*/, ")"];;

}else{
PL$131/*mDef*/["setCode"] = [(("(function(s, v){ s[" + PL$131/*mDef*/["index"]) + "] "), PL$117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$131/*mDef*/["trackIndex"]) + "]){ s[") + PL$131/*mDef*/["trackIndex"]) + "](); }; s[") + PL$131/*mDef*/["trackIndex"]) + "] = v[") + PL$90/*memberTrackMemberIdx*/) + "](s[") + PL$110/*trackerIdx*/) + "]); return v; })("), PL$115/*MAKRO_SELF*/, ", ", PL$118/*MAKRO_VALUE*/, ")"];;
PL$131/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + PL$131/*mDef*/["index"]) + "] "), PL$117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + PL$131/*mDef*/["trackIndex"]) + "]){ s[") + PL$131/*mDef*/["trackIndex"]) + "](); }; s[") + PL$131/*mDef*/["trackIndex"]) + "] = v[") + PL$90/*memberTrackMemberIdx*/) + "](s[") + PL$110/*trackerIdx*/) + "]); vAr[1](); return v; })("), PL$115/*MAKRO_SELF*/, ", ", PL$118/*MAKRO_VALUE*/, ")"];;
};
;

}else{
PL$131/*mDef*/["setCode"] = [PL$136/*runtimeError*/(PL$25/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
PL$131/*mDef*/["setCodeFromTemporary"] = [PL$136/*runtimeError*/(PL$25/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
PL$131/*mDef*/["connectFunCode"] = [PL$115/*MAKRO_SELF*/, (((("[" + PL$88/*map*/["connectIdx"]) + "](") + PL$131/*mDef*/["index"]) + ", "), PL$118/*MAKRO_VALUE*/, ")"];;
PL$131/*mDef*/["connectSlotCode"] = [PL$115/*MAKRO_SELF*/, (((("[" + PL$88/*map*/["connectIdx"]) + "](") + PL$131/*mDef*/["index"]) + ", "), PL$118/*MAKRO_VALUE*/, "[", PL$137/*MAKRO_VALUEPROPERTY*/, "], ", PL$118/*MAKRO_VALUE*/, ")"];;
;
});
PL$138/*createMembersPs*/ = (function(){
var PL$139/*donePs*/;
;
PL$139/*donePs*/ = new PL$78/*Promise*/();
PL$32/*self*/["_membersDefined"](PL$99/*classLiteral*/)["then"]((function(){
var PL$27/*i*/;
;
PL$27/*i*/;
if(PL$99/*classLiteral*/["members"]){
PL$27/*i*/ = 0;
for(PL$27/*i*/;(PL$27/*i*/ < PL$99/*classLiteral*/["members"]["length"]);++PL$27/*i*/){{PL$104/*addMember*/(PL$99/*classLiteral*/["members"][PL$27/*i*/]);;
}};
;
};
;
PL$139/*donePs*/["resolve"]();;
;
}));;
return PL$139/*donePs*/;;
;
});
PL$140/*memberPs*/ = new PL$138/*createMembersPs*/();
PL$27/*i*/;
if(PL$99/*classLiteral*/["hasFreePart"]){
PL$141/*proto*/ = {};
if(PL$100/*parDefaults*/){
for(PL$27/*i*/ in PL$100/*parDefaults*/){if(! PL$88/*map*/["members"][PL$27/*i*/]){
PL$141/*proto*/[PL$27/*i*/] = PL$100/*parDefaults*/[PL$27/*i*/];;
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
PL$143/*f*/ = PL$88/*map*/["freePart"];
if(PL$77/*cDef*/["track"]){
PL$77/*cDef*/["constructor"] = (function(){
var PL$91/*r*/;
var PL$35/*t*/;
;
PL$91/*r*/ = PL$106/*cAr*/["slice"]();
PL$91/*r*/[PL$143/*f*/] = new PL$142/*freeFun*/();;
PL$35/*t*/ = PL$10/*Tracker*/((function(){
;
PL$34/*destroyFun*/["apply"](PL$91/*r*/);;
;
}));
PL$91/*r*/[PL$110/*trackerIdx*/] = PL$35/*t*/[0];;
PL$91/*r*/[PL$111/*trackRootIdx*/] = PL$35/*t*/[1];;
PL$91/*r*/[PL$112/*trackMemberIdx*/] = PL$35/*t*/[2];;
return [PL$91/*r*/, PL$91/*r*/[PL$111/*trackRootIdx*/]()];;
;
});;

}else{
PL$77/*cDef*/["constructor"] = (function(){
var PL$91/*r*/;
;
PL$91/*r*/ = PL$106/*cAr*/["slice"]();
PL$91/*r*/[PL$143/*f*/] = new PL$142/*freeFun*/();;
return PL$91/*r*/;;
;
});;
};
;

}else{
if(PL$77/*cDef*/["track"]){
PL$77/*cDef*/["constructor"] = (function(){
var PL$91/*r*/;
var PL$35/*t*/;
;
PL$91/*r*/ = PL$106/*cAr*/["slice"]();
PL$35/*t*/ = PL$10/*Tracker*/((function(){
;
PL$34/*destroyFun*/["apply"](PL$91/*r*/);;
;
}));
PL$91/*r*/[PL$110/*trackerIdx*/] = PL$35/*t*/[0];;
PL$91/*r*/[PL$111/*trackRootIdx*/] = PL$35/*t*/[1];;
PL$91/*r*/[PL$112/*trackMemberIdx*/] = PL$35/*t*/[2];;
return [PL$91/*r*/, PL$91/*r*/[PL$111/*trackRootIdx*/]()];;
;
});;

}else{
PL$77/*cDef*/["constructor"] = (function(){
var PL$91/*r*/;
;
PL$91/*r*/ = PL$106/*cAr*/["slice"]();
return PL$91/*r*/;;
;
});;
};
;
};
;
PL$144/*finalPs*/ = new PL$78/*Promise*/();
PL$140/*memberPs*/["then"]((function(){
var PL$27/*i*/;
var PL$145/*realConstructor*/;
var PL$147/*conDef*/;
var PL$148/*_destroyFun*/;
var PL$151/*_sync_destroyFun*/;
;
PL$27/*i*/;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$106/*cAr*/["length"]);++PL$27/*i*/){{PL$119/*helpAr*/["push"](undefined);;
}};
;
if(PL$127/*constructorDef*/){
PL$77/*cDef*/["constructorArguments"] = [];;
PL$145/*realConstructor*/ = PL$77/*cDef*/["constructor"];
if(PL$77/*cDef*/["track"]){
PL$77/*cDef*/["constructor"] = (function(){
var PL$146/*instance*/;
var PL$126/*arguments*/ = arguments;
;
PL$146/*instance*/ = PL$145/*realConstructor*/();
PL$128/*constructorFun*/["apply"](PL$146/*instance*/[0], PL$126/*arguments*/);;
return PL$146/*instance*/;;
;
});;

}else{
PL$77/*cDef*/["constructor"] = (function(){
var PL$146/*instance*/;
var PL$126/*arguments*/ = arguments;
;
PL$146/*instance*/ = PL$145/*realConstructor*/();
PL$128/*constructorFun*/["apply"](PL$146/*instance*/, PL$126/*arguments*/);;
return PL$146/*instance*/;;
;
});;
};
;
PL$147/*conDef*/ = PL$54/*getClass*/(PL$127/*constructorDef*/["type"]);
PL$77/*cDef*/["constructorType"] = PL$32/*self*/["createFunctionType"]({"return": PL$55/*cf*/,
"arguments": PL$147/*conDef*/["arguments"]});;

}else{
PL$77/*cDef*/["constructorType"] = PL$32/*self*/["createFunctionType"]({"return": PL$55/*cf*/});;
};
;
if(PL$77/*cDef*/["track"]){
PL$148/*_destroyFun*/;
if(PL$130/*untrackIdxAr*/["length"]){
if(PL$129/*destroyDef*/){
PL$148/*_destroyFun*/ = PL$34/*destroyFun*/;;
PL$34/*destroyFun*/ = (function(){
var PL$27/*i*/;
var PL$149/*curIdx*/;
var PL$150/*tFun*/;
;
PL$27/*i*/;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$130/*untrackIdxAr*/["length"]);++PL$27/*i*/){{PL$149/*curIdx*/ = PL$130/*untrackIdxAr*/[PL$27/*i*/];
PL$150/*tFun*/ = this[PL$149/*curIdx*/];
this[PL$149/*curIdx*/] = undefined;;
if(PL$150/*tFun*/){
PL$150/*tFun*/();;
};
;
}};
;
PL$148/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$34/*destroyFun*/ = (function(){
var PL$27/*i*/;
var PL$150/*tFun*/;
;
PL$27/*i*/;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$130/*untrackIdxAr*/["length"]);++PL$27/*i*/){{PL$150/*tFun*/ = this[PL$130/*untrackIdxAr*/[PL$27/*i*/]];
if(PL$150/*tFun*/){
PL$150/*tFun*/();;
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
if(PL$129/*destroyDef*/){
PL$148/*_destroyFun*/ = PL$34/*destroyFun*/;;
PL$34/*destroyFun*/ = (function(){
;
PL$148/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
PL$34/*destroyFun*/ = (function(){
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
if(PL$107/*sync*/){
PL$151/*_sync_destroyFun*/ = PL$34/*destroyFun*/;
PL$34/*destroyFun*/ = (function(){
var PL$65/*syncData*/;
;
PL$65/*syncData*/ = PL$23/*classSystem*/["getSyncData"](this);
PL$68/*destroySynced*/(PL$65/*syncData*/);;
PL$151/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
PL$144/*finalPs*/["resolve"]();;
;
}));;
PL$144/*finalPs*/["then"]((function(){
;
PL$77/*cDef*/["isReady"] = true;;
PL$77/*cDef*/["readyPromise"]["resolve"](PL$55/*cf*/);;
;
}));;
if(PL$107/*sync*/){
if(PL$99/*classLiteral*/["name"]){
PL$77/*cDef*/["syncId"] = {"hash": PL$99/*classLiteral*/["hashStr"],
"name": PL$99/*classLiteral*/["name"]};;
PL$71/*registerSyncClass*/(PL$99/*classLiteral*/["hashStr"], PL$99/*classLiteral*/["name"], PL$55/*cf*/);;
};
;
};
;
return PL$55/*cf*/;;
;
}),
"getTypeFromInstance": (function(PL$22/*parInstance*/){
;
if((typeof PL$22/*parInstance*/[0] === "function")){
return PL$22/*parInstance*/[0];;
};
;
if((PL$22/*parInstance*/["length"] === 2)){
return this["_createTemporaryTrackedClass"](PL$22/*parInstance*/[0][0]);;
};
;
throw PL$25/*errorMsg*/["unknownInstanceType"];
;
}),
"getInternalId": (function(PL$22/*parInstance*/){
var PL$79/*type*/;
var PL$77/*cDef*/;
var PL$65/*syncData*/;
;
PL$79/*type*/ = PL$22/*parInstance*/[0];
PL$77/*cDef*/ = PL$54/*getClass*/(PL$79/*type*/);
if(PL$77/*cDef*/["sync"]){
PL$65/*syncData*/ = PL$22/*parInstance*/[PL$77/*cDef*/["map"]["syncDataIdx"]]();
return PL$65/*syncData*/["getInternalId"]();;
};
;
return;;
;
}),
"getSyncData": (function(PL$22/*parInstance*/){
var PL$79/*type*/;
var PL$77/*cDef*/;
;
PL$79/*type*/ = PL$22/*parInstance*/[0];
PL$77/*cDef*/ = PL$54/*getClass*/(PL$79/*type*/);
if(PL$77/*cDef*/["sync"]){
return PL$22/*parInstance*/[PL$77/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
}),
"getSyncId": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
return PL$77/*cDef*/["syncId"];;
;
}),
"addTransport": (function(PL$152/*parDynInstance*/, PL$153/*parTransport*/){
var PL$65/*syncData*/;
;
PL$65/*syncData*/ = this["getSyncData"](PL$152/*parDynInstance*/["instance"]);
PL$65/*syncData*/["transports"]["push"](PL$153/*parTransport*/);;
if(((PL$65/*syncData*/["transports"]["length"] > 1) && ! PL$65/*syncData*/["track"])){
PL$65/*syncData*/["track"] = PL$152/*parDynInstance*/["getTrack"]();;
};
;
;
}),
"removeTransport": (function(PL$154/*parInternalId*/, PL$153/*parTransport*/){
var PL$155/*realInstance*/;
var PL$65/*syncData*/;
var PL$70/*transports*/;
var PL$156/*index*/;
var PL$26/*track*/;
;
PL$155/*realInstance*/ = PL$61/*internalObjects*/[PL$154/*parInternalId*/];
if(! PL$155/*realInstance*/){
return;;
};
;
PL$65/*syncData*/ = this["getSyncData"](PL$155/*realInstance*/);
PL$70/*transports*/ = PL$65/*syncData*/["transports"];
PL$156/*index*/ = PL$70/*transports*/["indexOf"](PL$153/*parTransport*/);
if((PL$156/*index*/ > - 1)){
PL$70/*transports*/["splice"](PL$156/*index*/, 1);;
};
;
if(((PL$65/*syncData*/["transports"]["length"] < 2) && PL$65/*syncData*/["track"])){
PL$26/*track*/ = PL$65/*syncData*/["track"];
PL$65/*syncData*/["track"] = undefined;;
PL$26/*track*/();;
};
;
;
}),
"getInstanceSyncData": (function(PL$152/*parDynInstance*/, PL$157/*parGetDataFun*/, PL$158/*parGetTypeFun*/){
var PL$79/*type*/;
var PL$146/*instance*/;
var PL$77/*cDef*/;
var PL$159/*res*/;
var PL$160/*syncMembers*/;
var PL$27/*i*/;
var PL$47/*l*/;
var PL$35/*t*/;
var PL$161/*d*/;
;
if(! PL$152/*parDynInstance*/){
return;;
};
;
PL$79/*type*/ = PL$152/*parDynInstance*/["type"];
PL$146/*instance*/ = PL$152/*parDynInstance*/["instance"];
PL$77/*cDef*/ = PL$54/*getClass*/(PL$79/*type*/);
if(! PL$77/*cDef*/["sync"]){
throw PL$25/*errorMsg*/["notSyncable"];
};
;
PL$159/*res*/ = [PL$158/*parGetTypeFun*/(PL$79/*type*/)];
PL$160/*syncMembers*/ = PL$77/*cDef*/["syncMembers"];
PL$27/*i*/ = 0;
PL$47/*l*/ = PL$160/*syncMembers*/["length"];
for(PL$27/*i*/;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{PL$35/*t*/ = PL$160/*syncMembers*/[PL$27/*i*/]["type"];
PL$161/*d*/ = PL$146/*instance*/[PL$160/*syncMembers*/[PL$27/*i*/]["index"]];
if(! this["isFunctionType"](PL$35/*t*/)){
PL$159/*res*/["push"](PL$157/*parGetDataFun*/(PL$35/*t*/, PL$161/*d*/));;
};
;
}};
;
return PL$159/*res*/;;
;
}),
"getInstanceFromSyncData": (function(PL$162/*parData*/){
var PL$79/*type*/;
var PL$163/*getTracker*/;
var PL$164/*setMember*/;
var PL$77/*cDef*/;
var PL$167/*isTracked*/;
var PL$146/*instance*/;
var PL$160/*syncMembers*/;
var PL$27/*i*/;
var PL$47/*l*/;
var PL$168/*nextData*/;
var PL$35/*t*/;
;
PL$79/*type*/ = PL$162/*parData*/[0];
PL$163/*getTracker*/ = (function(PL$152/*parDynInstance*/){
var PL$77/*cDef*/;
var PL$110/*trackerIdx*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$152/*parDynInstance*/["type"]);
PL$110/*trackerIdx*/ = PL$77/*cDef*/["map"]["trackerIdx"];
return PL$152/*parDynInstance*/["instance"][PL$110/*trackerIdx*/];;
;
});
PL$164/*setMember*/ = (function(PL$21/*parType*/, PL$152/*parDynInstance*/, PL$165/*parMemberDefinition*/, PL$166/*parValueDynInstance*/){
var PL$155/*realInstance*/;
var PL$36/*tracker*/;
var PL$112/*trackMemberIdx*/;
;
PL$155/*realInstance*/ = PL$152/*parDynInstance*/["instance"];
PL$155/*realInstance*/[PL$165/*parMemberDefinition*/["index"]] = PL$166/*parValueDynInstance*/["getInstanceAsType"](PL$165/*parMemberDefinition*/["type"]);;
if(PL$23/*classSystem*/["isTrackedClass"](PL$165/*parMemberDefinition*/["type"])){
PL$36/*tracker*/ = PL$163/*getTracker*/(PL$152/*parDynInstance*/);
PL$77/*cDef*/ = PL$54/*getClass*/(PL$166/*parValueDynInstance*/["type"]);;
PL$112/*trackMemberIdx*/ = PL$77/*cDef*/["map"]["trackMemberIdx"];
if(PL$155/*realInstance*/[PL$165/*parMemberDefinition*/["trackIndex"]]){
PL$155/*realInstance*/[PL$165/*parMemberDefinition*/["trackIndex"]]();;
};
;
PL$155/*realInstance*/[PL$165/*parMemberDefinition*/["trackIndex"]] = PL$166/*parValueDynInstance*/["instance"][PL$112/*trackMemberIdx*/](PL$36/*tracker*/);;
};
;
;
});
PL$77/*cDef*/ = PL$54/*getClass*/(PL$79/*type*/);
if(! PL$77/*cDef*/["sync"]){
throw PL$25/*errorMsg*/["notSyncable"];
};
;
PL$167/*isTracked*/ = this["isTrackedClass"](PL$79/*type*/);
PL$146/*instance*/ = new PL$29/*DynInstance*/(PL$79/*type*/, this["getTypeConstructor"](PL$79/*type*/)());
try
{PL$160/*syncMembers*/ = PL$77/*cDef*/["syncMembers"];
PL$27/*i*/ = 0;
PL$47/*l*/ = PL$160/*syncMembers*/["length"];
PL$168/*nextData*/ = 1;
for(PL$27/*i*/;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{PL$35/*t*/ = PL$160/*syncMembers*/[PL$27/*i*/]["type"];
if(this["isFunctionType"](PL$35/*t*/)){
continue;;
};
;
PL$164/*setMember*/(PL$79/*type*/, PL$146/*instance*/, PL$160/*syncMembers*/[PL$27/*i*/], PL$162/*parData*/[PL$168/*nextData*/]);;
++PL$168/*nextData*/;;
}};
;
}catch(PL$28/*e*/){PL$146/*instance*/["track"]();;
throw PL$28/*e*/;
};
;
return PL$146/*instance*/;;
;
}),
"setMemberByIdx": (function(PL$155/*realInstance*/, PL$63/*memberIdx*/, PL$45/*value*/){
;
PL$155/*realInstance*/[PL$63/*memberIdx*/] = PL$45/*value*/;;
;
}),
"isFunctionType": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(PL$169/*par*/){
var PL$32/*self*/;
var PL$77/*cDef*/;
var PL$170/*checkReady*/;
var PL$171/*makeTemporaries*/;
var PL$172/*isReady*/;
var PL$173/*resolveTypeFun*/;
var PL$27/*i*/;
var PL$55/*cf*/;
;
PL$32/*self*/ = this;
PL$77/*cDef*/ = {"isFunction": true,
"return": (PL$169/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (PL$169/*par*/["arguments"] || []),
"isReady": false};
PL$170/*checkReady*/ = (function(){
;
PL$171/*makeTemporaries*/();;
;
});
PL$171/*makeTemporaries*/ = (function(){
var PL$27/*i*/;
;
PL$77/*cDef*/["return"] = PL$32/*self*/["_createTemporaryTrackedClass"](PL$77/*cDef*/["return"]);;
PL$27/*i*/ = 0;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$77/*cDef*/["arguments"]["length"]);++PL$27/*i*/){{PL$77/*cDef*/["arguments"][PL$27/*i*/] = PL$32/*self*/["_createTemporaryTrackedClass"](PL$77/*cDef*/["arguments"][PL$27/*i*/]);;
}};
;
;
});
PL$172/*isReady*/ = true;
if(PL$32/*self*/["isProvisional"](PL$77/*cDef*/["return"])){
PL$172/*isReady*/ = false;;
PL$32/*self*/["definitionPromise"](PL$77/*cDef*/["return"])["then"]((function(PL$21/*parType*/){
;
PL$77/*cDef*/["return"] = PL$21/*parType*/;;
PL$170/*checkReady*/();;
;
}));;
};
;
PL$173/*resolveTypeFun*/ = (function(PL$174/*parI*/){
;
return (function(PL$21/*parType*/){
;
PL$77/*cDef*/["arguments"][PL$174/*parI*/] = PL$21/*parType*/;;
PL$170/*checkReady*/();;
;
});;
;
});
PL$27/*i*/ = 0;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$77/*cDef*/["arguments"]["length"]);++PL$27/*i*/){{if(PL$32/*self*/["isProvisional"](PL$77/*cDef*/["arguments"][PL$27/*i*/])){
PL$172/*isReady*/ = false;;
PL$32/*self*/["definitionPromise"](PL$77/*cDef*/["arguments"][PL$27/*i*/])["then"](PL$173/*resolveTypeFun*/(PL$27/*i*/));;
};
;
}};
;
PL$55/*cf*/ = PL$56/*classHider*/(PL$77/*cDef*/);
if(! PL$172/*isReady*/){
PL$77/*cDef*/["readyPromise"] = new PL$78/*Promise*/();;
PL$170/*checkReady*/ = (function(){
var PL$27/*i*/;
;
if(PL$32/*self*/["isProvisional"](PL$77/*cDef*/["return"])){
return;;
};
;
PL$27/*i*/ = 0;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$77/*cDef*/["arguments"]["length"]);++PL$27/*i*/){{if(PL$32/*self*/["isProvisional"](PL$77/*cDef*/["arguments"][PL$27/*i*/])){
return;;
};
;
}};
;
PL$171/*makeTemporaries*/();;
PL$77/*cDef*/["isReady"] = true;;
PL$77/*cDef*/["readyPromise"]["resolve"](PL$55/*cf*/);;
;
});;
PL$170/*checkReady*/();;

}else{
PL$170/*checkReady*/();;
PL$77/*cDef*/["isReady"] = true;;
};
;
return PL$55/*cf*/;;
;
}),
"isVar": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return PL$77/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if(PL$77/*cDef*/["arguments"]){
return PL$77/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(PL$21/*parType*/, PL$175/*parIndex*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
if((PL$77/*cDef*/["arguments"] && PL$77/*cDef*/["arguments"][PL$175/*parIndex*/])){
return PL$77/*cDef*/["arguments"][PL$175/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(PL$21/*parType*/, PL$175/*parIndex*/){
var PL$77/*cDef*/;
var PL$35/*t*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
PL$35/*t*/;
if(PL$77/*cDef*/["constructorArguments"]){
PL$35/*t*/ = PL$77/*cDef*/["constructorArguments"][PL$175/*parIndex*/];;
};
;
if(PL$35/*t*/){
return PL$35/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(PL$21/*parType*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
return PL$77/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(PL$176/*parName*/){
;
return PL$58/*builtinTypes*/[PL$176/*parName*/];;
;
}),
"getGetPropertyCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
if(PL$77/*cDef*/["isVar"]){
return PL$177/*assembleCode*/([PL$115/*MAKRO_SELF*/, "[", PL$116/*MAKRO_PROPERTYVALUE*/, "]"], PL$169/*par*/);;
};
;
PL$88/*map*/ = PL$77/*cDef*/["map"];
if(PL$169/*par*/["property"]){
if(PL$88/*map*/["members"][PL$169/*par*/["property"]]){
return PL$177/*assembleCode*/(PL$88/*map*/["members"][PL$169/*par*/["property"]]["getCode"], PL$169/*par*/);;
};
;
};
;
if(PL$88/*map*/["getMemberCode"]){
return PL$177/*assembleCode*/(PL$88/*map*/["getMemberCode"], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["accessNotAllowd"], PL$169/*par*/);;
;
}),
"getPropertyAlias": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
if(PL$77/*cDef*/["isVar"]){
return PL$169/*par*/["property"];;
};
;
PL$88/*map*/ = PL$77/*cDef*/["map"];
if(((PL$88/*map*/ && PL$88/*map*/["members"]) && PL$88/*map*/["members"][PL$169/*par*/["property"]])){
return PL$88/*map*/["members"][PL$169/*par*/["property"]]["index"];;
};
;
return PL$169/*par*/["property"];;
;
}),
"getPropertyType": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
if(PL$77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
PL$88/*map*/ = PL$77/*cDef*/["map"];
if(PL$88/*map*/["members"][PL$169/*par*/["property"]]){
if(PL$169/*par*/["original"]){
return (PL$88/*map*/["members"][PL$169/*par*/["property"]]["originalType"] || PL$88/*map*/["members"][PL$169/*par*/["property"]]["type"]);;

}else{
return PL$88/*map*/["members"][PL$169/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(PL$169/*par*/){
var PL$77/*cDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
if(PL$77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(PL$77/*cDef*/["constructorType"]){
return PL$77/*cDef*/["constructorType"];;
};
;
throw PL$25/*errorMsg*/["noConstructorAvailable"];
;
}),
"getSetPropertyCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
var PL$178/*propertyType*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
if(PL$77/*cDef*/["isVar"]){
if(! this["canSet"](this["getBuiltinType"]("var"), PL$169/*par*/["valueType"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/([PL$115/*MAKRO_SELF*/, "[", PL$116/*MAKRO_PROPERTYVALUE*/, "] ", PL$117/*MAKRO_OPERATOR*/, " ", PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
PL$88/*map*/ = PL$77/*cDef*/["map"];
if((PL$88/*map*/ && PL$169/*par*/["property"])){
if(PL$88/*map*/["members"][PL$169/*par*/["property"]]){
PL$178/*propertyType*/ = this["getPropertyType"]({"type": PL$169/*par*/["type"],
"property": PL$169/*par*/["property"]});
if(! this["canSet"](PL$178/*propertyType*/, PL$169/*par*/["valueType"])){
if(this["canSet"](PL$178/*propertyType*/, this["getClassFromTemporaryTracked"](PL$169/*par*/["valueType"]))){
return PL$177/*assembleCode*/(PL$88/*map*/["members"][PL$169/*par*/["property"]]["setCodeFromTemporary"], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/(PL$88/*map*/["members"][PL$169/*par*/["property"]]["setCode"], PL$169/*par*/);;
};
;
};
;
if((PL$88/*map*/ && PL$88/*map*/["setMemberCode"])){
if(! this["canSet"](this["getBuiltinType"]("var"), PL$169/*par*/["valueType"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/(PL$88/*map*/["setMemberCode"], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["accessNotAllowd"], PL$169/*par*/);;
;
}),
"getConnectCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
var PL$179/*valuePropertyType*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$88/*map*/ = PL$77/*cDef*/["map"];
if(PL$169/*par*/["valueProperty"]){
PL$179/*valuePropertyType*/ = this["getPropertyType"]({"type": PL$169/*par*/["valueType"],
"property": PL$169/*par*/["valueProperty"]});
if(! this["canConnect"](PL$169/*par*/["type"], PL$169/*par*/["property"], PL$179/*valuePropertyType*/)){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["connectNotPossible"], PL$169/*par*/);;
};
;
PL$169/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": PL$169/*par*/["valueType"],
"property": PL$169/*par*/["valueProperty"]}));;
return PL$177/*assembleCode*/(PL$88/*map*/["members"][PL$169/*par*/["property"]]["connectSlotCode"], PL$169/*par*/);;

}else{
if(! this["canConnect"](PL$169/*par*/["type"], PL$169/*par*/["property"], PL$169/*par*/["valueType"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["connectNotPossible"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/(PL$88/*map*/["members"][PL$169/*par*/["property"]]["connectFunCode"], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["connectNotPossible"], PL$169/*par*/);;
;
}),
"getPassAsTypeCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$180/*vcDef*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$180/*vcDef*/ = PL$54/*getClass*/(PL$169/*par*/["valueType"]);
if(PL$169/*par*/["value"]){
if(! this["canSet"](PL$169/*par*/["type"], PL$169/*par*/["valueType"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
if(this["isTemporaryTrackedClass"](PL$169/*par*/["type"])){
return this["getCreateTemporaryClassCode"](PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/([PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["missingVariable"], PL$169/*par*/);;
;
}),
"getCreateTemporaryClassCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$181/*codeAr*/;
;
if(this["isTemporaryTrackedClass"](PL$169/*par*/["valueType"])){
return PL$177/*assembleCode*/([PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
if(! this["isTrackedClass"](PL$169/*par*/["valueType"])){
return PL$177/*assembleCode*/([PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["valueType"]);
PL$181/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + PL$77/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), PL$118/*MAKRO_VALUE*/, ")"];
return PL$177/*assembleCode*/(PL$181/*codeAr*/, PL$169/*par*/);;
;
}),
"getTrack": (function(PL$22/*parInstance*/){
var PL$79/*type*/;
var PL$77/*cDef*/;
;
if(! PL$22/*parInstance*/){
return;;
};
;
PL$79/*type*/ = PL$22/*parInstance*/[0];
PL$77/*cDef*/ = PL$54/*getClass*/(PL$79/*type*/);
return PL$22/*parInstance*/[PL$77/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"getDestroyTemporaryClassCode": (function(PL$169/*par*/){
var PL$181/*codeAr*/;
;
if(! this["isTemporaryTrackedClass"](PL$169/*par*/["valueType"])){
if(PL$169/*par*/["noValueRequired"]){
return PL$177/*assembleCode*/([], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/([PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
PL$181/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", PL$118/*MAKRO_VALUE*/, ")"];
return PL$177/*assembleCode*/(PL$181/*codeAr*/, PL$169/*par*/);;
;
}),
"dereferencePromisePreCode": (function(PL$169/*par*/){
var PL$181/*codeAr*/;
;
PL$181/*codeAr*/ = [PL$118/*MAKRO_VALUE*/, ".then("];
if(this["isTemporaryTrackedClass"](PL$169/*par*/["valueType"])){
PL$181/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];;
};
;
return PL$177/*assembleCode*/(PL$181/*codeAr*/, PL$169/*par*/);;
;
}),
"dereferencePromisePostCode": (function(PL$169/*par*/){
var PL$181/*codeAr*/;
;
PL$181/*codeAr*/ = [");\n"];
if(this["isTemporaryTrackedClass"](PL$169/*par*/["valueType"])){
PL$181/*codeAr*/ = [");\nreturn r;\n})(", PL$118/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];;
};
;
return PL$177/*assembleCode*/(PL$181/*codeAr*/, PL$169/*par*/);;
;
}),
"promisingReturnTypeCheck": (function(PL$169/*par*/){
;
if(! this["isPromiseOfClass"](PL$169/*par*/["type"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["notAPromise"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/([], PL$169/*par*/);;
;
}),
"getSetVariableCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$180/*vcDef*/;
var PL$182/*operator*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$180/*vcDef*/ = PL$54/*getClass*/(PL$169/*par*/["valueType"]);
if(PL$169/*par*/["instance"]){
PL$182/*operator*/ = (PL$169/*par*/["operator"] || "=");
if((PL$182/*operator*/ != "=")){
if(! (PL$77/*cDef*/["isVar"] && PL$180/*vcDef*/["isVar"])){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["operatorMissmatch"], PL$169/*par*/);;
};
;
};
;
if(! this["canSet"](PL$169/*par*/["type"], PL$169/*par*/["valueType"])){
if(this["canSet"](PL$169/*par*/["type"], this["getClassFromTemporaryTracked"](PL$169/*par*/["valueType"]))){
if((PL$169/*par*/["assignmentType"] == "Identifier")){
return PL$177/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", PL$115/*MAKRO_SELF*/, "){ _T", PL$115/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", PL$115/*MAKRO_SELF*/, " ", PL$182/*operator*/, " v;\n", "_T", PL$115/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", PL$115/*MAKRO_SELF*/, " ", PL$182/*operator*/, " undefined; ", "_T", PL$115/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", PL$118/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], PL$169/*par*/);;
};
;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
if(this["isTrackedClass"](PL$169/*par*/["type"])){
if((PL$169/*par*/["assignmentType"] == "Identifier")){
return PL$177/*assembleCode*/(["/*tracked assign*/(function(v){\n", "if (_T", PL$115/*MAKRO_SELF*/, "){ _T", PL$115/*MAKRO_SELF*/, "(); };\n", PL$115/*MAKRO_SELF*/, " ", PL$182/*operator*/, " v;\n", "if (v){\n", "_T", PL$115/*MAKRO_SELF*/, ((" = v[" + PL$180/*vcDef*/["map"]["trackRootIdx"]) + "]();\n"), "}else{\n", "_T", PL$115/*MAKRO_SELF*/, " = undefined;\n", "};\n", "return v;\n", "})", "(", PL$118/*MAKRO_VALUE*/, ")/*end assign*/\n"], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["typeMissmatch"], PL$169/*par*/);;
};
;
return PL$177/*assembleCode*/([PL$115/*MAKRO_SELF*/, " ", PL$182/*operator*/, " ", PL$118/*MAKRO_VALUE*/], PL$169/*par*/);;
};
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["missingVariable"], PL$169/*par*/);;
;
}),
"declareReturnPromiseCode": (function(PL$169/*par*/){
var PL$183/*retType*/;
var PL$26/*track*/;
var PL$184/*assemblyAr*/;
;
PL$183/*retType*/ = PL$169/*par*/["type"];
PL$26/*track*/ = false;
if(this["isTemporaryTrackedClass"](PL$183/*retType*/)){
PL$26/*track*/ = true;;
PL$183/*retType*/ = this["getClassFromTemporaryTracked"](PL$183/*retType*/);;
};
;
if(this["isTrackedClass"](PL$183/*retType*/)){
PL$26/*track*/ = true;;
};
;
PL$184/*assemblyAr*/;
if(PL$26/*track*/){
PL$184/*assemblyAr*/ = ["var ", PL$169/*par*/["name"], ";\nvar _T", PL$169/*par*/["name"], ";\n(function(){ var vAr = new ", PL$185/*MAKRO_CONSTRUCTOR*/, "(); ", PL$169/*par*/["name"], " = vAr[0]; _T", PL$169/*par*/["name"], " = vAr[1]; })();"];;

}else{
PL$184/*assemblyAr*/ = ["var ", PL$169/*par*/["name"], " = new __Promise();\n"];;
};
;
return PL$177/*assembleCode*/(PL$184/*assemblyAr*/, PL$169/*par*/);;
;
}),
"returnReturnPromiseCode": (function(PL$169/*par*/){
var PL$183/*retType*/;
var PL$26/*track*/;
var PL$184/*assemblyAr*/;
;
PL$183/*retType*/ = PL$169/*par*/["type"];
PL$26/*track*/ = false;
if(this["isTemporaryTrackedClass"](PL$183/*retType*/)){
PL$26/*track*/ = true;;
PL$183/*retType*/ = this["getClassFromTemporaryTracked"](PL$183/*retType*/);;
};
;
if(this["isTrackedClass"](PL$183/*retType*/)){
PL$26/*track*/ = true;;
};
;
PL$184/*assemblyAr*/;
if(PL$26/*track*/){
PL$184/*assemblyAr*/ = ["return [", PL$169/*par*/["name"], ", _T", PL$169/*par*/["name"], "];\n"];;

}else{
PL$184/*assemblyAr*/ = ["return ", PL$169/*par*/["name"], ";\n"];;
};
;
return PL$177/*assembleCode*/(PL$184/*assemblyAr*/, PL$169/*par*/);;
;
}),
"getDeclareVariableCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$184/*assemblyAr*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$184/*assemblyAr*/ = ["var ", PL$169/*par*/["name"], ";\n"];
if(PL$77/*cDef*/["track"]){
PL$184/*assemblyAr*/["push"]("var _T");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"](";\n");;
};
;
return PL$177/*assembleCode*/(PL$184/*assemblyAr*/, PL$169/*par*/);;
;
}),
"getProcessParameterCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$184/*assemblyAr*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$184/*assemblyAr*/ = [];
if(PL$77/*cDef*/["track"]){
PL$184/*assemblyAr*/["push"]("var _T");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"](";\n");;
PL$184/*assemblyAr*/["push"]("if(");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"]("){ _T");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"](" = ");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"]("[1];\n");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"](" = ");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"]("[0];}\n");;
};
;
return PL$177/*assembleCode*/(PL$184/*assemblyAr*/, PL$169/*par*/);;
;
}),
"getDestroyVariableCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$184/*assemblyAr*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$184/*assemblyAr*/ = [];
if(PL$77/*cDef*/["track"]){
PL$184/*assemblyAr*/["push"]("if (_T");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"]("){ _T");;
PL$184/*assemblyAr*/["push"](PL$169/*par*/["name"]);;
PL$184/*assemblyAr*/["push"]("();};");;
};
;
return PL$177/*assembleCode*/(PL$184/*assemblyAr*/, PL$169/*par*/);;
;
}),
"getCallCode": (function(PL$169/*par*/){
var PL$77/*cDef*/;
var PL$27/*i*/;
var PL$47/*l*/;
var PL$186/*args*/;
var PL$187/*assembly*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$169/*par*/["type"]);
PL$27/*i*/;
PL$47/*l*/;
PL$186/*args*/;
PL$187/*assembly*/;
if(PL$77/*cDef*/["isVar"]){
PL$186/*args*/ = PL$169/*par*/["arguments"];;
PL$47/*l*/ = PL$186/*args*/["length"];;
PL$187/*assembly*/ = [PL$115/*MAKRO_SELF*/, "("];;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{if((PL$27/*i*/ > 0)){
PL$187/*assembly*/["push"](", ");;
};
;
PL$187/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": PL$186/*args*/[PL$27/*i*/]["value"],
"valueType": PL$186/*args*/[PL$27/*i*/]["type"]});;
}};
;
PL$187/*assembly*/["push"](")");;
return PL$177/*assembleCode*/(PL$187/*assembly*/, PL$169/*par*/);;
};
;
if(! PL$77/*cDef*/["isFunction"]){
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["expectedCallable"], PL$169/*par*/);;
};
;
PL$186/*args*/ = PL$169/*par*/["arguments"];;
PL$47/*l*/ = PL$186/*args*/["length"];;
PL$187/*assembly*/ = [PL$115/*MAKRO_SELF*/, "("];;
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{if((PL$27/*i*/ > 0)){
PL$187/*assembly*/["push"](", ");;
};
;
PL$187/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (PL$77/*cDef*/["arguments"][PL$27/*i*/] || this["getBuiltinType"]("var")),
"value": PL$186/*args*/[PL$27/*i*/]["value"],
"valueType": PL$186/*args*/[PL$27/*i*/]["type"]});;
}};
;
PL$187/*assembly*/["push"](")");;
return PL$177/*assembleCode*/(PL$187/*assembly*/, PL$169/*par*/);;
;
}),
"getBinaryExpressionCode": (function(PL$169/*par*/){
var PL$188/*lcDef*/;
var PL$189/*rcDef*/;
;
PL$188/*lcDef*/ = PL$54/*getClass*/(PL$169/*par*/["leftType"]);
PL$189/*rcDef*/ = PL$54/*getClass*/(PL$169/*par*/["rightType"]);
if((PL$188/*lcDef*/["isVar"] && PL$189/*rcDef*/["isVar"])){
return PL$177/*assembleCode*/(["(", PL$190/*MAKRO_LEFT*/, " ", PL$117/*MAKRO_OPERATOR*/, " ", PL$191/*MAKRO_RIGHT*/, ")"], PL$169/*par*/);;
};
;
switch (PL$169/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":
return PL$177/*assembleCode*/(["(", PL$190/*MAKRO_LEFT*/, " ", PL$117/*MAKRO_OPERATOR*/, " ", PL$191/*MAKRO_RIGHT*/, ")"], PL$169/*par*/);;
}
;
;
return PL$136/*runtimeError*/(PL$25/*errorMsg*/["operatorMissmatch"], PL$169/*par*/);;
;
}),
"canSet": (function(PL$192/*parTargetType*/, PL$193/*parSourceType*/){
var PL$194/*allOk*/;
var PL$27/*i*/;
var PL$47/*l*/;
var PL$195/*tp*/;
var PL$196/*sp*/;
;
if(((PL$192/*parTargetType*/ === undefined) && (PL$193/*parSourceType*/ === undefined))){
return true;;
};
;
if(((PL$192/*parTargetType*/ === undefined) || (PL$193/*parSourceType*/ === undefined))){
return false;;
};
;
if((PL$192/*parTargetType*/ === PL$193/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](PL$193/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](PL$192/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$192/*parTargetType*/), this["getClassFromTemporaryTracked"](PL$193/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](PL$192/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](PL$192/*parTargetType*/), PL$193/*parSourceType*/);;
};
;
if((((PL$192/*parTargetType*/["isFunction"] && PL$193/*parSourceType*/["isFunction"]) && this["canSet"](PL$192/*parTargetType*/["returnType"], PL$193/*parSourceType*/["returnType"])) && (PL$192/*parTargetType*/["parameters"]["length"] == PL$193/*parSourceType*/["parameters"]["length"]))){
PL$194/*allOk*/ = true;
PL$27/*i*/ = 0;
PL$47/*l*/ = PL$192/*parTargetType*/["parameters"]["length"];
for(PL$27/*i*/;(PL$27/*i*/ < PL$47/*l*/);++PL$27/*i*/){{PL$195/*tp*/ = PL$192/*parTargetType*/["parameters"][PL$27/*i*/];
PL$196/*sp*/ = PL$193/*parSourceType*/["parameters"][PL$27/*i*/];
if(! this["canSet"](PL$196/*sp*/, PL$195/*tp*/)){
PL$194/*allOk*/ = false;;
};
;
}};
;
if(PL$194/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(PL$21/*parType*/, PL$197/*parProperty*/, PL$198/*parFunType*/){
var PL$77/*cDef*/;
var PL$88/*map*/;
var PL$131/*mDef*/;
var PL$178/*propertyType*/;
;
PL$77/*cDef*/ = PL$54/*getClass*/(PL$21/*parType*/);
PL$88/*map*/ = PL$77/*cDef*/["map"];
if(PL$88/*map*/["members"][PL$197/*parProperty*/]){
PL$131/*mDef*/ = PL$88/*map*/["members"][PL$197/*parProperty*/];
PL$178/*propertyType*/ = this["getPropertyType"]({"type": PL$21/*parType*/,
"property": PL$197/*parProperty*/});
if(! this["canSet"](PL$178/*propertyType*/, PL$198/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](PL$178/*propertyType*/) || this["isFunctionType"](PL$178/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](PL$198/*parFunType*/) || this["isFunctionType"](PL$198/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
PL$136/*runtimeError*/ = (function(PL$169/*par*/, PL$51/*par2*/){
;
if((PL$51/*par2*/ && PL$51/*par2*/["errorFun"])){
PL$51/*par2*/["errorFun"](PL$169/*par*/);;
};
;
return (((("(function(){ throw { id:" + PL$169/*par*/["id"]) + ", msg: ") + PL$199/*stringEncodeStr*/(PL$169/*par*/["msg"])) + " } })()");;
;
});
PL$200/*_stringEncodeStr*/ = (function(PL$169/*par*/){
var PL$201/*s*/;
;
PL$201/*s*/ = PL$169/*par*/["replace"](new PL$202/*RegExp*/("\\\\", "g"), "\\\\");
PL$201/*s*/ = PL$201/*s*/["replace"](new PL$202/*RegExp*/("\\n", "g"), "\\n");;
PL$201/*s*/ = PL$201/*s*/["replace"](new PL$202/*RegExp*/("\\r", "g"), "\\r");;
PL$201/*s*/ = PL$201/*s*/["replace"](new PL$202/*RegExp*/("\\\"", "g"), "\\\"");;
PL$201/*s*/ = PL$201/*s*/["replace"](new PL$202/*RegExp*/("\\u2028", "g"), "\\u2028");;
PL$201/*s*/ = PL$201/*s*/["replace"](new PL$202/*RegExp*/("\\u2029", "g"), "\\u2029");;
return PL$201/*s*/;;
;
});
PL$199/*stringEncodeStr*/ = (function(PL$169/*par*/){
;
return (("\"" + PL$200/*_stringEncodeStr*/(PL$169/*par*/)) + "\"");;
;
});
PL$177/*assembleCode*/ = (function(PL$203/*ar*/, PL$169/*par*/){
var PL$159/*res*/;
var PL$204/*resStr*/;
var PL$27/*i*/;
var PL$91/*r*/;
var PL$206/*tempPar*/;
var PL$207/*tempRes*/;
;
PL$159/*res*/ = PL$169/*par*/["result"];
PL$204/*resStr*/ = "";
if(! PL$159/*res*/){
PL$159/*res*/ = {"push": (function(PL$205/*parStr*/){
;
PL$204/*resStr*/ += PL$205/*parStr*/;;
;
})};;
};
;
PL$27/*i*/ = 0;
PL$91/*r*/ = "";
for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$203/*ar*/["length"]);++PL$27/*i*/){{if((typeof PL$203/*ar*/[PL$27/*i*/] == "string")){
PL$159/*res*/["push"](PL$203/*ar*/[PL$27/*i*/]);;

}else{
if(PL$203/*ar*/[PL$27/*i*/]["_internFun"]){
PL$206/*tempPar*/ = PL$203/*ar*/[PL$27/*i*/];
PL$206/*tempPar*/["result"] = PL$169/*par*/["result"];;
PL$206/*tempPar*/["errorFun"] = PL$169/*par*/["errorFun"];;
PL$207/*tempRes*/ = PL$23/*classSystem*/[PL$203/*ar*/[PL$27/*i*/]["_internFun"]](PL$206/*tempPar*/);
if(! PL$169/*par*/["result"]){
PL$159/*res*/["push"](PL$207/*tempRes*/);;
};
;

}else{
switch (PL$203/*ar*/[PL$27/*i*/]){
case PL$115/*MAKRO_SELF*/:
PL$159/*res*/["push"](PL$169/*par*/["instance"]);;
break;;
case PL$208/*MAKRO_PROPERTY*/:
PL$159/*res*/["push"](PL$169/*par*/["property"]);;
break;;
case PL$209/*MAKRO_PROPERTYSTRING*/:
PL$159/*res*/["push"](PL$199/*stringEncodeStr*/(PL$169/*par*/["property"]));;
break;;
case PL$116/*MAKRO_PROPERTYVALUE*/:
if(PL$169/*par*/["propertyValue"]){
PL$159/*res*/["push"](PL$169/*par*/["propertyValue"]);;

}else{
PL$159/*res*/["push"](PL$199/*stringEncodeStr*/(PL$169/*par*/["property"]));;
};
;
break;;
case PL$118/*MAKRO_VALUE*/:
PL$159/*res*/["push"](PL$169/*par*/["value"]);;
break;;
case PL$137/*MAKRO_VALUEPROPERTY*/:
PL$159/*res*/["push"](PL$169/*par*/["valueProperty"]);;
break;;
case PL$190/*MAKRO_LEFT*/:
PL$159/*res*/["push"](PL$169/*par*/["left"]);;
break;;
case PL$191/*MAKRO_RIGHT*/:
PL$159/*res*/["push"](PL$169/*par*/["right"]);;
break;;
case PL$117/*MAKRO_OPERATOR*/:
PL$159/*res*/["push"](PL$169/*par*/["operator"]);;
break;;
case PL$210/*MAKRO_RESOLVEFUN*/:
PL$159/*res*/["push"]((PL$169/*par*/["resolveFun"] || "undefined"));;
break;;
case PL$211/*MAKRO_REJECTFUN*/:
PL$159/*res*/["push"]((PL$169/*par*/["rejectFun"] || "undefined"));;
break;;
case PL$212/*MAKRO_TYPEVALUE*/:
PL$159/*res*/["push"](PL$169/*par*/["typeValue"]);;
break;;
case PL$185/*MAKRO_CONSTRUCTOR*/:
PL$159/*res*/["push"](PL$169/*par*/["constructorName"]);;
break;;
}
;
;
};
};
;
}};
;
if(PL$169/*par*/["result"]){
return PL$159/*res*/;;
};
;
return PL$204/*resStr*/;;
;
});
PL$115/*MAKRO_SELF*/ = 0;
PL$208/*MAKRO_PROPERTY*/ = 1;
PL$209/*MAKRO_PROPERTYSTRING*/ = 2;
PL$116/*MAKRO_PROPERTYVALUE*/ = 3;
PL$118/*MAKRO_VALUE*/ = 4;
PL$190/*MAKRO_LEFT*/ = 5;
PL$117/*MAKRO_OPERATOR*/ = 6;
PL$191/*MAKRO_RIGHT*/ = 7;
PL$137/*MAKRO_VALUEPROPERTY*/ = 8;
PL$210/*MAKRO_RESOLVEFUN*/ = 9;
PL$211/*MAKRO_REJECTFUN*/ = 10;
PL$212/*MAKRO_TYPEVALUE*/ = 11;
PL$185/*MAKRO_CONSTRUCTOR*/ = 12;
PL$25/*errorMsg*/ = {"accessNotAllowd": {"id": 200,
"msg": "access to member not allowed"},
"typeMissmatch": {"id": 201,
"msg": "type missmatch"},
"missingVariable": {"id": 202,
"msg": "variable missing"},
"operatorMissmatch": {"id": 203,
"msg": "operator missmatch"},
"expectedCallable": {"id": 204,
"msg": "expected callable expression"},
"noConstructorAvailable": {"id": 205,
"msg": "no Constructor available"},
"connectNotPossible": {"id": 206,
"msg": "connect not possible"},
"trackedProvisionalNotImplemented": {"id": 207,
"msg": "tracked provisional type feature is not implemented"},
"onlyTrackedClassesCanContainTrackedMembers": {"id": 208,
"msg": "only tracked classes can contain tracked members"},
"notAPromise": {"id": 209,
"msg": "type is not a promise"},
"notASyncableResponse": {"id": 210,
"msg": "not a syncable response"},
"notSyncable": {"id": 211,
"msg": "not syncable"},
"unknownInstanceType": {"id": 212,
"msg": "unknown instance type"}};
PL$213/*promiseland*/["classSystem"] = PL$23/*classSystem*/;;
PL$3/*extra*/["classSystemPs"]["resolve"]({"classSystem": PL$23/*classSystem*/,
"internalObjects": PL$61/*internalObjects*/,
"getClassBySyncId": PL$75/*getClassBySyncId*/,
"DynInstance": PL$29/*DynInstance*/});;
return PL$23/*classSystem*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();