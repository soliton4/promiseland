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
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "e02ea9e77178c417b1ff20412b988db7" })){ return promiseland._getModule("e02ea9e77178c417b1ff20412b988db7"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$40/*console*/;try{PL$40/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  var PL$4/*internalObjects*/ = {
    
  };
  var PL$5/*getModuleData*/;
  (function(){
  var PL$6 = new __Promise();
  var PL$8/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$6.reject(e);
      };
    };
  };
  var PL$9/*catch rejected*/ = function(e){
    PL$6.reject(e);
  };
  PL$8/*promiseland exception catcher*/(function(){
  
    ;
    PL$3/*extra*/["moduleSystemPs"].then(PL$8/*promiseland exception catcher*/(function(PL$10){PL$5/*getModuleData*/ = PL$10["getModuleData"];
    PL$6.resolve(); return;}), PL$9/*catch rejected*/);
    ;
  })();return PL$6;
  })();
  var PL$11/*frames*/;
  var PL$12/*getInstanceFromTransportData*/;
  var PL$13/*getInstanceTransportData*/;
  var PL$14/*getEffectiveFunctionResultType*/;
  return (function(PL$15/*classSystem*/, PL$16/*internals*/){
  var PL$53/*cs*/;
  var PL$36/*DynInstance*/;
  var PL$62/*currentTransport*/;
  
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
      PL$3/*extra*/["framesPs"].then(PL$19/*promiseland exception catcher*/(function(PL$21){PL$11/*frames*/ = PL$21;
      PL$12/*getInstanceFromTransportData*/ = PL$11/*frames*/["getInstanceFromTransportData"];
      PL$13/*getInstanceTransportData*/ = PL$11/*frames*/["getInstanceTransportData"];
      PL$11/*frames*/["handlers"]["sync2"] = (function(PL$22/*parContent*/, PL$23/*parPackage*/){
      var PL$24 = new __Promise();
      var PL$26/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$24.reject(e);
          };
        };
      };
      var PL$27/*catch rejected*/ = function(e){
        PL$24.reject(e);
      };
      var PL$32/*data*/;
      var PL$33/*t*/;
      var PL$34/*realInstance*/;
      var PL$35/*dynInstance*/;
      var PL$37/*valueInstance*/;
      PL$26/*promiseland exception catcher*/(function(){
      
        ;
        var PL$28 = new __Promise();
        var PL$29 = new __Promise();
        var PL$30/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.resolve(e); }; }; };
        var PL$31 = function(e){ PL$29.resolve(e); };
        PL$30/*try catch*/(function(){
          PL$32/*data*/ = PL$22/*parContent*/["getData"]();
          PL$33/*t*/ = PL$22/*parContent*/["getTransport"]();
          PL$34/*realInstance*/ = PL$4/*internalObjects*/[PL$32/*data*/["remoteId"]];
          PL$35/*dynInstance*/ = new PL$36/*DynInstance*/(undefined, PL$34/*realInstance*/);
          PL$12/*getInstanceFromTransportData*/(PL$32/*data*/["value"], PL$22/*parContent*/).then(PL$30/*try catch*/(function(PL$38){PL$37/*valueInstance*/ = PL$38;
          if(! PL$34/*realInstance*/){
            PL$37/*valueInstance*/["track"]();
            PL$24.resolve(); return;
          };
          ;
          PL$15/*classSystem*/["setMemberByIndex"](PL$35/*dynInstance*/, PL$32/*data*/["memberIdx"], PL$37/*valueInstance*/);
          PL$28.resolve();}), PL$31);
        ;})();
        PL$29.then(PL$26/*promiseland exception catcher*/(function(PL$39/*e*/){
          if(PL$37/*valueInstance*/){
            PL$37/*valueInstance*/["track"]();
          };
          ;
          if(PL$35/*dynInstance*/){
            PL$35/*dynInstance*/["track"]();
          };
          ;
          PL$40/*console*/["log"]("sync error");
          PL$40/*console*/["log"](PL$39/*e*/);
          PL$28.resolve();;}));
        PL$28.then(PL$26/*promiseland exception catcher*/(function(){;
        ;
        if(PL$37/*valueInstance*/){
          PL$37/*valueInstance*/["track"]();
        };
        ;
        if(PL$35/*dynInstance*/){
          PL$35/*dynInstance*/["track"]();
        };
        ;
        PL$24.resolve(); return;}), PL$27/*catch rejected*/)
      })();return PL$24;
      });
      PL$11/*frames*/["handlers"]["syncf"] = (function(PL$22/*parContent*/, PL$23/*parPackage*/){
      var PL$41 = new __Promise();
      var PL$43/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$41.reject(e);
          };
        };
      };
      var PL$44/*catch rejected*/ = function(e){
        PL$41.reject(e);
      };
      var PL$45/*argInstances*/;
      var PL$46/*clearUpArgs*/;
      var PL$32/*data*/;
      var PL$33/*t*/;
      var PL$34/*realInstance*/;
      var PL$35/*dynInstance*/;
      var PL$52/*funType*/;
      var PL$54/*resultTypes*/;
      var PL$55/*args*/;
      var PL$47/*i*/;
      var PL$61/*realArgs*/;
      var PL$63/*funResult*/;
      PL$43/*promiseland exception catcher*/(function(){
      
        ;
        PL$45/*argInstances*/ = [
          
        ];
        PL$46/*clearUpArgs*/ = (function(){
        
          ;
          var PL$47/*i*/;
          for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$45/*argInstances*/["length"]);++PL$47/*i*/){{
            PL$45/*argInstances*/[PL$47/*i*/]["track"]();}};
          ;
          PL$45/*argInstances*/ = [
            
          ];
          ;});
        var PL$48 = new __Promise();
        var PL$49 = new __Promise();
        var PL$50/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$49.resolve(e); }; }; };
        var PL$51 = function(e){ PL$49.resolve(e); };
        PL$50/*try catch*/(function(){
          PL$32/*data*/ = PL$22/*parContent*/["getData"]();
          PL$33/*t*/ = PL$22/*parContent*/["getTransport"]();
          PL$34/*realInstance*/ = PL$4/*internalObjects*/[PL$32/*data*/["remoteId"]];
          PL$35/*dynInstance*/ = new PL$36/*DynInstance*/(undefined, PL$34/*realInstance*/);
          PL$52/*funType*/ = PL$53/*cs*/["getMemberTypeByIndex"](PL$35/*dynInstance*/, PL$32/*data*/["memberIdx"]);
          PL$54/*resultTypes*/ = PL$14/*getEffectiveFunctionResultType*/(PL$52/*funType*/);
          PL$55/*args*/ = PL$32/*data*/["args"];
          PL$47/*i*/ = 0;
          PL$47/*i*/ = 0;var PL$57 = new __Promise();
          var PL$56 = function(){var PL$58 = new __Promise();
          if((PL$47/*i*/ < PL$55/*args*/["length"])){
          PL$12/*getInstanceFromTransportData*/(PL$55/*args*/[PL$47/*i*/], PL$22/*parContent*/).then(PL$50/*try catch*/(function(PL$59){PL$45/*argInstances*/["push"](PL$59);
          PL$58.resolve(true); return PL$58; /* continue */
          ;}), PL$51);
          ;}else{
          PL$58.resolve(false); return PL$58; /* break */
          
          };
          PL$58;return PL$58;
          };
          var PL$60 = function(){PL$56().then(function(contLoop){
          if (contLoop){++PL$47/*i*/;PL$60();}else{PL$57.resolve();};
          });
          };
          PL$60();
          PL$57.then(function(){;
          ;
          PL$52/*funType*/;
          PL$61/*realArgs*/ = [
            
          ];
          for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$55/*args*/["length"]);++PL$47/*i*/){{
            PL$61/*realArgs*/["push"](PL$45/*argInstances*/[PL$47/*i*/]["getInstanceAsType"](PL$15/*classSystem*/["getFunctionArgumentType"](PL$52/*funType*/, PL$47/*i*/)));}};
          ;
          PL$46/*clearUpArgs*/();
          PL$62/*currentTransport*/ = PL$33/*t*/;
          PL$63/*funResult*/ = PL$34/*realInstance*/[PL$32/*data*/["memberIdx"]]["apply"](PL$34/*realInstance*/, PL$61/*realArgs*/);
          if(PL$54/*resultTypes*/["isTemporary"]){
            PL$63/*funResult*/[1]();
          };
          ;
          PL$48.resolve();});})();
        PL$49.then(PL$43/*promiseland exception catcher*/(function(PL$39/*e*/){
          if(PL$35/*dynInstance*/){
            PL$35/*dynInstance*/["track"]();
          };
          ;
          PL$40/*console*/["log"]("syncf error");
          PL$40/*console*/["log"](PL$39/*e*/);
          PL$48.resolve();;}));
        PL$48.then(PL$43/*promiseland exception catcher*/(function(){;
        ;
        if(PL$35/*dynInstance*/){
          PL$35/*dynInstance*/["track"]();
        };
        ;
        PL$46/*clearUpArgs*/();
        PL$41.resolve(); return;}), PL$44/*catch rejected*/)
      })();return PL$41;
      });
      PL$17.resolve(); return;}), PL$20/*catch rejected*/);
      ;
    })();return PL$17;
    })();
    PL$53/*cs*/ = PL$15/*classSystem*/;
    var PL$64/*classHider*/ = PL$16/*internals*/["classHider"];
    var PL$65/*getClass*/ = PL$16/*internals*/["getClass"];
    var PL$66/*TrackedPromise*/ = PL$16/*internals*/["TrackedPromise"];
    PL$36/*DynInstance*/ = PL$16/*internals*/["DynInstance"];
    PL$14/*getEffectiveFunctionResultType*/ = PL$16/*internals*/["getEffectiveFunctionResultType"];
    var PL$67/*nextInternalId*/ = 1;
    var PL$68/*getNewInternalId*/ = (function(){
    
      ;
      return PL$67/*nextInternalId*/++;
      ;});
    PL$16/*internals*/["getNewInternalId"] = PL$68/*getNewInternalId*/;
    PL$16/*internals*/["internalObjects"] = PL$4/*internalObjects*/;
    var PL$69/*syncFun*/ = (function(PL$70/*parInstance*/, PL$71/*memberIdx*/, PL$72/*mType*/, PL$73/*value*/){
    
      ;
      var PL$74/*syncData*/ = PL$15/*classSystem*/["getSyncData"](PL$70/*parInstance*/);
      if(PL$74/*syncData*/){
        var PL$47/*i*/ = 0;
        for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$74/*syncData*/["transports"]["length"]);++PL$47/*i*/){{
          var PL$75/*transport*/ = PL$74/*syncData*/["transports"][PL$47/*i*/]["t"];
          var PL$76/*m*/ = PL$75/*transport*/["newMessage"]();
          PL$76/*m*/["setData"]({
            "type": "sync2",
            "remoteId": PL$75/*transport*/["getInstanceRemoteId"](PL$70/*parInstance*/),
            "memberIdx": PL$71/*memberIdx*/,
            "value": PL$13/*getInstanceTransportData*/(PL$72/*mType*/, PL$73/*value*/, PL$76/*m*/)
          });
          PL$76/*m*/["send"]();}};
        ;
      };
      ;
      ;});
    PL$16/*internals*/["syncFun"] = PL$69/*syncFun*/;
    PL$62/*currentTransport*/;
    var PL$77/*syncFunctionFun*/ = (function(PL$70/*parInstance*/, PL$71/*memberIdx*/, PL$72/*mType*/, PL$55/*args*/){
    
      ;
      var PL$78/*cTransport*/ = PL$62/*currentTransport*/;
      PL$62/*currentTransport*/ = undefined;
      var PL$74/*syncData*/ = PL$15/*classSystem*/["getSyncData"](PL$70/*parInstance*/);
      if(PL$74/*syncData*/){
        var PL$47/*i*/ = 0;
        for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$74/*syncData*/["transports"]["length"]);++PL$47/*i*/){{
          var PL$75/*transport*/ = PL$74/*syncData*/["transports"][PL$47/*i*/]["t"];
          if((PL$75/*transport*/ === PL$78/*cTransport*/)){
            continue;;
          };
          ;
          var PL$76/*m*/ = PL$75/*transport*/["newMessage"]();
          var PL$45/*argInstances*/ = [
            
          ];
          var PL$79/*j*/;
          for(PL$79/*j*/ = 0;(PL$79/*j*/ < PL$55/*args*/["length"]);++PL$79/*j*/){{
            var PL$80/*argType*/ = PL$53/*cs*/["getFunctionArgumentType"](PL$72/*mType*/, PL$79/*j*/);
            PL$45/*argInstances*/["push"](PL$13/*getInstanceTransportData*/(PL$80/*argType*/, PL$55/*args*/[PL$79/*j*/], PL$76/*m*/));}};
          ;
          PL$76/*m*/["setData"]({
            "type": "syncf",
            "remoteId": PL$75/*transport*/["getInstanceRemoteId"](PL$70/*parInstance*/),
            "memberIdx": PL$71/*memberIdx*/,
            "args": PL$45/*argInstances*/
          });
          PL$76/*m*/["send"]();}};
        ;
      };
      ;
      ;});
    PL$16/*internals*/["syncFunctionFun"] = PL$77/*syncFunctionFun*/;
    var PL$81/*destroySynced*/ = (function(PL$82/*parSyncData*/){
    
      ;
      if(! PL$82/*parSyncData*/){
        return;
      };
      ;
      var PL$74/*syncData*/ = PL$82/*parSyncData*/;
      var PL$83/*transports*/ = PL$74/*syncData*/["transports"]["slice"]();
      var PL$47/*i*/;
      for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$83/*transports*/["length"]);++PL$47/*i*/){{
        var PL$33/*t*/ = PL$83/*transports*/[PL$47/*i*/]["t"];
        PL$33/*t*/["removeInstance"](PL$74/*syncData*/["getInternalId"]());}};
      ;
      if(PL$74/*syncData*/["internalId"]){
        delete PL$4/*internalObjects*/[PL$74/*syncData*/["internalId"]];
      };
      ;
      ;});
    PL$16/*internals*/["destroySynced"] = PL$81/*destroySynced*/;
    var PL$84/*registerSyncClass*/ = (function(PL$85/*hashStr*/, PL$86/*nameStr*/, PL$87/*parType*/){
    
      ;
      var PL$88/*moduleData*/ = PL$5/*getModuleData*/(PL$85/*hashStr*/);
      PL$88/*moduleData*/["classes"][PL$86/*nameStr*/] = {
        "type": PL$87/*parType*/
      };
      ;});
    PL$16/*internals*/["registerSyncClass"] = PL$84/*registerSyncClass*/;
    var PL$89/*getClassBySyncId*/ = (function(PL$90/*parSyncId*/){
    
      ;
      var PL$88/*moduleData*/ = PL$5/*getModuleData*/(PL$90/*parSyncId*/["hash"]);
      if((PL$88/*moduleData*/ && PL$88/*moduleData*/["classes"][PL$90/*parSyncId*/["name"]])){
        return PL$88/*moduleData*/["classes"][PL$90/*parSyncId*/["name"]]["type"];
      };
      ;
      ;});
    PL$16/*internals*/["getClassBySyncId"] = PL$89/*getClassBySyncId*/;
    PL$53/*cs*/["isSyncedClass"] = (function(PL$87/*parType*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$87/*parType*/);
      if(PL$91/*cDef*/["sync"]){
        return true;
      };
      ;
      return false;
      ;});
    PL$53/*cs*/["isServe"] = (function(PL$87/*parType*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$87/*parType*/);
      if(PL$91/*cDef*/["syncServe"]){
        return true;
      };
      ;
      return false;
      ;});
    PL$53/*cs*/["getInternalId"] = (function(PL$70/*parInstance*/){
    
      ;
      var PL$92/*type*/ = PL$70/*parInstance*/[0];
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$92/*type*/);
      if(PL$91/*cDef*/["sync"]){
        var PL$74/*syncData*/ = PL$70/*parInstance*/[PL$91/*cDef*/["map"]["syncDataIdx"]]();
        return PL$74/*syncData*/["getInternalId"]();
      };
      ;
      return;
      ;});
    PL$53/*cs*/["getSyncData"] = (function(PL$70/*parInstance*/){
    
      ;
      var PL$92/*type*/ = PL$70/*parInstance*/[0];
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$92/*type*/);
      if(PL$91/*cDef*/["sync"]){
        return PL$70/*parInstance*/[PL$91/*cDef*/["map"]["syncDataIdx"]]();
      };
      ;
      return;
      ;});
    PL$53/*cs*/["getSyncId"] = (function(PL$87/*parType*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$87/*parType*/);
      return PL$91/*cDef*/["syncId"];
      ;});
    PL$53/*cs*/["addTransport"] = (function(PL$93/*parDynInstance*/, PL$94/*parTransport*/){
    
      ;
      var PL$74/*syncData*/ = this["getSyncData"](PL$93/*parDynInstance*/["instance"]);
      PL$74/*syncData*/["transports"]["push"]({
        "t": PL$94/*parTransport*/,
        "remove": (function(){
        
          ;
          ;})
      });
      if(((PL$74/*syncData*/["transports"]["length"] > 1) && ! PL$74/*syncData*/["track"])){
        PL$74/*syncData*/["track"] = PL$93/*parDynInstance*/["getTrack"]();
      };
      ;
      ;});
    PL$53/*cs*/["removeTransport"] = (function(PL$95/*parInternalId*/, PL$94/*parTransport*/){
    
      ;
      var PL$34/*realInstance*/ = PL$4/*internalObjects*/[PL$95/*parInternalId*/];
      if(! PL$34/*realInstance*/){
        return;
      };
      ;
      var PL$74/*syncData*/ = this["getSyncData"](PL$34/*realInstance*/);
      var PL$83/*transports*/ = PL$74/*syncData*/["transports"];
      var PL$96/*index*/ = - 1;
      var PL$47/*i*/;
      var PL$97/*l*/ = PL$83/*transports*/["length"];
      for(PL$47/*i*/ = 0;(PL$47/*i*/ < PL$97/*l*/);++PL$47/*i*/){{
        if((PL$83/*transports*/[PL$47/*i*/]["t"] === PL$94/*parTransport*/)){
          PL$83/*transports*/[PL$47/*i*/]["remove"]();
          PL$96/*index*/ = PL$47/*i*/;
          break;;
        };
        ;}};
      ;
      if((PL$96/*index*/ > - 1)){
        PL$83/*transports*/["splice"](PL$96/*index*/, 1);
      };
      ;
      if(((PL$74/*syncData*/["transports"]["length"] < 2) && PL$74/*syncData*/["track"])){
        var PL$98/*track*/ = PL$74/*syncData*/["track"];
        PL$74/*syncData*/["track"] = undefined;
        PL$98/*track*/();
      };
      ;
      ;});
    PL$53/*cs*/["getInstanceSyncData"] = (function(PL$93/*parDynInstance*/, PL$99/*parGetDataFun*/, PL$100/*parGetTypeFun*/){
    
      ;
      if(! PL$93/*parDynInstance*/){
        return;
      };
      ;
      var PL$92/*type*/ = PL$93/*parDynInstance*/["type"];
      var PL$101/*instance*/ = PL$93/*parDynInstance*/["instance"];
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$92/*type*/);
      if(! PL$91/*cDef*/["sync"]){
        throw PL$2/*errorMsg*/["notSyncable"];
      };
      ;
      var PL$102/*res*/ = [
        PL$100/*parGetTypeFun*/(PL$92/*type*/)
      ];
      var PL$103/*syncMembers*/ = PL$91/*cDef*/["syncMembers"];
      var PL$47/*i*/ = 0;
      var PL$97/*l*/ = PL$103/*syncMembers*/["length"];
      for(PL$47/*i*/;(PL$47/*i*/ < PL$97/*l*/);++PL$47/*i*/){{
        var PL$33/*t*/ = PL$103/*syncMembers*/[PL$47/*i*/]["type"];
        var PL$104/*d*/ = PL$101/*instance*/[PL$103/*syncMembers*/[PL$47/*i*/]["index"]];
        if(! this["isFunctionType"](PL$33/*t*/)){
          PL$102/*res*/["push"](PL$99/*parGetDataFun*/(PL$33/*t*/, PL$104/*d*/));
        };
        ;}};
      ;
      return PL$102/*res*/;
      ;});
    PL$53/*cs*/["setMemberByIndex"] = (function(PL$93/*parDynInstance*/, PL$105/*parIndex*/, PL$106/*parValueDynInstance*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$93/*parDynInstance*/["type"]);
      var PL$107/*mDef*/ = PL$91/*cDef*/["map"]["membersByIndex"][PL$105/*parIndex*/];
      return this["setMemberByDef"](PL$93/*parDynInstance*/, PL$107/*mDef*/, PL$106/*parValueDynInstance*/);
      ;});
    PL$53/*cs*/["getMemberTypeByIndex"] = (function(PL$93/*parDynInstance*/, PL$105/*parIndex*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$93/*parDynInstance*/["type"]);
      var PL$107/*mDef*/ = PL$91/*cDef*/["map"]["membersByIndex"][PL$105/*parIndex*/];
      return PL$107/*mDef*/["type"];
      ;});
    PL$53/*cs*/["getTrackerFromDynInstance"] = (function(PL$93/*parDynInstance*/){
    
      ;
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$93/*parDynInstance*/["type"]);
      var PL$108/*trackerIdx*/ = PL$91/*cDef*/["map"]["trackerIdx"];
      return PL$93/*parDynInstance*/["instance"][PL$108/*trackerIdx*/];
      ;});
    PL$53/*cs*/["getInstanceFromSyncData"] = (function(PL$109/*parData*/){
    
      ;
      var PL$92/*type*/ = PL$109/*parData*/[0];
      var PL$91/*cDef*/ = PL$65/*getClass*/(PL$92/*type*/);
      if(! PL$91/*cDef*/["sync"]){
        throw PL$2/*errorMsg*/["notSyncable"];
      };
      ;
      var PL$110/*isTracked*/ = this["isTrackedClass"](PL$92/*type*/);
      var PL$101/*instance*/ = new PL$36/*DynInstance*/(PL$92/*type*/, this["getTypeConstructor"](PL$92/*type*/)());
      try
      {
        var PL$103/*syncMembers*/ = PL$91/*cDef*/["syncMembers"];
        var PL$47/*i*/ = 0;
        var PL$97/*l*/ = PL$103/*syncMembers*/["length"];
        var PL$111/*nextData*/ = 1;
        for(PL$47/*i*/;(PL$47/*i*/ < PL$97/*l*/);++PL$47/*i*/){{
          var PL$33/*t*/ = PL$103/*syncMembers*/[PL$47/*i*/]["type"];
          if(this["isFunctionType"](PL$33/*t*/)){
            continue;;
          };
          ;
          this["setMemberByDef"](PL$101/*instance*/, PL$103/*syncMembers*/[PL$47/*i*/], PL$109/*parData*/[PL$111/*nextData*/]);
          ++PL$111/*nextData*/;}};
        ;}catch(PL$39/*e*/){
        PL$101/*instance*/["track"]();
        throw PL$39/*e*/;};
      ;
      return PL$101/*instance*/;
      ;});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();