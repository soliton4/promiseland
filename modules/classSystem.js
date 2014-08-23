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
if (promiseland._hasModule({ hashStr: "0b6785960a96900c55fbc9b4c3d950a3" })){ return promiseland._getModule("0b6785960a96900c55fbc9b4c3d950a3"); };
var _V7/*extra*/;try{_V7/*extra*/ = extra;}catch(e){};
var _V30/*undefined*/;try{_V30/*undefined*/ = undefined;}catch(e){};
var _V76/*Promise*/;try{_V76/*Promise*/ = Promise;}catch(e){};
var _V200/*RegExp*/;try{_V200/*RegExp*/ = RegExp;}catch(e){};
var _V211/*promiseland*/;try{_V211/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*getModuleData*/;
var _V9/*Tracker*/;
var _V14/*Chainable*/;
var _V24/*Instance*/;
var _V25/*TrackedPromise*/;
var _V50/*_ClassToken*/;
var _V51/*_actClass*/;
var _V52/*getClass*/;
var _V54/*classHider*/;
var _V56/*builtinTypes*/;
var _V57/*nextInternalId*/;
var _V58/*getNewInternalId*/;
var _V59/*internalObjects*/;
var _V60/*syncFun*/;
var _V66/*destroySynced*/;
var _V69/*registerSyncClass*/;
var _V73/*getClassBySyncId*/;
var _V22/*classSystem*/;
var _V135/*runtimeError*/;
var _V198/*_stringEncodeStr*/;
var _V197/*stringEncodeStr*/;
var _V175/*assembleCode*/;
var _V114/*MAKRO_SELF*/;
var _V206/*MAKRO_PROPERTY*/;
var _V207/*MAKRO_PROPERTYSTRING*/;
var _V115/*MAKRO_PROPERTYVALUE*/;
var _V117/*MAKRO_VALUE*/;
var _V188/*MAKRO_LEFT*/;
var _V116/*MAKRO_OPERATOR*/;
var _V189/*MAKRO_RIGHT*/;
var _V136/*MAKRO_VALUEPROPERTY*/;
var _V208/*MAKRO_RESOLVEFUN*/;
var _V209/*MAKRO_REJECTFUN*/;
var _V210/*MAKRO_TYPEVALUE*/;
var _V183/*MAKRO_CONSTRUCTOR*/;
var _V23/*errorMsg*/;
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
_V24/*Instance*/ = (function(){var _V19/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V20/*parType*/, _V21/*parInstance*/){
;
if(! _V20/*parType*/){
_V20/*parType*/ = _V22/*classSystem*/["getTypeFromInstance"](_V21/*parInstance*/);;
};
;
this["type"] = _V20/*parType*/;;
this["instance"] = _V21/*parInstance*/;;
this["realInstance"] = this["instance"];;
this["realType"] = _V20/*parType*/;;
if(_V22/*classSystem*/["isVar"](_V20/*parType*/)){
return;;
};
;
if(_V22/*classSystem*/["isTemporaryTrackedClass"](_V20/*parType*/)){
this["realType"] = _V22/*classSystem*/["getClassFromTemporaryTracked"](_V20/*parType*/);;
};
;
if(_V22/*classSystem*/["isTrackedClass"](this["realType"])){
this["realInstance"] = this["instance"][0];;
this["track"] = this["instance"][1];;
this["_isTrack"] = true;;

}else{
this["track"] = (function(){
;
;
});;
};
;
this["realType"] = _V22/*classSystem*/["getTypeFromInstance"](this["realInstance"]);;
;
}),
"getInternalId": (function(){
;
return _V22/*classSystem*/["getInternalId"](this["realInstance"]);;
;
}),
"getTrack": (function(){
;
if(this["_isTrack"]){
return _V22/*classSystem*/["getTrack"](this["realInstance"]);;
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
return _V22/*classSystem*/["isServe"](this["realType"]);;
;
}),
"takeOver": (function(){
;
if(this["takenOver"]){
throw _V23/*errorMsg*/["takeOverDuplicate"];
};
;
this["takenOver"] = true;;
this["track"] = (function(){
;
;
});;
return this["instance"];;
;
})}, [], _V19/*inherited*/);
return res; })();_V24/*Instance*/;;
_V25/*TrackedPromise*/ = (function(_V26/*parTrackFun*/){
var _V27/*self*/;
var _V28/*lifeLine*/;
var _V29/*destroyFun*/;
var _V31/*t*/;
var _V32/*tracker*/;
var _V33/*rootTrack*/;
var _V34/*thenAr*/;
var _V35/*elseAr*/;
var _V36/*thenFun*/;
var _V39/*thenReuseFun*/;
;
_V27/*self*/ = this;
_V28/*lifeLine*/;
_V29/*destroyFun*/ = (function(){
;
if(_V28/*lifeLine*/){
_V28/*lifeLine*/();;
_V28/*lifeLine*/ = _V30/*undefined*/;;

}else{
_V27/*self*/["then"]((function(){
;
if(_V28/*lifeLine*/){
_V28/*lifeLine*/();;
_V28/*lifeLine*/ = _V30/*undefined*/;;
};
;
;
}));;
};
;
;
});
_V31/*t*/ = _V9/*Tracker*/(_V29/*destroyFun*/);
_V32/*tracker*/ = _V31/*t*/[0];
this["rootTrack"] = _V31/*t*/[1];;
this["memberTrack"] = _V31/*t*/[2];;
_V33/*rootTrack*/ = this["rootTrack"];
_V34/*thenAr*/ = [];
_V35/*elseAr*/ = [];
_V36/*thenFun*/ = (function(_V37/*parThenFun*/, _V38/*parElseFun*/){
;
if(_V37/*parThenFun*/){
_V34/*thenAr*/["push"]([_V37/*parThenFun*/, _V33/*rootTrack*/()]);;
};
;
if(_V38/*parElseFun*/){
_V35/*elseAr*/["push"](_V38/*parElseFun*/);;
};
;
;
});
_V39/*thenReuseFun*/ = (function(_V40/*parReuse*/, _V37/*parThenFun*/, _V38/*parElseFun*/){
;
if(_V37/*parThenFun*/){
_V34/*thenAr*/["push"]([_V37/*parThenFun*/, _V40/*parReuse*/]);;

}else{
_V40/*parReuse*/();;
};
;
if(_V38/*parElseFun*/){
_V35/*elseAr*/["push"](_V38/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(_V41/*value*/){
var _V42/*realValue*/;
var _V44/*i*/;
var _V45/*l*/;
var _V46/*entryAr*/;
;
if(_V41/*value*/){
_V42/*realValue*/ = _V41/*value*/[0];
_V28/*lifeLine*/ = _V26/*parTrackFun*/(_V41/*value*/, _V32/*tracker*/);;
_V41/*value*/ = _V42/*realValue*/;;
};
;
_V36/*thenFun*/ = (function(_V37/*parThenFun*/){
;
if(_V37/*parThenFun*/){
try
{_V37/*parThenFun*/([_V41/*value*/, _V33/*rootTrack*/()]);;
}catch(_V43/*e*/){};
;
};
;
;
});;
_V39/*thenReuseFun*/ = (function(_V40/*parReuse*/, _V37/*parThenFun*/){
;
if(_V37/*parThenFun*/){
try
{_V37/*parThenFun*/([_V41/*value*/, _V40/*parReuse*/]);;
}catch(_V43/*e*/){};
;

}else{
_V40/*parReuse*/();;
};
;
;
});;
if(! _V34/*thenAr*/){
return;;
};
_V44/*i*/ = 0;
_V45/*l*/ = _V34/*thenAr*/["length"];
for(_V44/*i*/;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{try
{_V46/*entryAr*/ = _V34/*thenAr*/[_V44/*i*/];
_V46/*entryAr*/[0]([_V41/*value*/, _V46/*entryAr*/[1]]);;
}catch(_V43/*e*/){};
;
}};
;
_V34/*thenAr*/ = _V30/*undefined*/;;
_V35/*elseAr*/ = _V30/*undefined*/;;
this["resolve"] = _V30/*undefined*/;;
this["reject"] = _V30/*undefined*/;;
;
});;
this["reject"] = (function(_V41/*value*/){
var _V44/*i*/;
var _V45/*l*/;
;
_V36/*thenFun*/ = (function(_V47/*u*/, _V38/*parElseFun*/){
;
if(_V38/*parElseFun*/){
try
{_V38/*parElseFun*/(_V41/*value*/);;
}catch(_V43/*e*/){};
;
};
;
;
});;
_V39/*thenReuseFun*/ = (function(_V40/*parReuse*/, _V47/*u*/, _V38/*parElseFun*/){
;
_V40/*parReuse*/();;
if(_V38/*parElseFun*/){
try
{_V38/*parElseFun*/(_V41/*value*/);;
}catch(_V43/*e*/){};
;
};
;
;
});;
if(! _V35/*elseAr*/){
return;;
};
_V44/*i*/ = 0;
_V45/*l*/ = _V35/*elseAr*/["length"];
for(_V44/*i*/;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{try
{_V35/*elseAr*/[_V44/*i*/](_V41/*value*/);;
}catch(_V43/*e*/){};
}};
;
_V34/*thenAr*/ = _V30/*undefined*/;;
_V35/*elseAr*/ = _V30/*undefined*/;;
this["resolve"] = _V30/*undefined*/;;
this["reject"] = _V30/*undefined*/;;
;
});;
this["then"] = (function(_V48/*par1*/, _V49/*par2*/){
;
_V36/*thenFun*/(_V48/*par1*/, _V49/*par2*/);;
;
});;
this["thenReuse"] = (function(_V40/*parReuse*/, _V48/*par1*/, _V49/*par2*/){
;
_V39/*thenReuseFun*/(_V40/*parReuse*/, _V48/*par1*/, _V49/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
this["then"]["thenReuse"] = this["thenReuse"];;
;
});
_V50/*_ClassToken*/;
_V51/*_actClass*/;
_V52/*getClass*/ = (function(_V53/*cf*/){
;
_V51/*_actClass*/ = _V30/*undefined*/;;
_V53/*cf*/();;
return _V51/*_actClass*/;;
;
});
_V54/*classHider*/ = (function(_V55/*toHide*/){
;
return (function(){
;
_V51/*_actClass*/ = _V55/*toHide*/;;
;
});;
;
});
_V56/*builtinTypes*/ = {"var": _V54/*classHider*/({"isVar": true,
"isReady": true}),
"statement": _V54/*classHider*/({"isStatement": true,
"isReady": true})};
_V57/*nextInternalId*/ = 1;
_V58/*getNewInternalId*/ = (function(){
;
return _V57/*nextInternalId*/++;;
;
});
_V59/*internalObjects*/ = {};
_V60/*syncFun*/ = (function(_V21/*parInstance*/, _V61/*memberIdx*/, _V62/*mType*/, _V41/*value*/){
var _V63/*syncData*/;
var _V44/*i*/;
var _V64/*transport*/;
var _V65/*m*/;
;
_V63/*syncData*/ = _V22/*classSystem*/["getSyncData"](_V21/*parInstance*/);
if(_V63/*syncData*/){
_V44/*i*/ = 0;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V63/*syncData*/["transports"]["length"]);++_V44/*i*/){{_V64/*transport*/ = _V63/*syncData*/["transports"][_V44/*i*/];
_V65/*m*/ = _V64/*transport*/["newMessage"]();
_V65/*m*/["setData"]({"type": "sync",
"remoteId": _V64/*transport*/["getInstanceRemoteId"](_V21/*parInstance*/),
"memberIdx": _V61/*memberIdx*/,
"value": _V41/*value*/});;
_V65/*m*/["send"]();;
}};
;
};
;
;
});
_V66/*destroySynced*/ = (function(_V67/*parSyncData*/){
var _V63/*syncData*/;
var _V68/*transports*/;
var _V44/*i*/;
var _V31/*t*/;
;
if(! _V67/*parSyncData*/){
return;;
};
;
_V63/*syncData*/ = _V67/*parSyncData*/;
_V68/*transports*/ = _V63/*syncData*/["transports"]["slice"]();
_V44/*i*/;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V68/*transports*/["length"]);++_V44/*i*/){{_V31/*t*/ = _V68/*transports*/[_V44/*i*/];
_V31/*t*/["removeInstance"](_V63/*syncData*/["getInternalId"]());;
}};
;
;
});
_V69/*registerSyncClass*/ = (function(_V70/*hashStr*/, _V71/*nameStr*/, _V20/*parType*/){
var _V72/*moduleData*/;
;
_V72/*moduleData*/ = _V2/*getModuleData*/(_V70/*hashStr*/);
_V72/*moduleData*/["classes"][_V71/*nameStr*/] = {"type": _V20/*parType*/};;
;
});
_V73/*getClassBySyncId*/ = (function(_V74/*parSyncId*/){
var _V72/*moduleData*/;
;
_V72/*moduleData*/ = _V2/*getModuleData*/(_V74/*parSyncId*/["hash"]);
if((_V72/*moduleData*/ && _V72/*moduleData*/["classes"][_V74/*parSyncId*/["name"]])){
return _V72/*moduleData*/["classes"][_V74/*parSyncId*/["name"]]["type"];;
};
;
;
});
_V22/*classSystem*/ = {"_createProvisionalClass": (function(){
var _V75/*cDef*/;
var _V53/*cf*/;
;
_V75/*cDef*/ = {"provisional": true,
"promise": new _V76/*Promise*/(),
"type": _V30/*undefined*/};
_V75/*cDef*/["promise"]["then"]((function(_V77/*type*/){
;
_V75/*cDef*/["type"] = _V77/*type*/;;
;
}));;
_V53/*cf*/ = _V54/*classHider*/(_V75/*cDef*/);
return _V53/*cf*/;;
;
}),
"_resolveProvisional": (function(_V20/*parType*/, _V78/*parResult*/){
var _V27/*self*/;
var _V79/*typeDef*/;
var _V80/*resultDef*/;
;
_V27/*self*/ = this;
_V79/*typeDef*/ = _V52/*getClass*/(_V20/*parType*/);
_V80/*resultDef*/ = _V52/*getClass*/(_V78/*parResult*/);
if(_V80/*resultDef*/["provisional"]){
_V80/*resultDef*/["promise"]["then"]((function(_V81/*result*/){
;
_V27/*self*/["resolveProvisional"](_V20/*parType*/, _V81/*result*/);;
;
}));;

}else{
_V79/*typeDef*/["promise"]["resolve"](_V78/*parResult*/);;
};
;
;
}),
"isProvisional": (function(_V20/*parType*/){
var _V79/*typeDef*/;
;
_V79/*typeDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V79/*typeDef*/["provisional"]){
return true;;
};
;
return false;;
;
}),
"definitionPromise": (function(_V20/*parType*/){
var _V79/*typeDef*/;
var _V82/*p*/;
;
_V79/*typeDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V79/*typeDef*/["provisional"]){
return _V79/*typeDef*/["promise"];;
};
;
_V82/*p*/ = new _V76/*Promise*/();
_V82/*p*/["resolve"](_V20/*parType*/);;
return _V82/*p*/;;
;
}),
"readyPromise": (function(_V83/*_parType*/){
var _V82/*p*/;
;
_V82/*p*/ = new _V76/*Promise*/();
this["definitionPromise"](_V83/*_parType*/)["then"]((function(_V20/*parType*/){
var _V79/*typeDef*/;
;
_V79/*typeDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V79/*typeDef*/["isReady"]){
_V82/*p*/["resolve"](_V20/*parType*/);;
return;;
};
;
_V79/*typeDef*/["readyPromise"]["then"]((function(_V20/*parType*/){
;
_V82/*p*/["resolve"](_V20/*parType*/);;
;
}));;
return;;
;
}));;
return _V82/*p*/;;
;
}),
"_createTemporaryTrackedClass": (function(_V20/*parType*/){
var _V27/*self*/;
var _V84/*pr*/;
var _V75/*cDef*/;
var _V53/*cf*/;
;
_V27/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V84/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V85/*parDefinedClass*/){
;
_V27/*self*/["_resolveProvisional"](_V84/*pr*/, _V27/*self*/["_createTemporaryTrackedClass"](_V85/*parDefinedClass*/));;
;
}));;
return _V84/*pr*/;;
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
_V75/*cDef*/ = {"temporaryTracked": true,
"type": _V20/*parType*/,
"isReady": false,
"readyPromise": new _V76/*Promise*/()};
_V53/*cf*/ = _V54/*classHider*/(_V75/*cDef*/);
_V27/*self*/["readyPromise"](_V20/*parType*/)["then"]((function(){
;
_V75/*cDef*/["ready"] = true;;
_V75/*cDef*/["readyPromise"]["resolve"](_V53/*cf*/);;
;
}));;
return _V53/*cf*/;;
;
}),
"isSyncedClass": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["sync"]){
return true;;
};
;
return false;;
;
}),
"isTemporaryTrackedClass": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["temporaryTracked"]){
return true;;
};
;
return false;;
;
}),
"isServe": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["syncServe"]){
return true;;
};
;
return false;;
;
}),
"getClassFromTemporaryTracked": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
if(this["isTemporaryTrackedClass"](_V20/*parType*/)){
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
return _V75/*cDef*/["type"];;
};
;
return _V20/*parType*/;;
;
}),
"_createPromiseOfClass": (function(_V20/*parType*/){
var _V27/*self*/;
var _V84/*pr*/;
var _V86/*track*/;
var _V87/*map*/;
var _V75/*cDef*/;
var _V53/*cf*/;
var _V88/*pcDef*/;
var _V89/*memberTrackMemberIdx*/;
;
_V27/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V84/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V85/*parDefinedClass*/){
;
_V27/*self*/["_resolveProvisional"](_V84/*pr*/, _V27/*self*/["_createPromiseOfClass"](_V85/*parDefinedClass*/));;
;
}));;
return _V84/*pr*/;;
};
;
if(this["isVar"](_V20/*parType*/)){
return _V20/*parType*/;;
};
;
_V86/*track*/ = false;
if(this["isTrackedClass"](_V20/*parType*/)){
_V86/*track*/ = true;;
};
;
_V87/*map*/ = {};
_V75/*cDef*/ = {"promiseOf": true,
"type": _V20/*parType*/,
"isReady": true,
"readyPromise": new _V76/*Promise*/(),
"track": _V86/*track*/,
"map": _V87/*map*/};
_V53/*cf*/ = _V54/*classHider*/(_V75/*cDef*/);
if(_V86/*track*/){
_V75/*cDef*/["map"]["trackRootIdx"] = "rootTrack";;
_V75/*cDef*/["map"]["trackMemberIdx"] = "memberTrack";;
_V88/*pcDef*/ = _V52/*getClass*/(_V20/*parType*/);
_V89/*memberTrackMemberIdx*/ = _V88/*pcDef*/["map"]["trackMemberIdx"];
_V75/*cDef*/["constructor"] = (function(){
var _V90/*r*/;
;
_V90/*r*/ = new _V25/*TrackedPromise*/((function(_V91/*parTempValue*/, _V92/*parTracker*/){
var _V93/*v*/;
var _V45/*l*/;
;
_V93/*v*/ = _V91/*parTempValue*/[0];
_V45/*l*/ = _V93/*v*/[_V89/*memberTrackMemberIdx*/](_V92/*parTracker*/);
_V91/*parTempValue*/[1]();;
return _V45/*l*/;;
;
}));
return [_V90/*r*/, _V90/*r*/["rootTrack"]()];;
;
});;

}else{
_V75/*cDef*/["constructor"] = _V76/*Promise*/;;
};
;
_V75/*cDef*/["readyPromise"]["resolve"](_V53/*cf*/);;
return _V53/*cf*/;;
;
}),
"isPromiseOfClass": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["promiseOf"]){
return true;;
};
;
return false;;
;
}),
"getClassFromPromiseOf": (function(_V20/*parType*/){
var _V27/*self*/;
var _V84/*pr*/;
var _V75/*cDef*/;
;
_V27/*self*/ = this;
if(this["isProvisional"](_V20/*parType*/)){
_V84/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V20/*parType*/)["then"]((function(_V85/*parDefinedClass*/){
;
_V27/*self*/["_resolveProvisional"](_V84/*pr*/, _V27/*self*/["getClassFromPromiseOf"](_V85/*parDefinedClass*/));;
;
}));;
return _V84/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V20/*parType*/)){
return this["getClassFromPromiseOf"](this["getClassFromTemporaryTracked"](_V20/*parType*/));;
};
;
if(this["isPromiseOfClass"](_V20/*parType*/)){
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
return this["_createTemporaryTrackedClass"](_V75/*cDef*/["type"]);;
};
;
return _V20/*parType*/;;
;
}),
"isSameType": (function(_V94/*type1*/, _V95/*type2*/){
var _V96/*cDef1*/;
var _V97/*cDef2*/;
;
if((_V94/*type1*/ === _V95/*type2*/)){
return true;;
};
;
_V96/*cDef1*/ = _V52/*getClass*/(_V94/*type1*/);
if(_V96/*cDef1*/["provisional"]){
if(! _V96/*cDef1*/["type"]){
return false;;
};
;
_V94/*type1*/ = _V96/*cDef1*/["type"];;
_V96/*cDef1*/ = _V52/*getClass*/(_V94/*type1*/);;
};
;
_V97/*cDef2*/ = _V52/*getClass*/(_V95/*type2*/);
if(_V97/*cDef2*/["provisional"]){
if(! _V97/*cDef2*/["type"]){
return false;;
};
;
_V95/*type2*/ = _V97/*cDef2*/["type"];;
_V97/*cDef2*/ = _V52/*getClass*/(_V95/*type2*/);;
};
;
if((_V94/*type1*/ === _V95/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(_V98/*classLiteral*/, _V99/*parDefaults*/){
var _V27/*self*/;
;
_V27/*self*/ = this;
return _V27/*self*/["_createClass"](_V98/*classLiteral*/, _V99/*parDefaults*/);;
;
}),
"_membersDefined": (function(_V98/*classLiteral*/){
var _V27/*self*/;
var _V100/*cnt*/;
var _V101/*retPs*/;
var _V102/*check*/;
var _V103/*addMember*/;
var _V44/*i*/;
;
_V27/*self*/ = this;
_V100/*cnt*/ = 1;
_V101/*retPs*/ = new _V76/*Promise*/();
_V102/*check*/ = (function(){
;
if(_V100/*cnt*/){
return;;
};
;
_V101/*retPs*/["resolve"](_V98/*classLiteral*/);;
;
});
_V103/*addMember*/ = (function(_V65/*m*/){
;
++_V100/*cnt*/;;
_V27/*self*/["definitionPromise"](_V65/*m*/["type"])["then"]((function(_V104/*definedType*/){
;
_V65/*m*/["type"] = _V104/*definedType*/;;
--_V100/*cnt*/;;
_V102/*check*/();;
;
}));;
;
});
if(_V98/*classLiteral*/["members"]){
_V44/*i*/ = 0;
for(_V44/*i*/;(_V44/*i*/ < _V98/*classLiteral*/["members"]["length"]);++_V44/*i*/){{_V103/*addMember*/(_V98/*classLiteral*/["members"][_V44/*i*/]);;
}};
;
};
;
--_V100/*cnt*/;;
_V102/*check*/();;
return _V101/*retPs*/;;
;
}),
"_createClass": (function(_V98/*classLiteral*/, _V99/*parDefaults*/){
var _V105/*cAr*/;
var _V27/*self*/;
var _V87/*map*/;
var _V75/*cDef*/;
var _V53/*cf*/;
var _V106/*sync*/;
var _V107/*syncAll*/;
var _V108/*syncCnt*/;
var _V109/*trackerIdx*/;
var _V110/*trackRootIdx*/;
var _V111/*trackMemberIdx*/;
var _V113/*freepart*/;
var _V118/*helpAr*/;
var _V119/*makeHelpAr*/;
var _V120/*conIdx*/;
var _V126/*constructorDef*/;
var _V127/*constructorFun*/;
var _V128/*destroyDef*/;
var _V29/*destroyFun*/;
var _V129/*untrackIdxAr*/;
var _V103/*addMember*/;
var _V137/*createMembersPs*/;
var _V139/*memberPs*/;
var _V44/*i*/;
var _V140/*proto*/;
var _V141/*freeFun*/;
var _V142/*f*/;
var _V143/*finalPs*/;
;
_V105/*cAr*/ = [];
_V27/*self*/ = this;
_V87/*map*/ = {"members": {},
"extends": []};
_V75/*cDef*/ = {"constructor": _V30/*undefined*/,
"map": _V87/*map*/,
"isReady": false,
"track": ((_V98/*classLiteral*/["track"] || _V98/*classLiteral*/["sync"]) ? true : false),
"sync": _V98/*classLiteral*/["sync"],
"readyPromise": new _V76/*Promise*/(),
"syncMembers": []};
_V53/*cf*/ = _V54/*classHider*/(_V75/*cDef*/);
if(_V75/*cDef*/["sync"]){
if(_V75/*cDef*/["sync"]["serve"]){
_V75/*cDef*/["syncServe"] = true;;
};
;
};
;
_V105/*cAr*/["push"](_V53/*cf*/);;
_V106/*sync*/ = (_V98/*classLiteral*/["sync"] ? true : false);
_V107/*syncAll*/ = false;
if(_V106/*sync*/){
if(_V98/*classLiteral*/["sync"]["all"]){
_V107/*syncAll*/ = true;;
};
;
};
;
_V108/*syncCnt*/ = 0;
_V109/*trackerIdx*/;
_V110/*trackRootIdx*/;
_V111/*trackMemberIdx*/;
if(_V75/*cDef*/["track"]){
_V87/*map*/["trackerIdx"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V30/*undefined*/);;
_V87/*map*/["trackRootIdx"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V30/*undefined*/);;
_V87/*map*/["trackMemberIdx"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V30/*undefined*/);;
_V109/*trackerIdx*/ = _V87/*map*/["trackerIdx"];;
_V110/*trackRootIdx*/ = _V87/*map*/["trackRootIdx"];;
_V111/*trackMemberIdx*/ = _V87/*map*/["trackMemberIdx"];;
};
;
if(_V106/*sync*/){
_V87/*map*/["syncDataIdx"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"]((function(){
var _V27/*self*/;
var _V112/*internalId*/;
var _V63/*syncData*/;
;
_V27/*self*/ = this;
_V112/*internalId*/;
_V63/*syncData*/ = {"getInternalId": (function(){
;
if(_V112/*internalId*/){
return _V112/*internalId*/;;
};
;
_V112/*internalId*/ = _V58/*getNewInternalId*/();;
_V59/*internalObjects*/[_V112/*internalId*/] = _V27/*self*/;;
return _V112/*internalId*/;;
;
}),
"transports": []};
this[_V87/*map*/["syncDataIdx"]] = (function(){
;
return _V63/*syncData*/;;
;
});;
return _V63/*syncData*/;;
;
}));;
};
;
if(_V98/*classLiteral*/["hasFreePart"]){
_V113/*freepart*/ = {};
_V87/*map*/["freePart"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V113/*freepart*/);;
_V87/*map*/["getMemberCode"] = [_V114/*MAKRO_SELF*/, (("[" + _V87/*map*/["freePart"]) + "]["), _V115/*MAKRO_PROPERTYVALUE*/, "]"];;
_V87/*map*/["setMemberCode"] = [_V114/*MAKRO_SELF*/, (("[" + _V87/*map*/["freePart"]) + "]["), _V115/*MAKRO_PROPERTYVALUE*/, "] ", _V116/*MAKRO_OPERATOR*/, " ", _V117/*MAKRO_VALUE*/];;
};
;
_V118/*helpAr*/ = [];
_V119/*makeHelpAr*/ = (function(){
;
return _V118/*helpAr*/["slice"]();;
;
});
_V87/*map*/["connectIdx"] = _V105/*cAr*/["length"];;
_V120/*conIdx*/ = _V87/*map*/["connectIdx"];
_V105/*cAr*/["push"]((function(){
var _V118/*helpAr*/;
var _V125/*arguments*/ = arguments;
;
_V118/*helpAr*/ = _V119/*makeHelpAr*/();
this[_V120/*conIdx*/] = (function(_V121/*idx*/, _V122/*fun*/, _V123/*base*/){
var _V124/*chain*/;
;
_V124/*chain*/ = _V118/*helpAr*/[_V121/*idx*/];
if(! _V124/*chain*/){
_V124/*chain*/ = _V14/*Chainable*/(this, _V121/*idx*/);;
_V118/*helpAr*/[_V121/*idx*/] = _V124/*chain*/;;
};
;
return _V124/*chain*/(_V122/*fun*/, _V123/*base*/);;
;
});;
return this[_V120/*conIdx*/]["apply"](this, _V125/*arguments*/);;
;
}));;
_V126/*constructorDef*/;
_V127/*constructorFun*/;
_V128/*destroyDef*/;
_V29/*destroyFun*/;
_V129/*untrackIdxAr*/ = [];
_V103/*addMember*/ = (function(_V65/*m*/){
var _V130/*mDef*/;
var _V62/*mType*/;
var _V61/*memberIdx*/;
var _V131/*isTrackedMember*/;
var _V133/*def*/;
var _V134/*mCDef*/;
var _V89/*memberTrackMemberIdx*/;
;
_V130/*mDef*/ = {"index": _V105/*cAr*/["length"]};
if((_V107/*syncAll*/ || _V65/*m*/["sync"])){
_V130/*mDef*/["sync"] = true;;
};
;
_V130/*mDef*/["type"] = _V65/*m*/["type"];;
_V62/*mType*/ = _V65/*m*/["type"];
_V61/*memberIdx*/ = _V130/*mDef*/["index"];
_V131/*isTrackedMember*/ = _V27/*self*/["isTrackedClass"](_V130/*mDef*/["type"]);
if(_V130/*mDef*/["sync"]){
_V130/*mDef*/["hasSetter"] = true;;
if(_V131/*isTrackedMember*/){
_V130/*mDef*/["defaultSetter"] = (function(_V132/*vAr*/){
;
_V60/*syncFun*/(this, _V61/*memberIdx*/, _V62/*mType*/, _V132/*vAr*/[0]);;
return _V132/*vAr*/;;
;
});;

}else{
_V130/*mDef*/["defaultSetter"] = (function(_V93/*v*/){
;
_V60/*syncFun*/(this, _V61/*memberIdx*/, _V62/*mType*/, _V93/*v*/);;
return _V93/*v*/;;
;
});;
};
;
_V75/*cDef*/["syncMembers"]["push"](_V130/*mDef*/);;
};
;
_V87/*map*/["members"][_V65/*m*/["name"]] = _V130/*mDef*/;;
_V133/*def*/ = (_V99/*parDefaults*/ ? _V99/*parDefaults*/[_V65/*m*/["name"]] : _V30/*undefined*/);
_V105/*cAr*/["push"](_V133/*def*/);;
if(_V130/*mDef*/["hasSetter"]){
_V130/*mDef*/["setterIdx"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V130/*mDef*/["defaultSetter"]);;
};
;
if((_V65/*m*/["name"] == "constructor")){
_V126/*constructorDef*/ = _V130/*mDef*/;;
_V127/*constructorFun*/ = _V133/*def*/;;
};
;
if((_V65/*m*/["name"] == "destroy")){
_V128/*destroyDef*/ = _V130/*mDef*/;;
_V29/*destroyFun*/ = _V133/*def*/;;
};
;
_V130/*mDef*/["getCode"] = [_V114/*MAKRO_SELF*/, (("[" + _V130/*mDef*/["index"]) + "]")];;
if(_V130/*mDef*/["hasSetter"]){
_V130/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + _V130/*mDef*/["setterIdx"]) + "](v); s[") + _V130/*mDef*/["index"]) + "] "), _V116/*MAKRO_OPERATOR*/, " v; return v; })(", _V114/*MAKRO_SELF*/, ", ", _V117/*MAKRO_VALUE*/, ")"];;

}else{
_V130/*mDef*/["setCode"] = [_V114/*MAKRO_SELF*/, (("[" + _V130/*mDef*/["index"]) + "] "), _V116/*MAKRO_OPERATOR*/, " ", _V117/*MAKRO_VALUE*/];;
};
;
if(_V131/*isTrackedMember*/){
_V134/*mCDef*/ = _V52/*getClass*/(_V130/*mDef*/["type"]);
_V89/*memberTrackMemberIdx*/ = _V134/*mCDef*/["map"]["trackMemberIdx"];
_V130/*mDef*/["trackIndex"] = _V105/*cAr*/["length"];;
_V105/*cAr*/["push"](_V30/*undefined*/);;
_V129/*untrackIdxAr*/["push"](_V130/*mDef*/["trackIndex"]);;
if(_V75/*cDef*/["track"]){
if(_V130/*mDef*/["hasSetter"]){
_V130/*mDef*/["setCode"] = [_V135/*runtimeError*/(_V23/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V130/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + _V130/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + _V130/*mDef*/["index"]) + "] "), _V116/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V130/*mDef*/["trackIndex"]) + "]){ s[") + _V130/*mDef*/["trackIndex"]) + "](); }; s[") + _V130/*mDef*/["trackIndex"]) + "] = v[") + _V89/*memberTrackMemberIdx*/) + "](s[") + _V109/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V114/*MAKRO_SELF*/, ", ", _V117/*MAKRO_VALUE*/, ")"];;

}else{
_V130/*mDef*/["setCode"] = [(("(function(s, v){ s[" + _V130/*mDef*/["index"]) + "] "), _V116/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V130/*mDef*/["trackIndex"]) + "]){ s[") + _V130/*mDef*/["trackIndex"]) + "](); }; s[") + _V130/*mDef*/["trackIndex"]) + "] = v[") + _V89/*memberTrackMemberIdx*/) + "](s[") + _V109/*trackerIdx*/) + "]); return v; })("), _V114/*MAKRO_SELF*/, ", ", _V117/*MAKRO_VALUE*/, ")"];;
_V130/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + _V130/*mDef*/["index"]) + "] "), _V116/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V130/*mDef*/["trackIndex"]) + "]){ s[") + _V130/*mDef*/["trackIndex"]) + "](); }; s[") + _V130/*mDef*/["trackIndex"]) + "] = v[") + _V89/*memberTrackMemberIdx*/) + "](s[") + _V109/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V114/*MAKRO_SELF*/, ", ", _V117/*MAKRO_VALUE*/, ")"];;
};
;

}else{
_V130/*mDef*/["setCode"] = [_V135/*runtimeError*/(_V23/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V130/*mDef*/["setCodeFromTemporary"] = [_V135/*runtimeError*/(_V23/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
_V130/*mDef*/["connectFunCode"] = [_V114/*MAKRO_SELF*/, (((("[" + _V87/*map*/["connectIdx"]) + "](") + _V130/*mDef*/["index"]) + ", "), _V117/*MAKRO_VALUE*/, ")"];;
_V130/*mDef*/["connectSlotCode"] = [_V114/*MAKRO_SELF*/, (((("[" + _V87/*map*/["connectIdx"]) + "](") + _V130/*mDef*/["index"]) + ", "), _V117/*MAKRO_VALUE*/, "[", _V136/*MAKRO_VALUEPROPERTY*/, "], ", _V117/*MAKRO_VALUE*/, ")"];;
;
});
_V137/*createMembersPs*/ = (function(){
var _V138/*donePs*/;
;
_V138/*donePs*/ = new _V76/*Promise*/();
_V27/*self*/["_membersDefined"](_V98/*classLiteral*/)["then"]((function(){
var _V44/*i*/;
;
_V44/*i*/;
if(_V98/*classLiteral*/["members"]){
_V44/*i*/ = 0;
for(_V44/*i*/;(_V44/*i*/ < _V98/*classLiteral*/["members"]["length"]);++_V44/*i*/){{_V103/*addMember*/(_V98/*classLiteral*/["members"][_V44/*i*/]);;
}};
;
};
;
_V138/*donePs*/["resolve"]();;
;
}));;
return _V138/*donePs*/;;
;
});
_V139/*memberPs*/ = new _V137/*createMembersPs*/();
_V44/*i*/;
if(_V98/*classLiteral*/["hasFreePart"]){
_V140/*proto*/ = {};
if(_V99/*parDefaults*/){
for(_V44/*i*/ in _V99/*parDefaults*/){if(! _V87/*map*/["members"][_V44/*i*/]){
_V140/*proto*/[_V44/*i*/] = _V99/*parDefaults*/[_V44/*i*/];;
};
;
};
;
};
;
_V141/*freeFun*/ = (function(){
;
;
});
_V141/*freeFun*/["prototype"] = _V140/*proto*/;;
_V142/*f*/ = _V87/*map*/["freePart"];
if(_V75/*cDef*/["track"]){
_V75/*cDef*/["constructor"] = (function(){
var _V90/*r*/;
var _V31/*t*/;
;
_V90/*r*/ = _V105/*cAr*/["slice"]();
_V90/*r*/[_V142/*f*/] = new _V141/*freeFun*/();;
_V31/*t*/ = _V9/*Tracker*/((function(){
;
_V29/*destroyFun*/["apply"](_V90/*r*/);;
;
}));
_V90/*r*/[_V109/*trackerIdx*/] = _V31/*t*/[0];;
_V90/*r*/[_V110/*trackRootIdx*/] = _V31/*t*/[1];;
_V90/*r*/[_V111/*trackMemberIdx*/] = _V31/*t*/[2];;
return [_V90/*r*/, _V90/*r*/[_V110/*trackRootIdx*/]()];;
;
});;

}else{
_V75/*cDef*/["constructor"] = (function(){
var _V90/*r*/;
;
_V90/*r*/ = _V105/*cAr*/["slice"]();
_V90/*r*/[_V142/*f*/] = new _V141/*freeFun*/();;
return _V90/*r*/;;
;
});;
};
;

}else{
if(_V75/*cDef*/["track"]){
_V75/*cDef*/["constructor"] = (function(){
var _V90/*r*/;
var _V31/*t*/;
;
_V90/*r*/ = _V105/*cAr*/["slice"]();
_V31/*t*/ = _V9/*Tracker*/((function(){
;
_V29/*destroyFun*/["apply"](_V90/*r*/);;
;
}));
_V90/*r*/[_V109/*trackerIdx*/] = _V31/*t*/[0];;
_V90/*r*/[_V110/*trackRootIdx*/] = _V31/*t*/[1];;
_V90/*r*/[_V111/*trackMemberIdx*/] = _V31/*t*/[2];;
return [_V90/*r*/, _V90/*r*/[_V110/*trackRootIdx*/]()];;
;
});;

}else{
_V75/*cDef*/["constructor"] = (function(){
var _V90/*r*/;
;
_V90/*r*/ = _V105/*cAr*/["slice"]();
return _V90/*r*/;;
;
});;
};
;
};
;
_V143/*finalPs*/ = new _V76/*Promise*/();
_V139/*memberPs*/["then"]((function(){
var _V44/*i*/;
var _V144/*realConstructor*/;
var _V146/*conDef*/;
var _V147/*_destroyFun*/;
var _V150/*_sync_destroyFun*/;
;
_V44/*i*/;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V105/*cAr*/["length"]);++_V44/*i*/){{_V118/*helpAr*/["push"](_V30/*undefined*/);;
}};
;
if(_V126/*constructorDef*/){
_V75/*cDef*/["constructorArguments"] = [];;
_V144/*realConstructor*/ = _V75/*cDef*/["constructor"];
if(_V75/*cDef*/["track"]){
_V75/*cDef*/["constructor"] = (function(){
var _V145/*instance*/;
var _V125/*arguments*/ = arguments;
;
_V145/*instance*/ = _V144/*realConstructor*/();
_V127/*constructorFun*/["apply"](_V145/*instance*/[0], _V125/*arguments*/);;
return _V145/*instance*/;;
;
});;

}else{
_V75/*cDef*/["constructor"] = (function(){
var _V145/*instance*/;
var _V125/*arguments*/ = arguments;
;
_V145/*instance*/ = _V144/*realConstructor*/();
_V127/*constructorFun*/["apply"](_V145/*instance*/, _V125/*arguments*/);;
return _V145/*instance*/;;
;
});;
};
;
_V146/*conDef*/ = _V52/*getClass*/(_V126/*constructorDef*/["type"]);
_V75/*cDef*/["constructorType"] = _V27/*self*/["createFunctionType"]({"return": _V53/*cf*/,
"arguments": _V146/*conDef*/["arguments"]});;

}else{
_V75/*cDef*/["constructorType"] = _V27/*self*/["createFunctionType"]({"return": _V53/*cf*/});;
};
;
if(_V75/*cDef*/["track"]){
_V147/*_destroyFun*/;
if(_V129/*untrackIdxAr*/["length"]){
if(_V128/*destroyDef*/){
_V147/*_destroyFun*/ = _V29/*destroyFun*/;;
_V29/*destroyFun*/ = (function(){
var _V44/*i*/;
var _V148/*curIdx*/;
var _V149/*tFun*/;
;
_V44/*i*/;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V129/*untrackIdxAr*/["length"]);++_V44/*i*/){{_V148/*curIdx*/ = _V129/*untrackIdxAr*/[_V44/*i*/];
_V149/*tFun*/ = this[_V148/*curIdx*/];
this[_V148/*curIdx*/] = _V30/*undefined*/;;
if(_V149/*tFun*/){
_V149/*tFun*/();;
};
;
}};
;
_V147/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V29/*destroyFun*/ = (function(){
var _V44/*i*/;
var _V149/*tFun*/;
;
_V44/*i*/;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V129/*untrackIdxAr*/["length"]);++_V44/*i*/){{_V149/*tFun*/ = this[_V129/*untrackIdxAr*/[_V44/*i*/]];
if(_V149/*tFun*/){
_V149/*tFun*/();;
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
if(_V128/*destroyDef*/){
_V147/*_destroyFun*/ = _V29/*destroyFun*/;;
_V29/*destroyFun*/ = (function(){
;
_V147/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V29/*destroyFun*/ = (function(){
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
if(_V106/*sync*/){
_V150/*_sync_destroyFun*/ = _V29/*destroyFun*/;
_V29/*destroyFun*/ = (function(){
var _V63/*syncData*/;
;
_V63/*syncData*/ = _V22/*classSystem*/["getSyncData"](this);
_V66/*destroySynced*/(_V63/*syncData*/);;
_V150/*_sync_destroyFun*/["apply"](this);;
;
});;
};
;
_V143/*finalPs*/["resolve"]();;
;
}));;
_V143/*finalPs*/["then"]((function(){
;
_V75/*cDef*/["isReady"] = true;;
_V75/*cDef*/["readyPromise"]["resolve"](_V53/*cf*/);;
;
}));;
if(_V106/*sync*/){
if(_V98/*classLiteral*/["name"]){
_V75/*cDef*/["syncId"] = {"hash": _V98/*classLiteral*/["hashStr"],
"name": _V98/*classLiteral*/["name"]};;
_V69/*registerSyncClass*/(_V98/*classLiteral*/["hashStr"], _V98/*classLiteral*/["name"], _V53/*cf*/);;
};
;
};
;
return _V53/*cf*/;;
;
}),
"getTypeFromInstance": (function(_V21/*parInstance*/){
;
if((typeof _V21/*parInstance*/[0] === "function")){
return _V21/*parInstance*/[0];;
};
;
if((_V21/*parInstance*/["length"] === 2)){
return _V21/*parInstance*/[0][0];;
};
;
throw _V23/*errorMsg*/["unknownInstanceType"];
;
}),
"getInternalId": (function(_V21/*parInstance*/){
var _V77/*type*/;
var _V75/*cDef*/;
var _V63/*syncData*/;
;
_V77/*type*/ = _V21/*parInstance*/[0];
_V75/*cDef*/ = _V52/*getClass*/(_V77/*type*/);
if(_V75/*cDef*/["sync"]){
_V63/*syncData*/ = _V21/*parInstance*/[_V75/*cDef*/["map"]["syncDataIdx"]]();
return _V63/*syncData*/["getInternalId"]();;
};
;
return;;
;
}),
"getSyncData": (function(_V21/*parInstance*/){
var _V77/*type*/;
var _V75/*cDef*/;
;
_V77/*type*/ = _V21/*parInstance*/[0];
_V75/*cDef*/ = _V52/*getClass*/(_V77/*type*/);
if(_V75/*cDef*/["sync"]){
return _V21/*parInstance*/[_V75/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
}),
"getSyncId": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
return _V75/*cDef*/["syncId"];;
;
}),
"addTransport": (function(_V21/*parInstance*/, _V151/*parTransport*/){
var _V63/*syncData*/;
;
_V63/*syncData*/ = this["getSyncData"](_V21/*parInstance*/["realInstance"]);
_V63/*syncData*/["transports"]["push"](_V151/*parTransport*/);;
if(((_V63/*syncData*/["transports"]["length"] > 1) && ! _V63/*syncData*/["track"])){
_V63/*syncData*/["track"] = _V21/*parInstance*/["getTrack"]();;
};
;
;
}),
"removeTransport": (function(_V152/*parInternalId*/, _V151/*parTransport*/){
var _V153/*realInstance*/;
var _V63/*syncData*/;
var _V68/*transports*/;
var _V154/*index*/;
var _V86/*track*/;
;
_V153/*realInstance*/ = _V59/*internalObjects*/[_V152/*parInternalId*/];
if(! _V153/*realInstance*/){
return;;
};
;
_V63/*syncData*/ = this["getSyncData"](_V153/*realInstance*/);
_V68/*transports*/ = _V63/*syncData*/["transports"];
_V154/*index*/ = _V68/*transports*/["indexOf"](_V151/*parTransport*/);
if((_V154/*index*/ > - 1)){
_V68/*transports*/["splice"](_V154/*index*/, 1);;
};
;
if(((_V63/*syncData*/["transports"]["length"] < 2) && _V63/*syncData*/["track"])){
_V86/*track*/ = _V63/*syncData*/["track"];
_V63/*syncData*/["track"] = _V30/*undefined*/;;
_V86/*track*/();;
};
;
;
}),
"getInstanceSyncData": (function(_V21/*parInstance*/, _V155/*parGetDataFun*/, _V156/*parGetTypeFun*/){
var _V77/*type*/;
var _V145/*instance*/;
var _V75/*cDef*/;
var _V157/*res*/;
var _V158/*syncMembers*/;
var _V44/*i*/;
var _V45/*l*/;
var _V31/*t*/;
var _V159/*d*/;
;
if(! _V21/*parInstance*/){
return;;
};
;
_V77/*type*/ = _V21/*parInstance*/["realType"];
_V145/*instance*/ = _V21/*parInstance*/["realInstance"];
_V75/*cDef*/ = _V52/*getClass*/(_V77/*type*/);
if(! _V75/*cDef*/["sync"]){
throw _V23/*errorMsg*/["notSyncable"];
};
;
_V157/*res*/ = [_V156/*parGetTypeFun*/(_V77/*type*/)];
_V158/*syncMembers*/ = _V75/*cDef*/["syncMembers"];
_V44/*i*/ = 0;
_V45/*l*/ = _V158/*syncMembers*/["length"];
for(_V44/*i*/;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{_V31/*t*/ = _V158/*syncMembers*/[_V44/*i*/]["type"];
_V159/*d*/ = _V145/*instance*/[_V158/*syncMembers*/[_V44/*i*/]["index"]];
if(! this["isFunctionType"](_V31/*t*/)){
_V157/*res*/["push"](_V155/*parGetDataFun*/(_V31/*t*/, _V159/*d*/));;
};
;
}};
;
return _V157/*res*/;;
;
}),
"getInstanceFromSyncData": (function(_V160/*parData*/){
var _V77/*type*/;
var _V161/*getTracker*/;
var _V162/*setMember*/;
var _V75/*cDef*/;
var _V165/*isTracked*/;
var _V145/*instance*/;
var _V158/*syncMembers*/;
var _V44/*i*/;
var _V45/*l*/;
var _V166/*nextData*/;
var _V31/*t*/;
;
_V77/*type*/ = _V160/*parData*/[0];
_V161/*getTracker*/ = (function(_V21/*parInstance*/){
var _V75/*cDef*/;
var _V109/*trackerIdx*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V21/*parInstance*/["realType"]);
_V109/*trackerIdx*/ = _V75/*cDef*/["map"]["trackerIdx"];
return _V21/*parInstance*/["realInstance"][_V109/*trackerIdx*/];;
;
});
_V162/*setMember*/ = (function(_V20/*parType*/, _V21/*parInstance*/, _V163/*parMemberDefinition*/, _V164/*parValueInstance*/){
var _V153/*realInstance*/;
var _V32/*tracker*/;
var _V111/*trackMemberIdx*/;
;
if(! _V22/*classSystem*/["canSet"](_V163/*parMemberDefinition*/["type"], _V164/*parValueInstance*/["realType"])){
throw _V23/*errorMsg*/["typeMissmatch"];
};
;
_V153/*realInstance*/ = _V21/*parInstance*/["realInstance"];
_V153/*realInstance*/[_V163/*parMemberDefinition*/["index"]] = _V164/*parValueInstance*/["realInstance"];;
if(_V22/*classSystem*/["isTrackedClass"](_V163/*parMemberDefinition*/["type"])){
_V32/*tracker*/ = _V161/*getTracker*/(_V21/*parInstance*/);
_V75/*cDef*/ = _V52/*getClass*/(_V164/*parValueInstance*/["realType"]);;
_V111/*trackMemberIdx*/ = _V75/*cDef*/["map"]["trackMemberIdx"];
if(_V153/*realInstance*/[_V163/*parMemberDefinition*/["trackIndex"]]){
_V153/*realInstance*/[_V163/*parMemberDefinition*/["trackIndex"]]();;
};
;
_V153/*realInstance*/[_V163/*parMemberDefinition*/["trackIndex"]] = _V164/*parValueInstance*/["realInstance"][_V111/*trackMemberIdx*/](_V32/*tracker*/);;
};
;
;
});
_V75/*cDef*/ = _V52/*getClass*/(_V77/*type*/);
if(! _V75/*cDef*/["sync"]){
throw _V23/*errorMsg*/["notSyncable"];
};
;
_V165/*isTracked*/ = this["isTrackedClass"](_V77/*type*/);
_V145/*instance*/ = new _V24/*Instance*/(_V77/*type*/, this["getTypeConstructor"](_V77/*type*/)());
try
{_V158/*syncMembers*/ = _V75/*cDef*/["syncMembers"];
_V44/*i*/ = 0;
_V45/*l*/ = _V158/*syncMembers*/["length"];
_V166/*nextData*/ = 1;
for(_V44/*i*/;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{_V31/*t*/ = _V158/*syncMembers*/[_V44/*i*/]["type"];
if(this["isFunctionType"](_V31/*t*/)){
continue;;
};
;
_V162/*setMember*/(_V77/*type*/, _V145/*instance*/, _V158/*syncMembers*/[_V44/*i*/], _V160/*parData*/[_V166/*nextData*/]);;
++_V166/*nextData*/;;
}};
;
}catch(_V43/*e*/){_V145/*instance*/["track"]();;
throw _V43/*e*/;
};
;
return _V145/*instance*/;;
;
}),
"setMemberByIdx": (function(_V153/*realInstance*/, _V61/*memberIdx*/, _V41/*value*/){
;
_V153/*realInstance*/[_V61/*memberIdx*/] = _V41/*value*/;;
;
}),
"isFunctionType": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(_V167/*par*/){
var _V27/*self*/;
var _V75/*cDef*/;
var _V168/*checkReady*/;
var _V169/*makeTemporaries*/;
var _V170/*isReady*/;
var _V171/*resolveTypeFun*/;
var _V44/*i*/;
var _V53/*cf*/;
;
_V27/*self*/ = this;
_V75/*cDef*/ = {"isFunction": true,
"return": (_V167/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (_V167/*par*/["arguments"] || []),
"isReady": false};
_V168/*checkReady*/ = (function(){
;
_V169/*makeTemporaries*/();;
;
});
_V169/*makeTemporaries*/ = (function(){
var _V44/*i*/;
;
_V75/*cDef*/["return"] = _V27/*self*/["_createTemporaryTrackedClass"](_V75/*cDef*/["return"]);;
_V44/*i*/ = 0;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V75/*cDef*/["arguments"]["length"]);++_V44/*i*/){{_V75/*cDef*/["arguments"][_V44/*i*/] = _V27/*self*/["_createTemporaryTrackedClass"](_V75/*cDef*/["arguments"][_V44/*i*/]);;
}};
;
;
});
_V170/*isReady*/ = true;
if(_V27/*self*/["isProvisional"](_V75/*cDef*/["return"])){
_V170/*isReady*/ = false;;
_V27/*self*/["definitionPromise"](_V75/*cDef*/["return"])["then"]((function(_V20/*parType*/){
;
_V75/*cDef*/["return"] = _V20/*parType*/;;
_V168/*checkReady*/();;
;
}));;
};
;
_V171/*resolveTypeFun*/ = (function(_V172/*parI*/){
;
return (function(_V20/*parType*/){
;
_V75/*cDef*/["arguments"][_V172/*parI*/] = _V20/*parType*/;;
_V168/*checkReady*/();;
;
});;
;
});
_V44/*i*/ = 0;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V75/*cDef*/["arguments"]["length"]);++_V44/*i*/){{if(_V27/*self*/["isProvisional"](_V75/*cDef*/["arguments"][_V44/*i*/])){
_V170/*isReady*/ = false;;
_V27/*self*/["definitionPromise"](_V75/*cDef*/["arguments"][_V44/*i*/])["then"](_V171/*resolveTypeFun*/(_V44/*i*/));;
};
;
}};
;
_V53/*cf*/ = _V54/*classHider*/(_V75/*cDef*/);
if(! _V170/*isReady*/){
_V75/*cDef*/["readyPromise"] = new _V76/*Promise*/();;
_V168/*checkReady*/ = (function(){
var _V44/*i*/;
;
if(_V27/*self*/["isProvisional"](_V75/*cDef*/["return"])){
return;;
};
;
_V44/*i*/ = 0;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V75/*cDef*/["arguments"]["length"]);++_V44/*i*/){{if(_V27/*self*/["isProvisional"](_V75/*cDef*/["arguments"][_V44/*i*/])){
return;;
};
;
}};
;
_V169/*makeTemporaries*/();;
_V75/*cDef*/["isReady"] = true;;
_V75/*cDef*/["readyPromise"]["resolve"](_V53/*cf*/);;
;
});;
_V168/*checkReady*/();;

}else{
_V168/*checkReady*/();;
_V75/*cDef*/["isReady"] = true;;
};
;
return _V53/*cf*/;;
;
}),
"isVar": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return _V75/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if(_V75/*cDef*/["arguments"]){
return _V75/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(_V20/*parType*/, _V173/*parIndex*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
if((_V75/*cDef*/["arguments"] && _V75/*cDef*/["arguments"][_V173/*parIndex*/])){
return _V75/*cDef*/["arguments"][_V173/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(_V20/*parType*/, _V173/*parIndex*/){
var _V75/*cDef*/;
var _V31/*t*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
_V31/*t*/;
if(_V75/*cDef*/["constructorArguments"]){
_V31/*t*/ = _V75/*cDef*/["constructorArguments"][_V173/*parIndex*/];;
};
;
if(_V31/*t*/){
return _V31/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(_V20/*parType*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
return _V75/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(_V174/*parName*/){
;
return _V56/*builtinTypes*/[_V174/*parName*/];;
;
}),
"getGetPropertyCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V87/*map*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
if(_V75/*cDef*/["isVar"]){
return _V175/*assembleCode*/([_V114/*MAKRO_SELF*/, "[", _V115/*MAKRO_PROPERTYVALUE*/, "]"], _V167/*par*/);;
};
;
_V87/*map*/ = _V75/*cDef*/["map"];
if(_V167/*par*/["property"]){
if(_V87/*map*/["members"][_V167/*par*/["property"]]){
return _V175/*assembleCode*/(_V87/*map*/["members"][_V167/*par*/["property"]]["getCode"], _V167/*par*/);;
};
;
};
;
if(_V87/*map*/["getMemberCode"]){
return _V175/*assembleCode*/(_V87/*map*/["getMemberCode"], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["accessNotAllowd"], _V167/*par*/);;
;
}),
"getPropertyAlias": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V87/*map*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
if(_V75/*cDef*/["isVar"]){
return _V167/*par*/["property"];;
};
;
_V87/*map*/ = _V75/*cDef*/["map"];
if(((_V87/*map*/ && _V87/*map*/["members"]) && _V87/*map*/["members"][_V167/*par*/["property"]])){
return _V87/*map*/["members"][_V167/*par*/["property"]]["index"];;
};
;
return _V167/*par*/["property"];;
;
}),
"getPropertyType": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V87/*map*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
if(_V75/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
_V87/*map*/ = _V75/*cDef*/["map"];
if(_V87/*map*/["members"][_V167/*par*/["property"]]){
if(_V167/*par*/["original"]){
return (_V87/*map*/["members"][_V167/*par*/["property"]]["originalType"] || _V87/*map*/["members"][_V167/*par*/["property"]]["type"]);;

}else{
return _V87/*map*/["members"][_V167/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(_V167/*par*/){
var _V75/*cDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
if(_V75/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(_V75/*cDef*/["constructorType"]){
return _V75/*cDef*/["constructorType"];;
};
;
throw _V23/*errorMsg*/["noConstructorAvailable"];
;
}),
"getSetPropertyCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V87/*map*/;
var _V176/*propertyType*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
if(_V75/*cDef*/["isVar"]){
if(! this["canSet"](this["getBuiltinType"]("var"), _V167/*par*/["valueType"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["typeMissmatch"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/([_V114/*MAKRO_SELF*/, "[", _V115/*MAKRO_PROPERTYVALUE*/, "] ", _V116/*MAKRO_OPERATOR*/, " ", _V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
_V87/*map*/ = _V75/*cDef*/["map"];
if((_V87/*map*/ && _V167/*par*/["property"])){
if(_V87/*map*/["members"][_V167/*par*/["property"]]){
_V176/*propertyType*/ = this["getPropertyType"]({"type": _V167/*par*/["type"],
"property": _V167/*par*/["property"]});
if(! this["canSet"](_V176/*propertyType*/, _V167/*par*/["valueType"])){
if(this["canSet"](_V176/*propertyType*/, this["getClassFromTemporaryTracked"](_V167/*par*/["valueType"]))){
return _V175/*assembleCode*/(_V87/*map*/["members"][_V167/*par*/["property"]]["setCodeFromTemporary"], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["typeMissmatch"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/(_V87/*map*/["members"][_V167/*par*/["property"]]["setCode"], _V167/*par*/);;
};
;
};
;
if((_V87/*map*/ && _V87/*map*/["setMemberCode"])){
if(! this["canSet"](this["getBuiltinType"]("var"), _V167/*par*/["valueType"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["typeMissmatch"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/(_V87/*map*/["setMemberCode"], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["accessNotAllowd"], _V167/*par*/);;
;
}),
"getConnectCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V87/*map*/;
var _V177/*valuePropertyType*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V87/*map*/ = _V75/*cDef*/["map"];
if(_V167/*par*/["valueProperty"]){
_V177/*valuePropertyType*/ = this["getPropertyType"]({"type": _V167/*par*/["valueType"],
"property": _V167/*par*/["valueProperty"]});
if(! this["canConnect"](_V167/*par*/["type"], _V167/*par*/["property"], _V177/*valuePropertyType*/)){
return _V135/*runtimeError*/(_V23/*errorMsg*/["connectNotPossible"], _V167/*par*/);;
};
;
_V167/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": _V167/*par*/["valueType"],
"property": _V167/*par*/["valueProperty"]}));;
return _V175/*assembleCode*/(_V87/*map*/["members"][_V167/*par*/["property"]]["connectSlotCode"], _V167/*par*/);;

}else{
if(! this["canConnect"](_V167/*par*/["type"], _V167/*par*/["property"], _V167/*par*/["valueType"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["connectNotPossible"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/(_V87/*map*/["members"][_V167/*par*/["property"]]["connectFunCode"], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["connectNotPossible"], _V167/*par*/);;
;
}),
"getPassAsTypeCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V178/*vcDef*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V178/*vcDef*/ = _V52/*getClass*/(_V167/*par*/["valueType"]);
if(_V167/*par*/["value"]){
if(! this["canSet"](_V167/*par*/["type"], _V167/*par*/["valueType"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["typeMissmatch"], _V167/*par*/);;
};
;
if(this["isTemporaryTrackedClass"](_V167/*par*/["type"])){
return this["getCreateTemporaryClassCode"](_V167/*par*/);;
};
;
return _V175/*assembleCode*/([_V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["missingVariable"], _V167/*par*/);;
;
}),
"getCreateTemporaryClassCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V179/*codeAr*/;
;
if(this["isTemporaryTrackedClass"](_V167/*par*/["valueType"])){
return _V175/*assembleCode*/([_V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
if(! this["isTrackedClass"](_V167/*par*/["valueType"])){
return _V175/*assembleCode*/([_V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["valueType"]);
_V179/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + _V75/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), _V117/*MAKRO_VALUE*/, ")"];
return _V175/*assembleCode*/(_V179/*codeAr*/, _V167/*par*/);;
;
}),
"getTrack": (function(_V21/*parInstance*/){
var _V77/*type*/;
var _V75/*cDef*/;
;
if(! _V21/*parInstance*/){
return;;
};
;
_V77/*type*/ = _V21/*parInstance*/[0];
_V75/*cDef*/ = _V52/*getClass*/(_V77/*type*/);
return _V21/*parInstance*/[_V75/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"getDestroyTemporaryClassCode": (function(_V167/*par*/){
var _V179/*codeAr*/;
;
if(! this["isTemporaryTrackedClass"](_V167/*par*/["valueType"])){
if(_V167/*par*/["noValueRequired"]){
return _V175/*assembleCode*/([], _V167/*par*/);;
};
;
return _V175/*assembleCode*/([_V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
_V179/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", _V117/*MAKRO_VALUE*/, ")"];
return _V175/*assembleCode*/(_V179/*codeAr*/, _V167/*par*/);;
;
}),
"dereferencePromisePreCode": (function(_V167/*par*/){
var _V179/*codeAr*/;
;
_V179/*codeAr*/ = [_V117/*MAKRO_VALUE*/, ".then("];
if(this["isTemporaryTrackedClass"](_V167/*par*/["valueType"])){
_V179/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];;
};
;
return _V175/*assembleCode*/(_V179/*codeAr*/, _V167/*par*/);;
;
}),
"dereferencePromisePostCode": (function(_V167/*par*/){
var _V179/*codeAr*/;
;
_V179/*codeAr*/ = [");\n"];
if(this["isTemporaryTrackedClass"](_V167/*par*/["valueType"])){
_V179/*codeAr*/ = [");\nreturn r;\n})(", _V117/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];;
};
;
return _V175/*assembleCode*/(_V179/*codeAr*/, _V167/*par*/);;
;
}),
"promisingReturnTypeCheck": (function(_V167/*par*/){
;
if(! this["isPromiseOfClass"](_V167/*par*/["type"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["notAPromise"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/([], _V167/*par*/);;
;
}),
"getSetVariableCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V178/*vcDef*/;
var _V180/*operator*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V178/*vcDef*/ = _V52/*getClass*/(_V167/*par*/["valueType"]);
if(_V167/*par*/["instance"]){
_V180/*operator*/ = (_V167/*par*/["operator"] || "=");
if((_V180/*operator*/ != "=")){
if(! (_V75/*cDef*/["isVar"] && _V178/*vcDef*/["isVar"])){
return _V135/*runtimeError*/(_V23/*errorMsg*/["operatorMissmatch"], _V167/*par*/);;
};
;
};
;
if(! this["canSet"](_V167/*par*/["type"], _V167/*par*/["valueType"])){
if(this["canSet"](_V167/*par*/["type"], this["getClassFromTemporaryTracked"](_V167/*par*/["valueType"]))){
if((_V167/*par*/["assignmentType"] == "Identifier")){
return _V175/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", _V114/*MAKRO_SELF*/, "){ _T", _V114/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", _V114/*MAKRO_SELF*/, " ", _V180/*operator*/, " v;\n", "_T", _V114/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", _V114/*MAKRO_SELF*/, " ", _V180/*operator*/, " undefined; ", "_T", _V114/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", _V117/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], _V167/*par*/);;
};
;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["typeMissmatch"], _V167/*par*/);;
};
;
return _V175/*assembleCode*/([_V114/*MAKRO_SELF*/, " ", _V180/*operator*/, " ", _V117/*MAKRO_VALUE*/], _V167/*par*/);;
};
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["missingVariable"], _V167/*par*/);;
;
}),
"declareReturnPromiseCode": (function(_V167/*par*/){
var _V181/*retType*/;
var _V86/*track*/;
var _V182/*assemblyAr*/;
;
_V181/*retType*/ = _V167/*par*/["type"];
_V86/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V181/*retType*/)){
_V86/*track*/ = true;;
_V181/*retType*/ = this["getClassFromTemporaryTracked"](_V181/*retType*/);;
};
;
if(this["isTrackedClass"](_V181/*retType*/)){
_V86/*track*/ = true;;
};
;
_V182/*assemblyAr*/;
if(_V86/*track*/){
_V182/*assemblyAr*/ = ["var ", _V167/*par*/["name"], ";\nvar _T", _V167/*par*/["name"], ";\n(function(){ var vAr = new ", _V183/*MAKRO_CONSTRUCTOR*/, "(); ", _V167/*par*/["name"], " = vAr[0]; _T", _V167/*par*/["name"], " = vAr[1]; })();"];;

}else{
_V182/*assemblyAr*/ = ["var ", _V167/*par*/["name"], " = new __Promise();\n"];;
};
;
return _V175/*assembleCode*/(_V182/*assemblyAr*/, _V167/*par*/);;
;
}),
"returnReturnPromiseCode": (function(_V167/*par*/){
var _V181/*retType*/;
var _V86/*track*/;
var _V182/*assemblyAr*/;
;
_V181/*retType*/ = _V167/*par*/["type"];
_V86/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V181/*retType*/)){
_V86/*track*/ = true;;
_V181/*retType*/ = this["getClassFromTemporaryTracked"](_V181/*retType*/);;
};
;
if(this["isTrackedClass"](_V181/*retType*/)){
_V86/*track*/ = true;;
};
;
_V182/*assemblyAr*/;
if(_V86/*track*/){
_V182/*assemblyAr*/ = ["return [", _V167/*par*/["name"], ", _T", _V167/*par*/["name"], "];\n"];;

}else{
_V182/*assemblyAr*/ = ["return ", _V167/*par*/["name"], ";\n"];;
};
;
return _V175/*assembleCode*/(_V182/*assemblyAr*/, _V167/*par*/);;
;
}),
"getDeclareVariableCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V182/*assemblyAr*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V182/*assemblyAr*/ = ["var ", _V167/*par*/["name"], ";\n"];
if(_V75/*cDef*/["track"]){
_V182/*assemblyAr*/["push"]("var _T");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"](";\n");;
};
;
return _V175/*assembleCode*/(_V182/*assemblyAr*/, _V167/*par*/);;
;
}),
"getProcessParameterCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V182/*assemblyAr*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V182/*assemblyAr*/ = [];
if(_V75/*cDef*/["track"]){
_V182/*assemblyAr*/["push"]("var _T");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"](";\n");;
_V182/*assemblyAr*/["push"]("if(");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"]("){ _T");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"](" = ");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"]("[1];\n");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"](" = ");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"]("[0];}\n");;
};
;
return _V175/*assembleCode*/(_V182/*assemblyAr*/, _V167/*par*/);;
;
}),
"getDestroyVariableCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V182/*assemblyAr*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V182/*assemblyAr*/ = [];
if(_V75/*cDef*/["track"]){
_V182/*assemblyAr*/["push"]("if (_T");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"]("){ _T");;
_V182/*assemblyAr*/["push"](_V167/*par*/["name"]);;
_V182/*assemblyAr*/["push"]("();};");;
};
;
return _V175/*assembleCode*/(_V182/*assemblyAr*/, _V167/*par*/);;
;
}),
"getCallCode": (function(_V167/*par*/){
var _V75/*cDef*/;
var _V44/*i*/;
var _V45/*l*/;
var _V184/*args*/;
var _V185/*assembly*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V167/*par*/["type"]);
_V44/*i*/;
_V45/*l*/;
_V184/*args*/;
_V185/*assembly*/;
if(_V75/*cDef*/["isVar"]){
_V184/*args*/ = _V167/*par*/["arguments"];;
_V45/*l*/ = _V184/*args*/["length"];;
_V185/*assembly*/ = [_V114/*MAKRO_SELF*/, "("];;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{if((_V44/*i*/ > 0)){
_V185/*assembly*/["push"](", ");;
};
;
_V185/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": _V184/*args*/[_V44/*i*/]["value"],
"valueType": _V184/*args*/[_V44/*i*/]["type"]});;
}};
;
_V185/*assembly*/["push"](")");;
return _V175/*assembleCode*/(_V185/*assembly*/, _V167/*par*/);;
};
;
if(! _V75/*cDef*/["isFunction"]){
return _V135/*runtimeError*/(_V23/*errorMsg*/["expectedCallable"], _V167/*par*/);;
};
;
_V184/*args*/ = _V167/*par*/["arguments"];;
_V45/*l*/ = _V184/*args*/["length"];;
_V185/*assembly*/ = [_V114/*MAKRO_SELF*/, "("];;
for(_V44/*i*/ = 0;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{if((_V44/*i*/ > 0)){
_V185/*assembly*/["push"](", ");;
};
;
_V185/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (_V75/*cDef*/["arguments"][_V44/*i*/] || this["getBuiltinType"]("var")),
"value": _V184/*args*/[_V44/*i*/]["value"],
"valueType": _V184/*args*/[_V44/*i*/]["type"]});;
}};
;
_V185/*assembly*/["push"](")");;
return _V175/*assembleCode*/(_V185/*assembly*/, _V167/*par*/);;
;
}),
"getBinaryExpressionCode": (function(_V167/*par*/){
var _V186/*lcDef*/;
var _V187/*rcDef*/;
;
_V186/*lcDef*/ = _V52/*getClass*/(_V167/*par*/["leftType"]);
_V187/*rcDef*/ = _V52/*getClass*/(_V167/*par*/["rightType"]);
if((_V186/*lcDef*/["isVar"] && _V187/*rcDef*/["isVar"])){
return _V175/*assembleCode*/(["(", _V188/*MAKRO_LEFT*/, " ", _V116/*MAKRO_OPERATOR*/, " ", _V189/*MAKRO_RIGHT*/, ")"], _V167/*par*/);;
};
;
switch (_V167/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":
return _V175/*assembleCode*/(["(", _V188/*MAKRO_LEFT*/, " ", _V116/*MAKRO_OPERATOR*/, " ", _V189/*MAKRO_RIGHT*/, ")"], _V167/*par*/);;
}
;
;
return _V135/*runtimeError*/(_V23/*errorMsg*/["operatorMissmatch"], _V167/*par*/);;
;
}),
"canSet": (function(_V190/*parTargetType*/, _V191/*parSourceType*/){
var _V192/*allOk*/;
var _V44/*i*/;
var _V45/*l*/;
var _V193/*tp*/;
var _V194/*sp*/;
;
if(((_V190/*parTargetType*/ === _V30/*undefined*/) && (_V191/*parSourceType*/ === _V30/*undefined*/))){
return true;;
};
;
if(((_V190/*parTargetType*/ === _V30/*undefined*/) || (_V191/*parSourceType*/ === _V30/*undefined*/))){
return false;;
};
;
if((_V190/*parTargetType*/ === _V191/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](_V191/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](_V190/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V190/*parTargetType*/), this["getClassFromTemporaryTracked"](_V191/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](_V190/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V190/*parTargetType*/), _V191/*parSourceType*/);;
};
;
if((((_V190/*parTargetType*/["isFunction"] && _V191/*parSourceType*/["isFunction"]) && this["canSet"](_V190/*parTargetType*/["returnType"], _V191/*parSourceType*/["returnType"])) && (_V190/*parTargetType*/["parameters"]["length"] == _V191/*parSourceType*/["parameters"]["length"]))){
_V192/*allOk*/ = true;
_V44/*i*/ = 0;
_V45/*l*/ = _V190/*parTargetType*/["parameters"]["length"];
for(_V44/*i*/;(_V44/*i*/ < _V45/*l*/);++_V44/*i*/){{_V193/*tp*/ = _V190/*parTargetType*/["parameters"][_V44/*i*/];
_V194/*sp*/ = _V191/*parSourceType*/["parameters"][_V44/*i*/];
if(! this["canSet"](_V194/*sp*/, _V193/*tp*/)){
_V192/*allOk*/ = false;;
};
;
}};
;
if(_V192/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(_V20/*parType*/, _V195/*parProperty*/, _V196/*parFunType*/){
var _V75/*cDef*/;
var _V87/*map*/;
var _V130/*mDef*/;
var _V176/*propertyType*/;
;
_V75/*cDef*/ = _V52/*getClass*/(_V20/*parType*/);
_V87/*map*/ = _V75/*cDef*/["map"];
if(_V87/*map*/["members"][_V195/*parProperty*/]){
_V130/*mDef*/ = _V87/*map*/["members"][_V195/*parProperty*/];
_V176/*propertyType*/ = this["getPropertyType"]({"type": _V20/*parType*/,
"property": _V195/*parProperty*/});
if(! this["canSet"](_V176/*propertyType*/, _V196/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](_V176/*propertyType*/) || this["isFunctionType"](_V176/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](_V196/*parFunType*/) || this["isFunctionType"](_V196/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
_V135/*runtimeError*/ = (function(_V167/*par*/, _V49/*par2*/){
;
if((_V49/*par2*/ && _V49/*par2*/["errorFun"])){
_V49/*par2*/["errorFun"](_V167/*par*/);;
};
;
return (((("(function(){ throw { id:" + _V167/*par*/["id"]) + ", msg: ") + _V197/*stringEncodeStr*/(_V167/*par*/["msg"])) + " } })()");;
;
});
_V198/*_stringEncodeStr*/ = (function(_V167/*par*/){
var _V199/*s*/;
;
_V199/*s*/ = _V167/*par*/["replace"](new _V200/*RegExp*/("\\\\", "g"), "\\\\");
_V199/*s*/ = _V199/*s*/["replace"](new _V200/*RegExp*/("\\n", "g"), "\\n");;
_V199/*s*/ = _V199/*s*/["replace"](new _V200/*RegExp*/("\\r", "g"), "\\r");;
_V199/*s*/ = _V199/*s*/["replace"](new _V200/*RegExp*/("\\\"", "g"), "\\\"");;
_V199/*s*/ = _V199/*s*/["replace"](new _V200/*RegExp*/("\\u2028", "g"), "\\u2028");;
_V199/*s*/ = _V199/*s*/["replace"](new _V200/*RegExp*/("\\u2029", "g"), "\\u2029");;
return _V199/*s*/;;
;
});
_V197/*stringEncodeStr*/ = (function(_V167/*par*/){
;
return (("\"" + _V198/*_stringEncodeStr*/(_V167/*par*/)) + "\"");;
;
});
_V175/*assembleCode*/ = (function(_V201/*ar*/, _V167/*par*/){
var _V157/*res*/;
var _V202/*resStr*/;
var _V44/*i*/;
var _V90/*r*/;
var _V204/*tempPar*/;
var _V205/*tempRes*/;
;
_V157/*res*/ = _V167/*par*/["result"];
_V202/*resStr*/ = "";
if(! _V157/*res*/){
_V157/*res*/ = {"push": (function(_V203/*parStr*/){
;
_V202/*resStr*/ += _V203/*parStr*/;;
;
})};;
};
;
_V44/*i*/ = 0;
_V90/*r*/ = "";
for(_V44/*i*/ = 0;(_V44/*i*/ < _V201/*ar*/["length"]);++_V44/*i*/){{if((typeof _V201/*ar*/[_V44/*i*/] == "string")){
_V157/*res*/["push"](_V201/*ar*/[_V44/*i*/]);;

}else{
if(_V201/*ar*/[_V44/*i*/]["_internFun"]){
_V204/*tempPar*/ = _V201/*ar*/[_V44/*i*/];
_V204/*tempPar*/["result"] = _V167/*par*/["result"];;
_V204/*tempPar*/["errorFun"] = _V167/*par*/["errorFun"];;
_V205/*tempRes*/ = _V22/*classSystem*/[_V201/*ar*/[_V44/*i*/]["_internFun"]](_V204/*tempPar*/);
if(! _V167/*par*/["result"]){
_V157/*res*/["push"](_V205/*tempRes*/);;
};
;

}else{
switch (_V201/*ar*/[_V44/*i*/]){
case _V114/*MAKRO_SELF*/:
_V157/*res*/["push"](_V167/*par*/["instance"]);;
break;;
case _V206/*MAKRO_PROPERTY*/:
_V157/*res*/["push"](_V167/*par*/["property"]);;
break;;
case _V207/*MAKRO_PROPERTYSTRING*/:
_V157/*res*/["push"](_V197/*stringEncodeStr*/(_V167/*par*/["property"]));;
break;;
case _V115/*MAKRO_PROPERTYVALUE*/:
if(_V167/*par*/["propertyValue"]){
_V157/*res*/["push"](_V167/*par*/["propertyValue"]);;

}else{
_V157/*res*/["push"](_V197/*stringEncodeStr*/(_V167/*par*/["property"]));;
};
;
break;;
case _V117/*MAKRO_VALUE*/:
_V157/*res*/["push"](_V167/*par*/["value"]);;
break;;
case _V136/*MAKRO_VALUEPROPERTY*/:
_V157/*res*/["push"](_V167/*par*/["valueProperty"]);;
break;;
case _V188/*MAKRO_LEFT*/:
_V157/*res*/["push"](_V167/*par*/["left"]);;
break;;
case _V189/*MAKRO_RIGHT*/:
_V157/*res*/["push"](_V167/*par*/["right"]);;
break;;
case _V116/*MAKRO_OPERATOR*/:
_V157/*res*/["push"](_V167/*par*/["operator"]);;
break;;
case _V208/*MAKRO_RESOLVEFUN*/:
_V157/*res*/["push"]((_V167/*par*/["resolveFun"] || "undefined"));;
break;;
case _V209/*MAKRO_REJECTFUN*/:
_V157/*res*/["push"]((_V167/*par*/["rejectFun"] || "undefined"));;
break;;
case _V210/*MAKRO_TYPEVALUE*/:
_V157/*res*/["push"](_V167/*par*/["typeValue"]);;
break;;
case _V183/*MAKRO_CONSTRUCTOR*/:
_V157/*res*/["push"](_V167/*par*/["constructorName"]);;
break;;
}
;
;
};
};
;
}};
;
if(_V167/*par*/["result"]){
return _V157/*res*/;;
};
;
return _V202/*resStr*/;;
;
});
_V114/*MAKRO_SELF*/ = 0;
_V206/*MAKRO_PROPERTY*/ = 1;
_V207/*MAKRO_PROPERTYSTRING*/ = 2;
_V115/*MAKRO_PROPERTYVALUE*/ = 3;
_V117/*MAKRO_VALUE*/ = 4;
_V188/*MAKRO_LEFT*/ = 5;
_V116/*MAKRO_OPERATOR*/ = 6;
_V189/*MAKRO_RIGHT*/ = 7;
_V136/*MAKRO_VALUEPROPERTY*/ = 8;
_V208/*MAKRO_RESOLVEFUN*/ = 9;
_V209/*MAKRO_REJECTFUN*/ = 10;
_V210/*MAKRO_TYPEVALUE*/ = 11;
_V183/*MAKRO_CONSTRUCTOR*/ = 12;
_V23/*errorMsg*/ = {"accessNotAllowd": {"id": 200,
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
_V211/*promiseland*/["classSystem"] = _V22/*classSystem*/;;
_V7/*extra*/["classSystemPs"]["resolve"]({"classSystem": _V22/*classSystem*/,
"internalObjects": _V59/*internalObjects*/,
"getClassBySyncId": _V73/*getClassBySyncId*/,
"Instance": _V24/*Instance*/});;
return _V22/*classSystem*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();