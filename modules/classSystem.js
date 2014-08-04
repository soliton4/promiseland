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
if (promiseland._hasModule({ hashStr: "4f036219ef9a0a6c560f819e007d48d3" })){ return promiseland._getModule("4f036219ef9a0a6c560f819e007d48d3"); };
var _V7/*extra*/;try{_V7/*extra*/ = extra;}catch(e){};
var _V24/*undefined*/;try{_V24/*undefined*/ = undefined;}catch(e){};
var _V71/*Promise*/;try{_V71/*Promise*/ = Promise;}catch(e){};
var _V188/*RegExp*/;try{_V188/*RegExp*/ = RegExp;}catch(e){};
var _V200/*promiseland*/;try{_V200/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*getModuleData*/;
var _V9/*Tracker*/;
var _V14/*Chainable*/;
var _V19/*TrackedPromise*/;
var _V44/*_ClassToken*/;
var _V45/*_actClass*/;
var _V46/*getClass*/;
var _V48/*classHider*/;
var _V50/*builtinTypes*/;
var _V51/*nextInternalId*/;
var _V52/*getNewInternalId*/;
var _V53/*internalObjects*/;
var _V54/*syncFun*/;
var _V61/*destroySynced*/;
var _V64/*registerSyncClass*/;
var _V69/*getSyncedClass*/;
var _V59/*classSystem*/;
var _V130/*runtimeError*/;
var _V186/*_stringEncodeStr*/;
var _V185/*stringEncodeStr*/;
var _V163/*assembleCode*/;
var _V109/*MAKRO_SELF*/;
var _V195/*MAKRO_PROPERTY*/;
var _V196/*MAKRO_PROPERTYSTRING*/;
var _V110/*MAKRO_PROPERTYVALUE*/;
var _V112/*MAKRO_VALUE*/;
var _V176/*MAKRO_LEFT*/;
var _V111/*MAKRO_OPERATOR*/;
var _V177/*MAKRO_RIGHT*/;
var _V132/*MAKRO_VALUEPROPERTY*/;
var _V197/*MAKRO_RESOLVEFUN*/;
var _V198/*MAKRO_REJECTFUN*/;
var _V199/*MAKRO_TYPEVALUE*/;
var _V171/*MAKRO_CONSTRUCTOR*/;
var _V131/*errorMsg*/;
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
var _V38/*i*/;
var _V39/*l*/;
var _V40/*entryAr*/;
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
}catch(_V37/*e*/){};
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
}catch(_V37/*e*/){};
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
_V38/*i*/ = 0;
_V39/*l*/ = _V28/*thenAr*/["length"];
for(_V38/*i*/;(_V38/*i*/ < _V39/*l*/);++_V38/*i*/){{try
{_V40/*entryAr*/ = _V28/*thenAr*/[_V38/*i*/];
_V40/*entryAr*/[0]([_V35/*value*/, _V40/*entryAr*/[1]]);;
}catch(_V37/*e*/){};
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
var _V38/*i*/;
var _V39/*l*/;
;
_V30/*thenFun*/ = (function(_V41/*u*/, _V32/*parElseFun*/){
;
if(_V32/*parElseFun*/){
try
{_V32/*parElseFun*/(_V35/*value*/);;
}catch(_V37/*e*/){};
;
};
;
;
});;
_V33/*thenReuseFun*/ = (function(_V34/*parReuse*/, _V41/*u*/, _V32/*parElseFun*/){
;
_V34/*parReuse*/();;
if(_V32/*parElseFun*/){
try
{_V32/*parElseFun*/(_V35/*value*/);;
}catch(_V37/*e*/){};
;
};
;
;
});;
if(! _V29/*elseAr*/){
return;;
};
_V38/*i*/ = 0;
_V39/*l*/ = _V29/*elseAr*/["length"];
for(_V38/*i*/;(_V38/*i*/ < _V39/*l*/);++_V38/*i*/){{try
{_V29/*elseAr*/[_V38/*i*/](_V35/*value*/);;
}catch(_V37/*e*/){};
}};
;
_V28/*thenAr*/ = _V24/*undefined*/;;
_V29/*elseAr*/ = _V24/*undefined*/;;
this["resolve"] = _V24/*undefined*/;;
this["reject"] = _V24/*undefined*/;;
;
});;
this["then"] = (function(_V42/*par1*/, _V43/*par2*/){
;
_V30/*thenFun*/(_V42/*par1*/, _V43/*par2*/);;
;
});;
this["thenReuse"] = (function(_V34/*parReuse*/, _V42/*par1*/, _V43/*par2*/){
;
_V33/*thenReuseFun*/(_V34/*parReuse*/, _V42/*par1*/, _V43/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
this["then"]["thenReuse"] = this["thenReuse"];;
;
});
_V44/*_ClassToken*/;
_V45/*_actClass*/;
_V46/*getClass*/ = (function(_V47/*cf*/){
;
_V45/*_actClass*/ = _V24/*undefined*/;;
_V47/*cf*/();;
return _V45/*_actClass*/;;
;
});
_V48/*classHider*/ = (function(_V49/*toHide*/){
;
return (function(){
;
_V45/*_actClass*/ = _V49/*toHide*/;;
;
});;
;
});
_V50/*builtinTypes*/ = {"var": _V48/*classHider*/({"isVar": true,
"isReady": true}),
"statement": _V48/*classHider*/({"isStatement": true,
"isReady": true})};
_V51/*nextInternalId*/ = 1;
_V52/*getNewInternalId*/ = (function(){
;
return _V51/*nextInternalId*/++;;
;
});
_V53/*internalObjects*/ = {};
_V54/*syncFun*/ = (function(_V55/*parInstance*/, _V56/*memberIdx*/, _V57/*mType*/, _V35/*value*/){
var _V58/*syncData*/;
var _V38/*i*/;
var _V60/*connection*/;
;
_V58/*syncData*/ = _V59/*classSystem*/["getSyncData"](_V55/*parInstance*/);
if(_V58/*syncData*/){
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V58/*syncData*/["connections"]["length"]);++_V38/*i*/){{_V60/*connection*/ = _V58/*syncData*/["connections"][_V38/*i*/];
_V60/*connection*/["syncValue"]({"transferId": _V60/*connection*/["getTransferId"](_V58/*syncData*/["getInternalId"]()),
"memberIdx": _V56/*memberIdx*/,
"value": _V35/*value*/});;
}};
;
};
;
;
});
_V61/*destroySynced*/ = (function(_V62/*parSyncData*/){
var _V58/*syncData*/;
var _V63/*connections*/;
var _V38/*i*/;
var _V60/*connection*/;
;
if(! _V62/*parSyncData*/){
return;;
};
;
_V58/*syncData*/ = _V62/*parSyncData*/;
_V63/*connections*/ = [];
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V58/*syncData*/["connections"]["length"]);++_V38/*i*/){{_V63/*connections*/["push"](_V58/*syncData*/["connections"][_V38/*i*/]);;
}};
;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V63/*connections*/["length"]);++_V38/*i*/){{_V60/*connection*/ = _V63/*connections*/[_V38/*i*/];
_V60/*connection*/["removeSynced"](_V58/*syncData*/["getInternalId"]());;
}};
;
;
});
_V64/*registerSyncClass*/ = (function(_V65/*hashStr*/, _V66/*nameStr*/, _V67/*parType*/){
var _V68/*moduleData*/;
;
_V68/*moduleData*/ = _V2/*getModuleData*/(_V65/*hashStr*/);
_V68/*moduleData*/["classes"][_V66/*nameStr*/] = {"type": _V67/*parType*/};;
;
});
_V69/*getSyncedClass*/ = (function(_V65/*hashStr*/, _V66/*nameStr*/){
var _V68/*moduleData*/;
;
_V68/*moduleData*/ = _V2/*getModuleData*/(_V65/*hashStr*/);
if((_V68/*moduleData*/ && _V68/*moduleData*/["classes"][_V66/*nameStr*/])){
return _V68/*moduleData*/["classes"][_V66/*nameStr*/]["type"];;
};
;
;
});
_V59/*classSystem*/ = {"_createProvisionalClass": (function(){
var _V70/*cDef*/;
var _V47/*cf*/;
;
_V70/*cDef*/ = {"provisional": true,
"promise": new _V71/*Promise*/(),
"type": _V24/*undefined*/};
_V70/*cDef*/["promise"]["then"]((function(_V72/*type*/){
;
_V70/*cDef*/["type"] = _V72/*type*/;;
;
}));;
_V47/*cf*/ = _V48/*classHider*/(_V70/*cDef*/);
return _V47/*cf*/;;
;
}),
"_resolveProvisional": (function(_V67/*parType*/, _V73/*parResult*/){
var _V21/*self*/;
var _V74/*typeDef*/;
var _V75/*resultDef*/;
;
_V21/*self*/ = this;
_V74/*typeDef*/ = _V46/*getClass*/(_V67/*parType*/);
_V75/*resultDef*/ = _V46/*getClass*/(_V73/*parResult*/);
if(_V75/*resultDef*/["provisional"]){
_V75/*resultDef*/["promise"]["then"]((function(_V76/*result*/){
;
_V21/*self*/["resolveProvisional"](_V67/*parType*/, _V76/*result*/);;
;
}));;

}else{
_V74/*typeDef*/["promise"]["resolve"](_V73/*parResult*/);;
};
;
;
}),
"isProvisional": (function(_V67/*parType*/){
var _V74/*typeDef*/;
;
_V74/*typeDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V74/*typeDef*/["provisional"]){
return true;;
};
;
return false;;
;
}),
"definitionPromise": (function(_V67/*parType*/){
var _V74/*typeDef*/;
var _V77/*p*/;
;
_V74/*typeDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V74/*typeDef*/["provisional"]){
return _V74/*typeDef*/["promise"];;
};
;
_V77/*p*/ = new _V71/*Promise*/();
_V77/*p*/["resolve"](_V67/*parType*/);;
return _V77/*p*/;;
;
}),
"readyPromise": (function(_V78/*_parType*/){
var _V77/*p*/;
;
_V77/*p*/ = new _V71/*Promise*/();
this["definitionPromise"](_V78/*_parType*/)["then"]((function(_V67/*parType*/){
var _V74/*typeDef*/;
;
_V74/*typeDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V74/*typeDef*/["isReady"]){
_V77/*p*/["resolve"](_V67/*parType*/);;
return;;
};
;
_V74/*typeDef*/["readyPromise"]["then"]((function(_V67/*parType*/){
;
_V77/*p*/["resolve"](_V67/*parType*/);;
;
}));;
return;;
;
}));;
return _V77/*p*/;;
;
}),
"_createTemporaryTrackedClass": (function(_V67/*parType*/){
var _V21/*self*/;
var _V79/*pr*/;
var _V70/*cDef*/;
var _V47/*cf*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V67/*parType*/)){
_V79/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V67/*parType*/)["then"]((function(_V80/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V79/*pr*/, _V21/*self*/["_createTemporaryTrackedClass"](_V80/*parDefinedClass*/));;
;
}));;
return _V79/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V67/*parType*/)){
return _V67/*parType*/;;
};
;
if(! this["isTrackedClass"](_V67/*parType*/)){
return _V67/*parType*/;;
};
;
_V70/*cDef*/ = {"temporaryTracked": true,
"type": _V67/*parType*/,
"isReady": false,
"readyPromise": new _V71/*Promise*/()};
_V47/*cf*/ = _V48/*classHider*/(_V70/*cDef*/);
_V21/*self*/["readyPromise"](_V67/*parType*/)["then"]((function(){
;
_V70/*cDef*/["ready"] = true;;
_V70/*cDef*/["readyPromise"]["resolve"](_V47/*cf*/);;
;
}));;
return _V47/*cf*/;;
;
}),
"isTemporaryTrackedClass": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["temporaryTracked"]){
return true;;
};
;
return false;;
;
}),
"getClassFromTemporaryTracked": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
if(this["isTemporaryTrackedClass"](_V67/*parType*/)){
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
return _V70/*cDef*/["type"];;
};
;
return _V67/*parType*/;;
;
}),
"_createPromiseOfClass": (function(_V67/*parType*/){
var _V21/*self*/;
var _V79/*pr*/;
var _V81/*track*/;
var _V82/*map*/;
var _V70/*cDef*/;
var _V47/*cf*/;
var _V83/*pcDef*/;
var _V84/*memberTrackMemberIdx*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V67/*parType*/)){
_V79/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V67/*parType*/)["then"]((function(_V80/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V79/*pr*/, _V21/*self*/["_createPromiseOfClass"](_V80/*parDefinedClass*/));;
;
}));;
return _V79/*pr*/;;
};
;
if(this["isVar"](_V67/*parType*/)){
return _V67/*parType*/;;
};
;
_V81/*track*/ = false;
if(this["isTrackedClass"](_V67/*parType*/)){
_V81/*track*/ = true;;
};
;
_V82/*map*/ = {};
_V70/*cDef*/ = {"promiseOf": true,
"type": _V67/*parType*/,
"isReady": true,
"readyPromise": new _V71/*Promise*/(),
"track": _V81/*track*/,
"map": _V82/*map*/};
_V47/*cf*/ = _V48/*classHider*/(_V70/*cDef*/);
if(_V81/*track*/){
_V70/*cDef*/["map"]["trackRootIdx"] = "rootTrack";;
_V70/*cDef*/["map"]["trackMemberIdx"] = "memberTrack";;
_V83/*pcDef*/ = _V46/*getClass*/(_V67/*parType*/);
_V84/*memberTrackMemberIdx*/ = _V83/*pcDef*/["map"]["trackMemberIdx"];
_V70/*cDef*/["constructor"] = (function(){
var _V85/*r*/;
;
_V85/*r*/ = new _V19/*TrackedPromise*/((function(_V86/*parTempValue*/, _V87/*parTracker*/){
var _V88/*v*/;
var _V39/*l*/;
;
_V88/*v*/ = _V86/*parTempValue*/[0];
_V39/*l*/ = _V88/*v*/[_V84/*memberTrackMemberIdx*/](_V87/*parTracker*/);
_V86/*parTempValue*/[1]();;
return _V39/*l*/;;
;
}));
return [_V85/*r*/, _V85/*r*/["rootTrack"]()];;
;
});;

}else{
_V70/*cDef*/["constructor"] = _V71/*Promise*/;;
};
;
_V70/*cDef*/["readyPromise"]["resolve"](_V47/*cf*/);;
return _V47/*cf*/;;
;
}),
"isPromiseOfClass": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["promiseOf"]){
return true;;
};
;
return false;;
;
}),
"getClassFromPromiseOf": (function(_V67/*parType*/){
var _V21/*self*/;
var _V79/*pr*/;
var _V70/*cDef*/;
;
_V21/*self*/ = this;
if(this["isProvisional"](_V67/*parType*/)){
_V79/*pr*/ = this["_createProvisionalClass"]();
this["definitionPromise"](_V67/*parType*/)["then"]((function(_V80/*parDefinedClass*/){
;
_V21/*self*/["_resolveProvisional"](_V79/*pr*/, _V21/*self*/["getClassFromPromiseOf"](_V80/*parDefinedClass*/));;
;
}));;
return _V79/*pr*/;;
};
;
if(this["isTemporaryTrackedClass"](_V67/*parType*/)){
return this["getClassFromPromiseOf"](this["getClassFromTemporaryTracked"](_V67/*parType*/));;
};
;
if(this["isPromiseOfClass"](_V67/*parType*/)){
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
return this["_createTemporaryTrackedClass"](_V70/*cDef*/["type"]);;
};
;
return _V67/*parType*/;;
;
}),
"isSameType": (function(_V89/*type1*/, _V90/*type2*/){
var _V91/*cDef1*/;
var _V92/*cDef2*/;
;
if((_V89/*type1*/ === _V90/*type2*/)){
return true;;
};
;
_V91/*cDef1*/ = _V46/*getClass*/(_V89/*type1*/);
if(_V91/*cDef1*/["provisional"]){
if(! _V91/*cDef1*/["type"]){
return false;;
};
;
_V89/*type1*/ = _V91/*cDef1*/["type"];;
_V91/*cDef1*/ = _V46/*getClass*/(_V89/*type1*/);;
};
;
_V92/*cDef2*/ = _V46/*getClass*/(_V90/*type2*/);
if(_V92/*cDef2*/["provisional"]){
if(! _V92/*cDef2*/["type"]){
return false;;
};
;
_V90/*type2*/ = _V92/*cDef2*/["type"];;
_V92/*cDef2*/ = _V46/*getClass*/(_V90/*type2*/);;
};
;
if((_V89/*type1*/ === _V90/*type2*/)){
return true;;
};
;
return false;;
;
}),
"createClass": (function(_V93/*classLiteral*/, _V94/*parDefaults*/){
var _V21/*self*/;
;
_V21/*self*/ = this;
return _V21/*self*/["_createClass"](_V93/*classLiteral*/, _V94/*parDefaults*/);;
;
}),
"_membersDefined": (function(_V93/*classLiteral*/){
var _V21/*self*/;
var _V95/*cnt*/;
var _V96/*retPs*/;
var _V97/*check*/;
var _V98/*addMember*/;
var _V38/*i*/;
;
_V21/*self*/ = this;
_V95/*cnt*/ = 1;
_V96/*retPs*/ = new _V71/*Promise*/();
_V97/*check*/ = (function(){
;
if(_V95/*cnt*/){
return;;
};
;
_V96/*retPs*/["resolve"](_V93/*classLiteral*/);;
;
});
_V98/*addMember*/ = (function(_V99/*m*/){
;
++_V95/*cnt*/;;
_V21/*self*/["definitionPromise"](_V99/*m*/["type"])["then"]((function(_V100/*definedType*/){
;
_V99/*m*/["type"] = _V100/*definedType*/;;
--_V95/*cnt*/;;
_V97/*check*/();;
;
}));;
;
});
if(_V93/*classLiteral*/["members"]){
_V38/*i*/ = 0;
for(_V38/*i*/;(_V38/*i*/ < _V93/*classLiteral*/["members"]["length"]);++_V38/*i*/){{_V98/*addMember*/(_V93/*classLiteral*/["members"][_V38/*i*/]);;
}};
;
};
;
--_V95/*cnt*/;;
_V97/*check*/();;
return _V96/*retPs*/;;
;
}),
"_createClass": (function(_V93/*classLiteral*/, _V94/*parDefaults*/){
var _V101/*cAr*/;
var _V21/*self*/;
var _V82/*map*/;
var _V70/*cDef*/;
var _V47/*cf*/;
var _V102/*sync*/;
var _V103/*syncAll*/;
var _V104/*trackerIdx*/;
var _V105/*trackRootIdx*/;
var _V106/*trackMemberIdx*/;
var _V108/*freepart*/;
var _V113/*helpAr*/;
var _V114/*makeHelpAr*/;
var _V115/*conIdx*/;
var _V121/*constructorDef*/;
var _V122/*constructorFun*/;
var _V123/*destroyDef*/;
var _V23/*destroyFun*/;
var _V124/*untrackIdxAr*/;
var _V98/*addMember*/;
var _V133/*createMembersPs*/;
var _V135/*memberPs*/;
var _V38/*i*/;
var _V136/*proto*/;
var _V137/*freeFun*/;
var _V138/*f*/;
var _V139/*finalPs*/;
;
_V101/*cAr*/ = [];
_V21/*self*/ = this;
_V82/*map*/ = {"members": {},
"extends": []};
_V70/*cDef*/ = {"constructor": _V24/*undefined*/,
"map": _V82/*map*/,
"isReady": false,
"track": ((_V93/*classLiteral*/["track"] || _V93/*classLiteral*/["sync"]) ? true : false),
"sync": _V93/*classLiteral*/["sync"],
"readyPromise": new _V71/*Promise*/()};
_V47/*cf*/ = _V48/*classHider*/(_V70/*cDef*/);
_V101/*cAr*/["push"](_V47/*cf*/);;
_V102/*sync*/ = (_V93/*classLiteral*/["sync"] ? true : false);
_V103/*syncAll*/ = false;
if(_V102/*sync*/){
if(_V93/*classLiteral*/["sync"]["all"]){
_V103/*syncAll*/ = true;;
};
;
};
;
_V104/*trackerIdx*/;
_V105/*trackRootIdx*/;
_V106/*trackMemberIdx*/;
if(_V70/*cDef*/["track"]){
_V82/*map*/["trackerIdx"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V24/*undefined*/);;
_V82/*map*/["trackRootIdx"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V24/*undefined*/);;
_V82/*map*/["trackMemberIdx"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V24/*undefined*/);;
_V104/*trackerIdx*/ = _V82/*map*/["trackerIdx"];;
_V105/*trackRootIdx*/ = _V82/*map*/["trackRootIdx"];;
_V106/*trackMemberIdx*/ = _V82/*map*/["trackMemberIdx"];;
};
;
if(_V102/*sync*/){
_V82/*map*/["syncDataIdx"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"]((function(){
var _V21/*self*/;
var _V107/*internalId*/;
var _V58/*syncData*/;
;
_V21/*self*/ = this;
_V107/*internalId*/;
_V58/*syncData*/ = {"getInternalId": (function(){
;
if(_V107/*internalId*/){
return _V107/*internalId*/;;
};
;
_V107/*internalId*/ = _V52/*getNewInternalId*/();;
_V53/*internalObjects*/[_V107/*internalId*/] = _V21/*self*/;;
return _V107/*internalId*/;;
;
}),
"connections": []};
this[_V82/*map*/["syncDataIdx"]] = (function(){
;
return _V58/*syncData*/;;
;
});;
return _V58/*syncData*/;;
;
}));;
};
;
if(_V93/*classLiteral*/["hasFreePart"]){
_V108/*freepart*/ = {};
_V82/*map*/["freePart"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V108/*freepart*/);;
_V82/*map*/["getMemberCode"] = [_V109/*MAKRO_SELF*/, (("[" + _V82/*map*/["freePart"]) + "]["), _V110/*MAKRO_PROPERTYVALUE*/, "]"];;
_V82/*map*/["setMemberCode"] = [_V109/*MAKRO_SELF*/, (("[" + _V82/*map*/["freePart"]) + "]["), _V110/*MAKRO_PROPERTYVALUE*/, "] ", _V111/*MAKRO_OPERATOR*/, " ", _V112/*MAKRO_VALUE*/];;
};
;
_V113/*helpAr*/ = [];
_V114/*makeHelpAr*/ = (function(){
;
return _V113/*helpAr*/["slice"]();;
;
});
_V82/*map*/["connectIdx"] = _V101/*cAr*/["length"];;
_V115/*conIdx*/ = _V82/*map*/["connectIdx"];
_V101/*cAr*/["push"]((function(){
var _V113/*helpAr*/;
var _V120/*arguments*/ = arguments;
;
_V113/*helpAr*/ = _V114/*makeHelpAr*/();
this[_V115/*conIdx*/] = (function(_V116/*idx*/, _V117/*fun*/, _V118/*base*/){
var _V119/*chain*/;
;
_V119/*chain*/ = _V113/*helpAr*/[_V116/*idx*/];
if(! _V119/*chain*/){
_V119/*chain*/ = _V14/*Chainable*/(this, _V116/*idx*/);;
_V113/*helpAr*/[_V116/*idx*/] = _V119/*chain*/;;
};
;
return _V119/*chain*/(_V117/*fun*/, _V118/*base*/);;
;
});;
return this[_V115/*conIdx*/]["apply"](this, _V120/*arguments*/);;
;
}));;
_V121/*constructorDef*/;
_V122/*constructorFun*/;
_V123/*destroyDef*/;
_V23/*destroyFun*/;
_V124/*untrackIdxAr*/ = [];
_V98/*addMember*/ = (function(_V99/*m*/){
var _V125/*mDef*/;
var _V57/*mType*/;
var _V56/*memberIdx*/;
var _V126/*isTrackedMember*/;
var _V128/*def*/;
var _V129/*mCDef*/;
var _V84/*memberTrackMemberIdx*/;
;
_V125/*mDef*/ = {"index": _V101/*cAr*/["length"]};
if((_V103/*syncAll*/ || _V99/*m*/["sync"])){
_V125/*mDef*/["sync"] = true;;
};
;
_V125/*mDef*/["type"] = _V99/*m*/["type"];;
_V57/*mType*/ = _V99/*m*/["type"];
_V56/*memberIdx*/ = _V125/*mDef*/["index"];
_V126/*isTrackedMember*/ = _V21/*self*/["isTrackedClass"](_V125/*mDef*/["type"]);
if(_V125/*mDef*/["sync"]){
_V125/*mDef*/["hasSetter"] = true;;
if(_V126/*isTrackedMember*/){
_V125/*mDef*/["defaultSetter"] = (function(_V127/*vAr*/){
;
_V54/*syncFun*/(this, _V56/*memberIdx*/, _V57/*mType*/, _V127/*vAr*/[0]);;
return _V127/*vAr*/;;
;
});;

}else{
_V125/*mDef*/["defaultSetter"] = (function(_V88/*v*/){
;
_V54/*syncFun*/(this, _V56/*memberIdx*/, _V57/*mType*/, _V88/*v*/);;
return _V88/*v*/;;
;
});;
};
;
};
;
_V82/*map*/["members"][_V99/*m*/["name"]] = _V125/*mDef*/;;
_V128/*def*/ = (_V94/*parDefaults*/ ? _V94/*parDefaults*/[_V99/*m*/["name"]] : _V24/*undefined*/);
_V101/*cAr*/["push"](_V128/*def*/);;
if(_V125/*mDef*/["hasSetter"]){
_V125/*mDef*/["setterIdx"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V125/*mDef*/["defaultSetter"]);;
};
;
if((_V99/*m*/["name"] == "constructor")){
_V121/*constructorDef*/ = _V125/*mDef*/;;
_V122/*constructorFun*/ = _V128/*def*/;;
};
;
if((_V99/*m*/["name"] == "destroy")){
_V123/*destroyDef*/ = _V125/*mDef*/;;
_V23/*destroyFun*/ = _V128/*def*/;;
};
;
_V125/*mDef*/["getCode"] = [_V109/*MAKRO_SELF*/, (("[" + _V125/*mDef*/["index"]) + "]")];;
if(_V125/*mDef*/["hasSetter"]){
_V125/*mDef*/["setCode"] = [(((("(function(s, v){ v = s[" + _V125/*mDef*/["setterIdx"]) + "](v); s[") + _V125/*mDef*/["index"]) + "] "), _V111/*MAKRO_OPERATOR*/, " v; return v; })(", _V109/*MAKRO_SELF*/, ", ", _V112/*MAKRO_VALUE*/, ")"];;

}else{
_V125/*mDef*/["setCode"] = [_V109/*MAKRO_SELF*/, (("[" + _V125/*mDef*/["index"]) + "] "), _V111/*MAKRO_OPERATOR*/, " ", _V112/*MAKRO_VALUE*/];;
};
;
if(_V126/*isTrackedMember*/){
_V129/*mCDef*/ = _V46/*getClass*/(_V125/*mDef*/["type"]);
_V84/*memberTrackMemberIdx*/ = _V129/*mCDef*/["map"]["trackMemberIdx"];
_V125/*mDef*/["trackIndex"] = _V101/*cAr*/["length"];;
_V101/*cAr*/["push"](_V24/*undefined*/);;
_V124/*untrackIdxAr*/["push"](_V125/*mDef*/["trackIndex"]);;
if(_V70/*cDef*/["track"]){
if(_V125/*mDef*/["hasSetter"]){
_V125/*mDef*/["setCode"] = [_V130/*runtimeError*/(_V131/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V125/*mDef*/["setCodeFromTemporary"] = [(((("(function(s, vAr){ vAr = s[" + _V125/*mDef*/["setterIdx"]) + "](vAr); var v = vAr[0]; s[") + _V125/*mDef*/["index"]) + "] "), _V111/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V125/*mDef*/["trackIndex"]) + "]){ s[") + _V125/*mDef*/["trackIndex"]) + "](); }; s[") + _V125/*mDef*/["trackIndex"]) + "] = v[") + _V84/*memberTrackMemberIdx*/) + "](s[") + _V104/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V109/*MAKRO_SELF*/, ", ", _V112/*MAKRO_VALUE*/, ")"];;

}else{
_V125/*mDef*/["setCode"] = [(("(function(s, v){ s[" + _V125/*mDef*/["index"]) + "] "), _V111/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V125/*mDef*/["trackIndex"]) + "]){ s[") + _V125/*mDef*/["trackIndex"]) + "](); }; s[") + _V125/*mDef*/["trackIndex"]) + "] = v[") + _V84/*memberTrackMemberIdx*/) + "](s[") + _V104/*trackerIdx*/) + "]); return v; })("), _V109/*MAKRO_SELF*/, ", ", _V112/*MAKRO_VALUE*/, ")"];;
_V125/*mDef*/["setCodeFromTemporary"] = [(("(function(s, vAr){ var v = vAr[0]; s[" + _V125/*mDef*/["index"]) + "] "), _V111/*MAKRO_OPERATOR*/, ((((((((((" v; if(s[" + _V125/*mDef*/["trackIndex"]) + "]){ s[") + _V125/*mDef*/["trackIndex"]) + "](); }; s[") + _V125/*mDef*/["trackIndex"]) + "] = v[") + _V84/*memberTrackMemberIdx*/) + "](s[") + _V104/*trackerIdx*/) + "]); vAr[1](); return v; })("), _V109/*MAKRO_SELF*/, ", ", _V112/*MAKRO_VALUE*/, ")"];;
};
;

}else{
_V125/*mDef*/["setCode"] = [_V130/*runtimeError*/(_V131/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
_V125/*mDef*/["setCodeFromTemporary"] = [_V130/*runtimeError*/(_V131/*errorMsg*/["onlyTrackedClassesCanContainTrackedMembers"])];;
};
;
};
;
_V125/*mDef*/["connectFunCode"] = [_V109/*MAKRO_SELF*/, (((("[" + _V82/*map*/["connectIdx"]) + "](") + _V125/*mDef*/["index"]) + ", "), _V112/*MAKRO_VALUE*/, ")"];;
_V125/*mDef*/["connectSlotCode"] = [_V109/*MAKRO_SELF*/, (((("[" + _V82/*map*/["connectIdx"]) + "](") + _V125/*mDef*/["index"]) + ", "), _V112/*MAKRO_VALUE*/, "[", _V132/*MAKRO_VALUEPROPERTY*/, "], ", _V112/*MAKRO_VALUE*/, ")"];;
;
});
_V133/*createMembersPs*/ = (function(){
var _V134/*donePs*/;
;
_V134/*donePs*/ = new _V71/*Promise*/();
_V21/*self*/["_membersDefined"](_V93/*classLiteral*/)["then"]((function(){
var _V38/*i*/;
;
_V38/*i*/;
if(_V93/*classLiteral*/["members"]){
_V38/*i*/ = 0;
for(_V38/*i*/;(_V38/*i*/ < _V93/*classLiteral*/["members"]["length"]);++_V38/*i*/){{_V98/*addMember*/(_V93/*classLiteral*/["members"][_V38/*i*/]);;
}};
;
};
;
_V134/*donePs*/["resolve"]();;
;
}));;
return _V134/*donePs*/;;
;
});
_V135/*memberPs*/ = new _V133/*createMembersPs*/();
_V38/*i*/;
if(_V93/*classLiteral*/["hasFreePart"]){
_V136/*proto*/ = {};
if(_V94/*parDefaults*/){
for(_V38/*i*/ in _V94/*parDefaults*/){if(! _V82/*map*/["members"][_V38/*i*/]){
_V136/*proto*/[_V38/*i*/] = _V94/*parDefaults*/[_V38/*i*/];;
};
;
};
;
};
;
_V137/*freeFun*/ = (function(){
;
;
});
_V137/*freeFun*/["prototype"] = _V136/*proto*/;;
_V138/*f*/ = _V82/*map*/["freePart"];
if(_V70/*cDef*/["track"]){
_V70/*cDef*/["constructor"] = (function(){
var _V85/*r*/;
var _V25/*t*/;
;
_V85/*r*/ = _V101/*cAr*/["slice"]();
_V85/*r*/[_V138/*f*/] = new _V137/*freeFun*/();;
_V25/*t*/ = _V9/*Tracker*/((function(){
;
_V23/*destroyFun*/["apply"](_V85/*r*/);;
;
}));
_V85/*r*/[_V104/*trackerIdx*/] = _V25/*t*/[0];;
_V85/*r*/[_V105/*trackRootIdx*/] = _V25/*t*/[1];;
_V85/*r*/[_V106/*trackMemberIdx*/] = _V25/*t*/[2];;
return [_V85/*r*/, _V85/*r*/[_V105/*trackRootIdx*/]()];;
;
});;

}else{
_V70/*cDef*/["constructor"] = (function(){
var _V85/*r*/;
;
_V85/*r*/ = _V101/*cAr*/["slice"]();
_V85/*r*/[_V138/*f*/] = new _V137/*freeFun*/();;
return _V85/*r*/;;
;
});;
};
;

}else{
if(_V70/*cDef*/["track"]){
_V70/*cDef*/["constructor"] = (function(){
var _V85/*r*/;
var _V25/*t*/;
;
_V85/*r*/ = _V101/*cAr*/["slice"]();
_V25/*t*/ = _V9/*Tracker*/((function(){
;
_V23/*destroyFun*/["apply"](_V85/*r*/);;
;
}));
_V85/*r*/[_V104/*trackerIdx*/] = _V25/*t*/[0];;
_V85/*r*/[_V105/*trackRootIdx*/] = _V25/*t*/[1];;
_V85/*r*/[_V106/*trackMemberIdx*/] = _V25/*t*/[2];;
return [_V85/*r*/, _V85/*r*/[_V105/*trackRootIdx*/]()];;
;
});;

}else{
_V70/*cDef*/["constructor"] = (function(){
var _V85/*r*/;
;
_V85/*r*/ = _V101/*cAr*/["slice"]();
return _V85/*r*/;;
;
});;
};
;
};
;
_V139/*finalPs*/ = new _V71/*Promise*/();
_V135/*memberPs*/["then"]((function(){
var _V38/*i*/;
var _V140/*realConstructor*/;
var _V142/*conDef*/;
var _V143/*_destroyFun*/;
var _V146/*_sync_destroyFun*/;
;
_V38/*i*/;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V101/*cAr*/["length"]);++_V38/*i*/){{_V113/*helpAr*/["push"](_V24/*undefined*/);;
}};
;
if(_V121/*constructorDef*/){
_V70/*cDef*/["constructorArguments"] = [];;
_V140/*realConstructor*/ = _V70/*cDef*/["constructor"];
if(_V70/*cDef*/["track"]){
_V70/*cDef*/["constructor"] = (function(){
var _V141/*instance*/;
var _V120/*arguments*/ = arguments;
;
_V141/*instance*/ = _V140/*realConstructor*/();
_V122/*constructorFun*/["apply"](_V141/*instance*/[0], _V120/*arguments*/);;
return _V141/*instance*/;;
;
});;

}else{
_V70/*cDef*/["constructor"] = (function(){
var _V141/*instance*/;
var _V120/*arguments*/ = arguments;
;
_V141/*instance*/ = _V140/*realConstructor*/();
_V122/*constructorFun*/["apply"](_V141/*instance*/, _V120/*arguments*/);;
return _V141/*instance*/;;
;
});;
};
;
_V142/*conDef*/ = _V46/*getClass*/(_V121/*constructorDef*/["type"]);
_V70/*cDef*/["constructorType"] = _V21/*self*/["createFunctionType"]({"return": _V47/*cf*/,
"arguments": _V142/*conDef*/["arguments"]});;

}else{
_V70/*cDef*/["constructorType"] = _V21/*self*/["createFunctionType"]({"return": _V47/*cf*/});;
};
;
if(_V70/*cDef*/["track"]){
_V143/*_destroyFun*/;
if(_V124/*untrackIdxAr*/["length"]){
if(_V123/*destroyDef*/){
_V143/*_destroyFun*/ = _V23/*destroyFun*/;;
_V23/*destroyFun*/ = (function(){
var _V38/*i*/;
var _V144/*curIdx*/;
var _V145/*tFun*/;
;
_V38/*i*/;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V124/*untrackIdxAr*/["length"]);++_V38/*i*/){{_V144/*curIdx*/ = _V124/*untrackIdxAr*/[_V38/*i*/];
_V145/*tFun*/ = this[_V144/*curIdx*/];
this[_V144/*curIdx*/] = _V24/*undefined*/;;
if(_V145/*tFun*/){
_V145/*tFun*/();;
};
;
}};
;
_V143/*_destroyFun*/["apply"](this);;
this["splice"](0, this["length"]);;
;
});;

}else{
_V23/*destroyFun*/ = (function(){
var _V38/*i*/;
var _V145/*tFun*/;
;
_V38/*i*/;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V124/*untrackIdxAr*/["length"]);++_V38/*i*/){{_V145/*tFun*/ = this[_V124/*untrackIdxAr*/[_V38/*i*/]];
if(_V145/*tFun*/){
_V145/*tFun*/();;
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
if(_V123/*destroyDef*/){
_V143/*_destroyFun*/ = _V23/*destroyFun*/;;
_V23/*destroyFun*/ = (function(){
;
_V143/*_destroyFun*/["apply"](this);;
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
if(_V102/*sync*/){
_V146/*_sync_destroyFun*/ = _V23/*destroyFun*/;
_V23/*destroyFun*/ = (function(){
var _V58/*syncData*/;
;
_V58/*syncData*/ = _V59/*classSystem*/["getSyncData"](this);
_V146/*_sync_destroyFun*/["apply"](this);;
_V61/*destroySynced*/(_V58/*syncData*/);;
;
});;
};
;
_V139/*finalPs*/["resolve"]();;
;
}));;
_V139/*finalPs*/["then"]((function(){
;
_V70/*cDef*/["isReady"] = true;;
_V70/*cDef*/["readyPromise"]["resolve"](_V47/*cf*/);;
;
}));;
if(_V102/*sync*/){
if(_V93/*classLiteral*/["name"]){
_V70/*cDef*/["syncId"] = {"hash": _V93/*classLiteral*/["hashStr"],
"name": _V93/*classLiteral*/["name"]};;
_V64/*registerSyncClass*/(_V93/*classLiteral*/["hashStr"], _V93/*classLiteral*/["name"], _V47/*cf*/);;
};
;
};
;
return _V47/*cf*/;;
;
}),
"getInternalId": (function(_V55/*parInstance*/){
var _V72/*type*/;
var _V70/*cDef*/;
var _V58/*syncData*/;
;
_V72/*type*/ = _V55/*parInstance*/[0];
_V70/*cDef*/ = _V46/*getClass*/(_V72/*type*/);
if(_V70/*cDef*/["sync"]){
_V58/*syncData*/ = _V55/*parInstance*/[_V70/*cDef*/["map"]["syncDataIdx"]]();
return _V58/*syncData*/["getInternalId"]();;
};
;
return;;
;
}),
"getSyncData": (function(_V55/*parInstance*/){
var _V72/*type*/;
var _V70/*cDef*/;
;
_V72/*type*/ = _V55/*parInstance*/[0];
_V70/*cDef*/ = _V46/*getClass*/(_V72/*type*/);
if(_V70/*cDef*/["sync"]){
return _V55/*parInstance*/[_V70/*cDef*/["map"]["syncDataIdx"]]();;
};
;
return;;
;
}),
"getSyncRequestData": (function(_V55/*parInstance*/, _V147/*parConnection*/){
var _V72/*type*/;
var _V70/*cDef*/;
var _V148/*syncMembers*/;
var _V149/*membersMap*/;
var _V150/*memberName*/;
var _V99/*m*/;
var _V81/*track*/;
var _V58/*syncData*/;
;
_V72/*type*/ = _V55/*parInstance*/[0];
_V70/*cDef*/ = _V46/*getClass*/(_V72/*type*/);
if(_V70/*cDef*/["sync"]){
_V148/*syncMembers*/ = {"m": []};
_V149/*membersMap*/ = _V70/*cDef*/["map"]["members"];
_V150/*memberName*/;
for(_V150/*memberName*/ in _V149/*membersMap*/){_V99/*m*/ = _V149/*membersMap*/[_V150/*memberName*/];
if((typeof _V55/*parInstance*/[_V99/*m*/["index"]] != "function")){
_V148/*syncMembers*/[_V99/*m*/["index"]] = _V55/*parInstance*/[_V99/*m*/["index"]];;
_V148/*syncMembers*/["m"]["push"](_V99/*m*/["index"]);;
};
;
};
;
_V81/*track*/ = this["getTrack"](_V55/*parInstance*/);
_V58/*syncData*/ = {"members": _V148/*syncMembers*/,
"syncId": _V70/*cDef*/["syncId"],
"transferId": _V147/*parConnection*/["newTransferId"](this["getInternalId"](_V55/*parInstance*/), _V81/*track*/)};
return _V58/*syncData*/;;
};
;
return;;
;
}),
"getObjFromSyncData": (function(_V151/*syncRequestData*/, _V147/*parConnection*/){
var _V152/*syncId*/;
var _V72/*type*/;
var _V153/*ConFun*/;
var _V141/*instance*/;
var _V154/*realInstance*/;
var _V148/*syncMembers*/;
var _V99/*m*/;
var _V38/*i*/;
;
_V152/*syncId*/ = _V151/*syncRequestData*/["syncId"];
_V72/*type*/ = _V69/*getSyncedClass*/(_V152/*syncId*/["hash"], _V152/*syncId*/["name"]);
if(! _V72/*type*/){
return;;
};
;
_V153/*ConFun*/ = this["getTypeConstructor"](_V72/*type*/);
_V141/*instance*/ = new _V153/*ConFun*/();
_V154/*realInstance*/ = _V141/*instance*/[0];
_V147/*parConnection*/["newTransferId"](this["getInternalId"](_V154/*realInstance*/), _V24/*undefined*/, _V151/*syncRequestData*/["transferId"]);;
_V148/*syncMembers*/ = _V151/*syncRequestData*/["members"];
_V99/*m*/ = _V148/*syncMembers*/["m"];
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V99/*m*/["length"]);++_V38/*i*/){{_V154/*realInstance*/[_V99/*m*/[_V38/*i*/]] = _V148/*syncMembers*/[_V99/*m*/[_V38/*i*/]];;
}};
;
return _V141/*instance*/;;
;
}),
"isFunctionType": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["isFunction"]){
return true;;
};
;
return false;;
;
}),
"isTrackedClass": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["track"]){
return true;;
};
;
return false;;
;
}),
"createFunctionType": (function(_V155/*par*/){
var _V21/*self*/;
var _V70/*cDef*/;
var _V156/*checkReady*/;
var _V157/*makeTemporaries*/;
var _V158/*isReady*/;
var _V159/*resolveTypeFun*/;
var _V38/*i*/;
var _V47/*cf*/;
;
_V21/*self*/ = this;
_V70/*cDef*/ = {"isFunction": true,
"return": (_V155/*par*/["return"] || this["getBuiltinType"]("var")),
"arguments": (_V155/*par*/["arguments"] || []),
"isReady": false};
_V156/*checkReady*/ = (function(){
;
_V157/*makeTemporaries*/();;
;
});
_V157/*makeTemporaries*/ = (function(){
var _V38/*i*/;
;
_V70/*cDef*/["return"] = _V21/*self*/["_createTemporaryTrackedClass"](_V70/*cDef*/["return"]);;
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V70/*cDef*/["arguments"]["length"]);++_V38/*i*/){{_V70/*cDef*/["arguments"][_V38/*i*/] = _V21/*self*/["_createTemporaryTrackedClass"](_V70/*cDef*/["arguments"][_V38/*i*/]);;
}};
;
;
});
_V158/*isReady*/ = true;
if(_V21/*self*/["isProvisional"](_V70/*cDef*/["return"])){
_V158/*isReady*/ = false;;
_V21/*self*/["definitionPromise"](_V70/*cDef*/["return"])["then"]((function(_V67/*parType*/){
;
_V70/*cDef*/["return"] = _V67/*parType*/;;
_V156/*checkReady*/();;
;
}));;
};
;
_V159/*resolveTypeFun*/ = (function(_V160/*parI*/){
;
return (function(_V67/*parType*/){
;
_V70/*cDef*/["arguments"][_V160/*parI*/] = _V67/*parType*/;;
_V156/*checkReady*/();;
;
});;
;
});
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V70/*cDef*/["arguments"]["length"]);++_V38/*i*/){{if(_V21/*self*/["isProvisional"](_V70/*cDef*/["arguments"][_V38/*i*/])){
_V158/*isReady*/ = false;;
_V21/*self*/["definitionPromise"](_V70/*cDef*/["arguments"][_V38/*i*/])["then"](_V159/*resolveTypeFun*/(_V38/*i*/));;
};
;
}};
;
_V47/*cf*/ = _V48/*classHider*/(_V70/*cDef*/);
if(! _V158/*isReady*/){
_V70/*cDef*/["readyPromise"] = new _V71/*Promise*/();;
_V156/*checkReady*/ = (function(){
var _V38/*i*/;
;
if(_V21/*self*/["isProvisional"](_V70/*cDef*/["return"])){
return;;
};
;
_V38/*i*/ = 0;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V70/*cDef*/["arguments"]["length"]);++_V38/*i*/){{if(_V21/*self*/["isProvisional"](_V70/*cDef*/["arguments"][_V38/*i*/])){
return;;
};
;
}};
;
_V157/*makeTemporaries*/();;
_V70/*cDef*/["isReady"] = true;;
_V70/*cDef*/["readyPromise"]["resolve"](_V47/*cf*/);;
;
});;
_V156/*checkReady*/();;

}else{
_V156/*checkReady*/();;
_V70/*cDef*/["isReady"] = true;;
};
;
return _V47/*cf*/;;
;
}),
"isVar": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["isVar"]){
return true;;
};
;
return false;;
;
}),
"getFunctionReturnType": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
return _V70/*cDef*/["return"];;
;
}),
"getFunctionArgumentCount": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if(_V70/*cDef*/["arguments"]){
return _V70/*cDef*/["arguments"]["length"];;
};
;
return 0;;
;
}),
"getFunctionArgumentType": (function(_V67/*parType*/, _V161/*parIndex*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
if((_V70/*cDef*/["arguments"] && _V70/*cDef*/["arguments"][_V161/*parIndex*/])){
return _V70/*cDef*/["arguments"][_V161/*parIndex*/];;
};
return this["getBuiltinType"]("var");;
;
}),
"getConstructorArgumentType": (function(_V67/*parType*/, _V161/*parIndex*/){
var _V70/*cDef*/;
var _V25/*t*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
_V25/*t*/;
if(_V70/*cDef*/["constructorArguments"]){
_V25/*t*/ = _V70/*cDef*/["constructorArguments"][_V161/*parIndex*/];;
};
;
if(_V25/*t*/){
return _V25/*t*/;;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getTypeConstructor": (function(_V67/*parType*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
return _V70/*cDef*/["constructor"];;
;
}),
"getBuiltinType": (function(_V162/*parName*/){
;
return _V50/*builtinTypes*/[_V162/*parName*/];;
;
}),
"getGetPropertyCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V82/*map*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
if(_V70/*cDef*/["isVar"]){
return _V163/*assembleCode*/([_V109/*MAKRO_SELF*/, "[", _V110/*MAKRO_PROPERTYVALUE*/, "]"], _V155/*par*/);;
};
;
_V82/*map*/ = _V70/*cDef*/["map"];
if(_V155/*par*/["property"]){
if(_V82/*map*/["members"][_V155/*par*/["property"]]){
return _V163/*assembleCode*/(_V82/*map*/["members"][_V155/*par*/["property"]]["getCode"], _V155/*par*/);;
};
;
};
;
if(_V82/*map*/["getMemberCode"]){
return _V163/*assembleCode*/(_V82/*map*/["getMemberCode"], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["accessNotAllowd"], _V155/*par*/);;
;
}),
"getPropertyAlias": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V82/*map*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
if(_V70/*cDef*/["isVar"]){
return _V155/*par*/["property"];;
};
;
_V82/*map*/ = _V70/*cDef*/["map"];
if(((_V82/*map*/ && _V82/*map*/["members"]) && _V82/*map*/["members"][_V155/*par*/["property"]])){
return _V82/*map*/["members"][_V155/*par*/["property"]]["index"];;
};
;
return _V155/*par*/["property"];;
;
}),
"getPropertyType": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V82/*map*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
if(_V70/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
_V82/*map*/ = _V70/*cDef*/["map"];
if(_V82/*map*/["members"][_V155/*par*/["property"]]){
if(_V155/*par*/["original"]){
return (_V82/*map*/["members"][_V155/*par*/["property"]]["originalType"] || _V82/*map*/["members"][_V155/*par*/["property"]]["type"]);;

}else{
return _V82/*map*/["members"][_V155/*par*/["property"]]["type"];;
};
;
};
;
return this["getBuiltinType"]("var");;
;
}),
"getConstructorType": (function(_V155/*par*/){
var _V70/*cDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
if(_V70/*cDef*/["isVar"]){
return this["getBuiltinType"]("var");;
};
;
if(_V70/*cDef*/["constructorType"]){
return _V70/*cDef*/["constructorType"];;
};
;
throw _V131/*errorMsg*/["noConstructorAvailable"];
;
}),
"getSetPropertyCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V82/*map*/;
var _V164/*propertyType*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
if(_V70/*cDef*/["isVar"]){
if(! this["canSet"](this["getBuiltinType"]("var"), _V155/*par*/["valueType"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["typeMissmatch"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/([_V109/*MAKRO_SELF*/, "[", _V110/*MAKRO_PROPERTYVALUE*/, "] ", _V111/*MAKRO_OPERATOR*/, " ", _V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
_V82/*map*/ = _V70/*cDef*/["map"];
if((_V82/*map*/ && _V155/*par*/["property"])){
if(_V82/*map*/["members"][_V155/*par*/["property"]]){
_V164/*propertyType*/ = this["getPropertyType"]({"type": _V155/*par*/["type"],
"property": _V155/*par*/["property"]});
if(! this["canSet"](_V164/*propertyType*/, _V155/*par*/["valueType"])){
if(this["canSet"](_V164/*propertyType*/, this["getClassFromTemporaryTracked"](_V155/*par*/["valueType"]))){
return _V163/*assembleCode*/(_V82/*map*/["members"][_V155/*par*/["property"]]["setCodeFromTemporary"], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["typeMissmatch"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/(_V82/*map*/["members"][_V155/*par*/["property"]]["setCode"], _V155/*par*/);;
};
;
};
;
if((_V82/*map*/ && _V82/*map*/["setMemberCode"])){
if(! this["canSet"](this["getBuiltinType"]("var"), _V155/*par*/["valueType"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["typeMissmatch"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/(_V82/*map*/["setMemberCode"], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["accessNotAllowd"], _V155/*par*/);;
;
}),
"getConnectCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V82/*map*/;
var _V165/*valuePropertyType*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V82/*map*/ = _V70/*cDef*/["map"];
if(_V155/*par*/["valueProperty"]){
_V165/*valuePropertyType*/ = this["getPropertyType"]({"type": _V155/*par*/["valueType"],
"property": _V155/*par*/["valueProperty"]});
if(! this["canConnect"](_V155/*par*/["type"], _V155/*par*/["property"], _V165/*valuePropertyType*/)){
return _V130/*runtimeError*/(_V131/*errorMsg*/["connectNotPossible"], _V155/*par*/);;
};
;
_V155/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": _V155/*par*/["valueType"],
"property": _V155/*par*/["valueProperty"]}));;
return _V163/*assembleCode*/(_V82/*map*/["members"][_V155/*par*/["property"]]["connectSlotCode"], _V155/*par*/);;

}else{
if(! this["canConnect"](_V155/*par*/["type"], _V155/*par*/["property"], _V155/*par*/["valueType"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["connectNotPossible"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/(_V82/*map*/["members"][_V155/*par*/["property"]]["connectFunCode"], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["connectNotPossible"], _V155/*par*/);;
;
}),
"getPassAsTypeCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V166/*vcDef*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V166/*vcDef*/ = _V46/*getClass*/(_V155/*par*/["valueType"]);
if(_V155/*par*/["value"]){
if(! this["canSet"](_V155/*par*/["type"], _V155/*par*/["valueType"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["typeMissmatch"], _V155/*par*/);;
};
;
if(this["isTemporaryTrackedClass"](_V155/*par*/["type"])){
return this["getCreateTemporaryClassCode"](_V155/*par*/);;
};
;
return _V163/*assembleCode*/([_V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["missingVariable"], _V155/*par*/);;
;
}),
"getCreateTemporaryClassCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V167/*codeAr*/;
;
if(this["isTemporaryTrackedClass"](_V155/*par*/["valueType"])){
return _V163/*assembleCode*/([_V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
if(! this["isTrackedClass"](_V155/*par*/["valueType"])){
return _V163/*assembleCode*/([_V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["valueType"]);
_V167/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + _V70/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), _V112/*MAKRO_VALUE*/, ")"];
return _V163/*assembleCode*/(_V167/*codeAr*/, _V155/*par*/);;
;
}),
"getTrack": (function(_V55/*parInstance*/){
var _V72/*type*/;
var _V70/*cDef*/;
;
if(! _V55/*parInstance*/){
return;;
};
;
_V72/*type*/ = _V55/*parInstance*/[0];
_V70/*cDef*/ = _V46/*getClass*/(_V72/*type*/);
return _V55/*parInstance*/[_V70/*cDef*/["map"]["trackRootIdx"]]();;
;
}),
"getDestroyTemporaryClassCode": (function(_V155/*par*/){
var _V167/*codeAr*/;
;
if(! this["isTemporaryTrackedClass"](_V155/*par*/["valueType"])){
if(_V155/*par*/["noValueRequired"]){
return _V163/*assembleCode*/([], _V155/*par*/);;
};
;
return _V163/*assembleCode*/([_V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
_V167/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", _V112/*MAKRO_VALUE*/, ")"];
return _V163/*assembleCode*/(_V167/*codeAr*/, _V155/*par*/);;
;
}),
"dereferencePromisePreCode": (function(_V155/*par*/){
var _V167/*codeAr*/;
;
_V167/*codeAr*/ = [_V112/*MAKRO_VALUE*/, ".then("];
if(this["isTemporaryTrackedClass"](_V155/*par*/["valueType"])){
_V167/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];;
};
;
return _V163/*assembleCode*/(_V167/*codeAr*/, _V155/*par*/);;
;
}),
"dereferencePromisePostCode": (function(_V155/*par*/){
var _V167/*codeAr*/;
;
_V167/*codeAr*/ = [");\n"];
if(this["isTemporaryTrackedClass"](_V155/*par*/["valueType"])){
_V167/*codeAr*/ = [");\nreturn r;\n})(", _V112/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];;
};
;
return _V163/*assembleCode*/(_V167/*codeAr*/, _V155/*par*/);;
;
}),
"promisingReturnTypeCheck": (function(_V155/*par*/){
;
if(! this["isPromiseOfClass"](_V155/*par*/["type"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["notAPromise"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/([], _V155/*par*/);;
;
}),
"getSetVariableCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V166/*vcDef*/;
var _V168/*operator*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V166/*vcDef*/ = _V46/*getClass*/(_V155/*par*/["valueType"]);
if(_V155/*par*/["instance"]){
_V168/*operator*/ = (_V155/*par*/["operator"] || "=");
if((_V168/*operator*/ != "=")){
if(! (_V70/*cDef*/["isVar"] && _V166/*vcDef*/["isVar"])){
return _V130/*runtimeError*/(_V131/*errorMsg*/["operatorMissmatch"], _V155/*par*/);;
};
;
};
;
if(! this["canSet"](_V155/*par*/["type"], _V155/*par*/["valueType"])){
if(this["canSet"](_V155/*par*/["type"], this["getClassFromTemporaryTracked"](_V155/*par*/["valueType"]))){
if((_V155/*par*/["assignmentType"] == "Identifier")){
return _V163/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", _V109/*MAKRO_SELF*/, "){ _T", _V109/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", _V109/*MAKRO_SELF*/, " ", _V168/*operator*/, " v;\n", "_T", _V109/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", _V109/*MAKRO_SELF*/, " ", _V168/*operator*/, " undefined; ", "_T", _V109/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", _V112/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], _V155/*par*/);;
};
;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["typeMissmatch"], _V155/*par*/);;
};
;
return _V163/*assembleCode*/([_V109/*MAKRO_SELF*/, " ", _V168/*operator*/, " ", _V112/*MAKRO_VALUE*/], _V155/*par*/);;
};
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["missingVariable"], _V155/*par*/);;
;
}),
"declareReturnPromiseCode": (function(_V155/*par*/){
var _V169/*retType*/;
var _V81/*track*/;
var _V170/*assemblyAr*/;
;
_V169/*retType*/ = _V155/*par*/["type"];
_V81/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V169/*retType*/)){
_V81/*track*/ = true;;
_V169/*retType*/ = this["getClassFromTemporaryTracked"](_V169/*retType*/);;
};
;
if(this["isTrackedClass"](_V169/*retType*/)){
_V81/*track*/ = true;;
};
;
_V170/*assemblyAr*/;
if(_V81/*track*/){
_V170/*assemblyAr*/ = ["var ", _V155/*par*/["name"], ";\nvar _T", _V155/*par*/["name"], ";\n(function(){ var vAr = new ", _V171/*MAKRO_CONSTRUCTOR*/, "(); ", _V155/*par*/["name"], " = vAr[0]; _T", _V155/*par*/["name"], " = vAr[1]; })();"];;

}else{
_V170/*assemblyAr*/ = ["var ", _V155/*par*/["name"], " = new __Promise();\n"];;
};
;
return _V163/*assembleCode*/(_V170/*assemblyAr*/, _V155/*par*/);;
;
}),
"returnReturnPromiseCode": (function(_V155/*par*/){
var _V169/*retType*/;
var _V81/*track*/;
var _V170/*assemblyAr*/;
;
_V169/*retType*/ = _V155/*par*/["type"];
_V81/*track*/ = false;
if(this["isTemporaryTrackedClass"](_V169/*retType*/)){
_V81/*track*/ = true;;
_V169/*retType*/ = this["getClassFromTemporaryTracked"](_V169/*retType*/);;
};
;
if(this["isTrackedClass"](_V169/*retType*/)){
_V81/*track*/ = true;;
};
;
_V170/*assemblyAr*/;
if(_V81/*track*/){
_V170/*assemblyAr*/ = ["return [", _V155/*par*/["name"], ", _T", _V155/*par*/["name"], "];\n"];;

}else{
_V170/*assemblyAr*/ = ["return ", _V155/*par*/["name"], ";\n"];;
};
;
return _V163/*assembleCode*/(_V170/*assemblyAr*/, _V155/*par*/);;
;
}),
"getDeclareVariableCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V170/*assemblyAr*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V170/*assemblyAr*/ = ["var ", _V155/*par*/["name"], ";\n"];
if(_V70/*cDef*/["track"]){
_V170/*assemblyAr*/["push"]("var _T");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"](";\n");;
};
;
return _V163/*assembleCode*/(_V170/*assemblyAr*/, _V155/*par*/);;
;
}),
"getProcessParameterCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V170/*assemblyAr*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V170/*assemblyAr*/ = [];
if(_V70/*cDef*/["track"]){
_V170/*assemblyAr*/["push"]("var _T");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"](";\n");;
_V170/*assemblyAr*/["push"]("if(");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"]("){ _T");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"](" = ");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"]("[1];\n");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"](" = ");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"]("[0];}\n");;
};
;
return _V163/*assembleCode*/(_V170/*assemblyAr*/, _V155/*par*/);;
;
}),
"getDestroyVariableCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V170/*assemblyAr*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V170/*assemblyAr*/ = [];
if(_V70/*cDef*/["track"]){
_V170/*assemblyAr*/["push"]("if (_T");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"]("){ _T");;
_V170/*assemblyAr*/["push"](_V155/*par*/["name"]);;
_V170/*assemblyAr*/["push"]("();};");;
};
;
return _V163/*assembleCode*/(_V170/*assemblyAr*/, _V155/*par*/);;
;
}),
"getCallCode": (function(_V155/*par*/){
var _V70/*cDef*/;
var _V38/*i*/;
var _V39/*l*/;
var _V172/*args*/;
var _V173/*assembly*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V155/*par*/["type"]);
_V38/*i*/;
_V39/*l*/;
_V172/*args*/;
_V173/*assembly*/;
if(_V70/*cDef*/["isVar"]){
_V172/*args*/ = _V155/*par*/["arguments"];;
_V39/*l*/ = _V172/*args*/["length"];;
_V173/*assembly*/ = [_V109/*MAKRO_SELF*/, "("];;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V39/*l*/);++_V38/*i*/){{if((_V38/*i*/ > 0)){
_V173/*assembly*/["push"](", ");;
};
;
_V173/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": _V172/*args*/[_V38/*i*/]["value"],
"valueType": _V172/*args*/[_V38/*i*/]["type"]});;
}};
;
_V173/*assembly*/["push"](")");;
return _V163/*assembleCode*/(_V173/*assembly*/, _V155/*par*/);;
};
;
if(! _V70/*cDef*/["isFunction"]){
return _V130/*runtimeError*/(_V131/*errorMsg*/["expectedCallable"], _V155/*par*/);;
};
;
_V172/*args*/ = _V155/*par*/["arguments"];;
_V39/*l*/ = _V172/*args*/["length"];;
_V173/*assembly*/ = [_V109/*MAKRO_SELF*/, "("];;
for(_V38/*i*/ = 0;(_V38/*i*/ < _V39/*l*/);++_V38/*i*/){{if((_V38/*i*/ > 0)){
_V173/*assembly*/["push"](", ");;
};
;
_V173/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (_V70/*cDef*/["arguments"][_V38/*i*/] || this["getBuiltinType"]("var")),
"value": _V172/*args*/[_V38/*i*/]["value"],
"valueType": _V172/*args*/[_V38/*i*/]["type"]});;
}};
;
_V173/*assembly*/["push"](")");;
return _V163/*assembleCode*/(_V173/*assembly*/, _V155/*par*/);;
;
}),
"getBinaryExpressionCode": (function(_V155/*par*/){
var _V174/*lcDef*/;
var _V175/*rcDef*/;
;
_V174/*lcDef*/ = _V46/*getClass*/(_V155/*par*/["leftType"]);
_V175/*rcDef*/ = _V46/*getClass*/(_V155/*par*/["rightType"]);
if((_V174/*lcDef*/["isVar"] && _V175/*rcDef*/["isVar"])){
return _V163/*assembleCode*/(["(", _V176/*MAKRO_LEFT*/, " ", _V111/*MAKRO_OPERATOR*/, " ", _V177/*MAKRO_RIGHT*/, ")"], _V155/*par*/);;
};
;
switch (_V155/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":
return _V163/*assembleCode*/(["(", _V176/*MAKRO_LEFT*/, " ", _V111/*MAKRO_OPERATOR*/, " ", _V177/*MAKRO_RIGHT*/, ")"], _V155/*par*/);;
}
;
;
return _V130/*runtimeError*/(_V131/*errorMsg*/["operatorMissmatch"], _V155/*par*/);;
;
}),
"canSet": (function(_V178/*parTargetType*/, _V179/*parSourceType*/){
var _V180/*allOk*/;
var _V38/*i*/;
var _V39/*l*/;
var _V181/*tp*/;
var _V182/*sp*/;
;
if(((_V178/*parTargetType*/ === _V24/*undefined*/) && (_V179/*parSourceType*/ === _V24/*undefined*/))){
return true;;
};
;
if(((_V178/*parTargetType*/ === _V24/*undefined*/) || (_V179/*parSourceType*/ === _V24/*undefined*/))){
return false;;
};
;
if((_V178/*parTargetType*/ === _V179/*parSourceType*/)){
return true;;
};
;
if(this["isTemporaryTrackedClass"](_V179/*parSourceType*/)){
if(this["isTemporaryTrackedClass"](_V178/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V178/*parTargetType*/), this["getClassFromTemporaryTracked"](_V179/*parSourceType*/));;
};
;
return false;;
};
;
if(this["isTemporaryTrackedClass"](_V178/*parTargetType*/)){
return this["canSet"](this["getClassFromTemporaryTracked"](_V178/*parTargetType*/), _V179/*parSourceType*/);;
};
;
if((((_V178/*parTargetType*/["isFunction"] && _V179/*parSourceType*/["isFunction"]) && this["canSet"](_V178/*parTargetType*/["returnType"], _V179/*parSourceType*/["returnType"])) && (_V178/*parTargetType*/["parameters"]["length"] == _V179/*parSourceType*/["parameters"]["length"]))){
_V180/*allOk*/ = true;
_V38/*i*/ = 0;
_V39/*l*/ = _V178/*parTargetType*/["parameters"]["length"];
for(_V38/*i*/;(_V38/*i*/ < _V39/*l*/);++_V38/*i*/){{_V181/*tp*/ = _V178/*parTargetType*/["parameters"][_V38/*i*/];
_V182/*sp*/ = _V179/*parSourceType*/["parameters"][_V38/*i*/];
if(! this["canSet"](_V182/*sp*/, _V181/*tp*/)){
_V180/*allOk*/ = false;;
};
;
}};
;
if(_V180/*allOk*/){
return true;;
};
;
};
;
return false;;
;
}),
"canConnect": (function(_V67/*parType*/, _V183/*parProperty*/, _V184/*parFunType*/){
var _V70/*cDef*/;
var _V82/*map*/;
var _V125/*mDef*/;
var _V164/*propertyType*/;
;
_V70/*cDef*/ = _V46/*getClass*/(_V67/*parType*/);
_V82/*map*/ = _V70/*cDef*/["map"];
if(_V82/*map*/["members"][_V183/*parProperty*/]){
_V125/*mDef*/ = _V82/*map*/["members"][_V183/*parProperty*/];
_V164/*propertyType*/ = this["getPropertyType"]({"type": _V67/*parType*/,
"property": _V183/*parProperty*/});
if(! this["canSet"](_V164/*propertyType*/, _V184/*parFunType*/)){
return false;;
};
;
if(! (this["isVar"](_V164/*propertyType*/) || this["isFunctionType"](_V164/*propertyType*/))){
return false;;
};
;
if(! (this["isVar"](_V184/*parFunType*/) || this["isFunctionType"](_V184/*parFunType*/))){
return false;;
};
;
return true;;
};
;
return false;;
;
})};
_V130/*runtimeError*/ = (function(_V155/*par*/, _V43/*par2*/){
;
if((_V43/*par2*/ && _V43/*par2*/["errorFun"])){
_V43/*par2*/["errorFun"](_V155/*par*/);;
};
;
return (((("(function(){ throw { id:" + _V155/*par*/["id"]) + ", msg: ") + _V185/*stringEncodeStr*/(_V155/*par*/["msg"])) + " } })()");;
;
});
_V186/*_stringEncodeStr*/ = (function(_V155/*par*/){
var _V187/*s*/;
;
_V187/*s*/ = _V155/*par*/["replace"](new _V188/*RegExp*/("\\\\", "g"), "\\\\");
_V187/*s*/ = _V187/*s*/["replace"](new _V188/*RegExp*/("\\n", "g"), "\\n");;
_V187/*s*/ = _V187/*s*/["replace"](new _V188/*RegExp*/("\\r", "g"), "\\r");;
_V187/*s*/ = _V187/*s*/["replace"](new _V188/*RegExp*/("\\\"", "g"), "\\\"");;
_V187/*s*/ = _V187/*s*/["replace"](new _V188/*RegExp*/("\\u2028", "g"), "\\u2028");;
_V187/*s*/ = _V187/*s*/["replace"](new _V188/*RegExp*/("\\u2029", "g"), "\\u2029");;
return _V187/*s*/;;
;
});
_V185/*stringEncodeStr*/ = (function(_V155/*par*/){
;
return (("\"" + _V186/*_stringEncodeStr*/(_V155/*par*/)) + "\"");;
;
});
_V163/*assembleCode*/ = (function(_V189/*ar*/, _V155/*par*/){
var _V190/*res*/;
var _V191/*resStr*/;
var _V38/*i*/;
var _V85/*r*/;
var _V193/*tempPar*/;
var _V194/*tempRes*/;
;
_V190/*res*/ = _V155/*par*/["result"];
_V191/*resStr*/ = "";
if(! _V190/*res*/){
_V190/*res*/ = {"push": (function(_V192/*parStr*/){
;
_V191/*resStr*/ += _V192/*parStr*/;;
;
})};;
};
;
_V38/*i*/ = 0;
_V85/*r*/ = "";
for(_V38/*i*/ = 0;(_V38/*i*/ < _V189/*ar*/["length"]);++_V38/*i*/){{if((typeof _V189/*ar*/[_V38/*i*/] == "string")){
_V190/*res*/["push"](_V189/*ar*/[_V38/*i*/]);;

}else{
if(_V189/*ar*/[_V38/*i*/]["_internFun"]){
_V193/*tempPar*/ = _V189/*ar*/[_V38/*i*/];
_V193/*tempPar*/["result"] = _V155/*par*/["result"];;
_V193/*tempPar*/["errorFun"] = _V155/*par*/["errorFun"];;
_V194/*tempRes*/ = _V59/*classSystem*/[_V189/*ar*/[_V38/*i*/]["_internFun"]](_V193/*tempPar*/);
if(! _V155/*par*/["result"]){
_V190/*res*/["push"](_V194/*tempRes*/);;
};
;

}else{
switch (_V189/*ar*/[_V38/*i*/]){
case _V109/*MAKRO_SELF*/:
_V190/*res*/["push"](_V155/*par*/["instance"]);;
break;;
case _V195/*MAKRO_PROPERTY*/:
_V190/*res*/["push"](_V155/*par*/["property"]);;
break;;
case _V196/*MAKRO_PROPERTYSTRING*/:
_V190/*res*/["push"](_V185/*stringEncodeStr*/(_V155/*par*/["property"]));;
break;;
case _V110/*MAKRO_PROPERTYVALUE*/:
if(_V155/*par*/["propertyValue"]){
_V190/*res*/["push"](_V155/*par*/["propertyValue"]);;

}else{
_V190/*res*/["push"](_V185/*stringEncodeStr*/(_V155/*par*/["property"]));;
};
;
break;;
case _V112/*MAKRO_VALUE*/:
_V190/*res*/["push"](_V155/*par*/["value"]);;
break;;
case _V132/*MAKRO_VALUEPROPERTY*/:
_V190/*res*/["push"](_V155/*par*/["valueProperty"]);;
break;;
case _V176/*MAKRO_LEFT*/:
_V190/*res*/["push"](_V155/*par*/["left"]);;
break;;
case _V177/*MAKRO_RIGHT*/:
_V190/*res*/["push"](_V155/*par*/["right"]);;
break;;
case _V111/*MAKRO_OPERATOR*/:
_V190/*res*/["push"](_V155/*par*/["operator"]);;
break;;
case _V197/*MAKRO_RESOLVEFUN*/:
_V190/*res*/["push"]((_V155/*par*/["resolveFun"] || "undefined"));;
break;;
case _V198/*MAKRO_REJECTFUN*/:
_V190/*res*/["push"]((_V155/*par*/["rejectFun"] || "undefined"));;
break;;
case _V199/*MAKRO_TYPEVALUE*/:
_V190/*res*/["push"](_V155/*par*/["typeValue"]);;
break;;
case _V171/*MAKRO_CONSTRUCTOR*/:
_V190/*res*/["push"](_V155/*par*/["constructorName"]);;
break;;
}
;
;
};
};
;
}};
;
if(_V155/*par*/["result"]){
return _V190/*res*/;;
};
;
return _V191/*resStr*/;;
;
});
_V109/*MAKRO_SELF*/ = 0;
_V195/*MAKRO_PROPERTY*/ = 1;
_V196/*MAKRO_PROPERTYSTRING*/ = 2;
_V110/*MAKRO_PROPERTYVALUE*/ = 3;
_V112/*MAKRO_VALUE*/ = 4;
_V176/*MAKRO_LEFT*/ = 5;
_V111/*MAKRO_OPERATOR*/ = 6;
_V177/*MAKRO_RIGHT*/ = 7;
_V132/*MAKRO_VALUEPROPERTY*/ = 8;
_V197/*MAKRO_RESOLVEFUN*/ = 9;
_V198/*MAKRO_REJECTFUN*/ = 10;
_V199/*MAKRO_TYPEVALUE*/ = 11;
_V171/*MAKRO_CONSTRUCTOR*/ = 12;
_V131/*errorMsg*/ = {"accessNotAllowd": {"id": 200,
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
_V200/*promiseland*/["classSystem"] = _V59/*classSystem*/;;
_V7/*extra*/["classSystemPs"]["resolve"]({"classSystem": _V59/*classSystem*/,
"internalObjects": _V53/*internalObjects*/});;
return _V59/*classSystem*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();