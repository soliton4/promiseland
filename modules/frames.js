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
if (promiseland._hasModule({ hashStr: "6aa4f166664230d5b3f7a7b9d3509e72" })){ return promiseland._getModule("6aa4f166664230d5b3f7a7b9d3509e72"); };
var _V10/*extra*/;try{_V10/*extra*/ = extra;}catch(e){};
var _V37/*Promise*/;try{_V37/*Promise*/ = Promise;}catch(e){};
var _V47/*undefined*/;try{_V47/*undefined*/ = undefined;}catch(e){};
var _V50/*console*/;try{_V50/*console*/ = console;}catch(e){};
var _V96/*JSON*/;try{_V96/*JSON*/ = JSON;}catch(e){};
var _V150/*promiseland*/;try{_V150/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*classSystem*/;
var _V3/*internalObjects*/;
var _V4/*getClassBySyncId*/;
var _V5/*Instance*/;
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
var _V113/*Transport*/;
var _V114/*prepConnection*/;
var _V161/*getInstanceTransportData*/;
var _V178/*getInstanceFromTransportData*/;
var _V187/*getInstanceFromSyncData*/;
var _V167/*getTypeTransportData*/;
var _V197/*getTypeFromTransportData*/;
var _V220/*getRemoteType*/;
var _V153/*getEffectiveFunctionResultType*/;
var _V229/*createRemoteExecRequest*/;
var _V240/*findProfile*/;
var _V147/*getModuleData*/;
var _V163/*errorMsg*/;
;
;
_V2/*classSystem*/;
_V3/*internalObjects*/;
_V4/*getClassBySyncId*/;
_V5/*Instance*/;
(function(){
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
_V8(function(){;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V11){_V2/*classSystem*/ = _V11["classSystem"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V12){_V3/*internalObjects*/ = _V12["internalObjects"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V13){_V4/*getClassBySyncId*/ = _V13["getClassBySyncId"];;
_V10/*extra*/["classSystemPs"].then(_V8(function(_V14){_V5/*Instance*/ = _V14["Instance"];;
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
_V113/*Transport*/ = (function(){var _V70/*inherited*/ = {};
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
"addInstance": (function(_V106/*parInstance*/, _V107/*parRemoteId*/, _V108/*parTrack*/){
var _V105/*internalId*/;
var _V109/*remoteId*/;
;
_V105/*internalId*/ = _V106/*parInstance*/["getInternalId"]();
_V109/*remoteId*/ = this["instances"][_V105/*internalId*/];
if((_V109/*remoteId*/ === _V47/*undefined*/)){
_V2/*classSystem*/["addTransport"](_V106/*parInstance*/, this);;
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
"removeInstance": (function(_V110/*parInternalId*/){
var _V109/*remoteId*/;
var _V111/*m*/;
var _V112/*track*/;
;
_V50/*console*/["log"]("- remove instance");;
_V109/*remoteId*/ = this["instances"][_V110/*parInternalId*/];
if((_V109/*remoteId*/ !== _V47/*undefined*/)){
_V111/*m*/ = this["newMessage"]();
_V111/*m*/["setData"]({"type": "remove",
"remoteId": _V109/*remoteId*/});;
_V111/*m*/["send"]();;
};
;
delete this["instances"][_V110/*parInternalId*/];;
_V2/*classSystem*/["removeTransport"](_V110/*parInternalId*/, this);;
if(this["instanceTracks"][_V110/*parInternalId*/]){
_V50/*console*/["log"]("- remove instance track");;
_V112/*track*/ = this["instanceTracks"][_V110/*parInternalId*/];
delete this["instanceTracks"][_V110/*parInternalId*/];;
_V112/*track*/();;
};
;
;
})}, [], _V70/*inherited*/);
return res; })();_V113/*Transport*/;;
_V114/*prepConnection*/ = (function(_V115/*connection*/, _V116/*profile*/){
var _V117/*buffer*/;
var _V118/*expectid*/;
var _V119/*nextId*/;
var _V120/*requests*/;
var _V121/*profilenameStr*/;
var _V122/*sendData*/;
var _V123/*internalObjectMap*/;
var _V124/*transferIdMap*/;
var _V125/*nextTranseferId*/;
var _V132/*transport*/;
;
_V117/*buffer*/ = {};
_V118/*expectid*/ = 1;
_V119/*nextId*/ = 1;
_V120/*requests*/ = {};
_V121/*profilenameStr*/ = ("" + _V116/*profile*/["name"]());
_V122/*sendData*/ = (function(_V84/*data*/){
var _V71/*id*/;
;
_V71/*id*/ = _V119/*nextId*/;
_V119/*nextId*/++;;
if((_V119/*nextId*/ > _V30/*maxId*/)){
_V119/*nextId*/ = 1;;
};
;
_V84/*data*/["id"] = _V71/*id*/;;
_V115/*connection*/["send"](_V96/*JSON*/["stringify"](_V84/*data*/));;
return _V71/*id*/;;
;
});
_V123/*internalObjectMap*/ = {};
_V124/*transferIdMap*/ = {};
_V125/*nextTranseferId*/ = 1;
_V115/*connection*/["hasObject"] = (function(_V27/*parId*/){
;
if(! _V3/*internalObjects*/[_V27/*parId*/]){
return false;;
};
;
if(_V123/*internalObjectMap*/[_V27/*parId*/]){
return true;;
};
;
return false;;
;
});;
_V115/*connection*/["getTransferId"] = (function(_V27/*parId*/){
;
return _V123/*internalObjectMap*/[_V27/*parId*/]["transferId"];;
;
});;
_V115/*connection*/["newTransferId"] = (function(_V27/*parId*/, _V108/*parTrack*/, _V126/*transferId*/){
var _V127/*syncData*/;
var _V101/*entry*/;
;
if(_V123/*internalObjectMap*/[_V27/*parId*/]){
if(_V108/*parTrack*/){
_V108/*parTrack*/();;
};
;
return _V123/*internalObjectMap*/[_V27/*parId*/]["transferId"];;
};
;
_V127/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V3/*internalObjects*/[_V27/*parId*/]);
_V127/*syncData*/["connections"]["push"](_V115/*connection*/);;
if(! _V126/*transferId*/){
_V126/*transferId*/ = (_V121/*profilenameStr*/ + _V125/*nextTranseferId*/++);;
};
;
_V101/*entry*/ = {"transferId": _V126/*transferId*/,
"internalId": _V27/*parId*/,
"track": _V108/*parTrack*/};
_V123/*internalObjectMap*/[_V27/*parId*/] = _V101/*entry*/;;
_V124/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V101/*entry*/;;
return _V101/*entry*/["transferId"];;
;
});;
_V115/*connection*/["removeSynced"] = (function(_V27/*parId*/){
var _V101/*entry*/;
var _V126/*transferId*/;
var _V127/*syncData*/;
var _V21/*i*/;
var _V128/*newConAr*/;
var _V51/*c*/;
;
if(! _V123/*internalObjectMap*/[_V27/*parId*/]){
return;;
};
;
_V101/*entry*/ = _V123/*internalObjectMap*/[_V27/*parId*/];
_V126/*transferId*/ = _V101/*entry*/["transferId"];
_V123/*internalObjectMap*/[_V101/*entry*/["internalId"]] = _V47/*undefined*/;;
_V124/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V47/*undefined*/;;
_V115/*connection*/["createMsg"]({"type": "unsync",
"transferId": _V126/*transferId*/});;
_V127/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V3/*internalObjects*/[_V101/*entry*/["internalId"]]);
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
_V21/*i*/ = 0;
_V128/*newConAr*/ = [];
for(_V21/*i*/ = 0;(_V21/*i*/ < _V127/*syncData*/["connections"]["length"]);++_V21/*i*/){{_V51/*c*/ = _V127/*syncData*/["connections"][_V21/*i*/];
if((_V51/*c*/ !== _V115/*connection*/)){
_V128/*newConAr*/["push"](_V51/*c*/);;
};
;
}};
;
_V127/*syncData*/["connections"] = _V128/*newConAr*/;;
;
});;
_V115/*connection*/["unsync"] = (function(_V129/*parTransferId*/){
var _V101/*entry*/;
;
_V101/*entry*/ = _V124/*transferIdMap*/[_V129/*parTransferId*/];
_V123/*internalObjectMap*/[_V101/*entry*/["internalId"]] = _V47/*undefined*/;;
_V124/*transferIdMap*/[_V101/*entry*/["transferId"]] = _V47/*undefined*/;;
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
;
});;
_V115/*connection*/["syncValue"] = (function(_V130/*par*/){
;
_V115/*connection*/["createMsg"]({"type": "syncValue",
"transferId": _V130/*par*/["transferId"],
"memberIdx": _V130/*par*/["memberIdx"],
"value": _V130/*par*/["value"]});;
;
});;
_V115/*connection*/["recieveSyncValue"] = (function(_V130/*par*/){
var _V101/*entry*/;
var _V131/*instance*/;
;
_V101/*entry*/ = _V124/*transferIdMap*/[_V130/*par*/["transferId"]];
_V131/*instance*/ = _V3/*internalObjects*/[_V101/*entry*/["internalId"]];
if(! _V131/*instance*/){
return;;
};
;
_V131/*instance*/[_V130/*par*/["memberIdx"]] = _V130/*par*/["value"];;
;
});;
_V132/*transport*/ = new _V113/*Transport*/();
_V132/*transport*/["sendString"] = (function(_V133/*s*/){
;
_V115/*connection*/["send"](_V133/*s*/);;
;
});;
_V115/*connection*/["on"]("data", (function(_V134/*dataStr*/){
;
_V132/*transport*/["stringData"](_V134/*dataStr*/);;
;
}));;
_V115/*connection*/["on"]("disconnect", (function(_V134/*dataStr*/){
var _V23/*e*/;
var _V101/*entry*/;
;
_V23/*e*/;
for(_V23/*e*/ in _V123/*internalObjectMap*/){_V101/*entry*/ = _V123/*internalObjectMap*/[_V23/*e*/];
if(_V101/*entry*/["track"]){
_V101/*entry*/["track"]();;
};
;
};
;
_V123/*internalObjectMap*/ = {};;
_V124/*transferIdMap*/ = {};;
;
}));;
_V115/*connection*/["createRequest"] = (function(_V84/*data*/){
;
return _V132/*transport*/["newRequest"]();;
;
});;
_V115/*connection*/["createMsg"] = (function(_V84/*data*/){
var _V135/*msg*/;
;
_V135/*msg*/ = _V132/*transport*/["newMessage"]();
_V135/*msg*/["setData"](_V84/*data*/);;
_V135/*msg*/["send"]();;
;
});;
;
});
_V34/*handlers*/["remove"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V84/*data*/;
var _V137/*t*/;
;
_V50/*console*/["log"]("calling remove");;
try
{_V84/*data*/ = _V136/*parContent*/["getData"]();
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V137/*t*/["removeInstance"](_V84/*data*/["remoteId"]);;
}catch(_V23/*e*/){_V50/*console*/["log"]("sync error");;
_V50/*console*/["log"](_V23/*e*/);;
};
;
;
});;
_V34/*handlers*/["sync"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V84/*data*/;
var _V137/*t*/;
var _V138/*realInstance*/;
;
try
{_V84/*data*/ = _V136/*parContent*/["getData"]();
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V138/*realInstance*/ = _V3/*internalObjects*/[_V84/*data*/["remoteId"]];
if(! _V138/*realInstance*/){
return;;
};
;
_V2/*classSystem*/["setMemberByIdx"](_V138/*realInstance*/, _V84/*data*/["memberIdx"], _V84/*data*/["value"]);;
}catch(_V23/*e*/){_V50/*console*/["log"]("sync error");;
_V50/*console*/["log"](_V23/*e*/);;
};
;
;
});;
_V34/*handlers*/["remoteexec"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V139 = new __Promise();
var _V140 = function(code){ return function(res){ try{code(res);}catch(e){ _V139.reject(e); }; }; };
var _V141 = function(e){ _V139.reject(e); };
var _V112/*track*/;
var _V142/*err*/;
var _V84/*data*/;
var _V16/*moduleData*/;
var _V148/*funEntry*/;
var _V151/*funType*/;
var _V152/*resultTypes*/;
var _V154/*isVar*/;
var _V155/*funResult*/;
var _V156/*answer*/;
_V140(function(){;
_V112/*track*/ = (function(){
;
;
});
_V142/*err*/;
var _V143 = new __Promise();
var _V144 = new __Promise();
var _V145/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V144.resolve(e); }; }; };
var _V146 = function(e){ _V144.resolve(e); };
_V145/*try catch*/(function(){_V84/*data*/ = _V136/*parContent*/["getData"]();
_V16/*moduleData*/ = _V147/*getModuleData*/(_V84/*data*/["hashStr"]);
_V148/*funEntry*/ = _V16/*moduleData*/["functions"][_V84/*data*/["nameStr"]];
var _V149 = new __Promise();
if(_V150/*promiseland*/["profileHas"](_V148/*funEntry*/["profile"])){
_V151/*funType*/ = _V148/*funEntry*/["funType"];
_V152/*resultTypes*/ = _V153/*getEffectiveFunctionResultType*/(_V151/*funType*/);
_V154/*isVar*/ = true;
if(! _V2/*classSystem*/["isVar"](_V152/*resultTypes*/["promiseResolveType"])){
_V154/*isVar*/ = false;;
};
;
_V155/*funResult*/ = _V148/*funEntry*/["fun"]["apply"](_V47/*undefined*/, _V84/*data*/["args"]);
if(_V152/*resultTypes*/["isTemporary"]){
_V112/*track*/ = _V155/*funResult*/[1];;
_V155/*funResult*/ = _V155/*funResult*/[0];;
};
;
_V156/*answer*/ = _V136/*parContent*/["createAnswer"]();
var _V157 = new __Promise();
var _V158 = new __Promise();
var _V159/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V158.resolve(e); }; }; };
var _V160 = function(e){ _V158.resolve(e); };
_V159/*try catch*/(function(){_V155/*funResult*/.then(_V159/*try catch*/(function(_V162){_V156/*answer*/["setData"]({"data": _V161/*getInstanceTransportData*/(_V152/*resultTypes*/["promiseResolveType"], _V162, _V156/*answer*/)});;
_V157.resolve();
}), _V160);
;})();
_V158.then(_V145/*try catch*/(function(_V23/*e*/){_V50/*console*/["log"]("answer error");;
_V50/*console*/["log"](_V23/*e*/);;
_V156/*answer*/["setData"]({"err": _V23/*e*/});;
_V157.resolve();;
}));
_V157.then(_V145/*try catch*/(function(){;
;
_V112/*track*/();;
_V156/*answer*/["send"]();;
_V139.resolve(); return;;
_V149.resolve();;
}), _V146)
}else{
_V149.resolve();}; _V149.then(function(){;
;
_V143.resolve();
});})();
_V144.then(_V140(function(_V23/*e*/){_V142/*err*/ = _V23/*e*/;;
_V50/*console*/["log"]("remoteexec error");;
_V50/*console*/["log"](_V23/*e*/);;
_V112/*track*/();;
_V143.resolve();;
}));
_V143.then(_V140(function(){;
;
_V156/*answer*/ = _V136/*parContent*/["createAnswer"]();
_V50/*console*/["log"]("answer error 2");;
_V50/*console*/["log"](_V23/*e*/);;
_V156/*answer*/["setData"]({"err": (_V23/*e*/ || _V163/*errorMsg*/["canNotExecute"])});;
_V156/*answer*/["send"]();;
_V139.resolve(); return;;
_V139.resolve(); return;;
}), _V141)})();
return _V139;
});;
_V161/*getInstanceTransportData*/ = (function(_V98/*parType*/, _V20/*parData*/, _V136/*parContent*/){
var _V131/*instance*/;
var _V164/*getInstanceFun*/;
var _V166/*getTypeFun*/;
var _V137/*t*/;
var _V105/*internalId*/;
var _V109/*remoteId*/;
var _V168/*request*/;
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
_V131/*instance*/ = new _V5/*Instance*/(_V98/*parType*/, _V20/*parData*/);
try
{_V164/*getInstanceFun*/ = (function(_V98/*parType*/, _V165/*_parData*/){
;
return _V161/*getInstanceTransportData*/(_V98/*parType*/, _V165/*_parData*/, _V136/*parContent*/);;
;
});
_V166/*getTypeFun*/ = (function(_V98/*parType*/){
;
return _V167/*getTypeTransportData*/(_V98/*parType*/, _V136/*parContent*/);;
;
});
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V105/*internalId*/ = _V131/*instance*/["getInternalId"]();
_V109/*remoteId*/ = _V137/*t*/["getInstanceRemoteId"](_V131/*instance*/["realInstance"]);
_V168/*request*/ = _V136/*parContent*/["newRequest"]();
if((_V109/*remoteId*/ !== _V47/*undefined*/)){
_V168/*request*/["setData"]({"type": "instance",
"remoteId": _V109/*remoteId*/});;

}else{
_V168/*request*/["setData"]({"type": "addInstance",
"id": _V105/*internalId*/,
"data": _V2/*classSystem*/["getInstanceSyncData"](_V131/*instance*/, _V164/*getInstanceFun*/, _V166/*getTypeFun*/)});;
};
;
_V168/*request*/["send"]();;
(function(){
var _V169 = new __Promise();
var _V170 = function(code){ return function(res){ try{code(res);}catch(e){ _V169.reject(e); }; }; };
var _V171 = function(e){ _V169.reject(e); };
var _V156/*answer*/;
var _V177/*answerData*/;
_V170(function(){;
var _V172 = new __Promise();
var _V173 = new __Promise();
var _V174/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V173.resolve(e); }; }; };
var _V175 = function(e){ _V173.resolve(e); };
_V174/*try catch*/(function(){_V168/*request*/["answerPs"].then(_V174/*try catch*/(function(_V176){_V156/*answer*/ = _V176;
_V177/*answerData*/ = _V156/*answer*/["getData"]();
if((_V177/*answerData*/["id"] !== _V47/*undefined*/)){
_V137/*t*/["addInstance"](_V131/*instance*/, _V177/*answerData*/["id"], (_V131/*instance*/["isServe"]() ? _V131/*instance*/["getTrack"]() : _V47/*undefined*/));;
};
;
_V172.resolve();
}), _V175);
;})();
_V173.then(_V170(function(_V23/*e*/){_V172.resolve();;
}));
_V172.then(_V170(function(){;
;
_V50/*console*/["log"]("------calling track ------");;
_V131/*instance*/["track"]();;
_V169.resolve(); return;;
}), _V171)})();
return _V169;
})();;
_V89/*ret*/ = _V168/*request*/["getId"]();
}catch(_V23/*e*/){_V50/*console*/["log"]("getInstanceTransportData error");;
_V50/*console*/["log"](_V23/*e*/);;
_V131/*instance*/["track"]();;
throw _V23/*e*/;
};
;
return _V89/*ret*/;;
;
});
_V178/*getInstanceFromTransportData*/ = (function(_V20/*parData*/, _V136/*parContent*/){
var _V179 = new __Promise();
var _V180 = function(code){ return function(res){ try{code(res);}catch(e){ _V179.reject(e); }; }; };
var _V181 = function(e){ _V179.reject(e); };
var _V182/*remoteType*/;
var _V183/*remoteVar*/;
var _V184/*remoteInstance*/;
var _V185/*req*/;
_V180(function(){;
if((_V20/*parData*/ === _V47/*undefined*/)){
_V179.resolve(_V47/*undefined*/); return;;
};
;
_V182/*remoteType*/;
_V183/*remoteVar*/ = false;
_V184/*remoteInstance*/;
if((_V20/*parData*/["length"] === 1)){
_V179.resolve(new _V5/*Instance*/(_V2/*classSystem*/["getBuiltinType"]("var"), _V20/*parData*/[0])); return;;
};
;
_V185/*req*/ = _V136/*parContent*/["getRequest"](_V20/*parData*/);
_V185/*req*/["localPs"].then(_V180(function(_V186){_V179.resolve(_V186); return;;
_V179.resolve(); return;;
}), _V181);
;})();
return _V179;
});
_V187/*getInstanceFromSyncData*/ = (function(_V20/*parData*/, _V136/*parContent*/){
var _V188 = new __Promise();
var _V189 = function(code){ return function(res){ try{code(res);}catch(e){ _V188.reject(e); }; }; };
var _V190 = function(e){ _V188.reject(e); };
var _V191/*tempAr*/;
var _V192/*clearTempAr*/;
var _V137/*t*/;
var _V21/*i*/;
_V189(function(){;
_V191/*tempAr*/ = [];
_V192/*clearTempAr*/ = (function(){
var _V21/*i*/;
;
_V21/*i*/ = 1;
for(_V21/*i*/ = 1;(_V21/*i*/ < _V191/*tempAr*/["length"]);++_V21/*i*/){{try
{_V191/*tempAr*/[_V21/*i*/]["track"]();;
}catch(_V23/*e*/){};
;
}};
;
;
});
var _V193 = new __Promise();
var _V194 = new __Promise();
var _V195/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V194.resolve(e); }; }; };
var _V196 = function(e){ _V194.resolve(e); };
_V195/*try catch*/(function(){_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V197/*getTypeFromTransportData*/(_V20/*parData*/[0], _V136/*parContent*/).then(_V195/*try catch*/(function(_V198){_V191/*tempAr*/["push"](_V198);;
_V21/*i*/ = 1;
_V21/*i*/ = 1;
var _V200 = new __Promise();
var _V199 = function(){var _V201 = new __Promise();
if((_V21/*i*/ < _V20/*parData*/["length"])){_V178/*getInstanceFromTransportData*/(_V20/*parData*/[_V21/*i*/], _V136/*parContent*/).then(_V195/*try catch*/(function(_V202){_V191/*tempAr*/["push"](_V202);;
_V201.resolve(true); return _V201;
;
}), _V196);
;}else{_V201.resolve(false); return _V201;
};
_V201;
return _V201;
};
var _V203 = function(){_V199().then(function(contLoop){
if (contLoop){++_V21/*i*/;
_V203();}else{_V200.resolve();};
});
};
_V203();
_V200.then(function(){;
;
_V188.resolve(_V2/*classSystem*/["getInstanceFromSyncData"](_V191/*tempAr*/)); return;;
_V193.resolve();
});}), _V196);
;})();
_V194.then(_V189(function(_V23/*e*/){_V192/*clearTempAr*/();;
throw _V23/*e*/;
_V193.resolve();;
}));
_V193.then(_V189(function(){;
;
_V188.resolve(); return;;
}), _V190)})();
return _V188;
});
_V34/*handlers*/["addInstance"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V204 = new __Promise();
var _V205 = function(code){ return function(res){ try{code(res);}catch(e){ _V204.reject(e); }; }; };
var _V206 = function(e){ _V204.reject(e); };
var _V156/*answer*/;
var _V131/*instance*/;
var _V137/*t*/;
var _V84/*data*/;
var _V105/*internalId*/;
_V205(function(){;
_V156/*answer*/ = _V136/*parContent*/["createAnswer"]();
_V131/*instance*/;
var _V207 = new __Promise();
var _V208 = new __Promise();
var _V209/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V208.resolve(e); }; }; };
var _V210 = function(e){ _V208.resolve(e); };
_V209/*try catch*/(function(){_V137/*t*/ = _V74/*parPackage*/["getTransport"]();
_V84/*data*/ = _V136/*parContent*/["getData"]();
_V187/*getInstanceFromSyncData*/(_V84/*data*/["data"], _V136/*parContent*/).then(_V209/*try catch*/(function(_V211){_V131/*instance*/ = _V211;;
_V105/*internalId*/ = _V131/*instance*/["getInternalId"]();
_V137/*t*/["addInstance"](_V131/*instance*/, _V84/*data*/["id"]);;
_V156/*answer*/["setData"]({"id": _V105/*internalId*/});;
_V156/*answer*/["send"]();;
_V136/*parContent*/["localPs"]["resolve"](_V131/*instance*/);;
_V204.resolve(); return;;
_V207.resolve();
}), _V210);
;})();
_V208.then(_V205(function(_V23/*e*/){if(_V131/*instance*/){
_V131/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("answer error 3");;
_V50/*console*/["log"](_V23/*e*/);;
_V156/*answer*/["setData"]({"err": _V23/*e*/});;
_V156/*answer*/["send"]();;
_V136/*parContent*/["localPs"]["reject"](_V23/*e*/);;
throw _V23/*e*/;
_V207.resolve();;
}));
_V207.then(_V205(function(){;
;
_V204.resolve(); return;;
}), _V206)})();
return _V204;
});;
_V34/*handlers*/["instance"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V156/*answer*/;
var _V131/*instance*/;
var _V137/*t*/;
var _V84/*data*/;
var _V105/*internalId*/;
var _V138/*realInstance*/;
;
_V156/*answer*/ = _V136/*parContent*/["createAnswer"]();
_V131/*instance*/;
try
{_V137/*t*/ = _V74/*parPackage*/["getTransport"]();
_V84/*data*/ = _V136/*parContent*/["getData"]();
_V105/*internalId*/ = _V84/*data*/["remoteId"];
_V138/*realInstance*/ = _V3/*internalObjects*/[_V105/*internalId*/];
if(_V138/*realInstance*/){
_V131/*instance*/ = new _V5/*Instance*/(_V47/*undefined*/, _V138/*realInstance*/);;
_V156/*answer*/["setData"]({});;
_V156/*answer*/["send"]();;
_V136/*parContent*/["localPs"]["resolve"](_V131/*instance*/);;

}else{
throw _V163/*errorMsg*/["missingImplementation"];
};
;
}catch(_V23/*e*/){if(_V131/*instance*/){
_V131/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("answer error 4");;
_V50/*console*/["log"](_V23/*e*/);;
_V156/*answer*/["setData"]({"err": _V23/*e*/});;
_V156/*answer*/["send"]();;
_V136/*parContent*/["localPs"]["reject"](_V23/*e*/);;
throw _V23/*e*/;
};
;
;
});;
_V167/*getTypeTransportData*/ = (function(_V98/*parType*/, _V136/*parContent*/){
var _V137/*t*/;
var _V102/*typeIds*/;
var _V168/*request*/;
;
if(! _V2/*classSystem*/["isSyncedClass"](_V98/*parType*/)){
throw _V163/*errorMsg*/["noSyncableData"];
};
;
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V102/*typeIds*/ = _V137/*t*/["addType"](_V98/*parType*/);
if((_V102/*typeIds*/ && (_V102/*typeIds*/["remoteId"] !== _V47/*undefined*/))){
return _V102/*typeIds*/["remoteId"];;
};
;
_V168/*request*/ = _V136/*parContent*/["newRequest"]();
_V168/*request*/["setData"]({"type": "addType",
"syncId": _V2/*classSystem*/["getSyncId"](_V98/*parType*/),
"typeId": _V102/*typeIds*/["id"]});;
_V168/*request*/["send"]();;
(function(){
var _V212 = new __Promise();
var _V213 = function(code){ return function(res){ try{code(res);}catch(e){ _V212.reject(e); }; }; };
var _V214 = function(e){ _V212.reject(e); };
var _V156/*answer*/;
var _V84/*data*/;
_V213(function(){;
_V168/*request*/["answerPs"].then(_V213(function(_V215){_V156/*answer*/ = _V215;
_V84/*data*/ = _V156/*answer*/["getData"]();
if(! _V84/*data*/["err"]){
_V102/*typeIds*/["remoteId"] = _V84/*data*/["id"];;
};
;
_V212.resolve(); return;;
}), _V214);
;})();
return _V212;
})();;
return [_V168/*request*/["getId"]()];;
;
});
_V197/*getTypeFromTransportData*/ = (function(_V20/*parData*/, _V136/*parContent*/){
var _V216 = new __Promise();
var _V217 = function(code){ return function(res){ try{code(res);}catch(e){ _V216.reject(e); }; }; };
var _V218 = function(e){ _V216.reject(e); };
var _V137/*t*/;
var _V52/*type*/;
var _V185/*req*/;
_V217(function(){;
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
_V52/*type*/;
if((typeof _V20/*parData*/ === "number")){
_V52/*type*/ = _V137/*t*/["getTypeById"](_V20/*parData*/);;
_V216.resolve(_V52/*type*/); return;;
};
;
_V185/*req*/ = _V136/*parContent*/["getRequest"](_V20/*parData*/[0]);
_V185/*req*/["localPs"].then(_V217(function(_V219){_V216.resolve(_V219); return;;
_V216.resolve(); return;;
}), _V218);
;})();
return _V216;
});
_V220/*getRemoteType*/ = (function(_V20/*parData*/, _V136/*parContent*/){
var _V137/*t*/;
;
if((typeof _V20/*parData*/ == "number")){
_V137/*t*/ = _V136/*parContent*/["getTransport"]();
return _V137/*t*/["getRemoteType"](_V20/*parData*/);;
};
;
throw _V163/*errorMsg*/["invalidRemoteType"];
;
});
_V34/*handlers*/["addType"] = (function(_V136/*parContent*/, _V74/*parPackage*/){
var _V156/*answer*/;
var _V84/*data*/;
var _V52/*type*/;
var _V103/*typeIdInt*/;
var _V137/*t*/;
var _V102/*typeIds*/;
;
_V156/*answer*/ = _V136/*parContent*/["createAnswer"]();
_V84/*data*/ = _V136/*parContent*/["getData"]();
_V52/*type*/ = _V4/*getClassBySyncId*/(_V84/*data*/["syncId"]);
if(! _V52/*type*/){
_V136/*parContent*/["localPs"]["reject"](_V163/*errorMsg*/["remoteTypeNotAvailable"]);;
_V156/*answer*/["setData"]({"err": _V163/*errorMsg*/["remoteTypeNotAvailable"]});;
_V156/*answer*/["send"]();;
return;;
};
;
_V103/*typeIdInt*/ = _V84/*data*/["typeId"];
_V137/*t*/ = _V74/*parPackage*/["getTransport"]();
_V102/*typeIds*/ = _V137/*t*/["addType"](_V52/*type*/, _V103/*typeIdInt*/);
_V156/*answer*/["setData"]({"id": _V102/*typeIds*/["id"]});;
_V156/*answer*/["send"]();;
_V136/*parContent*/["localPs"]["resolve"](_V52/*type*/);;
;
});;
_V153/*getEffectiveFunctionResultType*/ = (function(_V221/*parFunType*/){
var _V222/*res*/;
var _V225/*resultType*/;
var _V226/*unTrackedType*/;
var _V227/*promiseConstructor*/;
var _V228/*promiseResolveType*/;
;
_V222/*res*/ = {"promiseResolveType": _V2/*classSystem*/["getBuiltinType"]("var"),
"isTemporary": false,
"originalResultType": _V2/*classSystem*/["getFunctionReturnType"](_V221/*parFunType*/),
"resolvePromise": (function(_V223/*parPromise*/, _V224/*parValue*/){
;
_V223/*parPromise*/["resolve"](_V224/*parValue*/);;
;
}),
"rejectPromise": (function(_V223/*parPromise*/, _V224/*parValue*/){
;
_V223/*parPromise*/["reject"](_V224/*parValue*/);;
;
})};
_V225/*resultType*/ = _V222/*res*/["originalResultType"];
_V222/*res*/["newPromise"] = (function(){
;
return new _V37/*Promise*/();;
;
});;
if(_V2/*classSystem*/["isTemporaryTrackedClass"](_V225/*resultType*/)){
_V222/*res*/["isTemporary"] = true;;
_V226/*unTrackedType*/ = _V2/*classSystem*/["getClassFromTemporaryTracked"](_V225/*resultType*/);
if(_V2/*classSystem*/["isPromiseOfClass"](_V226/*unTrackedType*/)){
_V227/*promiseConstructor*/ = _V2/*classSystem*/["getTypeConstructor"](_V226/*unTrackedType*/);
_V222/*res*/["newPromise"] = (function(){
;
return _V227/*promiseConstructor*/();;
;
});;
_V222/*res*/["resolvePromise"] = (function(_V223/*parPromise*/, _V224/*parValue*/){
;
_V223/*parPromise*/[0]["resolve"](_V224/*parValue*/);;
;
});;
_V222/*res*/["rejectPromise"] = (function(_V223/*parPromise*/, _V224/*parValue*/){
;
_V223/*parPromise*/[0]["reject"](_V224/*parValue*/);;
;
});;
_V228/*promiseResolveType*/ = _V2/*classSystem*/["getClassFromPromiseOf"](_V226/*unTrackedType*/);
_V222/*res*/["promiseResolveType"] = _V228/*promiseResolveType*/;;
};
;
};
;
return _V222/*res*/;;
;
});
_V229/*createRemoteExecRequest*/ = (function(_V130/*par*/){
var _V230 = new __Promise();
var _V231 = function(code){ return function(res){ try{code(res);}catch(e){ _V230.reject(e); }; }; };
var _V232 = function(e){ _V230.reject(e); };
var _V115/*connection*/;
var _V237/*args*/;
var _V21/*i*/;
var _V151/*funType*/;
var _V152/*resultTypes*/;
var _V168/*request*/;
var _V156/*answer*/;
var _V84/*data*/;
var _V131/*instance*/;
_V231(function(){;
var _V233 = new __Promise();
var _V234 = new __Promise();
var _V235/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V234.resolve(e); }; }; };
var _V236 = function(e){ _V234.resolve(e); };
_V235/*try catch*/(function(){_V115/*connection*/ = _V130/*par*/["connection"];
_V237/*args*/ = [];
if((_V130/*par*/["args"] && _V130/*par*/["args"]["length"])){
_V21/*i*/ = 0;
for(_V21/*i*/ = 0;(_V21/*i*/ < _V130/*par*/["args"]["length"]);++_V21/*i*/){{_V237/*args*/["push"](_V130/*par*/["args"][_V21/*i*/]);;
}};
;
};
;
_V151/*funType*/ = _V130/*par*/["funType"];
_V152/*resultTypes*/ = _V153/*getEffectiveFunctionResultType*/(_V151/*funType*/);
_V168/*request*/ = _V115/*connection*/["createRequest"]();
_V168/*request*/["setData"]({"type": "remoteexec",
"hashStr": _V130/*par*/["hashStr"],
"nameStr": _V130/*par*/["nameStr"],
"args": _V237/*args*/});;
_V168/*request*/["send"]();;
_V168/*request*/["answerPs"].then(_V235/*try catch*/(function(_V238){_V156/*answer*/ = _V238;
_V84/*data*/ = _V156/*answer*/["getData"]();
if(_V84/*data*/["err"]){
throw _V84/*data*/["err"];
};
;
_V178/*getInstanceFromTransportData*/(_V84/*data*/["data"], _V156/*answer*/).then(_V235/*try catch*/(function(_V239){_V131/*instance*/ = _V239;
if(! _V2/*classSystem*/["canSet"](_V152/*resultTypes*/["promiseResolveType"], _V131/*instance*/["realType"])){
throw _V163/*errorMsg*/["typeMissmatch"];
};
;
_V230.resolve(_V131/*instance*/["takeOver"]()); return;;
_V233.resolve();
}), _V236);
;}), _V236);
;})();
_V234.then(_V231(function(_V23/*e*/){if(_V131/*instance*/){
_V131/*instance*/["track"]();;
};
;
_V50/*console*/["log"]("createRemoteExecRequest error");;
_V50/*console*/["log"](_V23/*e*/);;
throw _V23/*e*/;
_V233.resolve();;
}));
_V233.then(_V231(function(){;
;
_V230.resolve(); return;;
}), _V232)})();
return _V230;
});
_V240/*findProfile*/ = (function(_V241/*profileNameStr*/){
;
return _V17/*profiles*/[_V241/*profileNameStr*/];;
;
});
_V147/*getModuleData*/ = (function(_V97/*parHash*/){
;
if(! _V16/*moduleData*/[_V97/*parHash*/]){
_V16/*moduleData*/[_V97/*parHash*/] = {"functions": {},
"classes": {}};;
};
;
return _V16/*moduleData*/[_V97/*parHash*/];;
;
});
_V150/*promiseland*/["ProfileBaseClass"] = _V26/*Profile*/;;
_V150/*promiseland*/["ConnectionBaseClass"] = _V28/*Connection*/;;
_V150/*promiseland*/["addProfile"] = (function(_V242/*parProfile*/){
;
if(! _V242/*parProfile*/){
return;;
};
;
if(_V17/*profiles*/[_V242/*parProfile*/["name"]()]){
throw {"code": 4,
"msg": "profile exists"};
};
;
_V17/*profiles*/[_V242/*parProfile*/["name"]()] = _V242/*parProfile*/;;
_V242/*parProfile*/["on"]("connection", (function(_V115/*connection*/){
;
_V114/*prepConnection*/(_V115/*connection*/, _V242/*parProfile*/);;
;
}));;
;
});;
_V150/*promiseland*/["profileHas"] = (function(_V241/*profileNameStr*/){
;
if((_V15/*config*/["profile"] === _V241/*profileNameStr*/)){
return true;;
};
;
return false;;
;
});;
_V150/*promiseland*/["registerRemote"] = (function(_V241/*profileNameStr*/, _V243/*hashStr*/, _V244/*nameStr*/, _V245/*fun*/, _V151/*funType*/){
var _V16/*moduleData*/;
var _V101/*entry*/;
;
_V16/*moduleData*/ = _V147/*getModuleData*/(_V243/*hashStr*/);
_V101/*entry*/ = {"profile": _V241/*profileNameStr*/,
"fun": _V245/*fun*/,
"funType": _V151/*funType*/};
_V16/*moduleData*/["functions"][_V244/*nameStr*/] = _V101/*entry*/;;
_V2/*classSystem*/["definitionPromise"](_V151/*funType*/)["then"]((function(_V246/*definedFunType*/){
;
_V101/*entry*/["funType"] = _V246/*definedFunType*/;;
;
}));;
;
});;
_V150/*promiseland*/["remoteExec"] = (function(_V243/*hashStr*/, _V244/*nameStr*/, _V237/*args*/){
var _V16/*moduleData*/;
var _V101/*entry*/;
var _V116/*profile*/;
var _V115/*connection*/;
var _V152/*resultTypes*/;
var _V247/*resultPromise*/;
;
_V16/*moduleData*/ = _V147/*getModuleData*/(_V243/*hashStr*/);
if((! _V16/*moduleData*/ || ! _V16/*moduleData*/["functions"][_V244/*nameStr*/])){
throw _V163/*errorMsg*/["missingRemoteFun"];
};
;
_V101/*entry*/ = _V16/*moduleData*/["functions"][_V244/*nameStr*/];
_V116/*profile*/ = _V240/*findProfile*/(_V101/*entry*/["profile"]);
if(! _V116/*profile*/){
throw _V163/*errorMsg*/["frameNotFound"];
};
;
_V115/*connection*/ = _V116/*profile*/["find"]();
if(! _V115/*connection*/){
throw {"code": 3,
"msg": "no connection available"};
};
;
_V152/*resultTypes*/ = _V153/*getEffectiveFunctionResultType*/(_V101/*entry*/["funType"]);
try
{_V247/*resultPromise*/ = _V152/*resultTypes*/["newPromise"]();
(function(){
var _V248 = new __Promise();
var _V249 = function(code){ return function(res){ try{code(res);}catch(e){ _V248.reject(e); }; }; };
var _V250 = function(e){ _V248.reject(e); };
var _V255/*tempRes*/;
var _V256/*realRes*/;
_V249(function(){;
var _V251 = new __Promise();
var _V252 = new __Promise();
var _V253/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V252.resolve(e); }; }; };
var _V254 = function(e){ _V252.resolve(e); };
_V253/*try catch*/(function(){_V255/*tempRes*/ = _V229/*createRemoteExecRequest*/({"connection": _V115/*connection*/,
"hashStr": _V243/*hashStr*/,
"nameStr": _V244/*nameStr*/,
"args": _V237/*args*/,
"funType": _V101/*entry*/["funType"]});
_V255/*tempRes*/.then(_V253/*try catch*/(function(_V257){_V256/*realRes*/ = _V257;
_V152/*resultTypes*/["resolvePromise"](_V247/*resultPromise*/, _V256/*realRes*/);;
_V251.resolve();
}), _V254);
;})();
_V252.then(_V249(function(_V23/*e*/){_V152/*resultTypes*/["rejectPromise"](_V247/*resultPromise*/, _V23/*e*/);;
_V251.resolve();;
}));
_V251.then(_V249(function(){;
;
_V248.resolve(); return;;
}), _V250)})();
return _V248;
})();;
}catch(_V23/*e*/){_V152/*resultTypes*/["rejectPromise"](_V247/*resultPromise*/, _V23/*e*/);;
};
;
return _V247/*resultPromise*/;;
;
});;
_V10/*extra*/["moduleSystemPs"]["resolve"]({"getModuleData": _V147/*getModuleData*/});;
_V163/*errorMsg*/ = {"missingRemoteFun": {"id": 801,
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