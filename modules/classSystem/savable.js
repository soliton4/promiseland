(function(){var __modFun = function(__require){ __modFun = undefined;
var __execute = function(promiseland, extra){ __execute = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "4db9bfde40b6089f9ddcdaa969aab38f" })){ return promiseland._getModule("4db9bfde40b6089f9ddcdaa969aab38f"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$27/*Promise*/;try{PL$27/*Promise*/ = Promise;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  ;
  var PL$4/*getModuleData*/;
  ;
  (function(){
  var PL$5 = new __Promise();
  var PL$7/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$5.reject(e);
      };
    };
  };
  var PL$8/*catch rejected*/ = function(e){
    PL$5.reject(e);
  };
  PL$7/*promiseland exception catcher*/(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$7/*promiseland exception catcher*/(function(PL$9){PL$4/*getModuleData*/ = PL$9["getModuleData"];
    PL$5.resolve(); return;}), PL$8/*catch rejected*/);
    ;
  })();return PL$5;
  })();
  var PL$10/*frames*/;
  ;
  var PL$11/*getInstanceFromTransportData*/;
  ;
  var PL$12/*getInstanceTransportData*/;
  ;
  var PL$13/*getEffectiveFunctionResultType*/;
  ;
  return (function(PL$14/*classSystem*/, PL$15/*internals*/){
  
    ;
    var PL$16/*privateClassSystem*/ = PL$15/*internals*/["privateClassSystem"];
    ;
    (function(){
    var PL$17 = new __Promise();
    var PL$19/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$17.reject(e);
        };
      };
    };
    var PL$20/*catch rejected*/ = function(e){
      PL$17.reject(e);
    };
    PL$19/*promiseland exception catcher*/(function(){
    
      ;
      PL$3/*extra*/["framesPs"].then(PL$19/*promiseland exception catcher*/(function(PL$21){PL$10/*frames*/ = PL$21;
      PL$17.resolve(); return;}), PL$20/*catch rejected*/);
      ;
    })();return PL$17;
    })();
    var PL$22/*cs*/ = PL$14/*classSystem*/;
    ;
    var PL$23/*pcs*/ = PL$16/*privateClassSystem*/;
    ;
    var PL$24/*getClass*/ = PL$15/*internals*/["getClass"];
    ;
    var PL$25/*DynInstance*/ = PL$15/*internals*/["DynInstance"];
    ;
    var PL$26/*storageEnginePs*/ = new PL$27/*Promise*/();
    ;
    PL$23/*pcs*/["isSavableType"] = (function(PL$28/*parType*/, PL$29/*parName*/){
    
      ;
      if((PL$29/*parName*/ == "constructor")){
        return false;
      };
      ;
      if(PL$22/*cs*/["isVar"](PL$28/*parType*/)){
        return true;
      };
      ;
      var PL$30/*cDef*/ = PL$24/*getClass*/(PL$28/*parType*/);
      ;
      if(PL$30/*cDef*/["savable"]){
        return true;
      };
      ;
      return false;
      ;});
    PL$23/*pcs*/["registerSavableClass"] = (function(PL$28/*parType*/){
    var PL$31 = new __Promise();
    var PL$33/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$31.reject(e);
        };
      };
    };
    var PL$34/*catch rejected*/ = function(e){
      PL$31.reject(e);
    };
    var PL$30/*cDef*/;
    var PL$36/*engine*/;
    var PL$39/*propertiesAr*/;
    var PL$40/*properties*/;
    var PL$41/*map*/;
    var PL$42/*i*/;
    var PL$43/*mDef*/;
    var PL$44/*p*/;
    PL$33/*promiseland exception catcher*/(function(){
    
      ;
      PL$30/*cDef*/ = PL$24/*getClass*/(PL$28/*parType*/);
      
      var PL$35 = new __Promise();if(PL$30/*cDef*/["storageEngine"]){
        PL$36/*engine*/ = PL$30/*cDef*/["storageEngine"];
        PL$35.resolve();;
      }else{
      PL$26/*storageEnginePs*/.then(PL$33/*promiseland exception catcher*/(function(PL$37){PL$36/*engine*/ = PL$37;
      PL$35.resolve();;}), PL$34/*catch rejected*/);
      ;
      };PL$35.then(PL$33/*promiseland exception catcher*/(function(PL$38){PL$38;;
      ;
      PL$39/*propertiesAr*/ = [
        
      ];
      PL$40/*properties*/ = {
        
      };
      PL$41/*map*/ = PL$30/*cDef*/["map"];
      PL$42/*i*/ = 0;
      for(PL$42/*i*/ = 0;(PL$42/*i*/ < PL$41/*map*/["membersAr"]["length"]);++PL$42/*i*/){{
        PL$43/*mDef*/ = PL$41/*map*/["membersAr"][PL$42/*i*/];
        if((! PL$23/*pcs*/["isSavableType"](PL$43/*mDef*/["type"], PL$43/*mDef*/["name"]) || PL$43/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$44/*p*/ = {
          "name": PL$43/*mDef*/["name"],
          "type": PL$43/*mDef*/["type"],
          "isVar": PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"]),
          "defaultValue": (PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"]) ? PL$43/*mDef*/["defaultValue"] : PL$23/*pcs*/["stringifyInstance"](PL$43/*mDef*/["type"], PL$43/*mDef*/["defaultValue"]))
        };
        if(PL$43/*mDef*/["meta"]){
          PL$44/*p*/["meta"] = PL$43/*mDef*/["meta"];
        };
        ;
        PL$39/*propertiesAr*/["push"](PL$44/*p*/);
        PL$40/*properties*/[PL$43/*mDef*/["name"]] = PL$44/*p*/;}};
      ;
      try
      {
        if(PL$36/*engine*/["registerClass"]){
          PL$30/*cDef*/["storageHandler"] = PL$36/*engine*/["registerClass"]({
            "idType": PL$30/*cDef*/["idType"],
            "properties": PL$40/*properties*/,
            "propertiesAr": PL$39/*propertiesAr*/,
            "moduleName": PL$30/*cDef*/["moduleName"],
            "className": PL$30/*cDef*/["className"],
            "moduleHash": PL$30/*cDef*/["moduleHash"]
          });
        };
        ;}catch(PL$45/*e*/){};
      ;
      PL$31.resolve(); return;}), PL$34/*catch rejected*/);
      ;
    })();return PL$31;
    });
    PL$23/*pcs*/["saveInstance"] = (function(PL$28/*parType*/, PL$46/*parInstance*/){
    var PL$47 = new __Promise();
    var PL$49/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$47.reject(e);
        };
      };
    };
    var PL$50/*catch rejected*/ = function(e){
      PL$47.reject(e);
    };
    var PL$30/*cDef*/;
    var PL$51/*h*/;
    var PL$39/*propertiesAr*/;
    var PL$40/*properties*/;
    var PL$41/*map*/;
    var PL$42/*i*/;
    var PL$43/*mDef*/;
    var PL$44/*p*/;
    PL$49/*promiseland exception catcher*/(function(){
    
      ;
      PL$30/*cDef*/ = PL$24/*getClass*/(PL$28/*parType*/);
      PL$30/*cDef*/["storageHandler"].then(PL$49/*promiseland exception catcher*/(function(PL$52){PL$51/*h*/ = PL$52;
      PL$39/*propertiesAr*/ = [
        
      ];
      PL$40/*properties*/ = {
        
      };
      PL$41/*map*/ = PL$30/*cDef*/["map"];
      PL$42/*i*/ = 0;
      for(PL$42/*i*/ = 0;(PL$42/*i*/ < PL$41/*map*/["membersAr"]["length"]);++PL$42/*i*/){{
        PL$43/*mDef*/ = PL$41/*map*/["membersAr"][PL$42/*i*/];
        if((! PL$23/*pcs*/["isSavableType"](PL$43/*mDef*/["type"], PL$43/*mDef*/["name"]) || PL$43/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$44/*p*/ = {
          "name": PL$43/*mDef*/["name"],
          "type": PL$43/*mDef*/["type"],
          "isVar": PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"]),
          "value": (PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"]) ? PL$46/*parInstance*/[PL$43/*mDef*/["index"]] : PL$23/*pcs*/["stringifyInstance"](PL$43/*mDef*/["type"], PL$46/*parInstance*/[PL$43/*mDef*/["index"]]))
        };
        PL$39/*propertiesAr*/["push"](PL$44/*p*/);
        PL$40/*properties*/[PL$43/*mDef*/["name"]] = PL$44/*p*/;}};
      ;
      PL$51/*h*/["save"]({
        "properties": PL$40/*properties*/,
        "propertiesAr": PL$39/*propertiesAr*/
      }).then(PL$49/*promiseland exception catcher*/(function(PL$53){PL$47.resolve(PL$53); return;
      PL$47.resolve(); return;}), PL$50/*catch rejected*/);
      ;}), PL$50/*catch rejected*/);
      ;
    })();return PL$47;
    });
    PL$23/*pcs*/["loadInstance"] = (function(PL$28/*parType*/, PL$46/*parInstance*/){
    var PL$54 = new __Promise();
    var PL$56/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$54.reject(e);
        };
      };
    };
    var PL$57/*catch rejected*/ = function(e){
      PL$54.reject(e);
    };
    var PL$30/*cDef*/;
    var PL$51/*h*/;
    var PL$39/*propertiesAr*/;
    var PL$40/*properties*/;
    var PL$41/*map*/;
    var PL$42/*i*/;
    var PL$43/*mDef*/;
    var PL$44/*p*/;
    var PL$59/*loadVar*/;
    PL$56/*promiseland exception catcher*/(function(){
    
      ;
      PL$30/*cDef*/ = PL$24/*getClass*/(PL$28/*parType*/);
      PL$30/*cDef*/["storageHandler"].then(PL$56/*promiseland exception catcher*/(function(PL$58){PL$51/*h*/ = PL$58;
      PL$39/*propertiesAr*/ = [
        
      ];
      PL$40/*properties*/ = {
        
      };
      PL$41/*map*/ = PL$30/*cDef*/["map"];
      PL$42/*i*/ = 0;
      for(PL$42/*i*/ = 0;(PL$42/*i*/ < PL$41/*map*/["membersAr"]["length"]);++PL$42/*i*/){{
        PL$43/*mDef*/ = PL$41/*map*/["membersAr"][PL$42/*i*/];
        if((! PL$23/*pcs*/["isSavableType"](PL$43/*mDef*/["type"], PL$43/*mDef*/["name"]) || PL$43/*mDef*/["noSave"])){
          continue;;
        };
        ;
        PL$44/*p*/ = {
          "name": PL$43/*mDef*/["name"],
          "type": PL$43/*mDef*/["type"],
          "isVar": PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"])
        };
        if((PL$43/*mDef*/["name"] == "id")){
          PL$44/*p*/["value"] = (PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"]) ? PL$46/*parInstance*/[PL$43/*mDef*/["index"]] : PL$23/*pcs*/["stringifyInstance"](PL$43/*mDef*/["type"], PL$46/*parInstance*/[PL$43/*mDef*/["index"]]));
        };
        ;
        PL$39/*propertiesAr*/["push"](PL$44/*p*/);
        PL$40/*properties*/[PL$43/*mDef*/["name"]] = PL$44/*p*/;}};
      ;
      PL$51/*h*/["load"]({
        "properties": PL$40/*properties*/,
        "propertiesAr": PL$39/*propertiesAr*/
      }).then(PL$56/*promiseland exception catcher*/(function(PL$60){PL$59/*loadVar*/ = PL$60;
      if(! PL$59/*loadVar*/){
        PL$54.resolve(); return;
      };
      ;
      for(PL$42/*i*/ = 0;(PL$42/*i*/ < PL$41/*map*/["membersAr"]["length"]);++PL$42/*i*/){{
        PL$43/*mDef*/ = PL$41/*map*/["membersAr"][PL$42/*i*/];
        if((! PL$23/*pcs*/["isSavableType"](PL$43/*mDef*/["type"], PL$43/*mDef*/["name"]) || PL$43/*mDef*/["noSave"])){
          continue;;
        };
        ;
        if(PL$23/*pcs*/["hasOwnProperty"](PL$59/*loadVar*/, PL$43/*mDef*/["name"])){
          if(PL$14/*classSystem*/["isVar"](PL$43/*mDef*/["type"])){
            PL$23/*pcs*/["setMemberByDefFromInstance"](PL$28/*parType*/, PL$46/*parInstance*/, PL$43/*mDef*/, PL$59/*loadVar*/[PL$43/*mDef*/["name"]]);
          }else{
          };
          ;
        };
        ;}};
      ;
      PL$54.resolve(); return;}), PL$57/*catch rejected*/);
      ;}), PL$57/*catch rejected*/);
      ;
    })();return PL$54;
    });
    PL$22/*cs*/["setStorageEngine"] = (function(PL$61/*parStorageEngine*/, PL$28/*parType*/){
    var PL$62 = new __Promise();
    var PL$64/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$62.reject(e);
        };
      };
    };
    var PL$65/*catch rejected*/ = function(e){
      PL$62.reject(e);
    };
    var PL$67/*type*/;
    var PL$30/*cDef*/;
    PL$64/*promiseland exception catcher*/(function(){
    
      ;
      
      var PL$66 = new __Promise();if(PL$28/*parType*/){
        PL$22/*cs*/["readyPromise"](PL$28/*parType*/).then(PL$64/*promiseland exception catcher*/(function(PL$68){PL$67/*type*/ = PL$68;
        PL$30/*cDef*/ = PL$24/*getClass*/(PL$67/*type*/);
        PL$30/*cDef*/["storageEngine"] = PL$61/*parStorageEngine*/;
        PL$23/*pcs*/["registerSavableClass"](PL$67/*type*/);
        PL$62.resolve(); return;
        PL$66.resolve();;}), PL$65/*catch rejected*/);
        ;
      }else{PL$66.resolve();
      };PL$66.then(PL$64/*promiseland exception catcher*/(function(PL$69){PL$69;;
      ;
      try
      {
        PL$26/*storageEnginePs*/["resolve"](PL$61/*parStorageEngine*/);}catch(__dummy){};
      ;
      PL$26/*storageEnginePs*/ = new PL$27/*Promise*/();
      PL$26/*storageEnginePs*/["resolve"](PL$61/*parStorageEngine*/);
      PL$62.resolve(); return;}), PL$65/*catch rejected*/);
      ;
    })();return PL$62;
    });
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); }; };
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    });
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
