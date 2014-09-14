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
if (promiseland._hasModule({ hashStr: "630efb7fd3a347ec044a809f6943641f" })){ return promiseland._getModule("630efb7fd3a347ec044a809f6943641f"); };
var PL$11/*extra*/;try{PL$11/*extra*/ = extra;}catch(e){};
var PL$40/*Promise*/;try{PL$40/*Promise*/ = Promise;}catch(e){};
var PL$52/*console*/;try{PL$52/*console*/ = console;}catch(e){};
var PL$98/*JSON*/;try{PL$98/*JSON*/ = JSON;}catch(e){};
var PL$142/*promiseland*/;try{PL$142/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*classSystem*/;
var PL$3/*internalObjects*/;
var PL$4/*getClassBySyncId*/;
var PL$5/*DynInstance*/;
var PL$6/*getEffectiveFunctionResultType*/;
var PL$17/*config*/;
var PL$18/*errorMsg*/;
var PL$19/*moduleData*/;
var PL$20/*profiles*/;
var PL$21/*_emitFun*/;
var PL$27/*_onFun*/;
var PL$29/*Profile*/;
var PL$31/*Connection*/;
var PL$33/*maxId*/;
var PL$34/*MAKRO_REQUEST*/;
var PL$35/*MAKRO_MESSAGE*/;
var PL$36/*MAKRO_ANSWER*/;
var PL$37/*handlers*/;
var PL$41/*ContentBase*/;
var PL$44/*Request*/;
var PL$46/*Answer*/;
var PL$48/*Message*/;
var PL$64/*Package*/;
var PL$65/*waitForTheSend*/;
var PL$116/*Transport*/;
var PL$117/*prepConnection*/;
var PL$158/*getInstanceTransportData*/;
var PL$150/*getInstanceFromTransportData*/;
var PL$182/*getInstanceFromSyncData*/;
var PL$163/*getTypeTransportData*/;
var PL$192/*getTypeFromTransportData*/;
var PL$216/*getRemoteType*/;
var PL$217/*createRemoteExecRequest*/;
var PL$228/*findProfile*/;
var PL$139/*getModuleData*/;
;
;
PL$2/*classSystem*/;
PL$3/*internalObjects*/;
PL$4/*getClassBySyncId*/;
PL$5/*DynInstance*/;
PL$6/*getEffectiveFunctionResultType*/;
(function(){
var PL$7 = new __Promise();
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.reject(e); }; }; };
var PL$10 = function(e){ PL$7.reject(e); };
PL$9(function(){;
PL$11/*extra*/["classSystemPs"].then(PL$9(function(PL$12){PL$2/*classSystem*/ = PL$12["classSystem"];;
PL$11/*extra*/["classSystemPs"].then(PL$9(function(PL$13){PL$3/*internalObjects*/ = PL$13["internalObjects"];;
PL$11/*extra*/["classSystemPs"].then(PL$9(function(PL$14){PL$4/*getClassBySyncId*/ = PL$14["getClassBySyncId"];;
PL$11/*extra*/["classSystemPs"].then(PL$9(function(PL$15){PL$5/*DynInstance*/ = PL$15["DynInstance"];;
PL$11/*extra*/["classSystemPs"].then(PL$9(function(PL$16){PL$6/*getEffectiveFunctionResultType*/ = PL$16["getEffectiveFunctionResultType"];;
PL$7.resolve(); return;;
}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;})();
return PL$7;
})();;
PL$17/*config*/ = PL$11/*extra*/["config"];
PL$18/*errorMsg*/ = PL$11/*extra*/["errorMsg"];
PL$19/*moduleData*/ = {};
PL$20/*profiles*/ = {};
PL$21/*_emitFun*/ = (function(PL$22/*parEventStr*/, PL$23/*parData*/){
var PL$24/*i*/;
var PL$25/*l*/;
;
if(this["_on"][PL$22/*parEventStr*/]){
PL$24/*i*/ = 0;
PL$25/*l*/ = this["_on"][PL$22/*parEventStr*/]["length"];
for(PL$24/*i*/;(PL$24/*i*/ < PL$25/*l*/);++PL$24/*i*/){{try
{this["_on"][PL$22/*parEventStr*/][PL$24/*i*/](PL$23/*parData*/);;
}catch(PL$26/*e*/){};
;
}};
;
};
;
;
});
PL$27/*_onFun*/ = (function(PL$22/*parEventStr*/, PL$28/*parFun*/){
;
if(this["_on"][PL$22/*parEventStr*/]){
this["_on"][PL$22/*parEventStr*/]["push"](PL$28/*parFun*/);;
};
;
;
});
PL$29/*Profile*/ = (function(){
;
this["_on"] = {"connection": []};;
;
});
PL$29/*Profile*/["prototype"] = {"name": (function(){
;
;
}),
"emit": PL$21/*_emitFun*/,
"find": (function(PL$30/*parId*/){
;
;
}),
"on": PL$27/*_onFun*/};;
PL$31/*Connection*/ = (function(){
;
this["_on"] = {"data": [],
"disconnect": []};;
;
});
PL$31/*Connection*/["prototype"] = {"send": (function(PL$32/*parStr*/){
;
;
}),
"emit": PL$21/*_emitFun*/,
"on": PL$27/*_onFun*/};;
PL$33/*maxId*/ = 10000000;
PL$34/*MAKRO_REQUEST*/ = 1;
PL$35/*MAKRO_MESSAGE*/ = 2;
PL$36/*MAKRO_ANSWER*/ = 3;
PL$37/*handlers*/ = {};
PL$41/*ContentBase*/ = (function(){var PL$38/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
;
this["parent"] = PL$39/*parParent*/;;
this["sendPs"] = new PL$40/*Promise*/();;
this["dataAr"] = (PL$23/*parData*/ || []);;
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
"setData": (function(PL$23/*parData*/){
;
this["dataAr"][1] = PL$23/*parData*/;;
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
"getRequest": (function(PL$30/*parId*/){
;
return this["parent"]["getRequest"](PL$30/*parId*/);;
;
})}, [], PL$38/*inherited*/);
return res; })();PL$41/*ContentBase*/;;
PL$44/*Request*/ = (function(){var PL$42/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
;
this["dataAr"][0] = PL$34/*MAKRO_REQUEST*/;;
this["answerPs"] = new PL$40/*Promise*/();;
this["localPs"] = new PL$40/*Promise*/();;
;
}),
"setId": (function(PL$30/*parId*/){
;
this["dataAr"][2] = PL$30/*parId*/;;
;
}),
"getId": (function(){
;
return this["dataAr"][2];;
;
}),
"createAnswer": (function(){
var PL$43/*a*/;
;
PL$43/*a*/ = this["parent"]["_createAnswer"]();
PL$43/*a*/["setId"](this["getId"]());;
return PL$43/*a*/;;
;
})}, [PL$41/*ContentBase*/], PL$42/*inherited*/);
return res; })();PL$44/*Request*/;;
PL$46/*Answer*/ = (function(){var PL$45/*inherited*/ = {};
var res = promiseland.createClass({"isAnswer": true,
"constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
;
this["dataAr"][0] = PL$36/*MAKRO_ANSWER*/;;
;
}),
"setId": (function(PL$30/*parId*/){
;
this["dataAr"][2] = PL$30/*parId*/;;
;
}),
"getId": (function(){
;
return this["dataAr"][2];;
;
})}, [PL$41/*ContentBase*/], PL$45/*inherited*/);
return res; })();PL$46/*Answer*/;;
PL$48/*Message*/ = (function(){var PL$47/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
;
this["dataAr"][0] = PL$35/*MAKRO_MESSAGE*/;;
this["localPs"] = new PL$40/*Promise*/();;
;
})}, [PL$41/*ContentBase*/], PL$47/*inherited*/);
return res; })();PL$48/*Message*/;;
PL$64/*Package*/ = (function(){var PL$49/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
var PL$24/*i*/;
var PL$50/*d*/;
var PL$51/*r*/;
;
this["parent"] = PL$39/*parParent*/;;
this["requests"] = {};;
this["dataAr"] = [undefined];;
this["content"] = [];;
if(PL$23/*parData*/){
try
{this["answers"] = [];;
PL$24/*i*/;
for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$23/*parData*/["length"]);++PL$24/*i*/){{PL$50/*d*/ = PL$23/*parData*/[PL$24/*i*/];
switch (PL$50/*d*/[0]){
case PL$34/*MAKRO_REQUEST*/:
PL$51/*r*/ = this["newRequest"](PL$50/*d*/);
this["requests"][PL$51/*r*/["getId"]()] = PL$51/*r*/;;
break;;
case PL$35/*MAKRO_MESSAGE*/:
this["newMessage"](PL$50/*d*/);;
break;;
case PL$36/*MAKRO_ANSWER*/:
this["newAnswer"](PL$50/*d*/);;
break;;
default:
PL$39/*parParent*/["error"]();;
}
;
;
}};
;
}catch(PL$26/*e*/){PL$52/*console*/["log"]("package error");;
PL$52/*console*/["log"](PL$26/*e*/);;
};
this["dataAr"] = PL$23/*parData*/;;

}else{
this["sendPs"] = new PL$40/*Promise*/();;
};
;
;
}),
"getRequest": (function(PL$30/*parId*/){
;
return this["requests"][PL$30/*parId*/];;
;
}),
"handle": (function(){
var PL$24/*i*/;
var PL$53/*c*/;
var PL$54/*type*/;
;
try
{PL$24/*i*/ = 0;
while((PL$24/*i*/ < this["content"]["length"])){
{PL$53/*c*/ = this["content"][PL$24/*i*/];
if(PL$53/*c*/["isAnswer"]){
this["parent"]["handleAnswer"](PL$53/*c*/, this);;

}else{
PL$54/*type*/ = PL$53/*c*/["getType"]();
if(PL$37/*handlers*/[PL$54/*type*/]){
PL$37/*handlers*/[PL$54/*type*/](PL$53/*c*/, this);;

}else{
this["parent"]["error"]();;
};
;
};
;
++PL$24/*i*/;;
}};
;
}catch(PL$26/*e*/){PL$52/*console*/["log"]("handle error");;
PL$52/*console*/["log"](PL$26/*e*/);;
};
;
;
}),
"getTransport": (function(){
;
return this["parent"];;
;
}),
"newRequest": (function(PL$23/*parData*/){
var PL$51/*r*/;
;
PL$51/*r*/ = this["parent"]["_newRequest"](this, PL$23/*parData*/);
this["requests"][PL$51/*r*/["id"]] = PL$51/*r*/;;
this["dataAr"]["push"](PL$51/*r*/["dataAr"]);;
this["content"]["push"](PL$51/*r*/);;
return PL$51/*r*/;;
;
}),
"newMessage": (function(PL$23/*parData*/){
var PL$51/*r*/;
;
PL$51/*r*/ = this["parent"]["_newMessage"](this, PL$23/*parData*/);
this["dataAr"]["push"](PL$51/*r*/["dataAr"]);;
this["content"]["push"](PL$51/*r*/);;
return PL$51/*r*/;;
;
}),
"_createAnswer": (function(PL$23/*parData*/){
;
return this["parent"]["newAnswer"](PL$23/*parData*/);;
;
}),
"newAnswer": (function(PL$23/*parData*/){
var PL$51/*r*/;
;
PL$51/*r*/ = this["parent"]["_newAnswer"](this, PL$23/*parData*/);
this["dataAr"]["push"](PL$51/*r*/["dataAr"]);;
this["content"]["push"](PL$51/*r*/);;
return PL$51/*r*/;;
;
}),
"send": (function(){
var PL$55 = new __Promise();
var PL$56 = function(code){ return function(res){ try{code(res);}catch(e){ PL$55.reject(e); }; }; };
var PL$57 = function(e){ PL$55.reject(e); };
var PL$24/*i*/;
var PL$58/*this*/ = this;
PL$56(function(){;
PL$24/*i*/ = 0;
var PL$60 = new __Promise();
var PL$59 = function(){var PL$61 = new __Promise();
if((PL$24/*i*/ < PL$58/*this*/["content"]["length"])){PL$58/*this*/["content"][PL$24/*i*/]["sendPs"].then(PL$56(function(PL$62){PL$62;;
++PL$24/*i*/;;
PL$61.resolve(true); return PL$61;
;
}), PL$57);
;}else{PL$61.resolve(false); return PL$61;
};
PL$61;
return PL$61;
};
var PL$63 = function(){PL$59().then(function(contLoop){
if (contLoop){PL$63();}else{PL$60.resolve();};
});
};
PL$63();
PL$60.then(function(){;
;
PL$58/*this*/["sendPs"]["resolve"]();;
PL$55.resolve(); return;;
});})();
return PL$55;
})}, [], PL$49/*inherited*/);
return res; })();PL$64/*Package*/;;
PL$65/*waitForTheSend*/ = (function(PL$66/*content*/, PL$67/*package*/){
var PL$68 = new __Promise();
var PL$69 = function(code){ return function(res){ try{code(res);}catch(e){ PL$68.reject(e); }; }; };
var PL$70 = function(e){ PL$68.reject(e); };
PL$69(function(){;
PL$66/*content*/["sendPs"].then(PL$69(function(PL$71){PL$71;;
PL$67/*package*/["send"]();;
PL$68.resolve(); return;;
}), PL$70);
;})();
return PL$68;
});
PL$116/*Transport*/ = (function(){var PL$72/*inherited*/ = {};
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
"queue": (function(PL$23/*parData*/){
var PL$73/*id*/;
;
PL$73/*id*/ = PL$23/*parData*/[0];
this["_expectPs"](PL$73/*id*/)["resolve"](PL$23/*parData*/);;
;
}),
"_expectPs": (function(PL$30/*parId*/){
var PL$74/*ps*/;
;
PL$74/*ps*/ = this["expect"][PL$30/*parId*/];
if(! PL$74/*ps*/){
PL$74/*ps*/ = new PL$40/*Promise*/();;
this["expect"][PL$30/*parId*/] = PL$74/*ps*/;;
};
;
return PL$74/*ps*/;;
;
}),
"handleAnswer": (function(PL$75/*parAnswer*/, PL$76/*parPackage*/){
var PL$73/*id*/;
var PL$51/*r*/;
;
PL$73/*id*/ = PL$75/*parAnswer*/["getId"]();
PL$51/*r*/ = this["requests"][PL$73/*id*/];
if(! PL$51/*r*/){
this["error"]();;
return;;
};
;
this["requests"][PL$73/*id*/] = undefined;;
if((PL$73/*id*/ < this["nextFreeRequest"])){
this["nextFreeRequest"] = PL$73/*id*/;;

}else{
if(((PL$73/*id*/ + 1) == this["requests"]["length"])){
this["requests"]["pop"]();;
};
};
;
PL$51/*r*/["answerPs"]["resolve"](PL$75/*parAnswer*/);;
;
}),
"workLoop": (function(){
var PL$77 = new __Promise();
var PL$78 = function(code){ return function(res){ try{code(res);}catch(e){ PL$77.reject(e); }; }; };
var PL$79 = function(e){ PL$77.reject(e); };
var PL$24/*i*/;
var PL$86/*data*/;
var PL$67/*package*/;
var PL$87/*this*/ = this;
PL$78(function(){;
PL$24/*i*/;
var PL$81 = new __Promise();
var PL$80 = function(){var PL$82 = new __Promise();
if(true){PL$24/*i*/ = 1;
var PL$84 = new __Promise();
var PL$83 = function(){var PL$85 = new __Promise();
if((PL$24/*i*/ < PL$33/*maxId*/)){PL$87/*this*/["_expectPs"](PL$24/*i*/).then(PL$78(function(PL$88){PL$86/*data*/ = PL$88;
PL$67/*package*/ = new PL$64/*Package*/(PL$87/*this*/, PL$86/*data*/);
PL$67/*package*/["handle"]();;
PL$85.resolve(true); return PL$85;
;
}), PL$79);
;}else{PL$85.resolve(false); return PL$85;
};
PL$85;
return PL$85;
};
var PL$89 = function(){PL$83().then(function(contLoop){
if (contLoop){++PL$24/*i*/;
PL$89();}else{PL$84.resolve();};
});
};
PL$89();
PL$84.then(function(){;
;
PL$82.resolve(true); return PL$82;
;
});}else{PL$82.resolve(false); return PL$82;
};
PL$82;
return PL$82;
};
var PL$90 = function(){PL$80().then(function(contLoop){
if (contLoop){PL$90();}else{PL$81.resolve();};
});
};
PL$90();
PL$81.then(function(){;
;
PL$77.resolve(); return;;
});})();
return PL$77;
}),
"nextId": (function(){
var PL$91/*ret*/;
;
PL$91/*ret*/ = this["_nextId"];
this["_nextId"] += 1;;
if(! (this["_nextId"] < PL$33/*maxId*/)){
this["_nextId"] = 1;;
};
;
return PL$91/*ret*/;;
;
}),
"_newRequest": (function(PL$39/*parParent*/, PL$23/*parData*/){
var PL$51/*r*/;
var PL$73/*id*/;
;
PL$51/*r*/ = new PL$44/*Request*/(PL$39/*parParent*/, PL$23/*parData*/);
if(! PL$23/*parData*/){
PL$73/*id*/ = this["nextFreeRequest"];
while(this["requests"][PL$73/*id*/]){
{++PL$73/*id*/;;
}};
;
this["nextFreeRequest"] = (PL$73/*id*/ + 1);;
this["requests"][PL$73/*id*/] = PL$51/*r*/;;
PL$51/*r*/["setId"](PL$73/*id*/);;
};
;
return PL$51/*r*/;;
;
}),
"_newMessage": (function(PL$39/*parParent*/, PL$23/*parData*/){
var PL$51/*r*/;
;
PL$51/*r*/ = new PL$48/*Message*/(PL$39/*parParent*/, PL$23/*parData*/);
return PL$51/*r*/;;
;
}),
"_newAnswer": (function(PL$39/*parParent*/, PL$23/*parData*/){
var PL$51/*r*/;
;
PL$51/*r*/ = new PL$46/*Answer*/(PL$39/*parParent*/, PL$23/*parData*/);
return PL$51/*r*/;;
;
}),
"newRequest": (function(){
var PL$92/*p*/;
var PL$51/*r*/;
;
PL$92/*p*/ = this["newPackage"]();
PL$51/*r*/ = PL$92/*p*/["newRequest"]();
PL$65/*waitForTheSend*/(PL$51/*r*/, PL$92/*p*/);;
return PL$51/*r*/;;
;
}),
"newMessage": (function(){
var PL$92/*p*/;
var PL$51/*r*/;
;
PL$92/*p*/ = this["newPackage"]();
PL$51/*r*/ = PL$92/*p*/["newMessage"]();
PL$65/*waitForTheSend*/(PL$51/*r*/, PL$92/*p*/);;
return PL$51/*r*/;;
;
}),
"newAnswer": (function(){
var PL$92/*p*/;
var PL$51/*r*/;
;
PL$92/*p*/ = this["newPackage"]();
PL$51/*r*/ = PL$92/*p*/["newAnswer"]();
PL$65/*waitForTheSend*/(PL$51/*r*/, PL$92/*p*/);;
return PL$51/*r*/;;
;
}),
"newPackage": (function(){
var PL$92/*p*/;
var PL$93/*self*/;
;
PL$92/*p*/ = new PL$64/*Package*/(this);
PL$93/*self*/ = this;
(function(){
var PL$94 = new __Promise();
var PL$95 = function(code){ return function(res){ try{code(res);}catch(e){ PL$94.reject(e); }; }; };
var PL$96 = function(e){ PL$94.reject(e); };
PL$95(function(){;
PL$92/*p*/["sendPs"].then(PL$95(function(PL$97){PL$97;;
PL$92/*p*/["dataAr"][0] = PL$93/*self*/["nextId"]();;
PL$93/*self*/["sendString"](PL$98/*JSON*/["stringify"](PL$92/*p*/["dataAr"]));;
PL$94.resolve(); return;;
}), PL$96);
;})();
return PL$94;
})();;
return PL$92/*p*/;;
;
}),
"stringData": (function(PL$32/*parStr*/){
var PL$86/*data*/;
;
PL$86/*data*/ = PL$98/*JSON*/["parse"](PL$32/*parStr*/);
this["queue"](PL$86/*data*/);;
;
}),
"sendString": (function(PL$32/*parStr*/){
;
;
}),
"_getModuleData": (function(PL$99/*parHash*/){
var PL$19/*moduleData*/;
;
PL$19/*moduleData*/ = this["moduleData"][PL$99/*parHash*/];
if(! PL$19/*moduleData*/){
PL$19/*moduleData*/ = {};;
this["moduleData"][PL$99/*parHash*/] = PL$19/*moduleData*/;;
};
;
return PL$19/*moduleData*/;;
;
}),
"addType": (function(PL$100/*parType*/, PL$101/*parRemoteTypeId*/){
var PL$102/*syncId*/;
var PL$19/*moduleData*/;
var PL$103/*entry*/;
var PL$104/*typeIds*/;
var PL$105/*typeIdInt*/;
;
PL$102/*syncId*/ = PL$2/*classSystem*/["getSyncId"](PL$100/*parType*/);
PL$19/*moduleData*/ = this["_getModuleData"](PL$102/*syncId*/["hash"]);
PL$103/*entry*/ = PL$19/*moduleData*/[PL$102/*syncId*/["name"]];
PL$104/*typeIds*/;
if(PL$103/*entry*/){
PL$104/*typeIds*/ = PL$103/*entry*/["typeIds"];;
if((PL$101/*parRemoteTypeId*/ !== undefined)){
PL$104/*typeIds*/["remoteId"] = PL$101/*parRemoteTypeId*/;;
this["remoteTypes"][PL$101/*parRemoteTypeId*/] = PL$100/*parType*/;;
};
;
return PL$104/*typeIds*/;;
};
;
PL$105/*typeIdInt*/ = this["types"]["length"];
this["types"]["push"](PL$100/*parType*/);;
PL$103/*entry*/ = {"typeIds": {"id": PL$105/*typeIdInt*/,
"remoteId": PL$101/*parRemoteTypeId*/},
"type": PL$100/*parType*/};
PL$19/*moduleData*/[PL$102/*syncId*/["name"]] = PL$103/*entry*/;;
if((PL$101/*parRemoteTypeId*/ !== undefined)){
this["remoteTypes"][PL$101/*parRemoteTypeId*/] = PL$100/*parType*/;;
};
;
return PL$103/*entry*/["typeIds"];;
;
}),
"getTypeByRemoteId": (function(PL$101/*parRemoteTypeId*/){
;
return this["remoteTypes"][PL$101/*parRemoteTypeId*/];;
;
}),
"getTypeById": (function(PL$106/*parTypeId*/){
;
return this["types"][PL$106/*parTypeId*/];;
;
}),
"getInstanceRemoteId": (function(PL$23/*parData*/){
var PL$107/*internalId*/;
;
PL$107/*internalId*/ = PL$2/*classSystem*/["getInternalId"](PL$23/*parData*/);
return this["instances"][PL$107/*internalId*/];;
;
}),
"addInstance": (function(PL$108/*parDynInstance*/, PL$109/*parRemoteId*/, PL$110/*parTrack*/){
var PL$107/*internalId*/;
var PL$111/*remoteId*/;
;
PL$107/*internalId*/ = PL$108/*parDynInstance*/["getInternalId"]();
PL$111/*remoteId*/ = this["instances"][PL$107/*internalId*/];
if((PL$111/*remoteId*/ === undefined)){
PL$2/*classSystem*/["addTransport"](PL$108/*parDynInstance*/, this);;
this["instances"][PL$107/*internalId*/] = PL$109/*parRemoteId*/;;
};
;
if(PL$110/*parTrack*/){
if(this["instanceTracks"][PL$107/*internalId*/]){
PL$110/*parTrack*/();;

}else{
this["instanceTracks"][PL$107/*internalId*/] = PL$110/*parTrack*/;;
};
};
;
;
}),
"removeInstance": (function(PL$112/*parInternalId*/, PL$113/*dontSend*/){
var PL$111/*remoteId*/;
var PL$114/*m*/;
var PL$115/*track*/;
;
PL$111/*remoteId*/ = this["instances"][PL$112/*parInternalId*/];
if(((PL$111/*remoteId*/ !== undefined) && ! PL$113/*dontSend*/)){
PL$114/*m*/ = this["newMessage"]();
PL$114/*m*/["setData"]({"type": "remove",
"remoteId": PL$111/*remoteId*/});;
PL$114/*m*/["send"]();;
};
;
delete this["instances"][PL$112/*parInternalId*/];;
PL$2/*classSystem*/["removeTransport"](PL$112/*parInternalId*/, this);;
if(this["instanceTracks"][PL$112/*parInternalId*/]){
PL$115/*track*/ = this["instanceTracks"][PL$112/*parInternalId*/];
delete this["instanceTracks"][PL$112/*parInternalId*/];;
PL$115/*track*/();;
};
;
;
})}, [], PL$72/*inherited*/);
return res; })();PL$116/*Transport*/;;
PL$117/*prepConnection*/ = (function(PL$118/*connection*/, PL$119/*profile*/){
var PL$120/*transport*/;
;
PL$120/*transport*/ = new PL$116/*Transport*/();
PL$120/*transport*/["sendString"] = (function(PL$121/*s*/){
;
PL$118/*connection*/["send"](PL$121/*s*/);;
;
});;
PL$118/*connection*/["on"]("data", (function(PL$122/*dataStr*/){
;
PL$120/*transport*/["stringData"](PL$122/*dataStr*/);;
;
}));;
PL$118/*connection*/["on"]("disconnect", (function(PL$122/*dataStr*/){
;
;
}));;
PL$118/*connection*/["createRequest"] = (function(PL$86/*data*/){
;
return PL$120/*transport*/["newRequest"]();;
;
});;
PL$118/*connection*/["createMsg"] = (function(PL$86/*data*/){
var PL$123/*msg*/;
;
PL$123/*msg*/ = PL$120/*transport*/["newMessage"]();
PL$123/*msg*/["setData"](PL$86/*data*/);;
PL$123/*msg*/["send"]();;
;
});;
;
});
PL$37/*handlers*/["remove"] = (function(PL$124/*parContent*/, PL$76/*parPackage*/){
var PL$86/*data*/;
var PL$125/*t*/;
;
try
{PL$86/*data*/ = PL$124/*parContent*/["getData"]();
PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
PL$125/*t*/["removeInstance"](PL$86/*data*/["remoteId"], true);;
}catch(PL$26/*e*/){PL$52/*console*/["log"]("sync error");;
PL$52/*console*/["log"](PL$26/*e*/);;
};
;
;
});;
PL$37/*handlers*/["remoteexec"] = (function(PL$124/*parContent*/, PL$76/*parPackage*/){
var PL$126 = new __Promise();
var PL$127 = function(code){ return function(res){ try{code(res);}catch(e){ PL$126.reject(e); }; }; };
var PL$128 = function(e){ PL$126.reject(e); };
var PL$115/*track*/;
var PL$129/*err*/;
var PL$130/*args*/;
var PL$131/*realArgs*/;
var PL$132/*cleanUpArgs*/;
var PL$133/*clearExtraTracks*/;
var PL$24/*i*/;
var PL$134/*answer*/;
var PL$86/*data*/;
var PL$19/*moduleData*/;
var PL$140/*funEntry*/;
var PL$143/*funType*/;
var PL$144/*resultTypes*/;
var PL$145/*isVar*/;
var PL$149/*instance*/;
var PL$153/*funResult*/;
PL$127(function(){;
PL$115/*track*/ = (function(){
;
;
});
PL$129/*err*/;
PL$130/*args*/ = [];
PL$131/*realArgs*/ = [];
PL$132/*cleanUpArgs*/ = (function(){
var PL$24/*i*/;
;
PL$24/*i*/;
for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$130/*args*/["length"]);++PL$24/*i*/){{try
{PL$130/*args*/[PL$24/*i*/]["track"]();;
}catch(PL$26/*e*/){};
;
}};
;
;
});
PL$133/*clearExtraTracks*/ = (function(){
var PL$24/*i*/;
;
PL$24/*i*/;
for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$130/*args*/["length"]);++PL$24/*i*/){{try
{PL$130/*args*/[PL$24/*i*/]["clearExtraTracks"]();;
}catch(PL$26/*e*/){};
;
}};
;
;
});
PL$24/*i*/;
PL$134/*answer*/ = PL$124/*parContent*/["createAnswer"]();
var PL$135 = new __Promise();
var PL$136 = new __Promise();
var PL$137/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$136.resolve(e); }; }; };
var PL$138 = function(e){ PL$136.resolve(e); };
PL$137/*try catch*/(function(){PL$86/*data*/ = PL$124/*parContent*/["getData"]();
PL$19/*moduleData*/ = PL$139/*getModuleData*/(PL$86/*data*/["hashStr"]);
PL$140/*funEntry*/ = PL$19/*moduleData*/["functions"][PL$86/*data*/["nameStr"]];
var PL$141 = new __Promise();
if(PL$142/*promiseland*/["profileHas"](PL$140/*funEntry*/["profile"])){
PL$143/*funType*/ = PL$140/*funEntry*/["funType"];
PL$144/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$143/*funType*/);
PL$145/*isVar*/ = true;
if(! PL$2/*classSystem*/["isVar"](PL$144/*resultTypes*/["promiseResolveType"])){
PL$145/*isVar*/ = false;;
};
;
PL$24/*i*/ = 0;
var PL$147 = new __Promise();
var PL$146 = function(){var PL$148 = new __Promise();
if((PL$24/*i*/ < PL$86/*data*/["args"]["length"])){PL$150/*getInstanceFromTransportData*/(PL$86/*data*/["args"][PL$24/*i*/], PL$124/*parContent*/).then(PL$137/*try catch*/(function(PL$151){PL$149/*instance*/ = PL$151;
PL$130/*args*/["push"](PL$149/*instance*/);;
PL$148.resolve(true); return PL$148;
;
}), PL$138);
;}else{PL$148.resolve(false); return PL$148;
};
PL$148;
return PL$148;
};
var PL$152 = function(){PL$146().then(function(contLoop){
if (contLoop){++PL$24/*i*/;
PL$152();}else{PL$147.resolve();};
});
};
PL$152();
PL$147.then(function(){;
;
for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$130/*args*/["length"]);++PL$24/*i*/){{PL$131/*realArgs*/["push"](PL$130/*args*/[PL$24/*i*/]["getInstanceAsType"](PL$2/*classSystem*/["getFunctionArgumentType"](PL$143/*funType*/, PL$24/*i*/)));;
}};
;
PL$132/*cleanUpArgs*/();;
PL$153/*funResult*/ = PL$140/*funEntry*/["fun"]["apply"](undefined, PL$131/*realArgs*/);
if(PL$144/*resultTypes*/["isTemporary"]){
PL$115/*track*/ = PL$153/*funResult*/[1];;
PL$153/*funResult*/ = PL$153/*funResult*/[0];;
};
;
var PL$154 = new __Promise();
var PL$155 = new __Promise();
var PL$156/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$155.resolve(e); }; }; };
var PL$157 = function(e){ PL$155.resolve(e); };
PL$156/*try catch*/(function(){PL$153/*funResult*/.then(PL$156/*try catch*/(function(PL$159){PL$134/*answer*/["setData"]({"data": PL$158/*getInstanceTransportData*/(PL$144/*resultTypes*/["promiseResolveType"], PL$159, PL$134/*answer*/)});;
PL$154.resolve();
}), PL$157);
;})();
PL$155.then(PL$137/*try catch*/(function(PL$26/*e*/){PL$52/*console*/["log"]("answer error");;
PL$52/*console*/["log"](PL$26/*e*/);;
PL$134/*answer*/["setData"]({"err": PL$26/*e*/});;
PL$154.resolve();;
}));
PL$154.then(PL$137/*try catch*/(function(){;
;
PL$52/*console*/["log"]("send answer:");;
PL$52/*console*/["log"](PL$134/*answer*/["getData"]());;
PL$134/*answer*/["send"]();;
PL$115/*track*/();;
PL$126.resolve(); return;;
PL$141.resolve();;
}), PL$138)});
}else{
PL$141.resolve();}; PL$141.then(function(){;
;
PL$135.resolve();
});})();
PL$136.then(PL$127(function(PL$26/*e*/){PL$129/*err*/ = PL$26/*e*/;;
PL$52/*console*/["log"]("remoteexec error");;
PL$52/*console*/["log"](PL$26/*e*/);;
PL$132/*cleanUpArgs*/();;
PL$133/*clearExtraTracks*/();;
PL$135.resolve();;
}));
PL$135.then(PL$127(function(){;
;
PL$134/*answer*/["setData"]({"err": (PL$129/*err*/ || PL$18/*errorMsg*/["canNotExecute"])});;
PL$134/*answer*/["send"]();;
PL$52/*console*/["log"]("error answer send");;
PL$115/*track*/();;
PL$132/*cleanUpArgs*/();;
PL$52/*console*/["log"]("remote exec fail end");;
PL$126.resolve(); return;;
PL$126.resolve(); return;;
}), PL$128)})();
return PL$126;
});;
PL$158/*getInstanceTransportData*/ = (function(PL$100/*parType*/, PL$23/*parData*/, PL$124/*parContent*/){
var PL$149/*instance*/;
var PL$160/*getInstanceFun*/;
var PL$162/*getTypeFun*/;
var PL$125/*t*/;
var PL$107/*internalId*/;
var PL$111/*remoteId*/;
var PL$164/*request*/;
var PL$91/*ret*/;
;
if((PL$23/*parData*/ === undefined)){
return undefined;;
};
;
if(PL$2/*classSystem*/["isVar"](PL$100/*parType*/)){
return [PL$23/*parData*/];;
};
;
PL$149/*instance*/ = new PL$5/*DynInstance*/(PL$100/*parType*/, PL$23/*parData*/);
try
{PL$160/*getInstanceFun*/ = (function(PL$100/*parType*/, PL$161/*_parData*/){
;
return PL$158/*getInstanceTransportData*/(PL$100/*parType*/, PL$161/*_parData*/, PL$124/*parContent*/);;
;
});
PL$162/*getTypeFun*/ = (function(PL$100/*parType*/){
;
return PL$163/*getTypeTransportData*/(PL$100/*parType*/, PL$124/*parContent*/);;
;
});
PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
PL$107/*internalId*/ = PL$149/*instance*/["getInternalId"]();
PL$111/*remoteId*/ = PL$125/*t*/["getInstanceRemoteId"](PL$149/*instance*/["instance"]);
PL$164/*request*/ = PL$124/*parContent*/["newRequest"]();
if((PL$111/*remoteId*/ !== undefined)){
PL$164/*request*/["setData"]({"type": "instance",
"remoteId": PL$111/*remoteId*/});;

}else{
PL$164/*request*/["setData"]({"type": "addInstance",
"id": PL$107/*internalId*/,
"data": PL$2/*classSystem*/["getInstanceSyncData"](PL$149/*instance*/, PL$160/*getInstanceFun*/, PL$162/*getTypeFun*/)});;
};
;
PL$164/*request*/["send"]();;
(function(){
var PL$165 = new __Promise();
var PL$166 = function(code){ return function(res){ try{code(res);}catch(e){ PL$165.reject(e); }; }; };
var PL$167 = function(e){ PL$165.reject(e); };
var PL$134/*answer*/;
var PL$173/*answerData*/;
PL$166(function(){;
var PL$168 = new __Promise();
var PL$169 = new __Promise();
var PL$170/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$169.resolve(e); }; }; };
var PL$171 = function(e){ PL$169.resolve(e); };
PL$170/*try catch*/(function(){PL$164/*request*/["answerPs"].then(PL$170/*try catch*/(function(PL$172){PL$134/*answer*/ = PL$172;
PL$173/*answerData*/ = PL$134/*answer*/["getData"]();
if((PL$173/*answerData*/["id"] !== undefined)){
PL$125/*t*/["addInstance"](PL$149/*instance*/, PL$173/*answerData*/["id"], (PL$149/*instance*/["isServe"]() ? PL$149/*instance*/["getTrack"]() : undefined));;
};
;
PL$168.resolve();
}), PL$171);
;})();
PL$169.then(PL$166(function(PL$26/*e*/){PL$168.resolve();;
}));
PL$168.then(PL$166(function(){;
;
PL$149/*instance*/["track"]();;
PL$165.resolve(); return;;
}), PL$167)})();
return PL$165;
})();;
PL$91/*ret*/ = PL$164/*request*/["getId"]();
}catch(PL$26/*e*/){PL$52/*console*/["log"]("getInstanceTransportData error");;
PL$52/*console*/["log"](PL$26/*e*/);;
if(PL$149/*instance*/){
PL$149/*instance*/["track"]();;
};
;
throw {"position": "getInstanceTransportData",
"error": PL$26/*e*/};
};
;
return PL$91/*ret*/;;
;
});
PL$150/*getInstanceFromTransportData*/ = (function(PL$23/*parData*/, PL$124/*parContent*/){
var PL$174 = new __Promise();
var PL$175 = function(code){ return function(res){ try{code(res);}catch(e){ PL$174.reject(e); }; }; };
var PL$176 = function(e){ PL$174.reject(e); };
var PL$177/*remoteType*/;
var PL$178/*remoteVar*/;
var PL$179/*remoteInstance*/;
var PL$180/*req*/;
PL$175(function(){;
if(((PL$23/*parData*/ === undefined) || (PL$23/*parData*/ === null))){
PL$174.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), undefined)); return;;
;
};
;
PL$177/*remoteType*/;
PL$178/*remoteVar*/ = false;
PL$179/*remoteInstance*/;
if((PL$23/*parData*/["length"] === 1)){
PL$174.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), PL$23/*parData*/[0])); return;;
};
;
PL$180/*req*/ = PL$124/*parContent*/["getRequest"](PL$23/*parData*/);
PL$180/*req*/["localPs"].then(PL$175(function(PL$181){PL$174.resolve(PL$181); return;;
PL$174.resolve(); return;;
}), PL$176);
;})();
return PL$174;
});
PL$182/*getInstanceFromSyncData*/ = (function(PL$23/*parData*/, PL$124/*parContent*/){
var PL$183 = new __Promise();
var PL$184 = function(code){ return function(res){ try{code(res);}catch(e){ PL$183.reject(e); }; }; };
var PL$185 = function(e){ PL$183.reject(e); };
var PL$186/*tempAr*/;
var PL$187/*clearTempAr*/;
var PL$125/*t*/;
var PL$24/*i*/;
var PL$91/*ret*/;
PL$184(function(){;
PL$186/*tempAr*/ = [];
PL$187/*clearTempAr*/ = (function(){
var PL$24/*i*/;
;
PL$24/*i*/ = 1;
for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$186/*tempAr*/["length"]);++PL$24/*i*/){{try
{PL$186/*tempAr*/[PL$24/*i*/]["track"]();;
}catch(PL$26/*e*/){};
;
}};
;
;
});
var PL$188 = new __Promise();
var PL$189 = new __Promise();
var PL$190/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$189.resolve(e); }; }; };
var PL$191 = function(e){ PL$189.resolve(e); };
PL$190/*try catch*/(function(){PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
PL$192/*getTypeFromTransportData*/(PL$23/*parData*/[0], PL$124/*parContent*/).then(PL$190/*try catch*/(function(PL$193){PL$186/*tempAr*/["push"](PL$193);;
PL$24/*i*/ = 1;
PL$24/*i*/ = 1;
var PL$195 = new __Promise();
var PL$194 = function(){var PL$196 = new __Promise();
if((PL$24/*i*/ < PL$23/*parData*/["length"])){PL$150/*getInstanceFromTransportData*/(PL$23/*parData*/[PL$24/*i*/], PL$124/*parContent*/).then(PL$190/*try catch*/(function(PL$197){PL$186/*tempAr*/["push"](PL$197);;
PL$196.resolve(true); return PL$196;
;
}), PL$191);
;}else{PL$196.resolve(false); return PL$196;
};
PL$196;
return PL$196;
};
var PL$198 = function(){PL$194().then(function(contLoop){
if (contLoop){++PL$24/*i*/;
PL$198();}else{PL$195.resolve();};
});
};
PL$198();
PL$195.then(function(){;
;
PL$91/*ret*/ = PL$2/*classSystem*/["getInstanceFromSyncData"](PL$186/*tempAr*/);
PL$188.resolve();
});}), PL$191);
;})();
PL$189.then(PL$184(function(PL$26/*e*/){PL$187/*clearTempAr*/();;
throw PL$26/*e*/;
PL$188.resolve();;
}));
PL$188.then(PL$184(function(){;
;
PL$187/*clearTempAr*/();;
PL$183.resolve(PL$91/*ret*/); return;;
PL$183.resolve(); return;;
}), PL$185)})();
return PL$183;
});
PL$37/*handlers*/["addInstance"] = (function(PL$124/*parContent*/, PL$76/*parPackage*/){
var PL$199 = new __Promise();
var PL$200 = function(code){ return function(res){ try{code(res);}catch(e){ PL$199.reject(e); }; }; };
var PL$201 = function(e){ PL$199.reject(e); };
var PL$134/*answer*/;
var PL$149/*instance*/;
var PL$125/*t*/;
var PL$86/*data*/;
var PL$107/*internalId*/;
PL$200(function(){;
PL$134/*answer*/ = PL$124/*parContent*/["createAnswer"]();
PL$149/*instance*/;
var PL$202 = new __Promise();
var PL$203 = new __Promise();
var PL$204/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$203.resolve(e); }; }; };
var PL$205 = function(e){ PL$203.resolve(e); };
PL$204/*try catch*/(function(){PL$125/*t*/ = PL$76/*parPackage*/["getTransport"]();
PL$86/*data*/ = PL$124/*parContent*/["getData"]();
PL$182/*getInstanceFromSyncData*/(PL$86/*data*/["data"], PL$124/*parContent*/).then(PL$204/*try catch*/(function(PL$206){PL$149/*instance*/ = PL$206;;
PL$107/*internalId*/ = PL$149/*instance*/["getInternalId"]();
PL$125/*t*/["addInstance"](PL$149/*instance*/, PL$86/*data*/["id"]);;
PL$134/*answer*/["setData"]({"id": PL$107/*internalId*/});;
PL$134/*answer*/["send"]();;
PL$124/*parContent*/["localPs"]["resolve"](PL$149/*instance*/);;
PL$199.resolve(); return;;
PL$202.resolve();
}), PL$205);
;})();
PL$203.then(PL$200(function(PL$26/*e*/){if(PL$149/*instance*/){
PL$149/*instance*/["track"]();;
};
;
PL$52/*console*/["log"]("answer error 3");;
PL$52/*console*/["log"](PL$26/*e*/);;
PL$134/*answer*/["setData"]({"err": PL$26/*e*/});;
PL$134/*answer*/["send"]();;
PL$124/*parContent*/["localPs"]["reject"](PL$26/*e*/);;
throw PL$26/*e*/;
PL$202.resolve();;
}));
PL$202.then(PL$200(function(){;
;
PL$199.resolve(); return;;
}), PL$201)})();
return PL$199;
});;
PL$37/*handlers*/["instance"] = (function(PL$124/*parContent*/, PL$76/*parPackage*/){
var PL$134/*answer*/;
var PL$149/*instance*/;
var PL$125/*t*/;
var PL$86/*data*/;
var PL$107/*internalId*/;
var PL$207/*realInstance*/;
;
PL$134/*answer*/ = PL$124/*parContent*/["createAnswer"]();
PL$149/*instance*/;
try
{PL$125/*t*/ = PL$76/*parPackage*/["getTransport"]();
PL$86/*data*/ = PL$124/*parContent*/["getData"]();
PL$107/*internalId*/ = PL$86/*data*/["remoteId"];
PL$207/*realInstance*/ = PL$3/*internalObjects*/[PL$107/*internalId*/];
if(PL$207/*realInstance*/){
PL$149/*instance*/ = new PL$5/*DynInstance*/(undefined, PL$207/*realInstance*/);;
PL$134/*answer*/["setData"]({});;
PL$134/*answer*/["send"]();;
PL$124/*parContent*/["localPs"]["resolve"](PL$149/*instance*/);;

}else{
throw PL$18/*errorMsg*/["missingImplementation"];
};
;
}catch(PL$26/*e*/){if(PL$149/*instance*/){
PL$149/*instance*/["track"]();;
};
;
PL$52/*console*/["log"]("answer error 4");;
PL$52/*console*/["log"](PL$26/*e*/);;
PL$134/*answer*/["setData"]({"err": PL$26/*e*/});;
PL$134/*answer*/["send"]();;
PL$124/*parContent*/["localPs"]["reject"](PL$26/*e*/);;
throw PL$26/*e*/;
};
;
;
});;
PL$163/*getTypeTransportData*/ = (function(PL$100/*parType*/, PL$124/*parContent*/){
var PL$125/*t*/;
var PL$104/*typeIds*/;
var PL$164/*request*/;
;
if(! PL$2/*classSystem*/["isSyncedClass"](PL$100/*parType*/)){
throw PL$18/*errorMsg*/["noSyncableData"];
};
;
PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
PL$104/*typeIds*/ = PL$125/*t*/["addType"](PL$100/*parType*/);
if((PL$104/*typeIds*/ && (PL$104/*typeIds*/["remoteId"] !== undefined))){
return PL$104/*typeIds*/["remoteId"];;
};
;
PL$164/*request*/ = PL$124/*parContent*/["newRequest"]();
PL$164/*request*/["setData"]({"type": "addType",
"syncId": PL$2/*classSystem*/["getSyncId"](PL$100/*parType*/),
"typeId": PL$104/*typeIds*/["id"]});;
PL$164/*request*/["send"]();;
(function(){
var PL$208 = new __Promise();
var PL$209 = function(code){ return function(res){ try{code(res);}catch(e){ PL$208.reject(e); }; }; };
var PL$210 = function(e){ PL$208.reject(e); };
var PL$134/*answer*/;
var PL$86/*data*/;
PL$209(function(){;
PL$164/*request*/["answerPs"].then(PL$209(function(PL$211){PL$134/*answer*/ = PL$211;
PL$86/*data*/ = PL$134/*answer*/["getData"]();
if(! PL$86/*data*/["err"]){
PL$104/*typeIds*/["remoteId"] = PL$86/*data*/["id"];;
};
;
PL$208.resolve(); return;;
}), PL$210);
;})();
return PL$208;
})();;
return [PL$164/*request*/["getId"]()];;
;
});
PL$192/*getTypeFromTransportData*/ = (function(PL$23/*parData*/, PL$124/*parContent*/){
var PL$212 = new __Promise();
var PL$213 = function(code){ return function(res){ try{code(res);}catch(e){ PL$212.reject(e); }; }; };
var PL$214 = function(e){ PL$212.reject(e); };
var PL$125/*t*/;
var PL$54/*type*/;
var PL$180/*req*/;
PL$213(function(){;
PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
PL$54/*type*/;
if((typeof PL$23/*parData*/ === "number")){
PL$54/*type*/ = PL$125/*t*/["getTypeById"](PL$23/*parData*/);;
PL$212.resolve(PL$54/*type*/); return;;
};
;
PL$180/*req*/ = PL$124/*parContent*/["getRequest"](PL$23/*parData*/[0]);
PL$180/*req*/["localPs"].then(PL$213(function(PL$215){PL$212.resolve(PL$215); return;;
PL$212.resolve(); return;;
}), PL$214);
;})();
return PL$212;
});
PL$216/*getRemoteType*/ = (function(PL$23/*parData*/, PL$124/*parContent*/){
var PL$125/*t*/;
;
if((typeof PL$23/*parData*/ == "number")){
PL$125/*t*/ = PL$124/*parContent*/["getTransport"]();
return PL$125/*t*/["getRemoteType"](PL$23/*parData*/);;
};
;
throw PL$18/*errorMsg*/["invalidRemoteType"];
;
});
PL$37/*handlers*/["addType"] = (function(PL$124/*parContent*/, PL$76/*parPackage*/){
var PL$134/*answer*/;
var PL$86/*data*/;
var PL$54/*type*/;
var PL$105/*typeIdInt*/;
var PL$125/*t*/;
var PL$104/*typeIds*/;
;
PL$134/*answer*/ = PL$124/*parContent*/["createAnswer"]();
PL$86/*data*/ = PL$124/*parContent*/["getData"]();
PL$54/*type*/ = PL$4/*getClassBySyncId*/(PL$86/*data*/["syncId"]);
if(! PL$54/*type*/){
PL$124/*parContent*/["localPs"]["reject"](PL$18/*errorMsg*/["remoteTypeNotAvailable"]);;
PL$134/*answer*/["setData"]({"err": PL$18/*errorMsg*/["remoteTypeNotAvailable"]});;
PL$134/*answer*/["send"]();;
return;;
};
;
PL$105/*typeIdInt*/ = PL$86/*data*/["typeId"];
PL$125/*t*/ = PL$76/*parPackage*/["getTransport"]();
PL$104/*typeIds*/ = PL$125/*t*/["addType"](PL$54/*type*/, PL$105/*typeIdInt*/);
PL$134/*answer*/["setData"]({"id": PL$104/*typeIds*/["id"]});;
PL$134/*answer*/["send"]();;
PL$124/*parContent*/["localPs"]["resolve"](PL$54/*type*/);;
;
});;
PL$217/*createRemoteExecRequest*/ = (function(PL$218/*par*/){
var PL$219 = new __Promise();
var PL$220 = function(code){ return function(res){ try{code(res);}catch(e){ PL$219.reject(e); }; }; };
var PL$221 = function(e){ PL$219.reject(e); };
var PL$118/*connection*/;
var PL$143/*funType*/;
var PL$144/*resultTypes*/;
var PL$164/*request*/;
var PL$130/*args*/;
var PL$24/*i*/;
var PL$134/*answer*/;
var PL$86/*data*/;
var PL$149/*instance*/;
var PL$91/*ret*/;
PL$220(function(){;
var PL$222 = new __Promise();
var PL$223 = new __Promise();
var PL$224/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$223.resolve(e); }; }; };
var PL$225 = function(e){ PL$223.resolve(e); };
PL$224/*try catch*/(function(){PL$118/*connection*/ = PL$218/*par*/["connection"];
PL$143/*funType*/ = PL$218/*par*/["funType"];
PL$144/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$143/*funType*/);
PL$164/*request*/ = PL$118/*connection*/["createRequest"]();
PL$130/*args*/ = [];
if((PL$218/*par*/["args"] && PL$218/*par*/["args"]["length"])){
PL$24/*i*/ = 0;
for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$218/*par*/["args"]["length"]);++PL$24/*i*/){{PL$130/*args*/["push"](PL$158/*getInstanceTransportData*/(PL$2/*classSystem*/["getFunctionArgumentType"](PL$143/*funType*/, PL$24/*i*/), PL$218/*par*/["args"][PL$24/*i*/], PL$164/*request*/));;
}};
;
};
;
PL$164/*request*/["setData"]({"type": "remoteexec",
"hashStr": PL$218/*par*/["hashStr"],
"nameStr": PL$218/*par*/["nameStr"],
"args": PL$130/*args*/});;
PL$164/*request*/["send"]();;
PL$164/*request*/["answerPs"].then(PL$224/*try catch*/(function(PL$226){PL$134/*answer*/ = PL$226;
PL$86/*data*/ = PL$134/*answer*/["getData"]();
if(PL$86/*data*/["err"]){
throw PL$86/*data*/["err"];
};
;
PL$150/*getInstanceFromTransportData*/(PL$86/*data*/["data"], PL$134/*answer*/).then(PL$224/*try catch*/(function(PL$227){PL$149/*instance*/ = PL$227;
PL$91/*ret*/ = PL$149/*instance*/["getInstanceAsType"](PL$144/*resultTypes*/["promiseResolveType"]);
PL$222.resolve();
}), PL$225);
;}), PL$225);
;})();
PL$223.then(PL$220(function(PL$26/*e*/){if(PL$149/*instance*/){
PL$149/*instance*/["track"]();;
};
;
PL$52/*console*/["log"]("createRemoteExecRequest error");;
PL$52/*console*/["log"](PL$26/*e*/);;
throw PL$26/*e*/;
PL$222.resolve();;
}));
PL$222.then(PL$220(function(){;
;
if(PL$149/*instance*/){
PL$149/*instance*/["track"]();;
};
;
PL$219.resolve(PL$91/*ret*/); return;;
PL$219.resolve(); return;;
}), PL$221)})();
return PL$219;
});
PL$228/*findProfile*/ = (function(PL$229/*profileNameStr*/){
;
return PL$20/*profiles*/[PL$229/*profileNameStr*/];;
;
});
PL$139/*getModuleData*/ = (function(PL$99/*parHash*/){
;
if(! PL$19/*moduleData*/[PL$99/*parHash*/]){
PL$19/*moduleData*/[PL$99/*parHash*/] = {"functions": {},
"classes": {}};;
};
;
return PL$19/*moduleData*/[PL$99/*parHash*/];;
;
});
PL$142/*promiseland*/["ProfileBaseClass"] = PL$29/*Profile*/;;
PL$142/*promiseland*/["ConnectionBaseClass"] = PL$31/*Connection*/;;
PL$142/*promiseland*/["addProfile"] = (function(PL$230/*parProfile*/){
;
if(! PL$230/*parProfile*/){
return;;
};
;
if(PL$20/*profiles*/[PL$230/*parProfile*/["name"]()]){
throw {"code": 4,
"msg": "profile exists"};
};
;
PL$20/*profiles*/[PL$230/*parProfile*/["name"]()] = PL$230/*parProfile*/;;
PL$230/*parProfile*/["on"]("connection", (function(PL$118/*connection*/){
;
PL$117/*prepConnection*/(PL$118/*connection*/, PL$230/*parProfile*/);;
;
}));;
;
});;
PL$142/*promiseland*/["profileHas"] = (function(PL$229/*profileNameStr*/){
;
if((PL$17/*config*/["profile"] === PL$229/*profileNameStr*/)){
return true;;
};
;
return false;;
;
});;
PL$142/*promiseland*/["registerRemote"] = (function(PL$229/*profileNameStr*/, PL$231/*hashStr*/, PL$232/*nameStr*/, PL$233/*fun*/, PL$143/*funType*/){
var PL$19/*moduleData*/;
var PL$103/*entry*/;
;
PL$19/*moduleData*/ = PL$139/*getModuleData*/(PL$231/*hashStr*/);
PL$103/*entry*/ = {"profile": PL$229/*profileNameStr*/,
"fun": PL$233/*fun*/,
"funType": PL$143/*funType*/};
PL$19/*moduleData*/["functions"][PL$232/*nameStr*/] = PL$103/*entry*/;;
PL$2/*classSystem*/["definitionPromise"](PL$143/*funType*/)["then"]((function(PL$234/*definedFunType*/){
;
PL$103/*entry*/["funType"] = PL$234/*definedFunType*/;;
;
}));;
;
});;
PL$142/*promiseland*/["remoteExec"] = (function(PL$231/*hashStr*/, PL$232/*nameStr*/, PL$130/*args*/){
var PL$19/*moduleData*/;
var PL$103/*entry*/;
var PL$119/*profile*/;
var PL$118/*connection*/;
var PL$144/*resultTypes*/;
var PL$235/*resultPromise*/;
;
PL$19/*moduleData*/ = PL$139/*getModuleData*/(PL$231/*hashStr*/);
if((! PL$19/*moduleData*/ || ! PL$19/*moduleData*/["functions"][PL$232/*nameStr*/])){
throw PL$18/*errorMsg*/["missingRemoteFun"];
};
;
PL$103/*entry*/ = PL$19/*moduleData*/["functions"][PL$232/*nameStr*/];
PL$119/*profile*/ = PL$228/*findProfile*/(PL$103/*entry*/["profile"]);
if(! PL$119/*profile*/){
throw PL$18/*errorMsg*/["frameNotFound"];
};
;
PL$118/*connection*/ = PL$119/*profile*/["find"]();
if(! PL$118/*connection*/){
throw {"code": 3,
"msg": "no connection available"};
};
;
PL$144/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$103/*entry*/["funType"]);
try
{PL$235/*resultPromise*/ = PL$144/*resultTypes*/["newPromise"]();
(function(){
var PL$236 = new __Promise();
var PL$237 = function(code){ return function(res){ try{code(res);}catch(e){ PL$236.reject(e); }; }; };
var PL$238 = function(e){ PL$236.reject(e); };
var PL$243/*tempRes*/;
var PL$244/*realRes*/;
PL$237(function(){;
var PL$239 = new __Promise();
var PL$240 = new __Promise();
var PL$241/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$240.resolve(e); }; }; };
var PL$242 = function(e){ PL$240.resolve(e); };
PL$241/*try catch*/(function(){PL$243/*tempRes*/ = PL$217/*createRemoteExecRequest*/({"connection": PL$118/*connection*/,
"hashStr": PL$231/*hashStr*/,
"nameStr": PL$232/*nameStr*/,
"args": PL$130/*args*/,
"funType": PL$103/*entry*/["funType"]});
PL$243/*tempRes*/.then(PL$241/*try catch*/(function(PL$245){PL$244/*realRes*/ = PL$245;
PL$144/*resultTypes*/["resolvePromise"](PL$235/*resultPromise*/, PL$244/*realRes*/);;
PL$239.resolve();
}), PL$242);
;})();
PL$240.then(PL$237(function(PL$26/*e*/){PL$144/*resultTypes*/["rejectPromise"](PL$235/*resultPromise*/, PL$26/*e*/);;
PL$239.resolve();;
}));
PL$239.then(PL$237(function(){;
;
PL$236.resolve(); return;;
}), PL$238)})();
return PL$236;
})();;
}catch(PL$26/*e*/){PL$144/*resultTypes*/["rejectPromise"](PL$235/*resultPromise*/, PL$26/*e*/);;
};
;
return PL$235/*resultPromise*/;;
;
});;
PL$11/*extra*/["moduleSystemPs"]["resolve"]({"getModuleData": PL$139/*getModuleData*/});;
PL$11/*extra*/["framesPs"]["resolve"]({"getInstanceFromTransportData": PL$150/*getInstanceFromTransportData*/,
"getInstanceTransportData": PL$158/*getInstanceTransportData*/,
"handlers": PL$37/*handlers*/});;
return;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();