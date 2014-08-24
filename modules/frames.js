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
if (promiseland._hasModule({ hashStr: "fa39a00039ce4e61f21191aca25245e7" })){ return promiseland._getModule("fa39a00039ce4e61f21191aca25245e7"); };
var _V10/*extra*/;try{_V10/*extra*/ = extra;}catch(e){};
var _V37/*Promise*/;try{_V37/*Promise*/ = Promise;}catch(e){};
var _V47/*undefined*/;try{_V47/*undefined*/ = undefined;}catch(e){};
var _V50/*console*/;try{_V50/*console*/ = console;}catch(e){};
var _V96/*JSON*/;try{_V96/*JSON*/ = JSON;}catch(e){};
var _V156/*promiseland*/;try{_V156/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*classSystem*/;
var _V3/*internalObjects*/;
var _V4/*getClassBySyncId*/;
var _V5/*DynInstance*/;
var _V15/*config*/;
var _V16/*moduleData*/;
var _V17/*profiles*/;
var _V18/*_emitFun*/;
var _V24/*_onFun*/;
var _V26/*Profile*/;
var _V28/*Connection*/;
var _V30/*maxId*/;
var _V31/*MAKRO_REQUEST*/;
var _V32/*MAKRO_MESSAGE*/;
var _V33/*MAKRO_ANSWER*/;
var _V34/*handlers*/;
var _V38/*ContentBase*/;
var _V41/*Request*/;
var _V43/*Answer*/;
var _V45/*Message*/;
var _V62/*Package*/;
var _V63/*waitForTheSend*/;
var _V114/*Transport*/;
var _V115/*prepConnection*/;
var _V172/*getInstanceTransportData*/;
var _V164/*getInstanceFromTransportData*/;
var _V197/*getInstanceFromSyncData*/;
var _V178/*getTypeTransportData*/;
var _V207/*getTypeFromTransportData*/;
var _V230/*getRemoteType*/;
var _V159/*getEffectiveFunctionResultType*/;
var _V239/*createRemoteExecRequest*/;
var _V249/*findProfile*/;
var _V153/*getModuleData*/;
var _V174/*errorMsg*/;
;
;
_V2/*classSystem*/;
_V3/*internalObjects*/;
_V4/*getClassBySyncId*/;
_V5/*DynInstance*/;
(function(){
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
_V8(function(){;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V11){_V2/*classSystem*/ = _V11["classSystem"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V12){_V3/*internalObjects*/ = _V12["internalObjects"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V13){_V4/*getClassBySyncId*/ = _V13["getClassBySyncId"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V14){_V5/*DynInstance*/ = _V14["DynInstance"];;
_V6.resolve(); return;;
}), _V9);
;}), _V9);
;}), _V9);
;}), _V9);
;})();
return _V6;
})();;
_V15/*config*/ = _V10/*extra*/["config"];
_V16/*moduleData*/ = {};
_V17/*profiles*/ = {};
_V18/*_emitFun*/ = (function(_V19/*parEventStr*/, _V20/*parData*/){
var _V21/*i*/;
var _V22/*l*/;
;
if(this["_on"][_V19/*parEventStr*/]){
_V21/*i*/ = 0;
_V22/*l*/ = this["_on"][_V19/*parEventStr*/]["length"];
for(_V21/*i*/;(_V21/*i*/ < _V22/*l*/);++_V21/*i*/){{try
{this["_on"][_V19/*parEventStr*/][_V21/*i*/](_V20/*parData*/);;
}catch(_V23/*e*/){};
;
}};
;
};
;
;
});
_V24/*_onFun*/ = (function(_V19/*parEventStr*/, _V25/*parFun*/){
;
if(this["_on"][_V19/*parEventStr*/]){
this["_on"][_V19/*parEventStr*/]["push"](_V25/*parFun*/);;
};
;
;
});
_V26/*Profile*/ = (function(){
;
this["_on"] = {"connection": []};;
;
});
_V26/*Profile*/["prototype"] = {"name": (function(){
;
;
}),
"emit": _V18/*_emitFun*/,
"find": (function(_V27/*parId*/){
;
;
}),
"on": _V24/*_onFun*/};;
_V28/*Connection*/ = (function(){
;
this["_on"] = {"data": [],
"disconnect": []};;
;
});
_V28/*Connection*/["prototype"] = {"send": (function(_V29/*parStr*/){
;
;
}),
"emit": _V18/*_emitFun*/,
"on": _V24/*_onFun*/};;
_V30/*maxId*/ = 10000000;
_V31/*MAKRO_REQUEST*/ = 1;
_V32/*MAKRO_MESSAGE*/ = 2;
_V33/*MAKRO_ANSWER*/ = 3;
_V34/*handlers*/ = {};
_V38/*ContentBase*/ = (function(){var _V35/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V36/*parParent*/, _V20/*parData*/){
;
this["parent"] = _V36/*parParent*/;;
this["sendPs"] = new _V37/*Promise*/();;
this["dataAr"] = (_V20/*parData*/ || []);;
;
}),
"newMessage": (function(){
;
return this["parent"]["newMessage"]();;
;
}),
"newRequest": (function(){
;
return this["parent"]["newRequest"]();;
;
}),
"send": (function(){
;
this["sendPs"]["resolve"]();;
;
}),
"setData": (function(_V20/*parData*/){
;
this["dataAr"][1] = _V20/*parData*/;;
;
}),
"getData": (function(){
;
return this["dataAr"][1];;
;
}),
"getType": (function(){
;
return this["getData"]()["type"];;
;
}),
"getTransport": (function(){
;
return this["parent"]["getTransport"]();;
;
}),
"getRequest": (function(_V27/*parId*/){
;
return this["parent"]["getRequest"](_V27/*parId*/);;
;
})}, [], _V35/*inherited*/);
return res; })();_V38/*ContentBase*/;;
_V41/*Request*/ = (function(){var _V39/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V36/*parParent*/, _V20/*parData*/){
;
this["dataAr"][0] = _V31/*MAKRO_REQUEST*/;;
this["answerPs"] = new _V37/*Promise*/();;
this["localPs"] = new _V37/*Promise*/();;
;
}),
"setId": (function(_V27/*parId*/){
;
this["dataAr"][2] = _V27/*parId*/;;
;
}),
"getId": (function(){
;
return this["dataAr"][2];;
;
}),
"createAnswer": (function(){
var _V40/*a*/;
;
_V40/*a*/ = this["parent"]["_createAnswer"]();
_V40/*a*/["setId"](this["getId"]());;
return _V40/*a*/;;
;
})}, [_V38/*ContentBase*/], _V39/*inherited*/);
return res; })();_V41/*Request*/;;
_V43/*Answer*/ = (function(){var _V42/*inherited*/ = {};
var res = promiseland.createClass({"isAnswer": true,
"constructor": (function(_V36/*parParent*/, _V20/*parData*/){
;
this["dataAr"][0] = _V33/*MAKRO_ANSWER*/;;
;
}),
"setId": (function(_V27/*parId*/){
;
this["dataAr"][2] = _V27/*parId*/;;
;
}),
"getId": (function(){
;
return this["dataAr"][2];;
;
})}, [_V38/*ContentBase*/], _V42/*inherited*/);
return res; })();_V43/*Answer*/;;
_V45/*Message*/ = (function(){var _V44/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V36/*parParent*/, _V20/*parData*/){
;
this["dataAr"][0] = _V32/*MAKRO_MESSAGE*/;;
this["localPs"] = new _V37/*Promise*/();;
;
})}, [_V38/*ContentBase*/], _V44/*inherited*/);
return res; })();_V45/*Message*/;;
_V62/*Package*/ = (function(){var _V46/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V36/*parParent*/, _V20/*parData*/){
var _V21/*i*/;
var _V48/*d*/;
var _V49/*r*/;
;
this["parent"] = _V36/*parParent*/;;
this["requests"] = {};;
this["dataAr"] = [_V47/*undefined*/];;
this["content"] = [];;
if(_V20/*parData*/){
try
{this["answers"] = [];;
_V21/*i*/;
for(_V21/*i*/ = 1;(_V21/*i*/ < _V20/*parData*/["length"]);++_V21/*i*/){{_V48/*d*/ = _V20/*parData*/[_V21/*i*/];
switch (_V48/*d*/[0]){
case _V31/*MAKRO_REQUEST*/:
_V49/*r*/ = this["newRequest"](_V48/*d*/);
this["requests"][_V49/*r*/["getId"]()] = _V49/*r*/;;
break;;
case _V32/*MAKRO_MESSAGE*/:
this["newMessage"](_V48/*d*/);;
break;;
case _V33/*MAKRO_ANSWER*/:
this["newAnswer"](_V48/*d*/);;
break;;
default:
_V36/*parParent*/["error"]();;
}
;
;
}};
;
}catch(_V23/*e*/){_V50/*console*/["log"]("package error");;
_V50/*console*/["log"](_V23/*e*/);;
};
this["dataAr"] = _V20/*parData*/;;

}else{
this["sendPs"] = new _V37/*Promise*/();;
};
;
;
}),
"getRequest": (function(_V27/*parId*/){
;
return this["requests"][_V27/*parId*/];;
;
}),
"handle": (function(){
var _V21/*i*/;
var _V51/*c*/;
var _V52/*type*/;
;
try
{_V21/*i*/ = 0;
while((_V21/*i*/ < this["content"]["length"])){
{_V51/*c*/ = this["content"][_V21/*i*/];
if(_V51/*c*/["isAnswer"]){
this["parent"]["handleAnswer"](_V51/*c*/, this);;

}else{
_V52/*type*/ = _V51/*c*/["getType"]();
if(_V34/*handlers*/[_V52/*type*/]){
_V34/*handlers*/[_V52/*type*/](_V51/*c*/, this);;

}else{
this["parent"]["error"]();;
};
;
};
;
++_V21/*i*/;;
}};
;
}catch(_V23/*e*/){_V50/*console*/["log"]("handle error");;
_V50/*console*/["log"](_V23/*e*/);;
};
;
;
}),
"getTransport": (function(){
;
return this["parent"];;
;
}),
"newRequest": (function(_V20/*parData*/){
var _V49/*r*/;
;
_V49/*r*/ = this["parent"]["_newRequest"](this, _V20/*parData*/);
this["requests"][_V49/*r*/["id"]] = _V49/*r*/;;
this["dataAr"]["push"](_V49/*r*/["dataAr"]);;
this["content"]["push"](_V49/*r*/);;
return _V49/*r*/;;
;
}),
"newMessage": (function(_V20/*parData*/){
var _V49/*r*/;
;
_V49/*r*/ = this["parent"]["_newMessage"](this, _V20/*parData*/);
this["dataAr"]["push"](_V49/*r*/["dataAr"]);;
this["content"]["push"](_V49/*r*/);;
return _V49/*r*/;;
;
}),
"_createAnswer": (function(_V20/*parData*/){
;
return this["parent"]["newAnswer"](_V20/*parData*/);;
;
}),
"newAnswer": (function(_V20/*parData*/){
var _V49/*r*/;
;
_V49/*r*/ = this["parent"]["_newAnswer"](this, _V20/*parData*/);
this["dataAr"]["push"](_V49/*r*/["dataAr"]);;
this["content"]["push"](_V49/*r*/);;
return _V49/*r*/;;
;
}),
"send": (function(){
var _V53 = new __Promise();
var _V54 = function(code){ return function(res){ try{code(res);}catch(e){ _V53.reject(e); }; }; };
var _V55 = function(e){ _V53.reject(e); };
var _V21/*i*/;
var _V56/*this*/ = this;
_V54(function(){;
_V21/*i*/ = 0;
var _V58 = new __Promise();
var _V57 = function(){var _V59 = new __Promise();
if((_V21/*i*/ < _V56/*this*/["content"]["length"])){_V56/*this*/["content"][_V21/*i*/]["sendPs"].then(_V54(function(_V60){_V60;;
++_V21/*i*/;;
_V59.resolve(true); return _V59;
;
}), _V55);
;}else{_V59.resolve(false); return _V59;
};
_V59;
return _V59;
};
var _V61 = function(){_V57().then(function(contLoop){
if (contLoop){_V61();}else{_V58.resolve();};
});
};
_V61();
_V58.then(function(){;
;
_V56/*this*/["sendPs"]["resolve"]();;
_V53.resolve(); return;;
});})();
return _V53;
})}, [], _V46/*inherited*/);
return res; })();_V62/*Package*/;;
_V63/*waitForTheSend*/ = (function(_V64/*content*/, _V65/*package*/){
var _V66 = new __Promise();
var _V67 = function(code){ return function(res){ try{code(res);}catch(e){ _V66.reject(e); }; }; };
var _V68 = function(e){ _V66.reject(e); };
_V67(function(){;
_V64/*content*/["sendPs"].then(_V67(function(_V69){_V69;;
_V65/*package*/["send"]();;
_V66.resolve(); return;;
}), _V68);
;})();
return _V66;
});
_V114/*Transport*/ = (function(){var _V70/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(){
;
this["expect"] = {};;
this["requests"] = [];;
this["nextFreeRequest"] = 0;;
this["_nextId"] = 1;;
this["types"] = [];;
this["remoteTypes"] = [];;
this["moduleData"] = {};;
this["instances"] = {};;
this["instanceTracks"] = {};;
this["workLoop"]();;
;
}),
"queue": (function(_V20/*parData*/){
var _V71/*id*/;
;
_V71/*id*/ = _V20/*parData*/[0];
this["_expectPs"](_V71/*id*/)["resolve"](_V20/*parData*/);;
;
}),
"_expectPs": (function(_V27/*parId*/){
var _V72/*ps*/;
;
_V72/*ps*/ = this["expect"][_V27/*parId*/];
if(! _V72/*ps*/){
_V72/*ps*/ = new _V37/*Promise*/();;
this["expect"][_V27/*parId*/] = _V72/*ps*/;;
};
;
return _V72/*ps*/;;
;
}),
"handleAnswer": (function(_V73/*parAnswer*/, _V74/*parPackage*/){
var _V71/*id*/;
var _V49/*r*/;
;
_V71/*id*/ = _V73/*parAnswer*/["getId"]();
_V49/*r*/ = this["requests"][_V71/*id*/];
if(! _V49/*r*/){
this["error"]();;
return;;
};
;
this["requests"][_V71/*id*/] = _V47/*undefined*/;;
if((_V71/*id*/ < this["nextFreeRequest"])){
this["nextFreeRequest"] = _V71/*id*/;;

}else{
if(((_V71/*id*/ + 1) == this["requests"]["length"])){
this["requests"]["pop"]();;
};
};
;
_V49/*r*/["answerPs"]["resolve"](_V73/*parAnswer*/);;
;
}),
"workLoop": (function(){
var _V75 = new __Promise();
var _V76 = function(code){ return function(res){ try{code(res);}catch(e){ _V75.reject(e); }; }; };
var _V77 = function(e){ _V75.reject(e); };
var _V21/*i*/;
var _V84/*data*/;
var _V65/*package*/;
var _V85/*this*/ = this;
_V76(function(){;
_V21/*i*/;
var _V79 = new __Promise();
var _V78 = function(){var _V80 = new __Promise();
if(true){_V21/*i*/ = 1;
var _V82 = new __Promise();
var _V81 = function(){var _V83 = new __Promise();
if((_V21/*i*/ < _V30/*maxId*/)){_V85/*this*/["_expectPs"](_V21/*i*/).then(_V76(function(_V86){_V84/*data*/ = _V86;
_V65/*package*/ = new _V62/*Package*/(_V85/*this*/, _V84/*data*/);
_V65/*package*/["handle"]();;
_V83.resolve(true); return _V83;
;
}), _V77);
;}else{_V83.resolve(false); return _V83;
};
_V83;
return _V83;
};
var _V87 = function(){_V81().then(function(contLoop){
if (contLoop){++_V21/*i*/;
_V87();}else{_V82.resolve();};
});
};
_V87();
_V82.then(function(){;
;
_V80.resolve(true); return _V80;
;
});}else{_V80.resolve(false); return _V80;
};
_V80;
return _V80;
};
var _V88 = function(){_V78().then(function(contLoop){
if (contLoop){_V88();}else{_V79.resolve();};
});
};
_V88();
_V79.then(function(){;
;
_V75.resolve(); return;;
});})();
return _V75;
}),
"nextId": (function(){
var _V89/*ret*/;
;
_V89/*ret*/ = this["_nextId"];
this["_nextId"] += 1;;
if(! (this["_nextId"] < _V30/*maxId*/)){
this["_nextId"] = 1;;
};
;
return _V89/*ret*/;;
;
}),
"_newRequest": (function(_V36/*parParent*/, _V20/*parData*/){
var _V49/*r*/;
var _V71/*id*/;
;
_V49/*r*/ = new _V41/*Request*/(_V36/*parParent*/, _V20/*parData*/);
if(! _V20/*parData*/){
_V71/*id*/ = this["nextFreeRequest"];
while(this["requests"][_V71/*id*/]){
{++_V71/*id*/;;
}};
;
this["nextFreeRequest"] = (_V71/*id*/ + 1);;
this["requests"][_V71/*id*/] = _V49/*r*/;;
_V49/*r*/["setId"](_V71/*id*/);;
};
;
return _V49/*r*/;;
;
}),
"_newMessage": (function(_V36/*parParent*/, _V20/*parData*/){
var _V49/*r*/;
;
_V49/*r*/ = new _V45/*Message*/(_V36/*parParent*/, _V20/*parData*/);
return _V49/*r*/;;
;
}),
"_newAnswer": (function(_V36/*parParent*/, _V20/*parData*/){
var _V49/*r*/;
;
_V49/*r*/ = new _V43/*Answer*/(_V36/*parParent*/, _V20/*parData*/);
return _V49/*r*/;;
;
}),
"newRequest": (function(){
var _V90/*p*/;
var _V49/*r*/;
;
_V90/*p*/ = this["newPackage"]();
_V49/*r*/ = _V90/*p*/["newRequest"]();
_V63/*waitForTheSend*/(_V49/*r*/, _V90/*p*/);;
return _V49/*r*/;;
;
}),
"newMessage": (function(){
var _V90/*p*/;
var _V49/*r*/;
;
_V90/*p*/ = this["newPackage"]();
_V49/*r*/ = _V90/*p*/["newMessage"]();
_V63/*waitForTheSend*/(_V49/*r*/, _V90/*p*/);;
return _V49/*r*/;;
;
}),
"newAnswer": (function(){
var _V90/*p*/;
var _V49/*r*/;
;
_V90/*p*/ = this["newPackage"]();
_V49/*r*/ = _V90/*p*/["newAnswer"]();
_V63/*waitForTheSend*/(_V49/*r*/, _V90/*p*/);;
return _V49/*r*/;;
;
}),
"newPackage": (function(){
var _V90/*p*/;
var _V91/*self*/;
;
_V90/*p*/ = new _V62/*Package*/(this);
_V91/*self*/ = this;
(function(){
var _V92 = new __Promise();
var _V93 = function(code){ return function(res){ try{code(res);}catch(e){ _V92.reject(e); }; }; };
var _V94 = function(e){ _V92.reject(e); };
_V93(function(){;
_V90/*p*/["sendPs"].then(_V93(function(_V95){_V95;;
_V90/*p*/["dataAr"][0] = _V91/*self*/["nextId"]();;
_V91/*self*/["sendString"](_V96/*JSON*/["stringify"](_V90/*p*/["dataAr"]));;
_V92.resolve(); return;;
}), _V94);
;})();
return _V92;
})();;
return _V90/*p*/;;
;
}),
"stringData": (function(_V29/*parStr*/){
var _V84/*data*/;
;
_V84/*data*/ = _V96/*JSON*/["parse"](_V29/*parStr*/);
this["queue"](_V84/*data*/);;
;
}),
"sendString": (function(_V29/*parStr*/){
;
;
}),
"_getModuleData": (function(_V97/*parHash*/){
var _V16/*moduleData*/;
;
_V16/*moduleData*/ = this["moduleData"][_V97/*parHash*/];
if(! _V16/*moduleData*/){
_V16/*moduleData*/ = {};;
this["moduleData"][_V97/*parHash*/] = _V16/*moduleData*/;;
};
;
return _V16/*moduleData*/;;
;
}),
"addType": (function(_V98/*parType*/, _V99/*parRemoteTypeId*/){
var _V100/*syncId*/;
var _V16/*moduleData*/;
var _V101/*entry*/;
var _V102/*typeIds*/;
var _V103/*typeIdInt*/;
;
_V100/*syncId*/ = _V2/*classSystem*/["getSyncId"](_V98/*parType*/);
_V16/*moduleData*/ = this["_getModuleData"](_V100/*syncId*/["hash"]);
_V101/*entry*/ = _V16/*moduleData*/[_V100/*syncId*/["name"]];
_V102/*typeIds*/;
if(_V101/*entry*/){
_V102/*typeIds*/ = _V101/*entry*/["typeIds"];;
if((_V99/*parRemoteTypeId*/ !== _V47/*undefined*/)){
_V102/*typeIds*/["remoteId"] = _V99/*parRemoteTypeId*/;;
this["remoteTypes"][_V99/*parRemoteTypeId*/] = _V98/*parType*/;;
};
;
return _V102/*typeIds*/;;
};
;
_V103/*typeIdInt*/ = this["types"]["length"];
this["types"]["push"](_V98/*parType*/);;
_V101/*entry*/ = {"typeIds": {"id": _V103/*typeIdInt*/,
"remoteId": _V99/*parRemoteTypeId*/},
"type": _V98/*parType*/};
_V16/*moduleData*/[_V100/*syncId*/["name"]] = _V101/*entry*/;;
if((_V99/*parRemoteTypeId*/ !== _V47/*undefined*/)){
this["remoteTypes"][_V99/*parRemoteTypeId*/] = _V98/*parType*/;;
};
;
return _V101/*entry*/["typeIds"];;
;
}),
"getTypeByRemoteId": (function(_V99/*parRemoteTypeId*/){
;
return this["remoteTypes"][_V99/*parRemoteTypeId*/];;
;
}),
"getTypeById": (function(_V104/*parTypeId*/){
;
return this["types"][_V104/*parTypeId*/];;
;
}),
"getInstanceRemoteId": (function(_V20/*parData*/){
var _V105/*internalId*/;
;
_V105/*internalId*/ = _V2/*classSystem*/["getInternalId"](_V20/*parData*/);
return this["instances"][_V105/*internalId*/];;
;
}),
"addInstance": (function(_V106/*parDynInstance*/, _V107/*parRemoteId*/, _V108/*parTrack*/){
var _V105/*internalId*/;
var _V109/*remoteId*/;
;
_V105/*internalId*/ = _V106/*parDynInstance*/["getInternalId"]();
_V109/*remoteId*/ = this["instances"][_V105/*internalId*/];
if((_V109/*remoteId*/ === _V47/*undefined*/)){
_V2/*classSystem*/["addTransport"](_V106/*parDynInstance*/, this);;
this["instances"][_V105/*internalId*/] = _V107/*parRemoteId*/;;
};
;
if(_V108/*parTrack*/){
if(this["instanceTracks"][_V105/*internalId*/]){
_V108/*parTrack*/();;

}else{
this["instanceTracks"][_V105/*internalId*/] = _V108/*parTrack*/;;
};
};
;
;
}),
"removeInstance": (function(_V110/*parInternalId*/, _V111/*dontSend*/){
var _V109/*remoteId*/;
var _V112/*m*/;
var _V113/*track*/;
;
_V109/*remoteId*/ = this["instances"][_V110/*parInternalId*/];
if(((_V109/*remoteId*/ !== _V47/*undefined*/) && ! _V111/*dontSend*/)){
_V112/*m*/ = this["newMessage"]();
_V112/*m*/["setData"]({"type": "remove",
"remoteId": _V109/*remoteId*/});;
_V112/*m*/["send"]();;
};
;
delete this["instances"][_V110/*parInternalId*/];;
_V2/*classSystem*/["removeTransport"](_V110/*parInternalId*/, this);;
if(this["instanceTracks"][_V110/*parInternalId*/]){
_V113/*track*/ = this["instanceTracks"][_V110/*parInternalId*/];
delete this["instanceTracks"][_V110/*parInternalId*/];;
_V113/*track*/();;
};
;
;
})}, [], _V70/*inherited*/);
return res; })();_V114/*Transport*/;;
_V115/*prepConnection*/ = (function(_V116/*connection*/, _V117/*profile*/){
var _V118/*buffer*/;
var _V119/*expectid*/;
var _V120/*nextId*/;
var _V121/*requests*/;
var _V122/*profilenameStr*/;
var _V123/*sendData*/;
var _V124/*internalObjectMap*/;
var _V125/*transferIdMap*/;
var _V126/*nextTranseferId*/;
var _V133/*transport*/;
;
_V118/*buffer*/ = {};
_V119/*expectid*/ = 1;
_V120/*nextId*/ = 1;
_V121/*requests*/ = {};
_V122/*profilenameStr*/ = ("" + _V117/*profile*/["name"]());
_V123/*sendData*/ = (function(_V84/*data*/){
var _V71/*id*/;
;
_V71/*id*/ = _V120/*nextId*/;
_V120/*nextId*/++;;
if((_V120/*nextId*/ > _V30/*maxId*/)){
_V120/*nextId*/ = 1;;
};
;
_V84/*data*/["id"] = _V71/*id*/;;
_V116/*connection*/["send"](_V96/*JSON*/["stringify"](_V84/*data*/));;
return _V71/*id*/;;
;
});
_V124/*internalObjectMap*/ = {};
_V125/*transferIdMap*/ = {};
_V126/*nextTranseferId*/ = 1;
_V116/*connection*/["hasObject"] = (function(_V27/*parId*/){
;
if(! _V3/*internalObjects*/[_V27/*parId*/]){
return false;;
};
;
if(_V124/*internalObjectMap*/[_V27/*parId*/]){
return true;;
};
;
return false;;
;
});;
_V116/*connection*/["getTransferId"] = (function(_V27/*parId*/){
;
return _V124/*internalObjectMap*/[_V27/*parId*/]["transferId"];;
;
});;
_V116/*connection*/["newTransferId"] = (function(_V27/*parId*/, _V108/*parTrack*/, _V127/*transferId*/){
var _V128/*syncData*/;
var _V101/*entry*/;
;
if(_V124/*internalObjectMap*/[_V27/*parId*/]){
if(_V108/*parTrack*/){
_V108/*parTrack*/();;
};
;
return _V124/*internalObjectMap*/[_V27/*parId*/]["transferId"];;
};
;
_V128/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V3/*internalObjects*/[_V27/*parId*/]);
_V128/*syncData*/["connections"]["push"](_V116/*connection*/);;
if(! _V127/*transferId*/){
_V127/*transferId*/ = (_V122/*profilenameStr*/ + _V126/*nextTranseferId*/++);;
};
;
_V101/*entry*/ = {"transferId": _V127/*transferId*/,
"internalId": _V27/*parId*/,
"track": _V108/*parTrack*/};
_V124/*internalObjectMap*/[_V27/*parId*/] = _V101/*entry*/;;
_V125/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V101/*entry*/;;
return _V101/*entry*/["transferId"];;
;
});;
_V116/*connection*/["removeSynced"] = (function(_V27/*parId*/){
var _V101/*entry*/;
var _V127/*transferId*/;
var _V128/*syncData*/;
var _V21/*i*/;
var _V129/*newConAr*/;
var _V51/*c*/;
;
if(! _V124/*internalObjectMap*/[_V27/*parId*/]){
return;;
};
;
_V101/*entry*/ = _V124/*internalObjectMap*/[_V27/*parId*/];
_V127/*transferId*/ = _V101/*entry*/["transferId"];
_V124/*internalObjectMap*/[_V101/*entry*/["internalId"]] = _V47/*undefined*/;;
_V125/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V47/*undefined*/;;
_V116/*connection*/["createMsg"]({"type": "unsync",
"transferId": _V127/*transferId*/});;
_V128/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V3/*internalObjects*/[_V101/*entry*/["internalId"]]);
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
_V21/*i*/ = 0;
_V129/*newConAr*/ = [];
for(_V21/*i*/ = 0;(_V21/*i*/ < _V128/*syncData*/["connections"]["length"]);++_V21/*i*/){{_V51/*c*/ = _V128/*syncData*/["connections"][_V21/*i*/];
if((_V51/*c*/ !== _V116/*connection*/)){
_V129/*newConAr*/["push"](_V51/*c*/);;
};
;
}};
;
_V128/*syncData*/["connections"] = _V129/*newConAr*/;;
;
});;
_V116/*connection*/["unsync"] = (function(_V130/*parTransferId*/){
var _V101/*entry*/;
;
_V101/*entry*/ = _V125/*transferIdMap*/[_V130/*parTransferId*/];
_V124/*internalObjectMap*/[_V101/*entry*/["internalId"]] = _V47/*undefined*/;;
_V125/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V47/*undefined*/;;
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
;
});;
_V116/*connection*/["syncValue"] = (function(_V131/*par*/){
;
_V116/*connection*/["createMsg"]({"type": "syncValue",
"transferId": _V131/*par*/["transferId"],
"memberIdx": _V131/*par*/["memberIdx"],
"value": _V131/*par*/["value"]});;
;
});;
_V116/*connection*/["recieveSyncValue"] = (function(_V131/*par*/){
var _V101/*entry*/;
var _V132/*instance*/;
;
_V101/*entry*/ = _V125/*transferIdMap*/[_V131/*par*/["transferId"]];
_V132/*instance*/ = _V3/*internalObjects*/[_V101/*entry*/["internalId"]];
if(! _V132/*instance*/){
return;;
};
;
_V132/*instance*/[_V131/*par*/["memberIdx"]] = _V131/*par*/["value"];;
;
});;
_V133/*transport*/ = new _V114/*Transport*/();
_V133/*transport*/["sendString"] = (function(_V134/*s*/){
;
_V116/*connection*/["send"](_V134/*s*/);;
;
});;
_V116/*connection*/["on"]("data", (function(_V135/*dataStr*/){
;
_V133/*transport*/["stringData"](_V135/*dataStr*/);;
;
}));;
_V116/*connection*/["on"]("disconnect", (function(_V135/*dataStr*/){
var _V23/*e*/;
var _V101/*entry*/;
;
_V23/*e*/;
for(_V23/*e*/ in _V124/*internalObjectMap*/){_V101/*entry*/ = _V124/*internalObjectMap*/[_V23/*e*/];
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
};
;
_V124/*internalObjectMap*/ = {};;
_V125/*transferIdMap*/ = {};;
;
}));;
_V116/*connection*/["createRequest"] = (function(_V84/*data*/){
;
return _V133/*transport*/["newRequest"]();;
;
});;
_V116/*connection*/["createMsg"] = (function(_V84/*data*/){
var _V136/*msg*/;
;
_V136/*msg*/ = _V133/*transport*/["newMessage"]();
_V136/*msg*/["setData"](_V84/*data*/);;
_V136/*msg*/["send"]();;
;
});;
;
});
_V34/*handlers*/["remove"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V84/*data*/;
var _V138/*t*/;
;
try
{_V84/*data*/ = _V137/*parContent*/["getData"]();
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V138/*t*/["removeInstance"](_V84/*data*/["remoteId"], true);;
}catch(_V23/*e*/){_V50/*console*/["log"]("sync error");;
_V50/*console*/["log"](_V23/*e*/);;
};
;
;
});;
_V34/*handlers*/["sync"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V84/*data*/;
var _V138/*t*/;
var _V139/*realInstance*/;
;
try
{_V84/*data*/ = _V137/*parContent*/["getData"]();
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V139/*realInstance*/ = _V3/*internalObjects*/[_V84/*data*/["remoteId"]];
if(! _V139/*realInstance*/){
return;;
};
;
_V2/*classSystem*/["setMemberByIdx"](_V139/*realInstance*/, _V84/*data*/["memberIdx"], _V84/*data*/["value"]);;
}catch(_V23/*e*/){_V50/*console*/["log"]("sync error");;
_V50/*console*/["log"](_V23/*e*/);;
};
;
;
});;
_V34/*handlers*/["remoteexec"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V140 = new __Promise();
var _V141 = function(code){ return function(res){ try{code(res);}catch(e){ _V140.reject(e); }; }; };
var _V142 = function(e){ _V140.reject(e); };
var _V113/*track*/;
var _V143/*err*/;
var _V144/*args*/;
var _V145/*realArgs*/;
var _V146/*cleanUpArgs*/;
var _V147/*clearExtraTracks*/;
var _V21/*i*/;
var _V148/*answer*/;
var _V84/*data*/;
var _V16/*moduleData*/;
var _V154/*funEntry*/;
var _V157/*funType*/;
var _V158/*resultTypes*/;
var _V160/*isVar*/;
var _V132/*instance*/;
var _V167/*funResult*/;
_V141(function(){;
_V113/*track*/ = (function(){
;
;
});
_V143/*err*/;
_V144/*args*/ = [];
_V145/*realArgs*/ = [];
_V146/*cleanUpArgs*/ = (function(){
var _V21/*i*/;
;
_V21/*i*/;
for(_V21/*i*/ = 0;(_V21/*i*/ < _V144/*args*/["length"]);++_V21/*i*/){{try
{_V144/*args*/[_V21/*i*/]["track"]();;
}catch(_V23/*e*/){};
;
}};
;
;
});
_V147/*clearExtraTracks*/ = (function(){
var _V21/*i*/;
;
_V21/*i*/;
for(_V21/*i*/ = 0;(_V21/*i*/ < _V144/*args*/["length"]);++_V21/*i*/){{try
{_V144/*args*/[_V21/*i*/]["clearExtraTracks"]();;
}catch(_V23/*e*/){};
;
}};
;
;
});
_V21/*i*/;
_V148/*answer*/ = _V137/*parContent*/["createAnswer"]();
var _V149 = new __Promise();
var _V150 = new __Promise();
var _V151/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V150.resolve(e); }; }; };
var _V152 = function(e){ _V150.resolve(e); };
_V151/*try catch*/(function(){_V84/*data*/ = _V137/*parContent*/["getData"]();
_V16/*moduleData*/ = _V153/*getModuleData*/(_V84/*data*/["hashStr"]);
_V154/*funEntry*/ = _V16/*moduleData*/["functions"][_V84/*data*/["nameStr"]];
var _V155 = new __Promise();
if(_V156/*promiseland*/["profileHas"](_V154/*funEntry*/["profile"])){
_V157/*funType*/ = _V154/*funEntry*/["funType"];
_V158/*resultTypes*/ = _V159/*getEffectiveFunctionResultType*/(_V157/*funType*/);
_V160/*isVar*/ = true;
if(! _V2/*classSystem*/["isVar"](_V158/*resultTypes*/["promiseResolveType"])){
_V160/*isVar*/ = false;;
};
;
_V21/*i*/ = 0;
var _V162 = new __Promise();
var _V161 = function(){var _V163 = new __Promise();
if((_V21/*i*/ < _V84/*data*/["args"]["length"])){_V164/*getInstanceFromTransportData*/(_V84/*data*/["args"][_V21/*i*/], _V137/*parContent*/).then(_V151/*try catch*/(function(_V165){_V132/*instance*/ = _V165;
_V144/*args*/["push"](_V132/*instance*/);;
_V163.resolve(true); return _V163;
;
}), _V152);
;}else{_V163.resolve(false); return _V163;
};
_V163;
return _V163;
};
var _V166 = function(){_V161().then(function(contLoop){
if (contLoop){++_V21/*i*/;
_V166();}else{_V162.resolve();};
});
};
_V166();
_V162.then(function(){;
;
for(_V21/*i*/ = 0;(_V21/*i*/ < _V144/*args*/["length"]);++_V21/*i*/){{_V145/*realArgs*/["push"](_V144/*args*/[_V21/*i*/]["getInstanceAsType"](_V2/*classSystem*/["getFunctionArgumentType"](_V157/*funType*/, _V21/*i*/)));;
}};
;
_V146/*cleanUpArgs*/();;
_V167/*funResult*/ = _V154/*funEntry*/["fun"]["apply"](_V47/*undefined*/, _V145/*realArgs*/);
if(_V158/*resultTypes*/["isTemporary"]){
_V113/*track*/ = _V167/*funResult*/[1];;
_V167/*funResult*/ = _V167/*funResult*/[0];;
};
;
var _V168 = new __Promise();
var _V169 = new __Promise();
var _V170/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V169.resolve(e); }; }; };
var _V171 = function(e){ _V169.resolve(e); };
_V170/*try catch*/(function(){_V167/*funResult*/.then(_V170/*try catch*/(function(_V173){_V148/*answer*/["setData"]({"data": _V172/*getInstanceTransportData*/(_V158/*resultTypes*/["promiseResolveType"], _V173, _V148/*answer*/)});;
_V168.resolve();
}), _V171);
;})();
_V169.then(_V151/*try catch*/(function(_V23/*e*/){_V50/*console*/["log"]("answer error");;
_V50/*console*/["log"](_V23/*e*/);;
_V148/*answer*/["setData"]({"err": _V23/*e*/});;
_V168.resolve();;
}));
_V168.then(_V151/*try catch*/(function(){;
;
_V50/*console*/["log"]("send answer:");;
_V50/*console*/["log"](_V148/*answer*/["getData"]());;
_V148/*answer*/["send"]();;
_V113/*track*/();;
_V140.resolve(); return;;
_V155.resolve();;
}), _V152)});
}else{
_V155.resolve();}; _V155.then(function(){;
;
_V149.resolve();
});})();
_V150.then(_V141(function(_V23/*e*/){_V143/*err*/ = _V23/*e*/;;
_V50/*console*/["log"]("remoteexec error");;
_V50/*console*/["log"](_V23/*e*/);;
_V146/*cleanUpArgs*/();;
_V147/*clearExtraTracks*/();;
_V149.resolve();;
}));
_V149.then(_V141(function(){;
;
_V148/*answer*/["setData"]({"err": (_V143/*err*/ || _V174/*errorMsg*/["canNotExecute"])});;
_V148/*answer*/["send"]();;
_V50/*console*/["log"]("error answer send");;
_V113/*track*/();;
_V146/*cleanUpArgs*/();;
_V50/*console*/["log"]("remote exec fail end");;
_V140.resolve(); return;;
_V140.resolve(); return;;
}), _V142)})();
return _V140;
});;
_V172/*getInstanceTransportData*/ = (function(_V98/*parType*/, _V20/*parData*/, _V137/*parContent*/){
var _V132/*instance*/;
var _V175/*getInstanceFun*/;
var _V177/*getTypeFun*/;
var _V138/*t*/;
var _V105/*internalId*/;
var _V109/*remoteId*/;
var _V179/*request*/;
var _V89/*ret*/;
;
if((_V20/*parData*/ === _V47/*undefined*/)){
return _V47/*undefined*/;;
};
;
if(_V2/*classSystem*/["isVar"](_V98/*parType*/)){
return [_V20/*parData*/];;
};
;
_V132/*instance*/ = new _V5/*DynInstance*/(_V98/*parType*/, _V20/*parData*/);
try
{_V175/*getInstanceFun*/ = (function(_V98/*parType*/, _V176/*_parData*/){
;
return _V172/*getInstanceTransportData*/(_V98/*parType*/, _V176/*_parData*/, _V137/*parContent*/);;
;
});
_V177/*getTypeFun*/ = (function(_V98/*parType*/){
;
return _V178/*getTypeTransportData*/(_V98/*parType*/, _V137/*parContent*/);;
;
});
_V50/*console*/["log"]("step 1");;
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V50/*console*/["log"]("step 1.1");;
_V105/*internalId*/ = _V132/*instance*/["getInternalId"]();
_V50/*console*/["log"]("step 1.2");;
_V109/*remoteId*/ = _V138/*t*/["getInstanceRemoteId"](_V132/*instance*/["instance"]);
_V50/*console*/["log"]("step 2");;
_V179/*request*/ = _V137/*parContent*/["newRequest"]();
_V50/*console*/["log"]("step 3");;
if((_V109/*remoteId*/ !== _V47/*undefined*/)){
_V179/*request*/["setData"]({"type": "instance",
"remoteId": _V109/*remoteId*/});;

}else{
_V179/*request*/["setData"]({"type": "addInstance",
"id": _V105/*internalId*/,
"data": _V2/*classSystem*/["getInstanceSyncData"](_V132/*instance*/, _V175/*getInstanceFun*/, _V177/*getTypeFun*/)});;
};
;
_V179/*request*/["send"]();;
_V50/*console*/["log"]("step 4");;
(function(){
var _V180 = new __Promise();
var _V181 = function(code){ return function(res){ try{code(res);}catch(e){ _V180.reject(e); }; }; };
var _V182 = function(e){ _V180.reject(e); };
var _V148/*answer*/;
var _V188/*answerData*/;
_V181(function(){;
var _V183 = new __Promise();
var _V184 = new __Promise();
var _V185/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V184.resolve(e); }; }; };
var _V186 = function(e){ _V184.resolve(e); };
_V185/*try catch*/(function(){_V179/*request*/["answerPs"].then(_V185/*try catch*/(function(_V187){_V148/*answer*/ = _V187;
_V188/*answerData*/ = _V148/*answer*/["getData"]();
if((_V188/*answerData*/["id"] !== _V47/*undefined*/)){
_V138/*t*/["addInstance"](_V132/*instance*/, _V188/*answerData*/["id"], (_V132/*instance*/["isServe"]() ? _V132/*instance*/["getTrack"]() : _V47/*undefined*/));;
};
;
_V183.resolve();
}), _V186);
;})();
_V184.then(_V181(function(_V23/*e*/){_V183.resolve();;
}));
_V183.then(_V181(function(){;
;
_V132/*instance*/["track"]();;
_V180.resolve(); return;;
}), _V182)})();
return _V180;
})();;
_V89/*ret*/ = _V179/*request*/["getId"]();
}catch(_V23/*e*/){_V50/*console*/["log"]("getInstanceTransportData error");;
_V50/*console*/["log"](_V23/*e*/);;
if(_V132/*instance*/){
_V132/*instance*/["track"]();;
};
;
throw {"position": "getInstanceTransportData",
"error": _V23/*e*/};
};
;
return _V89/*ret*/;;
;
});
_V164/*getInstanceFromTransportData*/ = (function(_V20/*parData*/, _V137/*parContent*/){
var _V189 = new __Promise();
var _V190 = function(code){ return function(res){ try{code(res);}catch(e){ _V189.reject(e); }; }; };
var _V191 = function(e){ _V189.reject(e); };
var _V192/*remoteType*/;
var _V193/*remoteVar*/;
var _V194/*remoteInstance*/;
var _V195/*req*/;
_V190(function(){;
if(((_V20/*parData*/ === _V47/*undefined*/) || (_V20/*parData*/ === null))){
_V189.resolve(new _V5/*DynInstance*/(_V2/*classSystem*/["getBuiltinType"]("var"), _V47/*undefined*/)); return;;
;
};
;
_V192/*remoteType*/;
_V193/*remoteVar*/ = false;
_V194/*remoteInstance*/;
if((_V20/*parData*/["length"] === 1)){
_V189.resolve(new _V5/*DynInstance*/(_V2/*classSystem*/["getBuiltinType"]("var"), _V20/*parData*/[0])); return;;
};
;
_V195/*req*/ = _V137/*parContent*/["getRequest"](_V20/*parData*/);
_V195/*req*/["localPs"].then(_V190(function(_V196){_V189.resolve(_V196); return;;
_V189.resolve(); return;;
}), _V191);
;})();
return _V189;
});
_V197/*getInstanceFromSyncData*/ = (function(_V20/*parData*/, _V137/*parContent*/){
var _V198 = new __Promise();
var _V199 = function(code){ return function(res){ try{code(res);}catch(e){ _V198.reject(e); }; }; };
var _V200 = function(e){ _V198.reject(e); };
var _V201/*tempAr*/;
var _V202/*clearTempAr*/;
var _V138/*t*/;
var _V21/*i*/;
var _V89/*ret*/;
_V199(function(){;
_V201/*tempAr*/ = [];
_V202/*clearTempAr*/ = (function(){
var _V21/*i*/;
;
_V21/*i*/ = 1;
for(_V21/*i*/ = 1;(_V21/*i*/ < _V201/*tempAr*/["length"]);++_V21/*i*/){{try
{_V201/*tempAr*/[_V21/*i*/]["track"]();;
}catch(_V23/*e*/){};
;
}};
;
;
});
var _V203 = new __Promise();
var _V204 = new __Promise();
var _V205/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V204.resolve(e); }; }; };
var _V206 = function(e){ _V204.resolve(e); };
_V205/*try catch*/(function(){_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V207/*getTypeFromTransportData*/(_V20/*parData*/[0], _V137/*parContent*/).then(_V205/*try catch*/(function(_V208){_V201/*tempAr*/["push"](_V208);;
_V21/*i*/ = 1;
_V21/*i*/ = 1;
var _V210 = new __Promise();
var _V209 = function(){var _V211 = new __Promise();
if((_V21/*i*/ < _V20/*parData*/["length"])){_V164/*getInstanceFromTransportData*/(_V20/*parData*/[_V21/*i*/], _V137/*parContent*/).then(_V205/*try catch*/(function(_V212){_V201/*tempAr*/["push"](_V212);;
_V211.resolve(true); return _V211;
;
}), _V206);
;}else{_V211.resolve(false); return _V211;
};
_V211;
return _V211;
};
var _V213 = function(){_V209().then(function(contLoop){
if (contLoop){++_V21/*i*/;
_V213();}else{_V210.resolve();};
});
};
_V213();
_V210.then(function(){;
;
_V89/*ret*/ = _V2/*classSystem*/["getInstanceFromSyncData"](_V201/*tempAr*/);
_V203.resolve();
});}), _V206);
;})();
_V204.then(_V199(function(_V23/*e*/){_V202/*clearTempAr*/();;
throw _V23/*e*/;
_V203.resolve();;
}));
_V203.then(_V199(function(){;
;
_V202/*clearTempAr*/();;
_V198.resolve(_V89/*ret*/); return;;
_V198.resolve(); return;;
}), _V200)})();
return _V198;
});
_V34/*handlers*/["addInstance"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V214 = new __Promise();
var _V215 = function(code){ return function(res){ try{code(res);}catch(e){ _V214.reject(e); }; }; };
var _V216 = function(e){ _V214.reject(e); };
var _V148/*answer*/;
var _V132/*instance*/;
var _V138/*t*/;
var _V84/*data*/;
var _V105/*internalId*/;
_V215(function(){;
_V148/*answer*/ = _V137/*parContent*/["createAnswer"]();
_V132/*instance*/;
var _V217 = new __Promise();
var _V218 = new __Promise();
var _V219/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V218.resolve(e); }; }; };
var _V220 = function(e){ _V218.resolve(e); };
_V219/*try catch*/(function(){_V138/*t*/ = _V74/*parPackage*/["getTransport"]();
_V84/*data*/ = _V137/*parContent*/["getData"]();
_V197/*getInstanceFromSyncData*/(_V84/*data*/["data"], _V137/*parContent*/).then(_V219/*try catch*/(function(_V221){_V132/*instance*/ = _V221;;
_V105/*internalId*/ = _V132/*instance*/["getInternalId"]();
_V138/*t*/["addInstance"](_V132/*instance*/, _V84/*data*/["id"]);;
_V148/*answer*/["setData"]({"id": _V105/*internalId*/});;
_V148/*answer*/["send"]();;
_V137/*parContent*/["localPs"]["resolve"](_V132/*instance*/);;
_V214.resolve(); return;;
_V217.resolve();
}), _V220);
;})();
_V218.then(_V215(function(_V23/*e*/){if(_V132/*instance*/){
_V132/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("answer error 3");;
_V50/*console*/["log"](_V23/*e*/);;
_V148/*answer*/["setData"]({"err": _V23/*e*/});;
_V148/*answer*/["send"]();;
_V137/*parContent*/["localPs"]["reject"](_V23/*e*/);;
throw _V23/*e*/;
_V217.resolve();;
}));
_V217.then(_V215(function(){;
;
_V214.resolve(); return;;
}), _V216)})();
return _V214;
});;
_V34/*handlers*/["instance"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V148/*answer*/;
var _V132/*instance*/;
var _V138/*t*/;
var _V84/*data*/;
var _V105/*internalId*/;
var _V139/*realInstance*/;
;
_V148/*answer*/ = _V137/*parContent*/["createAnswer"]();
_V132/*instance*/;
try
{_V138/*t*/ = _V74/*parPackage*/["getTransport"]();
_V84/*data*/ = _V137/*parContent*/["getData"]();
_V105/*internalId*/ = _V84/*data*/["remoteId"];
_V139/*realInstance*/ = _V3/*internalObjects*/[_V105/*internalId*/];
if(_V139/*realInstance*/){
_V132/*instance*/ = new _V5/*DynInstance*/(_V47/*undefined*/, _V139/*realInstance*/);;
_V148/*answer*/["setData"]({});;
_V148/*answer*/["send"]();;
_V137/*parContent*/["localPs"]["resolve"](_V132/*instance*/);;

}else{
throw _V174/*errorMsg*/["missingImplementation"];
};
;
}catch(_V23/*e*/){if(_V132/*instance*/){
_V132/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("answer error 4");;
_V50/*console*/["log"](_V23/*e*/);;
_V148/*answer*/["setData"]({"err": _V23/*e*/});;
_V148/*answer*/["send"]();;
_V137/*parContent*/["localPs"]["reject"](_V23/*e*/);;
throw _V23/*e*/;
};
;
;
});;
_V178/*getTypeTransportData*/ = (function(_V98/*parType*/, _V137/*parContent*/){
var _V138/*t*/;
var _V102/*typeIds*/;
var _V179/*request*/;
;
if(! _V2/*classSystem*/["isSyncedClass"](_V98/*parType*/)){
throw _V174/*errorMsg*/["noSyncableData"];
};
;
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V102/*typeIds*/ = _V138/*t*/["addType"](_V98/*parType*/);
if((_V102/*typeIds*/ && (_V102/*typeIds*/["remoteId"] !== _V47/*undefined*/))){
return _V102/*typeIds*/["remoteId"];;
};
;
_V179/*request*/ = _V137/*parContent*/["newRequest"]();
_V179/*request*/["setData"]({"type": "addType",
"syncId": _V2/*classSystem*/["getSyncId"](_V98/*parType*/),
"typeId": _V102/*typeIds*/["id"]});;
_V179/*request*/["send"]();;
(function(){
var _V222 = new __Promise();
var _V223 = function(code){ return function(res){ try{code(res);}catch(e){ _V222.reject(e); }; }; };
var _V224 = function(e){ _V222.reject(e); };
var _V148/*answer*/;
var _V84/*data*/;
_V223(function(){;
_V179/*request*/["answerPs"].then(_V223(function(_V225){_V148/*answer*/ = _V225;
_V84/*data*/ = _V148/*answer*/["getData"]();
if(! _V84/*data*/["err"]){
_V102/*typeIds*/["remoteId"] = _V84/*data*/["id"];;
};
;
_V222.resolve(); return;;
}), _V224);
;})();
return _V222;
})();;
return [_V179/*request*/["getId"]()];;
;
});
_V207/*getTypeFromTransportData*/ = (function(_V20/*parData*/, _V137/*parContent*/){
var _V226 = new __Promise();
var _V227 = function(code){ return function(res){ try{code(res);}catch(e){ _V226.reject(e); }; }; };
var _V228 = function(e){ _V226.reject(e); };
var _V138/*t*/;
var _V52/*type*/;
var _V195/*req*/;
_V227(function(){;
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
_V52/*type*/;
if((typeof _V20/*parData*/ === "number")){
_V52/*type*/ = _V138/*t*/["getTypeById"](_V20/*parData*/);;
_V226.resolve(_V52/*type*/); return;;
};
;
_V195/*req*/ = _V137/*parContent*/["getRequest"](_V20/*parData*/[0]);
_V195/*req*/["localPs"].then(_V227(function(_V229){_V226.resolve(_V229); return;;
_V226.resolve(); return;;
}), _V228);
;})();
return _V226;
});
_V230/*getRemoteType*/ = (function(_V20/*parData*/, _V137/*parContent*/){
var _V138/*t*/;
;
if((typeof _V20/*parData*/ == "number")){
_V138/*t*/ = _V137/*parContent*/["getTransport"]();
return _V138/*t*/["getRemoteType"](_V20/*parData*/);;
};
;
throw _V174/*errorMsg*/["invalidRemoteType"];
;
});
_V34/*handlers*/["addType"] = (function(_V137/*parContent*/, _V74/*parPackage*/){
var _V148/*answer*/;
var _V84/*data*/;
var _V52/*type*/;
var _V103/*typeIdInt*/;
var _V138/*t*/;
var _V102/*typeIds*/;
;
_V148/*answer*/ = _V137/*parContent*/["createAnswer"]();
_V84/*data*/ = _V137/*parContent*/["getData"]();
_V52/*type*/ = _V4/*getClassBySyncId*/(_V84/*data*/["syncId"]);
if(! _V52/*type*/){
_V137/*parContent*/["localPs"]["reject"](_V174/*errorMsg*/["remoteTypeNotAvailable"]);;
_V148/*answer*/["setData"]({"err": _V174/*errorMsg*/["remoteTypeNotAvailable"]});;
_V148/*answer*/["send"]();;
return;;
};
;
_V103/*typeIdInt*/ = _V84/*data*/["typeId"];
_V138/*t*/ = _V74/*parPackage*/["getTransport"]();
_V102/*typeIds*/ = _V138/*t*/["addType"](_V52/*type*/, _V103/*typeIdInt*/);
_V148/*answer*/["setData"]({"id": _V102/*typeIds*/["id"]});;
_V148/*answer*/["send"]();;
_V137/*parContent*/["localPs"]["resolve"](_V52/*type*/);;
;
});;
_V159/*getEffectiveFunctionResultType*/ = (function(_V231/*parFunType*/){
var _V232/*res*/;
var _V235/*resultType*/;
var _V236/*unTrackedType*/;
var _V237/*promiseConstructor*/;
var _V238/*promiseResolveType*/;
;
_V232/*res*/ = {"promiseResolveType": _V2/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": _V2/*classSystem*/["getFunctionReturnType"](_V231/*parFunType*/),
"resolvePromise": (function(_V233/*parPromise*/, _V234/*parValue*/){
;
_V233/*parPromise*/["resolve"](_V234/*parValue*/);;
;
}),
"rejectPromise": (function(_V233/*parPromise*/, _V234/*parValue*/){
;
_V233/*parPromise*/["reject"](_V234/*parValue*/);;
;
})};
_V235/*resultType*/ = _V232/*res*/["originalResultType"];
_V232/*res*/["newPromise"] = (function(){
;
return new _V37/*Promise*/();;
;
});;
if(_V2/*classSystem*/["isTemporaryTrackedClass"](_V235/*resultType*/)){
_V232/*res*/["isTemporary"] = true;;
_V236/*unTrackedType*/ = _V2/*classSystem*/["getClassFromTemporaryTracked"](_V235/*resultType*/);
if(_V2/*classSystem*/["isPromiseOfClass"](_V236/*unTrackedType*/)){
_V237/*promiseConstructor*/ = _V2/*classSystem*/["getTypeConstructor"](_V236/*unTrackedType*/);
_V232/*res*/["newPromise"] = (function(){
;
return _V237/*promiseConstructor*/();;
;
});;
_V232/*res*/["resolvePromise"] = (function(_V233/*parPromise*/, _V234/*parValue*/){
;
_V233/*parPromise*/[0]["resolve"](_V234/*parValue*/);;
;
});;
_V232/*res*/["rejectPromise"] = (function(_V233/*parPromise*/, _V234/*parValue*/){
;
_V233/*parPromise*/[0]["reject"](_V234/*parValue*/);;
;
});;
_V238/*promiseResolveType*/ = _V2/*classSystem*/["getClassFromPromiseOf"](_V236/*unTrackedType*/);
_V232/*res*/["promiseResolveType"] = _V238/*promiseResolveType*/;;
};
;
};
;
return _V232/*res*/;;
;
});
_V239/*createRemoteExecRequest*/ = (function(_V131/*par*/){
var _V240 = new __Promise();
var _V241 = function(code){ return function(res){ try{code(res);}catch(e){ _V240.reject(e); }; }; };
var _V242 = function(e){ _V240.reject(e); };
var _V116/*connection*/;
var _V157/*funType*/;
var _V158/*resultTypes*/;
var _V179/*request*/;
var _V144/*args*/;
var _V21/*i*/;
var _V148/*answer*/;
var _V84/*data*/;
var _V132/*instance*/;
var _V89/*ret*/;
_V241(function(){;
var _V243 = new __Promise();
var _V244 = new __Promise();
var _V245/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V244.resolve(e); }; }; };
var _V246 = function(e){ _V244.resolve(e); };
_V245/*try catch*/(function(){_V116/*connection*/ = _V131/*par*/["connection"];
_V157/*funType*/ = _V131/*par*/["funType"];
_V158/*resultTypes*/ = _V159/*getEffectiveFunctionResultType*/(_V157/*funType*/);
_V179/*request*/ = _V116/*connection*/["createRequest"]();
_V144/*args*/ = [];
if((_V131/*par*/["args"] && _V131/*par*/["args"]["length"])){
_V21/*i*/ = 0;
for(_V21/*i*/ = 0;(_V21/*i*/ < _V131/*par*/["args"]["length"]);++_V21/*i*/){{_V144/*args*/["push"](_V172/*getInstanceTransportData*/(_V2/*classSystem*/["getFunctionArgumentType"](_V157/*funType*/, _V21/*i*/), _V131/*par*/["args"][_V21/*i*/], _V179/*request*/));;
}};
;
};
;
_V179/*request*/["setData"]({"type": "remoteexec",
"hashStr": _V131/*par*/["hashStr"],
"nameStr": _V131/*par*/["nameStr"],
"args": _V144/*args*/});;
_V179/*request*/["send"]();;
_V179/*request*/["answerPs"].then(_V245/*try catch*/(function(_V247){_V148/*answer*/ = _V247;
_V84/*data*/ = _V148/*answer*/["getData"]();
if(_V84/*data*/["err"]){
throw _V84/*data*/["err"];
};
;
_V164/*getInstanceFromTransportData*/(_V84/*data*/["data"], _V148/*answer*/).then(_V245/*try catch*/(function(_V248){_V132/*instance*/ = _V248;
_V89/*ret*/ = _V132/*instance*/["getInstanceAsType"](_V158/*resultTypes*/["promiseResolveType"]);
_V243.resolve();
}), _V246);
;}), _V246);
;})();
_V244.then(_V241(function(_V23/*e*/){if(_V132/*instance*/){
_V132/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("createRemoteExecRequest error");;
_V50/*console*/["log"](_V23/*e*/);;
throw _V23/*e*/;
_V243.resolve();;
}));
_V243.then(_V241(function(){;
;
if(_V132/*instance*/){
_V132/*instance*/["track"]();;
};
;
_V240.resolve(_V89/*ret*/); return;;
_V240.resolve(); return;;
}), _V242)})();
return _V240;
});
_V249/*findProfile*/ = (function(_V250/*profileNameStr*/){
;
return _V17/*profiles*/[_V250/*profileNameStr*/];;
;
});
_V153/*getModuleData*/ = (function(_V97/*parHash*/){
;
if(! _V16/*moduleData*/[_V97/*parHash*/]){
_V16/*moduleData*/[_V97/*parHash*/] = {"functions": {},
"classes": {}};;
};
;
return _V16/*moduleData*/[_V97/*parHash*/];;
;
});
_V156/*promiseland*/["ProfileBaseClass"] = _V26/*Profile*/;;
_V156/*promiseland*/["ConnectionBaseClass"] = _V28/*Connection*/;;
_V156/*promiseland*/["addProfile"] = (function(_V251/*parProfile*/){
;
if(! _V251/*parProfile*/){
return;;
};
;
if(_V17/*profiles*/[_V251/*parProfile*/["name"]()]){
throw {"code": 4,
"msg": "profile exists"};
};
;
_V17/*profiles*/[_V251/*parProfile*/["name"]()] = _V251/*parProfile*/;;
_V251/*parProfile*/["on"]("connection", (function(_V116/*connection*/){
;
_V115/*prepConnection*/(_V116/*connection*/, _V251/*parProfile*/);;
;
}));;
;
});;
_V156/*promiseland*/["profileHas"] = (function(_V250/*profileNameStr*/){
;
if((_V15/*config*/["profile"] === _V250/*profileNameStr*/)){
return true;;
};
;
return false;;
;
});;
_V156/*promiseland*/["registerRemote"] = (function(_V250/*profileNameStr*/, _V252/*hashStr*/, _V253/*nameStr*/, _V254/*fun*/, _V157/*funType*/){
var _V16/*moduleData*/;
var _V101/*entry*/;
;
_V16/*moduleData*/ = _V153/*getModuleData*/(_V252/*hashStr*/);
_V101/*entry*/ = {"profile": _V250/*profileNameStr*/,
"fun": _V254/*fun*/,
"funType": _V157/*funType*/};
_V16/*moduleData*/["functions"][_V253/*nameStr*/] = _V101/*entry*/;;
_V2/*classSystem*/["definitionPromise"](_V157/*funType*/)["then"]((function(_V255/*definedFunType*/){
;
_V101/*entry*/["funType"] = _V255/*definedFunType*/;;
;
}));;
;
});;
_V156/*promiseland*/["remoteExec"] = (function(_V252/*hashStr*/, _V253/*nameStr*/, _V144/*args*/){
var _V16/*moduleData*/;
var _V101/*entry*/;
var _V117/*profile*/;
var _V116/*connection*/;
var _V158/*resultTypes*/;
var _V256/*resultPromise*/;
;
_V16/*moduleData*/ = _V153/*getModuleData*/(_V252/*hashStr*/);
if((! _V16/*moduleData*/ || ! _V16/*moduleData*/["functions"][_V253/*nameStr*/])){
throw _V174/*errorMsg*/["missingRemoteFun"];
};
;
_V101/*entry*/ = _V16/*moduleData*/["functions"][_V253/*nameStr*/];
_V117/*profile*/ = _V249/*findProfile*/(_V101/*entry*/["profile"]);
if(! _V117/*profile*/){
throw _V174/*errorMsg*/["frameNotFound"];
};
;
_V116/*connection*/ = _V117/*profile*/["find"]();
if(! _V116/*connection*/){
throw {"code": 3,
"msg": "no connection available"};
};
;
_V158/*resultTypes*/ = _V159/*getEffectiveFunctionResultType*/(_V101/*entry*/["funType"]);
try
{_V256/*resultPromise*/ = _V158/*resultTypes*/["newPromise"]();
(function(){
var _V257 = new __Promise();
var _V258 = function(code){ return function(res){ try{code(res);}catch(e){ _V257.reject(e); }; }; };
var _V259 = function(e){ _V257.reject(e); };
var _V264/*tempRes*/;
var _V265/*realRes*/;
_V258(function(){;
var _V260 = new __Promise();
var _V261 = new __Promise();
var _V262/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V261.resolve(e); }; }; };
var _V263 = function(e){ _V261.resolve(e); };
_V262/*try catch*/(function(){_V264/*tempRes*/ = _V239/*createRemoteExecRequest*/({"connection": _V116/*connection*/,
"hashStr": _V252/*hashStr*/,
"nameStr": _V253/*nameStr*/,
"args": _V144/*args*/,
"funType": _V101/*entry*/["funType"]});
_V264/*tempRes*/.then(_V262/*try catch*/(function(_V266){_V265/*realRes*/ = _V266;
_V158/*resultTypes*/["resolvePromise"](_V256/*resultPromise*/, _V265/*realRes*/);;
_V260.resolve();
}), _V263);
;})();
_V261.then(_V258(function(_V23/*e*/){_V158/*resultTypes*/["rejectPromise"](_V256/*resultPromise*/, _V23/*e*/);;
_V260.resolve();;
}));
_V260.then(_V258(function(){;
;
_V257.resolve(); return;;
}), _V259)})();
return _V257;
})();;
}catch(_V23/*e*/){_V158/*resultTypes*/["rejectPromise"](_V256/*resultPromise*/, _V23/*e*/);;
};
;
return _V256/*resultPromise*/;;
;
});;
_V10/*extra*/["moduleSystemPs"]["resolve"]({"getModuleData": _V153/*getModuleData*/});;
_V174/*errorMsg*/ = {"missingRemoteFun": {"id": 801,
"msg": "remote function not registred"},
"frameNotAvailable": {"id": 802,
"msg": "requested frame not available"},
"frameNotFound": {"id": 803,
"msg": "requested frame not found"},
"noSyncableData": {"id": 804,
"msg": "no syncable Data"},
"invalidRemoteType": {"id": 805,
"msg": "invalid remote type"},
"remoteTypeNotAvailable": {"id": 806,
"msg": "remote type not available"},
"canNotExecute": {"id": 807,
"msg": "can not execute",
"additional": "this might have one of several reasons"},
"typeMissmatch": {"id": 808,
"msg": "type missmatch"},
"takeOverDuplicate": {"id": 809,
"msg": "internal: take over duplicate"},
"missingImplementation": {"id": 810,
"msg": "internal: missing implementation"}};
return;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();