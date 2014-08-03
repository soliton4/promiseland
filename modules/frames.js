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
if (promiseland._hasModule({ hashStr: "38cc5a02a6c7ce2278faf5ac24702b6d" })){ return promiseland._getModule("38cc5a02a6c7ce2278faf5ac24702b6d"); };
var _V8/*extra*/;try{_V8/*extra*/ = extra;}catch(e){};
var _V28/*console*/;try{_V28/*console*/ = console;}catch(e){};
var _V32/*promiseland*/;try{_V32/*promiseland*/ = promiseland;}catch(e){};
var _V37/*Promise*/;try{_V37/*Promise*/ = Promise;}catch(e){};
var _V41/*undefined*/;try{_V41/*undefined*/ = undefined;}catch(e){};
var _V51/*e*/;try{_V51/*e*/ = e;}catch(e){};
var _V63/*JSON*/;try{_V63/*JSON*/ = JSON;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*classSystem*/;
var _V3/*internalObjects*/;
var _V11/*config*/;
var _V12/*moduleData*/;
var _V13/*profiles*/;
var _V14/*_emitFun*/;
var _V19/*_onFun*/;
var _V21/*Profile*/;
var _V23/*Connection*/;
var _V25/*remoteExecRequest*/;
var _V53/*maxId*/;
var _V54/*prepConnection*/;
var _V86/*createRemoteExecRequest*/;
var _V90/*findProfile*/;
var _V30/*getModuleData*/;
var _V43/*errorMsg*/;
;
;
_V2/*classSystem*/;
_V3/*internalObjects*/;
(function(){
var _V4 = new __Promise();
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V7 = function(e){ _V4.reject(e); };
_V6(function(){;
_V8/*extra*/["classSystemPs"].then(_V6(function(_V9){_V2/*classSystem*/ = _V9["classSystem"];;
_V8/*extra*/["classSystemPs"].then(_V6(function(_V10){_V3/*internalObjects*/ = _V10["internalObjects"];;
_V4.resolve(); return;;
}), _V7);
;}), _V7);
;})();
return _V4;
})();;
_V11/*config*/ = _V8/*extra*/["config"];
_V12/*moduleData*/ = {};
_V13/*profiles*/ = {};
_V14/*_emitFun*/ = (function(_V15/*parEventStr*/, _V16/*parData*/){
var _V17/*i*/;
var _V18/*l*/;
;
if(this["_on"][_V15/*parEventStr*/]){
_V17/*i*/ = 0;
_V18/*l*/ = this["_on"][_V15/*parEventStr*/]["length"];
for(_V17/*i*/;(_V17/*i*/ < _V18/*l*/);++_V17/*i*/){{try
{this["_on"][_V15/*parEventStr*/][_V17/*i*/](_V16/*parData*/);;
}catch(e){};
;
}};
;
};
;
;
});
_V19/*_onFun*/ = (function(_V15/*parEventStr*/, _V20/*parFun*/){
;
if(this["_on"][_V15/*parEventStr*/]){
this["_on"][_V15/*parEventStr*/]["push"](_V20/*parFun*/);;
};
;
;
});
_V21/*Profile*/ = (function(){
;
this["_on"] = {"connection": []};;
;
});
_V21/*Profile*/["prototype"] = {"name": (function(){
;
;
}),
"emit": _V14/*_emitFun*/,
"find": (function(_V22/*parId*/){
;
;
}),
"on": _V19/*_onFun*/};;
_V23/*Connection*/ = (function(){
;
this["_on"] = {"data": [],
"disconnect": []};;
;
});
_V23/*Connection*/["prototype"] = {"send": (function(_V24/*parStr*/){
;
;
}),
"emit": _V14/*_emitFun*/,
"on": _V19/*_onFun*/};;
_V25/*remoteExecRequest*/ = (function(_V26/*connection*/, _V27/*par*/){
var _V29/*data*/;
var _V12/*moduleData*/;
var _V31/*funEntry*/;
var _V33/*funType*/;
var _V34/*resultType*/;
var _V35/*isVar*/;
var _V36/*resultPs*/;
var _V38/*tempRejectFun*/;
var _V40/*funResult*/;
var _V44/*promiseResult*/;
var _V45/*promiseResultTrack*/;
var _V46/*promiseType*/;
var _V52/*rejectPs*/;
;
_V28/*console*/["log"]("remote");;
try
{_V29/*data*/ = _V27/*par*/["data"];
_V12/*moduleData*/ = _V30/*getModuleData*/(_V29/*data*/["hashStr"]);
_V31/*funEntry*/ = _V12/*moduleData*/["functions"][_V29/*data*/["nameStr"]];
if(_V32/*promiseland*/["profileHas"](_V31/*funEntry*/["profile"])){
_V33/*funType*/ = _V31/*funEntry*/["funType"];
_V34/*resultType*/ = _V2/*classSystem*/["getFunctionReturnType"](_V33/*funType*/);
_V35/*isVar*/ = true;
if(! _V2/*classSystem*/["isVar"](_V34/*resultType*/)){
_V35/*isVar*/ = false;;
};
;
_V36/*resultPs*/ = new _V37/*Promise*/();
_V38/*tempRejectFun*/ = (function(_V39/*reason*/){
;
_V36/*resultPs*/["reject"](_V39/*reason*/);;
;
});
_V40/*funResult*/ = _V31/*funEntry*/["fun"]["apply"](_V41/*undefined*/, _V29/*data*/["args"]);
if(_V35/*isVar*/){
_V28/*console*/["log"]("isvar true");;
_V40/*funResult*/["then"]((function(_V42/*parResult*/){
;
_V36/*resultPs*/["resolve"]({"isVar": true,
"data": _V42/*parResult*/});;
;
}), _V38/*tempRejectFun*/);;
return _V36/*resultPs*/;;
};
;
if(! _V2/*classSystem*/["isTemporaryTrackedClass"](_V34/*resultType*/)){
_V28/*console*/["log"]("not temp checked");;
_V36/*resultPs*/["reject"](_V43/*errorMsg*/["notASyncableResponse"]);;
return;;
};
;
_V44/*promiseResult*/ = _V40/*funResult*/[0];
_V45/*promiseResultTrack*/ = _V40/*funResult*/[1];
_V46/*promiseType*/ = _V2/*classSystem*/["getClassFromTemporaryTracked"](_V34/*resultType*/);
if(! _V2/*classSystem*/["isPromiseOfClass"](_V46/*promiseType*/)){
_V28/*console*/["log"]("not promise");;
_V36/*resultPs*/["reject"](_V43/*errorMsg*/["notASyncableResponse"]);;
_V45/*promiseResultTrack*/();;
return;;
};
;
_V28/*console*/["log"]("waiting for result");;
_V28/*console*/["log"](_V44/*promiseResult*/);;
_V44/*promiseResult*/["then"]((function(_V42/*parResult*/){
var _V47/*realResult*/;
var _V48/*trackResult*/;
var _V49/*internalId*/;
var _V50/*syncRequestData*/;
;
_V28/*console*/["log"]("we got a result");;
_V45/*promiseResultTrack*/();;
_V47/*realResult*/ = _V42/*parResult*/[0];
_V48/*trackResult*/ = _V42/*parResult*/[1];
if(! _V47/*realResult*/){
_V48/*trackResult*/();;
_V36/*resultPs*/["resolve"]();;
return;;
};
;
_V49/*internalId*/ = _V2/*classSystem*/["getInternalId"](_V47/*realResult*/);
if(_V26/*connection*/["hasObject"](_V49/*internalId*/)){
_V36/*resultPs*/["resolve"]({"id": _V26/*connection*/["getTransferId"](_V49/*internalId*/)});;
_V48/*trackResult*/();;
return;;
};
;
_V28/*console*/["log"]("generating syncRequestData");;
_V50/*syncRequestData*/ = _V2/*classSystem*/["getSyncRequestData"](_V47/*realResult*/, _V26/*connection*/);
_V28/*console*/["log"](_V50/*syncRequestData*/);;
_V36/*resultPs*/["resolve"](_V50/*syncRequestData*/);;
_V48/*trackResult*/();;
;
}), (function(_V39/*reason*/){
;
_V28/*console*/["log"]("we got a rejection");;
_V28/*console*/["log"](_V39/*reason*/);;
_V36/*resultPs*/["reject"](_V39/*reason*/);;
_V45/*promiseResultTrack*/();;
;
}));;
return _V36/*resultPs*/;;
};
;
}catch(e){_V28/*console*/["log"]("error");;
_V28/*console*/["log"](_V51/*e*/);;
_V52/*rejectPs*/ = new _V37/*Promise*/();
_V52/*rejectPs*/["reject"](_V51/*e*/);;
return _V52/*rejectPs*/;;
};
;
_V52/*rejectPs*/ = new _V37/*Promise*/();
_V52/*rejectPs*/["reject"](_V43/*errorMsg*/["frameNotAvailable"]);;
return _V52/*rejectPs*/;;
;
});
_V53/*maxId*/ = 10000000;
_V54/*prepConnection*/ = (function(_V26/*connection*/, _V55/*profile*/){
var _V56/*buffer*/;
var _V57/*expectid*/;
var _V58/*nextId*/;
var _V59/*requests*/;
var _V60/*profilenameStr*/;
var _V61/*sendData*/;
var _V64/*internalObjectMap*/;
var _V65/*transferIdMap*/;
var _V66/*nextTranseferId*/;
var _V75/*rejectFun*/;
var _V77/*resolveFun*/;
var _V78/*respondError*/;
var _V80/*queue*/;
;
_V56/*buffer*/ = {};
_V57/*expectid*/ = 1;
_V58/*nextId*/ = 1;
_V59/*requests*/ = {};
_V60/*profilenameStr*/ = ("" + _V55/*profile*/["name"]());
_V61/*sendData*/ = (function(_V29/*data*/){
var _V62/*id*/;
;
_V62/*id*/ = _V58/*nextId*/;
_V58/*nextId*/++;;
if((_V58/*nextId*/ > _V53/*maxId*/)){
_V58/*nextId*/ = 1;;
};
;
_V29/*data*/["id"] = _V62/*id*/;;
_V26/*connection*/["send"](_V63/*JSON*/["stringify"](_V29/*data*/));;
return _V62/*id*/;;
;
});
_V64/*internalObjectMap*/ = {};
_V65/*transferIdMap*/ = {};
_V66/*nextTranseferId*/ = 1;
_V26/*connection*/["hasObject"] = (function(_V22/*parId*/){
;
if(! _V3/*internalObjects*/[_V22/*parId*/]){
return false;;
};
;
if(_V64/*internalObjectMap*/[_V22/*parId*/]){
return true;;
};
;
return false;;
;
});;
_V26/*connection*/["getTransferId"] = (function(_V22/*parId*/){
;
return _V64/*internalObjectMap*/[_V22/*parId*/]["transferId"];;
;
});;
_V26/*connection*/["newTransferId"] = (function(_V22/*parId*/, _V67/*parTrack*/, _V68/*transferId*/){
var _V69/*syncData*/;
var _V70/*entry*/;
;
if(_V64/*internalObjectMap*/[_V22/*parId*/]){
if(_V67/*parTrack*/){
_V67/*parTrack*/();;
};
;
return _V64/*internalObjectMap*/[_V22/*parId*/]["transferId"];;
};
;
_V69/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V3/*internalObjects*/[_V22/*parId*/]);
_V69/*syncData*/["connections"]["push"](_V26/*connection*/);;
if(! _V68/*transferId*/){
_V68/*transferId*/ = (_V60/*profilenameStr*/ + _V66/*nextTranseferId*/++);;
};
;
_V70/*entry*/ = {"transferId": _V68/*transferId*/,
"internalId": _V22/*parId*/,
"track": _V67/*parTrack*/};
_V64/*internalObjectMap*/[_V22/*parId*/] = _V70/*entry*/;;
_V65/*transferIdMap*/[_V70/*entry*/["transferId"]] = _V70/*entry*/;;
return _V70/*entry*/["transferId"];;
;
});;
_V26/*connection*/["removeSynced"] = (function(_V22/*parId*/){
var _V70/*entry*/;
var _V68/*transferId*/;
var _V69/*syncData*/;
var _V17/*i*/;
var _V71/*newConAr*/;
var _V72/*c*/;
;
if(! _V64/*internalObjectMap*/[_V22/*parId*/]){
return;;
};
;
_V70/*entry*/ = _V64/*internalObjectMap*/[_V22/*parId*/];
_V68/*transferId*/ = _V70/*entry*/["transferId"];
_V64/*internalObjectMap*/[_V70/*entry*/["internalId"]] = _V41/*undefined*/;;
_V65/*transferIdMap*/[_V70/*entry*/["transferId"]] = _V41/*undefined*/;;
if(_V70/*entry*/["track"]){
_V70/*entry*/["track"]();;
};
;
_V26/*connection*/["createMsg"]({"type": "unsync",
"transferId": _V68/*transferId*/});;
_V69/*syncData*/ = _V2/*classSystem*/["getSyncData"](_V64/*internalObjectMap*/[_V22/*parId*/]);
_V17/*i*/ = 0;
_V71/*newConAr*/ = [];
for(_V17/*i*/ = 0;(_V17/*i*/ < _V69/*syncData*/["connections"]["length"]);++_V17/*i*/){{_V72/*c*/ = _V69/*syncData*/["connections"][_V17/*i*/];
if((_V72/*c*/ !== _V26/*connection*/)){
_V71/*newConAr*/["push"](_V72/*c*/);;
};
;
}};
;
_V69/*syncData*/["connections"] = _V71/*newConAr*/;;
;
});;
_V26/*connection*/["unsync"] = (function(_V73/*parTransferId*/){
var _V70/*entry*/;
;
_V70/*entry*/ = _V65/*transferIdMap*/[_V73/*parTransferId*/];
_V64/*internalObjectMap*/[_V70/*entry*/["internalId"]] = _V41/*undefined*/;;
_V65/*transferIdMap*/[_V70/*entry*/["transferId"]] = _V41/*undefined*/;;
if(_V70/*entry*/["track"]){
_V70/*entry*/["track"]();;
};
;
;
});;
_V26/*connection*/["syncValue"] = (function(_V27/*par*/){
;
_V26/*connection*/["createMsg"]({"type": "syncValue",
"transferId": _V27/*par*/["transferId"],
"memberIdx": _V27/*par*/["memberIdx"],
"value": _V27/*par*/["value"]});;
;
});;
_V26/*connection*/["recieveSyncValue"] = (function(_V27/*par*/){
var _V70/*entry*/;
var _V74/*instance*/;
;
_V70/*entry*/ = _V65/*transferIdMap*/[_V27/*par*/["transferId"]];
_V74/*instance*/ = _V3/*internalObjects*/[_V70/*entry*/["internalId"]];
if(! _V74/*instance*/){
return;;
};
;
_V74/*instance*/[_V27/*par*/["memberIdx"]] = _V27/*par*/["value"];;
;
});;
_V75/*rejectFun*/ = (function(_V22/*parId*/){
;
return (function(_V76/*parReason*/){
;
_V61/*sendData*/({"response": _V22/*parId*/,
"reject": true,
"data": _V76/*parReason*/});;
;
});;
;
});
_V77/*resolveFun*/ = (function(_V22/*parId*/){
;
return (function(_V42/*parResult*/){
;
_V61/*sendData*/({"response": _V22/*parId*/,
"resolve": true,
"data": _V42/*parResult*/});;
;
});;
;
});
_V78/*respondError*/ = (function(_V22/*parId*/, _V79/*parError*/){
;
return _V75/*rejectFun*/(_V22/*parId*/)(_V79/*parError*/);;
;
});
_V80/*queue*/ = (function(_V27/*par*/){
var _V81/*p*/;
var _V82/*ps*/;
var _V83/*b*/;
;
if((_V27/*par*/["id"] == _V57/*expectid*/)){
++_V57/*expectid*/;;
if((_V57/*expectid*/ > _V53/*maxId*/)){
_V57/*expectid*/ = 1;;
};
;
if(_V27/*par*/["request"]){
if((_V27/*par*/["data"] && (_V27/*par*/["data"]["type"] == "remoteexec"))){
_V81/*p*/ = _V25/*remoteExecRequest*/(_V26/*connection*/, _V27/*par*/);
_V81/*p*/["then"](_V77/*resolveFun*/(_V27/*par*/["id"]), _V75/*rejectFun*/(_V27/*par*/["id"]));;

}else{
_V78/*respondError*/(_V27/*par*/["id"], {"msg": "unknownRequest"});;
};
;

}else{
if(_V27/*par*/["msg"]){
if((_V27/*par*/["data"] && (_V27/*par*/["data"]["type"] == "unsync"))){
_V26/*connection*/["unsync"](_V27/*par*/["data"]["transferId"]);;
};
;
if((_V27/*par*/["data"] && (_V27/*par*/["data"]["type"] == "syncValue"))){
_V26/*connection*/["recieveSyncValue"](_V27/*par*/["data"]);;
};
;

}else{
if((_V27/*par*/["response"] !== _V41/*undefined*/)){
_V82/*ps*/ = _V59/*requests*/[_V27/*par*/["response"]];
if(_V82/*ps*/){
delete _V59/*requests*/[_V27/*par*/["response"]];;
if(_V27/*par*/["resolve"]){
_V82/*ps*/["resolve"](_V27/*par*/["data"]);;

}else{
_V82/*ps*/["reject"](_V27/*par*/["data"]);;
};
;
};
;
};
};
};
;

}else{
_V56/*buffer*/[_V27/*par*/["id"]] = _V27/*par*/;;
};
;
_V83/*b*/ = _V56/*buffer*/[_V57/*expectid*/];
if(_V83/*b*/){
delete _V56/*buffer*/[_V57/*expectid*/];;
_V80/*queue*/(_V83/*b*/);;
};
;
;
});
_V26/*connection*/["on"]("data", (function(_V84/*dataStr*/){
var _V85/*obj*/;
;
_V85/*obj*/ = _V63/*JSON*/["parse"](_V84/*dataStr*/);
_V80/*queue*/(_V85/*obj*/);;
;
}));;
_V26/*connection*/["on"]("disconnect", (function(_V84/*dataStr*/){
var _V51/*e*/;
var _V70/*entry*/;
;
_V51/*e*/;
for(_V51/*e*/ in _V64/*internalObjectMap*/){_V70/*entry*/ = _V64/*internalObjectMap*/[_V51/*e*/];
if(_V70/*entry*/["track"]){
_V70/*entry*/["track"]();;
};
;
};
;
_V64/*internalObjectMap*/ = {};;
_V65/*transferIdMap*/ = {};;
;
}));;
_V26/*connection*/["createRequest"] = (function(_V29/*data*/){
var _V82/*ps*/;
var _V62/*id*/;
;
_V82/*ps*/ = new _V37/*Promise*/();
_V62/*id*/ = _V61/*sendData*/({"request": true,
"data": _V29/*data*/});
_V59/*requests*/[_V62/*id*/] = _V82/*ps*/;;
return _V82/*ps*/["promise"];;
;
});;
_V26/*connection*/["createMsg"] = (function(_V29/*data*/){
var _V62/*id*/;
;
_V62/*id*/ = _V61/*sendData*/({"msg": true,
"data": _V29/*data*/});
return;;
;
});;
;
});
_V86/*createRemoteExecRequest*/ = (function(_V27/*par*/){
var _V26/*connection*/;
var _V87/*args*/;
var _V17/*i*/;
var _V33/*funType*/;
var _V34/*resultType*/;
var _V35/*isVar*/;
var _V82/*ps*/;
;
_V26/*connection*/ = _V27/*par*/["connection"];
_V87/*args*/ = [];
if((_V27/*par*/["args"] && _V27/*par*/["args"]["length"])){
_V17/*i*/ = 0;
for(_V17/*i*/ = 0;(_V17/*i*/ < _V27/*par*/["args"]["length"]);++_V17/*i*/){{_V87/*args*/["push"](_V27/*par*/["args"][_V17/*i*/]);;
}};
;
};
;
_V33/*funType*/ = _V27/*par*/["funType"];
_V34/*resultType*/ = _V2/*classSystem*/["getFunctionReturnType"](_V33/*funType*/);
_V35/*isVar*/ = true;
if(! _V2/*classSystem*/["isVar"](_V34/*resultType*/)){
_V35/*isVar*/ = false;;
};
;
_V82/*ps*/ = _V26/*connection*/["createRequest"]({"type": "remoteexec",
"hashStr": _V27/*par*/["hashStr"],
"nameStr": _V27/*par*/["nameStr"],
"args": _V87/*args*/});
_V82/*ps*/["then"]((function(_V88/*res*/){
var _V46/*promiseType*/;
var _V85/*obj*/;
;
if((_V35/*isVar*/ && _V88/*res*/["isVar"])){
_V27/*par*/["promise"]["resolve"](_V88/*res*/["data"]);;
};
;
if((_V35/*isVar*/ || _V88/*res*/["isVar"])){
_V27/*par*/["promise"]["reject"](_V43/*errorMsg*/["typeMissmatch"]);;
};
;
if(! _V2/*classSystem*/["isTemporaryTrackedClass"](_V34/*resultType*/)){
_V27/*par*/["promise"]["reject"](_V43/*errorMsg*/["notASyncableResponse"]);;
return;;
};
;
_V46/*promiseType*/ = _V2/*classSystem*/["getClassFromTemporaryTracked"](_V34/*resultType*/);
if(! _V2/*classSystem*/["isPromiseOfClass"](_V46/*promiseType*/)){
_V27/*par*/["promise"]["reject"](_V43/*errorMsg*/["notASyncableResponse"]);;
return;;
};
;
if(! _V88/*res*/){
_V27/*par*/["promise"]["resolve"]();;
return;;
};
;
if(_V88/*res*/["id"]){
_V26/*connection*/["getObjectByTransferId"](_V88/*res*/["id"])["then"]((function(_V89/*parObj*/){
;
_V27/*par*/["promise"]["resolve"](_V89/*parObj*/);;
;
}), (function(_V39/*reason*/){
;
_V27/*par*/["promise"]["reject"](_V39/*reason*/);;
;
}));;
return;;
};
;
_V85/*obj*/ = _V2/*classSystem*/["getObjFromSyncData"](_V88/*res*/, _V26/*connection*/);
_V27/*par*/["promise"]["resolve"](_V85/*obj*/);;
if(_V85/*obj*/){
_V85/*obj*/[1]();;
};
;
;
}), (function(_V88/*res*/){
;
_V27/*par*/["promise"]["reject"](_V88/*res*/);;
;
}));;
;
});
_V90/*findProfile*/ = (function(_V91/*profileNameStr*/){
;
return _V13/*profiles*/[_V91/*profileNameStr*/];;
;
});
_V30/*getModuleData*/ = (function(_V92/*parHash*/){
;
if(! _V12/*moduleData*/[_V92/*parHash*/]){
_V12/*moduleData*/[_V92/*parHash*/] = {"functions": {},
"classes": {}};;
};
;
return _V12/*moduleData*/[_V92/*parHash*/];;
;
});
_V32/*promiseland*/["ProfileBaseClass"] = _V21/*Profile*/;;
_V32/*promiseland*/["ConnectionBaseClass"] = _V23/*Connection*/;;
_V32/*promiseland*/["addProfile"] = (function(_V93/*parProfile*/){
;
if(! _V93/*parProfile*/){
return;;
};
;
if(_V13/*profiles*/[_V93/*parProfile*/["name"]()]){
throw {"code": 4,
"msg": "profile exists"};
};
;
_V13/*profiles*/[_V93/*parProfile*/["name"]()] = _V93/*parProfile*/;;
_V93/*parProfile*/["on"]("connection", (function(_V26/*connection*/){
;
_V54/*prepConnection*/(_V26/*connection*/, _V93/*parProfile*/);;
;
}));;
;
});;
_V32/*promiseland*/["profileHas"] = (function(_V91/*profileNameStr*/){
;
if((_V11/*config*/["profile"] === _V91/*profileNameStr*/)){
return true;;
};
;
return false;;
;
});;
_V32/*promiseland*/["registerRemote"] = (function(_V91/*profileNameStr*/, _V94/*hashStr*/, _V95/*nameStr*/, _V96/*fun*/, _V33/*funType*/){
var _V12/*moduleData*/;
var _V70/*entry*/;
;
_V12/*moduleData*/ = _V30/*getModuleData*/(_V94/*hashStr*/);
_V70/*entry*/ = {"profile": _V91/*profileNameStr*/,
"fun": _V96/*fun*/,
"funType": _V33/*funType*/};
_V12/*moduleData*/["functions"][_V95/*nameStr*/] = _V70/*entry*/;;
_V2/*classSystem*/["definitionPromise"](_V33/*funType*/)["then"]((function(_V97/*definedFunType*/){
;
_V70/*entry*/["funType"] = _V97/*definedFunType*/;;
;
}));;
;
});;
_V32/*promiseland*/["remoteExec"] = (function(_V94/*hashStr*/, _V95/*nameStr*/, _V87/*args*/, _V98/*parPromise*/){
var _V99/*promise*/;
var _V100/*ret*/;
var _V12/*moduleData*/;
var _V70/*entry*/;
var _V55/*profile*/;
var _V26/*connection*/;
;
_V99/*promise*/ = _V98/*parPromise*/;
_V100/*ret*/ = _V99/*promise*/["promise"];
_V12/*moduleData*/ = _V30/*getModuleData*/(_V94/*hashStr*/);
if((! _V12/*moduleData*/ || ! _V12/*moduleData*/["functions"][_V95/*nameStr*/])){
_V99/*promise*/["reject"](_V43/*errorMsg*/["missingRemoteFun"]);;
return _V100/*ret*/;;
};
;
_V70/*entry*/ = _V12/*moduleData*/["functions"][_V95/*nameStr*/];
_V55/*profile*/ = _V90/*findProfile*/(_V70/*entry*/["profile"]);
if(! _V55/*profile*/){
_V99/*promise*/["reject"](_V43/*errorMsg*/["frameNotFound"]);;
return _V100/*ret*/;;
};
;
_V26/*connection*/ = _V55/*profile*/["find"]();
if(! _V26/*connection*/){
_V99/*promise*/["reject"]({"code": 3,
"msg": "no connection available"});;
return _V100/*ret*/;;
};
;
_V86/*createRemoteExecRequest*/({"connection": _V26/*connection*/,
"hashStr": _V94/*hashStr*/,
"nameStr": _V95/*nameStr*/,
"args": _V87/*args*/,
"promise": _V99/*promise*/,
"funType": _V70/*entry*/["funType"]});;
return _V99/*promise*/["promise"];;
;
});;
_V8/*extra*/["moduleSystemPs"]["resolve"]({"getModuleData": _V30/*getModuleData*/});;
_V43/*errorMsg*/ = {"missingRemoteFun": {"id": 801,
"msg": "remote function not registred"},
"frameNotAvailable": {"id": 802,
"msg": "requested frame not available"},
"frameNotFound": {"id": 803,
"msg": "requested frame not found"}};
return;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();