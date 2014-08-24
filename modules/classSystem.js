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
  
defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "0247aba705ea3d1c8a8a197eb7744c66" })){ return promiseland._getModule("0247aba705ea3d1c8a8a197eb7744c66"); };
var _V7/*extra*/;try{_V7/*extra*/ = extra;}catch(e){};
var _V34/*undefined*/;try{_V34/*undefined*/ = undefined;}catch(e){};
var _V78/*Promise*/;try{_V78/*Promise*/ = Promise;}catch(e){};
var _V202/*RegExp*/;try{_V202/*RegExp*/ = RegExp;}catch(e){};
var _V213/*promiseland*/;try{_V213/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*getModuleData*/;
var _V9/*Tracker*/;
var _V14/*Chainable*/;
var _V28/*DynInstance*/;
var _V29/*TrackedPromise*/;
var _V52/*_ClassToken*/;
var _V53/*_actClass*/;
var _V54/*getClass*/;
var _V56/*classHider*/;
var _V58/*builtinTypes*/;
var _V59/*nextInternalId*/;
var _V60/*getNewInternalId*/;
var _V61/*internalObjects*/;
var _V62/*syncFun*/;
var _V68/*destroySynced*/;
var _V71/*registerSyncClass*/;
var _V75/*getClassBySyncId*/;
var _V22/*classSystem*/;
var _V136/*runtimeError*/;
var _V200/*_stringEncodeStr*/;
var _V199/*stringEncodeStr*/;
var _V177/*assembleCode*/;
var _V115/*MAKRO_SELF*/;
var _V208/*MAKRO_PROPERTY*/;
var _V209/*MAKRO_PROPERTYSTRING*/;
var _V116/*MAKRO_PROPERTYVALUE*/;
var _V118/*MAKRO_VALUE*/;
var _V190/*MAKRO_LEFT*/;
var _V117/*MAKRO_OPERATOR*/;
var _V191/*MAKRO_RIGHT*/;
var _V137/*MAKRO_VALUEPROPERTY*/;
var _V210/*MAKRO_RESOLVEFUN*/;
var _V211/*MAKRO_REJECTFUN*/;
var _V212/*MAKRO_TYPEVALUE*/;
var _V185/*MAKRO_CONSTRUCTOR*/;
var _V24/*errorMsg*/;
;
;
_V2/*getModuleData*/;
(function(){
var _V3 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V6 = function(e){ _V3.reject(e); };
_V5(function(){;
_V7/*extra*/["moduleSystemPs"].then(_V5(function(_V8){_V2/*getModuleData*/ = _V8["getModuleData"];;
_V3.resolve(); return;;
}), _V6);
;})();
return _V3;
})();;
_V9/*Tracker*/;
(function(){
var _V10 = new __Promise();
var _V11 = function(code){ return function(res){ try{code(res);}catch(e){ _V10.reject(e); }; }; };
var _V12 = function(e){ _V10.reject(e); };
_V11(function(){;
_V7/*extra*/["TrackerPs"].then(_V11(function(_V13){_V9/*Tracker*/ = _V13["Tracker"];;
_V10.resolve(); return;;
}), _V12);
;})();
return _V10;
})();;
_V14/*Chainable*/;
(function(){
var _V15 = new __Promise();
var _V16 = function(code){ return function(res){ try{code(res);}catch(e){ _V15.reject(e); }; }; };
var _V17 = function(e){ _V15.reject(e); };
_V16(function(){;
_V7/*extra*/["ChainablePs"].then(_V16(function(_V18){_V14/*Chainable*/ = _V18["Chainable"];;
_V15.resolve(); return;;
}), _V17);
;})();
return _V15;
})();;
_V28/*DynInstance*/ = (function(){var _V19/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V20/*parType*/, _V21/*parInstance*/){
var _V23/*passedType*/;
;
this["extraTracks"] = [];;
if(! _V20/*parType*/){
_V20/*parType*/ = _V22/*classSystem*/["getTypeFromInstance"](_V21/*parInstance*/);;
};
;
this["track"] = (function(){
;
;
});;
if(_V22/*classSystem*/["isVar"](_V20/*parType*/)){
this["instance"] = _V21/*parInstance*/;;
this["type"] = _V20/*parType*/;;
return;;
};
;
_V23/*passedType*/ = _V22/*classSystem*/["getTypeFromInstance"](_V21/*parInstance*/);
if(_V22/*classSystem*/["isTemporaryTrackedClass"](_V23/*passedType*/)){
this["instance"] = _V21/*parInstance*/[0];;
this["track"] = _V21/*parInstance*/[1];;
this["_isTrack"] = true;;
this["type"] = _V22/*classSystem*/["getClassFromTemporaryTracked"](_V23/*passedType*/);;

}else{
if(_V22/*classSystem*/["isTrackedClass"](_V23/*passedType*/)){
this["instance"] = _V21/*parInstance*/;;
this["track"] = _V22/*classSystem*/["getTrack"](_V21/*parInstance*/);;
;
this["_isTrack"] = true;;
this["type"] = _V23/*passedType*/;;

}else{
this["instance"] = _V21/*parInstance*/;;
this["track"] = (function(){
;
;
});;
this["type"] = _V23/*passedType*/;;
};
};
;
;
}),
"getInternalId": (function(){
;
return _V22/*classSystem*/["getInternalId"](this["instance"]);;
;
}),
"getTrack": (function(){
;
if(this["_isTrack"]){
return _V22/*classSystem*/["getTrack"](this["instance"]);;
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
return _V22/*classSystem*/["isServe"](this["type"]);;
;
}),
"getInstanceAsType": (function(_V20/*parType*/){
var _V25/*track*/;
;
if(! _V22/*classSystem*/["canSet"](_V20/*parType*/, this["type"])){
throw _V24/*errorMsg*/["typeMissmatch"];
};
;
if(_V22/*classSystem*/["isTemporaryTrackedClass"](_V20/*parType*/)){
_V25/*track*/ = this["getTrack"]();
this["extraTracks"]["push"](_V25/*track*/);;
return [this["instance"], _V25/*track*/];;
};
;
return this["instance"];;
;
}),
"clearExtraTracks": (function(){
var _V26/*i*/;
;
_V26/*i*/ = 0;
for(_V26/*i*/ = 0;(_V26/*i*/ < this["extraTracks"]["length"]);++_V26/*i*/){{try
{this["extraTracks"][_V26/*i*/]();;
}catch(_V27/*e*/){};
;
}};
;
;
})}, [], _V19/*inherited*/);
return res; })();_V28/*DynInstance*/;;
_V29/*TrackedPromise*/ = (function(_V30/*parTrackFun*/){
var _V31/*self*/;
var _V32/*lifeLine*/;
var _V33/*destroyFun*/;
var _V35/*t*/;
var _V36/*tracker*/;
var _V37/*rootTrack*/;
var _V38/*thenAr*/;
var _V39/*elseAr*/;
var _V40/*thenFun*/;
var _V43/*thenReuseFun*/;
;
_V31/*self*/ = this;
_V32/*lifeLine*/;
_V33/*destroyFun*/ = (function(){
;
if(_V32/*lifeLine*/){
_V32/*lifeLine*/();;
_V32/*lifeLine*/ = _V34/*undefined*/;;

}else{
_V31/*self*/["then"]((function(){
;
if(_V32/*lifeLine*/){
_V32/*lifeLine*/();;
_V32/*lifeLine*/ = _V34/*undefined*/;;
};
;
;
}));;
};
;
;
});
_V35/*t*/ = _V9/*Tracker*/(_V33/*destroyFun*/);
_V36/*tracker*/ = _V35/*t*/[0];
this["rootTrack"] = _V35/*t*/[1];;
this["memberTrack"] = _V35/*t*/[2];;
_V37/*rootTrack*/ = this["rootTrack"];
_V38/*thenAr*/ = [];
_V39/*elseAr*/ = [];
_V40/*thenFun*/ = (function(_V41/*parThenFun*/, _V42/*parElseFun*/){
;
if(_V41/*parThenFun*/){
_V38/*thenAr*/["push"]([_V41/*parThenFun*/, _V37/*rootTrack*/()]);;
};
;
if(_V42/*parElseFun*/){
_V39/*elseAr*/["push"](_V42/*parElseFun*/);;
};
;
;
});
_V43/*thenReuseFun*/ = (function(_V44/*parReuse*/, _V41/*parThenFun*/, _V42/*parElseFun*/){
;
if(_V41/*parThenFun*/){
_V38/*thenAr*/["push"]([_V41/*parThenFun*/, _V44/*parReuse*/]);;

}else{
_V44/*parReuse*/();;
};
;
if(_V42/*parElseFun*/){
_V39/*elseAr*/["push"](_V42/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(_V45/*value*/){
var _V46/*realValue*/;
var _V26/*i*/;
var _V47/*l*/;
var _V48/*entryAr*/;
;
if(_V45/*value*/){
_V46/*realValue*/ = _V45/*value*/[0];
_V32/*lifeLine*/ = _V30/*parTrackFun*/(_V45/*value*/, _V36/*tracker*/);;
_V45/*value*/ = _V46/*realValue*/;;
};
;
_V40/*thenFun*/ = (function(_V41/*parThenFun*/){
;
if(_V41/*parThenFun*/){
try
{_V41/*parThenFun*/([_V45/*value*/, _V37/*rootTrack*/()]);;
}catch(_V27/*e*/){};
;
};
;
;
});;
_V43/*thenReuseFun*/ = (function(_V44/*parReuse*/, _V41/*parThenFun*/){
;
if(_V41/*parThenFun*/){
try
{_V41/*parThenFun*/([_V45/*value*/, _V44/*parReuse*/]);;
}catch(_V27/*e*/){};
;

}else{
_V44/*parReuse*/();;
};
;
;
});;
if(! _V38/*thenAr*/){
return;;
};
_V26/*i*/ = 0;
_V47/*l*/ = _V38/*thenAr*/["length"];
for(_V26/*i*/;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{try
{_V48/*entryAr*/ = _V38/*thenAr*/[_V26/*i*/];
_V48/*entryAr*/[0]([_V45/*value*/, _V48/*entryAr*/[1]]);;
}catch(_V27/*e*/){};
;
}};
;
_V38/*thenAr*/ = _V34/*undefined*/;;
_V39/*elseAr*/ = _V34/*undefined*/;;
this["resolve"] = _V34/*undefined*/;;
this["reject"] = _V34/*undefined*/;;
;
});;
this["reject"] = (function(_V45/*value*/){
var _V26/*i*/;
var _V47/*l*/;
;
_V40/*thenFun*/ = (function(_V49/*u*/, _V42/*parElseFun*/){
;
if(_V42/*parElseFun*/){
try
{_V42/*parElseFun*/(_V45/*value*/);;
}catch(_V27/*e*/){};
;
};
;
;
});;
_V43/*thenReuseFun*/ = (function(_V44/*parReuse*/, _V49/*u*/, _V42/*parElseFun*/){
;
_V44/*parReuse*/();;
if(_V42/*parElseFun*/){
try
{_V42/*parElseFun*/(_V45/*value*/);;
}catch(_V27/*e*/){};
;
};
;
;
});;
if(! _V39/*elseAr*/){
return;;
};
_V26/*i*/ = 0;
_V47/*l*/ = _V39/*elseAr*/["length"];
for(_V26/*i*/;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{try
{_V39/*elseAr*/[_V26/*i*/](_V45/*value*/);;
}catch(_V27/*e*/){};
}};
;
_V38/*thenAr*/ = _V34/*undefined*/;;
_V39/*elseAr*/ = _V34/*undefined*/;;
this["resolve"] = _V34/*undefined*/;;
this["reject"] = _V34/*undefined*/;;
;
});;
this["then"] = (function(_V50/*par1*/, _V51/*par2*/){
;
_V40/*thenFun*/(_V50/*par1*/, _V51/*par2*/);;
;
});;
this["thenReuse"] = (function(_V44/*parReuse*/, _V50/*par1*/, _V51/*par2*/){
;
_V43/*thenReuseFun*/(_V44/*parReuse*/, _V50/*par1*/, _V51/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
this["then"]["thenReuse"] = this["thenReuse"];;
;
});
_V52/*_ClassToken*/;
_V53/*_actClass*/;
_V54/*getClass*/ = (function(_V55/*cf*/){
;
_V53/*_actClass*/ = _V34/*undefined*/;;
_V55/*cf*/();;
return _V53/*_actClass*/;;
;
});
_V56/*classHider*/ = (function(_V57/*toHide*/){
;
return (function(){
;
_V53/*_actClass*/ = _V57/*toHide*/;;
;
});;
;
});
_V58/*builtinTypes*/ = {"var": _V56/*classHider*/({"isVar": true,
"isReady": true}),
"statement": _V56/*classHider*/({"isStatement": true,
"isReady": true})};
_V59/*nextInternalId*/ = 1;
_V60/*getNewInternalId*/ = (function(){
;
return _V59/*nextInternalId*/++;;
;
});
_V61/*internalObjects*/ = {};
_V62/*syncFun*/ = (function(_V21/*parInstance*/, _V63/*memberIdx*/, _V64/*mType*/, _V45/*value*/){
var _V65/*syncData*/;
var _V26/*i*/;
var _V66/*transport*/;
var _V67/*m*/;
;
_V65/*syncData*/ = _V22/*classSystem*/["getSyncData"](_V21/*parInstance*/);
if(_V65/*syncData*/){
_V26/*i*/ = 0;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V65/*syncData*/["transports"]["length"]);++_V26/*i*/){{_V66/*transport*/ = _V65/*syncData*/["transports"][_V26/*i*/];
_V67/*m*/ = _V66/*transport*/["newMessage"]();
_V67/*m*/["setData"]({"type": "sync",
"remoteId": _V66/*transport*/["getInstanceRemoteId"](_V21/*parInstance*/),
"memberIdx": _V63/*memberIdx*/,
"value": _V45/*value*/});;
_V67/*m*/["send"]();;
}};
;
};
;
;
});
_V68/*destroySynced*/ = (function(_V69/*parSyncData*/){
var _V65/*syncData*/;
var _V70/*transports*/;
var _V26/*i*/;
var _V35/*t*/;
;
if(! _V69/*parSyncData*/){
return;;
};
;
_V65/*syncData*/ = _V69/*parSyncData*/;
_V70/*transports*/ = _V65/*syncData*/["transports"]["slice"]();
_V26/*i*/;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V70/*transports*/["length"]);++_V26/*i*/){{_V35/*t*/ = _V70/*transports*/[_V26/*i*/];
_V35/*t*/["removeInstance"](_V65/*syncData*/["getInternalId"]());;
}};
;
if(_V65/*syncData*/["internalId"]){
delete _V61/*internalObjects*/[_V65/*syncData*/["internalId"]];;
};
;
;
});
_V71/*registerSyncClass*/ = (function(_V72/*hashStr*/, _V73/*nameStr*/, _V20/*parType*/){
var _V74/*moduleData*/;
;
_V74/*moduleData*/ = _V2/*getModuleData*/(_V72/*hashStr*/);
_V74/*moduleData*/["classes"][_V73/*nameStr*/] = {"type": _V20/*parType*/};;
;
});
_V75/*getClassBySyncId*/ = (function(_V76/*parSyncId*/){
var _V74/*moduleData*/;
;
_V74/*moduleData*/ = _V2/*getModuleData*/(_V76/*parSyncId*/["hash"]);
if((_V74/*moduleData*/ && _V74/*moduleData*/["classes"][_V76/*parSyncId*/["name"]])){
return _V74/*moduleData*/["classes"][_V76/*parSyncId*/["name"]]["type"];;
};
;
;
});
_V22/*classSystem*/ = {"_createProvisionalClass": (function(){
var _V77/*cDef*/;
var _V55/*cf*/;
;
_V77/*cDef*/ = {"provisional": true,
"promise": new _V78/*Promise*/(),
"type": _V34/*undefined*/};
_V77/*cDef*/["promise"]["then"]((function(_V79/*type*/){
;
_V77/*cDef*/["type"] = _V79/*type*/;;
;
}));;
_V55/*cf*/ = _V56/*classHider*/(_V77/*cDef*/);
return _V55/*cf*/;;
;
}),
"_resolveProvisional": (function(_V20/*parType*/, _V80/*parResult*/){
var _V31/*self*/;
var _V81/*typeDef*/;
var _V82/*resultDef*/;
;
_V31/*self*/ = this;
_V81/*typeDef*/ = _V54/*getClass*/(_V20/*parType*/);
_V82/*resultDef*/ = _V54/*getClass*/(_V80/*parResult*/);
if(_V82/*resultDef*/["provisional"]){
_V82/*resultDef*/["promise"]["then"]((function(_V83/*result*/){
;
_V31/*self*/["resolveProvisional"](_V20/*parType*/, _V83/*result*/);;
;
}));;

}else{
_V81/*typeDef*/["promise"]["resolve"](_V80/*parResult*/);;
};
;
;
}),
"isProvisional": (function(_V20/*parType*/){
var _V81/*typeDef*/;
;
_V81/*typeDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V81/*typeDef*/["provisional"]){
return true;;
};
;
return false;;
;
}),
"definitionPromise": (function(_V20/*parType*/){
var _V81/*typeDef*/;
var _V84/*p*/;
;
_V81/*typeDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V81/*typeDef*/["provisional"]){
return _V81/*typeDef*/["promise"];;
};
;
_V84/*p*/ = new _V78/*Promise*/();
_V84/*p*/["resolve"](_V20/*parType*/);;
return _V84/*p*/;;
;
}),
"readyPromise": (function(_V85/*_parType*/){
var _V84/*p*/;
;
_V84/*p*/ = new _V78/*Promise*/();
this["definitionPromise"](_V85/*_parType*/)["then"]((function(_V20/*parType*/){
var _V81/*typeDef*/;
;
_V81/*typeDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V81/*typeDef*/["isReady"]){
_V84/*p*/["resolve"](_V20/*parType*/);;
return;;
};
;
_V81/*typeDef*/["readyPromise"]["then"]((function(_V20/*parType*/){
;
_V84/*p*/["resolve"](_V20/*parType*/);;
;
}));;
return;;
;
}));;
return _V84/*p*/;;
;
}),
"_createTemporaryTrackedClass": (function(_V20/*parType*/){
var _V31/*self*/;
var _V86/*pr*/;
var _V77/*cDef*/;
var _V55/*cf*/;
;
_V31/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V87/*parDefinedClass*/){
;
_V31/*self*/["_resolveProvisional"](_V86/*pr*/, _V31/*self*/["_createTemporaryTrackedClass"](_V87/*parDefinedClass*/));;
;
}));;
return _V86/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V20/*parType*/)){
return _V20/*parType*/;;
};
;
if(! this["isTrackedClass"](_V20/*parType*/)){
return _V20/*parType*/;;
};
;
_V77/*cDef*/ = {"temporaryTracked": true,
"type": _V20/*parType*/,
"isReady": false,
"readyPromise": new _V78/*Promise*/()};
_V55/*cf*/ = _V56/*classHider*/(_V77/*cDef*/);
_V31/*self*/["readyPromise"](_V20/*parType*/)["then"]((function(){
;
_V77/*cDef*/["ready"] = true;;
_V77/*cDef*/["readyPromise"]["resolve"](_V55/*cf*/);;
;
}));;
return _V55/*cf*/;;
;
}),
"isSyncedClass": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["sync"]){
return true;;
};
;
return false;;
;
}),
"isTemporaryTrackedClass": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["temporaryTracked"]){
return true;;
};
;
return false;;
;
}),
"isServe": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["syncServe"]){
return true;;
};
;
return false;;
;
}),
"getClassFromTemporaryTracked": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
if(this["isTemporaryTrackedClass"](_V20/*parType*/)){
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
return _V77/*cDef*/["type"];;
};
;
return _V20/*parType*/;;
;
}),
"_createPromiseOfClass": (function(_V20/*parType*/){
var _V31/*self*/;
var _V86/*pr*/;
var _V25/*track*/;
var _V88/*map*/;
var _V77/*cDef*/;
var _V55/*cf*/;
var _V89/*pcDef*/;
var _V90/*memberTrackMemberIdx*/;
;
_V31/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V87/*parDefinedClass*/){
;
_V31/*self*/["_resolveProvisional"](_V86/*pr*/, _V31/*self*/["_createPromiseOfClass"](_V87/*parDefinedClass*/));;
;
}));;
return _V86/*pr*/;;
};
;
if(this["isVar"](_V20/*parType*/)){
return _V20/*parType*/;;
};
;
_V25/*track*/ = false;
if(this["isTrackedClass"](_V20/*parType*/)){
_V25/*track*/ = true;;
};
;
_V88/*map*/ = {};
_V77/*cDef*/ = {"promiseOf": true,
"type": _V20/*parType*/,
"isReady": true,
"readyPromise": new _V78/*Promise*/(),
"track": _V25/*track*/,
"map": _V88/*map*/};
_V55/*cf*/ = _V56/*classHider*/(_V77/*cDef*/);
if(_V25/*track*/){
_V77/*cDef*/["map"]["trackRootIdx"] = "rootTrack";;
_V77/*cDef*/["map"]["trackMemberIdx"] = "memberTrack";;
_V89/*pcDef*/ = _V54/*getClass*/(_V20/*parType*/);
_V90/*memberTrackMemberIdx*/ = _V89/*pcDef*/["map"]["trackMemberIdx"];
_V77/*cDef*/["constructor"] = (function(){
var _V91/*r*/;
;
_V91/*r*/ = new _V29/*TrackedPromise*/((function(_V92/*parTempValue*/, _V93/*parTracker*/){
var _V94/*v*/;
var _V47/*l*/;
;
_V94/*v*/ = _V92/*parTempValue*/[0];
_V47/*l*/ = _V94/*v*/[_V90/*memberTrackMemberIdx*/](_V93/*parTracker*/);
_V92/*parTempValue*/[1]();;
return _V47/*l*/;;
;
}));
return [_V91/*r*/, _V91/*r*/["rootTrack"]()];;
;
});;

}else{
_V77/*cDef*/["constructor"] = _V78/*Promise*/;;
};
;
_V77/*cDef*/["readyPromise"]["resolve"](_V55/*cf*/);;
return _V55/*cf*/;;
;
}),
"isPromiseOfClass": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["promiseOf"]){
return true;;
};
;
return false;;
;
}),
"getClassFromPromiseOf": (function(_V20/*parType*/){
var _V31/*self*/;
var _V86/*pr*/;
var _V77/*cDef*/;
;
_V31/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V86/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V87/*parDefinedClass*/){
;
_V31/*self*/["_resolveProvisional"](_V86/*pr*/, _V31/*self*/["getClassFromPromiseOf"](_V87/*parDefinedClass*/));;
;
}));;
return _V86/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V20/*parType*/)){
return this["getClassFromPromiseOf"](this["getClassFromTemporaryTracked"](_V20/*parType*/));;
};
;
if(this["isPromiseOfClass"](_V20/*parType*/)){
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
return this["_createTemporaryTrackedClass"](_V77/*cDef*/["type"]);;
};
;
return _V20/*parType*/;;
;
}),
"isSameType": (function(_V95/*type1*/, _V96/*type2*/){
var _V97/*cDef1*/;
var _V98/*cDef2*/;
;
if((_V95/*type1*/ === _V96/*type2*/)){
return true;;
};
;
_V97/*cDef1*/ = _V54/*getClass*/(_V95/*type1*/);
if(_V97/*cDef1*/["provisional"]){
if(! _V97/*cDef1*/["type"]){
return false;;
};
;
_V95/*type1*/ = _V97/*cDef1*/["type"];;
_V97/*cDef1*/ = _V54/*getClass*/(_V95/*type1*/);;
};
;
_V98/*cDef2*/ = _V54/*getClass*/(_V96/*type2*/);
if(_V98/*cDef2*/["provisional"]){
if(! _V98/*cDef2*/["type"]){
return false;;
};
;
_V96/*type2*/ = _V98/*cDef2*/["type"];;
_V98/*cDef2*/ = _V54/*getClass*/(_V96/*type2*/);;
};
;
if((_V95/*type1*/ === _V96/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(_V99/*classLiteral*/, _V100/*parDefaults*/){
var _V31/*self*/;
;
_V31/*self*/ = this;
return _V31/*self*/["_createClass"](_V99/*classLiteral*/, _V100/*parDefaults*/);;
;
}),
"_membersDefined": (function(_V99/*classLiteral*/){
var _V31/*self*/;
var _V101/*cnt*/;
var _V102/*retPs*/;
var _V103/*check*/;
var _V104/*addMember*/;
var _V26/*i*/;
;
_V31/*self*/ = this;
_V101/*cnt*/ = 1;
_V102/*retPs*/ = new _V78/*Promise*/();
_V103/*check*/ = (function(){
;
if(_V101/*cnt*/){
return;;
};
;
_V102/*retPs*/["resolve"](_V99/*classLiteral*/);;
;
});
_V104/*addMember*/ = (function(_V67/*m*/){
;
++_V101/*cnt*/;;
_V31/*self*/["definitionPromise"](_V67/*m*/["type"])["then"]((function(_V105/*definedType*/){
;
_V67/*m*/["type"] = _V105/*definedType*/;;
--_V101/*cnt*/;;
_V103/*check*/();;
;
}));;
;
});
if(_V99/*classLiteral*/["members"]){
_V26/*i*/ = 0;
for(_V26/*i*/;(_V26/*i*/ < _V99/*classLiteral*/["members"]["length"]);++_V26/*i*/){{_V104/*addMember*/(_V99/*classLiteral*/["members"][_V26/*i*/]);;
}};
;
};
;
--_V101/*cnt*/;;
_V103/*check*/();;
return _V102/*retPs*/;;
;
}),
"_createClass": (function(_V99/*classLiteral*/, _V100/*parDefaults*/){
var _V106/*cAr*/;
var _V31/*self*/;
var _V88/*map*/;
var _V77/*cDef*/;
var _V55/*cf*/;
var _V107/*sync*/;
var _V108/*syncAll*/;
var _V109/*syncCnt*/;
var _V110/*trackerIdx*/;
var _V111/*trackRootIdx*/;
var _V112/*trackMemberIdx*/;
var _V114/*freepart*/;
var _V119/*helpAr*/;
var _V120/*makeHelpAr*/;
var _V121/*conIdx*/;
var _V127/*constructorDef*/;
var _V128/*constructorFun*/;
var _V129/*destroyDef*/;
var _V33/*destroyFun*/;
var _V130/*untrackIdxAr*/;
var _V104/*addMember*/;
var _V138/*createMembersPs*/;
var _V140/*memberPs*/;
var _V26/*i*/;
var _V141/*proto*/;
var _V142/*freeFun*/;
var _V143/*f*/;
var _V144/*finalPs*/;
;
_V106/*cAr*/ = [];
_V31/*self*/ = this;
_V88/*map*/ = {"members": {},
"extends": []};
_V77/*cDef*/ = {"constructor": _V34/*undefined*/,
"map": _V88/*map*/,
"isReady": false,
"track": ((_V99/*classLiteral*/["track"] || _V99/*classLiteral*/["sync"]) ? true : false),
"sync": _V99/*classLiteral*/["sync"],
"readyPromise": new _V78/*Promise*/(),
"syncMembers": []};
_V55/*cf*/ = _V56/*classHider*/(_V77/*cDef*/);
if(_V77/*cDef*/["sync"]){
if(_V77/*cDef*/["sync"]["serve"]){
_V77/*cDef*/["syncServe"] = true;;
};
;
};
;
_V106/*cAr*/["push"](_V55/*cf*/);;
_V107/*sync*/ = (_V99/*classLiteral*/["sync"] ? true : false);
_V108/*syncAll*/ = false;
if(_V107/*sync*/){
if(_V99/*classLiteral*/["sync"]["all"]){
_V108/*syncAll*/ = true;;
};
;
};
;
_V109/*syncCnt*/ = 0;
_V110/*trackerIdx*/;
_V111/*trackRootIdx*/;
_V112/*trackMemberIdx*/;
if(_V77/*cDef*/["track"]){
_V88/*map*/["trackerIdx"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V34/*undefined*/);;
_V88/*map*/["trackRootIdx"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V34/*undefined*/);;
_V88/*map*/["trackMemberIdx"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V34/*undefined*/);;
_V110/*trackerIdx*/ = _V88/*map*/["trackerIdx"];;
_V111/*trackRootIdx*/ = _V88/*map*/["trackRootIdx"];;
_V112/*trackMemberIdx*/ = _V88/*map*/["trackMemberIdx"];;
};
;
if(_V107/*sync*/){
_V88/*map*/["syncDataIdx"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"]((function(){
var _V31/*self*/;
var _V113/*internalId*/;
var _V65/*syncData*/;
;
_V31/*self*/ = this;
_V113/*internalId*/;
_V65/*syncData*/ = {"getInternalId": (function(){
;
if(_V113/*internalId*/){
return _V113/*internalId*/;;
};
;
_V113/*internalId*/ = _V60/*getNewInternalId*/();;
_V61/*internalObjects*/[_V113/*internalId*/] = _V31/*self*/;;
_V65/*syncData*/["internalId"] = _V113/*internalId*/;;
return _V113/*internalId*/;;
;
}),
"transports": []};
this[_V88/*map*/["syncDataIdx"]] = (function(){
;
return _V65/*syncData*/;;
;
});;
return _V65/*syncData*/;;
;
}));;
};
;
if(_V99/*classLiteral*/["hasFreePart"]){
_V114/*freepart*/ = {};
_V88/*map*/["freePart"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V114/*freepart*/);;
_V88/*map*/["getMemberCode"] = [_V115/*MAKRO_SELF*/, (("[" + _V88/*map*/["freePart"]) + "]["), _V116/*MAKRO_PROPERTYVALUE*/, "]"];;
_V88/*map*/["setMemberCode"] = [_V115/*MAKRO_SELF*/, (("[" + _V88/*map*/["freePart"]) + "]["), _V116/*MAKRO_PROPERTYVALUE*/, "] ", _V117/*MAKRO_OPERATOR*/, " ", _V118/*MAKRO_VALUE*/];;
};
;
_V119/*helpAr*/ = [];
_V120/*makeHelpAr*/ = (function(){
;
return _V119/*helpAr*/["slice"]();;
;
});
_V88/*map*/["connectIdx"] = _V106/*cAr*/["length"];;
_V121/*conIdx*/ = _V88/*map*/["connectIdx"];
_V106/*cAr*/["push"]((function(){
var _V119/*helpAr*/;
var _V126/*arguments*/ = arguments;
;
_V119/*helpAr*/ = _V120/*makeHelpAr*/();
this[_V121/*conIdx*/] = (function(_V122/*idx*/, _V123/*fun*/, _V124/*base*/){
var _V125/*chain*/;
;
_V125/*chain*/ = _V119/*helpAr*/[_V122/*idx*/];
if(! _V125/*chain*/){
_V125/*chain*/ = _V14/*Chainable*/(this, _V122/*idx*/);;
_V119/*helpAr*/[_V122/*idx*/] = _V125/*chain*/;;
};
;
return _V125/*chain*/(_V123/*fun*/, _V124/*base*/);;
;
});;
return this[_V121/*conIdx*/]["apply"](this, _V126/*arguments*/);;
;
}));;
_V127/*constructorDef*/;
_V128/*constructorFun*/;
_V129/*destroyDef*/;
_V33/*destroyFun*/;
_V130/*untrackIdxAr*/ = [];
_V104/*addMember*/ = (function(_V67/*m*/){
var _V131/*mDef*/;
var _V64/*mType*/;
var _V63/*memberIdx*/;
var _V132/*isTrackedMember*/;
var _V134/*def*/;
var _V135/*mCDef*/;
var _V90/*memberTrackMemberIdx*/;
;
_V131/*mDef*/ = {"index": _V106/*cAr*/["length"]};
if((_V108/*syncAll*/ || _V67/*m*/["sync"])){
_V131/*mDef*/["sync"] = true;;
};
;
_V131/*mDef*/["type"] = _V67/*m*/["type"];;
_V64/*mType*/ = _V67/*m*/["type"];
_V63/*memberIdx*/ = _V131/*mDef*/["index"];
_V132/*isTrackedMember*/ = _V31/*self*/["isTrackedClass"](_V131/*mDef*/["type"]);
if(_V131/*mDef*/["sync"]){
_V131/*mDef*/["hasSetter"] = true;;
if(_V132/*isTrackedMember*/){
_V131/*mDef*/["defaultSetter"] = (function(_V133/*vAr*/){
;
_V62/*syncFun*/(this, _V63/*memberIdx*/, _V64/*mType*/, _V133/*vAr*/[0]);;
return _V133/*vAr*/;;
;
});;

}else{
_V131/*mDef*/["defaultSetter"] = (function(_V94/*v*/){
;
_V62/*syncFun*/(this, _V63/*memberIdx*/, _V64/*mType*/, _V94/*v*/);;
return _V94/*v*/;;
;
});;
};
;
_V77/*cDef*/["syncMembers"]["push"](_V131/*mDef*/);;
};
;
_V88/*map*/["members"][_V67/*m*/["name"]] = _V131/*mDef*/;;
_V134/*def*/ = (_V100/*parDefaults*/ ? _V100/*parDefaults*/[_V67/*m*/["name"]] : _V34/*undefined*/);
_V106/*cAr*/["push"](_V134/*def*/);;
if(_V131/*mDef*/["hasSetter"]){
_V131/*mDef*/["setterIdx"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V131/*mDef*/["defaultSetter"]);;
};
;
if((_V67/*m*/["name"] == "constructor")){
_V127/*constructorDef*/ = _V131/*mDef*/;;
_V128/*constructorFun*/ = _V134/*def*/;;
};
;
if((_V67/*m*/["name"] == "destroy")){
_V129/*destroyDef*/ = _V131/*mDef*/;;
_V33/*destroyFun*/ = _V134/*def*/;;
};
;
_V131/*mDef*/["getCode"] = [_V115/*MAKRO_SELF*/, (("[" + _V131/*mDef*/["index"]) + "]")];;
if(_V131/*mDef*/["hasSetter"]){
_V131/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + _V131/*mDef*/["setterIdx"]) + "](v); s[") + _V131/*mDef*/["index"]) + "] "), _V117/*MAKRO_OPERATOR*/, " v; return v; })(", _V115/*MAKRO_SELF*/, ", ", _V118/*MAKRO_VALUE*/, ")"];;

}else{
_V131/*mDef*/["setCode"] = [_V115/*MAKRO_SELF*/, (("[" + _V131/*mDef*/["index"]) + "] "), _V117/*MAKRO_OPERATOR*/, " ", _V118/*MAKRO_VALUE*/];;
};
;
if(_V132/*isTrackedMember*/){
_V135/*mCDef*/ = _V54/*getClass*/(_V131/*mDef*/["type"]);
_V90/*memberTrackMemberIdx*/ = _V135/*mCDef*/["map"]["trackMemberIdx"];
_V131/*mDef*/["trackIndex"] = _V106/*cAr*/["length"];;
_V106/*cAr*/["push"](_V34/*undefined*/);;
_V130/*untrackIdxAr*/["push"](_V131/*mDef*/["trackIndex"]);;
if(_V77/*cDef*/["track"]){
if(_V131/*mDef*/["hasSetter"]){
_V131/*mDef*/["setCode"] = [_V136/*runtimeError*/(_V24/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V131/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + _V131/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + _V131/*mDef*/["index"]) + "] "), _V117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V131/*mDef*/["trackIndex"]) + "]){ s[") + _V131/*mDef*/["trackIndex"]) + "](); }; s[") + _V131/*mDef*/["trackIndex"]) + "] = v[") + _V90/*memberTrackMemberIdx*/) + "](s[") + _V110/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V115/*MAKRO_SELF*/, ", ", _V118/*MAKRO_VALUE*/, ")"];;

}else{
_V131/*mDef*/["setCode"] = [(("(function(s, v){ s[" + _V131/*mDef*/["index"]) + "] "), _V117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V131/*mDef*/["trackIndex"]) + "]){ s[") + _V131/*mDef*/["trackIndex"]) + "](); }; s[") + _V131/*mDef*/["trackIndex"]) + "] = v[") + _V90/*memberTrackMemberIdx*/) + "](s[") + _V110/*trackerIdx*/) + "]); return v; })("), _V115/*MAKRO_SELF*/, ", ", _V118/*MAKRO_VALUE*/, ")"];;
_V131/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + _V131/*mDef*/["index"]) + "] "), _V117/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V131/*mDef*/["trackIndex"]) + "]){ s[") + _V131/*mDef*/["trackIndex"]) + "](); }; s[") + _V131/*mDef*/["trackIndex"]) + "] = v[") + _V90/*memberTrackMemberIdx*/) + "](s[") + _V110/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V115/*MAKRO_SELF*/, ", ", _V118/*MAKRO_VALUE*/, ")"];;
};
;

}else{
_V131/*mDef*/["setCode"] = [_V136/*runtimeError*/(_V24/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V131/*mDef*/["setCodeFromTemporary"] = [_V136/*runtimeError*/(_V24/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
_V131/*mDef*/["connectFunCode"] = [_V115/*MAKRO_SELF*/, (((("[" + _V88/*map*/["connectIdx"]) + "](") + _V131/*mDef*/["index"]) + ", "), _V118/*MAKRO_VALUE*/, ")"];;
_V131/*mDef*/["connectSlotCode"] = [_V115/*MAKRO_SELF*/, (((("[" + _V88/*map*/["connectIdx"]) + "](") + _V131/*mDef*/["index"]) + ", "), _V118/*MAKRO_VALUE*/, "[", _V137/*MAKRO_VALUEPROPERTY*/, "], ", _V118/*MAKRO_VALUE*/, ")"];;
;
});
_V138/*createMembersPs*/ = (function(){
var _V139/*donePs*/;
;
_V139/*donePs*/ = new _V78/*Promise*/();
_V31/*self*/["_membersDefined"](_V99/*classLiteral*/)["then"]((function(){
var _V26/*i*/;
;
_V26/*i*/;
if(_V99/*classLiteral*/["members"]){
_V26/*i*/ = 0;
for(_V26/*i*/;(_V26/*i*/ < _V99/*classLiteral*/["members"]["length"]);++_V26/*i*/){{_V104/*addMember*/(_V99/*classLiteral*/["members"][_V26/*i*/]);;
}};
;
};
;
_V139/*donePs*/["resolve"]();;
;
}));;
return _V139/*donePs*/;;
;
});
_V140/*memberPs*/ = new _V138/*createMembersPs*/();
_V26/*i*/;
if(_V99/*classLiteral*/["hasFreePart"]){
_V141/*proto*/ = {};
if(_V100/*parDefaults*/){
for(_V26/*i*/ in _V100/*parDefaults*/){if(! _V88/*map*/["members"][_V26/*i*/]){
_V141/*proto*/[_V26/*i*/] = _V100/*parDefaults*/[_V26/*i*/];;
};
;
};
;
};
;
_V142/*freeFun*/ = (function(){
;
;
});
_V142/*freeFun*/["prototype"] = _V141/*proto*/;;
_V143/*f*/ = _V88/*map*/["freePart"];
if(_V77/*cDef*/["track"]){
_V77/*cDef*/["constructor"] = (function(){
var _V91/*r*/;
var _V35/*t*/;
;
_V91/*r*/ = _V106/*cAr*/["slice"]();
_V91/*r*/[_V143/*f*/] = new _V142/*freeFun*/();;
_V35/*t*/ = _V9/*Tracker*/((function(){
;
_V33/*destroyFun*/["apply"](_V91/*r*/);;
;
}));
_V91/*r*/[_V110/*trackerIdx*/] = _V35/*t*/[0];;
_V91/*r*/[_V111/*trackRootIdx*/] = _V35/*t*/[1];;
_V91/*r*/[_V112/*trackMemberIdx*/] = _V35/*t*/[2];;
return [_V91/*r*/, _V91/*r*/[_V111/*trackRootIdx*/]()];;
;
});;

}else{
_V77/*cDef*/["constructor"] = (function(){
var _V91/*r*/;
;
_V91/*r*/ = _V106/*cAr*/["slice"]();
_V91/*r*/[_V143/*f*/] = new _V142/*freeFun*/();;
return _V91/*r*/;;
;
});;
};
;

}else{
if(_V77/*cDef*/["track"]){
_V77/*cDef*/["constructor"] = (function(){
var _V91/*r*/;
var _V35/*t*/;
;
_V91/*r*/ = _V106/*cAr*/["slice"]();
_V35/*t*/ = _V9/*Tracker*/((function(){
;
_V33/*destroyFun*/["apply"](_V91/*r*/);;
;
}));
_V91/*r*/[_V110/*trackerIdx*/] = _V35/*t*/[0];;
_V91/*r*/[_V111/*trackRootIdx*/] = _V35/*t*/[1];;
_V91/*r*/[_V112/*trackMemberIdx*/] = _V35/*t*/[2];;
return [_V91/*r*/, _V91/*r*/[_V111/*trackRootIdx*/]()];;
;
});;

}else{
_V77/*cDef*/["constructor"] = (function(){
var _V91/*r*/;
;
_V91/*r*/ = _V106/*cAr*/["slice"]();
return _V91/*r*/;;
;
});;
};
;
};
;
_V144/*finalPs*/ = new _V78/*Promise*/();
_V140/*memberPs*/["then"]((function(){
var _V26/*i*/;
var _V145/*realConstructor*/;
var _V147/*conDef*/;
var _V148/*_destroyFun*/;
var _V151/*_sync_destroyFun*/;
;
_V26/*i*/;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V106/*cAr*/["length"]);++_V26/*i*/){{_V119/*helpAr*/["push"](_V34/*undefined*/);;
}};
;
if(_V127/*constructorDef*/){
_V77/*cDef*/["constructorArguments"] = [];;
_V145/*realConstructor*/ = _V77/*cDef*/["constructor"];
if(_V77/*cDef*/["track"]){
_V77/*cDef*/["constructor"] = (function(){
var _V146/*instance*/;
var _V126/*arguments*/ = arguments;
;
_V146/*instance*/ = _V145/*realConstructor*/();
_V128/*constructorFun*/["apply"](_V146/*instance*/[0], _V126/*arguments*/);;
return _V146/*instance*/;;
;
});;

}else{
_V77/*cDef*/["constructor"] = (function(){
var _V146/*instance*/;
var _V126/*arguments*/ = arguments;
;
_V146/*instance*/ = _V145/*realConstructor*/();
_V128/*constructorFun*/["apply"](_V146/*instance*/, _V126/*arguments*/);;
return _V146/*instance*/;;
;
});;
};
;
_V147/*conDef*/ = _V54/*getClass*/(_V127/*constructorDef*/["type"]);
_V77/*cDef*/["constructorType"] = _V31/*self*/["createFunctionType"]({"return": _V55/*cf*/,
"arguments": _V147/*conDef*/["arguments"]});;

}else{
_V77/*cDef*/["constructorType"] = _V31/*self*/["createFunctionType"]({"return": _V55/*cf*/});;
};
;
if(_V77/*cDef*/["track"]){
_V148/*_destroyFun*/;
if(_V130/*untrackIdxAr*/["length"]){
if(_V129/*destroyDef*/){
_V148/*_destroyFun*/ = _V33/*destroyFun*/;;
_V33/*destroyFun*/ = (function(){
var _V26/*i*/;
var _V149/*curIdx*/;
var _V150/*tFun*/;
;
_V26/*i*/;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V130/*untrackIdxAr*/["length"]);++_V26/*i*/){{_V149/*curIdx*/ = _V130/*untrackIdxAr*/[_V26/*i*/];
_V150/*tFun*/ = this[_V149/*curIdx*/];
this[_V149/*curIdx*/] = _V34/*undefined*/;;
if(_V150/*tFun*/){
_V150/*tFun*/();;
};
;
}};
;
_V148/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V33/*destroyFun*/ = (function(){
var _V26/*i*/;
var _V150/*tFun*/;
;
_V26/*i*/;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V130/*untrackIdxAr*/["length"]);++_V26/*i*/){{_V150/*tFun*/ = this[_V130/*untrackIdxAr*/[_V26/*i*/]];
if(_V150/*tFun*/){
_V150/*tFun*/();;
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
if(_V129/*destroyDef*/){
_V148/*_destroyFun*/ = _V33/*destroyFun*/;;
_V33/*destroyFun*/ = (function(){
;
_V148/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V33/*destroyFun*/ = (function(){
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
if(_V107/*sync*/){
_V151/*_sync_destroyFun*/ = _V33/*destroyFun*/;
_V33/*destroyFun*/ = (function(){
var _V65/*syncData*/;
;
_V65/*syncData*/ = _V22/*classSystem*/["getSyncData"](this);
_V68/*destroySynced*/(_V65/*syncData*/);;
_V151/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
_V144/*finalPs*/["resolve"]();;
;
}));;
_V144/*finalPs*/["then"]((function(){
;
_V77/*cDef*/["isReady"] = true;;
_V77/*cDef*/["readyPromise"]["resolve"](_V55/*cf*/);;
;
}));;
if(_V107/*sync*/){
if(_V99/*classLiteral*/["name"]){
_V77/*cDef*/["syncId"] = {"hash": _V99/*classLiteral*/["hashStr"],
"name": _V99/*classLiteral*/["name"]};;
_V71/*registerSyncClass*/(_V99/*classLiteral*/["hashStr"], _V99/*classLiteral*/["name"], _V55/*cf*/);;
};
;
};
;
return _V55/*cf*/;;
;
}),
"getTypeFromInstance": (function(_V21/*parInstance*/){
;
if((typeof _V21/*parInstance*/[0] === "function")){
return _V21/*parInstance*/[0];;
};
;
if((_V21/*parInstance*/["length"] === 2)){
return this["_createTemporaryTrackedClass"](_V21/*parInstance*/[0][0]);;
};
;
throw _V24/*errorMsg*/["unknownInstanceType"];
;
}),
"getInternalId": (function(_V21/*parInstance*/){
var _V79/*type*/;
var _V77/*cDef*/;
var _V65/*syncData*/;
;
_V79/*type*/ = _V21/*parInstance*/[0];
_V77/*cDef*/ = _V54/*getClass*/(_V79/*type*/);
if(_V77/*cDef*/["sync"]){
_V65/*syncData*/ = _V21/*parInstance*/[_V77/*cDef*/["map"]["syncDataIdx"]]();
return _V65/*syncData*/["getInternalId"]();;
};
;
return;;
;
}),
"getSyncData": (function(_V21/*parInstance*/){
var _V79/*type*/;
var _V77/*cDef*/;
;
_V79/*type*/ = _V21/*parInstance*/[0];
_V77/*cDef*/ = _V54/*getClass*/(_V79/*type*/);
if(_V77/*cDef*/["sync"]){
return _V21/*parInstance*/[_V77/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
}),
"getSyncId": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
return _V77/*cDef*/["syncId"];;
;
}),
"addTransport": (function(_V152/*parDynInstance*/, _V153/*parTransport*/){
var _V65/*syncData*/;
;
_V65/*syncData*/ = this["getSyncData"](_V152/*parDynInstance*/["instance"]);
_V65/*syncData*/["transports"]["push"](_V153/*parTransport*/);;
if(((_V65/*syncData*/["transports"]["length"] > 1) && ! _V65/*syncData*/["track"])){
_V65/*syncData*/["track"] = _V152/*parDynInstance*/["getTrack"]();;
};
;
;
}),
"removeTransport": (function(_V154/*parInternalId*/, _V153/*parTransport*/){
var _V155/*realInstance*/;
var _V65/*syncData*/;
var _V70/*transports*/;
var _V156/*index*/;
var _V25/*track*/;
;
_V155/*realInstance*/ = _V61/*internalObjects*/[_V154/*parInternalId*/];
if(! _V155/*realInstance*/){
return;;
};
;
_V65/*syncData*/ = this["getSyncData"](_V155/*realInstance*/);
_V70/*transports*/ = _V65/*syncData*/["transports"];
_V156/*index*/ = _V70/*transports*/["indexOf"](_V153/*parTransport*/);
if((_V156/*index*/ > - 1)){
_V70/*transports*/["splice"](_V156/*index*/, 1);;
};
;
if(((_V65/*syncData*/["transports"]["length"] < 2) && _V65/*syncData*/["track"])){
_V25/*track*/ = _V65/*syncData*/["track"];
_V65/*syncData*/["track"] = _V34/*undefined*/;;
_V25/*track*/();;
};
;
;
}),
"getInstanceSyncData": (function(_V152/*parDynInstance*/, _V157/*parGetDataFun*/, _V158/*parGetTypeFun*/){
var _V79/*type*/;
var _V146/*instance*/;
var _V77/*cDef*/;
var _V159/*res*/;
var _V160/*syncMembers*/;
var _V26/*i*/;
var _V47/*l*/;
var _V35/*t*/;
var _V161/*d*/;
;
if(! _V152/*parDynInstance*/){
return;;
};
;
_V79/*type*/ = _V152/*parDynInstance*/["type"];
_V146/*instance*/ = _V152/*parDynInstance*/["instance"];
_V77/*cDef*/ = _V54/*getClass*/(_V79/*type*/);
if(! _V77/*cDef*/["sync"]){
throw _V24/*errorMsg*/["notSyncable"];
};
;
_V159/*res*/ = [_V158/*parGetTypeFun*/(_V79/*type*/)];
_V160/*syncMembers*/ = _V77/*cDef*/["syncMembers"];
_V26/*i*/ = 0;
_V47/*l*/ = _V160/*syncMembers*/["length"];
for(_V26/*i*/;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{_V35/*t*/ = _V160/*syncMembers*/[_V26/*i*/]["type"];
_V161/*d*/ = _V146/*instance*/[_V160/*syncMembers*/[_V26/*i*/]["index"]];
if(! this["isFunctionType"](_V35/*t*/)){
_V159/*res*/["push"](_V157/*parGetDataFun*/(_V35/*t*/, _V161/*d*/));;
};
;
}};
;
return _V159/*res*/;;
;
}),
"getInstanceFromSyncData": (function(_V162/*parData*/){
var _V79/*type*/;
var _V163/*getTracker*/;
var _V164/*setMember*/;
var _V77/*cDef*/;
var _V167/*isTracked*/;
var _V146/*instance*/;
var _V160/*syncMembers*/;
var _V26/*i*/;
var _V47/*l*/;
var _V168/*nextData*/;
var _V35/*t*/;
;
_V79/*type*/ = _V162/*parData*/[0];
_V163/*getTracker*/ = (function(_V152/*parDynInstance*/){
var _V77/*cDef*/;
var _V110/*trackerIdx*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V152/*parDynInstance*/["type"]);
_V110/*trackerIdx*/ = _V77/*cDef*/["map"]["trackerIdx"];
return _V152/*parDynInstance*/["instance"][_V110/*trackerIdx*/];;
;
});
_V164/*setMember*/ = (function(_V20/*parType*/, _V152/*parDynInstance*/, _V165/*parMemberDefinition*/, _V166/*parValueDynInstance*/){
var _V155/*realInstance*/;
var _V36/*tracker*/;
var _V112/*trackMemberIdx*/;
;
_V155/*realInstance*/ = _V152/*parDynInstance*/["instance"];
_V155/*realInstance*/[_V165/*parMemberDefinition*/["index"]] = _V166/*parValueDynInstance*/["getInstanceAsType"](_V165/*parMemberDefinition*/["type"]);;
if(_V22/*classSystem*/["isTrackedClass"](_V165/*parMemberDefinition*/["type"])){
_V36/*tracker*/ = _V163/*getTracker*/(_V152/*parDynInstance*/);
_V77/*cDef*/ = _V54/*getClass*/(_V166/*parValueDynInstance*/["type"]);;
_V112/*trackMemberIdx*/ = _V77/*cDef*/["map"]["trackMemberIdx"];
if(_V155/*realInstance*/[_V165/*parMemberDefinition*/["trackIndex"]]){
_V155/*realInstance*/[_V165/*parMemberDefinition*/["trackIndex"]]();;
};
;
_V155/*realInstance*/[_V165/*parMemberDefinition*/["trackIndex"]] = _V166/*parValueDynInstance*/["instance"][_V112/*trackMemberIdx*/](_V36/*tracker*/);;
};
;
;
});
_V77/*cDef*/ = _V54/*getClass*/(_V79/*type*/);
if(! _V77/*cDef*/["sync"]){
throw _V24/*errorMsg*/["notSyncable"];
};
;
_V167/*isTracked*/ = this["isTrackedClass"](_V79/*type*/);
_V146/*instance*/ = new _V28/*DynInstance*/(_V79/*type*/, this["getTypeConstructor"](_V79/*type*/)());
try
{_V160/*syncMembers*/ = _V77/*cDef*/["syncMembers"];
_V26/*i*/ = 0;
_V47/*l*/ = _V160/*syncMembers*/["length"];
_V168/*nextData*/ = 1;
for(_V26/*i*/;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{_V35/*t*/ = _V160/*syncMembers*/[_V26/*i*/]["type"];
if(this["isFunctionType"](_V35/*t*/)){
continue;;
};
;
_V164/*setMember*/(_V79/*type*/, _V146/*instance*/, _V160/*syncMembers*/[_V26/*i*/], _V162/*parData*/[_V168/*nextData*/]);;
++_V168/*nextData*/;;
}};
;
}catch(_V27/*e*/){_V146/*instance*/["track"]();;
throw _V27/*e*/;
};
;
return _V146/*instance*/;;
;
}),
"setMemberByIdx": (function(_V155/*realInstance*/, _V63/*memberIdx*/, _V45/*value*/){
;
_V155/*realInstance*/[_V63/*memberIdx*/] = _V45/*value*/;;
;
}),
"isFunctionType": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(_V169/*par*/){
var _V31/*self*/;
var _V77/*cDef*/;
var _V170/*checkReady*/;
var _V171/*makeTemporaries*/;
var _V172/*isReady*/;
var _V173/*resolveTypeFun*/;
var _V26/*i*/;
var _V55/*cf*/;
;
_V31/*self*/ = this;
_V77/*cDef*/ = {"isFunction": true,
"return": (_V169/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (_V169/*par*/["arguments"] || []),
"isReady": false};
_V170/*checkReady*/ = (function(){
;
_V171/*makeTemporaries*/();;
;
});
_V171/*makeTemporaries*/ = (function(){
var _V26/*i*/;
;
_V77/*cDef*/["return"] = _V31/*self*/["_createTemporaryTrackedClass"](_V77/*cDef*/["return"]);;
_V26/*i*/ = 0;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V77/*cDef*/["arguments"]["length"]);++_V26/*i*/){{_V77/*cDef*/["arguments"][_V26/*i*/] = _V31/*self*/["_createTemporaryTrackedClass"](_V77/*cDef*/["arguments"][_V26/*i*/]);;
}};
;
;
});
_V172/*isReady*/ = true;
if(_V31/*self*/["isProvisional"](_V77/*cDef*/["return"])){
_V172/*isReady*/ = false;;
_V31/*self*/["definitionPromise"](_V77/*cDef*/["return"])["then"]((function(_V20/*parType*/){
;
_V77/*cDef*/["return"] = _V20/*parType*/;;
_V170/*checkReady*/();;
;
}));;
};
;
_V173/*resolveTypeFun*/ = (function(_V174/*parI*/){
;
return (function(_V20/*parType*/){
;
_V77/*cDef*/["arguments"][_V174/*parI*/] = _V20/*parType*/;;
_V170/*checkReady*/();;
;
});;
;
});
_V26/*i*/ = 0;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V77/*cDef*/["arguments"]["length"]);++_V26/*i*/){{if(_V31/*self*/["isProvisional"](_V77/*cDef*/["arguments"][_V26/*i*/])){
_V172/*isReady*/ = false;;
_V31/*self*/["definitionPromise"](_V77/*cDef*/["arguments"][_V26/*i*/])["then"](_V173/*resolveTypeFun*/(_V26/*i*/));;
};
;
}};
;
_V55/*cf*/ = _V56/*classHider*/(_V77/*cDef*/);
if(! _V172/*isReady*/){
_V77/*cDef*/["readyPromise"] = new _V78/*Promise*/();;
_V170/*checkReady*/ = (function(){
var _V26/*i*/;
;
if(_V31/*self*/["isProvisional"](_V77/*cDef*/["return"])){
return;;
};
;
_V26/*i*/ = 0;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V77/*cDef*/["arguments"]["length"]);++_V26/*i*/){{if(_V31/*self*/["isProvisional"](_V77/*cDef*/["arguments"][_V26/*i*/])){
return;;
};
;
}};
;
_V171/*makeTemporaries*/();;
_V77/*cDef*/["isReady"] = true;;
_V77/*cDef*/["readyPromise"]["resolve"](_V55/*cf*/);;
;
});;
_V170/*checkReady*/();;

}else{
_V170/*checkReady*/();;
_V77/*cDef*/["isReady"] = true;;
};
;
return _V55/*cf*/;;
;
}),
"isVar": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return _V77/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if(_V77/*cDef*/["arguments"]){
return _V77/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(_V20/*parType*/, _V175/*parIndex*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
if((_V77/*cDef*/["arguments"] && _V77/*cDef*/["arguments"][_V175/*parIndex*/])){
return _V77/*cDef*/["arguments"][_V175/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(_V20/*parType*/, _V175/*parIndex*/){
var _V77/*cDef*/;
var _V35/*t*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
_V35/*t*/;
if(_V77/*cDef*/["constructorArguments"]){
_V35/*t*/ = _V77/*cDef*/["constructorArguments"][_V175/*parIndex*/];;
};
;
if(_V35/*t*/){
return _V35/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(_V20/*parType*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
return _V77/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(_V176/*parName*/){
;
return _V58/*builtinTypes*/[_V176/*parName*/];;
;
}),
"getGetPropertyCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V88/*map*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
if(_V77/*cDef*/["isVar"]){
return _V177/*assembleCode*/([_V115/*MAKRO_SELF*/, "[", _V116/*MAKRO_PROPERTYVALUE*/, "]"], _V169/*par*/);;
};
;
_V88/*map*/ = _V77/*cDef*/["map"];
if(_V169/*par*/["property"]){
if(_V88/*map*/["members"][_V169/*par*/["property"]]){
return _V177/*assembleCode*/(_V88/*map*/["members"][_V169/*par*/["property"]]["getCode"], _V169/*par*/);;
};
;
};
;
if(_V88/*map*/["getMemberCode"]){
return _V177/*assembleCode*/(_V88/*map*/["getMemberCode"], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["accessNotAllowd"], _V169/*par*/);;
;
}),
"getPropertyAlias": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V88/*map*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
if(_V77/*cDef*/["isVar"]){
return _V169/*par*/["property"];;
};
;
_V88/*map*/ = _V77/*cDef*/["map"];
if(((_V88/*map*/ && _V88/*map*/["members"]) && _V88/*map*/["members"][_V169/*par*/["property"]])){
return _V88/*map*/["members"][_V169/*par*/["property"]]["index"];;
};
;
return _V169/*par*/["property"];;
;
}),
"getPropertyType": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V88/*map*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
if(_V77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
_V88/*map*/ = _V77/*cDef*/["map"];
if(_V88/*map*/["members"][_V169/*par*/["property"]]){
if(_V169/*par*/["original"]){
return (_V88/*map*/["members"][_V169/*par*/["property"]]["originalType"] || _V88/*map*/["members"][_V169/*par*/["property"]]["type"]);;

}else{
return _V88/*map*/["members"][_V169/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(_V169/*par*/){
var _V77/*cDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
if(_V77/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(_V77/*cDef*/["constructorType"]){
return _V77/*cDef*/["constructorType"];;
};
;
throw _V24/*errorMsg*/["noConstructorAvailable"];
;
}),
"getSetPropertyCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V88/*map*/;
var _V178/*propertyType*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
if(_V77/*cDef*/["isVar"]){
if(! this["canSet"](this["getBuiltinType"]("var"), _V169/*par*/["valueType"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/([_V115/*MAKRO_SELF*/, "[", _V116/*MAKRO_PROPERTYVALUE*/, "] ", _V117/*MAKRO_OPERATOR*/, " ", _V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
_V88/*map*/ = _V77/*cDef*/["map"];
if((_V88/*map*/ && _V169/*par*/["property"])){
if(_V88/*map*/["members"][_V169/*par*/["property"]]){
_V178/*propertyType*/ = this["getPropertyType"]({"type": _V169/*par*/["type"],
"property": _V169/*par*/["property"]});
if(! this["canSet"](_V178/*propertyType*/, _V169/*par*/["valueType"])){
if(this["canSet"](_V178/*propertyType*/, this["getClassFromTemporaryTracked"](_V169/*par*/["valueType"]))){
return _V177/*assembleCode*/(_V88/*map*/["members"][_V169/*par*/["property"]]["setCodeFromTemporary"], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/(_V88/*map*/["members"][_V169/*par*/["property"]]["setCode"], _V169/*par*/);;
};
;
};
;
if((_V88/*map*/ && _V88/*map*/["setMemberCode"])){
if(! this["canSet"](this["getBuiltinType"]("var"), _V169/*par*/["valueType"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/(_V88/*map*/["setMemberCode"], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["accessNotAllowd"], _V169/*par*/);;
;
}),
"getConnectCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V88/*map*/;
var _V179/*valuePropertyType*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V88/*map*/ = _V77/*cDef*/["map"];
if(_V169/*par*/["valueProperty"]){
_V179/*valuePropertyType*/ = this["getPropertyType"]({"type": _V169/*par*/["valueType"],
"property": _V169/*par*/["valueProperty"]});
if(! this["canConnect"](_V169/*par*/["type"], _V169/*par*/["property"], _V179/*valuePropertyType*/)){
return _V136/*runtimeError*/(_V24/*errorMsg*/["connectNotPossible"], _V169/*par*/);;
};
;
_V169/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": _V169/*par*/["valueType"],
"property": _V169/*par*/["valueProperty"]}));;
return _V177/*assembleCode*/(_V88/*map*/["members"][_V169/*par*/["property"]]["connectSlotCode"], _V169/*par*/);;

}else{
if(! this["canConnect"](_V169/*par*/["type"], _V169/*par*/["property"], _V169/*par*/["valueType"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["connectNotPossible"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/(_V88/*map*/["members"][_V169/*par*/["property"]]["connectFunCode"], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["connectNotPossible"], _V169/*par*/);;
;
}),
"getPassAsTypeCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V180/*vcDef*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V180/*vcDef*/ = _V54/*getClass*/(_V169/*par*/["valueType"]);
if(_V169/*par*/["value"]){
if(! this["canSet"](_V169/*par*/["type"], _V169/*par*/["valueType"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
if(this["isTemporaryTrackedClass"](_V169/*par*/["type"])){
return this["getCreateTemporaryClassCode"](_V169/*par*/);;
};
;
return _V177/*assembleCode*/([_V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["missingVariable"], _V169/*par*/);;
;
}),
"getCreateTemporaryClassCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V181/*codeAr*/;
;
if(this["isTemporaryTrackedClass"](_V169/*par*/["valueType"])){
return _V177/*assembleCode*/([_V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
if(! this["isTrackedClass"](_V169/*par*/["valueType"])){
return _V177/*assembleCode*/([_V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["valueType"]);
_V181/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + _V77/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), _V118/*MAKRO_VALUE*/, ")"];
return _V177/*assembleCode*/(_V181/*codeAr*/, _V169/*par*/);;
;
}),
"getTrack": (function(_V21/*parInstance*/){
var _V79/*type*/;
var _V77/*cDef*/;
;
if(! _V21/*parInstance*/){
return;;
};
;
_V79/*type*/ = _V21/*parInstance*/[0];
_V77/*cDef*/ = _V54/*getClass*/(_V79/*type*/);
return _V21/*parInstance*/[_V77/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"getDestroyTemporaryClassCode": (function(_V169/*par*/){
var _V181/*codeAr*/;
;
if(! this["isTemporaryTrackedClass"](_V169/*par*/["valueType"])){
if(_V169/*par*/["noValueRequired"]){
return _V177/*assembleCode*/([], _V169/*par*/);;
};
;
return _V177/*assembleCode*/([_V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
_V181/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", _V118/*MAKRO_VALUE*/, ")"];
return _V177/*assembleCode*/(_V181/*codeAr*/, _V169/*par*/);;
;
}),
"dereferencePromisePreCode": (function(_V169/*par*/){
var _V181/*codeAr*/;
;
_V181/*codeAr*/ = [_V118/*MAKRO_VALUE*/, ".then("];
if(this["isTemporaryTrackedClass"](_V169/*par*/["valueType"])){
_V181/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];;
};
;
return _V177/*assembleCode*/(_V181/*codeAr*/, _V169/*par*/);;
;
}),
"dereferencePromisePostCode": (function(_V169/*par*/){
var _V181/*codeAr*/;
;
_V181/*codeAr*/ = [");\n"];
if(this["isTemporaryTrackedClass"](_V169/*par*/["valueType"])){
_V181/*codeAr*/ = [");\nreturn r;\n})(", _V118/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];;
};
;
return _V177/*assembleCode*/(_V181/*codeAr*/, _V169/*par*/);;
;
}),
"promisingReturnTypeCheck": (function(_V169/*par*/){
;
if(! this["isPromiseOfClass"](_V169/*par*/["type"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["notAPromise"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/([], _V169/*par*/);;
;
}),
"getSetVariableCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V180/*vcDef*/;
var _V182/*operator*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V180/*vcDef*/ = _V54/*getClass*/(_V169/*par*/["valueType"]);
if(_V169/*par*/["instance"]){
_V182/*operator*/ = (_V169/*par*/["operator"] || "=");
if((_V182/*operator*/ != "=")){
if(! (_V77/*cDef*/["isVar"] && _V180/*vcDef*/["isVar"])){
return _V136/*runtimeError*/(_V24/*errorMsg*/["operatorMissmatch"], _V169/*par*/);;
};
;
};
;
if(! this["canSet"](_V169/*par*/["type"], _V169/*par*/["valueType"])){
if(this["canSet"](_V169/*par*/["type"], this["getClassFromTemporaryTracked"](_V169/*par*/["valueType"]))){
if((_V169/*par*/["assignmentType"] == "Identifier")){
return _V177/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", _V115/*MAKRO_SELF*/, "){ _T", _V115/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", _V115/*MAKRO_SELF*/, " ", _V182/*operator*/, " v;\n", "_T", _V115/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", _V115/*MAKRO_SELF*/, " ", _V182/*operator*/, " undefined; ", "_T", _V115/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", _V118/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], _V169/*par*/);;
};
;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
if(this["isTrackedClass"](_V169/*par*/["type"])){
if((_V169/*par*/["assignmentType"] == "Identifier")){
return _V177/*assembleCode*/(["/*tracked assign*/(function(v){\n", "if (_T", _V115/*MAKRO_SELF*/, "){ _T", _V115/*MAKRO_SELF*/, "(); };\n", _V115/*MAKRO_SELF*/, " ", _V182/*operator*/, " v;\n", "if (v){\n", "_T", _V115/*MAKRO_SELF*/, ((" = v[" + _V180/*vcDef*/["map"]["trackRootIdx"]) + "]();\n"), "}else{\n", "_T", _V115/*MAKRO_SELF*/, " = undefined;\n", "};\n", "return v;\n", "})", "(", _V118/*MAKRO_VALUE*/, ")/*end assign*/\n"], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["typeMissmatch"], _V169/*par*/);;
};
;
return _V177/*assembleCode*/([_V115/*MAKRO_SELF*/, " ", _V182/*operator*/, " ", _V118/*MAKRO_VALUE*/], _V169/*par*/);;
};
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["missingVariable"], _V169/*par*/);;
;
}),
"declareReturnPromiseCode": (function(_V169/*par*/){
var _V183/*retType*/;
var _V25/*track*/;
var _V184/*assemblyAr*/;
;
_V183/*retType*/ = _V169/*par*/["type"];
_V25/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V183/*retType*/)){
_V25/*track*/ = true;;
_V183/*retType*/ = this["getClassFromTemporaryTracked"](_V183/*retType*/);;
};
;
if(this["isTrackedClass"](_V183/*retType*/)){
_V25/*track*/ = true;;
};
;
_V184/*assemblyAr*/;
if(_V25/*track*/){
_V184/*assemblyAr*/ = ["var ", _V169/*par*/["name"], ";\nvar _T", _V169/*par*/["name"], ";\n(function(){ var vAr = new ", _V185/*MAKRO_CONSTRUCTOR*/, "(); ", _V169/*par*/["name"], " = vAr[0]; _T", _V169/*par*/["name"], " = vAr[1]; })();"];;

}else{
_V184/*assemblyAr*/ = ["var ", _V169/*par*/["name"], " = new __Promise();\n"];;
};
;
return _V177/*assembleCode*/(_V184/*assemblyAr*/, _V169/*par*/);;
;
}),
"returnReturnPromiseCode": (function(_V169/*par*/){
var _V183/*retType*/;
var _V25/*track*/;
var _V184/*assemblyAr*/;
;
_V183/*retType*/ = _V169/*par*/["type"];
_V25/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V183/*retType*/)){
_V25/*track*/ = true;;
_V183/*retType*/ = this["getClassFromTemporaryTracked"](_V183/*retType*/);;
};
;
if(this["isTrackedClass"](_V183/*retType*/)){
_V25/*track*/ = true;;
};
;
_V184/*assemblyAr*/;
if(_V25/*track*/){
_V184/*assemblyAr*/ = ["return [", _V169/*par*/["name"], ", _T", _V169/*par*/["name"], "];\n"];;

}else{
_V184/*assemblyAr*/ = ["return ", _V169/*par*/["name"], ";\n"];;
};
;
return _V177/*assembleCode*/(_V184/*assemblyAr*/, _V169/*par*/);;
;
}),
"getDeclareVariableCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V184/*assemblyAr*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V184/*assemblyAr*/ = ["var ", _V169/*par*/["name"], ";\n"];
if(_V77/*cDef*/["track"]){
_V184/*assemblyAr*/["push"]("var _T");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"](";\n");;
};
;
return _V177/*assembleCode*/(_V184/*assemblyAr*/, _V169/*par*/);;
;
}),
"getProcessParameterCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V184/*assemblyAr*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V184/*assemblyAr*/ = [];
if(_V77/*cDef*/["track"]){
_V184/*assemblyAr*/["push"]("var _T");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"](";\n");;
_V184/*assemblyAr*/["push"]("if(");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"]("){ _T");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"](" = ");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"]("[1];\n");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"](" = ");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"]("[0];}\n");;
};
;
return _V177/*assembleCode*/(_V184/*assemblyAr*/, _V169/*par*/);;
;
}),
"getDestroyVariableCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V184/*assemblyAr*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V184/*assemblyAr*/ = [];
if(_V77/*cDef*/["track"]){
_V184/*assemblyAr*/["push"]("if (_T");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"]("){ _T");;
_V184/*assemblyAr*/["push"](_V169/*par*/["name"]);;
_V184/*assemblyAr*/["push"]("();};");;
};
;
return _V177/*assembleCode*/(_V184/*assemblyAr*/, _V169/*par*/);;
;
}),
"getCallCode": (function(_V169/*par*/){
var _V77/*cDef*/;
var _V26/*i*/;
var _V47/*l*/;
var _V186/*args*/;
var _V187/*assembly*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V169/*par*/["type"]);
_V26/*i*/;
_V47/*l*/;
_V186/*args*/;
_V187/*assembly*/;
if(_V77/*cDef*/["isVar"]){
_V186/*args*/ = _V169/*par*/["arguments"];;
_V47/*l*/ = _V186/*args*/["length"];;
_V187/*assembly*/ = [_V115/*MAKRO_SELF*/, "("];;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{if((_V26/*i*/ > 0)){
_V187/*assembly*/["push"](", ");;
};
;
_V187/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": _V186/*args*/[_V26/*i*/]["value"],
"valueType": _V186/*args*/[_V26/*i*/]["type"]});;
}};
;
_V187/*assembly*/["push"](")");;
return _V177/*assembleCode*/(_V187/*assembly*/, _V169/*par*/);;
};
;
if(! _V77/*cDef*/["isFunction"]){
return _V136/*runtimeError*/(_V24/*errorMsg*/["expectedCallable"], _V169/*par*/);;
};
;
_V186/*args*/ = _V169/*par*/["arguments"];;
_V47/*l*/ = _V186/*args*/["length"];;
_V187/*assembly*/ = [_V115/*MAKRO_SELF*/, "("];;
for(_V26/*i*/ = 0;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{if((_V26/*i*/ > 0)){
_V187/*assembly*/["push"](", ");;
};
;
_V187/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (_V77/*cDef*/["arguments"][_V26/*i*/] || this["getBuiltinType"]("var")),
"value": _V186/*args*/[_V26/*i*/]["value"],
"valueType": _V186/*args*/[_V26/*i*/]["type"]});;
}};
;
_V187/*assembly*/["push"](")");;
return _V177/*assembleCode*/(_V187/*assembly*/, _V169/*par*/);;
;
}),
"getBinaryExpressionCode": (function(_V169/*par*/){
var _V188/*lcDef*/;
var _V189/*rcDef*/;
;
_V188/*lcDef*/ = _V54/*getClass*/(_V169/*par*/["leftType"]);
_V189/*rcDef*/ = _V54/*getClass*/(_V169/*par*/["rightType"]);
if((_V188/*lcDef*/["isVar"] && _V189/*rcDef*/["isVar"])){
return _V177/*assembleCode*/(["(", _V190/*MAKRO_LEFT*/, " ", _V117/*MAKRO_OPERATOR*/, " ", _V191/*MAKRO_RIGHT*/, ")"], _V169/*par*/);;
};
;
switch (_V169/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":
return _V177/*assembleCode*/(["(", _V190/*MAKRO_LEFT*/, " ", _V117/*MAKRO_OPERATOR*/, " ", _V191/*MAKRO_RIGHT*/, ")"], _V169/*par*/);;
}
;
;
return _V136/*runtimeError*/(_V24/*errorMsg*/["operatorMissmatch"], _V169/*par*/);;
;
}),
"canSet": (function(_V192/*parTargetType*/, _V193/*parSourceType*/){
var _V194/*allOk*/;
var _V26/*i*/;
var _V47/*l*/;
var _V195/*tp*/;
var _V196/*sp*/;
;
if(((_V192/*parTargetType*/ === _V34/*undefined*/) && (_V193/*parSourceType*/ === _V34/*undefined*/))){
return true;;
};
;
if(((_V192/*parTargetType*/ === _V34/*undefined*/) || (_V193/*parSourceType*/ === _V34/*undefined*/))){
return false;;
};
;
if((_V192/*parTargetType*/ === _V193/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](_V193/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](_V192/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V192/*parTargetType*/), this["getClassFromTemporaryTracked"](_V193/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](_V192/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V192/*parTargetType*/), _V193/*parSourceType*/);;
};
;
if((((_V192/*parTargetType*/["isFunction"] && _V193/*parSourceType*/["isFunction"]) && this["canSet"](_V192/*parTargetType*/["returnType"], _V193/*parSourceType*/["returnType"])) && (_V192/*parTargetType*/["parameters"]["length"] == _V193/*parSourceType*/["parameters"]["length"]))){
_V194/*allOk*/ = true;
_V26/*i*/ = 0;
_V47/*l*/ = _V192/*parTargetType*/["parameters"]["length"];
for(_V26/*i*/;(_V26/*i*/ < _V47/*l*/);++_V26/*i*/){{_V195/*tp*/ = _V192/*parTargetType*/["parameters"][_V26/*i*/];
_V196/*sp*/ = _V193/*parSourceType*/["parameters"][_V26/*i*/];
if(! this["canSet"](_V196/*sp*/, _V195/*tp*/)){
_V194/*allOk*/ = false;;
};
;
}};
;
if(_V194/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(_V20/*parType*/, _V197/*parProperty*/, _V198/*parFunType*/){
var _V77/*cDef*/;
var _V88/*map*/;
var _V131/*mDef*/;
var _V178/*propertyType*/;
;
_V77/*cDef*/ = _V54/*getClass*/(_V20/*parType*/);
_V88/*map*/ = _V77/*cDef*/["map"];
if(_V88/*map*/["members"][_V197/*parProperty*/]){
_V131/*mDef*/ = _V88/*map*/["members"][_V197/*parProperty*/];
_V178/*propertyType*/ = this["getPropertyType"]({"type": _V20/*parType*/,
"property": _V197/*parProperty*/});
if(! this["canSet"](_V178/*propertyType*/, _V198/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](_V178/*propertyType*/) || this["isFunctionType"](_V178/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](_V198/*parFunType*/) || this["isFunctionType"](_V198/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
_V136/*runtimeError*/ = (function(_V169/*par*/, _V51/*par2*/){
;
if((_V51/*par2*/ && _V51/*par2*/["errorFun"])){
_V51/*par2*/["errorFun"](_V169/*par*/);;
};
;
return (((("(function(){ throw { id:" + _V169/*par*/["id"]) + ", msg: ") + _V199/*stringEncodeStr*/(_V169/*par*/["msg"])) + " } })()");;
;
});
_V200/*_stringEncodeStr*/ = (function(_V169/*par*/){
var _V201/*s*/;
;
_V201/*s*/ = _V169/*par*/["replace"](new _V202/*RegExp*/("\\\\", "g"), "\\\\");
_V201/*s*/ = _V201/*s*/["replace"](new _V202/*RegExp*/("\\n", "g"), "\\n");;
_V201/*s*/ = _V201/*s*/["replace"](new _V202/*RegExp*/("\\r", "g"), "\\r");;
_V201/*s*/ = _V201/*s*/["replace"](new _V202/*RegExp*/("\\\"", "g"), "\\\"");;
_V201/*s*/ = _V201/*s*/["replace"](new _V202/*RegExp*/("\\u2028", "g"), "\\u2028");;
_V201/*s*/ = _V201/*s*/["replace"](new _V202/*RegExp*/("\\u2029", "g"), "\\u2029");;
return _V201/*s*/;;
;
});
_V199/*stringEncodeStr*/ = (function(_V169/*par*/){
;
return (("\"" + _V200/*_stringEncodeStr*/(_V169/*par*/)) + "\"");;
;
});
_V177/*assembleCode*/ = (function(_V203/*ar*/, _V169/*par*/){
var _V159/*res*/;
var _V204/*resStr*/;
var _V26/*i*/;
var _V91/*r*/;
var _V206/*tempPar*/;
var _V207/*tempRes*/;
;
_V159/*res*/ = _V169/*par*/["result"];
_V204/*resStr*/ = "";
if(! _V159/*res*/){
_V159/*res*/ = {"push": (function(_V205/*parStr*/){
;
_V204/*resStr*/ += _V205/*parStr*/;;
;
})};;
};
;
_V26/*i*/ = 0;
_V91/*r*/ = "";
for(_V26/*i*/ = 0;(_V26/*i*/ < _V203/*ar*/["length"]);++_V26/*i*/){{if((typeof _V203/*ar*/[_V26/*i*/] == "string")){
_V159/*res*/["push"](_V203/*ar*/[_V26/*i*/]);;

}else{
if(_V203/*ar*/[_V26/*i*/]["_internFun"]){
_V206/*tempPar*/ = _V203/*ar*/[_V26/*i*/];
_V206/*tempPar*/["result"] = _V169/*par*/["result"];;
_V206/*tempPar*/["errorFun"] = _V169/*par*/["errorFun"];;
_V207/*tempRes*/ = _V22/*classSystem*/[_V203/*ar*/[_V26/*i*/]["_internFun"]](_V206/*tempPar*/);
if(! _V169/*par*/["result"]){
_V159/*res*/["push"](_V207/*tempRes*/);;
};
;

}else{
switch (_V203/*ar*/[_V26/*i*/]){
case _V115/*MAKRO_SELF*/:
_V159/*res*/["push"](_V169/*par*/["instance"]);;
break;;
case _V208/*MAKRO_PROPERTY*/:
_V159/*res*/["push"](_V169/*par*/["property"]);;
break;;
case _V209/*MAKRO_PROPERTYSTRING*/:
_V159/*res*/["push"](_V199/*stringEncodeStr*/(_V169/*par*/["property"]));;
break;;
case _V116/*MAKRO_PROPERTYVALUE*/:
if(_V169/*par*/["propertyValue"]){
_V159/*res*/["push"](_V169/*par*/["propertyValue"]);;

}else{
_V159/*res*/["push"](_V199/*stringEncodeStr*/(_V169/*par*/["property"]));;
};
;
break;;
case _V118/*MAKRO_VALUE*/:
_V159/*res*/["push"](_V169/*par*/["value"]);;
break;;
case _V137/*MAKRO_VALUEPROPERTY*/:
_V159/*res*/["push"](_V169/*par*/["valueProperty"]);;
break;;
case _V190/*MAKRO_LEFT*/:
_V159/*res*/["push"](_V169/*par*/["left"]);;
break;;
case _V191/*MAKRO_RIGHT*/:
_V159/*res*/["push"](_V169/*par*/["right"]);;
break;;
case _V117/*MAKRO_OPERATOR*/:
_V159/*res*/["push"](_V169/*par*/["operator"]);;
break;;
case _V210/*MAKRO_RESOLVEFUN*/:
_V159/*res*/["push"]((_V169/*par*/["resolveFun"] || "undefined"));;
break;;
case _V211/*MAKRO_REJECTFUN*/:
_V159/*res*/["push"]((_V169/*par*/["rejectFun"] || "undefined"));;
break;;
case _V212/*MAKRO_TYPEVALUE*/:
_V159/*res*/["push"](_V169/*par*/["typeValue"]);;
break;;
case _V185/*MAKRO_CONSTRUCTOR*/:
_V159/*res*/["push"](_V169/*par*/["constructorName"]);;
break;;
}
;
;
};
};
;
}};
;
if(_V169/*par*/["result"]){
return _V159/*res*/;;
};
;
return _V204/*resStr*/;;
;
});
_V115/*MAKRO_SELF*/ = 0;
_V208/*MAKRO_PROPERTY*/ = 1;
_V209/*MAKRO_PROPERTYSTRING*/ = 2;
_V116/*MAKRO_PROPERTYVALUE*/ = 3;
_V118/*MAKRO_VALUE*/ = 4;
_V190/*MAKRO_LEFT*/ = 5;
_V117/*MAKRO_OPERATOR*/ = 6;
_V191/*MAKRO_RIGHT*/ = 7;
_V137/*MAKRO_VALUEPROPERTY*/ = 8;
_V210/*MAKRO_RESOLVEFUN*/ = 9;
_V211/*MAKRO_REJECTFUN*/ = 10;
_V212/*MAKRO_TYPEVALUE*/ = 11;
_V185/*MAKRO_CONSTRUCTOR*/ = 12;
_V24/*errorMsg*/ = {"accessNotAllowd": {"id": 200,
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
_V213/*promiseland*/["classSystem"] = _V22/*classSystem*/;;
_V7/*extra*/["classSystemPs"]["resolve"]({"classSystem": _V22/*classSystem*/,
"internalObjects": _V61/*internalObjects*/,
"getClassBySyncId": _V75/*getClassBySyncId*/,
"DynInstance": _V28/*DynInstance*/});;
return _V22/*classSystem*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();