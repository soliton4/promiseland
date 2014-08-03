(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
if (promiseland._hasModule({ hashStr: "f5d66dcde9fefd8893675896337e345b" })){ return promiseland._getModule("f5d66dcde9fefd8893675896337e345b"); };
var _V7/*extra*/;try{_V7/*extra*/ = extra;}catch(e){};
var _V24/*undefined*/;try{_V24/*undefined*/ = undefined;}catch(e){};
var _V70/*Promise*/;try{_V70/*Promise*/ = Promise;}catch(e){};
var _V187/*RegExp*/;try{_V187/*RegExp*/ = RegExp;}catch(e){};
var _V199/*promiseland*/;try{_V199/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*getModuleData*/;
var _V9/*Tracker*/;
var _V14/*Chainable*/;
var _V19/*TrackedPromise*/;
var _V43/*_ClassToken*/;
var _V44/*_actClass*/;
var _V45/*getClass*/;
var _V47/*classHider*/;
var _V49/*builtinTypes*/;
var _V50/*nextInternalId*/;
var _V51/*getNewInternalId*/;
var _V52/*internalObjects*/;
var _V53/*syncFun*/;
var _V60/*destroySynced*/;
var _V63/*registerSyncClass*/;
var _V68/*getSyncedClass*/;
var _V58/*classSystem*/;
var _V129/*runtimeError*/;
var _V185/*_stringEncodeStr*/;
var _V184/*stringEncodeStr*/;
var _V162/*assembleCode*/;
var _V108/*MAKRO_SELF*/;
var _V194/*MAKRO_PROPERTY*/;
var _V195/*MAKRO_PROPERTYSTRING*/;
var _V109/*MAKRO_PROPERTYVALUE*/;
var _V111/*MAKRO_VALUE*/;
var _V175/*MAKRO_LEFT*/;
var _V110/*MAKRO_OPERATOR*/;
var _V176/*MAKRO_RIGHT*/;
var _V131/*MAKRO_VALUEPROPERTY*/;
var _V196/*MAKRO_RESOLVEFUN*/;
var _V197/*MAKRO_REJECTFUN*/;
var _V198/*MAKRO_TYPEVALUE*/;
var _V170/*MAKRO_CONSTRUCTOR*/;
var _V130/*errorMsg*/;
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
_V19/*TrackedPromise*/ = (function(_V20/*parTrackFun*/){
var _V21/*self*/;
var _V22/*lifeLine*/;
var _V23/*destroyFun*/;
var _V25/*t*/;
var _V26/*tracker*/;
var _V27/*rootTrack*/;
var _V28/*thenAr*/;
var _V29/*elseAr*/;
var _V30/*thenFun*/;
var _V33/*thenReuseFun*/;
;
_V21/*self*/ = this;
_V22/*lifeLine*/;
_V23/*destroyFun*/ = (function(){
;
if(_V22/*lifeLine*/){
_V22/*lifeLine*/();;
_V22/*lifeLine*/ = _V24/*undefined*/;;

}else{
_V21/*self*/["then"]((function(){
;
if(_V22/*lifeLine*/){
_V22/*lifeLine*/();;
_V22/*lifeLine*/ = _V24/*undefined*/;;
};
;
;
}));;
};
;
;
});
_V25/*t*/ = _V9/*Tracker*/(_V23/*destroyFun*/);
_V26/*tracker*/ = _V25/*t*/[0];
this["rootTrack"] = _V25/*t*/[1];;
this["memberTrack"] = _V25/*t*/[2];;
_V27/*rootTrack*/ = this["rootTrack"];
_V28/*thenAr*/ = [];
_V29/*elseAr*/ = [];
_V30/*thenFun*/ = (function(_V31/*parThenFun*/, _V32/*parElseFun*/){
;
if(_V31/*parThenFun*/){
_V28/*thenAr*/["push"]([_V31/*parThenFun*/, _V27/*rootTrack*/()]);;
};
;
if(_V32/*parElseFun*/){
_V29/*elseAr*/["push"](_V32/*parElseFun*/);;
};
;
;
});
_V33/*thenReuseFun*/ = (function(_V34/*parReuse*/, _V31/*parThenFun*/, _V32/*parElseFun*/){
;
if(_V31/*parThenFun*/){
_V28/*thenAr*/["push"]([_V31/*parThenFun*/, _V34/*parReuse*/]);;

}else{
_V34/*parReuse*/();;
};
;
if(_V32/*parElseFun*/){
_V29/*elseAr*/["push"](_V32/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(_V35/*value*/){
var _V36/*realValue*/;
var _V37/*i*/;
var _V38/*l*/;
var _V39/*entryAr*/;
;
if(_V35/*value*/){
_V36/*realValue*/ = _V35/*value*/[0];
_V22/*lifeLine*/ = _V20/*parTrackFun*/(_V35/*value*/, _V26/*tracker*/);;
_V35/*value*/ = _V36/*realValue*/;;
};
;
_V30/*thenFun*/ = (function(_V31/*parThenFun*/){
;
if(_V31/*parThenFun*/){
try
{_V31/*parThenFun*/([_V35/*value*/, _V27/*rootTrack*/()]);;
}catch(e){};
;
};
;
;
});;
_V33/*thenReuseFun*/ = (function(_V34/*parReuse*/, _V31/*parThenFun*/){
;
if(_V31/*parThenFun*/){
try
{_V31/*parThenFun*/([_V35/*value*/, _V34/*parReuse*/]);;
}catch(e){};
;

}else{
_V34/*parReuse*/();;
};
;
;
});;
if(! _V28/*thenAr*/){
return;;
};
_V37/*i*/ = 0;
_V38/*l*/ = _V28/*thenAr*/["length"];
for(_V37/*i*/;(_V37/*i*/ < _V38/*l*/);++_V37/*i*/){{try
{_V39/*entryAr*/ = _V28/*thenAr*/[_V37/*i*/];
_V39/*entryAr*/[0]([_V35/*value*/, _V39/*entryAr*/[1]]);;
}catch(e){};
;
}};
;
_V28/*thenAr*/ = _V24/*undefined*/;;
_V29/*elseAr*/ = _V24/*undefined*/;;
this["resolve"] = _V24/*undefined*/;;
this["reject"] = _V24/*undefined*/;;
;
});;
this["reject"] = (function(_V35/*value*/){
var _V37/*i*/;
var _V38/*l*/;
;
_V30/*thenFun*/ = (function(_V40/*u*/, _V32/*parElseFun*/){
;
if(_V32/*parElseFun*/){
try
{_V32/*parElseFun*/(_V35/*value*/);;
}catch(e){};
;
};
;
;
});;
_V33/*thenReuseFun*/ = (function(_V34/*parReuse*/, _V40/*u*/, _V32/*parElseFun*/){
;
_V34/*parReuse*/();;
if(_V32/*parElseFun*/){
try
{_V32/*parElseFun*/(_V35/*value*/);;
}catch(e){};
;
};
;
;
});;
if(! _V29/*elseAr*/){
return;;
};
_V37/*i*/ = 0;
_V38/*l*/ = _V29/*elseAr*/["length"];
for(_V37/*i*/;(_V37/*i*/ < _V38/*l*/);++_V37/*i*/){{try
{_V29/*elseAr*/[_V37/*i*/](_V35/*value*/);;
}catch(e){};
}};
;
_V28/*thenAr*/ = _V24/*undefined*/;;
_V29/*elseAr*/ = _V24/*undefined*/;;
this["resolve"] = _V24/*undefined*/;;
this["reject"] = _V24/*undefined*/;;
;
});;
this["then"] = (function(_V41/*par1*/, _V42/*par2*/){
;
_V30/*thenFun*/(_V41/*par1*/, _V42/*par2*/);;
;
});;
this["thenReuse"] = (function(_V34/*parReuse*/, _V41/*par1*/, _V42/*par2*/){
;
_V33/*thenReuseFun*/(_V34/*parReuse*/, _V41/*par1*/, _V42/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
this["then"]["thenReuse"] = this["thenReuse"];;
;
});
_V43/*_ClassToken*/;
_V44/*_actClass*/;
_V45/*getClass*/ = (function(_V46/*cf*/){
;
_V44/*_actClass*/ = _V24/*undefined*/;;
_V46/*cf*/();;
return _V44/*_actClass*/;;
;
});
_V47/*classHider*/ = (function(_V48/*toHide*/){
;
return (function(){
;
_V44/*_actClass*/ = _V48/*toHide*/;;
;
});;
;
});
_V49/*builtinTypes*/ = {"var": _V47/*classHider*/({"isVar": true,
"isReady": true}),
"statement": _V47/*classHider*/({"isStatement": true,
"isReady": true})};
_V50/*nextInternalId*/ = 1;
_V51/*getNewInternalId*/ = (function(){
;
return _V50/*nextInternalId*/++;;
;
});
_V52/*internalObjects*/ = {};
_V53/*syncFun*/ = (function(_V54/*parInstance*/, _V55/*memberIdx*/, _V56/*mType*/, _V35/*value*/){
var _V57/*syncData*/;
var _V37/*i*/;
var _V59/*connection*/;
;
_V57/*syncData*/ = _V58/*classSystem*/["getSyncData"](_V54/*parInstance*/);
if(_V57/*syncData*/){
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V57/*syncData*/["connections"]["length"]);++_V37/*i*/){{_V59/*connection*/ = _V57/*syncData*/["connections"][_V37/*i*/];
_V59/*connection*/["syncValue"]({"transferId": _V59/*connection*/["getTransferId"](_V57/*syncData*/["getInternalId"]()),
"memberIdx": _V55/*memberIdx*/,
"value": _V35/*value*/});;
}};
;
};
;
;
});
_V60/*destroySynced*/ = (function(_V61/*parSyncData*/){
var _V57/*syncData*/;
var _V62/*connections*/;
var _V37/*i*/;
var _V59/*connection*/;
;
if(! _V61/*parSyncData*/){
return;;
};
;
_V57/*syncData*/ = _V61/*parSyncData*/;
_V62/*connections*/ = [];
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V57/*syncData*/["connections"]["length"]);++_V37/*i*/){{_V62/*connections*/["push"](_V57/*syncData*/["connections"][_V37/*i*/]);;
}};
;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V62/*connections*/["length"]);++_V37/*i*/){{_V59/*connection*/ = _V62/*connections*/[_V37/*i*/];
_V59/*connection*/["removeSynced"](_V57/*syncData*/["getInternalId"]());;
}};
;
;
});
_V63/*registerSyncClass*/ = (function(_V64/*hashStr*/, _V65/*nameStr*/, _V66/*parType*/){
var _V67/*moduleData*/;
;
_V67/*moduleData*/ = _V2/*getModuleData*/(_V64/*hashStr*/);
_V67/*moduleData*/["classes"][_V65/*nameStr*/] = {"type": _V66/*parType*/};;
;
});
_V68/*getSyncedClass*/ = (function(_V64/*hashStr*/, _V65/*nameStr*/){
var _V67/*moduleData*/;
;
_V67/*moduleData*/ = _V2/*getModuleData*/(_V64/*hashStr*/);
if((_V67/*moduleData*/ && _V67/*moduleData*/["classes"][_V65/*nameStr*/])){
return _V67/*moduleData*/["classes"][_V65/*nameStr*/]["type"];;
};
;
;
});
_V58/*classSystem*/ = {"_createProvisionalClass": (function(){
var _V69/*cDef*/;
var _V46/*cf*/;
;
_V69/*cDef*/ = {"provisional": true,
"promise": new _V70/*Promise*/(),
"type": _V24/*undefined*/};
_V69/*cDef*/["promise"]["then"]((function(_V71/*type*/){
;
_V69/*cDef*/["type"] = _V71/*type*/;;
;
}));;
_V46/*cf*/ = _V47/*classHider*/(_V69/*cDef*/);
return _V46/*cf*/;;
;
}),
"_resolveProvisional": (function(_V66/*parType*/, _V72/*parResult*/){
var _V21/*self*/;
var _V73/*typeDef*/;
var _V74/*resultDef*/;
;
_V21/*self*/ = this;
_V73/*typeDef*/ = _V45/*getClass*/(_V66/*parType*/);
_V74/*resultDef*/ = _V45/*getClass*/(_V72/*parResult*/);
if(_V74/*resultDef*/["provisional"]){
_V74/*resultDef*/["promise"]["then"]((function(_V75/*result*/){
;
_V21/*self*/["resolveProvisional"](_V66/*parType*/, _V75/*result*/);;
;
}));;

}else{
_V73/*typeDef*/["promise"]["resolve"](_V72/*parResult*/);;
};
;
;
}),
"isProvisional": (function(_V66/*parType*/){
var _V73/*typeDef*/;
;
_V73/*typeDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V73/*typeDef*/["provisional"]){
return true;;
};
;
return false;;
;
}),
"definitionPromise": (function(_V66/*parType*/){
var _V73/*typeDef*/;
var _V76/*p*/;
;
_V73/*typeDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V73/*typeDef*/["provisional"]){
return _V73/*typeDef*/["promise"];;
};
;
_V76/*p*/ = new _V70/*Promise*/();
_V76/*p*/["resolve"](_V66/*parType*/);;
return _V76/*p*/;;
;
}),
"readyPromise": (function(_V77/*_parType*/){
var _V76/*p*/;
;
_V76/*p*/ = new _V70/*Promise*/();
this["definitionPromise"](_V77/*_parType*/)["then"]((function(_V66/*parType*/){
var _V73/*typeDef*/;
;
_V73/*typeDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V73/*typeDef*/["isReady"]){
_V76/*p*/["resolve"](_V66/*parType*/);;
return;;
};
;
_V73/*typeDef*/["readyPromise"]["then"]((function(_V66/*parType*/){
;
_V76/*p*/["resolve"](_V66/*parType*/);;
;
}));;
return;;
;
}));;
return _V76/*p*/;;
;
}),
"_createTemporaryTrackedClass": (function(_V66/*parType*/){
var _V21/*self*/;
var _V78/*pr*/;
var _V69/*cDef*/;
var _V46/*cf*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V66/*parType*/)){
_V78/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V66/*parType*/)["then"]((function(_V79/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V78/*pr*/, _V21/*self*/["_createTemporaryTrackedClass"](_V79/*parDefinedClass*/));;
;
}));;
return _V78/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V66/*parType*/)){
return _V66/*parType*/;;
};
;
if(! this["isTrackedClass"](_V66/*parType*/)){
return _V66/*parType*/;;
};
;
_V69/*cDef*/ = {"temporaryTracked": true,
"type": _V66/*parType*/,
"isReady": false,
"readyPromise": new _V70/*Promise*/()};
_V46/*cf*/ = _V47/*classHider*/(_V69/*cDef*/);
_V21/*self*/["readyPromise"](_V66/*parType*/)["then"]((function(){
;
_V69/*cDef*/["ready"] = true;;
_V69/*cDef*/["readyPromise"]["resolve"](_V46/*cf*/);;
;
}));;
return _V46/*cf*/;;
;
}),
"isTemporaryTrackedClass": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["temporaryTracked"]){
return true;;
};
;
return false;;
;
}),
"getClassFromTemporaryTracked": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
if(this["isTemporaryTrackedClass"](_V66/*parType*/)){
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
return _V69/*cDef*/["type"];;
};
;
return _V66/*parType*/;;
;
}),
"_createPromiseOfClass": (function(_V66/*parType*/){
var _V21/*self*/;
var _V78/*pr*/;
var _V80/*track*/;
var _V81/*map*/;
var _V69/*cDef*/;
var _V46/*cf*/;
var _V82/*pcDef*/;
var _V83/*memberTrackMemberIdx*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V66/*parType*/)){
_V78/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V66/*parType*/)["then"]((function(_V79/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V78/*pr*/, _V21/*self*/["_createPromiseOfClass"](_V79/*parDefinedClass*/));;
;
}));;
return _V78/*pr*/;;
};
;
if(this["isVar"](_V66/*parType*/)){
return _V66/*parType*/;;
};
;
_V80/*track*/ = false;
if(this["isTrackedClass"](_V66/*parType*/)){
_V80/*track*/ = true;;
};
;
_V81/*map*/ = {};
_V69/*cDef*/ = {"promiseOf": true,
"type": _V66/*parType*/,
"isReady": true,
"readyPromise": new _V70/*Promise*/(),
"track": _V80/*track*/,
"map": _V81/*map*/};
_V46/*cf*/ = _V47/*classHider*/(_V69/*cDef*/);
if(_V80/*track*/){
_V69/*cDef*/["map"]["trackRootIdx"] = "rootTrack";;
_V69/*cDef*/["map"]["trackMemberIdx"] = "memberTrack";;
_V82/*pcDef*/ = _V45/*getClass*/(_V66/*parType*/);
_V83/*memberTrackMemberIdx*/ = _V82/*pcDef*/["map"]["trackMemberIdx"];
_V69/*cDef*/["constructor"] = (function(){
var _V84/*r*/;
;
_V84/*r*/ = new _V19/*TrackedPromise*/((function(_V85/*parTempValue*/, _V86/*parTracker*/){
var _V87/*v*/;
var _V38/*l*/;
;
_V87/*v*/ = _V85/*parTempValue*/[0];
_V38/*l*/ = _V87/*v*/[_V83/*memberTrackMemberIdx*/](_V86/*parTracker*/);
_V85/*parTempValue*/[1]();;
return _V38/*l*/;;
;
}));
return [_V84/*r*/, _V84/*r*/["rootTrack"]()];;
;
});;

}else{
_V69/*cDef*/["constructor"] = _V70/*Promise*/;;
};
;
_V69/*cDef*/["readyPromise"]["resolve"](_V46/*cf*/);;
return _V46/*cf*/;;
;
}),
"isPromiseOfClass": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["promiseOf"]){
return true;;
};
;
return false;;
;
}),
"getClassFromPromiseOf": (function(_V66/*parType*/){
var _V21/*self*/;
var _V78/*pr*/;
var _V69/*cDef*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V66/*parType*/)){
_V78/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V66/*parType*/)["then"]((function(_V79/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V78/*pr*/, _V21/*self*/["getClassFromPromiseOf"](_V79/*parDefinedClass*/));;
;
}));;
return _V78/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V66/*parType*/)){
return this["getClassFromPromiseOf"](this["getClassFromTemporaryTracked"](_V66/*parType*/));;
};
;
if(this["isPromiseOfClass"](_V66/*parType*/)){
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
return this["_createTemporaryTrackedClass"](_V69/*cDef*/["type"]);;
};
;
return _V66/*parType*/;;
;
}),
"isSameType": (function(_V88/*type1*/, _V89/*type2*/){
var _V90/*cDef1*/;
var _V91/*cDef2*/;
;
if((_V88/*type1*/ === _V89/*type2*/)){
return true;;
};
;
_V90/*cDef1*/ = _V45/*getClass*/(_V88/*type1*/);
if(_V90/*cDef1*/["provisional"]){
if(! _V90/*cDef1*/["type"]){
return false;;
};
;
_V88/*type1*/ = _V90/*cDef1*/["type"];;
_V90/*cDef1*/ = _V45/*getClass*/(_V88/*type1*/);;
};
;
_V91/*cDef2*/ = _V45/*getClass*/(_V89/*type2*/);
if(_V91/*cDef2*/["provisional"]){
if(! _V91/*cDef2*/["type"]){
return false;;
};
;
_V89/*type2*/ = _V91/*cDef2*/["type"];;
_V91/*cDef2*/ = _V45/*getClass*/(_V89/*type2*/);;
};
;
if((_V88/*type1*/ === _V89/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(_V92/*classLiteral*/, _V93/*parDefaults*/){
var _V21/*self*/;
;
_V21/*self*/ = this;
return _V21/*self*/["_createClass"](_V92/*classLiteral*/, _V93/*parDefaults*/);;
;
}),
"_membersDefined": (function(_V92/*classLiteral*/){
var _V21/*self*/;
var _V94/*cnt*/;
var _V95/*retPs*/;
var _V96/*check*/;
var _V97/*addMember*/;
var _V37/*i*/;
;
_V21/*self*/ = this;
_V94/*cnt*/ = 1;
_V95/*retPs*/ = new _V70/*Promise*/();
_V96/*check*/ = (function(){
;
if(_V94/*cnt*/){
return;;
};
;
_V95/*retPs*/["resolve"](_V92/*classLiteral*/);;
;
});
_V97/*addMember*/ = (function(_V98/*m*/){
;
++_V94/*cnt*/;;
_V21/*self*/["definitionPromise"](_V98/*m*/["type"])["then"]((function(_V99/*definedType*/){
;
_V98/*m*/["type"] = _V99/*definedType*/;;
--_V94/*cnt*/;;
_V96/*check*/();;
;
}));;
;
});
if(_V92/*classLiteral*/["members"]){
_V37/*i*/ = 0;
for(_V37/*i*/;(_V37/*i*/ < _V92/*classLiteral*/["members"]["length"]);++_V37/*i*/){{_V97/*addMember*/(_V92/*classLiteral*/["members"][_V37/*i*/]);;
}};
;
};
;
--_V94/*cnt*/;;
_V96/*check*/();;
return _V95/*retPs*/;;
;
}),
"_createClass": (function(_V92/*classLiteral*/, _V93/*parDefaults*/){
var _V100/*cAr*/;
var _V21/*self*/;
var _V81/*map*/;
var _V69/*cDef*/;
var _V46/*cf*/;
var _V101/*sync*/;
var _V102/*syncAll*/;
var _V103/*trackerIdx*/;
var _V104/*trackRootIdx*/;
var _V105/*trackMemberIdx*/;
var _V107/*freepart*/;
var _V112/*helpAr*/;
var _V113/*makeHelpAr*/;
var _V114/*conIdx*/;
var _V120/*constructorDef*/;
var _V121/*constructorFun*/;
var _V122/*destroyDef*/;
var _V23/*destroyFun*/;
var _V123/*untrackIdxAr*/;
var _V97/*addMember*/;
var _V132/*createMembersPs*/;
var _V134/*memberPs*/;
var _V37/*i*/;
var _V135/*proto*/;
var _V136/*freeFun*/;
var _V137/*f*/;
var _V138/*finalPs*/;
;
_V100/*cAr*/ = [];
_V21/*self*/ = this;
_V81/*map*/ = {"members": {},
"extends": []};
_V69/*cDef*/ = {"constructor": _V24/*undefined*/,
"map": _V81/*map*/,
"isReady": false,
"track": ((_V92/*classLiteral*/["track"] || _V92/*classLiteral*/["sync"]) ? true : false),
"sync": _V92/*classLiteral*/["sync"],
"readyPromise": new _V70/*Promise*/()};
_V46/*cf*/ = _V47/*classHider*/(_V69/*cDef*/);
_V100/*cAr*/["push"](_V46/*cf*/);;
_V101/*sync*/ = (_V92/*classLiteral*/["sync"] ? true : false);
_V102/*syncAll*/ = false;
if(_V101/*sync*/){
if(_V92/*classLiteral*/["sync"]["all"]){
_V102/*syncAll*/ = true;;
};
;
};
;
_V103/*trackerIdx*/;
_V104/*trackRootIdx*/;
_V105/*trackMemberIdx*/;
if(_V69/*cDef*/["track"]){
_V81/*map*/["trackerIdx"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V24/*undefined*/);;
_V81/*map*/["trackRootIdx"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V24/*undefined*/);;
_V81/*map*/["trackMemberIdx"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V24/*undefined*/);;
_V103/*trackerIdx*/ = _V81/*map*/["trackerIdx"];;
_V104/*trackRootIdx*/ = _V81/*map*/["trackRootIdx"];;
_V105/*trackMemberIdx*/ = _V81/*map*/["trackMemberIdx"];;
};
;
if(_V101/*sync*/){
_V81/*map*/["syncDataIdx"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"]((function(){
var _V21/*self*/;
var _V106/*internalId*/;
var _V57/*syncData*/;
;
_V21/*self*/ = this;
_V106/*internalId*/;
_V57/*syncData*/ = {"getInternalId": (function(){
;
if(_V106/*internalId*/){
return _V106/*internalId*/;;
};
;
_V106/*internalId*/ = _V51/*getNewInternalId*/();;
_V52/*internalObjects*/[_V106/*internalId*/] = _V21/*self*/;;
return _V106/*internalId*/;;
;
}),
"connections": []};
this[_V81/*map*/["syncDataIdx"]] = (function(){
;
return _V57/*syncData*/;;
;
});;
return _V57/*syncData*/;;
;
}));;
};
;
if(_V92/*classLiteral*/["hasFreePart"]){
_V107/*freepart*/ = {};
_V81/*map*/["freePart"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V107/*freepart*/);;
_V81/*map*/["getMemberCode"] = [_V108/*MAKRO_SELF*/, (("[" + _V81/*map*/["freePart"]) + "]["), _V109/*MAKRO_PROPERTYVALUE*/, "]"];;
_V81/*map*/["setMemberCode"] = [_V108/*MAKRO_SELF*/, (("[" + _V81/*map*/["freePart"]) + "]["), _V109/*MAKRO_PROPERTYVALUE*/, "] ", _V110/*MAKRO_OPERATOR*/, " ", _V111/*MAKRO_VALUE*/];;
};
;
_V112/*helpAr*/ = [];
_V113/*makeHelpAr*/ = (function(){
;
return _V112/*helpAr*/["slice"]();;
;
});
_V81/*map*/["connectIdx"] = _V100/*cAr*/["length"];;
_V114/*conIdx*/ = _V81/*map*/["connectIdx"];
_V100/*cAr*/["push"]((function(){
var _V112/*helpAr*/;
var _V119/*arguments*/ = arguments;
;
_V112/*helpAr*/ = _V113/*makeHelpAr*/();
this[_V114/*conIdx*/] = (function(_V115/*idx*/, _V116/*fun*/, _V117/*base*/){
var _V118/*chain*/;
;
_V118/*chain*/ = _V112/*helpAr*/[_V115/*idx*/];
if(! _V118/*chain*/){
_V118/*chain*/ = _V14/*Chainable*/(this, _V115/*idx*/);;
_V112/*helpAr*/[_V115/*idx*/] = _V118/*chain*/;;
};
;
return _V118/*chain*/(_V116/*fun*/, _V117/*base*/);;
;
});;
return this[_V114/*conIdx*/]["apply"](this, _V119/*arguments*/);;
;
}));;
_V120/*constructorDef*/;
_V121/*constructorFun*/;
_V122/*destroyDef*/;
_V23/*destroyFun*/;
_V123/*untrackIdxAr*/ = [];
_V97/*addMember*/ = (function(_V98/*m*/){
var _V124/*mDef*/;
var _V56/*mType*/;
var _V55/*memberIdx*/;
var _V125/*isTrackedMember*/;
var _V127/*def*/;
var _V128/*mCDef*/;
var _V83/*memberTrackMemberIdx*/;
;
_V124/*mDef*/ = {"index": _V100/*cAr*/["length"]};
if((_V102/*syncAll*/ || _V98/*m*/["sync"])){
_V124/*mDef*/["sync"] = true;;
};
;
_V124/*mDef*/["type"] = _V98/*m*/["type"];;
_V56/*mType*/ = _V98/*m*/["type"];
_V55/*memberIdx*/ = _V124/*mDef*/["index"];
_V125/*isTrackedMember*/ = _V21/*self*/["isTrackedClass"](_V124/*mDef*/["type"]);
if(_V124/*mDef*/["sync"]){
_V124/*mDef*/["hasSetter"] = true;;
if(_V125/*isTrackedMember*/){
_V124/*mDef*/["defaultSetter"] = (function(_V126/*vAr*/){
;
_V53/*syncFun*/(this, _V55/*memberIdx*/, _V56/*mType*/, _V126/*vAr*/[0]);;
return _V126/*vAr*/;;
;
});;

}else{
_V124/*mDef*/["defaultSetter"] = (function(_V87/*v*/){
;
_V53/*syncFun*/(this, _V55/*memberIdx*/, _V56/*mType*/, _V87/*v*/);;
return _V87/*v*/;;
;
});;
};
;
};
;
_V81/*map*/["members"][_V98/*m*/["name"]] = _V124/*mDef*/;;
_V127/*def*/ = (_V93/*parDefaults*/ ? _V93/*parDefaults*/[_V98/*m*/["name"]] : _V24/*undefined*/);
_V100/*cAr*/["push"](_V127/*def*/);;
if(_V124/*mDef*/["hasSetter"]){
_V124/*mDef*/["setterIdx"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V124/*mDef*/["defaultSetter"]);;
};
;
if((_V98/*m*/["name"] == "constructor")){
_V120/*constructorDef*/ = _V124/*mDef*/;;
_V121/*constructorFun*/ = _V127/*def*/;;
};
;
if((_V98/*m*/["name"] == "destroy")){
_V122/*destroyDef*/ = _V124/*mDef*/;;
_V23/*destroyFun*/ = _V127/*def*/;;
};
;
_V124/*mDef*/["getCode"] = [_V108/*MAKRO_SELF*/, (("[" + _V124/*mDef*/["index"]) + "]")];;
if(_V124/*mDef*/["hasSetter"]){
_V124/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + _V124/*mDef*/["setterIdx"]) + "](v); s[") + _V124/*mDef*/["index"]) + "] "), _V110/*MAKRO_OPERATOR*/, " v; return v; })(", _V108/*MAKRO_SELF*/, ", ", _V111/*MAKRO_VALUE*/, ")"];;

}else{
_V124/*mDef*/["setCode"] = [_V108/*MAKRO_SELF*/, (("[" + _V124/*mDef*/["index"]) + "] "), _V110/*MAKRO_OPERATOR*/, " ", _V111/*MAKRO_VALUE*/];;
};
;
if(_V125/*isTrackedMember*/){
_V128/*mCDef*/ = _V45/*getClass*/(_V124/*mDef*/["type"]);
_V83/*memberTrackMemberIdx*/ = _V128/*mCDef*/["map"]["trackMemberIdx"];
_V124/*mDef*/["trackIndex"] = _V100/*cAr*/["length"];;
_V100/*cAr*/["push"](_V24/*undefined*/);;
_V123/*untrackIdxAr*/["push"](_V124/*mDef*/["trackIndex"]);;
if(_V69/*cDef*/["track"]){
if(_V124/*mDef*/["hasSetter"]){
_V124/*mDef*/["setCode"] = [_V129/*runtimeError*/(_V130/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V124/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + _V124/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + _V124/*mDef*/["index"]) + "] "), _V110/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V124/*mDef*/["trackIndex"]) + "]){ s[") + _V124/*mDef*/["trackIndex"]) + "](); }; s[") + _V124/*mDef*/["trackIndex"]) + "] = v[") + _V83/*memberTrackMemberIdx*/) + "](s[") + _V103/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V108/*MAKRO_SELF*/, ", ", _V111/*MAKRO_VALUE*/, ")"];;

}else{
_V124/*mDef*/["setCode"] = [(("(function(s, v){ s[" + _V124/*mDef*/["index"]) + "] "), _V110/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V124/*mDef*/["trackIndex"]) + "]){ s[") + _V124/*mDef*/["trackIndex"]) + "](); }; s[") + _V124/*mDef*/["trackIndex"]) + "] = v[") + _V83/*memberTrackMemberIdx*/) + "](s[") + _V103/*trackerIdx*/) + "]); return v; })("), _V108/*MAKRO_SELF*/, ", ", _V111/*MAKRO_VALUE*/, ")"];;
_V124/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + _V124/*mDef*/["index"]) + "] "), _V110/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V124/*mDef*/["trackIndex"]) + "]){ s[") + _V124/*mDef*/["trackIndex"]) + "](); }; s[") + _V124/*mDef*/["trackIndex"]) + "] = v[") + _V83/*memberTrackMemberIdx*/) + "](s[") + _V103/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V108/*MAKRO_SELF*/, ", ", _V111/*MAKRO_VALUE*/, ")"];;
};
;

}else{
_V124/*mDef*/["setCode"] = [_V129/*runtimeError*/(_V130/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V124/*mDef*/["setCodeFromTemporary"] = [_V129/*runtimeError*/(_V130/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
_V124/*mDef*/["connectFunCode"] = [_V108/*MAKRO_SELF*/, (((("[" + _V81/*map*/["connectIdx"]) + "](") + _V124/*mDef*/["index"]) + ", "), _V111/*MAKRO_VALUE*/, ")"];;
_V124/*mDef*/["connectSlotCode"] = [_V108/*MAKRO_SELF*/, (((("[" + _V81/*map*/["connectIdx"]) + "](") + _V124/*mDef*/["index"]) + ", "), _V111/*MAKRO_VALUE*/, "[", _V131/*MAKRO_VALUEPROPERTY*/, "], ", _V111/*MAKRO_VALUE*/, ")"];;
;
});
_V132/*createMembersPs*/ = (function(){
var _V133/*donePs*/;
;
_V133/*donePs*/ = new _V70/*Promise*/();
_V21/*self*/["_membersDefined"](_V92/*classLiteral*/)["then"]((function(){
var _V37/*i*/;
;
_V37/*i*/;
if(_V92/*classLiteral*/["members"]){
_V37/*i*/ = 0;
for(_V37/*i*/;(_V37/*i*/ < _V92/*classLiteral*/["members"]["length"]);++_V37/*i*/){{_V97/*addMember*/(_V92/*classLiteral*/["members"][_V37/*i*/]);;
}};
;
};
;
_V133/*donePs*/["resolve"]();;
;
}));;
return _V133/*donePs*/;;
;
});
_V134/*memberPs*/ = new _V132/*createMembersPs*/();
_V37/*i*/;
if(_V92/*classLiteral*/["hasFreePart"]){
_V135/*proto*/ = {};
if(_V93/*parDefaults*/){
for(_V37/*i*/ in _V93/*parDefaults*/){if(! _V81/*map*/["members"][_V37/*i*/]){
_V135/*proto*/[_V37/*i*/] = _V93/*parDefaults*/[_V37/*i*/];;
};
;
};
;
};
;
_V136/*freeFun*/ = (function(){
;
;
});
_V136/*freeFun*/["prototype"] = _V135/*proto*/;;
_V137/*f*/ = _V81/*map*/["freePart"];
if(_V69/*cDef*/["track"]){
_V69/*cDef*/["constructor"] = (function(){
var _V84/*r*/;
var _V25/*t*/;
;
_V84/*r*/ = _V100/*cAr*/["slice"]();
_V84/*r*/[_V137/*f*/] = new _V136/*freeFun*/();;
_V25/*t*/ = _V9/*Tracker*/((function(){
;
_V23/*destroyFun*/["apply"](_V84/*r*/);;
;
}));
_V84/*r*/[_V103/*trackerIdx*/] = _V25/*t*/[0];;
_V84/*r*/[_V104/*trackRootIdx*/] = _V25/*t*/[1];;
_V84/*r*/[_V105/*trackMemberIdx*/] = _V25/*t*/[2];;
return [_V84/*r*/, _V84/*r*/[_V104/*trackRootIdx*/]()];;
;
});;

}else{
_V69/*cDef*/["constructor"] = (function(){
var _V84/*r*/;
;
_V84/*r*/ = _V100/*cAr*/["slice"]();
_V84/*r*/[_V137/*f*/] = new _V136/*freeFun*/();;
return _V84/*r*/;;
;
});;
};
;

}else{
if(_V69/*cDef*/["track"]){
_V69/*cDef*/["constructor"] = (function(){
var _V84/*r*/;
var _V25/*t*/;
;
_V84/*r*/ = _V100/*cAr*/["slice"]();
_V25/*t*/ = _V9/*Tracker*/((function(){
;
_V23/*destroyFun*/["apply"](_V84/*r*/);;
;
}));
_V84/*r*/[_V103/*trackerIdx*/] = _V25/*t*/[0];;
_V84/*r*/[_V104/*trackRootIdx*/] = _V25/*t*/[1];;
_V84/*r*/[_V105/*trackMemberIdx*/] = _V25/*t*/[2];;
return [_V84/*r*/, _V84/*r*/[_V104/*trackRootIdx*/]()];;
;
});;

}else{
_V69/*cDef*/["constructor"] = (function(){
var _V84/*r*/;
;
_V84/*r*/ = _V100/*cAr*/["slice"]();
return _V84/*r*/;;
;
});;
};
;
};
;
_V138/*finalPs*/ = new _V70/*Promise*/();
_V134/*memberPs*/["then"]((function(){
var _V37/*i*/;
var _V139/*realConstructor*/;
var _V141/*conDef*/;
var _V142/*_destroyFun*/;
var _V145/*_sync_destroyFun*/;
;
_V37/*i*/;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V100/*cAr*/["length"]);++_V37/*i*/){{_V112/*helpAr*/["push"](_V24/*undefined*/);;
}};
;
if(_V120/*constructorDef*/){
_V69/*cDef*/["constructorArguments"] = [];;
_V139/*realConstructor*/ = _V69/*cDef*/["constructor"];
if(_V69/*cDef*/["track"]){
_V69/*cDef*/["constructor"] = (function(){
var _V140/*instance*/;
var _V119/*arguments*/ = arguments;
;
_V140/*instance*/ = _V139/*realConstructor*/();
_V121/*constructorFun*/["apply"](_V140/*instance*/[0], _V119/*arguments*/);;
return _V140/*instance*/;;
;
});;

}else{
_V69/*cDef*/["constructor"] = (function(){
var _V140/*instance*/;
var _V119/*arguments*/ = arguments;
;
_V140/*instance*/ = _V139/*realConstructor*/();
_V121/*constructorFun*/["apply"](_V140/*instance*/, _V119/*arguments*/);;
return _V140/*instance*/;;
;
});;
};
;
_V141/*conDef*/ = _V45/*getClass*/(_V120/*constructorDef*/["type"]);
_V69/*cDef*/["constructorType"] = _V21/*self*/["createFunctionType"]({"return": _V46/*cf*/,
"arguments": _V141/*conDef*/["arguments"]});;

}else{
_V69/*cDef*/["constructorType"] = _V21/*self*/["createFunctionType"]({"return": _V46/*cf*/});;
};
;
if(_V69/*cDef*/["track"]){
_V142/*_destroyFun*/;
if(_V123/*untrackIdxAr*/["length"]){
if(_V122/*destroyDef*/){
_V142/*_destroyFun*/ = _V23/*destroyFun*/;;
_V23/*destroyFun*/ = (function(){
var _V37/*i*/;
var _V143/*curIdx*/;
var _V144/*tFun*/;
;
_V37/*i*/;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V123/*untrackIdxAr*/["length"]);++_V37/*i*/){{_V143/*curIdx*/ = _V123/*untrackIdxAr*/[_V37/*i*/];
_V144/*tFun*/ = this[_V143/*curIdx*/];
this[_V143/*curIdx*/] = _V24/*undefined*/;;
if(_V144/*tFun*/){
_V144/*tFun*/();;
};
;
}};
;
_V142/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V23/*destroyFun*/ = (function(){
var _V37/*i*/;
var _V144/*tFun*/;
;
_V37/*i*/;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V123/*untrackIdxAr*/["length"]);++_V37/*i*/){{_V144/*tFun*/ = this[_V123/*untrackIdxAr*/[_V37/*i*/]];
if(_V144/*tFun*/){
_V144/*tFun*/();;
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
if(_V122/*destroyDef*/){
_V142/*_destroyFun*/ = _V23/*destroyFun*/;;
_V23/*destroyFun*/ = (function(){
;
_V142/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V23/*destroyFun*/ = (function(){
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
if(_V101/*sync*/){
_V145/*_sync_destroyFun*/ = _V23/*destroyFun*/;
_V23/*destroyFun*/ = (function(){
var _V57/*syncData*/;
;
_V57/*syncData*/ = _V58/*classSystem*/["getSyncData"](this);
_V145/*_sync_destroyFun*/["apply"](this);;
_V60/*destroySynced*/(_V57/*syncData*/);;
;
});;
};
;
_V138/*finalPs*/["resolve"]();;
;
}));;
_V138/*finalPs*/["then"]((function(){
;
_V69/*cDef*/["isReady"] = true;;
_V69/*cDef*/["readyPromise"]["resolve"](_V46/*cf*/);;
;
}));;
if(_V101/*sync*/){
if(_V92/*classLiteral*/["name"]){
_V69/*cDef*/["syncId"] = {"hash": _V92/*classLiteral*/["hashStr"],
"name": _V92/*classLiteral*/["name"]};;
_V63/*registerSyncClass*/(_V92/*classLiteral*/["hashStr"], _V92/*classLiteral*/["name"], _V46/*cf*/);;
};
;
};
;
return _V46/*cf*/;;
;
}),
"getInternalId": (function(_V54/*parInstance*/){
var _V71/*type*/;
var _V69/*cDef*/;
var _V57/*syncData*/;
;
_V71/*type*/ = _V54/*parInstance*/[0];
_V69/*cDef*/ = _V45/*getClass*/(_V71/*type*/);
if(_V69/*cDef*/["sync"]){
_V57/*syncData*/ = _V54/*parInstance*/[_V69/*cDef*/["map"]["syncDataIdx"]]();
return _V57/*syncData*/["getInternalId"]();;
};
;
return;;
;
}),
"getSyncData": (function(_V54/*parInstance*/){
var _V71/*type*/;
var _V69/*cDef*/;
;
_V71/*type*/ = _V54/*parInstance*/[0];
_V69/*cDef*/ = _V45/*getClass*/(_V71/*type*/);
if(_V69/*cDef*/["sync"]){
return _V54/*parInstance*/[_V69/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
}),
"getSyncRequestData": (function(_V54/*parInstance*/, _V146/*parConnection*/){
var _V71/*type*/;
var _V69/*cDef*/;
var _V147/*syncMembers*/;
var _V148/*membersMap*/;
var _V149/*memberName*/;
var _V98/*m*/;
var _V80/*track*/;
var _V57/*syncData*/;
;
_V71/*type*/ = _V54/*parInstance*/[0];
_V69/*cDef*/ = _V45/*getClass*/(_V71/*type*/);
if(_V69/*cDef*/["sync"]){
_V147/*syncMembers*/ = {"m": []};
_V148/*membersMap*/ = _V69/*cDef*/["map"]["members"];
_V149/*memberName*/;
for(_V149/*memberName*/ in _V148/*membersMap*/){_V98/*m*/ = _V148/*membersMap*/[_V149/*memberName*/];
if((typeof _V54/*parInstance*/[_V98/*m*/["index"]] != "function")){
_V147/*syncMembers*/[_V98/*m*/["index"]] = _V54/*parInstance*/[_V98/*m*/["index"]];;
_V147/*syncMembers*/["m"]["push"](_V98/*m*/["index"]);;
};
;
};
;
_V80/*track*/ = this["getTrack"](_V54/*parInstance*/);
_V57/*syncData*/ = {"members": _V147/*syncMembers*/,
"syncId": _V69/*cDef*/["syncId"],
"transferId": _V146/*parConnection*/["newTransferId"](this["getInternalId"](_V54/*parInstance*/), _V80/*track*/)};
return _V57/*syncData*/;;
};
;
return;;
;
}),
"getObjFromSyncData": (function(_V150/*syncRequestData*/, _V146/*parConnection*/){
var _V151/*syncId*/;
var _V71/*type*/;
var _V152/*ConFun*/;
var _V140/*instance*/;
var _V153/*realInstance*/;
var _V147/*syncMembers*/;
var _V98/*m*/;
var _V37/*i*/;
;
_V151/*syncId*/ = _V150/*syncRequestData*/["syncId"];
_V71/*type*/ = _V68/*getSyncedClass*/(_V151/*syncId*/["hash"], _V151/*syncId*/["name"]);
if(! _V71/*type*/){
return;;
};
;
_V152/*ConFun*/ = this["getTypeConstructor"](_V71/*type*/);
_V140/*instance*/ = new _V152/*ConFun*/();
_V153/*realInstance*/ = _V140/*instance*/[0];
_V146/*parConnection*/["newTransferId"](this["getInternalId"](_V153/*realInstance*/), _V24/*undefined*/, _V150/*syncRequestData*/["transferId"]);;
_V147/*syncMembers*/ = _V150/*syncRequestData*/["members"];
_V98/*m*/ = _V147/*syncMembers*/["m"];
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V98/*m*/["length"]);++_V37/*i*/){{_V153/*realInstance*/[_V98/*m*/[_V37/*i*/]] = _V147/*syncMembers*/[_V98/*m*/[_V37/*i*/]];;
}};
;
return _V140/*instance*/;;
;
}),
"isFunctionType": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(_V154/*par*/){
var _V21/*self*/;
var _V69/*cDef*/;
var _V155/*checkReady*/;
var _V156/*makeTemporaries*/;
var _V157/*isReady*/;
var _V158/*resolveTypeFun*/;
var _V37/*i*/;
var _V46/*cf*/;
;
_V21/*self*/ = this;
_V69/*cDef*/ = {"isFunction": true,
"return": (_V154/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (_V154/*par*/["arguments"] || []),
"isReady": false};
_V155/*checkReady*/ = (function(){
;
_V156/*makeTemporaries*/();;
;
});
_V156/*makeTemporaries*/ = (function(){
var _V37/*i*/;
;
_V69/*cDef*/["return"] = _V21/*self*/["_createTemporaryTrackedClass"](_V69/*cDef*/["return"]);;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V69/*cDef*/["arguments"]["length"]);++_V37/*i*/){{_V69/*cDef*/["arguments"][_V37/*i*/] = _V21/*self*/["_createTemporaryTrackedClass"](_V69/*cDef*/["arguments"][_V37/*i*/]);;
}};
;
;
});
_V157/*isReady*/ = true;
if(_V21/*self*/["isProvisional"](_V69/*cDef*/["return"])){
_V157/*isReady*/ = false;;
_V21/*self*/["definitionPromise"](_V69/*cDef*/["return"])["then"]((function(_V66/*parType*/){
;
_V69/*cDef*/["return"] = _V66/*parType*/;;
_V155/*checkReady*/();;
;
}));;
};
;
_V158/*resolveTypeFun*/ = (function(_V159/*parI*/){
;
return (function(_V66/*parType*/){
;
_V69/*cDef*/["arguments"][_V159/*parI*/] = _V66/*parType*/;;
_V155/*checkReady*/();;
;
});;
;
});
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V69/*cDef*/["arguments"]["length"]);++_V37/*i*/){{if(_V21/*self*/["isProvisional"](_V69/*cDef*/["arguments"][_V37/*i*/])){
_V157/*isReady*/ = false;;
_V21/*self*/["definitionPromise"](_V69/*cDef*/["arguments"][_V37/*i*/])["then"](_V158/*resolveTypeFun*/(_V37/*i*/));;
};
;
}};
;
_V46/*cf*/ = _V47/*classHider*/(_V69/*cDef*/);
if(! _V157/*isReady*/){
_V69/*cDef*/["readyPromise"] = new _V70/*Promise*/();;
_V155/*checkReady*/ = (function(){
var _V37/*i*/;
;
if(_V21/*self*/["isProvisional"](_V69/*cDef*/["return"])){
return;;
};
;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V69/*cDef*/["arguments"]["length"]);++_V37/*i*/){{if(_V21/*self*/["isProvisional"](_V69/*cDef*/["arguments"][_V37/*i*/])){
return;;
};
;
}};
;
_V156/*makeTemporaries*/();;
_V69/*cDef*/["isReady"] = true;;
_V69/*cDef*/["readyPromise"]["resolve"](_V46/*cf*/);;
;
});;
_V155/*checkReady*/();;

}else{
_V155/*checkReady*/();;
_V69/*cDef*/["isReady"] = true;;
};
;
return _V46/*cf*/;;
;
}),
"isVar": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return _V69/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if(_V69/*cDef*/["arguments"]){
return _V69/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(_V66/*parType*/, _V160/*parIndex*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
if((_V69/*cDef*/["arguments"] && _V69/*cDef*/["arguments"][_V160/*parIndex*/])){
return _V69/*cDef*/["arguments"][_V160/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(_V66/*parType*/, _V160/*parIndex*/){
var _V69/*cDef*/;
var _V25/*t*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
_V25/*t*/;
if(_V69/*cDef*/["constructorArguments"]){
_V25/*t*/ = _V69/*cDef*/["constructorArguments"][_V160/*parIndex*/];;
};
;
if(_V25/*t*/){
return _V25/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(_V66/*parType*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
return _V69/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(_V161/*parName*/){
;
return _V49/*builtinTypes*/[_V161/*parName*/];;
;
}),
"getGetPropertyCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V81/*map*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
if(_V69/*cDef*/["isVar"]){
return _V162/*assembleCode*/([_V108/*MAKRO_SELF*/, "[", _V109/*MAKRO_PROPERTYVALUE*/, "]"], _V154/*par*/);;
};
;
_V81/*map*/ = _V69/*cDef*/["map"];
if(_V154/*par*/["property"]){
if(_V81/*map*/["members"][_V154/*par*/["property"]]){
return _V162/*assembleCode*/(_V81/*map*/["members"][_V154/*par*/["property"]]["getCode"], _V154/*par*/);;
};
;
};
;
if(_V81/*map*/["getMemberCode"]){
return _V162/*assembleCode*/(_V81/*map*/["getMemberCode"], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["accessNotAllowd"], _V154/*par*/);;
;
}),
"getPropertyAlias": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V81/*map*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
if(_V69/*cDef*/["isVar"]){
return _V154/*par*/["property"];;
};
;
_V81/*map*/ = _V69/*cDef*/["map"];
if(((_V81/*map*/ && _V81/*map*/["members"]) && _V81/*map*/["members"][_V154/*par*/["property"]])){
return _V81/*map*/["members"][_V154/*par*/["property"]]["index"];;
};
;
return _V154/*par*/["property"];;
;
}),
"getPropertyType": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V81/*map*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
if(_V69/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
_V81/*map*/ = _V69/*cDef*/["map"];
if(_V81/*map*/["members"][_V154/*par*/["property"]]){
if(_V154/*par*/["original"]){
return (_V81/*map*/["members"][_V154/*par*/["property"]]["originalType"] || _V81/*map*/["members"][_V154/*par*/["property"]]["type"]);;

}else{
return _V81/*map*/["members"][_V154/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(_V154/*par*/){
var _V69/*cDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
if(_V69/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(_V69/*cDef*/["constructorType"]){
return _V69/*cDef*/["constructorType"];;
};
;
throw _V130/*errorMsg*/["noConstructorAvailable"];
;
}),
"getSetPropertyCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V81/*map*/;
var _V163/*propertyType*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
if(_V69/*cDef*/["isVar"]){
if(! this["canSet"](this["getBuiltinType"]("var"), _V154/*par*/["valueType"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["typeMissmatch"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/([_V108/*MAKRO_SELF*/, "[", _V109/*MAKRO_PROPERTYVALUE*/, "] ", _V110/*MAKRO_OPERATOR*/, " ", _V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
_V81/*map*/ = _V69/*cDef*/["map"];
if((_V81/*map*/ && _V154/*par*/["property"])){
if(_V81/*map*/["members"][_V154/*par*/["property"]]){
_V163/*propertyType*/ = this["getPropertyType"]({"type": _V154/*par*/["type"],
"property": _V154/*par*/["property"]});
if(! this["canSet"](_V163/*propertyType*/, _V154/*par*/["valueType"])){
if(this["canSet"](_V163/*propertyType*/, this["getClassFromTemporaryTracked"](_V154/*par*/["valueType"]))){
return _V162/*assembleCode*/(_V81/*map*/["members"][_V154/*par*/["property"]]["setCodeFromTemporary"], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["typeMissmatch"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/(_V81/*map*/["members"][_V154/*par*/["property"]]["setCode"], _V154/*par*/);;
};
;
};
;
if((_V81/*map*/ && _V81/*map*/["setMemberCode"])){
if(! this["canSet"](this["getBuiltinType"]("var"), _V154/*par*/["valueType"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["typeMissmatch"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/(_V81/*map*/["setMemberCode"], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["accessNotAllowd"], _V154/*par*/);;
;
}),
"getConnectCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V81/*map*/;
var _V164/*valuePropertyType*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V81/*map*/ = _V69/*cDef*/["map"];
if(_V154/*par*/["valueProperty"]){
_V164/*valuePropertyType*/ = this["getPropertyType"]({"type": _V154/*par*/["valueType"],
"property": _V154/*par*/["valueProperty"]});
if(! this["canConnect"](_V154/*par*/["type"], _V154/*par*/["property"], _V164/*valuePropertyType*/)){
return _V129/*runtimeError*/(_V130/*errorMsg*/["connectNotPossible"], _V154/*par*/);;
};
;
_V154/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": _V154/*par*/["valueType"],
"property": _V154/*par*/["valueProperty"]}));;
return _V162/*assembleCode*/(_V81/*map*/["members"][_V154/*par*/["property"]]["connectSlotCode"], _V154/*par*/);;

}else{
if(! this["canConnect"](_V154/*par*/["type"], _V154/*par*/["property"], _V154/*par*/["valueType"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["connectNotPossible"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/(_V81/*map*/["members"][_V154/*par*/["property"]]["connectFunCode"], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["connectNotPossible"], _V154/*par*/);;
;
}),
"getPassAsTypeCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V165/*vcDef*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V165/*vcDef*/ = _V45/*getClass*/(_V154/*par*/["valueType"]);
if(_V154/*par*/["value"]){
if(! this["canSet"](_V154/*par*/["type"], _V154/*par*/["valueType"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["typeMissmatch"], _V154/*par*/);;
};
;
if(this["isTemporaryTrackedClass"](_V154/*par*/["type"])){
return this["getCreateTemporaryClassCode"](_V154/*par*/);;
};
;
return _V162/*assembleCode*/([_V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["missingVariable"], _V154/*par*/);;
;
}),
"getCreateTemporaryClassCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V166/*codeAr*/;
;
if(this["isTemporaryTrackedClass"](_V154/*par*/["valueType"])){
return _V162/*assembleCode*/([_V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
if(! this["isTrackedClass"](_V154/*par*/["valueType"])){
return _V162/*assembleCode*/([_V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["valueType"]);
_V166/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + _V69/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), _V111/*MAKRO_VALUE*/, ")"];
return _V162/*assembleCode*/(_V166/*codeAr*/, _V154/*par*/);;
;
}),
"getTrack": (function(_V54/*parInstance*/){
var _V71/*type*/;
var _V69/*cDef*/;
;
if(! _V54/*parInstance*/){
return;;
};
;
_V71/*type*/ = _V54/*parInstance*/[0];
_V69/*cDef*/ = _V45/*getClass*/(_V71/*type*/);
return _V54/*parInstance*/[_V69/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"getDestroyTemporaryClassCode": (function(_V154/*par*/){
var _V166/*codeAr*/;
;
if(! this["isTemporaryTrackedClass"](_V154/*par*/["valueType"])){
if(_V154/*par*/["noValueRequired"]){
return _V162/*assembleCode*/([], _V154/*par*/);;
};
;
return _V162/*assembleCode*/([_V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
_V166/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", _V111/*MAKRO_VALUE*/, ")"];
return _V162/*assembleCode*/(_V166/*codeAr*/, _V154/*par*/);;
;
}),
"dereferencePromisePreCode": (function(_V154/*par*/){
var _V166/*codeAr*/;
;
_V166/*codeAr*/ = [_V111/*MAKRO_VALUE*/, ".then("];
if(this["isTemporaryTrackedClass"](_V154/*par*/["valueType"])){
_V166/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];;
};
;
return _V162/*assembleCode*/(_V166/*codeAr*/, _V154/*par*/);;
;
}),
"dereferencePromisePostCode": (function(_V154/*par*/){
var _V166/*codeAr*/;
;
_V166/*codeAr*/ = [");\n"];
if(this["isTemporaryTrackedClass"](_V154/*par*/["valueType"])){
_V166/*codeAr*/ = [");\nreturn r;\n})(", _V111/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];;
};
;
return _V162/*assembleCode*/(_V166/*codeAr*/, _V154/*par*/);;
;
}),
"promisingReturnTypeCheck": (function(_V154/*par*/){
;
if(! this["isPromiseOfClass"](_V154/*par*/["type"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["notAPromise"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/([], _V154/*par*/);;
;
}),
"getSetVariableCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V165/*vcDef*/;
var _V167/*operator*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V165/*vcDef*/ = _V45/*getClass*/(_V154/*par*/["valueType"]);
if(_V154/*par*/["instance"]){
_V167/*operator*/ = (_V154/*par*/["operator"] || "=");
if((_V167/*operator*/ != "=")){
if(! (_V69/*cDef*/["isVar"] && _V165/*vcDef*/["isVar"])){
return _V129/*runtimeError*/(_V130/*errorMsg*/["operatorMissmatch"], _V154/*par*/);;
};
;
};
;
if(! this["canSet"](_V154/*par*/["type"], _V154/*par*/["valueType"])){
if(this["canSet"](_V154/*par*/["type"], this["getClassFromTemporaryTracked"](_V154/*par*/["valueType"]))){
if((_V154/*par*/["assignmentType"] == "Identifier")){
return _V162/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", _V108/*MAKRO_SELF*/, "){ _T", _V108/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", _V108/*MAKRO_SELF*/, " ", _V167/*operator*/, " v;\n", "_T", _V108/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", _V108/*MAKRO_SELF*/, " ", _V167/*operator*/, " undefined; ", "_T", _V108/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", _V111/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], _V154/*par*/);;
};
;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["typeMissmatch"], _V154/*par*/);;
};
;
return _V162/*assembleCode*/([_V108/*MAKRO_SELF*/, " ", _V167/*operator*/, " ", _V111/*MAKRO_VALUE*/], _V154/*par*/);;
};
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["missingVariable"], _V154/*par*/);;
;
}),
"declareReturnPromiseCode": (function(_V154/*par*/){
var _V168/*retType*/;
var _V80/*track*/;
var _V169/*assemblyAr*/;
;
_V168/*retType*/ = _V154/*par*/["type"];
_V80/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V168/*retType*/)){
_V80/*track*/ = true;;
_V168/*retType*/ = this["getClassFromTemporaryTracked"](_V168/*retType*/);;
};
;
if(this["isTrackedClass"](_V168/*retType*/)){
_V80/*track*/ = true;;
};
;
_V169/*assemblyAr*/;
if(_V80/*track*/){
_V169/*assemblyAr*/ = ["var ", _V154/*par*/["name"], ";\nvar _T", _V154/*par*/["name"], ";\n(function(){ var vAr = new ", _V170/*MAKRO_CONSTRUCTOR*/, "(); ", _V154/*par*/["name"], " = vAr[0]; _T", _V154/*par*/["name"], " = vAr[1]; })();"];;

}else{
_V169/*assemblyAr*/ = ["var ", _V154/*par*/["name"], " = new __Promise();\n"];;
};
;
return _V162/*assembleCode*/(_V169/*assemblyAr*/, _V154/*par*/);;
;
}),
"returnReturnPromiseCode": (function(_V154/*par*/){
var _V168/*retType*/;
var _V80/*track*/;
var _V169/*assemblyAr*/;
;
_V168/*retType*/ = _V154/*par*/["type"];
_V80/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V168/*retType*/)){
_V80/*track*/ = true;;
_V168/*retType*/ = this["getClassFromTemporaryTracked"](_V168/*retType*/);;
};
;
if(this["isTrackedClass"](_V168/*retType*/)){
_V80/*track*/ = true;;
};
;
_V169/*assemblyAr*/;
if(_V80/*track*/){
_V169/*assemblyAr*/ = ["return [", _V154/*par*/["name"], ", _T", _V154/*par*/["name"], "];\n"];;

}else{
_V169/*assemblyAr*/ = ["return ", _V154/*par*/["name"], ";\n"];;
};
;
return _V162/*assembleCode*/(_V169/*assemblyAr*/, _V154/*par*/);;
;
}),
"getDeclareVariableCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V169/*assemblyAr*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V169/*assemblyAr*/ = ["var ", _V154/*par*/["name"], ";\n"];
if(_V69/*cDef*/["track"]){
_V169/*assemblyAr*/["push"]("var _T");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"](";\n");;
};
;
return _V162/*assembleCode*/(_V169/*assemblyAr*/, _V154/*par*/);;
;
}),
"getProcessParameterCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V169/*assemblyAr*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V169/*assemblyAr*/ = [];
if(_V69/*cDef*/["track"]){
_V169/*assemblyAr*/["push"]("var _T");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"](";\n");;
_V169/*assemblyAr*/["push"]("if(");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"]("){ _T");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"](" = ");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"]("[1];\n");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"](" = ");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"]("[0];}\n");;
};
;
return _V162/*assembleCode*/(_V169/*assemblyAr*/, _V154/*par*/);;
;
}),
"getDestroyVariableCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V169/*assemblyAr*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V169/*assemblyAr*/ = [];
if(_V69/*cDef*/["track"]){
_V169/*assemblyAr*/["push"]("if (_T");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"]("){ _T");;
_V169/*assemblyAr*/["push"](_V154/*par*/["name"]);;
_V169/*assemblyAr*/["push"]("();};");;
};
;
return _V162/*assembleCode*/(_V169/*assemblyAr*/, _V154/*par*/);;
;
}),
"getCallCode": (function(_V154/*par*/){
var _V69/*cDef*/;
var _V37/*i*/;
var _V38/*l*/;
var _V171/*args*/;
var _V172/*assembly*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V154/*par*/["type"]);
_V37/*i*/;
_V38/*l*/;
_V171/*args*/;
_V172/*assembly*/;
if(_V69/*cDef*/["isVar"]){
_V171/*args*/ = _V154/*par*/["arguments"];;
_V38/*l*/ = _V171/*args*/["length"];;
_V172/*assembly*/ = [_V108/*MAKRO_SELF*/, "("];;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V38/*l*/);++_V37/*i*/){{if((_V37/*i*/ > 0)){
_V172/*assembly*/["push"](", ");;
};
;
_V172/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": _V171/*args*/[_V37/*i*/]["value"],
"valueType": _V171/*args*/[_V37/*i*/]["type"]});;
}};
;
_V172/*assembly*/["push"](")");;
return _V162/*assembleCode*/(_V172/*assembly*/, _V154/*par*/);;
};
;
if(! _V69/*cDef*/["isFunction"]){
return _V129/*runtimeError*/(_V130/*errorMsg*/["expectedCallable"], _V154/*par*/);;
};
;
_V171/*args*/ = _V154/*par*/["arguments"];;
_V38/*l*/ = _V171/*args*/["length"];;
_V172/*assembly*/ = [_V108/*MAKRO_SELF*/, "("];;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V38/*l*/);++_V37/*i*/){{if((_V37/*i*/ > 0)){
_V172/*assembly*/["push"](", ");;
};
;
_V172/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (_V69/*cDef*/["arguments"][_V37/*i*/] || this["getBuiltinType"]("var")),
"value": _V171/*args*/[_V37/*i*/]["value"],
"valueType": _V171/*args*/[_V37/*i*/]["type"]});;
}};
;
_V172/*assembly*/["push"](")");;
return _V162/*assembleCode*/(_V172/*assembly*/, _V154/*par*/);;
;
}),
"getBinaryExpressionCode": (function(_V154/*par*/){
var _V173/*lcDef*/;
var _V174/*rcDef*/;
;
_V173/*lcDef*/ = _V45/*getClass*/(_V154/*par*/["leftType"]);
_V174/*rcDef*/ = _V45/*getClass*/(_V154/*par*/["rightType"]);
if((_V173/*lcDef*/["isVar"] && _V174/*rcDef*/["isVar"])){
return _V162/*assembleCode*/(["(", _V175/*MAKRO_LEFT*/, " ", _V110/*MAKRO_OPERATOR*/, " ", _V176/*MAKRO_RIGHT*/, ")"], _V154/*par*/);;
};
;
switch (_V154/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":
return _V162/*assembleCode*/(["(", _V175/*MAKRO_LEFT*/, " ", _V110/*MAKRO_OPERATOR*/, " ", _V176/*MAKRO_RIGHT*/, ")"], _V154/*par*/);;
}
;
;
return _V129/*runtimeError*/(_V130/*errorMsg*/["operatorMissmatch"], _V154/*par*/);;
;
}),
"canSet": (function(_V177/*parTargetType*/, _V178/*parSourceType*/){
var _V179/*allOk*/;
var _V37/*i*/;
var _V38/*l*/;
var _V180/*tp*/;
var _V181/*sp*/;
;
if(((_V177/*parTargetType*/ === _V24/*undefined*/) && (_V178/*parSourceType*/ === _V24/*undefined*/))){
return true;;
};
;
if(((_V177/*parTargetType*/ === _V24/*undefined*/) || (_V178/*parSourceType*/ === _V24/*undefined*/))){
return false;;
};
;
if((_V177/*parTargetType*/ === _V178/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](_V178/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](_V177/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V177/*parTargetType*/), this["getClassFromTemporaryTracked"](_V178/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](_V177/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V177/*parTargetType*/), _V178/*parSourceType*/);;
};
;
if((((_V177/*parTargetType*/["isFunction"] && _V178/*parSourceType*/["isFunction"]) && this["canSet"](_V177/*parTargetType*/["returnType"], _V178/*parSourceType*/["returnType"])) && (_V177/*parTargetType*/["parameters"]["length"] == _V178/*parSourceType*/["parameters"]["length"]))){
_V179/*allOk*/ = true;
_V37/*i*/ = 0;
_V38/*l*/ = _V177/*parTargetType*/["parameters"]["length"];
for(_V37/*i*/;(_V37/*i*/ < _V38/*l*/);++_V37/*i*/){{_V180/*tp*/ = _V177/*parTargetType*/["parameters"][_V37/*i*/];
_V181/*sp*/ = _V178/*parSourceType*/["parameters"][_V37/*i*/];
if(! this["canSet"](_V181/*sp*/, _V180/*tp*/)){
_V179/*allOk*/ = false;;
};
;
}};
;
if(_V179/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(_V66/*parType*/, _V182/*parProperty*/, _V183/*parFunType*/){
var _V69/*cDef*/;
var _V81/*map*/;
var _V124/*mDef*/;
var _V163/*propertyType*/;
;
_V69/*cDef*/ = _V45/*getClass*/(_V66/*parType*/);
_V81/*map*/ = _V69/*cDef*/["map"];
if(_V81/*map*/["members"][_V182/*parProperty*/]){
_V124/*mDef*/ = _V81/*map*/["members"][_V182/*parProperty*/];
_V163/*propertyType*/ = this["getPropertyType"]({"type": _V66/*parType*/,
"property": _V182/*parProperty*/});
if(! this["canSet"](_V163/*propertyType*/, _V183/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](_V163/*propertyType*/) || this["isFunctionType"](_V163/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](_V183/*parFunType*/) || this["isFunctionType"](_V183/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
_V129/*runtimeError*/ = (function(_V154/*par*/, _V42/*par2*/){
;
if((_V42/*par2*/ && _V42/*par2*/["errorFun"])){
_V42/*par2*/["errorFun"](_V154/*par*/);;
};
;
return (((("(function(){ throw { id:" + _V154/*par*/["id"]) + ", msg: ") + _V184/*stringEncodeStr*/(_V154/*par*/["msg"])) + " } })()");;
;
});
_V185/*_stringEncodeStr*/ = (function(_V154/*par*/){
var _V186/*s*/;
;
_V186/*s*/ = _V154/*par*/["replace"](new _V187/*RegExp*/("\\\\", "g"), "\\\\");
_V186/*s*/ = _V186/*s*/["replace"](new _V187/*RegExp*/("\\n", "g"), "\\n");;
_V186/*s*/ = _V186/*s*/["replace"](new _V187/*RegExp*/("\\r", "g"), "\\r");;
_V186/*s*/ = _V186/*s*/["replace"](new _V187/*RegExp*/("\\\"", "g"), "\\\"");;
_V186/*s*/ = _V186/*s*/["replace"](new _V187/*RegExp*/("\\u2028", "g"), "\\u2028");;
_V186/*s*/ = _V186/*s*/["replace"](new _V187/*RegExp*/("\\u2029", "g"), "\\u2029");;
return _V186/*s*/;;
;
});
_V184/*stringEncodeStr*/ = (function(_V154/*par*/){
;
return (("\"" + _V185/*_stringEncodeStr*/(_V154/*par*/)) + "\"");;
;
});
_V162/*assembleCode*/ = (function(_V188/*ar*/, _V154/*par*/){
var _V189/*res*/;
var _V190/*resStr*/;
var _V37/*i*/;
var _V84/*r*/;
var _V192/*tempPar*/;
var _V193/*tempRes*/;
;
_V189/*res*/ = _V154/*par*/["result"];
_V190/*resStr*/ = "";
if(! _V189/*res*/){
_V189/*res*/ = {"push": (function(_V191/*parStr*/){
;
_V190/*resStr*/ += _V191/*parStr*/;;
;
})};;
};
;
_V37/*i*/ = 0;
_V84/*r*/ = "";
for(_V37/*i*/ = 0;(_V37/*i*/ < _V188/*ar*/["length"]);++_V37/*i*/){{if((typeof _V188/*ar*/[_V37/*i*/] == "string")){
_V189/*res*/["push"](_V188/*ar*/[_V37/*i*/]);;

}else{
if(_V188/*ar*/[_V37/*i*/]["_internFun"]){
_V192/*tempPar*/ = _V188/*ar*/[_V37/*i*/];
_V192/*tempPar*/["result"] = _V154/*par*/["result"];;
_V192/*tempPar*/["errorFun"] = _V154/*par*/["errorFun"];;
_V193/*tempRes*/ = _V58/*classSystem*/[_V188/*ar*/[_V37/*i*/]["_internFun"]](_V192/*tempPar*/);
if(! _V154/*par*/["result"]){
_V189/*res*/["push"](_V193/*tempRes*/);;
};
;

}else{
switch (_V188/*ar*/[_V37/*i*/]){
case _V108/*MAKRO_SELF*/:
_V189/*res*/["push"](_V154/*par*/["instance"]);;
break;;
case _V194/*MAKRO_PROPERTY*/:
_V189/*res*/["push"](_V154/*par*/["property"]);;
break;;
case _V195/*MAKRO_PROPERTYSTRING*/:
_V189/*res*/["push"](_V184/*stringEncodeStr*/(_V154/*par*/["property"]));;
break;;
case _V109/*MAKRO_PROPERTYVALUE*/:
if(_V154/*par*/["propertyValue"]){
_V189/*res*/["push"](_V154/*par*/["propertyValue"]);;

}else{
_V189/*res*/["push"](_V184/*stringEncodeStr*/(_V154/*par*/["property"]));;
};
;
break;;
case _V111/*MAKRO_VALUE*/:
_V189/*res*/["push"](_V154/*par*/["value"]);;
break;;
case _V131/*MAKRO_VALUEPROPERTY*/:
_V189/*res*/["push"](_V154/*par*/["valueProperty"]);;
break;;
case _V175/*MAKRO_LEFT*/:
_V189/*res*/["push"](_V154/*par*/["left"]);;
break;;
case _V176/*MAKRO_RIGHT*/:
_V189/*res*/["push"](_V154/*par*/["right"]);;
break;;
case _V110/*MAKRO_OPERATOR*/:
_V189/*res*/["push"](_V154/*par*/["operator"]);;
break;;
case _V196/*MAKRO_RESOLVEFUN*/:
_V189/*res*/["push"]((_V154/*par*/["resolveFun"] || "undefined"));;
break;;
case _V197/*MAKRO_REJECTFUN*/:
_V189/*res*/["push"]((_V154/*par*/["rejectFun"] || "undefined"));;
break;;
case _V198/*MAKRO_TYPEVALUE*/:
_V189/*res*/["push"](_V154/*par*/["typeValue"]);;
break;;
case _V170/*MAKRO_CONSTRUCTOR*/:
_V189/*res*/["push"](_V154/*par*/["constructorName"]);;
break;;
}
;
;
};
};
;
}};
;
if(_V154/*par*/["result"]){
return _V189/*res*/;;
};
;
return _V190/*resStr*/;;
;
});
_V108/*MAKRO_SELF*/ = 0;
_V194/*MAKRO_PROPERTY*/ = 1;
_V195/*MAKRO_PROPERTYSTRING*/ = 2;
_V109/*MAKRO_PROPERTYVALUE*/ = 3;
_V111/*MAKRO_VALUE*/ = 4;
_V175/*MAKRO_LEFT*/ = 5;
_V110/*MAKRO_OPERATOR*/ = 6;
_V176/*MAKRO_RIGHT*/ = 7;
_V131/*MAKRO_VALUEPROPERTY*/ = 8;
_V196/*MAKRO_RESOLVEFUN*/ = 9;
_V197/*MAKRO_REJECTFUN*/ = 10;
_V198/*MAKRO_TYPEVALUE*/ = 11;
_V170/*MAKRO_CONSTRUCTOR*/ = 12;
_V130/*errorMsg*/ = {"accessNotAllowd": {"id": 200,
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
"msg": "not a syncable response"}};
_V199/*promiseland*/["classSystem"] = _V58/*classSystem*/;;
_V7/*extra*/["classSystemPs"]["resolve"]({"classSystem": _V58/*classSystem*/,
"internalObjects": _V52/*internalObjects*/});;
return _V58/*classSystem*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();