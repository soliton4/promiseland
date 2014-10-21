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
if (promiseland._hasModule({ hashStr: "87e57e7e683429fe151c574c16453568" })){ return promiseland._getModule("87e57e7e683429fe151c574c16453568"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$26/*Promise*/;try{PL$26/*Promise*/ = Promise;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*errorMsg*/;
var PL$4/*getModuleData*/;
var PL$10/*frames*/;
var PL$11/*getInstanceFromTransportData*/;
var PL$12/*getInstanceTransportData*/;
var PL$13/*getEffectiveFunctionResultType*/;
;
;
PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
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
PL$10/*frames*/;
PL$11/*getInstanceFromTransportData*/;
PL$12/*getInstanceTransportData*/;
PL$13/*getEffectiveFunctionResultType*/;
return (function(PL$14/*classSystem*/, PL$15/*internals*/){
var PL$16/*privateClassSystem*/;
var PL$21/*cs*/;
var PL$22/*pcs*/;
var PL$23/*getClass*/;
var PL$24/*DynInstance*/;
var PL$25/*saveHandlerPs*/;
;
PL$16/*privateClassSystem*/ = PL$15/*internals*/["privateClassSystem"];
(function(){
var PL$17 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$19 = function(e){ PL$17.reject(e); };
PL$18(function(){;
PL$3/*extra*/["framesPs"].then(PL$18(function(PL$20){PL$10/*frames*/ = PL$20;;
PL$17.resolve(); return;;
}), PL$19);
;})();
return PL$17;
})();;
PL$21/*cs*/ = PL$14/*classSystem*/;
PL$22/*pcs*/ = PL$16/*privateClassSystem*/;
PL$23/*getClass*/ = PL$15/*internals*/["getClass"];
PL$24/*DynInstance*/ = PL$15/*internals*/["DynInstance"];
PL$25/*saveHandlerPs*/ = new PL$26/*Promise*/();
PL$22/*pcs*/["isSavableType"] = (function(PL$27/*parType*/){
var PL$28/*cDef*/;
;
if(PL$21/*cs*/["isVar"](PL$27/*parType*/)){
return true;;
};
;
PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
if(PL$28/*cDef*/["savable"]){
return true;;
};
;
return false;;
;
});;
PL$22/*pcs*/["registerSavableClass"] = (function(PL$27/*parType*/){
var PL$29 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.reject(e); }; }; };
var PL$31 = function(e){ PL$29.reject(e); };
var PL$32/*handler*/;
var PL$28/*cDef*/;
var PL$34/*propertiesAr*/;
var PL$35/*properties*/;
var PL$36/*map*/;
var PL$37/*i*/;
var PL$38/*mDef*/;
var PL$39/*p*/;
PL$30(function(){;
PL$25/*saveHandlerPs*/.then(PL$30(function(PL$33){PL$32/*handler*/ = PL$33;
PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
PL$34/*propertiesAr*/ = [];
PL$35/*properties*/ = {};
PL$36/*map*/ = PL$28/*cDef*/["map"];
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$36/*map*/["membersAr"]["length"]);++PL$37/*i*/){{if(! PL$22/*pcs*/["isSavableType"](PL$38/*mDef*/["type"])){
continue;;
};
;
PL$38/*mDef*/ = PL$36/*map*/["membersAr"][PL$37/*i*/];
PL$39/*p*/ = {"name": PL$38/*mDef*/["name"],
"type": PL$38/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$38/*mDef*/["type"])};
PL$34/*propertiesAr*/["push"](PL$39/*p*/);;
PL$35/*properties*/[PL$38/*mDef*/["name"]] = PL$39/*p*/;;
}};
;
try
{if(PL$32/*handler*/["registerClass"]){
PL$28/*cDef*/["saveHandler"] = PL$32/*handler*/["registerClass"]({"idType": PL$28/*cDef*/["idType"],
"properties": PL$35/*properties*/,
"propertiesAr": PL$34/*propertiesAr*/});;
};
;
}catch(PL$40/*e*/){};
;
PL$29.resolve(); return;;
}), PL$31);
;})();
return PL$29;
});;
PL$22/*pcs*/["saveInstance"] = (function(PL$27/*parType*/, PL$41/*parInstance*/){
var PL$42 = new __Promise();
var PL$43 = function(code){ return function(res){ try{code(res);}catch(e){ PL$42.reject(e); }; }; };
var PL$44 = function(e){ PL$42.reject(e); };
var PL$28/*cDef*/;
var PL$45/*h*/;
var PL$34/*propertiesAr*/;
var PL$35/*properties*/;
var PL$36/*map*/;
var PL$37/*i*/;
var PL$38/*mDef*/;
var PL$39/*p*/;
PL$43(function(){;
PL$28/*cDef*/ = PL$23/*getClass*/(PL$27/*parType*/);
PL$28/*cDef*/["saveHandler"].then(PL$43(function(PL$46){PL$45/*h*/ = PL$46;
PL$34/*propertiesAr*/ = [];
PL$35/*properties*/ = {};
PL$36/*map*/ = PL$28/*cDef*/["map"];
PL$37/*i*/ = 0;
for(PL$37/*i*/ = 0;(PL$37/*i*/ < PL$36/*map*/["membersAr"]["length"]);++PL$37/*i*/){{if(! PL$22/*pcs*/["isSavableType"](PL$38/*mDef*/["type"])){
continue;;
};
;
PL$38/*mDef*/ = PL$36/*map*/["membersAr"][PL$37/*i*/];
PL$39/*p*/ = {"name": PL$38/*mDef*/["name"],
"type": PL$38/*mDef*/["type"],
"isVar": PL$14/*classSystem*/["isVar"](PL$38/*mDef*/["type"]),
"value": (PL$14/*classSystem*/["isVar"](PL$38/*mDef*/["type"]) ? PL$41/*parInstance*/[PL$38/*mDef*/["index"]] : PL$22/*pcs*/["stringifyInstance"](PL$38/*mDef*/["type"], PL$41/*parInstance*/[PL$38/*mDef*/["index"]]))};
PL$34/*propertiesAr*/["push"](PL$39/*p*/);;
PL$35/*properties*/[PL$38/*mDef*/["name"]] = PL$39/*p*/;;
}};
;
PL$45/*h*/["save"]({"properties": PL$35/*properties*/,
"propertiesAr": PL$34/*propertiesAr*/});;
PL$42.resolve(); return;;
}), PL$44);
;})();
return PL$42;
});;
PL$21/*cs*/["setSaveHandler"] = (function(PL$47/*parSaveHandler*/){
;
PL$25/*saveHandlerPs*/["resolve"](PL$47/*parSaveHandler*/);;
;
});;
;
});;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();